import Image from 'next/image';
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

export function ProjectsGrid() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="products">
          {PROJECTS_LIST.map((project) => (
            <article key={project.slug} className="product">
              <Reveal className="reveal-clip product-visual">
                {CUSTOM_VISUALS[project.slug] ?? (
                  <Image
                    src={project.coverImage}
                    alt={`${project.name} screenshot`}
                    fill
                    sizes="(max-width: 1320px) 100vw, 1240px"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />
                )}
              </Reveal>

              <Reveal className="product-body">
                <div className="product-head">
                  <h2 className="product-title">{project.name}</h2>
                  <div className="product-meta">
                    <span className="meta">{project.category}</span>
                    <span className="product-status">
                      <span className="product-status-dot" />
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="product-grid">
                  <p className="product-excerpt">{project.excerpt}</p>
                  <div className="product-side">
                    <dl className="product-stats">
                      {project.stats.map((s, j) => (
                        <div key={j} className={`stat-tile product-stat ${STAT_TONES[j % STAT_TONES.length]}`}>
                          <dd className="product-stat-value">{s.v}</dd>
                          <dt className="meta">{s.l}</dt>
                        </div>
                      ))}
                    </dl>
                    <Tags items={project.tech} style={{ marginTop: 28 }} />
                    <div className="product-actions">
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                          Live Demo <ArrowRight />
                        </a>
                      )}
                      <Link href={project.detailHref ?? `/projects/${project.slug}`} className="link-arrow">
                        View details <ArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .products { display: flex; flex-direction: column; gap: 12px; }
        .product { padding: 12px; background: var(--surface); border-radius: var(--radius-card); }
        .product-visual {
          position: relative; aspect-ratio: 21 / 10; overflow: hidden;
          background: var(--paper-3); border-radius: 16px;
        }
        .product-visual img { transition: transform 1.4s var(--ease), clip-path 1.2s var(--ease) !important; }
        .product:hover .product-visual img { transform: scale(1.025) !important; }
        .product-body { padding: 0 20px 20px; }
        .product-head {
          display: flex; justify-content: space-between; align-items: flex-end; gap: 24px; flex-wrap: wrap;
          margin-top: 32px;
        }
        .product-title { font-size: clamp(36px, 4.6vw, 68px); font-weight: 600; letter-spacing: -0.04em; line-height: 1.05; }
        .product-meta { display: flex; align-items: center; gap: 12px; padding-bottom: 8px; flex-wrap: wrap; }
        .product-status {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 5px 12px 5px 10px; border-radius: var(--radius-pill); background: var(--ice);
          font-family: var(--font-sans); font-size: 12px; font-weight: 600;
          color: var(--primary);
        }
        [data-theme="dark"] .product-status { background: var(--paper-3); color: var(--signal); }
        .product-status-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--success); animation: pulse 2s ease-in-out infinite; }
        .product-grid {
          display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: 24px; row-gap: 32px;
          margin-top: 28px;
        }
        .product-excerpt { grid-column: 1 / span 5; font-size: clamp(17px, 1.4vw, 20px); line-height: 1.55; color: var(--text-muted); }
        .product-side { grid-column: 7 / span 6; }
        .product-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin: 0; }
        .product-stat { flex-direction: column-reverse; min-height: 120px; }
        .product-stat-value {
          font-size: clamp(30px, 3.2vw, 48px); font-variant-numeric: tabular-nums;
        }
        .product-actions { display: flex; align-items: center; gap: 28px; flex-wrap: wrap; margin-top: 32px; }
        @media (max-width: 880px) {
          .product-visual { aspect-ratio: 16 / 10; }
          .product-body { padding: 0 8px 12px; }
          .product-excerpt, .product-side { grid-column: 1 / -1; }
        }
        @media (max-width: 520px) {
          .product-stats { grid-template-columns: 1fr; }
          .product-stat { min-height: 0; }
        }
      `}</style>
    </section>
  );
}
