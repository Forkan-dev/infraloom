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
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 1,
        background: 'var(--border)',
        borderRadius: 14,
        overflow: 'hidden',
        border: '1px solid var(--border)',
      }}
    >
      {[
        { label: 'REQ/MIN', value: reqs, color: '#3B82F6', seed: 0 },
        { label: 'P99 LATENCY', value: `${p99}ms`, color: '#8B5CF6', seed: 4 },
        { label: 'ERROR RATE', value: `${errPct}%`, color: '#06B6D4', seed: 8 },
      ].map((m, i) => (
        <div
          key={i}
          style={{
            padding: '14px 18px',
            background: 'var(--surface)',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          <span className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em' }}>
            {m.label}
          </span>
          <span style={{ fontSize: 22, fontWeight: 500, fontFamily: 'var(--font-mono)' }}>
            {m.value}
          </span>
          <Spark color={m.color} seed={m.seed} tick={tick} />
        </div>
      ))}
    </div>
  );
}

function Spark({ color, seed, tick }: { color: string; seed: number; tick: number }) {
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
    <svg width="160" height="44" viewBox="0 0 160 60">
      <polyline points={pts} stroke={color} strokeWidth="1.5" fill="none" />
      <polyline points={`${pts} 160,60 0,60`} fill={color} fillOpacity="0.1" stroke="none" />
    </svg>
  );
}
