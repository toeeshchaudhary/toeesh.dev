import Link from 'next/link';
import type { CSSProperties } from 'react';
import * as motion from 'motion/react-client';
import { revealContainer, revealItem, tapPress } from '@/components/motion/variants';

// The duty roster — current appointments, read like a transit crew board.
// Roles the portfolio pages then prove out in detail.
const ROLES = [
  {
    href: '/hardware',
    bullet: 'A',
    color: 'var(--red)',
    org: 'ARKANOX',
    title: 'Hardware Lead · electrical & computer engineering startup',
    period: '2026',
    now: true,
  },
  {
    href: '/lab',
    bullet: 'H',
    color: 'var(--chip-blue)',
    org: 'Hexoforge',
    title: 'Head of R&D · applied-research studio',
    period: '2026',
    now: true,
  },
  {
    href: '/work',
    bullet: 'F',
    color: 'var(--chip-green)',
    org: 'FinStocks',
    title: 'AI Developer, intern · shipped to a live fintech product',
    period: '2025',
    now: false,
  },
];

function Bullet({ ch, color }: { ch: string; color: string }) {
  return (
    <span
      className="code-badge"
      style={{
        background: color,
        color: 'var(--field)',
        width: '2rem',
        height: '2rem',
        fontWeight: 850,
        fontSize: '0.95rem',
      }}
    >
      {ch}
    </span>
  );
}

export default function Experience() {
  return (
    <motion.section
      className="container"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealContainer}
      style={{ marginTop: 'var(--section-gap)' }}
    >
      <motion.div className="section-kicker" variants={revealItem}>
        <span className="label" style={{ color: 'var(--bone)' }}>
          roles &amp; experience
        </span>
        <span className="label">who I build for</span>
      </motion.div>

      <motion.div className="role-board" variants={revealContainer}>
        {ROLES.map((r) => (
          <motion.div key={r.org} variants={revealItem} whileTap={tapPress}>
            <Link
              href={r.href}
              className="role-row"
              style={{ '--project-accent': r.color } as CSSProperties}
            >
              <Bullet ch={r.bullet} color={r.color} />
              <div className="role-row__body">
                <h3>{r.org}</h3>
                <span className="label role-row__title">{r.title}</span>
              </div>
              <div className="role-row__meta">
                {r.now ? (
                  <span className="label role-now">current</span>
                ) : (
                  <span className="label role-row__period">past</span>
                )}
                <span className="label role-row__period">{r.period}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
