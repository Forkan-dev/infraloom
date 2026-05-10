import Link from 'next/link';
import { Reveal } from '@/components/shared/Reveal';
import { Tags } from '@/components/ui/Tags';
import { ArrowRight } from '@/components/ui/ArrowRight';
import { CaseVisualGeo, CaseVisualHRM, CaseVisualPixel } from '@/components/diagrams/CaseVisuals';
import { PORTFOLIO_LIST } from '@/lib/data/portfolio';

const VISUALS: Record<string, React.ReactNode> = {
  'pixel-streaming': <CaseVisualPixel />,
  'geo-tracking': <CaseVisualGeo />,
  hrm: <CaseVisualHRM />,
};

export function PortfolioGrid() {
  return (
    <section className="section-tight">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {PORTFOLIO_LIST.map((c, i) => (
            <Reveal key={i} delay={i * 60}>
              <Link href={`/portfolio/${c.slug}`} className="card has-glow case-card-lg" style={{
                display: 'grid',
                gridTemplateColumns: c.featured ? '1.05fr 1fr' : '1fr 1fr',
                minHeight: c.featured ? 440 : 360,
              }}>
                <div style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 28 }}>
                  <div>
                    <span className="mono" style={{ fontSize: 11, color: '#c4b5fd', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{c.tag}</span>
                    <h3 style={{ marginTop: 14, marginBottom: 16, fontSize: c.featured ? 36 : 30, letterSpacing: '-0.03em' }}>{c.title}</h3>
                    <p style={{ color: 'var(--fg-2)', margin: 0, fontSize: 16, lineHeight: 1.55, maxWidth: '52ch' }}>{c.excerpt}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                    <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
                      {c.stats.map((s, j) => (
                        <div key={j}>
                          <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em' }}>{s.l.toUpperCase()}</div>
                          <div style={{ fontSize: 22, fontFamily: 'var(--font-mono)', fontWeight: 500, marginTop: 4 }}>{s.v}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 16, flexWrap: 'wrap' }}>
                      <Tags items={c.stack} />
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#fff', fontSize: 14, fontWeight: 500 }}>
                        Read case study <ArrowRight />
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: 'relative',
                  borderLeft: '1px solid var(--border)',
                  background: 'linear-gradient(135deg, rgba(15,16,19,0.6), rgba(20,21,24,0.6))',
                  overflow: 'hidden',
                }}>
                  {VISUALS[c.slug]}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .case-card-lg { grid-template-columns: 1fr !important; }
          .case-card-lg > div:last-child { border-left: none !important; border-top: 1px solid var(--border); min-height: 280px; }
        }
      `}</style>
    </section>
  );
}
