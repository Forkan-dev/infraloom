import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ServiceIcon } from '@/components/shared/ServiceIcon';
import { SERVICES } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'Services — Infraloom Engineering',
  description: 'Web applications, game streaming, SaaS platforms, mobile apps, AI, cloud infrastructure and long-term support.',
};

export default function ServicesPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Services"
        title="What we build for you."
        body="From a first prototype to a system serving millions, we cover the full stack. Pick one service or the whole set."
      />

      <section className="section-tight">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div key={s.title} className="service-card card">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))',
                    border: '1px solid rgba(139,92,246,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--blue)',
                  }}>
                    <ServiceIcon name={s.icon} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 600, margin: 0, lineHeight: 1.3 }}>{s.title}</h3>
                  </div>
                </div>

                <p style={{ color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.65, margin: '0 0 16px' }}>
                  {s.body}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {s.deliverables.map((d, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--fg-3)' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', flexShrink: 0, opacity: 0.7 }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .service-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s, transform 0.2s;
        }
        .service-card:hover {
          border-color: rgba(139,92,246,0.35);
          transform: translateY(-2px);
        }
        @media (max-width: 960px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
