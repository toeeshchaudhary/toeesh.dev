// Precomputes waveform peaks so the browser never has to decode 35 minutes of
// audio. Usage: node scripts/waveform.mjs public/audio/foo.mp3 content/recordings/foo.peaks.json
// Needs ffmpeg on PATH. Re-run only when the audio file changes.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const [, , input, output, bucketsArg] = process.argv;
if (!input || !output) {
  console.error('usage: node scripts/waveform.mjs <audio> <out.json> [buckets]');
  process.exit(1);
}
const BUCKETS = Number(bucketsArg) || 800;

// Mono, 8kHz, signed 16-bit LE — plenty of resolution for an amplitude envelope
// and ~1/12th the bytes of the source rate.
const raw = execFileSync(
  'ffmpeg',
  ['-v', 'error', '-i', input, '-ac', '1', '-ar', '8000', '-f', 's16le', '-'],
  { maxBuffer: 1024 * 1024 * 512 },
);

const samples = new Int16Array(raw.buffer, raw.byteOffset, Math.floor(raw.length / 2));
const per = Math.floor(samples.length / BUCKETS);
const peaks = [];
for (let b = 0; b < BUCKETS; b += 1) {
  let max = 0;
  for (let i = b * per; i < (b + 1) * per; i += 1) {
    const v = Math.abs(samples[i]);
    if (v > max) max = v;
  }
  peaks.push(max);
}

// Normalise to 0..1 against the loudest bucket, then apply a gentle curve so
// quiet speech still reads as a bar instead of a flat line.
const loudest = Math.max(...peaks, 1);
const normalised = peaks.map((p) => Number(Math.pow(p / loudest, 0.65).toFixed(3)));

fs.writeFileSync(output, JSON.stringify(normalised));
console.log(`${output}: ${normalised.length} buckets from ${samples.length} samples`);
