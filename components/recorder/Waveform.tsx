'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { formatStamp, type Chapter } from '@/lib/timestamp';

// Canvas, not 800 DOM nodes. Peaks are precomputed at build time
// (scripts/waveform.mjs) so nothing decodes audio in the browser.
const cssVar = (el: Element, name: string, fallback: string) =>
  getComputedStyle(el).getPropertyValue(name).trim() || fallback;

export default function Waveform({
  peaks,
  duration,
  at,
  chapters,
  onSeek,
  disabled,
}: {
  peaks: number[];
  duration: number;
  at: number;
  chapters: Chapter[];
  onSeek: (seconds: number) => void;
  disabled: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap || peaks.length === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    const played = cssVar(wrap, '--project-accent', '#1296d4');
    const rest = cssVar(wrap, '--hairline-strong', '#575757');
    const ahead = cssVar(wrap, '--hairline', '#2f2f2f');

    const gap = 1;
    const barW = Math.max(1, w / peaks.length - gap);
    const progress = duration > 0 ? at / duration : 0;
    const hoverAt = hover !== null ? hover : -1;

    for (let i = 0; i < peaks.length; i += 1) {
      const x = (i * w) / peaks.length;
      const frac = i / peaks.length;
      const barH = Math.max(2, peaks[i] * (h - 4));
      const y = (h - barH) / 2;
      if (frac <= progress) ctx.fillStyle = played;
      else if (hoverAt >= 0 && frac <= hoverAt) ctx.fillStyle = rest;
      else ctx.fillStyle = ahead;
      ctx.fillRect(x, y, barW, barH);
    }

    // chapter boundaries as faint full-height ticks
    if (duration > 0) {
      ctx.fillStyle = ahead;
      for (const c of chapters) {
        if (c.at <= 0) continue;
        ctx.fillRect((c.at / duration) * w, 0, 1, h);
      }
    }
  }, [peaks, duration, at, hover, chapters]);

  useEffect(() => {
    draw();
  }, [draw]);

  useEffect(() => {
    const onResize = () => draw();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [draw]);

  function fractionFromEvent(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    return Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
  }

  if (peaks.length === 0) return null;

  return (
    <div
      ref={wrapRef}
      className="wave"
      data-disabled={disabled}
      onMouseMove={(e) => !disabled && setHover(fractionFromEvent(e))}
      onMouseLeave={() => setHover(null)}
      onClick={(e) => !disabled && onSeek(fractionFromEvent(e) * duration)}
      role="slider"
      tabIndex={disabled ? -1 : 0}
      aria-label="seek"
      aria-valuemin={0}
      aria-valuemax={Math.round(duration)}
      aria-valuenow={Math.round(at)}
      aria-valuetext={formatStamp(at)}
      onKeyDown={(e) => {
        if (disabled) return;
        if (e.key === 'ArrowRight') onSeek(Math.min(duration, at + 15));
        if (e.key === 'ArrowLeft') onSeek(Math.max(0, at - 15));
      }}
    >
      <canvas ref={canvasRef} className="wave__canvas" />
      {hover !== null && !disabled ? (
        <span className="wave__scrub" style={{ left: `${hover * 100}%` }}>
          <span className="wave__scrub-label">{formatStamp(hover * duration)}</span>
        </span>
      ) : null}
    </div>
  );
}
