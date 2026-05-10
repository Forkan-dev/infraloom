import Link from 'next/link';
import { Reveal } from '@/components/shared/Reveal';
import { GlyphMap } from '@/components/shared/Glyphs';
import { ArrowRight } from '@/components/ui/ArrowRight';

const ITEMS = [
  { title: 'Production-grade engineering', body: 'No prototypes deployed to prod. Every system ships with monitoring, alerting and a rollback plan.', glyph: 'shield' },
  { title: 'Microservice expertise', body: 'We design service boundaries that survive three years of feature growth and four product managers.', glyph: 'flow' },
  { title: 'Event-driven architecture', body: 'RabbitMQ, Kafka and gRPC with idempotent consumers and dead-letter queues by default.', glyph: 'pulse' },
  { title: 'Long-term maintainability', body: 'Code review, ADRs, type contracts and runbooks. We hand off products that other teams can own.', glyph: 'tree' },
  { title: 'DevOps culture', body: 'Trunk-based, automated rollouts, blue/green and feature flags from day one of the engagement.', glyph: 'cube' },
  { title: 'Security-first mindset', body: 'OWASP, SOC 2 controls, secret rotation, SAST/DAST in CI. Audited by clients\' security teams.', glyph: 'shield' },
] as const;

export function WhyChooseUs() {
  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="bg-glow blue" style={{ left: '10%', top: 100, opacity: 0.25 }} />
      <div className="container">
        <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 120 }}>
            <Reveal>
              <span className="eyebrow" style={{ marginBottom: 24 }}>Why teams pick Infraloom</span>
              <h2 className="gradient-text" style={{ marginBottom: 24, marginTop: 16 }}>
                A senior team that ships like an in-house platform group.
              </h2>
              <p className="lede" style={{ marginBottom: 28 }}>
                We work with founders and CTOs who would rather hire a small, embedded
                team of principal engineers than spin up a 30-person agency engagement.
              </p>
              <Link href="/about" className="btn btn-secondary">Read our engineering principles <ArrowRight /></Link>
            </Reveal>
          </div>
          <Reveal stagger>
            <div className="why-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {ITEMS.map((it, i) => (
                <div key={i} className="card" style={{ padding: 20 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.18), rgba(139,92,246,0.18))',
                    border: '1px solid rgba(139,92,246,0.3)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    color: '#c4b5fd', marginBottom: 14,
                  }}>{GlyphMap[it.glyph]}</div>
                  <h4 style={{ marginBottom: 8 }}>{it.title}</h4>
                  <p style={{ fontSize: 13.5, color: 'var(--fg-3)', margin: 0, lineHeight: 1.55 }}>{it.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`
        @media (max-width: 980px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .why-grid > div:first-child { position: static !important; }
        }
        @media (max-width: 700px) {
          .why-list { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
