import { Reveal } from '@/components/shared/Reveal';
import { SectionHead } from '@/components/shared/SectionHead';

const REVIEWS = [
  {
    rating: 5,
    q: 'They rebuilt our streaming pipeline in seven weeks. Our P95 dropped from 1.2s to 84ms and we haven\'t paged on it since. Exceptional engineering depth.',
    name: 'Marcus T.',
    role: 'VP Engineering',
    company: 'Series C Streaming Platform',
    initials: 'MT',
    color: '#8b5cf6',
    featured: true,
  },
  {
    rating: 5,
    q: 'The closest thing to having a principal engineer on retainer. Our junior team levelled up just by reading their PRs.',
    name: 'Sarah K.',
    role: 'Co-founder & CTO',
    company: 'Logistics SaaS',
    initials: 'SK',
    color: '#3b82f6',
    featured: false,
  },
  {
    rating: 5,
    q: 'Architecture review uncovered a SPOF that would have cost us a Black Friday launch. Worth every penny before the first sprint.',
    name: 'David R.',
    role: 'Head of Platform',
    company: 'Fintech Infrastructure',
    initials: 'DR',
    color: '#06b6d4',
    featured: false,
  },
  {
    rating: 5,
    q: 'Delivered a multi-tenant SaaS in 10 weeks that our previous agency quoted 8 months for. Clean code, zero drama.',
    name: 'Aisha M.',
    role: 'Founder & CEO',
    company: 'HR Tech Startup',
    initials: 'AM',
    color: '#ec4899',
    featured: false,
  },
  {
    rating: 5,
    q: 'Their DevOps setup alone saved us $14k/month in cloud spend. The observability stack they built caught issues before customers noticed.',
    name: 'James L.',
    role: 'CTO',
    company: 'E-commerce Scale-up',
    initials: 'JL',
    color: '#22c55e',
    featured: false,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < count ? '#f59e0b' : 'none'} stroke="#f59e0b" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsRow() {
  const featured = REVIEWS.find(r => r.featured)!;
  const rest = REVIEWS.filter(r => !r.featured);

  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="bg-glow violet" style={{ right: '10%', top: 80, opacity: 0.15 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <Reveal>
          <SectionHead eyebrow="Trusted by" title="What our clients say" />
        </Reveal>
        {/* Featured review */}
        <Reveal delay={60}>
          <div style={{
            position: 'relative', marginBottom: 20, padding: '40px 44px',
            borderRadius: 16, overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(59,130,246,0.06))',
            border: '1px solid rgba(139,92,246,0.25)',
          }}>
            <div style={{
              position: 'absolute', top: -60, right: -60,
              width: 220, height: 220, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139,92,246,0.18), transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 24 }}>
                <Stars count={featured.rating} />
                <span className="mono" style={{ fontSize: 11, color: 'rgba(139,92,246,0.8)', letterSpacing: '0.12em' }}>FEATURED REVIEW</span>
              </div>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ color: 'rgba(139,92,246,0.4)', marginBottom: 16 }}>
                <path d="M9 8H4v6h6l-1 5M20 8h-5v6h6l-1 5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              <p style={{ fontSize: 20, lineHeight: 1.6, color: 'var(--fg)', fontWeight: 400, margin: '0 0 28px', maxWidth: '72ch' }}>
                &ldquo;{featured.q}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                  background: `linear-gradient(135deg, ${featured.color}33, ${featured.color}66)`,
                  border: `1px solid ${featured.color}55`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 600, color: featured.color, fontFamily: 'var(--font-mono)',
                }}>
                  {featured.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--fg)' }}>{featured.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--fg-3)' }}>{featured.role} · {featured.company}</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Grid of remaining reviews */}
        <div className="reviews-grid">
          {rest.map((r, i) => (
            <Reveal key={i} delay={i * 60 + 120}>
              <figure className="card review-card" style={{ padding: '28px 28px 24px', margin: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Stars count={r.rating} />
                <blockquote style={{ flex: 1, margin: '16px 0 24px', fontSize: 15, lineHeight: 1.65, color: 'var(--fg-2)', fontWeight: 400 }}>
                  &ldquo;{r.q}&rdquo;
                </blockquote>
                <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 18, borderTop: '1px solid var(--border)' }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
                    background: `linear-gradient(135deg, ${r.color}22, ${r.color}44)`,
                    border: `1px solid ${r.color}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 600, color: r.color, fontFamily: 'var(--font-mono)',
                  }}>
                    {r.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--fg)' }}>{r.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--fg-3)' }}>{r.role} · {r.company}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .review-card:hover {
          border-color: rgba(139,92,246,0.3);
          transform: translateY(-2px);
          transition: border-color 0.2s, transform 0.2s;
        }
        @media (max-width: 1100px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .reviews-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
