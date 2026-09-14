// A static, downsampled waveform for index cards — SVG, no canvas, no state.
// Server-rendered so the card shows the shape of the recording before hydration.
export default function Sparkline({ peaks, bars = 96 }: { peaks: number[]; bars?: number }) {
  if (peaks.length === 0) return null;

  const per = Math.max(1, Math.floor(peaks.length / bars));
  const buckets: number[] = [];
  for (let i = 0; i < peaks.length; i += per) {
    buckets.push(Math.max(...peaks.slice(i, i + per)));
  }

  const w = buckets.length * 2 - 1; // 1 unit bar, 1 unit gap
  return (
    <svg
      className="spark"
      viewBox={`0 0 ${w} 24`}
      preserveAspectRatio="none"
      aria-hidden
      focusable="false"
    >
      {buckets.map((p, i) => {
        const h = Math.max(1, p * 24);
        return <rect key={i} x={i * 2} y={(24 - h) / 2} width={1} height={h} />;
      })}
    </svg>
  );
}
