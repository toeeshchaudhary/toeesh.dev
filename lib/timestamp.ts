// Timestamp helpers + recording types. Deliberately free of node:fs so the
// client player can import them — lib/recordings.ts is the server-only half.

export interface Chapter {
  /** seconds from the start of the recording */
  at: number;
  label: string;
}

export interface Cue {
  /** seconds from the start of the recording */
  at: number;
  text: string;
}

export interface Recording {
  slug: string;
  title: string;
  /** ISO date, e.g. 2026-06-23 */
  date: string;
  /** direct URL to the audio file on whatever host it lives on */
  audio: string;
  /** total length in seconds; 0 if unknown */
  duration: number;
  blurb: string;
  tags: string[];
  chapters: Chapter[];
  cues: Cue[];
  /** Precomputed amplitude envelope, 0..1 per bucket. Empty if not generated. */
  peaks: number[];
}

/**
 * Parses `mm:ss` or `hh:mm:ss` into seconds. Returns NaN on anything else so
 * callers can drop the line rather than silently anchoring it at 0:00.
 */
export function toSeconds(stamp: string): number {
  const parts = stamp.split(':').map((p) => Number(p.trim()));
  if (parts.length < 2 || parts.length > 3 || parts.some((n) => !Number.isFinite(n) || n < 0)) {
    return NaN;
  }
  return parts.reduce((total, n) => total * 60 + n, 0);
}

export function formatStamp(seconds: number): string {
  const s = Math.max(0, Math.floor(seconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const rest = s % 60;
  const mm = h > 0 ? String(m).padStart(2, '0') : String(m);
  return `${h > 0 ? `${h}:` : ''}${mm}:${String(rest).padStart(2, '0')}`;
}
