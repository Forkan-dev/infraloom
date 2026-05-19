import Link from 'next/link';
import { Reveal } from '@/components/shared/Reveal';
import { Tags } from '@/components/ui/Tags';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { BigCTA } from '@/components/shared/BigCTA';
import { SectionHead } from '@/components/shared/SectionHead';
import { PixelStreamingDiagram } from '@/components/diagrams/PixelStreamingDiagram';
import { CASE_STUDIES } from '@/lib/data/portfolio';

interface CaseStudyDetailProps {
  slug: string;
}

export function CaseStudyDetail({ slug }: CaseStudyDetailProps) {
  const study = CASE_STUDIES[slug];
  if (!study) return null;

  return (
    <div className="page-enter">
      {/* Hero */}
      <section style={{ position: 'relative', padding: '180px 0 60px', overflow: 'hidden' }}>
        <div className="bg-grid" />
        <div className="bg-glow violet" style={{ top: -350, right: -200, opacity: 0.5 }} />
        <div className="bg-glow cyan" style={{ top: -100, left: -200, opacity: 0.4 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <Link href="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--fg-3)', marginBottom: 28 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M7 3l-3 3 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All case studies
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <span className="mono" style={{ fontSize: 11, color: '#c4b5fd', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{study.eyebrow}</span>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="gradient-text" style={{ marginTop: 22, marginBottom: 28, maxWidth: '20ch' }}>{study.title}</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="lede" style={{ maxWidth: '60ch', marginBottom: 56 }}>{study.lead}</p>
          </Reveal>
          <Reveal delay={260}>
            <div className="case-stats" style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${study.heroStats.length}, 1fr)`,
              gap: 1, background: 'var(--border)', borderRadius: 14, overflow: 'hidden', border: '1px solid var(--border)',
            }}>
              {study.heroStats.map((s, i) => (
                <div key={i} style={{ padding: '20px 24px', background: 'var(--bg-2)' }}>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em', marginBottom: 8 }}>{s.l.toUpperCase()}</div>
                  <div style={{ fontSize: 30, fontWeight: 500, fontFamily: 'var(--font-mono)', letterSpacing: '-0.03em' }}>{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <style>{`@media (max-width: 880px) { .case-stats { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
      </section>

      {/* Problem / Solution */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="ps-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <div className="card" style={{ padding: 32 }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--danger)', letterSpacing: '0.14em' }}>● THE PROBLEM</span>
                <h3 style={{ margin: '16px 0 16px' }}>What we walked into.</h3>
                <p style={{ color: 'var(--fg-2)', margin: 0, fontSize: 15, lineHeight: 1.65 }}>{study.problem}</p>
                <div style={{ marginTop: 28 }}>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em', marginBottom: 12 }}>GOALS WE COMMITTED TO</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {study.goals.map((g, i) => (
                      <li key={i} style={{ fontSize: 14, color: 'var(--fg-2)', display: 'flex', gap: 10, lineHeight: 1.5 }}>
                        <span style={{ flexShrink: 0, marginTop: 7, width: 4, height: 4, borderRadius: '50%', background: 'var(--blue)' }} />
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card" style={{ padding: 32 }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--success)', letterSpacing: '0.14em' }}>● THE SOLUTION</span>
                <h3 style={{ margin: '16px 0 16px' }}>What we shipped.</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {study.solution.map((s, i) => (
                    <li key={i} style={{ fontSize: 14.5, color: 'var(--fg-2)', display: 'flex', gap: 12, lineHeight: 1.6 }}>
                      <span className="mono" style={{ flexShrink: 0, color: '#c4b5fd', fontSize: 12, width: 22 }}>0{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <style>{`@media (max-width: 880px) { .ps-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Architecture (pixel-streaming only) */}
      {study.hasArch && (
        <section className="section-tight">
          <div className="container">
            <Reveal>
              <SectionHead eyebrow="Architecture" title="The full topology, at a glance." />
            </Reveal>
            <Reveal>
              <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 22, padding: 28, position: 'relative', overflow: 'hidden' }}>
                <div className="bg-dots" style={{ opacity: 0.4 }} />
                <div style={{
                  position: 'absolute', top: 20, left: 28, right: 28,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  fontSize: 11, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', zIndex: 1,
                }}>
                  <span>UE-PIXEL-STREAM · ARCHITECTURE</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 6px var(--success)' }} />
                    LIVE
                  </span>
                </div>
                <div style={{ marginTop: 30, position: 'relative', zIndex: 1 }}>
                  <PixelStreamingDiagram />
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div style={{ marginTop: 36 }}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.14em', marginBottom: 16 }}>SAMPLE: SESSION ALLOCATION</div>
                <CodeBlock filename="orchestrator/lease.go" lang="go">
                  <>
                    <span className="tok-c">{'// LeaseInstance picks a warm GPU and hands it to a session.'}</span>{'\n'}
                    <span className="tok-c">{'// Idempotent on (tenant, sessionID); honors per-tenant quotas.'}</span>{'\n'}
                    <span className="tok-k">func</span> (o *<span className="tok-f">Orchestrator</span>) <span className="tok-f">LeaseInstance</span>({'\n'}
                    {'  '}ctx context.Context, req *<span className="tok-f">LeaseReq</span>,{'\n'}
                    {') (*'}<span className="tok-f">Lease</span>, <span className="tok-k">error</span>) {'{'}{'\n'}
                    {'  '}span := tracer.<span className="tok-f">Start</span>(ctx, <span className="tok-s">&quot;lease.acquire&quot;</span>){'\n'}
                    {'  '}<span className="tok-k">defer</span> span.<span className="tok-f">End</span>(){'\n\n'}
                    {'  '}<span className="tok-k">if</span> err := o.quota.<span className="tok-f">Check</span>(req.<span className="tok-p">Tenant</span>); err != <span className="tok-k">nil</span> {'{'}{'\n'}
                    {'    '}<span className="tok-k">return nil</span>, errs.<span className="tok-f">QuotaExceeded</span>(err){'\n'}
                    {'  }'}{'\n\n'}
                    {'  '}inst, err := o.pool.<span className="tok-f">PickWarm</span>(ctx, req.<span className="tok-p">Region</span>){'\n'}
                    {'  '}<span className="tok-k">if</span> err != <span className="tok-k">nil</span> {'{'}{'\n'}
                    {'    '}<span className="tok-k">return</span> o.<span className="tok-f">coldBoot</span>(ctx, req){'\n'}
                    {'  }'}{'\n\n'}
                    {'  '}lease := &<span className="tok-f">Lease</span>{'{'}{'\n'}
                    {'    '}<span className="tok-p">ID</span>:        <span className="tok-f">uuid.NewString</span>(),{'\n'}
                    {'    '}<span className="tok-p">ExpiresAt</span>: time.<span className="tok-f">Now</span>().<span className="tok-f">Add</span>(req.<span className="tok-p">TTL</span>),{'\n'}
                    {'  }'}{'\n'}
                    {'  '}<span className="tok-k">return</span> lease, o.store.<span className="tok-f">Save</span>(ctx, lease){'\n'}
                    {'}'}
                  </>
                </CodeBlock>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Microservices */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Microservices" title="The services we shipped." />
          </Reveal>
          <Reveal stagger>
            <div className="ms-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {study.microservices.map((m, i) => (
                <div key={i} className="card" style={{ padding: 22 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                    <span className="mono" style={{ fontSize: 14, color: '#fff', fontWeight: 500 }}>{m.n}</span>
                    <span className="chip" style={{ color: '#c4b5fd' }}>{m.lang}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--fg-3)', lineHeight: 1.5 }}>{m.role}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <style>{`
            @media (max-width: 880px) { .ms-grid { grid-template-columns: 1fr 1fr !important; } }
            @media (max-width: 600px) { .ms-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* Challenges */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Hard problems" title="What broke. What we did about it." />
          </Reveal>
          <div className="challenge-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {study.challenges.map((c, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="card has-glow" style={{ padding: 28 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                    <span className="mono" style={{
                      width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      borderRadius: 8, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
                      color: '#fcd34d', fontSize: 12,
                    }}>{`0${i + 1}`}</span>
                    <h4 style={{ margin: 0 }}>{c.t}</h4>
                  </div>
                  <p style={{ margin: 0, fontSize: 14.5, color: 'var(--fg-2)', lineHeight: 1.6 }}>{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`@media (max-width: 700px) { .challenge-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Results */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Results" title="What changed, measured." />
          </Reveal>
          <div className="results-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${study.results.length}, 1fr)`, gap: 16 }}>
            {study.results.map((r, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="card" style={{ padding: 28 }}>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em', marginBottom: 12 }}>{r.l.toUpperCase()}</div>
                  <div style={{
                    fontSize: 38, fontWeight: 500, fontFamily: 'var(--font-mono)', letterSpacing: '-0.03em', marginBottom: 8,
                    background: 'linear-gradient(120deg, #fff, #93c5fd)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                  }}>{r.v}</div>
                  <div style={{ fontSize: 11, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)' }}>was {r.was}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`@media (max-width: 880px) { .results-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
        </div>
      </section>

      {/* Stack */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="card" style={{ padding: 32, textAlign: 'center' }}>
              <span className="eyebrow" style={{ marginBottom: 16 }}>Stack</span>
              <h3 style={{ margin: '16px 0 24px' }}>The full toolkit on this engagement.</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                {study.stack.map((t, i) => (
                  <span key={i} className="chip" style={{ fontSize: 13, padding: '6px 14px' }}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <BigCTA />
    </div>
  );
}
