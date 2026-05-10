'use client';

import { useState } from 'react';
import { SDLCFlow } from '@/components/diagrams/SDLCFlow';
import { Tags } from '@/components/ui/Tags';
import { PROCESS_STAGES } from '@/lib/data/process';

export function SDLCInteractive() {
  const [active, setActive] = useState(3);
  const stage = PROCESS_STAGES[active];

  return (
    <section className="section-tight">
      <div className="container">
        <div className="card" style={{ padding: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
            <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.14em' }}>SDLC · ENGAGEMENT FLOW</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <button
                onClick={() => setActive(Math.max(0, active - 1))}
                className="btn btn-secondary"
                style={{ padding: '6px 12px', fontSize: 12 }}
              >← Prev</button>
              <button
                onClick={() => setActive(Math.min(7, active + 1))}
                className="btn btn-secondary"
                style={{ padding: '6px 12px', fontSize: 12 }}
              >Next →</button>
            </div>
          </div>
          <SDLCFlow active={active} />
          <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 32 }} className="sdlc-detail">
              <div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.14em', marginBottom: 8 }}>STAGE {stage.n}</div>
                <h3 style={{ marginBottom: 12 }}>{stage.title}</h3>
                <p style={{ color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{stage.body}</p>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em', marginBottom: 10 }}>OUTPUTS</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {stage.outputs.map((o, i) => (
                    <li key={i} style={{ fontSize: 13, color: 'var(--fg-2)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em', marginBottom: 10 }}>TOOLS</div>
                <Tags items={stage.tools} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) { .sdlc-detail { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
