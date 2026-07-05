import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'toeesh.dev — Toeesh Chaudhary';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Editorial press card: paper field, rust top bar, serif masthead, dark torn stub.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#f4f1e8',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ height: 20, background: '#c13a2a', display: 'flex' }} />
        <div style={{ display: 'flex', flex: 1 }}>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0 80px',
            }}
          >
            <div
              style={{
                fontSize: 24,
                letterSpacing: 4,
                textTransform: 'uppercase',
                color: '#6b6660',
                fontFamily: 'monospace',
                marginBottom: 28,
              }}
            >
              est. 2026 · delhi ncr
            </div>
            <div
              style={{
                fontSize: 96,
                fontWeight: 700,
                color: '#1c1814',
                lineHeight: 1,
                letterSpacing: -2,
              }}
            >
              toeesh.dev
            </div>
            <div style={{ fontSize: 30, color: '#6b6660', marginTop: 30, maxWidth: 640 }}>
              Building at the edge of circuitry and software.
            </div>
          </div>
          <div
            style={{
              width: 220,
              background: '#1c1814',
              borderLeft: '3px dashed #c0bab0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                color: '#f4f1e8',
                fontSize: 28,
                fontFamily: 'monospace',
                letterSpacing: 6,
                transform: 'rotate(90deg)',
              }}
            >
              TOEESH
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
