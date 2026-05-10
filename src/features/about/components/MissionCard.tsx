import { Reveal } from '@/components/shared/Reveal';

export function MissionCard() {
  return (
    <section className="section-tight">
      <div className="container">
        <Reveal>
          <div className="card has-glow" style={{ padding: 56, position: 'relative', overflow: 'hidden' }}>
            <div className="bg-glow violet" style={{ top: -200, right: -200, opacity: 0.4 }} />
            <div style={{ position: 'relative', zIndex: 1, maxWidth: 760 }}>
              <span className="eyebrow">Mission</span>
              <h2 style={{ marginTop: 16, marginBottom: 22, fontSize: 42 }}>
                We build software that companies bet their next decade on.
              </h2>
              <p style={{ fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>
                Most of what we&apos;re hired for is hard not because the algorithm is novel, but because the system
                has to keep working while it&apos;s being changed. Our job is to make those changes safe — for the
                engineers shipping them, the operators on call, and the business depending on them.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
