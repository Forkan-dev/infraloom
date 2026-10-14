export function CaseVisualGeo() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: 24 }}>
      <svg viewBox="0 0 400 280" style={{ width: '100%', height: '100%' }}>
        <defs>
          <pattern id="geoDots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.6" fill="rgba(255,255,255,0.1)" />
          </pattern>
        </defs>
        <rect width="400" height="280" fill="url(#geoDots)" />
        <path d="M 0 100 C 100 110, 200 60, 400 90" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" fill="none" />
        <path d="M 0 200 C 120 180, 220 220, 400 180" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" fill="none" />
        <path d="M 80 0 C 90 100, 130 180, 100 280" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" fill="none" />
        <path d="M 280 0 C 270 80, 310 200, 320 280" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" fill="none" />
        {[
          { x: 60, y: 105, color: '#3b82f6' },
          { x: 180, y: 90, color: '#8b5cf6' },
          { x: 320, y: 88, color: '#06b6d4' },
          { x: 140, y: 195, color: '#22c55e' },
          { x: 280, y: 210, color: '#f59e0b' },
        ].map((v, i) => (
          <g key={i}>
            <circle cx={v.x} cy={v.y} r="14" fill="none" stroke={v.color} strokeWidth="1" opacity="0.4">
              <animate attributeName="r" values="6;18;6" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={v.x} cy={v.y} r="4" fill={v.color} />
          </g>
        ))}
        <g transform="translate(20, 230)">
          <rect width="180" height="34" rx="6" fill="rgba(15,16,19,0.9)" stroke="rgba(255,255,255,0.1)" />
          <text x="12" y="14" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="Geist Mono">FLEET · TENANT-A</text>
          <text x="12" y="28" fill="#fff" fontSize="11" fontFamily="Geist Mono">92,418 vehicles · live</text>
        </g>
      </svg>
    </div>
  );
}

export function CaseVisualHRM() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
        {['Overview', 'People', 'Payroll', 'Reports'].map((t, i) => (
          <span key={i} className="mono" style={{
            fontSize: 10, padding: '5px 9px', borderRadius: 6,
            color: i === 0 ? '#fff' : 'var(--fg-3)',
            background: i === 0 ? 'rgba(99,102,241,0.2)' : 'transparent',
            border: i === 0 ? '1px solid rgba(99,102,241,0.4)' : '1px solid var(--border)',
          }}>{t}</span>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {[{ l: 'Headcount', v: '14,028' }, { l: 'Active', v: '12,901' }, { l: 'Tenure', v: '3.4y' }].map((s, i) => (
          <div key={i} style={{ padding: 10, border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)' }}>
            <div style={{ fontSize: 9, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)' }}>{s.l.toUpperCase()}</div>
            <div style={{ fontSize: 16, fontFamily: 'var(--font-mono)', fontWeight: 500 }}>{s.v}</div>
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: 12, border: '1px solid var(--border)', borderRadius: 10, background: 'var(--surface-2)' }}>
        <svg viewBox="0 0 280 100" style={{ width: '100%', height: '100%' }}>
          <polyline points="0,75 30,68 60,72 90,55 120,60 150,40 180,48 210,30 240,38 280,22" stroke="#8b5cf6" fill="none" strokeWidth="1.5" />
          <polyline points="0,85 30,80 60,82 90,75 120,72 150,65 180,68 210,55 240,58 280,48" stroke="#3b82f6" fill="none" strokeWidth="1.5" />
        </svg>
      </div>
      <div style={{ fontSize: 10, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)' }}>
        DEPLOYED · 28 COUNTRIES · SOC 2 TYPE II
      </div>
    </div>
  );
}

export function CaseVisualPixel() {
  return (
    <div className="cv-pixel">
      <svg viewBox="0 0 400 320" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const r = 120;
          const x = 200 + Math.cos(a) * r;
          const y = 160 + Math.sin(a) * r;
          return (
            <g key={i}>
              <line x1="200" y1="160" x2={x} y2={y} stroke="rgba(232, 237, 255,0.18)" strokeWidth="1" />
              <line x1="200" y1="160" x2={x} y2={y} stroke="var(--blue)" strokeWidth="1.5" strokeDasharray="2 6" />
              <rect x={x - 14} y={y - 9} width="28" height="18" fill="var(--navy)" stroke="rgba(232, 237, 255,0.45)" />
              <text x={x} y={y + 3.5} fill="var(--cream)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">UE{i + 1}</text>
            </g>
          );
        })}
        <circle cx="200" cy="160" r="46" fill="var(--navy)" stroke="var(--blue)" strokeWidth="8" />
        <text x="200" y="158" fill="var(--cream)" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="1">ORCHESTRATOR</text>
        <text x="200" y="172" fill="rgba(232, 237, 255,0.55)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">go · grpc · 14k/s</text>
      </svg>
      <style>{`
        .cv-pixel { position: absolute; inset: 0; background: var(--navy); display: flex; align-items: center; justify-content: center; }
        .cv-pixel svg { width: 100%; height: 100%; }
      `}</style>
    </div>
  );
}
