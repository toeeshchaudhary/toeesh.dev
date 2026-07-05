export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--hairline)', marginTop: 'var(--section-gap)' }}>
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem 2rem',
          justifyContent: 'space-between',
          paddingTop: '1.5rem',
          paddingBottom: '2rem',
        }}
      >
        <p className="label">© 2026 toeesh chaudhary · delhi ncr</p>
        <p className="label">
          <a href="mailto:thesonofdevilhunter1@gmail.com" style={{ color: 'var(--bone)' }}>
            thesonofdevilhunter1@gmail.com
          </a>
        </p>
        <p className="label">no cookies · no trackers · set in archivo</p>
      </div>
    </footer>
  );
}
