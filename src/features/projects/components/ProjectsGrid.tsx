import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/shared/Reveal';
import { Tags } from '@/components/ui/Tags';
import { ArrowRight } from '@/components/ui/ArrowRight';
import { PROJECTS_LIST } from '@/lib/data/projects';

export function ProjectsGrid() {
  return (
    <section className="section-tight">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {PROJECTS_LIST.map((project, i) => (
            <Reveal key={project.slug} delay={i * 60}>
              <div className="card has-glow project-card" style={{
                display: 'grid',
                gridTemplateColumns: '1.1fr 1fr',
                minHeight: 420,
                overflow: 'hidden',
              }}>
                {/* Left: content */}
                <div style={{ padding: 44, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 28 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span className="mono" style={{ fontSize: 11, color: '#c4b5fd', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                        {project.category}
                      </span>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5,
                        padding: '3px 10px', borderRadius: 999,
                        fontSize: 11, fontFamily: 'var(--font-mono)',
                        background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', color: '#4ade80',
                      }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
                        {project.status}
                      </span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', letterSpacing: '-0.03em', marginBottom: 16 }}>{project.name}</h2>
                    <p style={{ color: 'var(--fg-2)', margin: 0, fontSize: 16, lineHeight: 1.6, maxWidth: '50ch' }}>
                      {project.excerpt}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
                      {project.stats.map((s, j) => (
                        <div key={j}>
                          <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em' }}>{s.l.toUpperCase()}</div>
                          <div style={{ fontSize: 24, fontFamily: 'var(--font-mono)', fontWeight: 500, marginTop: 4, color: '#fff' }}>{s.v}</div>
                        </div>
                      ))}
                    </div>
                    <Tags items={project.tech} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                          style={{ fontSize: 13, padding: '9px 18px' }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                      <Link
                        href={`/projects/${project.slug}`}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--fg-2)', fontSize: 14, fontWeight: 500, padding: '9px 4px' }}
                      >
                        View details <ArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right: screenshot */}
                <div style={{
                  position: 'relative',
                  borderLeft: '1px solid var(--border)',
                  background: 'linear-gradient(135deg, #0f1013 0%, #141518 100%)',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 24,
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'radial-gradient(ellipse at 60% 40%, rgba(139,92,246,0.12), transparent 70%)',
                  }} />
                  <div style={{
                    position: 'relative', width: '100%', borderRadius: 10,
                    overflow: 'hidden',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}>
                    <Image
                      src={project.coverImage}
                      alt={`${project.name} screenshot`}
                      width={640}
                      height={400}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .project-card { grid-template-columns: 1fr !important; }
          .project-card > div:last-child {
            border-left: none !important;
            border-top: 1px solid var(--border);
            min-height: 240px;
          }
        }
      `}</style>
    </section>
  );
}
