'use client';

const STAGES = ['Discovery', 'Planning', 'Architecture', 'Develop', 'QA', 'Deploy', 'Monitor', 'Scale'];

interface SDLCFlowProps {
  active?: number;
  onSelect?: (index: number) => void;
}

/** Stage rail: each stage is a tab sitting on one thread; the blue weft fills up to the active stage. */
export function SDLCFlow({ active = 0, onSelect }: SDLCFlowProps) {
  return (
    <div className="sdlc-rail" role="tablist" aria-label="Engagement stages">
      <div className="sdlc-track" aria-hidden="true">
        <div className="sdlc-fill" style={{ width: `${((active + 0.5) / STAGES.length) * 100}%` }} />
      </div>
      {STAGES.map((s, i) => (
        <button
          key={s}
          role="tab"
          aria-selected={i === active}
          className={`sdlc-stage ${i <= active ? 'is-done' : ''} ${i === active ? 'is-active' : ''}`}
          onClick={() => onSelect?.(i)}
        >
          <span className="sdlc-node" />
          {s}
        </button>
      ))}
      <style>{`
        .sdlc-rail { position: relative; display: grid; grid-template-columns: repeat(${STAGES.length}, minmax(0, 1fr)); }
        .sdlc-track { position: absolute; left: 0; right: 0; top: 0; height: 4px; margin-top: -2px; border-radius: 999px; background: var(--periwinkle); }
        .sdlc-fill { height: 4px; border-radius: 999px; background: var(--primary); transition: width 0.7s var(--ease); }
        [data-theme="dark"] .sdlc-track { background: var(--rule); }
        .sdlc-stage {
          position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 16px;
          padding: 0 8px 0 0; border: 0; background: none; cursor: pointer; text-align: left;
          font-family: var(--font-display); font-size: 17px; font-weight: 500; letter-spacing: -0.02em;
          color: var(--ink-4); transition: color 0.35s var(--ease);
        }
        .sdlc-stage:hover { color: var(--ink); }
        .sdlc-stage.is-done { color: var(--ink-2); }
        .sdlc-stage.is-active { color: var(--blue); }
        .sdlc-node { width: 12px; height: 12px; margin-top: -6px; border-radius: 50%; background: var(--surface); border: 2px solid var(--periwinkle); transition: background 0.35s var(--ease), border-color 0.35s var(--ease); }
        .sdlc-stage.is-done .sdlc-node { background: var(--blue); border-color: var(--blue); }
        .sdlc-stage.is-active .sdlc-node { background: var(--chartreuse); border: 4px solid var(--primary); width: 20px; height: 20px; margin-top: -10px; }
        @media (max-width: 760px) {
          .sdlc-rail { grid-template-columns: repeat(4, minmax(0, 1fr)); row-gap: 28px; }
          .sdlc-track { display: none; }
          .sdlc-stage { border-top: 3px solid var(--periwinkle); font-size: 15px; }
          .sdlc-node { display: none; }
          .sdlc-stage.is-done { border-top-color: var(--blue); }
        }
      `}</style>
    </div>
  );
}
