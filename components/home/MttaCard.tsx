// The standout: MTTA board in its own signage voice — amber readout, subway
// bullets, and a hand-drawn slice of the network itself running across the base.
const BULLETS = [
  { ch: 'M', bg: '#e0472f' },
  { ch: 'T', bg: '#2c66d4' },
  { ch: 'T', bg: '#22a559' },
  { ch: 'A', bg: '#f5c518' },
];

// station dots per line: [cx, cy]
const STATIONS: Array<[number, number]> = [
  [70, 96], [240, 96], [320, 40], [560, 40], [740, 40],
  [140, 40], [260, 108], [470, 108],
  [200, 70], [430, 70], [660, 108],
  [360, 12], [620, 12],
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
          paddingBottom: 0,
          overflow: 'hidden',
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
            fontSize: 'clamp(2.25rem, 6vw, 4.75rem)',
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
          }}
        >
          i drew my life
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
            mtta — the metropolitan toeesh transit authority. every line is a thread of me, every
            station something i made or can't stop thinking about. little trains run it all day.
            my writing lives there too.
          </p>
          <span className="label" style={{ color: '#ffd21f' }}>
            ride the network ↗
          </span>
        </div>

        {/* a slice of the network */}
        <svg
          viewBox="0 0 800 120"
          preserveAspectRatio="xMidYMax slice"
          style={{ width: '100%', height: 'clamp(70px, 12vw, 120px)', marginTop: '2.25rem', display: 'block' }}
          aria-hidden
        >
          <g fill="none" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
            <path d="M0,96 H240 L320,40 H800" stroke="#e0472f" />
            <path d="M0,40 H140 L260,108 H470 L560,40 H800" stroke="#2c66d4" />
            <path d="M0,70 H200 L360,12 H620 L660,108 H800" stroke="#22a559" />
            <path d="M0,120 H430 L470,70 H800" stroke="#f5c518" opacity="0.9" />
          </g>
          <g fill="#1c1c19" stroke="#eeebe3" strokeWidth="2.5">
            {STATIONS.map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="5.5" />
            ))}
          </g>
        </svg>
      </a>
    </section>
  );
}
