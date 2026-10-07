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
    <section className="block block-periwinkle why">
      <div className="container">
        <Reveal>
          <SectionHead title="Why Infraloom" />
        </Reveal>
        <Reveal stagger className="why-list">
          {ITEMS.map((it, i) => (
            <div key={i} className="why-item">
              <span className="icon-chip why-icon">{GlyphMap[it.glyph]}</span>
              <h3 className="why-title">{it.title}</h3>
            </div>
          ))}
        </Reveal>
      </div>
      <style>{`
        .why { padding: 88px 0; }
        .why-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        .why-item {
          display: flex; flex-direction: column; gap: 40px;
          padding: 24px 24px 28px;
          background: var(--surface); border-radius: var(--radius-card);
          transition: background 0.2s ease;
        }
        .why-title {
          font-size: clamp(19px, 1.6vw, 23px);
          font-weight: 500;
          line-height: 1.25;
          letter-spacing: -0.02em;
          color: var(--text);
          text-wrap: balance;
          transition: color 0.2s ease;
        }
        .why-item:hover { background: var(--primary); }
        .why-item:hover .why-title { color: #fff; }
        .why-item:hover .why-icon { background: var(--chartreuse); color: var(--ultramarine); }
        @media (max-width: 980px) { .why-list { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 640px) {
          .why { padding: 56px 0; }
          .why-list { grid-template-columns: 1fr; }
          .why-item { gap: 24px; }
        }
      `}</style>
    </section>
  );
}
