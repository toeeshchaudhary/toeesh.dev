// Phase-0 homepage: the editorial hero, standing in for the full page until
// Phase 1 lands (MttaCard, ProjectGrid, CreativeStrip). Designed to be
// presentable on the live domain from day one.
export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div className="container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <p className="label" style={{ marginBottom: '2.5rem' }}>
          toeesh.dev · est. 2026 · delhi ncr
        </p>

        <h1 className="display">
          Toeesh
          <br />
          Chaudhary
        </h1>

        <hr className="rule" style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }} />

        <p style={{ fontSize: 'var(--t-body-lg)', maxWidth: '34ch' }}>
          I build things at the edge of circuitry and software.
        </p>

        <p className="label" style={{ marginTop: '1.5rem' }}>
          18 · class 12 · ece applicant · japan 2027
        </p>

        <p style={{ marginTop: '4rem', color: 'var(--ink-2)', fontSize: 'var(--t-small)' }}>
          The full site is being set in type — hardware build log, the game venture, client
          work, and the lab arrive here through autumn. Meanwhile, my life runs as a transit
          map at{' '}
          <a href="https://toeeshnetwork.vercel.app" rel="me">
            the network
          </a>
          , or write to{' '}
          <a href="mailto:thesonofdevilhunter1@gmail.com">thesonofdevilhunter1@gmail.com</a>.
        </p>
      </div>
    </main>
  );
}
