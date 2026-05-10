import Link from 'next/link';
import { Reveal } from '@/components/shared/Reveal';
import { SectionHead } from '@/components/shared/SectionHead';
import { ArrowRight } from '@/components/ui/ArrowRight';
import { ServiceVisual } from './ServiceVisual';
import { SERVICES_PREVIEW } from '@/lib/data/services';

export function ServicesPreview() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="Services"
            title="The full engineering surface — under one roof."
            body="From the first whiteboard sketch to the third year of scale. We work as your senior platform team."
          />
        </Reveal>
        <Reveal stagger>
          <div className="bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
            {SERVICES_PREVIEW.map((s, i) => (
              <Link
                key={i}
                href="/services"
                className="card has-glow"
                style={{
                  gridColumn: `span ${s.span ?? 2}`,
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  minHeight: 280,
                }}
              >
                <div style={{ flex: 1 }}>
                  <ServiceVisual kind={s.visual as Parameters<typeof ServiceVisual>[0]['kind']} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                    <h3 style={{ fontSize: 19 }}>{s.title}</h3>
                    <ArrowRight />
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--fg-3)', margin: 0, marginBottom: 10, lineHeight: 1.5 }}>{s.body}</p>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--fg-4)', letterSpacing: '0.06em' }}>{s.mono}</span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 980px) {
          .bento { grid-template-columns: repeat(2, 1fr) !important; }
          .bento > * { grid-column: span 1 !important; }
        }
        @media (max-width: 600px) {
          .bento { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
