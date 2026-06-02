import { Reveal } from '@/components/shared/Reveal';
import { GlyphMap } from '@/components/shared/Glyphs';

const SLA_ROWS = [
  ['First reply', '≤ 4h'],
  ['Discovery call', '≤ 2 days'],
  ['Architecture brief', '≤ 7 days'],
  ['Pod start', '10–14 days'],
] as const;

export function ContactSidebar() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

      {/* Discovery call */}
      <Reveal delay={120}>
        <div className="card" style={{ padding: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <span style={{
              width: 42, height: 42, borderRadius: 10, flexShrink: 0,
              background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))',
              border: '1px solid rgba(139,92,246,0.28)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: '#818cf8',
            }}>{GlyphMap.bolt}</span>
            <div>
              <h4 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Discovery call</h4>
              <div style={{
                marginTop: 4, display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 11, fontFamily: 'var(--font-mono)', letterSpacing: '0.1em',
                color: 'var(--fg-3)',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
                30 MIN · FREE · NO COMMITMENT
              </div>
            </div>
          </div>
          <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.6, margin: '0 0 18px' }}>
            Skip the form. Book a 30-minute call directly with a principal engineer — scoped to your problem, no sales script.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ display: 'inline-flex', width: '100%', justifyContent: 'center', fontSize: 14, fontWeight: 500 }}
          >
            Book on Calendly →
          </a>
        </div>
      </Reveal>

      {/* Response SLA */}
      <Reveal delay={180}>
        <div className="card" style={{ padding: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
            <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', letterSpacing: '0.14em', color: 'var(--fg-3)' }}>RESPONSE SLA</span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
            {SLA_ROWS.map(([l, v], i) => (
              <li key={l} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                paddingTop: i === 0 ? 0 : 14, paddingBottom: 14,
                borderBottom: i < SLA_ROWS.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--fg-1)' }}>{l}</span>
                <span className="sla-val mono" style={{ fontSize: 15, fontWeight: 600 }}>{v}</span>
              </li>
            ))}
          </ul>
          <style>{`
            .sla-val { color: #16a34a; }
            [data-theme="light"] .sla-val { color: #15803d; }
          `}</style>
        </div>
      </Reveal>

      {/* Direct contact */}
    </div>
  );
}
