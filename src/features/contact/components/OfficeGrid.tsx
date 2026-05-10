import { Reveal } from '@/components/shared/Reveal';

const OFFICES = [
  { city: 'New York', region: 'NY · USA', tz: 'EST', focus: 'HQ, Engineering' },
  { city: 'Lisbon', region: 'Portugal', tz: 'WET', focus: 'Architecture, EU clients' },
  { city: 'Austin', region: 'TX · USA', tz: 'CST', focus: 'DevOps, AI' },
  { city: 'Bangalore', region: 'India', tz: 'IST', focus: 'Mobile, 24/7 SRE' },
];

export function OfficeGrid() {
  return (
    <section className="section-tight">
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 28 }}>
            <span className="eyebrow">Offices</span>
            <h2 className="gradient-text" style={{ marginTop: 16 }}>Four time zones. One team.</h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="off-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
            {OFFICES.map((o, i) => (
              <div key={i} style={{ padding: 26, background: 'var(--bg-2)' }}>
                <div className="mono" style={{ fontSize: 10, color: '#93c5fd', letterSpacing: '0.16em', marginBottom: 12 }}>{o.tz}</div>
                <h3 style={{ marginBottom: 4, fontSize: 22 }}>{o.city}</h3>
                <div style={{ fontSize: 12, color: 'var(--fg-3)', marginBottom: 16 }}>{o.region}</div>
                <div style={{ fontSize: 12, color: 'var(--fg-2)', lineHeight: 1.5 }}>{o.focus}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <style>{`@media (max-width: 880px) { .off-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </section>
  );
}
