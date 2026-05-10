import { Reveal } from '@/components/shared/Reveal';

const EVENTS = [
  { y: '2018', t: 'Founded as a 4-person engineering studio.', b: 'We started by helping two YC startups un-stick their Rails monoliths. Word got around.' },
  { y: '2020', t: 'First enterprise contract: a real-time logistics platform for 92k vehicles.', b: 'We learned the difference between \'scales\' and \'scales under operational load at 3am\'.' },
  { y: '2022', t: 'Opened a dedicated Distributed Systems practice.', b: 'Hired three principal engineers from streaming-media and exchange backgrounds. Shipped our first Kong + RabbitMQ + Fluent Bit reference architecture.' },
  { y: '2024', t: 'Multi-instance UE pixel streaming platform goes live.', b: '11M+ sessions launched in year one. We open-sourced parts of the orchestrator.' },
  { y: '2026', t: '47 engineers. 5 timezones. Zero generic agency work.', b: 'Today we run senior, embedded teams against real production systems for clients on three continents.' },
];

export function Timeline() {
  return (
    <section className="section-tight">
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 36 }}>
            <span className="eyebrow">Story</span>
            <h2 className="gradient-text" style={{ marginTop: 16 }}>From four engineers to forty-seven.</h2>
          </div>
        </Reveal>
        <div style={{ position: 'relative', paddingLeft: 28 }}>
          <div style={{ position: 'absolute', left: 9, top: 8, bottom: 8, width: 1, background: 'linear-gradient(to bottom, transparent, var(--border) 10%, var(--border) 90%, transparent)' }} />
          {EVENTS.map((e, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{ position: 'relative', paddingBottom: 36 }}>
                <div style={{
                  position: 'absolute', left: -28, top: 6,
                  width: 18, height: 18, borderRadius: '50%',
                  background: 'var(--bg-1)', border: '1px solid var(--blue)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--blue)', boxShadow: '0 0 10px var(--blue)' }} />
                </div>
                <div className="mono" style={{ fontSize: 12, color: '#93c5fd', letterSpacing: '0.14em', marginBottom: 8 }}>{e.y}</div>
                <h3 style={{ marginBottom: 10, fontSize: 22 }}>{e.t}</h3>
                <p style={{ margin: 0, color: 'var(--fg-2)', fontSize: 15, lineHeight: 1.6, maxWidth: '70ch' }}>{e.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
