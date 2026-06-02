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
    tech: ['Laravel', 'Vue', 'PostgreSQL', 'Redis', 'WebSocket'],
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
    title: 'HRM platform for 14,000 employees',
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
    visual: <CaseVisualPixel />,
    featured: true,
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow="Selected work" title="Systems we're proud to be on call for." />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: -24, marginBottom: 40 }}>
            <Link href="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--fg-2)', fontSize: 14 }}>
              All case studies <ArrowRight />
            </Link>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gap: 18 }}>
          {CASES.map((c, i) => (
            <Reveal key={i} delay={i * 60}>
              <Link href={c.href} className="card has-glow case-card" style={{
                display: 'grid',
                gridTemplateColumns: c.featured ? '1.2fr 1fr' : '1fr 1fr',
                minHeight: 320,
              }}>
                <div style={{ padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20 }}>
                  <div>
                    <span className="mono" style={{ fontSize: 11, color: '#c4b5fd', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{c.tag}</span>
                    <h3 style={{ marginTop: 14, marginBottom: 14, fontSize: 28 }}>{c.title}</h3>
                    <p style={{ color: 'var(--fg-3)', margin: 0, fontSize: 15, lineHeight: 1.55, maxWidth: '48ch' }}>{c.body}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <Tags items={c.tech} />
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--fg)', fontSize: 14, fontWeight: 500 }}>
                      Read the case study <ArrowRight />
                    </span>
                  </div>
                </div>
                <div style={{
                  position: 'relative',
                  borderLeft: '1px solid var(--border)',
                  background: 'linear-gradient(135deg, rgba(15,16,19,0.6), rgba(20,21,24,0.6))',
                  overflow: 'hidden',
                }}>
                  {c.visual}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .case-card { grid-template-columns: 1fr !important; }
          .case-card > div:last-child { border-left: none !important; border-top: 1px solid var(--border) !important; min-height: 260px; }
        }
      `}</style>
    </section>
  );
}
