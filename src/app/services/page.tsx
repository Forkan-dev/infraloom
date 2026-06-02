import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SERVICES } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'Services — Infraloom Engineering',
  description: 'End-to-end engineering services — custom software, SaaS, cloud, AI, DevOps and more.',
};

const ICONS: Record<string, string> = {
  '01': 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  '02': 'M3 9a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM8 3v4M16 3v4',
  '03': 'M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h11l5 5v9a2 2 0 01-2 2zM17 21v-8H7v8M7 3v4h8',
  '04': 'M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z',
  '05': 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  '06': 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
  '07': 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  '08': 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
  '09': 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0',
  '10': 'M13 10V3L4 14h7v7l9-11h-7z',
};

export default function ServicesPage() {
  return (
    <div className="page-enter">
      <PageHero
title="What we build for you."
        body="From a first prototype to a system serving millions — we cover the full stack. Pick one service or the whole stack."
      />

      <section className="section-tight">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div key={s.n} className="service-card card">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))',
                    border: '1px solid rgba(139,92,246,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#svc-grad)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <defs>
                        <linearGradient id="svc-grad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                      <path d={ICONS[s.n]} />
                    </svg>
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
