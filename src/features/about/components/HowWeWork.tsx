import { Reveal } from '@/components/shared/Reveal';

const PRACTICES = [
  ['Embedded', 'Your repos, your Slack, your stand-ups.'],
  ['Async-first', 'Across NYC, Lisbon, Bangalore — written everywhere.'],
  ['RFC-driven', 'Every non-trivial decision is a markdown PR.'],
  ['Pairs and pods', 'Two-engineer minimums per workstream.'],
  ['Demos weekly', 'End-of-week demos to your stakeholders, every week.'],
] as const;

export function HowWeWork() {
  return (
    <section className="section-tight">
      <div className="container">
        <Reveal>
          <div className="howwework-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 32, alignItems: 'start' }}>
            <div>
              <h2 className="gradient-text" style={{ margin: '0 0 22px' }}>Embedded teams. Async-first. Documented to a fault.</h2>
              <p style={{ color: 'var(--fg-2)', lineHeight: 1.65, fontSize: 15 }}>
                We embed senior pods directly into your Slack, your Linear, your repos. Standups are async.
                Decisions are RFCs. The engineer writing the code is the one in the design review.
              </p>
            </div>
            <div className="card" style={{ padding: 28 }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                {PRACTICES.map(([t, b], i) => (
                  <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span className="mono" style={{ flexShrink: 0, fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.14em', width: 22, paddingTop: 3 }}>0{i + 1}</span>
                    <div>
                      <strong style={{ color: 'var(--fg-1)', fontSize: 14 }}>{t}.</strong>
                      <span style={{ color: 'var(--fg-2)', fontSize: 14 }}> {b}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`@media (max-width: 880px) { .howwework-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
