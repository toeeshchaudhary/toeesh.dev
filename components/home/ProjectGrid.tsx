import Link from 'next/link';

// Subway-bullet project index: each project is a "line" with its own bullet.
const PROJECTS = [
  {
    href: '/hardware',
    bullet: 'H',
    color: 'var(--red)',
    index: '01',
    title: 'Hardware Build',
    blurb: 'An embedded system, built from scratch and logged in public — parts, mistakes, everything.',
    status: 'planned · first log aug 2026',
  },
  {
    href: '/game',
    bullet: 'G',
    color: 'var(--chip-blue)',
    index: '02',
    title: 'The Game',
    blurb: 'Founded a game with a small team. Chapter 1 playable build headed to investors, jan 2027.',
    status: 'in progress',
  },
  {
    href: '/work',
    bullet: 'W',
    color: 'var(--chip-green)',
    index: '03',
    title: 'Client Work',
    blurb: 'Production fintech for a real client — bank-data integration, deployed, paid. At 17.',
    status: 'deployed',
  },
  {
    href: '/lab',
    bullet: 'L',
    color: 'var(--chip-yellow)',
    index: '04',
    title: 'The Lab',
    blurb: 'LLMs squeezed onto 4gb of vram, a hand-built linux desktop, ffmpeg machinery. 2am work.',
    status: 'ongoing',
  },
];

export default function ProjectGrid() {
  return (
    <section className="container" style={{ marginTop: 'var(--section-gap)' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '1.25rem',
        }}
      >
        <span className="label" style={{ color: 'var(--bone)' }}>
          now boarding — work
        </span>
        <span className="label">4 lines in service</span>
      </div>

      <div className="card-grid">
        {PROJECTS.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="project-card"
            style={{
              background: 'var(--field)',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.1rem',
              minHeight: '260px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                className="chip"
                style={{
                  background: p.color,
                  color: 'var(--field)',
                  width: '2rem',
                  height: '2rem',
                  fontWeight: 850,
                  fontSize: '1rem',
                }}
              >
                {p.bullet}
              </span>
              <span className="label">{p.index}</span>
            </div>
            <h3
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.1rem)',
                fontWeight: 850,
                fontStretch: '80%',
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
                marginTop: 'auto',
              }}
            >
              {p.title}
            </h3>
            <p style={{ color: 'var(--bone-2)', fontSize: 'var(--t-small)' }}>{p.blurb}</p>
            <span className="label">{p.status}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
