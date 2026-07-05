import Link from 'next/link';

// Phase-0 placeholder used by every route until its real page lands in Phase 2.
export default function StubPage({
  counter,
  title,
  note,
}: {
  counter: string;
  title: string;
  note: string;
}) {
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
        <p className="label" style={{ marginBottom: '2rem' }}>
          {counter}
        </p>
        <h1>{title}</h1>
        <hr className="rule" style={{ marginTop: '2rem', marginBottom: '2rem' }} />
        <p className="label">{note}</p>
        <p style={{ marginTop: '3rem', fontSize: 'var(--t-small)' }}>
          <Link href="/">← toeesh.dev</Link>
        </p>
      </div>
    </main>
  );
}
