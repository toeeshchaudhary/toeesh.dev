// Colophon, not a footer. States its materials like a printed sheet would.
export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--hairline)', marginTop: 'var(--section-gap)' }}>
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
          gap: '2rem',
          paddingTop: '2rem',
          paddingBottom: '2.5rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span className="label" style={{ color: 'var(--bone-3)' }}>colophon</span>
          <span className="label">set in rm neue &amp; jetbrains mono</span>
          <span className="label">grain by feturbulence · no cookies, no trackers</span>
          <span className="label">built with next.js on a riced arch box</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span className="label" style={{ color: 'var(--bone-3)' }}>correspondence</span>
          <a href="mailto:thesonofdevilhunter1@gmail.com" className="label" style={{ color: 'var(--bone)' }}>
            thesonofdevilhunter1@gmail.com
          </a>
          <a href="https://toeeshnetwork.vercel.app" className="label" style={{ color: 'var(--bone)' }}>
            the network ↗
          </a>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            justifySelf: 'start',
          }}
        >
          <span className="label" style={{ color: 'var(--bone-3)' }}>issued</span>
          <span className="label">© 2026 toeesh chaudhary</span>
          <span className="label">delhi ncr, in → nagoya / tokyo / sendai / fukuoka</span>
        </div>
      </div>
    </footer>
  );
}
