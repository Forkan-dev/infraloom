import { Reveal } from '@/components/shared/Reveal';
import { GlyphMap } from '@/components/shared/Glyphs';
import { CONTACT } from '@/lib/data/contact';
import { PinIcon, PhoneIcon } from '@/components/shared/ContactIcons';

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
            <span className="icon-chip">{GlyphMap.bolt}</span>
            <div>
              <h4 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Discovery call</h4>
              <div style={{
                marginTop: 4, display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 11, fontFamily: 'var(--font-mono)', letterSpacing: '0.1em',
                color: 'var(--fg-3)',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)' }} />
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
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)' }} />
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
            .sla-val { color: var(--primary); }
            [data-theme="dark"] .sla-val { color: var(--signal); }
          `}</style>
        </div>
      </Reveal>

      {/* Direct contact */}
      <Reveal delay={240}>
        <div className="card" style={{ padding: 28 }}>
          <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', letterSpacing: '0.14em', color: 'var(--fg-3)' }}>VISIT OR CALL</span>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: 18 }}>
            <div className="dc-row">
              <span className="dc-icon"><PinIcon size={18} /></span>
              <div>
                <div className="dc-label">Office</div>
                <div className="dc-value">{CONTACT.address}</div>
              </div>
            </div>
            {CONTACT.phones.map((p, i) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="dc-row dc-link">
                <span className="dc-icon"><PhoneIcon size={18} /></span>
                <div>
                  <div className="dc-label">{i === 0 ? 'Phone' : 'Alternate'}</div>
                  <div className="dc-value dc-num">{p.label}</div>
                </div>
                <span className="dc-go" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
          <style>{`
            .dc-row {
              display: flex;
              align-items: center;
              gap: 14px;
              padding: 12px 10px;
              margin: 0 -10px;
              border-radius: 16px;
              color: inherit;
              transition: background 0.2s;
            }
            .dc-row + .dc-row { border-top: 1px solid var(--border); }
            .dc-link:hover { background: var(--ice); }
            [data-theme="dark"] .dc-link:hover { background: var(--paper-3); }
            .dc-icon {
              width: 46px;
              height: 46px;
              flex-shrink: 0;
              border-radius: 50%;
              background: var(--ultramarine);
              display: inline-flex;
              align-items: center;
              justify-content: center;
              color: var(--chartreuse);
            }
            .dc-icon svg { width: 22px; height: 22px; }
            .dc-icon svg, .dc-icon svg * { stroke-width: 2.2; }
            .dc-label { font-size: 11px; font-family: var(--font-mono); letter-spacing: 0.1em; text-transform: uppercase; color: var(--fg-3); margin-bottom: 3px; }
            .dc-value { font-size: 15px; font-weight: 500; color: var(--fg-1); line-height: 1.4; }
            .dc-num { font-variant-numeric: tabular-nums; }
            .dc-go { margin-left: auto; color: var(--fg-3); opacity: 0; transform: translateX(-4px); transition: opacity 0.2s, transform 0.2s; }
            .dc-link:hover .dc-go { opacity: 1; transform: none; color: var(--primary); }
          `}</style>
        </div>
      </Reveal>
    </div>
  );
}
