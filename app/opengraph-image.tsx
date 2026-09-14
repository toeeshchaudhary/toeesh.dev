import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'toeesh.dev — Toeesh Chaudhary';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const CHIPS = ['#e2372b', '#2c66d4', '#22a559', '#f5c518', '#ef7b24'];

// Dark swiss poster: charcoal field, compressed bone type, line chips.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#131311',
          color: '#eeebe3',
          padding: '60px 70px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            letterSpacing: 4,
            color: '#98948a',
            fontFamily: 'monospace',
          }}
        >
          <div style={{ display: 'flex' }}>PORTFOLIO SPECIMEN · EST. 2026</div>
          <div style={{ display: 'flex', gap: 10 }}>
            {CHIPS.map((c, i) => (
              <div key={i} style={{ width: 18, height: 18, borderRadius: 9, background: c, display: 'flex' }} />
            ))}
          </div>
          <div style={{ display: 'flex' }}>DELHI NCR → JAPAN 2027</div>
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            gap: 34,
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', width: 8, height: 340, background: '#e2372b' }} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              fontSize: 142,
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: -7,
            }}
          >
            <div style={{ display: 'flex' }}>toeesh</div>
            <div style={{ display: 'flex' }}>chaudhary</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              marginLeft: 'auto',
              fontFamily: 'monospace',
              color: '#b9b4a5',
              fontSize: 20,
              letterSpacing: 3,
            }}
          >
            <div style={{ display: 'flex' }}>HARDWARE</div>
            <div style={{ display: 'flex' }}>PROJECTS</div>
            <div style={{ display: 'flex' }}>RECORDER</div>
            <div style={{ display: 'flex' }}>FORM/01</div>
            <div style={{ display: 'flex' }}>SYSTEMS</div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 26,
          }}
        >
          <div style={{ display: 'flex', fontWeight: 700 }}>
            hardware, firmware, software systems
            <span style={{ color: '#e02f22' }}>.</span>
          </div>
          <div style={{ display: 'flex', fontFamily: 'monospace', color: '#b9b4a5', fontSize: 22 }}>
            toeesh.dev
          </div>
        </div>
      </div>
    ),
    size
  );
}
