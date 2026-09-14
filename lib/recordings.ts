import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { toSeconds, type Chapter, type Cue, type Recording } from './timestamp';

export { toSeconds, formatStamp } from './timestamp';
export type { Chapter, Cue, Recording } from './timestamp';

const recordingsDirectory = path.join(process.cwd(), 'content/recordings');

/**
 * Transcript body is the raw `[mm:ss] text` dump straight out of whatever
 * transcribed it — one cue per line. Lines without a leading stamp are
 * appended to the previous cue so a soft-wrapped export still works.
 */
function parseCues(body: string): Cue[] {
  const cues: Cue[] = [];
  for (const raw of body.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    const match = /^\[(\d{1,2}(?::\d{2}){1,2})\]\s*(.*)$/.exec(line);
    if (!match) {
      if (cues.length > 0) cues[cues.length - 1].text += ` ${line}`;
      continue;
    }
    const at = toSeconds(match[1]);
    if (Number.isNaN(at)) continue;
    cues.push({ at, text: match[2] });
  }
  return cues;
}

function parseChapters(raw: unknown): Chapter[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((c) => ({ at: toSeconds(String(c?.at ?? '')), label: String(c?.label ?? '') }))
    .filter((c) => !Number.isNaN(c.at) && c.label)
    .sort((a, b) => a.at - b.at);
}

/** Waveform peaks live beside the transcript as <slug>.peaks.json (see scripts/waveform.mjs). */
function readPeaks(slug: string): number[] {
  const file = path.join(recordingsDirectory, `${slug}.peaks.json`);
  if (!fs.existsSync(file)) return [];
  try {
    const parsed = JSON.parse(fs.readFileSync(file, 'utf8'));
    return Array.isArray(parsed) ? parsed.filter((n) => Number.isFinite(n)) : [];
  } catch {
    return [];
  }
}

function readRecording(slug: string): Recording {
  const file = fs.readFileSync(path.join(recordingsDirectory, `${slug}.md`), 'utf8');
  const { data, content } = matter(file);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ? String(data.date).slice(0, 10) : '',
    audio: data.audio ?? '',
    duration: Number.isFinite(Number(data.duration)) ? Number(data.duration) : 0,
    blurb: data.blurb ?? '',
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    chapters: parseChapters(data.chapters),
    cues: parseCues(content),
    peaks: readPeaks(slug),
  };
}

export function getRecordingSlugs(): string[] {
  if (!fs.existsSync(recordingsDirectory)) return [];
  return fs
    .readdirSync(recordingsDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getRecordings(): Recording[] {
  return getRecordingSlugs()
    .map(readRecording)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** Returns null for an unknown slug so the route can render notFound(). */
export function getRecording(slug: string): Recording | null {
  if (!getRecordingSlugs().includes(slug)) return null;
  return readRecording(slug);
}
