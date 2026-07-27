import type { CSSProperties } from 'react';
import * as motion from 'motion/react-client';
import { revealContainer, revealItem, cardLift, tapPress } from '@/components/motion/variants';

// The shelf — the individual ships that used to live only in prose on /lab.
// A hairline grid of plates; accent bleeds in on hover. Order: biggest /
// most recent builds first, tools after.
type Build = {
  name: string;
  blurb: string;
  tech: string;
  href: string;
  color: string;
  bullet: string;
};

const BUILDS: Build[] = [
  {
    name: 'AEGIS',
    blurb: 'A low-cost agri-tech field network for small farmers — ESP32 sensor nodes, a live dashboard, a rule engine, and AI-written crop advice.',
    tech: 'ESP32 · Next.js',
    href: 'https://github.com/toeeshchaudhary/AEGIS',
    color: 'var(--chip-green)',
    bullet: 'AE',
  },
  {
    name: 'synergyclash',
    blurb: 'A real-time multiplayer corporate-strategy sim: a live market, mergers, hostile takeovers, crisis events, and a spectator mode.',
    tech: 'Next.js · Prisma · Socket.IO',
    href: 'https://github.com/toeeshchaudhary/synergyclash',
    color: 'var(--chip-blue)',
    bullet: 'SC',
  },
  {
    name: 'HASH 12',
    blurb: 'A dark, cinematic, scroll-driven site for an inter-school tech fest — preloader, magnetic buttons, event previews, custom cursor.',
    tech: 'Next.js · GSAP · Three.js',
    href: 'https://github.com/toeeshchaudhary/hash12',
    color: 'var(--chip-orange)',
    bullet: 'H12',
  },
  {
    name: 'socius',
    blurb: 'A local-first AI operating companion for the terminal — an intelligent Unix citizen, not a chat box in a browser.',
    tech: 'TypeScript',
    href: 'https://github.com/toeeshchaudhary/socius',
    color: 'var(--chip-yellow)',
    bullet: 'SO',
  },
  {
    name: 'chamak',
    blurb: 'An investor reasoning engine for Indian markets: it turns your own investing beliefs into a rule graph and scores stocks through your lens.',
    tech: 'Python · Textual TUI',
    href: 'https://github.com/toeeshchaudhary/chamak',
    color: 'var(--chip-green)',
    bullet: 'CH',
  },
  {
    name: 'writee',
    blurb: 'A cross-platform handwriting whiteboard: infinite canvas, a pressure-sensitive pen, linked notes, and self-contained web export.',
    tech: 'Rust · wgpu · SQLite',
    href: 'https://github.com/toeeshchaudhary/writee',
    color: 'var(--chip-blue)',
    bullet: 'WR',
  },
  {
    name: 'pracq',
    blurb: 'A lightweight flashcard & practice-test TUI — plain-Markdown decks, spaced repetition, one static binary with no runtime.',
    tech: 'Go',
    href: 'https://github.com/toeeshchaudhary/pracq',
    color: 'var(--chip-orange)',
    bullet: 'PR',
  },
  {
    name: 'adhyapak',
    blurb: 'A from-scratch, gamified JEE-2027 tutor: plain-text lessons, spaced repetition, a concept map, and a local web app with no database.',
    tech: 'JavaScript',
    href: 'https://github.com/toeeshchaudhary/adhyapak',
    color: 'var(--chip-yellow)',
    bullet: 'AD',
  },
  {
    name: 'XRPbot',
    blurb: 'A cross-platform control suite for an XRP robot — joins its WiFi, streams telemetry at 20 Hz, drives it with a gamepad, reconnects on drop.',
    tech: 'Bun · Expo + Electron',
    href: 'https://github.com/toeeshchaudhary',
    color: 'var(--chip-green)',
    bullet: 'XR',
  },
  {
    name: 'dotfiles',
    blurb: 'My whole Arch + i3 desktop, bootstrap-installable — a minimal grayscale rice with pywal theming and a self-update system.',
    tech: 'Shell',
    href: 'https://github.com/toeeshchaudhary/dotfiles',
    color: 'var(--hairline-strong)',
    bullet: 'DF',
  },
];

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
