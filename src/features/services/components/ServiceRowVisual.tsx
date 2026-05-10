import { CodeBlock } from '@/components/ui/CodeBlock';
import { Tags } from '@/components/ui/Tags';

type ServiceRowVisualKind = 'code' | 'saas' | 'enterprise' | 'mobile' | 'ai' | 'cloud' | 'devops' | 'consult' | 'stream' | 'scale';

export function ServiceRowVisual({ kind }: { kind: ServiceRowVisualKind }) {
  if (kind === 'code') {
    return (
      <div style={{ position: 'absolute', inset: 24 }}>
        <CodeBlock filename="apps/web/src/server.ts" lang="typescript">
          <>
            <span className="tok-c">{'// idempotent + traced + retried'}</span>{'\n'}
            <span className="tok-k">export async function</span> <span className="tok-f">handleOrder</span>(req: Request) {'{'}{'\n'}
            {'  '}<span className="tok-k">const</span> ctx = <span className="tok-f">trace</span>(req, <span className="tok-s">&quot;order.create&quot;</span>);{'\n'}
            {'  '}<span className="tok-k">const</span> idem = req.headers.<span className="tok-p">idempotencyKey</span>;{'\n'}
            {'  '}<span className="tok-k">return</span> <span className="tok-f">withRetry</span>(ctx, <span className="tok-k">async</span> () =&gt; {'{'}{'\n'}
            {'    '}<span className="tok-k">const</span> result = <span className="tok-k">await</span> orders.<span className="tok-f">create</span>(ctx, idem);{'\n'}
            {'    '}<span className="tok-k">await</span> events.<span className="tok-f">publish</span>(<span className="tok-s">&quot;order.created&quot;</span>, result);{'\n'}
            {'    '}<span className="tok-k">return</span> result;{'\n'}
            {'  '}{')'};{'\n'}
            {'}'}
          </>
        </CodeBlock>
      </div>
    );
  }
  if (kind === 'saas') {
    return (
      <div style={{ position: 'absolute', inset: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 10, border: '1px solid var(--border)', borderRadius: 8 }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }} />
          <div style={{ flex: 1, fontSize: 12, fontFamily: 'var(--font-mono)' }}>tenant: acme-corp</div>
          <span className="chip">enterprise</span>
        </div>
        {[
          { l: 'MAU', v: '412,290', c: '#3b82f6' },
          { l: 'Workspaces', v: '1,820', c: '#8b5cf6' },
          { l: 'API calls (24h)', v: '8.4M', c: '#06b6d4' },
        ].map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: 12, border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)' }}>
            <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)' }}>{m.l}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, color: m.c }}>{m.v}</span>
          </div>
        ))}
      </div>
    );
  }
  if (kind === 'enterprise') {
    return (
      <div style={{ position: 'absolute', inset: 24 }}>
        <svg viewBox="0 0 320 240" style={{ width: '100%', height: '100%' }}>
          <rect x="10" y="20" width="80" height="60" rx="6" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.5)" strokeDasharray="3 4" />
          <text x="50" y="44" fill="#fca5a5" fontSize="10" fontFamily="Geist Mono" textAnchor="middle">LEGACY</text>
          <text x="50" y="58" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="Geist Mono" textAnchor="middle">cobol · vb6</text>
          <path d="M 90 50 L 230 50" stroke="rgba(139,92,246,0.6)" strokeWidth="1.4" strokeDasharray="3 5"
            style={{ animation: 'srvEntFlow 3s linear infinite' }} />
          <rect x="230" y="20" width="80" height="60" rx="6" fill="rgba(139,92,246,0.08)" stroke="rgba(139,92,246,0.5)" />
          <text x="270" y="44" fill="#c4b5fd" fontSize="10" fontFamily="Geist Mono" textAnchor="middle">STRANGLER</text>
          <text x="270" y="58" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="Geist Mono" textAnchor="middle">go · grpc</text>
          <rect x="60" y="120" width="200" height="60" rx="6" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.4)" />
          <text x="160" y="144" fill="#93c5fd" fontSize="10" fontFamily="Geist Mono" textAnchor="middle">ENTERPRISE PLATFORM</text>
          <text x="160" y="160" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="Geist Mono" textAnchor="middle">SSO · RBAC · AUDIT · SOC2</text>
          <text x="160" y="220" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="Geist Mono" textAnchor="middle">migrate. observe. retire.</text>
          <style>{`@keyframes srvEntFlow { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -44; } }`}</style>
        </svg>
      </div>
    );
  }
  if (kind === 'mobile') {
    return (
      <div style={{ position: 'absolute', inset: 24, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 14 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 90, height: 180, borderRadius: 18,
            background: 'linear-gradient(180deg, var(--surface-2), var(--bg-2))',
            border: '1px solid var(--border-2)',
            transform: `rotate(${(i - 1) * 6}deg) translateY(${i === 1 ? -10 : 0}px)`,
            padding: 8, display: 'flex', flexDirection: 'column', gap: 4,
          }}>
            <div style={{ width: 24, height: 4, borderRadius: 4, background: 'var(--border-2)', margin: '0 auto' }} />
            <div style={{ height: 8, background: 'var(--surface)', borderRadius: 4 }} />
            <div style={{ height: 32, background: i === 1 ? 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3))' : 'var(--surface)', borderRadius: 6 }} />
            <div style={{ height: 6, background: 'var(--surface)', borderRadius: 4, width: '70%' }} />
            <div style={{ height: 6, background: 'var(--surface)', borderRadius: 4, width: '85%' }} />
            <div style={{ marginTop: 'auto', height: 26, background: 'var(--surface)', borderRadius: 6 }} />
          </div>
        ))}
      </div>
    );
  }
  if (kind === 'ai') {
    return (
      <div style={{ position: 'absolute', inset: 24 }}>
        <CodeBlock filename="agent.py" lang="python">
          <>
            <span className="tok-k">from</span> infra.rag <span className="tok-k">import</span> retrieve, embed{'\n'}
            <span className="tok-k">from</span> infra.llm <span className="tok-k">import</span> local_llama{'\n\n'}
            <span className="tok-k">async def</span> <span className="tok-f">answer</span>(q: <span className="tok-k">str</span>):{'\n'}
            {'    '}vec = <span className="tok-k">await</span> <span className="tok-f">embed</span>(q){'\n'}
            {'    '}ctx = <span className="tok-k">await</span> <span className="tok-f">retrieve</span>(vec, k=<span className="tok-n">8</span>){'\n'}
            {'    '}<span className="tok-k">async for</span> tok <span className="tok-k">in</span> local_llama.<span className="tok-f">stream</span>(q, ctx):{'\n'}
            {'        '}<span className="tok-k">yield</span> tok{'\n'}
            <span className="tok-c">{'# 0 data leaves your VPC'}</span>
          </>
        </CodeBlock>
      </div>
    );
  }
  if (kind === 'cloud') {
    return (
      <div style={{ position: 'absolute', inset: 24, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gridTemplateRows: 'repeat(4,1fr)', gap: 6 }}>
        {Array.from({ length: 16 }).map((_, i) => {
          const variants = [
            { bg: 'rgba(59,130,246,0.18)', st: 'rgba(59,130,246,0.5)' },
            { bg: 'rgba(139,92,246,0.18)', st: 'rgba(139,92,246,0.5)' },
            { bg: 'rgba(6,182,212,0.18)', st: 'rgba(6,182,212,0.5)' },
            { bg: 'rgba(255,255,255,0.03)', st: 'rgba(255,255,255,0.1)' },
          ];
          const v = variants[i % 4];
          return <div key={i} style={{ background: v.bg, border: `1px solid ${v.st}`, borderRadius: 6 }} />;
        })}
      </div>
    );
  }
  if (kind === 'devops') {
    const stages = ['build', 'test', 'scan', 'deploy:staging', 'smoke', 'deploy:prod'];
    return (
      <div style={{ position: 'absolute', inset: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {stages.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 18, height: 18, borderRadius: '50%',
              background: i < 4 ? 'var(--success)' : i === 4 ? 'var(--warning)' : 'var(--border-2)',
              boxShadow: i < 4 ? '0 0 8px var(--success)' : 'none',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 9, color: '#000',
            }}>
              {i < 4 ? '✓' : i === 4 ? '·' : ''}
            </div>
            <div style={{ flex: 1, height: 8, borderRadius: 4, background: 'var(--surface-2)', overflow: 'hidden' }}>
              <div style={{
                height: '100%', width: i < 4 ? '100%' : i === 4 ? '60%' : '0%',
                background: i < 4 ? 'linear-gradient(90deg, #22c55e, #06b6d4)' : 'var(--warning)',
              }} />
            </div>
            <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', width: 110 }}>{s}</span>
          </div>
        ))}
      </div>
    );
  }
  if (kind === 'consult') {
    return (
      <div style={{ position: 'absolute', inset: 24 }}>
        <svg viewBox="0 0 320 220" style={{ width: '100%', height: '100%' }}>
          <g stroke="rgba(255,255,255,0.5)" fill="none" strokeWidth="1">
            <rect x="20" y="20" width="60" height="40" rx="4" />
            <rect x="100" y="20" width="60" height="40" rx="4" />
            <rect x="180" y="20" width="60" height="40" rx="4" />
            <rect x="260" y="20" width="40" height="40" rx="4" />
            <rect x="20" y="100" width="100" height="40" rx="4" />
            <rect x="140" y="100" width="160" height="40" rx="4" />
            <rect x="20" y="160" width="280" height="40" rx="4" />
            <line x1="50" y1="60" x2="50" y2="100" />
            <line x1="130" y1="60" x2="70" y2="100" />
            <line x1="210" y1="60" x2="220" y2="100" />
            <line x1="280" y1="60" x2="220" y2="100" />
            <line x1="70" y1="140" x2="160" y2="160" />
            <line x1="220" y1="140" x2="160" y2="160" />
          </g>
          <circle cx="100" cy="100" r="3" fill="rgba(239,68,68,0.7)" />
          <text x="108" y="104" fill="#fca5a5" fontSize="9" fontFamily="Geist Mono">SPOF</text>
          <circle cx="200" cy="20" r="3" fill="rgba(245,158,11,0.7)" />
          <text x="208" y="24" fill="#fcd34d" fontSize="9" fontFamily="Geist Mono">N+1</text>
          <text x="160" y="210" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="Geist Mono" textAnchor="middle">design review · day 3</text>
        </svg>
      </div>
    );
  }
  if (kind === 'stream') {
    return (
      <div style={{ position: 'absolute', inset: 24 }}>
        <svg viewBox="0 0 360 220" style={{ width: '100%', height: '100%' }}>
          <defs>
            <linearGradient id="srvStream" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="10" y="90" width="60" height="40" rx="4" fill="rgba(20,21,24,0.9)" stroke="rgba(255,255,255,0.15)" />
          <text x="40" y="115" fill="#fff" fontSize="9" fontFamily="Geist Mono" textAnchor="middle">PUBLISHER</text>
          {[50, 100, 150].map((y, i) => (
            <g key={i}>
              <rect x="160" y={y} width="60" height="40" rx="4" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.5)" />
              <text x="190" y={y + 24} fill="#c4b5fd" fontSize="9" fontFamily="Geist Mono" textAnchor="middle">{i < 2 ? `QUEUE ${String.fromCharCode(65 + i)}` : 'DLQ'}</text>
            </g>
          ))}
          {[20, 70, 120, 170].map((y, i) => (
            <g key={i}>
              <rect x="290" y={y} width="60" height="30" rx="4" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.4)" />
              <text x="320" y={y + 19} fill="#67e8f9" fontSize="9" fontFamily="Geist Mono" textAnchor="middle">CONSUMER {i + 1}</text>
            </g>
          ))}
          {['M 70 110 L 160 70', 'M 70 110 L 160 120', 'M 70 110 L 160 170',
            'M 220 70 L 290 35', 'M 220 70 L 290 85', 'M 220 120 L 290 135', 'M 220 120 L 290 185'].map((d, i) => (
            <path key={i} d={d} stroke="url(#srvStream)" strokeWidth="1.4" strokeDasharray="3 6" fill="none"
              style={{ animation: 'srvStreamFlow 3s linear infinite', animationDelay: `${i * 0.18}s` }} />
          ))}
          <style>{`@keyframes srvStreamFlow { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -36; } }`}</style>
        </svg>
      </div>
    );
  }
  if (kind === 'scale') {
    return (
      <div style={{ position: 'absolute', inset: 24 }}>
        <svg viewBox="0 0 320 220" style={{ width: '100%', height: '100%' }}>
          <defs>
            <linearGradient id="srvScaleArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g stroke="rgba(255,255,255,0.06)">
            {[40, 80, 120, 160].map((y, i) => <line key={i} x1="0" x2="320" y1={y} y2={y} />)}
          </g>
          <polyline points="0,180 30,178 60,170 90,160 120,150 150,130 180,140 210,110 240,90 270,70 300,50 320,40"
            stroke="#22c55e" strokeWidth="1.5" fill="none" />
          <polygon points="0,180 30,178 60,170 90,160 120,150 150,130 180,140 210,110 240,90 270,70 300,50 320,40 320,200 0,200"
            fill="url(#srvScaleArea)" />
          <circle cx="180" cy="140" r="3" fill="#22c55e" />
          <circle cx="240" cy="90" r="3" fill="#22c55e" />
          <circle cx="300" cy="50" r="3" fill="#22c55e" />
          <text x="184" y="134" fill="#86efac" fontSize="9" fontFamily="Geist Mono">v2.4 launch</text>
          <text x="244" y="84" fill="#86efac" fontSize="9" fontFamily="Geist Mono">10× scale</text>
          <text x="290" y="44" fill="#86efac" fontSize="9" fontFamily="Geist Mono" textAnchor="end">today</text>
        </svg>
      </div>
    );
  }
  return null;
}
