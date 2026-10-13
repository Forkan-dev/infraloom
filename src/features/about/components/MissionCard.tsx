import { Reveal } from '@/components/shared/Reveal';

/** Mission as a light ice block: the statement runs large on the left, the explanation sits in a narrow right column. */
export function MissionCard() {
  return (
    <section className="block block-ice mission">
      <div className="container mission-grid">
        <Reveal className="mission-lead">
          <h2 className="mission-title">
            We build software that companies bet their next decade on.
          </h2>
        </Reveal>
        <Reveal delay={120} className="mission-side">
          <div className="mission-foot">
            <svg className="mission-mark" viewBox="0 0 120 60" fill="none" aria-hidden="true">
              {[4, 24, 44, 64, 84, 104].map((x) => (
                <path key={x} d={`M${x} 0v60`} stroke="currentColor" strokeWidth="1" />
              ))}
              <path d="M0 30h120" stroke="var(--blue)" strokeWidth="3" />
            </svg>
            <p className="mission-body">
              Most of what we&apos;re hired for is hard not because the algorithm is novel, but because the system
              has to keep working while it&apos;s being changed. Our job is to make those changes safe — for the
              engineers shipping them, the operators on call, and the business depending on them.
            </p>
          </div>
        </Reveal>
      </div>
      <style>{`
        .mission { padding: 96px 0; margin-top: 56px; }
        .mission-grid {
          display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: 24px; row-gap: 40px;
          align-items: end;
        }
        .mission-lead { grid-column: 1 / span 7; }
        .mission-side { grid-column: 9 / span 4; }
        .mission-title {
          max-width: 17ch; color: var(--ultramarine);
          font-size: clamp(32px, 4.2vw, 60px); font-weight: 600; letter-spacing: -0.035em; line-height: 1.1;
        }
        .mission-foot { display: flex; flex-direction: column; gap: 24px; }
        .mission-mark { width: 96px; color: rgba(7, 18, 63, 0.22); }
        .mission-body { font-size: clamp(16px, 1.25vw, 18px); line-height: 1.65; color: var(--ultramarine-muted); }
        [data-theme="dark"] .mission-title { color: var(--text); }
        [data-theme="dark"] .mission-body { color: var(--text-muted); }
        [data-theme="dark"] .mission-mark { color: var(--rule-strong); }
        @media (max-width: 980px) {
          .mission-lead { grid-column: 1 / span 12; }
          .mission-side { grid-column: 1 / span 8; }
        }
        @media (max-width: 640px) {
          .mission { padding: 56px 0; margin-top: 36px; }
          .mission-side { grid-column: 1 / -1; }
        }
      `}</style>
    </section>
  );
}
