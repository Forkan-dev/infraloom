import { Reveal } from '@/components/shared/Reveal';
import { SectionHead } from '@/components/shared/SectionHead';

const TEAM = [
  { n: 'Engineering', c: 28, lead: 'Principal-led pods' },
  { n: 'Architecture', c: 6, lead: 'ex-FAANG / streaming' },
  { n: 'DevOps & SRE', c: 7, lead: 'On-call rotations' },
  { n: 'Product & Design', c: 6, lead: 'Embedded with eng' },
];

export function TeamGrid() {
  return (
    <section className="section-tight">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow="Team" title="The shape of the team." />
        </Reveal>
        <Reveal>
          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {TEAM.map((t, i) => (
              <div key={i} className="card" style={{ padding: 26 }}>
                <div style={{
                  fontSize: 56, fontWeight: 500, fontFamily: 'var(--font-mono)', letterSpacing: '-0.04em',
                  background: 'linear-gradient(120deg, #fff, #93c5fd)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                }}>{t.c}</div>
                <h4 style={{ marginTop: 4, marginBottom: 6 }}>{t.n}</h4>
                <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.12em' }}>{t.lead.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <style>{`@media (max-width: 880px) { .team-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
    </section>
  );
}
