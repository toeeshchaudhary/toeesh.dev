'use client';

import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import { motion } from 'motion/react';
import { BUILDS, BUILD_TAGS, type Build } from '@/lib/builds';
import { revealContainer, revealItem, cardLift, tapPress } from '@/components/motion/variants';

// Three flagships get real estate; everything else is a dense index row.
// A grid of 18 identical cards says every project matters equally — they don't.
const ORDER: Build['scale'][] = ['flagship', 'major', 'tool', 'experiment'];
const GROUP_LABEL: Record<Build['scale'], string> = {
  flagship: 'flagships',
  major: 'major builds',
  tool: 'tools I use',
  experiment: 'experiments',
};

function Bullet({ b, size }: { b: Build; size: number }) {
  return (
    <span
      className="code-badge"
      style={{
        background: b.color,
        color: 'var(--field)',
        width: `${size}rem`,
        height: `${size}rem`,
        fontWeight: 850,
        fontSize: `${size * 0.36}rem`,
        flex: 'none',
      }}
    >
      {b.bullet}
    </span>
  );
}

export default function ProjectsIndex() {
  const [tag, setTag] = useState<string | null>(null);

  const shown = tag ? BUILDS.filter((b) => b.tags.includes(tag)) : BUILDS;
  const featured = shown.filter((b) => b.scale === 'flagship');
  const rest = useMemo(
    () =>
      ORDER.slice(1)
        .map((scale) => ({ scale, items: shown.filter((b) => b.scale === scale) }))
        .filter((g) => g.items.length > 0),
    [shown],
  );

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={revealContainer}
      style={{ marginTop: 'clamp(2rem, 5vh, 3rem)' }}
    >
      <motion.div className="filter-row" variants={revealItem}>
        <button
          type="button"
          className="label filter-chip"
          data-active={tag === null}
          onClick={() => setTag(null)}
        >
          all ({BUILDS.length})
        </button>
        {BUILD_TAGS.map((t) => {
          const count = BUILDS.filter((b) => b.tags.includes(t)).length;
          if (count === 0) return null;
          return (
            <button
              key={t}
              type="button"
              className="label filter-chip"
              data-active={tag === t}
              onClick={() => setTag(t)}
            >
              {t} ({count})
            </button>
          );
        })}
      </motion.div>

      {featured.length > 0 ? (
        <motion.div className="feature-row" variants={revealContainer}>
          {featured.map((b) => (
            <motion.a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="noreferrer"
              className="feature-card"
              style={{ '--project-accent': b.color } as CSSProperties}
              variants={revealItem}
              whileHover={cardLift}
              whileTap={tapPress}
            >
              <div className="feature-card__head">
                <Bullet b={b} size={2.5} />
                <span className="label feature-card__status">{b.status}</span>
              </div>
              <h3 className="feature-card__name">{b.name}</h3>
              <p className="feature-card__blurb">{b.blurb}</p>
              <span className="label feature-card__tech">
                {b.tech} <span className="feature-card__arrow">↗</span>
              </span>
            </motion.a>
          ))}
        </motion.div>
      ) : null}

      {rest.map(({ scale, items }) => (
        <motion.section key={scale} className="index-group" variants={revealContainer}>
          <motion.div className="section-kicker" variants={revealItem}>
            <span className="label" style={{ color: 'var(--bone)' }}>
              {GROUP_LABEL[scale]}
            </span>
            <span className="label">
              {items.length} {items.length === 1 ? 'entry' : 'entries'}
            </span>
          </motion.div>

          <motion.ol className="index-rows" variants={revealContainer}>
            {items.map((b, i) => (
              <motion.li key={b.name} variants={revealItem}>
                <a
                  href={b.href}
                  target="_blank"
                  rel="noreferrer"
                  className="index-row"
                  style={{ '--project-accent': b.color } as CSSProperties}
                >
                  <span className="index-row__num">{String(i + 1).padStart(2, '0')}</span>
                  <Bullet b={b} size={1.6} />
                  <span className="index-row__name">{b.name}</span>
                  <span className="index-row__blurb">{b.blurb}</span>
                  <span className="label index-row__tech">{b.tech}</span>
                  <span className="index-row__arrow" aria-hidden>
                    ↗
                  </span>
                </a>
              </motion.li>
            ))}
          </motion.ol>
        </motion.section>
      ))}
    </motion.div>
  );
}
