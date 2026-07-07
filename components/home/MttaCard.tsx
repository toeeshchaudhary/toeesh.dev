import * as motion from 'motion/react-client';
import { cardLift, posterEase, revealContainer, revealItem, tapPress } from '@/components/motion/variants';

const BULLETS = [
  { ch: 'MT', bg: '#e0472f', label: 'memory' },
  { ch: 'TH', bg: '#1296d4', label: 'thought' },
  { ch: 'AR', bg: '#00a765', label: 'archive' },
  { ch: 'YL', bg: '#ffe21c', label: 'signal' },
];

const ARRIVALS = [
  { line: 'MT', direction: 'Northbound', destination: 'Projects / devices', time: 'now', color: '#e0472f' },
  { line: 'TH', direction: 'Westbound', destination: 'Notes / essays', time: '3 min', color: '#1296d4' },
  { line: 'AR', direction: 'Southbound', destination: 'Archive / maps', time: '6 min', color: '#00a765' },
];

// station dots per line: [cx, cy]
const STATIONS: Array<[number, number]> = [
  [70, 104], [240, 104], [320, 48], [560, 48], [740, 48],
  [140, 48], [260, 116], [470, 116],
  [200, 78], [430, 78], [660, 116],
  [360, 20], [620, 20],
];

export default function MttaCard() {
  return (
    <motion.section
      className="container"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={revealContainer}
      style={{ marginTop: 'var(--section-gap)' }}
    >
      <motion.a
        href="https://toeeshnetwork.vercel.app"
        rel="me"
        className="mtta-board poster-panel"
        variants={revealItem}
        whileHover={cardLift}
        whileTap={tapPress}
      >
        <motion.div className="mtta-topbar" variants={revealContainer}>
          <motion.span className="label" variants={revealItem}>
            Metropolitan Toeesh Transit Authority
          </motion.span>
          <motion.span className="label" variants={revealItem}>
            External network service
          </motion.span>
        </motion.div>

        <motion.div className="mtta-alert" variants={revealItem}>
          <span className="mtta-alert__icon">!</span>
          <strong>No normal portfolio route.</strong>
          <span>Personal archive service available through The Network.</span>
        </motion.div>

        <div className="mtta-grid">
          <motion.div className="mtta-identity" variants={revealContainer}>
            <motion.div className="mtta-mark" variants={revealItem} aria-hidden>
              <span>M</span>
            </motion.div>
            <motion.div variants={revealItem}>
              <span className="label">now arriving</span>
              <h2>
                i drew my life
                <br />
                as a transit map.
              </h2>
            </motion.div>
            <motion.p variants={revealItem}>
              MTTA is the Metropolitan Toeesh Transit Authority: every line is a thread of me,
              every station is something I made, saved, studied, or cannot stop thinking about.
            </motion.p>
          </motion.div>

          <motion.div className="mtta-sideboard" variants={revealContainer}>
            <motion.div className="mtta-route-set" variants={revealContainer}>
              {BULLETS.map((bullet) => (
                <motion.span key={bullet.ch} className="mtta-route-pill" variants={revealItem}>
                  <span style={{ background: bullet.bg }}>{bullet.ch}</span>
                  {bullet.label}
                </motion.span>
              ))}
            </motion.div>

            <motion.div className="mtta-arrivals" variants={revealContainer}>
              <div className="mtta-arrivals__head">
                <span className="label">next trains</span>
                <span className="label">arrival</span>
              </div>
              {ARRIVALS.map((arrival) => (
                <motion.div key={arrival.line} className="mtta-arrival-row" variants={revealItem}>
                  <span className="mtta-line-dot" style={{ background: arrival.color }}>
                    {arrival.line}
                  </span>
                  <span>
                    <strong>{arrival.direction}</strong>
                    <small>{arrival.destination}</small>
                  </span>
                  <strong>{arrival.time}</strong>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="mtta-map-shell" variants={revealItem}>
          <div className="mtta-map-header">
            <span className="label">system diagram</span>
            <span className="label">ride the network ↗</span>
          </div>
          <motion.svg
            className="mtta-map"
            viewBox="0 0 800 150"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <g className="mtta-routes" fill="none" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round">
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, ease: posterEase }}
                d="M0,106 H240 L320,50 H800"
                stroke="#e0472f"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, delay: 0.12, ease: posterEase }}
                d="M0,50 H140 L260,118 H470 L560,50 H800"
                stroke="#1296d4"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, delay: 0.24, ease: posterEase }}
                d="M0,80 H200 L360,22 H620 L660,118 H800"
                stroke="#00a765"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.95 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, delay: 0.36, ease: posterEase }}
                d="M0,132 H430 L470,80 H800"
                stroke="#ffe21c"
              />
            </g>
            <g fill="var(--inset)" stroke="var(--bone)" strokeWidth="2.5">
              {STATIONS.map(([cx, cy], i) => (
                <motion.circle
                  key={i}
                  cx={cx}
                  cy={cy + 2}
                  r="5.5"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.35, delay: 0.32 + i * 0.035, ease: posterEase }}
                />
              ))}
            </g>
            <g fill="currentColor" stroke="var(--inset)" strokeWidth="2.5">
              <motion.circle
                className="mtta-train mtta-train--red"
                cx="0"
                cy="106"
                r="7"
                animate={{ x: [0, 240, 320, 800], y: [0, 0, -56, -56] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'linear', times: [0, 0.3, 0.42, 1] }}
              />
              <motion.circle
                className="mtta-train mtta-train--blue"
                cx="0"
                cy="50"
                r="7"
                animate={{ x: [0, 140, 260, 470, 560, 800], y: [0, 0, 68, 68, 0, 0] }}
                transition={{ duration: 8.5, repeat: Infinity, ease: 'linear', times: [0, 0.18, 0.34, 0.58, 0.72, 1] }}
              />
              <motion.circle
                className="mtta-train mtta-train--green"
                cx="0"
                cy="80"
                r="7"
                animate={{ x: [0, 200, 360, 620, 660, 800], y: [0, 0, -58, -58, 38, 38] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'linear', times: [0, 0.25, 0.44, 0.74, 0.83, 1] }}
              />
            </g>
          </motion.svg>
        </motion.div>
      </motion.a>
    </motion.section>
  );
}
