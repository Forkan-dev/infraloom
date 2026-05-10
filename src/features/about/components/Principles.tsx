import { Reveal } from '@/components/shared/Reveal';

const PRINCIPLES = [
  { t: 'Production is the spec.', b: 'If it doesn\'t survive 3am, it doesn\'t exist. We design for failure modes first and happy paths second.' },
  { t: 'Senior engineers, end-to-end.', b: 'No staff augmentation, no offshore handoffs. The engineer who designs your system is the one who ships it.' },
  { t: 'Boring tech, where it earns it.', b: 'Postgres, Go, Linux. We adopt new tools when they pull weight, not when they trend.' },
  { t: 'Observability is non-negotiable.', b: 'Every service ships with logs, metrics, traces and a runbook on day one. We don\'t leave you blind.' },
  { t: 'Documents over slide decks.', b: 'RFCs, design docs, post-mortems. Our artifacts outlive the engagement.' },
  { t: 'Own your platform.', b: 'We hand over the keys. Code, infra, dashboards, runbooks — all yours, no lock-in.' },
];

export function Principles() {
  return (
    <section className="section-tight">
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 28 }}>
            <span className="eyebrow">Engineering principles</span>
            <h2 className="gradient-text" style={{ marginTop: 16 }}>Six things we won&apos;t compromise on.</h2>
          </div>
        </Reveal>
        <div className="prin-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 18, overflow: 'hidden' }}>
          {PRINCIPLES.map((p, i) => (
            <div key={i} style={{ padding: 28, background: 'var(--bg-2)' }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.14em', marginBottom: 12 }}>0{i + 1}</div>
              <h4 style={{ marginBottom: 10 }}>{p.t}</h4>
              <p style={{ margin: 0, color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.55 }}>{p.b}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) { .prin-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .prin-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
