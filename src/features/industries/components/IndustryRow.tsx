import { Reveal } from '@/components/shared/Reveal';
import { Tags } from '@/components/ui/Tags';
import { GlyphMap } from '@/components/shared/Glyphs';
import { INDUSTRIES } from '@/lib/data/industries';

export function IndustryRow() {
  return (
    <section className="section-tight">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={i} delay={(i % 3) * 60}>
              <article className="card has-glow ind-row" style={{ padding: 0, display: 'grid', gridTemplateColumns: '1.1fr 1fr', minHeight: 280 }}>
                <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: 'linear-gradient(135deg, rgba(59,130,246,0.18), rgba(139,92,246,0.18))',
                      border: '1px solid rgba(139,92,246,0.3)',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      color: ind.color,
                    }}>{GlyphMap[ind.glyph as keyof typeof GlyphMap] ?? GlyphMap.circle}</span>
                    <div>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.14em' }}>{ind.n}</div>
                      <h3 style={{ marginTop: 4, fontSize: 24 }}>{ind.title}</h3>
                    </div>
                  </div>
                  <div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em', marginBottom: 8 }}>CHALLENGE</div>
                    <p style={{ margin: 0, fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6 }}>{ind.challenge}</p>
                  </div>
                  <div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em', marginBottom: 8 }}>OUR APPROACH</div>
                    <p style={{ margin: 0, fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6 }}>{ind.solution}</p>
                  </div>
                  <Tags items={ind.stack} />
                </div>
                <div style={{
                  borderLeft: '1px solid var(--border)',
                  background: 'linear-gradient(135deg, rgba(15,16,19,0.7), rgba(20,21,24,0.7))',
                  display: 'flex', flexDirection: 'column',
                }}>
                  {ind.kpis.map((k, j) => (
                    <div key={j} style={{
                      flex: 1, padding: 24,
                      borderBottom: j < ind.kpis.length - 1 ? '1px solid var(--border)' : 'none',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
                    }}>
                      <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.14em' }}>{k.l.toUpperCase()}</span>
                      <span style={{ fontSize: 26, fontWeight: 500, fontFamily: 'var(--font-mono)', letterSpacing: '-0.02em' }}>{k.v}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .ind-row { grid-template-columns: 1fr !important; }
          .ind-row > div:last-child { border-left: none !important; border-top: 1px solid var(--border); }
        }
      `}</style>
    </section>
  );
}
