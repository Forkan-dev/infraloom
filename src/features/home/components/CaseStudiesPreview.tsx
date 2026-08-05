import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/shared/Reveal';
import { SectionHead } from '@/components/shared/SectionHead';
import { Tags } from '@/components/ui/Tags';
import { ArrowRight } from '@/components/ui/ArrowRight';
import { CaseVisualPixel } from '@/components/diagrams/CaseVisuals';

const CASES = [
  {
    tag: 'Real-time · Multi-tenant',
    title: 'Enterprise geo-tracking platform',
    body: 'Re-platformed a fleet operations product to a multi-tenant, real-time architecture serving 92k vehicles.',
    tech: ['PostgreSQL', 'Node.js', 'NestJS'],
    href: '/portfolio/geo-tracking',
    visual: (
      <Image
        src="/projects/geo_tracker/image1.png"
        alt="Enterprise geo-tracking platform"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
    ),
    featured: false,
  },
  {
    tag: 'Enterprise · HRM',
    title: 'Human resource management platform',
    body: 'Replaced 6 internal tools with one role-aware HRM platform covering payroll, attendance and analytics.',
    tech: ['Next.js', 'NestJS', 'Postgres', 'Redis'],
    href: '/projects/hrm',
    visual: (
      <Image
        src="/projects/hrm/image.png"
        alt="HRM platform"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
    ),
    featured: false,
  },
  {
    tag: 'Media · Publishing',
    title: 'Online Newspaper',
    body: 'A full-stack news publishing platform — editorial workflow, multilingual support, mobile app, and multiple revenue streams.',
    tech: ['Laravel', 'TailwindCSS', 'Redis', 'AWS S3', 'Stripe', 'OpenAI'],
    href: '/projects/newsportal',
    visual: (
      <Image
        src="/projects/newspaper/frontpage.png"
        alt="Online Newspaper"
        fill
        style={{ objectFit: 'cover', objectPosition: 'top' }}
      />
    ),
    featured: false,
  },
  {
    tag: 'Streaming · Distributed systems',
    title: 'Unreal Engine pixel streaming platform',
    body: 'Multi-instance UE pixel streaming with dynamic GPU allocation, Kong gateway, RabbitMQ events and Fluent Bit log fan-out.',
    tech: ['Golang', 'Laravel', 'NestJS', 'Kong', 'RabbitMQ', 'Fluent Bit'],
    href: '/portfolio/pixel-streaming',
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow="Selected work" title="Platforms we have delivered" />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: -24, marginBottom: 40 }}>
            <Link href="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--fg-2)', fontSize: 14 }}>
              All case studies <ArrowRight />
            </Link>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gap: 18 }}>
          {CASES.map((c, i) => (
            <Reveal key={c.href} delay={i * 60}>
              <Link href={c.href} className="card has-glow case-card">
                <div className="case-main">
                  <span className="mono case-tag">{c.tag}</span>
                  <h3 className="case-title">{c.title}</h3>
                  <p className="case-body">{c.body}</p>
                </div>
                <div className="case-side">
                  <Tags items={c.tech} />
                  <span className="case-link">
                    Read the case study <ArrowRight />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .case-card {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          align-items: center;
          gap: 40px;
          padding: 32px;
          color: inherit;
        }
        .case-card:hover { transform: translateY(-2px); }
        .case-tag {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--fg-4);
        }
        .case-title { font-size: 24px; margin: 12px 0 10px; color: var(--fg-1); }
        .case-body {
          font-size: 15px;
          line-height: 1.55;
          color: var(--fg-3);
          margin: 0;
          max-width: 52ch;
        }
        .case-side {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
        }
        .case-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          color: var(--fg-2);
        }
        .case-card:hover .case-link { color: var(--fg-1); }
        @media (max-width: 880px) {
          .case-card { grid-template-columns: 1fr; gap: 24px; padding: 26px; }
          .case-title { font-size: 21px; }
        }
      `}</style>
    </section>
  );
}
