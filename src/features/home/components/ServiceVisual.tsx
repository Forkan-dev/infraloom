type ServiceVisualKind = 'web' | 'stream' | 'ai' | 'cloud' | 'mobile' | 'devops';

export function ServiceVisual({ kind }: { kind: ServiceVisualKind }) {
  if (kind === 'web') {
    return (
      <div style={{ position: 'relative', height: 130, borderRadius: 10, overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.04))',
        border: '1px solid var(--border)' }}>
        <div style={{ position: 'absolute', top: 12, left: 12, right: 12, height: 22,
          borderRadius: 5, background: 'var(--surface-2)', display: 'flex', alignItems: 'center', padding: '0 8px', gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: 50, background: '#ef4444' }} />
          <span style={{ width: 6, height: 6, borderRadius: 50, background: '#f59e0b' }} />
          <span style={{ width: 6, height: 6, borderRadius: 50, background: '#22c55e' }} />
          <span className="mono" style={{ fontSize: 9, color: 'var(--fg-3)', marginLeft: 10 }}>app.client.com/dashboard</span>
        </div>
        <div style={{ position: 'absolute', top: 46, left: 12, right: 12, bottom: 12, display: 'grid', gridTemplateColumns: '60px 1fr', gap: 6 }}>
          <div style={{ background: 'var(--surface-2)', borderRadius: 5 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(59,130,246,0.05))', borderRadius: 5 }} />
            <div style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(139,92,246,0.05))', borderRadius: 5 }} />
            <div style={{ background: 'var(--surface-2)', borderRadius: 5, gridColumn: 'span 2' }} />
          </div>
        </div>
      </div>
    );
  }
  if (kind === 'stream') {
    return (
      <svg viewBox="0 0 200 130" style={{ width: '100%', height: 130 }}>
        <defs>
          <linearGradient id="svStream" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[20, 50, 80, 110].map((y, i) => (
          <g key={i}>
            <line x1="0" x2="200" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />
            <line x1="0" x2="200" y1={y} y2={y} stroke="url(#svStream)" strokeWidth="1.5" strokeDasharray="3 6"
              style={{ animation: 'svFlow 3s linear infinite', animationDelay: `${i * 0.3}s` }} />
          </g>
        ))}
        {[{ x: 28, y: 20 }, { x: 100, y: 50 }, { x: 60, y: 80 }, { x: 150, y: 110 }, { x: 120, y: 20 }, { x: 170, y: 80 }].map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3" fill="#06b6d4">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
          </circle>
        ))}
        <style>{`@keyframes svFlow { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -36; } }`}</style>
      </svg>
    );
  }
  if (kind === 'ai') {
    return (
      <div style={{ height: 130, borderRadius: 10, padding: 14, background: 'var(--surface-2)', border: '1px solid var(--border)',
        display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 11 }}>
        <span style={{ color: 'var(--fg-3)' }}>&gt; query.embed(&quot;user_doc.pdf&quot;)</span>
        <span style={{ color: '#c4b5fd' }}>↳ vector[1536] · 12ms</span>
        <span style={{ color: 'var(--fg-3)' }}>&gt; rag.retrieve(top=8)</span>
        <span style={{ color: '#86efac' }}>↳ 8 chunks · 0.91 sim</span>
        <span style={{ color: 'var(--fg-3)' }}>&gt; agent.run() ▍</span>
      </div>
    );
  }
  if (kind === 'cloud') {
    return (
      <svg viewBox="0 0 200 130" style={{ width: '100%', height: 130 }}>
        {[0, 1, 2, 3].map(c => [0, 1, 2, 3].map(r => (
          <rect key={`${c}-${r}`} x={20 + c * 40} y={20 + r * 24} width="32" height="18" rx="3"
            fill={(c + r) % 3 === 0 ? 'rgba(99,102,241,0.18)' : 'rgba(255,255,255,0.03)'}
            stroke={(c + r) % 3 === 0 ? 'rgba(99,102,241,0.5)' : 'rgba(255,255,255,0.1)'} />
        )))}
      </svg>
    );
  }
  if (kind === 'mobile') {
    return (
      <div style={{ height: 130, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 50, height: 100, borderRadius: 8,
            border: '1px solid var(--border-2)',
            background: `linear-gradient(180deg, rgba(${i === 1 ? '139,92,246' : '59,130,246'},0.2), transparent)`,
            transform: `translateY(${i === 1 ? -8 : 0}px) rotate(${(i - 1) * 4}deg)`,
            display: 'flex', flexDirection: 'column', padding: 6, gap: 4,
          }}>
            <div style={{ width: 14, height: 2, background: 'var(--border-2)', borderRadius: 2, margin: '0 auto 4px' }} />
            <div style={{ height: 8, background: 'var(--surface-2)', borderRadius: 2 }} />
            <div style={{ height: 4, background: 'var(--surface-2)', borderRadius: 2, width: '70%' }} />
            <div style={{ height: 22, background: i === 1 ? 'rgba(139,92,246,0.3)' : 'var(--surface-2)', borderRadius: 4, marginTop: 'auto' }} />
          </div>
        ))}
      </div>
    );
  }
  if (kind === 'devops') {
    return (
      <svg viewBox="0 0 400 130" style={{ width: '100%', height: 130 }}>
        <defs>
          <linearGradient id="svDevops1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="svDevops2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline points="0,80 30,75 60,82 90,60 120,55 150,48 180,52 210,40 240,45 270,30 300,38 330,28 360,22 400,18"
          stroke="#22c55e" strokeWidth="1.5" fill="none" />
        <polygon points="0,80 30,75 60,82 90,60 120,55 150,48 180,52 210,40 240,45 270,30 300,38 330,28 360,22 400,18 400,130 0,130"
          fill="url(#svDevops1)" />
        <polyline points="0,100 30,95 60,90 90,93 120,85 150,87 180,82 210,75 240,80 270,72 300,68 330,72 360,65 400,60"
          stroke="#3b82f6" strokeWidth="1.5" fill="none" />
        <polygon points="0,100 30,95 60,90 90,93 120,85 150,87 180,82 210,75 240,80 270,72 300,68 330,72 360,65 400,60 400,130 0,130"
          fill="url(#svDevops2)" />
        <text x="380" y="14" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="Geist Mono" textAnchor="end">SLO 99.95%</text>
      </svg>
    );
  }
  return null;
}
