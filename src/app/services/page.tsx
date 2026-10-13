import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ServiceIcon } from '@/components/shared/ServiceIcon';
import { SERVICES } from '@/lib/data/services';
import { Reveal } from '@/components/shared/Reveal';

export const metadata: Metadata = {
  title: 'Services — Infraloom Engineering',
  description: 'Web applications, game streaming, SaaS platforms, mobile apps, AI, cloud infrastructure and long-term support.',
};

export default function ServicesPage() {
  return (
    <div className="page-enter">
      <PageHero
        title="What we build for you."
        body="From a first prototype to a system serving millions, we cover the full stack. Pick one service or the whole set."
      />

      <section className="section-tight">
        <div className="container">
          <div className="svc-list">
            {SERVICES.map((s) => (
              <Reveal key={s.title} className="svc">
                <span className="icon-chip svc-icon"><ServiceIcon name={s.icon} /></span>
                <h2 className="svc-title">{s.title}</h2>
                <p className="svc-body">{s.body}</p>
                <ul className="svc-deliverables">
                  {s.deliverables.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .svc-list { display: flex; flex-direction: column; gap: 12px; }
        .svc {
          position: relative;
          display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: 24px;
          padding: 28px 28px 32px; background: var(--surface); border-radius: var(--radius-card);
          align-items: start;
          transition: background 0.2s ease;
        }
        .svc-icon { grid-column: 1 / span 1; }
        .svc-title {
          grid-column: 2 / span 4;
          font-size: clamp(24px, 2.4vw, 34px); font-weight: 600; letter-spacing: -0.03em; line-height: 1.12;
          padding-top: 6px; color: var(--ultramarine);
          transition: color 0.2s ease;
        }
        .svc-body { grid-column: 6 / span 4; font-size: 16px; line-height: 1.6; color: var(--ultramarine-muted); padding-top: 8px; transition: color 0.2s ease; }
        .svc-deliverables {
          grid-column: 10 / span 3; list-style: none; padding: 8px 0 0; margin: 0;
          display: flex; flex-direction: column; gap: 10px;
        }
        .svc-deliverables li {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; font-weight: 500; color: var(--ultramarine);
          transition: color 0.2s ease;
        }
        .svc-deliverables li::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--ultramarine); flex-shrink: 0; transition: background 0.2s ease; }
        .svc:first-child { background: var(--lime-soft); }
        [data-theme="dark"] .svc:first-child { background: var(--surface); }
        [data-theme="dark"] .svc-title { color: var(--text); }
        [data-theme="dark"] .svc-body, [data-theme="dark"] .svc-deliverables li { color: var(--text-muted); }
        .svc:hover, .svc:first-child:hover { background: var(--primary); }
        .svc:hover .svc-title { color: #fff; }
        .svc:hover .svc-body, .svc:hover .svc-deliverables li { color: var(--ice); }
        .svc:hover .svc-deliverables li::before { background: var(--chartreuse); }
        .svc:hover .svc-icon { background: var(--chartreuse); color: var(--ultramarine); }
        @media (max-width: 980px) {
          .svc { row-gap: 18px; padding: 24px; }
          .svc-icon { grid-column: 1 / -1; }
          .svc-title { grid-column: 1 / -1; padding-top: 0; }
          .svc-body { grid-column: 1 / span 7; }
          .svc-deliverables { grid-column: 9 / span 4; }
        }
        @media (max-width: 640px) {
          .svc-body, .svc-deliverables { grid-column: 1 / -1; }
        }
      `}</style>
    </div>
  );
}
