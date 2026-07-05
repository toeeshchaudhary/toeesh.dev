// Outbound one-liners: creative life lives elsewhere, signposted here.
const ITEMS = [
  { label: 'music', note: 'fl studio', href: 'https://open.spotify.com/user/pm1saf4ldgyr342za1kdc186p', ext: 'spotify' },
  { label: 'moodboard', note: '163 saves', href: 'https://www.cosmos.so/toeeshchaudhary', ext: 'cosmos' },
  { label: 'writing', note: 'musings line', href: 'https://toeeshnetwork.vercel.app', ext: 'the network' },
];

export default function CreativeStrip() {
  return (
    <section className="container" style={{ marginTop: 'var(--section-gap)' }}>
      <span className="label" style={{ color: 'var(--bone)', display: 'block', marginBottom: '1.25rem' }}>
        off the clock
      </span>
      <div style={{ borderTop: '1px solid var(--hairline)' }}>
        {ITEMS.map((it) => (
          <a
            key={it.label}
            href={it.href}
            className="strip-row"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: '1rem',
              padding: '1.1rem 0',
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
            <span className="label" style={{ flex: 1 }}>{it.note}</span>
            <span className="label" style={{ color: 'var(--bone)' }}>{it.ext} ↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
