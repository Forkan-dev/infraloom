import { Reveal } from '@/components/shared/Reveal';
import { GlyphMap } from '@/components/shared/Glyphs';
import { SectionHead } from '@/components/shared/SectionHead';

const ITEMS = [
  { title: 'Nothing goes live without monitoring, alerts and a clear way to roll back', glyph: 'shield' },
  { title: 'Systems split along lines that still make sense three years later', glyph: 'flow' },
  { title: 'Event-driven with RabbitMQ, Kafka and gRPC, built so messages never get lost', glyph: 'pulse' },
  { title: 'Code, docs and runbooks your own team can pick up and own', glyph: 'tree' },
  { title: 'Automated rollouts and feature flags from the first week, so shipping feels routine', glyph: 'bolt' },
  { title: 'Security checks in every pipeline, reviewed by our clients\' own security teams', glyph: 'layers' },
] as const;

export function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHead title="Why Infraloom" />
        </Reveal>
        <Reveal stagger>
          <div className="why-list">
            {ITEMS.map((it, i) => (
              <div key={i} className="why-cell">
                <div className="why-top">
                  <span className="why-icon">{GlyphMap[it.glyph]}</span>
                  <span className="mono why-num">0{i + 1}</span>
                </div>
                <h4 className="why-title">{it.title}</h4>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <style>{`
        .why-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
        }
        .why-cell {
          background: var(--bg);
          padding: 36px 32px 40px;
          display: flex;
          flex-direction: column;
          gap: 36px;
          transition: background 0.25s var(--ease);
        }
        .why-cell:hover { background: var(--bg-2); }
        .why-top { display: flex; align-items: center; justify-content: space-between; }
        .why-icon { color: var(--fg-3); display: inline-flex; transition: color 0.25s var(--ease); }
        .why-cell:hover .why-icon { color: #a78bfa; }
        .why-num { font-size: 12px; color: var(--fg-4); letter-spacing: 0.1em; }
        .why-title {
          margin: 0;
          font-size: clamp(20px, 1.9vw, 24px);
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: -0.02em;
          color: var(--fg-1);
          text-wrap: balance;
        }
        @media (max-width: 980px) {
          .why-list { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .why-list { grid-template-columns: 1fr; }
          .why-cell { padding: 28px 22px 32px; gap: 24px; }
          .why-title { font-size: 21px; }
        }
      `}</style>
    </section>
  );
}
