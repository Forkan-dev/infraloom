import { Reveal } from '@/components/shared/Reveal';
import { SectionHead } from '@/components/shared/SectionHead';

const TESTIMONIALS = [
  {
    q: 'They rebuilt our streaming pipeline in seven weeks. Our P95 dropped from 1.2s to 84ms and we haven\'t paged on it since.',
    who: 'VP Engineering',
    where: 'Series C streaming platform',
  },
  {
    q: 'The closest thing to having a principal engineer on retainer. Our junior team levelled up just by reading their PRs.',
    who: 'Co-founder & CTO',
    where: 'Logistics SaaS',
  },
  {
    q: 'Architecture review uncovered a SPOF that would have cost us a Black-Friday launch. Worth the engagement before the first sprint.',
    who: 'Head of Platform',
    where: 'Fintech infrastructure',
  },
];

export function TestimonialsRow() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow="Trusted by" title="What our clients say" />
        </Reveal>
        <Reveal stagger>
          <div className="t-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {TESTIMONIALS.map((it, i) => (
              <figure key={i} className="card" style={{ padding: 24, margin: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: 'rgba(139,92,246,0.6)', marginBottom: 12 }}>
                  <path d="M9 8 H4 V14 H10 L9 19 M20 8 H15 V14 H21 L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                <blockquote style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: 'var(--fg)', fontWeight: 400 }}>
                  &ldquo;{it.q}&rdquo;
                </blockquote>
                <figcaption style={{ marginTop: 18, paddingTop: 18, borderTop: '1px solid var(--border)', fontSize: 13 }}>
                  <div style={{ color: 'var(--fg)', fontWeight: 500 }}>{it.who}</div>
                  <div style={{ color: 'var(--fg-3)' }}>{it.where}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .t-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
