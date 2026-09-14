'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import Waveform from '@/components/recorder/Waveform';
import { formatStamp, type Cue, type Recording } from '@/lib/timestamp';

const SPEEDS = [1, 1.25, 1.5, 2];

/** Splits a cue into alternating plain/matched runs so hits can be marked. */
function highlight(text: string, query: string) {
  if (!query) return [{ text, hit: false }];
  const out: { text: string; hit: boolean }[] = [];
  const haystack = text.toLowerCase();
  const needle = query.toLowerCase();
  let from = 0;
  for (;;) {
    const i = haystack.indexOf(needle, from);
    if (i === -1) break;
    if (i > from) out.push({ text: text.slice(from, i), hit: false });
    out.push({ text: text.slice(i, i + needle.length), hit: true });
    from = i + needle.length;
  }
  out.push({ text: text.slice(from), hit: false });
  return out;
}

export default function Player({ recording }: { recording: Recording }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const activeRef = useRef<HTMLLIElement>(null);
  const [at, setAt] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [follow, setFollow] = useState(true);
  const [query, setQuery] = useState('');

  const { audio, chapters, cues, peaks } = recording;
  const hasAudio = Boolean(audio);
  // Trust the real element once metadata lands; frontmatter is only the hint.
  const [duration, setDuration] = useState(recording.duration);

  const q = query.trim();
  const shown: Cue[] = useMemo(
    () => (q ? cues.filter((c) => c.text.toLowerCase().includes(q.toLowerCase())) : cues),
    [cues, q],
  );

  // Index of the cue/chapter currently playing: the last one that has started.
  const markAt = (marks: { at: number }[]) => {
    let i = -1;
    for (let n = 0; n < marks.length; n += 1) {
      if (marks[n].at <= at) i = n;
      else break;
    }
    return marks[i]?.at ?? -1;
  };
  const activeChapter = markAt(chapters);
  const activeCue = markAt(cues);
  const chapterLabel = chapters.find((c) => c.at === activeChapter)?.label ?? '';

  // Deep link from the index: /recorder/<slug>?t=915 parks the head at that
  // second. Read from location rather than useSearchParams so the page can stay
  // statically prerendered without a Suspense boundary.
  useEffect(() => {
    const t = Number(new URLSearchParams(window.location.search).get('t'));
    if (!Number.isFinite(t) || t <= 0) return;
    setAt(t);
    const el = audioRef.current;
    if (!el) return;
    const park = () => {
      el.currentTime = t;
    };
    if (el.readyState > 0) park();
    else el.addEventListener('loadedmetadata', park, { once: true });
  }, []);

  // Keep the playing line in view, but never fight a user who is reading ahead
  // or filtering — follow is off while a search is active.
  useEffect(() => {
    if (!follow || q || !playing) return;
    activeRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, [activeCue, follow, q, playing]);

  function seek(seconds: number) {
    const el = audioRef.current;
    if (!el) return;
    el.currentTime = seconds;
    setAt(seconds);
  }

  function toggle() {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) void el.play().catch(() => setPlaying(false));
    else el.pause();
  }

  function nudge(by: number) {
    seek(Math.min(duration || Infinity, Math.max(0, at + by)));
  }

  function cycleSpeed() {
    const next = SPEEDS[(SPEEDS.indexOf(speed) + 1) % SPEEDS.length];
    setSpeed(next);
    if (audioRef.current) audioRef.current.playbackRate = next;
  }

  const remaining = duration > 0 ? duration - at : 0;

  return (
    <div className="player" style={{ '--project-accent': 'var(--chip-blue)' } as CSSProperties}>
      {hasAudio ? (
        <audio
          ref={audioRef}
          src={audio}
          preload="metadata"
          onLoadedMetadata={(e) => {
            if (Number.isFinite(e.currentTarget.duration)) setDuration(e.currentTarget.duration);
          }}
          onTimeUpdate={(e) => setAt(e.currentTarget.currentTime)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />
      ) : null}

      <div className="player__deck">
        <div className="player__readout">
          <span className="player__now">{formatStamp(at)}</span>
          <span className="label player__left">
            −{formatStamp(remaining)} {chapterLabel ? `· ${chapterLabel}` : ''}
          </span>
        </div>

        <Waveform
          peaks={peaks}
          duration={duration}
          at={at}
          chapters={chapters}
          onSeek={seek}
          disabled={!hasAudio}
        />

        <div className="player__transport">
          <button
            type="button"
            className="player__play"
            onClick={toggle}
            disabled={!hasAudio}
            aria-label={playing ? 'pause' : 'play'}
          >
            {playing ? '❚❚' : '▶'}
          </button>
          <button type="button" className="label player__btn" onClick={() => nudge(-15)} disabled={!hasAudio}>
            −15s
          </button>
          <button type="button" className="label player__btn" onClick={() => nudge(30)} disabled={!hasAudio}>
            +30s
          </button>
          <button type="button" className="label player__btn" onClick={cycleSpeed} disabled={!hasAudio}>
            {speed}×
          </button>
          <button
            type="button"
            className="label player__btn"
            data-active={follow}
            onClick={() => setFollow((v) => !v)}
            aria-pressed={follow}
          >
            follow {follow ? 'on' : 'off'}
          </button>
        </div>

        {!hasAudio ? (
          <p className="label rec__missing">audio not published yet — transcript only</p>
        ) : null}
      </div>

      {chapters.length > 0 ? (
        <nav className="rec__chapters" aria-label="chapters">
          {chapters.map((c) => (
            <button
              key={`${c.at}-${c.label}`}
              type="button"
              className="rec__chapter"
              data-active={c.at === activeChapter}
              disabled={!hasAudio}
              onClick={() => seek(c.at)}
            >
              <span className="rec__chapter-at">{formatStamp(c.at)}</span>
              {c.label}
            </button>
          ))}
        </nav>
      ) : null}

      {cues.length > 0 ? (
        <>
          <div className="rec__search">
            <input
              type="search"
              className="rec__search-input"
              placeholder="search the transcript…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="search the transcript"
            />
            <span className="label rec__search-count">
              {q ? `${shown.length} of ${cues.length} lines` : `${cues.length} lines`}
            </span>
          </div>

          {shown.length === 0 ? (
            <p className="label rec__missing">no lines match “{q}”.</p>
          ) : (
            <ol className="rec__transcript">
              {shown.map((cue, i) => {
                const isActive = cue.at === activeCue;
                return (
                  <li key={`${cue.at}-${i}`} ref={isActive ? activeRef : null}>
                    <button
                      type="button"
                      className="rec__cue"
                      data-active={isActive}
                      disabled={!hasAudio}
                      onClick={() => seek(cue.at)}
                    >
                      <span className="rec__cue-at">{formatStamp(cue.at)}</span>
                      <span>
                        {highlight(cue.text, q).map((run, n) =>
                          run.hit ? <mark key={n}>{run.text}</mark> : <span key={n}>{run.text}</span>,
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          )}
        </>
      ) : null}
    </div>
  );
}
