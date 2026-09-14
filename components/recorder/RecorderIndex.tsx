'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import Sparkline from '@/components/recorder/Sparkline';
import { formatStamp, type Cue, type Recording } from '@/lib/timestamp';
import { revealContainer, revealItem } from '@/components/motion/variants';

const MAX_HITS = 4;

/** Trims a long cue down to a window around the match, so hits stay scannable. */
function snippet(text: string, q: string, span = 90) {
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i === -1) return text.slice(0, span);
  const start = Math.max(0, i - Math.floor(span / 3));
  const end = Math.min(text.length, start + span);
  return `${start > 0 ? '…' : ''}${text.slice(start, end)}${end < text.length ? '…' : ''}`;
}

function mark(text: string, q: string) {
  if (!q) return text;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark>{text.slice(i, i + q.length)}</mark>
      {text.slice(i + q.length)}
    </>
  );
}

export default function RecorderIndex({ recordings }: { recordings: Recording[] }) {
  const [tag, setTag] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const tags = useMemo(
    () => [...new Set(recordings.flatMap((r) => r.tags))].sort(),
    [recordings],
  );

  const totals = useMemo(
    () => ({
      seconds: recordings.reduce((n, r) => n + r.duration, 0),
      lines: recordings.reduce((n, r) => n + r.cues.length, 0),
      topics: recordings.reduce((n, r) => n + r.chapters.length, 0),
    }),
    [recordings],
  );

  const q = query.trim();
  const needle = q.toLowerCase();

  const shown = useMemo(() => {
    const byTag = tag ? recordings.filter((r) => r.tags.includes(tag)) : recordings;
    if (!needle) return byTag.map((r) => ({ r, hits: [] as Cue[] }));
    return byTag
      .map((r) => ({ r, hits: r.cues.filter((c) => c.text.toLowerCase().includes(needle)) }))
      .filter(({ r, hits }) => hits.length > 0 || r.title.toLowerCase().includes(needle));
  }, [recordings, tag, needle]);

  const totalHits = shown.reduce((n, s) => n + s.hits.length, 0);

  if (recordings.length === 0) {
    return (
      <p className="label" style={{ color: 'var(--bone-3)' }}>
        nothing published yet.
      </p>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={revealContainer}
      style={{ marginTop: 'clamp(2rem, 5vh, 3rem)' }}
    >
      <motion.dl className="rec-totals" variants={revealItem}>
        <div>
          <dt className="label">recordings</dt>
          <dd>{recordings.length}</dd>
        </div>
        <div>
          <dt className="label">on tape</dt>
          <dd>{formatStamp(totals.seconds)}</dd>
        </div>
        <div>
          <dt className="label">topics</dt>
          <dd>{totals.topics}</dd>
        </div>
        <div>
          <dt className="label">lines</dt>
          <dd>{totals.lines}</dd>
        </div>
      </motion.dl>

      <motion.div className="rec__search" variants={revealItem}>
        <input
          type="search"
          className="rec__search-input"
          placeholder="search every transcript…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="search every transcript"
        />
        <span className="label rec__search-count">
          {q
            ? `${totalHits} line${totalHits === 1 ? '' : 's'} in ${shown.length} recording${shown.length === 1 ? '' : 's'}`
            : `${recordings.length} recording${recordings.length === 1 ? '' : 's'}`}
        </span>
      </motion.div>

      {tags.length > 1 ? (
        <motion.div className="filter-row" variants={revealItem}>
          <button
            type="button"
            className="label filter-chip"
            data-active={tag === null}
            onClick={() => setTag(null)}
          >
            all ({recordings.length})
          </button>
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              className="label filter-chip"
              data-active={tag === t}
              onClick={() => setTag(t)}
            >
              {t}
            </button>
          ))}
        </motion.div>
      ) : null}

      {shown.length === 0 ? (
        <p className="label rec__missing">nothing matches “{q}”.</p>
      ) : null}

      <motion.div className="rec-list" variants={revealContainer}>
        {shown.map(({ r, hits }) => (
          <motion.article key={r.slug} className="rec-card" variants={revealItem}>
            <Link href={`/recorder/${r.slug}`} className="rec-card__lead">
              <div className="rec__head">
                <h3 className="rec__title">{r.title}</h3>
                <span className="label rec__meta">
                  {r.date}
                  {r.duration > 0 ? ` · ${formatStamp(r.duration)}` : ''}
                </span>
              </div>
              <Sparkline peaks={r.peaks} />
              {r.blurb ? <p className="rec__blurb">{r.blurb}</p> : null}
            </Link>

            {hits.length > 0 ? (
              <ul className="rec-card__hits">
                {hits.slice(0, MAX_HITS).map((c, i) => (
                  <li key={`${c.at}-${i}`}>
                    <Link href={`/recorder/${r.slug}?t=${Math.floor(c.at)}`} className="rec-card__hit">
                      <span className="rec__cue-at">{formatStamp(c.at)}</span>
                      <span>{mark(snippet(c.text, q), q)}</span>
                    </Link>
                  </li>
                ))}
                {hits.length > MAX_HITS ? (
                  <li className="label rec-card__more">+{hits.length - MAX_HITS} more lines</li>
                ) : null}
              </ul>
            ) : (
              <div className="rec-card__topics">
                {r.chapters.map((c) => (
                  <Link
                    key={`${c.at}-${c.label}`}
                    href={`/recorder/${r.slug}?t=${Math.floor(c.at)}`}
                    className="rec__chapter"
                  >
                    <span className="rec__chapter-at">{formatStamp(c.at)}</span>
                    {c.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href={`/recorder/${r.slug}`} className="label rec__open">
              {r.chapters.length} topics · {r.cues.length} lines · listen ↗
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
}
