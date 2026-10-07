import { Reveal } from '@/components/shared/Reveal';
import { SectionHead } from '@/components/shared/SectionHead';
import { LiveMetrics } from '@/components/diagrams/LiveMetrics';

function GitWorkflowVisual() {
  return (
    <svg viewBox="0 0 480 180" className="wf-svg" aria-hidden="true">
      <line x1="20" y1="40" x2="460" y2="40" stroke="var(--rule)" />
      <line x1="20" y1="100" x2="460" y2="100" stroke="var(--blue)" strokeWidth="2" />
      <line x1="20" y1="160" x2="460" y2="160" stroke="var(--rule)" />
      <text x="20" y="30" fill="var(--ink-3)" fontSize="10" fontFamily="var(--font-mono)">feature/auth-rbac</text>
      <text x="20" y="90" fill="var(--blue)" fontSize="10" fontFamily="var(--font-mono)" fontWeight="500">main (trunk)</text>
      <text x="20" y="150" fill="var(--ink-3)" fontSize="10" fontFamily="var(--font-mono)">feature/billing-meter</text>
      {[60, 130, 240, 350, 440].map((x, i) => (
        <circle key={i} cx={x} cy={100} r="5.5" fill="var(--blue)" />
      ))}
      {[100, 180].map((x, i) => (
        <g key={i}>
          <path d={`M ${x} 44 V 72 H ${x + 30} V 100`} stroke="var(--ink-4)" fill="none" />
          <circle cx={x} cy={40} r="4.5" fill="var(--surface)" stroke="var(--signal)" strokeWidth="1.6" />
        </g>
      ))}
      {[260, 340].map((x, i) => (
        <g key={i}>
          <path d={`M ${x} 156 V 128 H ${x + 20} V 100`} stroke="var(--ink-4)" fill="none" />
          <circle cx={x} cy={160} r="4.5" fill="var(--surface)" stroke="var(--signal)" strokeWidth="1.6" />
        </g>
      ))}
    </svg>
  );
}

function CIPipelineVisual() {
  const stages = ['build', 'test', 'scan', 'stage', 'smoke', 'prod'];
  return (
    <div className="ci">
      {stages.map((s, i) => (
        <div key={i} className={`ci-step ${i === 5 ? 'is-live' : ''}`}>
          <span className="ci-bar" />
          <span className="ci-label">{s}</span>
        </div>
      ))}
      <style>{`
        .ci { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 4px; }
        .ci-step { display: flex; flex-direction: column; gap: 10px; }
        .ci-bar { height: 10px; border-radius: 999px; background: var(--periwinkle); }
        .ci-step.is-live .ci-bar { background: var(--primary); animation: ciPulse 1.6s var(--ease) infinite; }
        .ci-label { font-family: var(--font-mono); font-size: 11px; color: var(--ink-3); }
        .ci-step.is-live .ci-label { color: var(--blue); }
        @keyframes ciPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
      `}</style>
    </div>
  );
}

function SprintVisual() {
  const days = Array.from({ length: 14 }, (_, i) => i);
  return (
    <div>
      <div className="sprint">
        {days.map((i) => (
          <div
            key={i}
            className={`sprint-day ${i === 0 ? 'is-plan' : ''} ${i === 13 ? 'is-demo' : ''} ${i % 7 === 5 || i % 7 === 6 ? 'is-off' : ''}`}
            style={{ height: `${36 + (i / 13) * 28}px` }}
          >
            {i === 0 ? 'P' : i === 13 ? 'D' : ''}
          </div>
        ))}
      </div>
      <div className="sprint-key">
        <span>P → plan</span>
        <span>D → demo</span>
      </div>
      <style>{`
        .sprint { display: flex; gap: 4px; align-items: flex-end; }
        .sprint-day {
          flex: 1; background: var(--ice); border-radius: 8px;
          display: flex; align-items: flex-end; justify-content: center; padding-bottom: 6px;
          font-family: var(--font-mono); font-size: 10px; color: #fff;
        }
        .sprint-day.is-off { background: transparent; border: 1px dashed var(--periwinkle); }
        .sprint-day.is-plan { background: var(--ultramarine); }
        .sprint-day.is-demo { background: var(--chartreuse); color: var(--ultramarine); }
        [data-theme="dark"] .sprint-day.is-plan { color: var(--paper); }
        .sprint-key { display: flex; justify-content: space-between; margin-top: 10px; font-size: 10px; color: var(--ink-3); font-family: var(--font-mono); }
      `}</style>
    </div>
  );
}

const BLOCKS = [
  {
    eyebrow: 'Git workflow',
    title: 'Trunk-based, short-lived branches.',
    body: 'Every PR is reviewed, tested in CI, and merged within 24 hours. Long-lived branches are an antipattern.',
    visual: <GitWorkflowVisual />,
  },
  {
    eyebrow: 'CI/CD pipeline',
    title: 'Six gates from commit to prod.',
    body: 'Build, test, scan, staging deploy, smoke, prod canary. Average lead time: 22 minutes.',
    visual: <CIPipelineVisual />,
  },
  {
    eyebrow: 'Sprint cadence',
    title: 'Two-week sprints, demoed end of cycle.',
    body: 'Mondays plan, Fridays demo. We measure throughput, not story points.',
    visual: <SprintVisual />,
  },
  {
    eyebrow: 'Observability stack',
    title: 'Golden signals + SLOs.',
    body: 'Prometheus, Grafana, Loki and Tempo, correlated by OpenTelemetry trace IDs.',
    visual: <LiveMetrics />,
  },
];

export function WorkflowVisuals() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow="The way we work, day to day" title="Trunk-based, observable, automated." />
        </Reveal>
        <div className="wf-grid">
          {BLOCKS.map((b) => (
            <Reveal key={b.eyebrow} className="wf">
              <span className="meta">{b.eyebrow}</span>
              <h3 className="wf-title">{b.title}</h3>
              <p className="wf-body">{b.body}</p>
              <div className="wf-visual">{b.visual}</div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .wf-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
        .wf { padding: 28px 28px 32px; background: var(--surface); border-radius: var(--radius-card); display: flex; flex-direction: column; }
        .wf-title { margin: 16px 0 12px; font-size: clamp(22px, 2.1vw, 30px); font-weight: 600; letter-spacing: -0.03em; line-height: 1.12; max-width: 18ch; }
        .wf-body { font-size: 15px; line-height: 1.6; color: var(--text-muted); max-width: 44ch; }
        .wf-visual { margin-top: auto; padding-top: 40px; }
        .wf-svg { width: 100%; height: auto; display: block; }
        @media (max-width: 880px) {
          .wf-grid { grid-template-columns: 1fr; }
          .wf { padding: 24px; }
        }
      `}</style>
    </section>
  );
}
