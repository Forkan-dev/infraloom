import Link from 'next/link';
import { Reveal } from '@/components/shared/Reveal';
import { SectionHead } from '@/components/shared/SectionHead';
import { ArrowRight } from '@/components/ui/ArrowRight';
import { ServiceIcon } from '@/components/shared/ServiceIcon';
import { SERVICES_PREVIEW } from '@/lib/data/services';

export function ServicesPreview() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="Services"
            title="What we build"
            body="One team accountable for the whole lifecycle, from architecture and delivery through to running the system in production."
          />
        </Reveal>
        <Reveal stagger>
          <div className="service-grid">
            {SERVICES_PREVIEW.map((s) => (
              <Link key={s.title} href="/services" className="card has-glow service-card">
                <span className="service-icon">
                  <ServiceIcon name={s.icon} />
                </span>
                <span className="service-head">
                  <h3 className="service-title">{s.title}</h3>
                  <ArrowRight />
                </span>
                <p className="service-body">{s.body}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        /* flex, not grid: five cards leave the last row short, and wrapping
           centred keeps it balanced instead of trailing an empty cell */
        .service-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 18px;
        }
        .service-card {
          flex: 0 1 calc((100% - 36px) / 3);
          display: flex;
          flex-direction: column;
          padding: 28px;
          color: inherit;
        }
        .service-card:hover { transform: translateY(-3px); }
        .service-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 11px;
          margin-bottom: 20px;
          color: var(--fg-2);
          background: var(--surface-2);
          border: 1px solid var(--border);
          transition: color 0.3s var(--ease), border-color 0.3s var(--ease);
        }
        .service-card:hover .service-icon {
          color: var(--blue);
          border-color: var(--border-strong);
        }
        .service-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 8px;
          color: var(--fg-4);
        }
        .service-card:hover .service-head { color: var(--blue); }
        .service-title { font-size: 18px; margin: 0; color: var(--fg-1); }
        .service-body {
          font-size: 14px;
          line-height: 1.6;
          color: var(--fg-3);
          margin: 0;
        }
        @media (max-width: 980px) {
          .service-card { flex-basis: calc((100% - 18px) / 2); }
        }
        @media (max-width: 620px) {
          .service-card { flex-basis: 100%; padding: 24px; }
        }
      `}</style>
    </section>
  );
}
