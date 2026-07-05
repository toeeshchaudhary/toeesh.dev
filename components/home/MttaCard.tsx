// The standout: MTTA board. Dark-on-dark panel in MTTA's own signage voice
// (amber readout, subway bullets) pointing to the separate site.
const BULLETS = [
  { ch: 'M', bg: '#e0472f' },
  { ch: 'T', bg: '#2c66d4' },
  { ch: 'T', bg: '#22a559' },
  { ch: 'A', bg: '#f5c518' },
];

export default function MttaCard() {
  return (
    <section className="container" style={{ marginTop: 'var(--section-gap)' }}>
      <a
        href="https://toeeshnetwork.vercel.app"
        rel="me"
        className="mtta-board"
        style={{
          display: 'block',
          background: 'var(--board)',
          border: '1px solid var(--hairline)',
          padding: 'clamp(2rem, 5vw, 3.5rem)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '2rem',
          }}
        >
          <span className="label" style={{ color: '#ffd21f' }}>
            the network · special service
          </span>
          <span style={{ display: 'inline-flex', gap: '0.4rem' }}>
            {BULLETS.map((b, i) => (
              <span
                key={i}
                className="chip"
                style={{
                  background: b.bg,
                  color: '#131311',
                  width: '1.6rem',
                  height: '1.6rem',
                  fontWeight: 850,
                  fontSize: '0.8rem',
                }}
              >
                {b.ch}
              </span>
            ))}
          </span>
        </div>

        <h2
          style={{
            fontSize: 'clamp(2rem, 6vw, 4.5rem)',
            fontWeight: 900,
            fontStretch: '75%',
            textTransform: 'uppercase',
            lineHeight: 0.9,
            letterSpacing: '-0.01em',
          }}
        >
          I drew my life
          <br />
          as a transit map.
        </h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            gap: '1.5rem',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}
        >
          <p style={{ color: 'var(--bone-2)', fontSize: 'var(--t-small)', maxWidth: '52ch' }}>
            MTTA — the Metropolitan Toeesh Transit Authority. Every line is a thread of me, every
            station something I made or can't stop thinking about. Little trains run it all day.
            My writing lives there too.
          </p>
          <span className="label" style={{ color: '#ffd21f' }}>
            ride the network ↗
          </span>
        </div>
      </a>
    </section>
  );
}
