import { Reveal } from '@/components/shared/Reveal';
import { SectionHead } from '@/components/shared/SectionHead';
import { LiveMetrics } from '@/components/diagrams/LiveMetrics';

function GitWorkflowVisual() {
  return (
    <svg viewBox="0 0 480 180" style={{ width: '100%', height: 'auto' }}>
      <line x1="20" y1="40" x2="460" y2="40" stroke="rgba(255,255,255,0.18)" />
      <line x1="20" y1="100" x2="460" y2="100" stroke="rgba(139,92,246,0.5)" strokeWidth="2" />
      <line x1="20" y1="160" x2="460" y2="160" stroke="rgba(255,255,255,0.18)" />
      <text x="20" y="32" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Geist Mono">feature/auth-rbac</text>
      <text x="20" y="92" fill="#c4b5fd" fontSize="10" fontFamily="Geist Mono" fontWeight="500">main (trunk)</text>
      <text x="20" y="152" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Geist Mono">feature/billing-meter</text>
      {[60, 130, 240, 350, 440].map((x, i) => (
        <circle key={i} cx={x} cy={100} r="5" fill="#8b5cf6" stroke="#0a0a0b" strokeWidth="2" />
      ))}
      {[100, 180].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={40} r="4" fill="#3b82f6" stroke="#0a0a0b" strokeWidth="2" />
          <path d={`M ${x} 44 C ${x} 70, ${x + 30} 80, ${x + 30} 100`} stroke="rgba(59,130,246,0.5)" fill="none" />
        </g>
      ))}
      {[260, 340].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={160} r="4" fill="#06b6d4" stroke="#0a0a0b" strokeWidth="2" />
          <path d={`M ${x} 156 C ${x} 130, ${x + 20} 110, ${x + 20} 100`} stroke="rgba(6,182,212,0.5)" fill="none" />
        </g>
      ))}
    </svg>
  );
}

function CIPipelineVisual() {
  const stages = ['build', 'test', 'scan', 'stage', 'smoke', 'prod'];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      {stages.map((s, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1 }}>
          <div style={{
            flex: 1,
            padding: '10px 8px',
            border: '1px solid',
            background: i < 5 ? 'rgba(34,197,94,0.08)' : 'rgba(245,158,11,0.08)',
            borderColor: i < 5 ? 'rgba(34,197,94,0.4)' : 'rgba(245,158,11,0.4)',
            borderRadius: 8, textAlign: 'center',
            fontFamily: 'var(--font-mono)', fontSize: 11,
            color: i < 5 ? '#86efac' : '#fcd34d',
            position: 'relative',
          }}>
            {s}
            {i === 5 && (
              <div style={{
                position: 'absolute', top: -6, right: -6,
                width: 10, height: 10, borderRadius: '50%',
                background: 'var(--warning)', boxShadow: '0 0 8px var(--warning)',
                animation: 'ciPulse 1.5s infinite',
              }} />
            )}
          </div>
          {i < 5 && (
            <svg width="10" height="10" viewBox="0 0 10 10" style={{ flexShrink: 0, color: 'var(--fg-3)' }}>
              <path d="M 1 5 L 9 5 M 6 2 L 9 5 L 6 8" stroke="currentColor" fill="none" strokeWidth="1.2" />
            </svg>
          )}
        </div>
      ))}
      <style>{`@keyframes ciPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </div>
  );
}

function SprintVisual() {
  const days = Array.from({ length: 14 }, (_, i) => i);
  return (
    <div>
      <div style={{ display: 'flex', gap: 4 }}>
        {days.map((d, i) => (
          <div key={i} style={{
            flex: 1, height: 36, borderRadius: 4,
            background: i === 0 ? 'rgba(59,130,246,0.4)' :
                       i === 13 ? 'rgba(139,92,246,0.4)' :
                       i % 7 === 5 || i % 7 === 6 ? 'var(--surface-2)' :
                       `rgba(255,255,255,${0.06 + (i / 28)})`,
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--fg-3)',
          }}>
            {i === 0 ? 'P' : i === 13 ? 'D' : i + 1}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 10, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)' }}>
        <span>P → plan</span>
        <span>D → demo</span>
      </div>
    </div>
  );
}

export function WorkflowVisuals() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow="The way we work, day to day" title="Trunk-based, observable, automated." />
        </Reveal>
        <div className="proc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
          <div className="card" style={{ padding: 28 }}>
            <span className="eyebrow" style={{ marginBottom: 16 }}>Git workflow</span>
            <h4 style={{ margin: '16px 0 12px' }}>Trunk-based, short-lived branches.</h4>
            <p style={{ color: 'var(--fg-3)', margin: 0, fontSize: 14, marginBottom: 24 }}>
              Every PR is reviewed, tested in CI, and merged within 24 hours. Long-lived branches are an antipattern.
            </p>
            <GitWorkflowVisual />
          </div>
          <div className="card" style={{ padding: 28 }}>
            <span className="eyebrow" style={{ marginBottom: 16 }}>CI/CD pipeline</span>
            <h4 style={{ margin: '16px 0 12px' }}>Six gates from commit to prod.</h4>
            <p style={{ color: 'var(--fg-3)', margin: 0, fontSize: 14, marginBottom: 24 }}>
              Build, test, scan, staging deploy, smoke, prod canary. Average lead time: 22 minutes.
            </p>
            <CIPipelineVisual />
          </div>
          <div className="card" style={{ padding: 28 }}>
            <span className="eyebrow" style={{ marginBottom: 16 }}>Sprint cadence</span>
            <h4 style={{ margin: '16px 0 12px' }}>Two-week sprints, demoed end of cycle.</h4>
            <p style={{ color: 'var(--fg-3)', margin: 0, fontSize: 14, marginBottom: 24 }}>
              Mondays plan, Fridays demo. We measure throughput, not story points.
            </p>
            <SprintVisual />
          </div>
          <div className="card" style={{ padding: 28 }}>
            <span className="eyebrow" style={{ marginBottom: 16 }}>Observability stack</span>
            <h4 style={{ margin: '16px 0 12px' }}>Golden signals + SLOs.</h4>
            <p style={{ color: 'var(--fg-3)', margin: 0, fontSize: 14, marginBottom: 24 }}>
              Prometheus, Grafana, Loki and Tempo, correlated by OpenTelemetry trace IDs.
            </p>
            <LiveMetrics />
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 880px) { .proc-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
