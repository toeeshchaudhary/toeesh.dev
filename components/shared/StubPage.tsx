import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';

// Placeholder used by routes until their real pages land in Phase 2.
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
    <>
      <Nav />
      <main
        style={{
          minHeight: '70dvh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <p className="label" style={{ marginBottom: '2rem' }}>
            {counter}
          </p>
          <h1
            style={{
              fontWeight: 900,
              fontStretch: '75%',
              textTransform: 'uppercase',
              lineHeight: 0.9,
            }}
          >
            {title}
          </h1>
          <hr className="rule" style={{ marginTop: '2rem', marginBottom: '2rem' }} />
          <p className="label">{note} — full page arrives this autumn</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
