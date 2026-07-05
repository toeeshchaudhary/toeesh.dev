import Link from 'next/link';

const LINKS = [
  { href: '/hardware', label: 'hardware' },
  { href: '/game', label: 'game' },
  { href: '/work', label: 'work' },
  { href: '/lab', label: 'lab' },
  { href: '/about', label: 'about' },
];

export default function Nav() {
  return (
    <nav style={{ borderBottom: '1px solid var(--hairline)' }}>
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          paddingTop: '1rem',
          paddingBottom: '1rem',
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: 850,
            fontSize: '1.05rem',
            letterSpacing: '-0.02em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span className="chip" style={{ background: 'var(--red)', width: 10, height: 10 }} />
          toeesh.dev
        </Link>
        <div style={{ display: 'flex', gap: 'clamp(0.9rem, 2.5vw, 1.75rem)', flexWrap: 'wrap' }}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="label" style={{ color: 'var(--bone)' }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
