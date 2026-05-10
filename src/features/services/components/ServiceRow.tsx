import { Tags } from '@/components/ui/Tags';
import { ServiceRowVisual } from './ServiceRowVisual';
import type { Service } from '@/types';

interface ServiceRowProps extends Service {
  reverse?: boolean;
}

export function ServiceRow({ n, title, body, deliverables, stack, visual, reverse }: ServiceRowProps) {
  return (
    <article className="card has-glow service-row" style={{
      display: 'grid',
      gridTemplateColumns: reverse ? '1fr 1.2fr' : '1.2fr 1fr',
      minHeight: 340,
      direction: reverse ? 'rtl' : 'ltr',
    }}>
      <div style={{ direction: 'ltr', padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <span className="mono" style={{
              fontSize: 12, padding: '4px 10px', borderRadius: 6,
              background: 'linear-gradient(135deg, rgba(59,130,246,0.18), rgba(139,92,246,0.18))',
              border: '1px solid rgba(139,92,246,0.3)', color: '#c4b5fd',
            }}>{n}</span>
            <h3 style={{ fontSize: 24, margin: 0 }}>{title}</h3>
          </div>
          <p style={{ color: 'var(--fg-3)', margin: 0, fontSize: 15, lineHeight: 1.6, maxWidth: '55ch' }}>{body}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em', marginBottom: 10 }}>DELIVERABLES</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {deliverables.map((d, j) => (
                <li key={j} style={{ fontSize: 13, color: 'var(--fg-2)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em', marginBottom: 10 }}>TECH</div>
            <Tags items={stack} />
          </div>
        </div>
      </div>

      <div style={{
        direction: 'ltr',
        position: 'relative',
        borderLeft: reverse ? 'none' : '1px solid var(--border)',
        borderRight: reverse ? '1px solid var(--border)' : 'none',
        background: 'linear-gradient(135deg, rgba(15,16,19,0.6), rgba(20,21,24,0.6))',
        overflow: 'hidden',
      }}>
        <ServiceRowVisual kind={visual as Parameters<typeof ServiceRowVisual>[0]['kind']} />
      </div>

      <style>{`
        @media (max-width: 880px) {
          .service-row { grid-template-columns: 1fr !important; direction: ltr !important; }
          .service-row > div:last-child { border-left: none !important; border-right: none !important; border-top: 1px solid var(--border); min-height: 240px; }
        }
      `}</style>
    </article>
  );
}
