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
      <Reveal delay={120}>
        <div className="card" style={{ padding: 26 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <span style={{
              width: 36, height: 36, borderRadius: 8,
              background: 'linear-gradient(135deg, rgba(59,130,246,0.18), rgba(139,92,246,0.18))',
              border: '1px solid rgba(139,92,246,0.3)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: '#c4b5fd',
            }}>{GlyphMap.bolt}</span>
            <div>
              <h4 style={{ margin: 0 }}>Discovery call</h4>
              <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.12em' }}>30MIN · NO COMMITMENT</div>
            </div>
          </div>
          <p style={{ fontSize: 13.5, color: 'var(--fg-2)', lineHeight: 1.55, margin: '0 0 16px' }}>
            Skip the form. Book a 30-minute call directly with a principal engineer.
          </p>
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-flex' }}>
            Book on Calendly →
          </a>
        </div>
      </Reveal>
      <Reveal delay={180}>
        <div className="card" style={{ padding: 26 }}>
          <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em', marginBottom: 14 }}>RESPONSE SLA</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {SLA_ROWS.map(([l, v]) => (
              <li key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--fg-2)' }}>{l}</span>
                <span className="mono" style={{ color: '#86efac' }}>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
      <Reveal delay={240}>
        <div className="card" style={{ padding: 26 }}>
          <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em', marginBottom: 14 }}>DIRECT</div>
          <a href="mailto:hello@infraloom.dev" style={{ color: 'var(--fg-1)', fontSize: 16, fontFamily: 'var(--font-mono)', display: 'block', marginBottom: 6 }}>
            hello@infraloom.dev
          </a>
          <a href="mailto:security@infraloom.dev" style={{ color: 'var(--fg-3)', fontSize: 13, fontFamily: 'var(--font-mono)' }}>
            security@infraloom.dev
          </a>
        </div>
      </Reveal>
    </div>
  );
}
