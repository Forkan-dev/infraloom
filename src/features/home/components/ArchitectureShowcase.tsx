import { Reveal } from '@/components/shared/Reveal';
import { SectionHead } from '@/components/shared/SectionHead';
import { PixelStreamingDiagram } from '@/components/diagrams/PixelStreamingDiagram';

const STATS = [
  { l: 'Throughput', v: '14k msg/s' },
  { l: 'Active sessions', v: '8,420' },
  { l: 'GPU instances', v: '54 nodes' },
  { l: 'Mean failover', v: '1.2s' },
];

export function ArchitectureShowcase() {
  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="Architecture"
            title="Designed to fail loudly. Built to scale quietly."
            body="A snapshot of one of our reference architectures — multi-region, event-driven, observable end-to-end."
          />
        </Reveal>
        <Reveal>
          <div style={{
            position: 'relative',
            background: 'var(--bg-2)',
            border: '1px solid var(--border)',
            borderRadius: 22,
            padding: 28,
            overflow: 'hidden',
          }}>
            <div className="bg-dots" style={{ opacity: 0.6 }} />
            <div style={{
              position: 'absolute', top: 20, left: 28, right: 28,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              fontSize: 11, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)',
              letterSpacing: '0.12em', zIndex: 1,
            }}>
              <span>REF · ENT-PLATFORM-V4</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 6px var(--success)' }} />
                ALL HEALTHY
              </span>
            </div>
            <div style={{ position: 'relative', marginTop: 30, zIndex: 1 }}>
              <PixelStreamingDiagram />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="arch-stat-row">
            {STATS.map((s, i) => (
              <div key={i} className="card" style={{ padding: '16px 20px' }}>
                <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em', marginBottom: 6 }}>{s.l.toUpperCase()}</div>
                <div style={{ fontSize: 22, fontFamily: 'var(--font-mono)', fontWeight: 500 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .arch-stat-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
