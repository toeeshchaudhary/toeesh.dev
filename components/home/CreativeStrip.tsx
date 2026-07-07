import * as motion from 'motion/react-client';
import { revealContainer, revealItem, tapPress } from '@/components/motion/variants';

const ITEMS = [
  { label: 'music', note: 'fl studio', href: 'https://open.spotify.com/user/pm1saf4ldgyr342za1kdc186p', ext: 'spotify' },
  { label: 'moodboard', note: '163 saves', href: 'https://www.cosmos.so/toeeshchaudhary', ext: 'cosmos' },
  { label: 'writing', note: 'musings archive', href: 'https://toeeshnetwork.vercel.app', ext: 'the network' },
];

export default function CreativeStrip() {
  return (
    <motion.section
      className="container"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={revealContainer}
      style={{ marginTop: 'var(--section-gap)' }}
    >
      <motion.div className="section-kicker" variants={revealItem}>
        <span className="label" style={{ color: 'var(--bone)' }}>
          off the clock
        </span>
        <span className="label">external links</span>
      </motion.div>
      <motion.div className="off-clock-grid" variants={revealContainer}>
        <motion.div className="off-clock-note" variants={revealItem}>
          <span className="label" style={{ color: 'var(--bone-3)' }}>
            elsewhere
          </span>
          <p style={{ marginTop: '1rem' }}>Music, moodboards, and writing live on separate platforms but share the same working style.</p>
        </motion.div>
        <div>
          {ITEMS.map((it) => (
            <motion.a
              key={it.label}
              href={it.href}
              className="strip-row"
              variants={revealItem}
              whileHover={{ x: 8 }}
              whileTap={tapPress}
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(120px, 0.25fr) minmax(0, 1fr) auto',
                alignItems: 'baseline',
                gap: '1rem',
                padding: '1.1rem',
                borderBottom: '1px solid var(--hairline)',
              }}
            >
              <span
                style={{
                  fontWeight: 850,
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                {it.label}
              </span>
              <span className="label">{it.note}</span>
              <span className="label" style={{ color: 'var(--bone)' }}>{it.ext} ↗</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
