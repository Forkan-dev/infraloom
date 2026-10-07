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
        <div className="stages">
          {PROCESS_STAGES.map((s, i) => (
            <Reveal key={i} className="stage">
              <h3 className="stage-title">{s.title}</h3>
              <p className="stage-body">{s.body}</p>
              <div className="stage-meta">
                <span className="meta">Outputs</span>
                <ul>
                  {s.outputs.map((o, j) => <li key={j}>{o}</li>)}
                </ul>
                <span className="meta" style={{ marginTop: 24 }}>Tools</span>
                <Tags items={s.tools} style={{ marginTop: 12 }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .stages { display: flex; flex-direction: column; gap: 12px; }
        .stage {
          position: relative;
          display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: 24px; row-gap: 20px;
          padding: 28px 28px 32px; background: var(--surface); border-radius: var(--radius-card);
        }
        .stage::before {
          content: ""; position: absolute; left: 28px; top: 0; width: 48px; height: 4px; border-radius: 0 0 4px 4px; background: var(--primary);
          transform: scaleX(0); transform-origin: left; transition: transform 0.7s var(--ease);
        }
        .stage.in::before { transform: scaleX(1); transition-delay: 0.3s; }
        .stage-title { grid-column: 1 / span 4; font-size: clamp(24px, 2.4vw, 34px); font-weight: 600; letter-spacing: -0.03em; line-height: 1.12; }
        .stage-body { grid-column: 5 / span 4; font-size: 16px; line-height: 1.6; color: var(--text-muted); max-width: 46ch; }
        .stage-meta { grid-column: 10 / span 3; display: flex; flex-direction: column; }
        .stage-meta ul { list-style: none; padding: 0; margin: 12px 0 0; display: flex; flex-direction: column; gap: 6px; }
        .stage-meta li { font-size: 14px; color: var(--ink-2); }
        @media (max-width: 980px) {
          .stage-title { grid-column: 1 / -1; }
          .stage-body { grid-column: 1 / span 7; }
          .stage-meta { grid-column: 9 / span 4; }
        }
        @media (max-width: 640px) {
          .stage { padding: 24px; }
          .stage-body, .stage-meta { grid-column: 1 / -1; }
        }
      `}</style>
    </section>
  );
}
