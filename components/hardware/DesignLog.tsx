import * as motion from 'motion/react-client';
import { revealContainer, revealItem } from '@/components/motion/variants';

// The honest state of Navigator. It is a design, not a device — this board
// says which decisions are actually settled and which are still open, so the
// page can't read as if something has been built that hasn't.
// Source: "Navigator Ecosystem — Architecture Notes v0.1", July 2026.
type State = 'settled' | 'open' | 'next';

const STATE_LABEL: Record<State, string> = {
  settled: 'settled',
  open: 'in progress',
  next: 'not started',
};

const STATE_COLOR: Record<State, string> = {
  settled: 'var(--chip-green)',
  open: 'var(--chip-yellow)',
  next: 'var(--hairline-strong)',
};

const LOG: { item: string; state: State; note: string }[] = [
  {
    item: 'system block diagram',
    state: 'settled',
    note: 'Two-chip split fixed: Linux host plus an always-on butler MCU.',
  },
  {
    item: 'CommLink architecture',
    state: 'settled',
    note: 'One connector, one protocol, auto-enumeration, isolated rails.',
  },
  {
    item: 'design principles',
    state: 'settled',
    note: 'Calm, repairable, modular, offline-first, long-lived, hackable.',
  },
  {
    item: 'compute module choice',
    state: 'open',
    note: 'Raspberry Pi Zero 2 W against its alternatives — not locked in.',
  },
  {
    item: 'power budget',
    state: 'open',
    note: 'Per-rail draw and real battery life, worst case first.',
  },
  { item: 'KiCad', state: 'open', note: 'Learning it well enough to draw the real board.' },
  { item: 'keyboard matrix prototype', state: 'next', note: 'Breadboard first, scan it from the butler.' },
  { item: 'LTE module research', state: 'next', note: 'Optional radio over CommLink.' },
  { item: 'first enclosure', state: 'next', note: 'Thin case, swappable cell, openable without tools.' },
];

export default function DesignLog() {
  const settled = LOG.filter((l) => l.state === 'settled').length;

  return (
    <motion.section
      className="schema"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={revealContainer}
    >
      <motion.div className="section-kicker" variants={revealItem}>
        <span className="label" style={{ color: 'var(--bone)' }}>
          design log — where navigator actually is
        </span>
        <span className="label">
          {settled} of {LOG.length} settled
        </span>
      </motion.div>

      <motion.ol className="log" variants={revealContainer}>
        {LOG.map((l, i) => (
          <motion.li key={l.item} className="log__row" variants={revealItem}>
            <span className="log__num">{String(i + 1).padStart(2, '0')}</span>
            <span className="log__dot" style={{ background: STATE_COLOR[l.state] }} aria-hidden />
            <span className="log__item">{l.item}</span>
            <span className="log__note">{l.note}</span>
            <span className="label log__state" style={{ color: STATE_COLOR[l.state] }}>
              {STATE_LABEL[l.state]}
            </span>
          </motion.li>
        ))}
      </motion.ol>

      <motion.p className="label log__foot" variants={revealItem}>
        nothing here is fabricated progress — Navigator is a design on paper, and this is which
        parts of the paper are finished.
      </motion.p>
    </motion.section>
  );
}
