'use client';

import { useEffect, useState } from 'react';

export function LiveMetrics() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1500);
    return () => clearInterval(id);
  }, []);

  const reqs = (12834 + tick * 137 + Math.floor(Math.sin(tick) * 89)).toLocaleString();
  const p99 = 38 + Math.floor(Math.sin(tick * 0.7) * 4);
  const errPct = (0.014 + Math.cos(tick * 0.3) * 0.005).toFixed(3);

  return (
    <div className="lm">
      {[
        { label: 'REQ/MIN', value: reqs, seed: 0 },
        { label: 'P99 LATENCY', value: `${p99}ms`, seed: 4 },
        { label: 'ERROR RATE', value: `${errPct}%`, seed: 8 },
      ].map((m, i) => (
        <div key={i} className="lm-cell">
          <span className="meta">{m.label}</span>
          <span className="lm-value">{m.value}</span>
          <Spark seed={m.seed} tick={tick} />
        </div>
      ))}
      <style>{`
        .lm { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
        .lm-cell { padding: 14px 14px 8px; display: flex; flex-direction: column; gap: 8px; min-width: 0; background: var(--ice); border-radius: 16px; }
        .lm-cell .meta { color: var(--ultramarine); letter-spacing: 0.08em; }
        .lm-value { font-family: var(--font-display); font-size: clamp(20px, 2.2vw, 28px); font-weight: 500; line-height: 1; letter-spacing: -0.04em; font-variant-numeric: tabular-nums; color: var(--primary); overflow: hidden; text-overflow: ellipsis; }
        [data-theme="dark"] .lm-cell { background: var(--paper-3); }
        [data-theme="dark"] .lm-cell .meta { color: var(--text-muted); }
        [data-theme="dark"] .lm-value { color: var(--signal); }
        .lm-cell svg { width: 100%; height: 40px; color: var(--blue); }
      `}</style>
    </div>
  );
}

function Spark({ seed, tick }: { seed: number; tick: number }) {
  const pts = Array.from({ length: 24 })
    .map((_, i) => {
      const v =
        30 +
        Math.sin((i + tick + seed) * 0.6) * 10 +
        Math.cos((i + tick) * 0.3) * 6;
      return `${i * (160 / 23)},${v}`;
    })
    .join(' ');

  return (
    <svg viewBox="0 0 160 60" preserveAspectRatio="none" aria-hidden="true">
      <polyline points={pts} stroke="currentColor" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
