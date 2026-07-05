import Link from 'next/link';

// Asymmetric swiss table: the hardware line is the feature (full row),
// the other three sit beneath. Ghost numerals, subway bullets, lowercase.
const FEATURE = {
  href: '/hardware',
  bullet: 'H',
  color: 'var(--red)',
  index: '01',
  title: 'hardware build',
  blurb:
    'an embedded system, built from scratch and logged in public — parts, dead ends, scope screenshots, everything. the page grows as the build does.',
  status: 'planned · first log aug 2026',
};

const LINES = [
  {
    href: '/game',
    bullet: 'G',
    color: 'var(--chip-blue)',
    index: '02',
    title: 'the game',
    blurb: 'founded a game with a small team. chapter 1 playable build headed to investors, jan 2027.',
    status: 'in progress',
  },
  {
    href: '/work',
    bullet: 'W',
    color: 'var(--chip-green)',
    index: '03',
    title: 'client work',
    blurb: 'production fintech for a real client — bank-data integration, deployed, paid. at 17.',
    status: 'deployed',
  },
  {
    href: '/lab',
    bullet: 'L',
    color: 'var(--chip-yellow)',
    index: '04',
    title: 'the lab',
    blurb: 'llms squeezed onto 4gb of vram, a hand-built linux desktop, ffmpeg machinery. 2am work.',
    status: 'ongoing',
  },
];

function Bullet({ ch, color }: { ch: string; color: string }) {
  return (
    <span
      className="chip"
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

      <div className="card-grid" style={{ gridTemplateColumns: undefined }}>
        {/* feature line — full width */}
        <Link
          href={FEATURE.href}
          className="project-card"
          style={{
            gridColumn: '1 / -1',
            background: 'var(--field)',
            padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            position: 'relative',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: '1.25rem 3rem',
            alignItems: 'end',
          }}
        >
          <span className="ghost" aria-hidden>
            {FEATURE.index}
          </span>
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Bullet ch={FEATURE.bullet} color={FEATURE.color} />
            <h3
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 0.92,
              }}
            >
              {FEATURE.title}
            </h3>
          </div>
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ color: 'var(--bone-2)', fontSize: 'var(--t-small)', maxWidth: '48ch' }}>
              {FEATURE.blurb}
            </p>
            <span className="label">{FEATURE.status}</span>
          </div>
        </Link>

        {/* the other three lines */}
        {LINES.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="project-card line-card"
            style={{
              background: 'var(--field)',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              minHeight: '240px',
            }}
          >
            <span className="ghost" aria-hidden>
              {p.index}
            </span>
            <Bullet ch={p.bullet} color={p.color} />
            <h3
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)',
                fontWeight: 850,
                letterSpacing: '-0.03em',
                marginTop: 'auto',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {p.title}
            </h3>
            <p style={{ color: 'var(--bone-2)', fontSize: 'var(--t-small)', position: 'relative', zIndex: 1 }}>
              {p.blurb}
            </p>
            <span className="label" style={{ position: 'relative', zIndex: 1 }}>
              {p.status}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
