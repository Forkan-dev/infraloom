'use client';

export function ArchitectureHero() {
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', maxWidth: 760 }}>
      <svg viewBox="0 0 760 480" width="100%" height="100%" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="boxGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <filter id="archGlow">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        <g opacity="0.15">
          {Array.from({ length: 11 }).map((_, r) =>
            Array.from({ length: 18 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={20 + c * 42} cy={30 + r * 42} r="1" fill="#fff" />
            ))
          )}
        </g>

        {[
          'M 110 100 C 200 100, 220 240, 320 240',
          'M 110 200 C 200 200, 240 240, 320 240',
          'M 110 300 C 200 300, 240 240, 320 240',
          'M 110 400 C 200 400, 240 240, 320 240',
          'M 440 240 C 540 240, 540 100, 640 100',
          'M 440 240 C 540 240, 540 200, 640 200',
          'M 440 240 C 540 240, 540 300, 640 300',
          'M 440 240 C 540 240, 540 400, 640 400',
        ].map((d, i) => (
          <g key={i}>
            <path d={d} stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
            <path
              d={d}
              stroke="url(#lineGrad)"
              strokeWidth="1.6"
              fill="none"
              strokeDasharray="6 14"
              style={{
                animation: `flow${i % 2} 3s linear infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          </g>
        ))}

        {[
          { y: 100, label: 'WEB', sub: 'next.js' },
          { y: 200, label: 'iOS', sub: 'swift' },
          { y: 300, label: 'DROID', sub: 'kotlin' },
          { y: 400, label: 'API', sub: 'partners' },
        ].map((n, i) => (
          <ArchNode key={i} x={20} y={n.y - 22} w={90} h={44} label={n.label} sub={n.sub} />
        ))}

        <ArchNode x={320} y={205} w={120} h={70} label="API GATEWAY" sub="kong · oauth2 · rl" accent />

        {[
          { y: 100, label: 'AUTH', sub: 'laravel' },
          { y: 200, label: 'STREAM', sub: 'golang' },
          { y: 300, label: 'EVENTS', sub: 'rabbitmq' },
          { y: 400, label: 'LOGS', sub: 'fluent-bit' },
        ].map((n, i) => (
          <ArchNode key={i} x={640} y={n.y - 22} w={100} h={44} label={n.label} sub={n.sub} />
        ))}

        <circle cx="380" cy="240" r="40" fill="none" stroke="rgba(139,92,246,0.5)" strokeWidth="1.2" filter="url(#archGlow)">
          <animate attributeName="r" values="40;70;40" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
        </circle>

        <g style={{ animation: 'floaty 6s ease-in-out infinite' }}>
          <rect x="200" y="50" width="80" height="22" rx="4" fill="rgba(15,16,19,0.95)" stroke="rgba(139,92,246,0.4)" />
          <text x="240" y="65" fill="#c4b5fd" fontSize="10" fontFamily="Geist Mono" textAnchor="middle">200 OK · 38ms</text>
        </g>
        <g style={{ animation: 'floaty 6s ease-in-out infinite', animationDelay: '2s' }}>
          <rect x="460" y="370" width="100" height="22" rx="4" fill="rgba(15,16,19,0.95)" stroke="rgba(59,130,246,0.4)" />
          <text x="510" y="385" fill="#93c5fd" fontSize="10" fontFamily="Geist Mono" textAnchor="middle">stream.frame · 12k/s</text>
        </g>
      </svg>

      <style>{`
        @keyframes flow0 { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -40; } }
        @keyframes flow1 { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -40; } }
        @keyframes floaty {
          0%, 100% { transform: translateY(0); opacity: 0.9; }
          50% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

interface ArchNodeProps {
  x: number; y: number; w: number; h: number;
  label: string; sub: string; accent?: boolean;
}

function ArchNode({ x, y, w, h, label, sub, accent }: ArchNodeProps) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="10"
        fill={accent ? 'rgba(139,92,246,0.08)' : 'rgba(24,25,28,0.8)'}
        stroke={accent ? 'rgba(139,92,246,0.5)' : 'rgba(255,255,255,0.12)'}
        strokeWidth="1"
      />
      <rect x={x} y={y} width={w} height={h} rx="10" fill="url(#boxGrad)" />
      <text x={x + w / 2} y={y + h / 2 - 2}
        fill={accent ? '#c4b5fd' : '#fff'}
        fontSize="11" fontFamily="Geist Mono" fontWeight="500"
        textAnchor="middle" style={{ letterSpacing: '0.08em' }}
      >{label}</text>
      <text x={x + w / 2} y={y + h / 2 + 12}
        fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="Geist Mono" textAnchor="middle"
      >{sub}</text>
    </g>
  );
}
