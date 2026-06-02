import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/shared/Reveal';
import { Tags } from '@/components/ui/Tags';
import { ArrowRight } from '@/components/ui/ArrowRight';
import { CaseVisualPixel } from '@/components/diagrams/CaseVisuals';
import { PROJECTS_LIST } from '@/lib/data/projects';

const CUSTOM_VISUALS: Record<string, React.ReactNode> = {
  'pixel-streaming': <CaseVisualPixel />,
};

export function ProjectsGrid() {
  return (
    <section className="section-tight">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {PROJECTS_LIST.map((project, i) => (
            <Reveal key={project.slug} delay={i * 60}>
              <div className="card has-glow project-card">

                {/* Left: content */}
                <div className="project-content">
                  <div>
                    <div className="project-meta">
                      <span className="project-category">{project.category}</span>
                      <span className="project-status">
                        <span className="project-status-dot" />
                        {project.status}
                      </span>
                    </div>
                    <h2 className="project-title">{project.name}</h2>
                    <p className="project-excerpt">{project.excerpt}</p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                    <div className="project-stats">
                      {project.stats.map((s, j) => (
                        <div key={j} className="project-stat">
                          <div className="project-stat-label">{s.l.toUpperCase()}</div>
                          <div className="project-stat-value">{s.v}</div>
                        </div>
                      ))}
                    </div>
                    <Tags items={project.tech} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                          style={{ fontSize: 14 }}
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                      <Link href={project.detailHref ?? `/projects/${project.slug}`} className="project-details-link">
                        View details <ArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right: screenshot or diagram */}
                <div className="project-visual">
                  <div className="project-visual-glow" />
                  {CUSTOM_VISUALS[project.slug] ? (
                    <div className="project-visual-diagram">
                      {CUSTOM_VISUALS[project.slug]}
                    </div>
                  ) : (
                    <div className="project-visual-frame">
                      <Image
                        src={project.coverImage}
                        alt={`${project.name} screenshot`}
                        width={640}
                        height={400}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                  )}
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .project-card {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          min-height: 420px;
          overflow: hidden;
        }
        .project-content {
          padding: 44px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 32px;
        }

        /* Meta row */
        .project-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }
        .project-category {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 600;
          color: #a78bfa;
        }
        [data-theme="light"] .project-category { color: #6d28d9; }

        .project-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-family: var(--font-mono);
          font-weight: 500;
          background: rgba(34,197,94,0.1);
          border: 1px solid rgba(34,197,94,0.28);
          color: #22c55e;
        }
        [data-theme="light"] .project-status {
          background: rgba(34,197,94,0.08);
          border-color: rgba(34,197,94,0.35);
          color: #15803d;
        }
        .project-status-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
          animation: pulse 2s ease-in-out infinite;
        }
        [data-theme="light"] .project-status-dot {
          background: #16a34a;
          box-shadow: 0 0 8px #16a34a;
        }

        /* Title + excerpt */
        .project-title {
          font-size: clamp(28px, 3.5vw, 42px);
          letter-spacing: -0.03em;
          margin: 0 0 18px;
          line-height: 1.1;
        }
        .project-excerpt {
          color: var(--fg-2);
          margin: 0;
          font-size: 16px;
          line-height: 1.65;
          max-width: 52ch;
        }

        /* Stats */
        .project-stats {
          display: flex;
          gap: 36px;
          flex-wrap: wrap;
          padding-top: 4px;
        }
        .project-stat-label {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--fg-3);
          letter-spacing: 0.14em;
          font-weight: 500;
        }
        .project-stat-value {
          font-size: 26px;
          font-family: var(--font-mono);
          font-weight: 600;
          margin-top: 6px;
          letter-spacing: -0.02em;
          line-height: 1;
          background: linear-gradient(135deg, #ffffff 20%, #93c5fd 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        [data-theme="light"] .project-stat-value {
          background: linear-gradient(135deg, #1e40af 0%, #6d28d9 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* Details link */
        .project-details-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--fg-2);
          font-size: 14.5px;
          font-weight: 500;
          padding: 10px 4px;
          transition: color 0.2s;
        }
        .project-details-link:hover { color: var(--fg-1); }

        /* Visual / screenshot panel */
        .project-visual {
          position: relative;
          border-left: 1px solid var(--border);
          background: linear-gradient(135deg, #0f1013 0%, #141518 100%);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
        }
        [data-theme="light"] .project-visual {
          background: linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%);
        }
        .project-visual-glow {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 60% 40%, rgba(139,92,246,0.14), transparent 70%);
          pointer-events: none;
        }
        [data-theme="light"] .project-visual-glow {
          background: radial-gradient(ellipse at 60% 40%, rgba(99,102,241,0.16), transparent 70%);
        }
        .project-visual-frame {
          position: relative;
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.55);
          border: 1px solid rgba(255,255,255,0.08);
        }
        [data-theme="light"] .project-visual-frame {
          box-shadow: 0 10px 36px rgba(99,102,241,0.18), 0 2px 6px rgba(0,0,0,0.08);
          border-color: rgba(99,102,241,0.18);
        }
        .project-visual-diagram {
          position: relative;
          width: 100%;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 880px) {
          .project-card { grid-template-columns: 1fr !important; }
          .project-content { padding: 32px !important; gap: 26px !important; }
          .project-visual {
            border-left: none !important;
            border-top: 1px solid var(--border);
            min-height: 240px;
          }
          .project-stats { gap: 24px; }
        }
      `}</style>
    </section>
  );
}
