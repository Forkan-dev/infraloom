import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';
import { ServiceRow } from '@/features/services/components/ServiceRow';
import { BigCTA } from '@/components/shared/BigCTA';
import { Reveal } from '@/components/shared/Reveal';
import { ArrowRight } from '@/components/ui/ArrowRight';
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
        title="What we do"
        body="Nine things we do well. We can take a product from the first sketch to production, or join a team that is already building."
      >
        <Link href="/contact" className="btn btn-primary">Book a discovery call <ArrowRight /></Link>
        <Link href="/process" className="btn btn-secondary">See our process</Link>
      </PageHero>

      <section className="section-tight">
        <div className="container">
          <div className="service-list">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 60}>
                <ServiceRow {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BigCTA />

      <style>{`
        .service-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          align-items: stretch;
        }
        .service-list > * { display: flex; }
        .service-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 28px;
        }
        .service-item-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 11px;
          color: var(--fg-2);
          background: var(--surface-2);
          border: 1px solid var(--border);
          transition: color 0.3s var(--ease), border-color 0.3s var(--ease);
        }
        .service-item:hover .service-item-icon {
          color: var(--blue);
          border-color: var(--border-strong);
        }
        .service-item-title { font-size: 19px; margin: 20px 0 10px; color: var(--fg-1); }
        .service-item-body {
          font-size: 14px;
          line-height: 1.6;
          color: var(--fg-3);
          margin: 0 0 22px;
        }
        .service-item-list {
          list-style: none;
          padding: 20px 0 0;
          margin: auto 0 0;
          border-top: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
        .service-item-list li {
          position: relative;
          padding-left: 16px;
          font-size: 13.5px;
          color: var(--fg-2);
        }
        .service-item-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--blue);
        }
        @media (max-width: 980px) {
          .service-list { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 620px) {
          .service-list { grid-template-columns: 1fr; }
          .service-item { padding: 24px; }
        }
      `}</style>
    </div>
  );
}
