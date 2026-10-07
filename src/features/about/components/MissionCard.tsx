import { Reveal } from '@/components/shared/Reveal';

/** Mission set as a full-bleed navy plate: the statement runs large, the explanation sits in the right half. */
export function MissionCard() {
  return (
    <section className="block block-dark on-dark mission">
      <div className="container">
        <Reveal>
          <span className="eyebrow mission-eyebrow">Mission</span>
          <h2 className="mission-title">
            We build software that companies bet their next decade on.
          </h2>
        </Reveal>
        <Reveal delay={120}>
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
        .mission { padding: 88px 0 80px; margin-top: 12px; }
        .mission-title {
          margin-top: 28px; max-width: 18ch; color: #fff;
          font-size: clamp(34px, 4.8vw, 68px); font-weight: 600; letter-spacing: -0.035em; line-height: 1.1;
        }
        .mission-foot {
          display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: 24px;
          margin-top: 56px; padding-top: 28px; border-top: 1px solid var(--border-on-dark);
        }
        .mission-mark { grid-column: 1 / span 2; width: 120px; color: var(--border-on-dark); }
        .mission-mark path:last-child { stroke: var(--chartreuse); }
        .mission-body { grid-column: 7 / span 6; font-size: clamp(17px, 1.4vw, 20px); line-height: 1.55; color: var(--text-on-dark-muted); }
        @media (max-width: 880px) {
          .mission { padding: 56px 0 48px; }
          .mission-foot { margin-top: 48px; row-gap: 28px; }
          .mission-mark, .mission-body { grid-column: 1 / -1; }
        }
      `}</style>
    </section>
  );
}
