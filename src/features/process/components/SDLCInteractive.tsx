'use client';

import { useState } from 'react';
import { SDLCFlow } from '@/components/diagrams/SDLCFlow';
import { Tags } from '@/components/ui/Tags';
import { PROCESS_STAGES } from '@/lib/data/process';

export function SDLCInteractive() {
  const [active, setActive] = useState(3);
  const stage = PROCESS_STAGES[active];

  return (
    <section className="block block-ice sdlc">
      <div className="container">
        <div className="sdlc-head">
          <span className="meta">SDLC · Engagement flow</span>
          <div className="sdlc-nav">
            <button onClick={() => setActive(Math.max(0, active - 1))} disabled={active === 0} aria-label="Previous stage" className="sdlc-arrow">
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true"><path d="M19 6H2M7 1L2 6l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" /></svg>
            </button>
            <button onClick={() => setActive(Math.min(7, active + 1))} disabled={active === 7} aria-label="Next stage" className="sdlc-arrow">
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true"><path d="M1 6h17M13 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" /></svg>
            </button>
          </div>
        </div>

        <SDLCFlow active={active} onSelect={setActive} />

        <div className="sdlc-detail" key={active}>
          <h3 className="sdlc-title">{stage.title}</h3>
          <p className="sdlc-body">{stage.body}</p>
          <div className="sdlc-col">
            <span className="meta">Outputs</span>
            <ul>
              {stage.outputs.map((o, i) => <li key={i}>{o}</li>)}
            </ul>
          </div>
          <div className="sdlc-col">
            <span className="meta">Tools</span>
            <Tags items={stage.tools} style={{ marginTop: 14 }} />
          </div>
        </div>
      </div>
      <style>{`
        .sdlc { padding: 64px 0; }
        .sdlc-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
        .sdlc-nav { display: flex; }
        .sdlc-arrow {
          width: 52px; height: 44px; display: inline-flex; align-items: center; justify-content: center;
          border: 0; border-radius: var(--radius-pill); background: var(--surface); color: var(--primary); cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease, opacity 0.2s ease;
        }
        .sdlc-nav { gap: 6px; }
        .sdlc-arrow:hover:not(:disabled) { background: var(--primary); color: #fff; }
        .sdlc-arrow:disabled { opacity: 0.3; cursor: default; }
        .sdlc-detail {
          display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: 24px; row-gap: 24px;
          margin-top: 48px; padding: 32px; background: var(--surface); border-radius: var(--radius-card);
          animation: sdlcIn 0.6s var(--ease);
        }
        @keyframes sdlcIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        .sdlc-title { grid-column: 1 / span 4; font-size: clamp(30px, 3.4vw, 48px); font-weight: 600; letter-spacing: -0.035em; line-height: 1.1; color: var(--primary); }
        .sdlc-body { grid-column: 5 / span 4; font-size: 16px; line-height: 1.6; color: var(--ink-2); }
        .sdlc-col { grid-column: span 2; }
        .sdlc-col ul { list-style: none; padding: 0; margin: 14px 0 0; display: flex; flex-direction: column; gap: 8px; }
        .sdlc-col li { font-size: 14px; color: var(--ink-2); }
        [data-theme="dark"] .sdlc-title { color: var(--signal); }
        @media (max-width: 640px) { .sdlc { padding: 44px 0; } .sdlc-detail { padding: 24px; } }
        @media (max-width: 980px) {
          .sdlc-title, .sdlc-body { grid-column: 1 / -1; }
          .sdlc-col { grid-column: span 6; }
        }
      `}</style>
    </section>
  );
}
