import { Reveal } from '@/components/shared/Reveal';
import { SectionHead } from '@/components/shared/SectionHead';
import { Tags } from '@/components/ui/Tags';
import { PROCESS_STAGES } from '@/lib/data/process';

export function ProcessTimeline() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow="Eight stages, in detail" title="What happens, week by week." />
        </Reveal>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div style={{
            position: 'absolute', left: 28, top: 30, bottom: 30,
            width: 1, background: 'linear-gradient(180deg, var(--border-2), var(--border), var(--border-2))',
          }} />
          {PROCESS_STAGES.map((s, i) => (
            <Reveal key={i} delay={i * 40}>
              <div style={{ display: 'flex', gap: 32, padding: '32px 0', position: 'relative' }}>
                <div style={{
                  width: 56, height: 56, flexShrink: 0,
                  borderRadius: '50%',
                  background: 'var(--bg)',
                  border: '1px solid var(--border-2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 500,
                  color: '#c4b5fd', position: 'relative',
                  boxShadow: '0 0 0 4px var(--bg)',
                }}>
                  <div style={{
                    position: 'absolute', inset: -1, borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--blue), var(--violet))',
                    padding: 1, zIndex: -1,
                  }} />
                  {s.n}
                </div>
                <div className="card" style={{ padding: 28, flex: 1 }}>
                  <h3 style={{ marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: 'var(--fg-2)', fontSize: 14.5, lineHeight: 1.6, margin: 0, marginBottom: 18, maxWidth: '70ch' }}>{s.body}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 28 }} className="sdlc-row">
                    <div>
                      <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em', marginBottom: 10 }}>OUTPUTS</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {s.outputs.map((o, j) => (
                          <span key={j} className="chip">{o}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em', marginBottom: 10 }}>TOOLS</div>
                      <Tags items={s.tools} />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <style>{`@media (max-width: 700px) { .sdlc-row { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}
