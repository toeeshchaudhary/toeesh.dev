// Swiss poster hero: corner metadata, massive compressed grotesk, statement line.
export default function Hero() {
  return (
    <header className="container" style={{ paddingTop: '2rem' }}>
      {/* corner metadata row — the poster's info block */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: 'clamp(2.5rem, 6vh, 4.5rem)',
        }}
      >
        <span className="label">portfolio · est. 2026</span>
        <span className="label" style={{ display: 'inline-flex', gap: '0.45rem', alignItems: 'center' }}>
          <span className="chip" style={{ background: 'var(--red)', width: 8, height: 8 }} />
          <span className="chip" style={{ background: 'var(--chip-blue)', width: 8, height: 8 }} />
          <span className="chip" style={{ background: 'var(--chip-green)', width: 8, height: 8 }} />
          <span className="chip" style={{ background: 'var(--chip-yellow)', width: 8, height: 8 }} />
        </span>
        <span className="label">delhi ncr → japan 2027</span>
      </div>

      <h1 className="poster">
        Toeesh
        <br />
        Chaudhary
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
          gap: '1.5rem 3rem',
          alignItems: 'end',
          marginTop: 'clamp(2rem, 5vh, 3.5rem)',
        }}
      >
        <h2 style={{ fontSize: 'var(--t-h2)', fontWeight: 800, letterSpacing: '-0.025em' }}>
          I build hardware, software
          <br />& one transit map<span style={{ color: 'var(--red)' }}>.</span>
        </h2>
        <p style={{ color: 'var(--bone-2)', fontSize: 'var(--t-small)', justifySelf: 'start' }}>
          18 · class 12 · headed for electrical &amp; computer engineering. Everything below is
          real: things I've shipped, things I'm building, and one thing I can't stop building.
        </p>
      </div>
    </header>
  );
}
