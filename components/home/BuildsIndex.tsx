import type { CSSProperties } from 'react';
import * as motion from 'motion/react-client';
import { revealContainer, revealItem, cardLift, tapPress } from '@/components/motion/variants';
import { BUILDS } from '@/lib/builds';

// The shelf — the individual ships that used to live only in prose on /lab.
// A hairline grid of plates; accent bleeds in on hover. Order: biggest /
// most recent builds first, tools after.
export default function BuildsIndex() {
  return (
    <motion.section
      className="container"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={revealContainer}
      style={{ marginTop: 'var(--section-gap)' }}
    >
      <motion.div className="section-kicker" variants={revealItem}>
        <span className="label" style={{ color: 'var(--bone)' }}>
          the shelf — selected builds
        </span>
        <span className="label">{BUILDS.length} ships · mostly open source</span>
      </motion.div>

      <motion.div className="builds-grid" variants={revealContainer}>
        {BUILDS.map((b) => (
          <motion.a
            key={b.name}
            href={b.href}
            target="_blank"
            rel="noreferrer"
            className="build-card"
            style={{ '--project-accent': b.color } as CSSProperties}
            variants={revealItem}
            whileHover={cardLift}
            whileTap={tapPress}
          >
            <div className="build-card__head">
              <span className="build-card__name">
                <span
                  className="code-badge"
                  style={{
                    background: b.color,
                    color: 'var(--field)',
                    width: '1.5rem',
                    height: '1.5rem',
                    fontWeight: 850,
                    fontSize: '0.6rem',
                  }}
                >
                  {b.bullet}
                </span>
                {b.name}
              </span>
              <span className="build-card__arrow" aria-hidden>
                ↗
              </span>
            </div>
            <p className="build-card__blurb">{b.blurb}</p>
            <span className="label build-card__tech">{b.tech}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}
