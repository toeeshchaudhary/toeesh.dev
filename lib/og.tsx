import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_TYPE = 'image/png';

const CHIPS = ['#e2372b', '#2c66d4', '#22a559', '#f5c518', '#ef7b24'];

// Resolves the CSS custom properties the content files use, since the OG
// renderer has no stylesheet to look them up in.
const HEX: Record<string, string> = {
  'var(--red)': '#e02f22',
  'var(--chip-yellow)': '#ffe21c',
  'var(--chip-green)': '#00a765',
  'var(--chip-blue)': '#1296d4',
  'var(--chip-orange)': '#ef7b24',
};

/**
 * One poster, parameterised — every route's card is the same object with a
 * different title, so the set reads as a system instead of eight one-offs.
 */
export function posterOg({
  title,
  tag,
  dek,
  accent = 'var(--red)',
}: {
  title: string;
  tag?: string;
  dek?: string;
  accent?: string;
}) {
  const bar = HEX[accent] ?? accent;
  // Long titles need to come down in size or they overflow the card.
  const fontSize = title.length > 18 ? 104 : title.length > 11 ? 128 : 150;

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
          <div style={{ display: 'flex' }}>{(tag ?? 'toeesh.dev').toUpperCase()}</div>
          <div style={{ display: 'flex', gap: 10 }}>
            {CHIPS.map((c, i) => (
              <div
                key={i}
                style={{ width: 18, height: 18, borderRadius: 9, background: c, display: 'flex' }}
              />
            ))}
          </div>
          <div style={{ display: 'flex' }}>DELHI NCR → JAPAN 2027</div>
        </div>

        <div style={{ flex: 1, display: 'flex', gap: 34, alignItems: 'center' }}>
          <div style={{ display: 'flex', width: 8, height: 300, background: bar }} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 24,
              flex: 1,
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize,
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: -6,
              }}
            >
              {title}
            </div>
            {dek ? (
              <div
                style={{
                  display: 'flex',
                  fontSize: 28,
                  lineHeight: 1.35,
                  color: '#b9b4a5',
                  maxWidth: 900,
                }}
              >
                {dek.length > 150 ? `${dek.slice(0, 147)}…` : dek}
              </div>
            ) : null}
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
            toeesh chaudhary<span style={{ color: '#e02f22' }}>.</span>
          </div>
          <div style={{ display: 'flex', fontFamily: 'monospace', color: '#b9b4a5', fontSize: 22 }}>
            toeesh.dev
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
