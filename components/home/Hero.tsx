// Type-specimen hero: the name set like a foundry sheet — baseline grid,
// crop ticks, mono annotations. RM Neue at 900, lowercase (the system
// speaks quietly). Same voice as the MTTA brand book.
export default function Hero() {
  return (
    <header className="container" style={{ paddingTop: '2rem' }}>
      {/* corner metadata row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: 'clamp(3rem, 7vh, 5rem)',
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

      {/* the specimen sheet */}
      <div style={{ position: 'relative' }}>
        <span
          className="label"
          style={{ position: 'absolute', top: '-1.6rem', left: 0, color: 'var(--bone-3)' }}
        >
          rm neue vf · wght 900 · trk −45
        </span>
        <span
          className="label specimen-note--aux"
          style={{ position: 'absolute', top: '-1.6rem', right: 0, color: 'var(--bone-3)' }}
        >
          specimen № 01
        </span>

        <span className="specimen-line" style={{ top: 0 }} />
        <span className="specimen-line" style={{ top: '50%' }} />
        <span className="specimen-line" style={{ bottom: 0 }} />

        <h1 className="poster" style={{ position: 'relative', zIndex: 1, padding: '0.06em 0' }}>
          toeesh
          <br />
          chaudhary
        </h1>

        <span
          className="label specimen-note--aux"
          style={{ position: 'absolute', bottom: '-1.7rem', right: 0, color: 'var(--bone-3)' }}
        >
          lh 0.88 · set full-measure
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
          gap: '1.5rem 3rem',
          alignItems: 'end',
          marginTop: 'clamp(3rem, 7vh, 5rem)',
        }}
      >
        <h2 style={{ fontSize: 'var(--t-h2)', fontWeight: 850, letterSpacing: '-0.035em' }}>
          i build hardware, software
          <br />& one transit map<span style={{ color: 'var(--red)' }}>.</span>
        </h2>
        <p style={{ color: 'var(--bone-2)', fontSize: 'var(--t-small)', justifySelf: 'start' }}>
          18 · class 12 · headed for electrical &amp; computer engineering. everything below is
          real — things i've shipped, things i'm building, and one thing i can't stop building.
        </p>
      </div>
    </header>
  );
}
