// Self-check for the transcript parser. Run: bun scripts/check-recordings.ts
import assert from 'node:assert/strict';
import { toSeconds, formatStamp } from '../lib/timestamp';
import { getRecordings } from '../lib/recordings';

assert.equal(toSeconds('0:00'), 0);
assert.equal(toSeconds('5:17'), 317);
assert.equal(toSeconds('1:02:03'), 3723);
assert.ok(Number.isNaN(toSeconds('17')), 'bare number is not a timestamp');
assert.ok(Number.isNaN(toSeconds('a:bc')), 'garbage is not a timestamp');

assert.equal(formatStamp(0), '0:00');
assert.equal(formatStamp(317), '5:17');
assert.equal(formatStamp(3723), '1:02:03');

for (const r of getRecordings()) {
  assert.ok(r.cues.length > 0, `${r.slug} parsed no transcript cues`);
  assert.ok(r.date, `${r.slug} has no date`);
  // Cues and chapters must run forward, or click-to-seek lands in the wrong place.
  for (let i = 1; i < r.cues.length; i += 1) {
    assert.ok(r.cues[i].at >= r.cues[i - 1].at, `${r.slug} cue ${i} goes backwards`);
  }
  for (const c of r.chapters) {
    assert.ok(
      r.duration === 0 || c.at <= r.duration,
      `${r.slug} chapter "${c.label}" is past the end`,
    );
  }
}

console.log('recordings ok');
