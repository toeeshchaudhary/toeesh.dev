import Link from 'next/link';
import type { CSSProperties } from 'react';
import * as motion from 'motion/react-client';
import { revealContainer, revealItem, tapPress } from '@/components/motion/variants';

// Asymmetric swiss table: Navigator is the feature, with supporting proof
// grouped beneath. Ghost numerals, color marks, lowercase.
const FEATURE = {
  href: '/hardware',
  bullet: 'H',
  color: 'var(--red)',
  index: '01',
  title: 'hardware',
  blurb:
    'designing small computers and the boards that run them — from circuit to firmware to power. centered on Navigator, a calm, repairable, modular Linux handheld I’m building from scratch.',
  status: 'flagship build',
};

const LINES = [
  {
    href: '/work',
    bullet: 'W',
    color: 'var(--chip-green)',
    index: '02',
    title: 'finstocks internship',
    blurb: 'AI Developer internship — building and shipping AI features inside a live fintech product with real users and real product cycles.',
    status: 'shipped to production',
  },
  {
    href: '/lab',
    bullet: 'L',
    color: 'var(--chip-yellow)',
    index: '03',
    title: 'the lab',
    blurb: 'local LLMs on limited hardware, a hand-tuned Arch + i3 desktop, and a shelf of open-source tools — socius (AI terminal companion), chamak, writee, pracq — plus the transit-map site toeesh.network.',
    status: 'ongoing',
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
        fontSize: '1rem',
      }}
    >
      {ch}
    </span>
  );
}

export default function ProjectGrid() {
  return (
    <motion.section
      className="container"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={revealContainer}
      style={{ marginTop: 'var(--section-gap)' }}
    >
      <motion.div className="section-kicker" variants={revealItem}>
        <span className="label" style={{ color: 'var(--bone)' }}>
          selected projects
        </span>
        <span className="label">what this portfolio proves</span>
      </motion.div>

      <motion.div className="project-index" variants={revealContainer}>
        <motion.div variants={revealItem} whileTap={tapPress}>
          <Link
            href={FEATURE.href}
            className="project-index__feature"
            style={{ '--project-accent': FEATURE.color } as CSSProperties}
          >
            <span className="project-index__number">{FEATURE.index}</span>
            <Bullet ch={FEATURE.bullet} color={FEATURE.color} />
            <div className="project-index__body">
              <span className="label">{FEATURE.status}</span>
              <h3>{FEATURE.title}</h3>
              <p>{FEATURE.blurb}</p>
            </div>
            <span className="label project-index__action">open project ↗</span>
          </Link>
        </motion.div>

        <div className="project-index__rows">
          {LINES.map((p) => (
            <motion.div key={p.href} variants={revealItem} whileTap={tapPress}>
              <Link
                href={p.href}
                className="project-index__row"
                style={{ '--project-accent': p.color } as CSSProperties}
              >
                <span className="project-index__number">{p.index}</span>
                <Bullet ch={p.bullet} color={p.color} />
                <div className="project-index__body">
                  <span className="label">{p.status}</span>
                  <h3>{p.title}</h3>
                  <p>{p.blurb}</p>
                </div>
                <span className="label project-index__action">view ↗</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
