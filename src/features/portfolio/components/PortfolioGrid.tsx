import Link from 'next/link';
import { Reveal } from '@/components/shared/Reveal';
import { Tags } from '@/components/ui/Tags';
import { ArrowRight } from '@/components/ui/ArrowRight';
import Image from 'next/image';
import { CaseVisualPixel } from '@/components/diagrams/CaseVisuals';
import { PORTFOLIO_LIST } from '@/lib/data/portfolio';
import { CasePlate } from '@/components/shared/CasePlate';

const STAT_TONES = ['stat-chartreuse', 'stat-ice', 'stat-dark'];

const VISUALS: Record<string, React.ReactNode> = {
  'pixel-streaming': <CaseVisualPixel />,
  'geo-tracking': (
    <Image
      src="/projects/geo_tracker/image1.png"
      alt="Enterprise geo-tracking platform"
      fill
      style={{ objectFit: 'cover', objectPosition: 'center' }}
    />
  ),
  hrm: (
    <Image
      src="/projects/hrm/image.png"
      alt="HRM platform"
      fill
      style={{ objectFit: 'cover', objectPosition: 'center' }}
    />
  ),
};

export function PortfolioGrid() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="pf-list">
          {PORTFOLIO_LIST.map((c) => (
            <Link key={c.slug} href={c.href ?? `/portfolio/${c.slug}`} className={`pf ${c.featured ? 'is-featured' : ''}`}>
              <Reveal className="reveal-clip pf-visual">
                {VISUALS[c.slug] ?? <CasePlate title={c.title} />}
              </Reveal>
              <Reveal className="pf-text" delay={100}>
                <span className="meta">{c.tag}</span>
                <h2 className="pf-title">{c.title}</h2>
                <p className="pf-excerpt">{c.excerpt}</p>
                <dl className="pf-stats">
                  {c.stats.map((s, j) => (
                    <div key={j} className={`stat-tile ${STAT_TONES[j % STAT_TONES.length]}`}>
                      <dd>{s.v}</dd>
                      <dt className="meta">{s.l}</dt>
                    </div>
                  ))}
                </dl>
                <Tags items={c.stack} style={{ marginTop: 24 }} />
                <span className="link-arrow pf-link">
                  Read case study <ArrowRight />
                </span>
              </Reveal>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        .pf-list { display: flex; flex-direction: column; gap: 12px; }
        .pf {
          display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: 24px; row-gap: 24px;
          padding: 12px; background: var(--surface); border-radius: var(--radius-card); color: inherit;
        }
        .pf-visual { position: relative; grid-column: 1 / span 6; aspect-ratio: 4 / 3; overflow: hidden; background: var(--paper-3); border-radius: 16px; }
        .pf.is-featured .pf-visual { grid-column: 1 / span 7; }
        .pf-visual img { transition: transform 1.4s var(--ease), clip-path 1.2s var(--ease) !important; }
        .pf:hover .pf-visual img { transform: scale(1.03) !important; }
        .pf-text { grid-column: 7 / span 6; display: flex; flex-direction: column; padding: 20px 20px 16px 8px; }
        .pf.is-featured .pf-text { grid-column: 8 / span 5; }
        .pf-title {
          margin: 16px 0 14px; font-size: clamp(28px, 3vw, 44px); font-weight: 600;
          letter-spacing: -0.035em; line-height: 1.1; transition: color 0.2s ease;
        }
        .pf:hover .pf-title { color: var(--primary); }
        [data-theme="dark"] .pf:hover .pf-title { color: var(--signal); }
        .pf-excerpt { font-size: 16px; line-height: 1.6; color: var(--text-muted); }
        .pf-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin: 28px 0 0; }
        .pf-stats > div { flex-direction: column-reverse; padding: 16px; }
        .pf-stats dd { font-size: clamp(24px, 2.2vw, 34px); }
        .pf-stats dt { font-size: 10px; }
        .pf-link { margin-top: 28px; align-self: flex-start; color: var(--primary); }
        .pf:hover .pf-link { background-size: 100% 1px; color: var(--accent); }
        .pf:hover .pf-link .arrow { transform: translateX(4px); }
        @media (max-width: 880px) {
          .pf-visual, .pf.is-featured .pf-visual, .pf-text, .pf.is-featured .pf-text { grid-column: 1 / -1; }
          .pf-text { padding: 4px 8px 8px; }
        }
        @media (max-width: 480px) {
          .pf-stats { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
