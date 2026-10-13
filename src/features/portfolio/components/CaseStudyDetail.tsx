import Link from 'next/link';
import { Reveal } from '@/components/shared/Reveal';
import { SectionHead } from '@/components/shared/SectionHead';
import { PixelStreamingDiagram } from '@/components/diagrams/PixelStreamingDiagram';
import { CASE_STUDIES } from '@/lib/data/portfolio';

const STAT_TONES = ['stat-chartreuse', 'stat-ice', 'stat-primary', 'stat-dark'];

interface CaseStudyDetailProps {
  slug: string;
}

export function CaseStudyDetail({ slug }: CaseStudyDetailProps) {
  const study = CASE_STUDIES[slug];
  if (!study) return null;

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="cs-hero">
        <div className="container cs-hero-inner">
          <Reveal>
            <div className="cs-top">
              <Link href="/portfolio" className="link-arrow cs-back">
                <svg width="21" height="14" viewBox="0 0 24 16" fill="none" aria-hidden="true">
                  <path d="M23 8H3M9 2L3 8l6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
                </svg>
                All case studies
              </Link>
              <span className="meta">{study.eyebrow}</span>
            </div>
          </Reveal>
          <Reveal>
            <h1 className="cs-title">{study.title}</h1>
          </Reveal>
          <Reveal delay={120}>
            <div className="cs-lead-row">
              <p className="lede cs-lead">{study.lead}</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <dl className="cs-stats" style={{ gridTemplateColumns: `repeat(${study.heroStats.length}, minmax(0, 1fr))` }}>
              {study.heroStats.map((s, i) => (
                <div key={i} className={`stat-tile cs-stat ${STAT_TONES[i % STAT_TONES.length]}`}>
                  <dd>{s.v}</dd>
                  <dt className="meta">{s.l}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="section-tight">
        <div className="container cs-ps">
          <Reveal className="cs-col">
            <span className="meta cs-label"><i style={{ background: 'var(--danger)' }} />The problem</span>
            <h2 className="cs-h">What we walked into.</h2>
            <p className="cs-p">{study.problem}</p>
            <span className="meta" style={{ marginTop: 40 }}>Goals we committed to</span>
            <ul className="cs-list">
              {study.goals.map((g, i) => <li key={i}>{g}</li>)}
            </ul>
          </Reveal>
          <Reveal className="cs-col" delay={120}>
            <span className="meta cs-label"><i style={{ background: 'var(--success)' }} />The solution</span>
            <h2 className="cs-h">What we shipped.</h2>
            <ul className="cs-list cs-list-lg">
              {study.solution.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Architecture (pixel-streaming only) */}
      {study.hasArch && (
        <section className="section-tight">
          <div className="container">
            <Reveal>
              <SectionHead eyebrow="Architecture" title="The full topology, at a glance." />
            </Reveal>
            <Reveal className="cs-arch">
              <div className="cs-arch-bar">
                <span>UE-PIXEL-STREAM · ARCHITECTURE</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 7, height: 7, background: '#4ADE80' }} />
                  LIVE
                </span>
              </div>
              <PixelStreamingDiagram />
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
          <Reveal stagger className="ms-table">
            {study.microservices.map((m, i) => (
              <div key={i} className="ms-row">
                <span className="ms-name">{m.n}</span>
                <span className="ms-lang">{m.lang}</span>
                <span className="ms-role">{m.role}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <style>{`
        /* light header on the page background (only the home page has the dark infinity hero) */
        .cs-hero { padding: 56px 0 24px; }
        .cs-top { display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; margin-bottom: 40px; }
        .cs-back { color: var(--text-muted); }
        .cs-back:hover { color: var(--primary); }
        .cs-back svg { transition: transform 0.35s var(--ease); }
        .cs-back:hover svg { transform: translateX(-4px); }
        .cs-title { max-width: 16ch; font-size: clamp(36px, 5.2vw, 76px); font-weight: 600; color: var(--ultramarine); text-wrap: balance; }
        .cs-lead-row { margin-top: 28px; max-width: 62ch; }
        .cs-lead { max-width: none; color: var(--text-muted); }
        .cs-stats { display: grid; gap: 8px; margin: 56px 0 0; }
        .cs-stat { flex-direction: column-reverse; min-height: 150px; }
        .cs-stat dd { font-size: clamp(36px, 4.4vw, 68px); }

        .cs-ps { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
        .cs-col { display: flex; flex-direction: column; padding: 32px; background: var(--surface); border-radius: var(--radius-card); }
        .cs-label { gap: 10px; }
        .cs-label::before { display: none; }
        .cs-label i { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
        .cs-h { margin: 16px 0 20px; font-size: clamp(28px, 2.8vw, 42px); font-weight: 600; letter-spacing: -0.035em; line-height: 1.1; }
        .cs-p { font-size: 17px; line-height: 1.65; color: var(--text-muted); }
        .cs-list { list-style: none; padding: 0; margin: 16px 0 0; display: flex; flex-direction: column; }
        .cs-list li {
          position: relative; padding: 14px 0 14px 22px; border-top: 1px solid var(--rule);
          font-size: 15px; line-height: 1.55; color: var(--ink-2);
        }
        .cs-list li::before { content: ""; position: absolute; left: 0; top: 22px; width: 8px; height: 8px; border-radius: 50%; background: var(--primary); }
        .cs-list-lg li { font-size: 17px; padding: 18px 0 18px 26px; }
        .cs-list-lg li::before { top: 27px; }

        .cs-arch { background: var(--ultramarine); padding: 28px; border-radius: var(--radius-block); }
        [data-theme="dark"] .cs-arch { background: #0A1A5C; }
        .cs-arch-bar {
          display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; color: var(--text-on-dark-muted);
        }

        .ms-table { display: flex; flex-direction: column; gap: 8px; }
        .ms-row {
          display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: 24px; align-items: baseline;
          padding: 20px 24px; background: var(--surface); border-radius: 18px;
          transition: background 0.2s ease;
        }
        .ms-row:hover { background: var(--ice); }
        [data-theme="dark"] .ms-row:hover { background: var(--paper-3); }
        .ms-name { grid-column: 1 / span 4; font-family: var(--font-mono); font-size: 16px; color: var(--ink); }
        .ms-lang { grid-column: 5 / span 2; font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--primary); }
        [data-theme="dark"] .ms-lang { color: var(--signal); }
        .ms-role { grid-column: 7 / span 6; font-size: 15px; color: var(--text-muted); }

        @media (max-width: 880px) {
          .cs-hero { padding-top: 44px; }
          .cs-stats { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .cs-stat { min-height: 120px; }
          .cs-ps { grid-template-columns: 1fr; }
          .cs-col { padding: 24px; }
          .cs-arch { padding: 16px; overflow-x: auto; }
          .ms-row { padding: 16px 18px; }
          .ms-name { grid-column: 1 / span 8; }
          .ms-lang { grid-column: 9 / span 4; text-align: right; }
          .ms-role { grid-column: 1 / -1; margin-top: 6px; }
        }
      `}</style>
    </div>
  );
}
