import Link from 'next/link';
import { Reveal } from '@/components/shared/Reveal';
import { Tags } from '@/components/ui/Tags';
import { ArrowRight } from '@/components/ui/ArrowRight';
import { CaseVisualPixel } from '@/components/diagrams/CaseVisuals';
import { PROJECTS_LIST } from '@/lib/data/projects';

const STAT_TONES = ['stat-chartreuse', 'stat-ice', 'stat-dark'];

const CUSTOM_VISUALS: Record<string, React.ReactNode> = {
  'pixel-streaming': <CaseVisualPixel />,
};

/**
 * Product showcase: one white card per product, copy on one side and a tinted visual panel on the other
 * (sides alternate). Screenshots sit inside the panel and bleed off its corner, like a SaaS feature card.
 */
export function ProjectsGrid() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="products">
          {PROJECTS_LIST.map((project, i) => {
            const art = CUSTOM_VISUALS[project.slug];
            return (
              <article key={project.slug} className={`product ${i % 2 ? 'is-flip' : ''}`}>
                <Reveal className="product-body">
                  <div className="product-meta">
                    <span className="meta">{project.category}</span>
                    <span className="product-status">
                      <span className="product-status-dot" />
                      {project.status}
                    </span>
                  </div>
                  <h2 className="product-title">{project.name}</h2>
                  <p className="product-excerpt">{project.excerpt}</p>

                  <dl className="product-stats">
                    {project.stats.map((s, j) => (
                      <div key={j} className={`stat-tile product-stat ${STAT_TONES[j % STAT_TONES.length]}`}>
                        <dd className="product-stat-value">{s.v}</dd>
                        <dt className="meta">{s.l}</dt>
                      </div>
                    ))}
                  </dl>

                  <Tags items={project.tech} style={{ marginTop: 20 }} />

                  <div className="product-actions">
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Live Demo <ArrowRight />
                      </a>
                    )}
                    <Link
                      href={project.detailHref ?? `/projects/${project.slug}`}
                      className="link-arrow product-link"
                      {...(project.detailHref?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      View details <ArrowRight />
                    </Link>
                  </div>
                </Reveal>

                <Reveal className={`product-visual ${art ? 'is-art' : ''}`}>
                  {art ?? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="product-shot" src={project.coverImage} alt={`${project.name} screenshot`} />
                  )}
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .products { display: flex; flex-direction: column; gap: 16px; }
        .product {
          display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: 12px;
          padding: 12px; background: var(--surface); border-radius: var(--radius-block);
        }
        .product-body { grid-column: 1 / span 5; padding: 36px 28px 32px; display: flex; flex-direction: column; }
        .product-visual { grid-column: 6 / span 7; }
        .product.is-flip .product-body { grid-column: 8 / span 5; grid-row: 1; }
        .product.is-flip .product-visual { grid-column: 1 / span 7; grid-row: 1; }

        .product-meta { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
        .product-status {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 5px 12px 5px 10px; border-radius: var(--radius-pill); background: var(--ice);
          font-family: var(--font-sans); font-size: 12px; font-weight: 600; color: var(--primary);
        }
        .product-status-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--success); animation: pulse 2s ease-in-out infinite; }
        .product-title {
          margin: 20px 0 14px; font-size: clamp(32px, 3.4vw, 48px); font-weight: 600;
          letter-spacing: -0.035em; line-height: 1.05; color: var(--ultramarine);
        }
        .product-excerpt { font-size: 16px; line-height: 1.6; color: var(--text-muted); }

        .product-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin: 28px 0 0; }
        .product-stat { flex-direction: column-reverse; padding: 14px 16px; border-radius: 16px; gap: 6px; }
        .product-stat-value { font-size: clamp(22px, 2vw, 30px); font-variant-numeric: tabular-nums; }
        .product-stat .meta { font-size: 10px; letter-spacing: 0.06em; }

        .product-actions { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; margin-top: auto; padding-top: 28px; }
        .product-link { color: var(--primary); }

        /* tinted panel; the screenshot bleeds off its corner (bottom-right, or bottom-left when flipped) */
        .product-visual {
          position: relative; min-height: 460px; overflow: hidden;
          border-radius: 18px; background: var(--ice);
        }
        .product-visual.is-art { background: var(--ultramarine); }
        /* the screenshot covers the whole panel */
        .product-shot {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; object-position: center top;
        }
        @media (max-width: 900px) {
          .product-body, .product.is-flip .product-body { grid-column: 1 / -1; grid-row: 2; padding: 24px 12px 12px; }
          .product-visual, .product.is-flip .product-visual { grid-column: 1 / -1; grid-row: 1; min-height: 300px; }
        }
        @media (max-width: 520px) {
          .product-stats { grid-template-columns: 1fr 1fr 1fr; }
          .product-visual { min-height: 230px; }
        }
      `}</style>
    </section>
  );
}
