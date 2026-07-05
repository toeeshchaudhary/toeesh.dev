// Departure-board status strip — amber LED readout, the MTTA signage voice
// repurposed as a live "what's running in my life" line. Static, no ticker.
export default function ServiceStatus() {
  return (
    <section className="container" style={{ marginTop: 'clamp(3.5rem, 7vh, 5rem)' }}>
      <div
        style={{
          background: 'var(--board)',
          border: '1px solid var(--hairline)',
          padding: '0.85rem 1.25rem',
          display: 'flex',
          alignItems: 'baseline',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <span className="label" style={{ color: 'var(--bone-3)', flex: 'none' }}>
          service status
        </span>
        <span
          className="label"
          style={{ color: '#ffd21f', letterSpacing: '0.16em', lineHeight: 1.9 }}
        >
          ● all lines running — sat prep until aug 22 · hardware line boarding
          aug · chapter 1 due jan 2027 · applications open nov
        </span>
      </div>
    </section>
  );
}
