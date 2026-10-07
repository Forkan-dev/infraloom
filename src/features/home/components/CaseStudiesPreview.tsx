import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/shared/Reveal';
import { SectionHead } from '@/components/shared/SectionHead';
import { Tags } from '@/components/ui/Tags';
import { ArrowRight } from '@/components/ui/ArrowRight';
import { CasePlate } from '@/components/shared/CasePlate';

const CASES: {
  tag: string;
  title: string;
  body: string;
  tech: string[];
  href: string;
  visual?: React.ReactNode;
  featured?: boolean;
}[] = [
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
    body: 'A news platform with a full editorial workflow, publishing in several languages, a companion mobile app and more than one way to earn.',
    tech: ['Laravel', 'TailwindCSS', 'Redis', 'AWS S3', 'Stripe', 'OpenAI'],
    href: '/projects/newsportal',
    featured: false,
  },
  {
    tag: 'Cloud gaming · Distributed systems',
    title: 'Cloud gaming platform',
    body: 'Full 3D games that open in a browser tab. Each player gets a ready GPU in under two seconds, and a dozen people can play at once from a single link.',
    tech: ['Golang', 'Laravel', 'NestJS', 'Kong', 'RabbitMQ', 'Fluent Bit'],
    href: '/portfolio/pixel-streaming',
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHead title="Platforms we are working on">
            <Link href="/portfolio" className="link-arrow">
              All case studies <ArrowRight />
            </Link>
          </SectionHead>
        </Reveal>

        <div className="cases">
          {CASES.map((c, i) => (
            <Link key={c.href} href={c.href} className={`case ${i % 2 ? 'is-flip' : ''}`}>
              <Reveal className="reveal-clip case-media">
                {c.visual ?? <CasePlate title={c.title} />}
              </Reveal>
              <Reveal delay={120} className="case-text">
                <span className="meta">{c.tag}</span>
                <h3 className="case-title">{c.title}</h3>
                <p className="case-body">{c.body}</p>
                <Tags items={c.tech} style={{ marginTop: 28 }} />
                <span className="link-arrow case-link">
                  Read the case study <ArrowRight />
                </span>
              </Reveal>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .cases { display: flex; flex-direction: column; gap: 12px; }
        .case {
          display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: 24px;
          align-items: center; color: inherit;
          padding: 12px; background: var(--surface); border-radius: var(--radius-card);
        }
        .case-media {
          position: relative; grid-column: 1 / span 7; aspect-ratio: 16 / 10;
          overflow: hidden; background: var(--paper-3); border-radius: 16px;
        }
        .case-media img { transition: transform 1.4s var(--ease), clip-path 1.2s var(--ease) !important; }
        .case:hover .case-media img { transform: scale(1.035) !important; }
        .case-text { grid-column: 8 / span 5; padding: 20px 24px 20px 8px; }
        .case.is-flip .case-media { grid-column: 6 / span 7; grid-row: 1; }
        .case.is-flip .case-text { grid-column: 1 / span 5; grid-row: 1; padding: 20px 8px 20px 24px; }
        .case-title {
          margin: 16px 0 14px;
          font-size: clamp(26px, 2.6vw, 38px); font-weight: 600;
          letter-spacing: -0.03em; line-height: 1.12;
          transition: color 0.2s ease;
        }
        .case:hover .case-title { color: var(--primary); }
        [data-theme="dark"] .case:hover .case-title { color: var(--signal); }
        .case-body { font-size: 16px; line-height: 1.6; color: var(--text-muted); }
        .case-link { margin-top: 28px; color: var(--primary); }
        .case:hover .case-link { background-size: 100% 1px; color: var(--accent); }
        .case:hover .case-link .arrow { transform: translateX(4px); }
        @media (max-width: 880px) {
          .case-media, .case.is-flip .case-media, .case-text, .case.is-flip .case-text { grid-column: 1 / -1; grid-row: auto; }
          .case-text, .case.is-flip .case-text { padding: 20px 8px 8px; }
        }
      `}</style>
    </section>
  );
}
