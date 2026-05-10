import { Reveal } from '@/components/shared/Reveal';
import { GlyphMap } from '@/components/shared/Glyphs';
import { TECH_CATEGORIES } from '@/lib/data/technologies';

export function TechCategory() {
  return (
    <section className="section-tight">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
          {TECH_CATEGORIES.map((cat, i) => (
            <Reveal key={i}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 24, gap: 24, flexWrap: 'wrap' }}>
                  <div>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                      0{i + 1} / {String(TECH_CATEGORIES.length).padStart(2, '0')}
                    </span>
                    <h3 style={{ marginTop: 10, fontSize: 32 }}>{cat.title}</h3>
                  </div>
                  <p style={{ color: 'var(--fg-3)', margin: 0, fontSize: 14, maxWidth: 380 }}>{cat.body}</p>
                </div>
                <div className="tech-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
                  {cat.items.map((it, j) => (
                    <div key={j} className="card has-glow" style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 140 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{
                          width: 32, height: 32, borderRadius: 8,
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          background: 'var(--surface-2)', border: '1px solid var(--border)',
                          color: it.c,
                        }}>{GlyphMap[it.g as keyof typeof GlyphMap] ?? GlyphMap.circle}</span>
                        <span style={{ fontWeight: 500, fontSize: 15 }}>{it.n}</span>
                      </div>
                      <p style={{ margin: 0, fontSize: 12.5, color: 'var(--fg-3)', lineHeight: 1.5 }}>{it.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
