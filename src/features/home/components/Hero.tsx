import Link from 'next/link';
import { Reveal } from '@/components/shared/Reveal';
import { Stat } from '@/components/ui/Stat';
import { ArrowRight } from '@/components/ui/ArrowRight';
import { ArchitectureHero } from '@/components/diagrams/ArchitectureHero';
import { LiveMetrics } from '@/components/diagrams/LiveMetrics';

export function Hero() {
  return (
    <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 100, overflow: 'hidden' }}>
      <div className="bg-grid" />
      <div className="bg-glow violet" style={{ top: -350, right: -200 }} />
      <div className="bg-glow blue" style={{ top: -200, left: -300 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <span className="chip dot" style={{ marginBottom: 28 }}>
            <span style={{ color: 'var(--success)' }}>● </span>
            <span style={{ color: 'var(--fg-2)' }}>Now booking Q3 engagements · 4 slots remaining</span>
          </span>
        </Reveal>

        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 60, alignItems: 'center' }}>
          <div>
            <Reveal delay={80}>
              <h1 className="gradient-text" style={{ marginBottom: 28 }}>
                We build scalable <span className="serif" style={{ color: '#c4b5fd' }}>software systems</span> for modern&nbsp;businesses.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lede" style={{ marginBottom: 36, maxWidth: '52ch' }}>
                A senior engineering studio designing and shipping production-grade
                platforms — distributed backends, real-time streaming, and AI-native
                products — for ambitious companies in the United States.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56 }}>
                <Link href="/contact" className="btn btn-primary">Book a discovery call <ArrowRight /></Link>
                <Link href="/portfolio" className="btn btn-secondary">View case studies</Link>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
                <Stat value="180+" label="Systems shipped" />
                <div style={{ width: 1, height: 32, background: 'var(--border)' }} />
                <Stat value="99.98%" label="Avg. uptime" />
                <div style={{ width: 1, height: 32, background: 'var(--border)' }} />
                <Stat value="< 80ms" label="P99 latency" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={340}>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: -40,
                background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.18), transparent 70%)',
                filter: 'blur(40px)',
              }} />
              <div style={{
                position: 'relative',
                padding: 24,
                background: 'linear-gradient(180deg, rgba(20,21,24,0.7), rgba(15,16,19,0.4))',
                border: '1px solid var(--border)',
                borderRadius: 22,
                backdropFilter: 'blur(10px)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.14em' }}>SYS · TOPOLOGY</span>
                  <span className="chip dot">live</span>
                </div>
                <ArchitectureHero />
                <div style={{ marginTop: 16 }}>
                  <LiveMetrics />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
