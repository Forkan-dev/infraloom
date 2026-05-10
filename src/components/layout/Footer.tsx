import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';

const GROUPS = [
  {
    title: 'Services',
    items: [
      { label: 'Custom Software', href: '/services' },
      { label: 'SaaS Development', href: '/services' },
      { label: 'Cloud Architecture', href: '/services' },
      { label: 'AI Integration', href: '/services' },
      { label: 'DevOps & CI/CD', href: '/services' },
      { label: 'Real-time Streaming', href: '/services' },
    ],
  },
  {
    title: 'Technology',
    items: [
      { label: 'Backend stack', href: '/technologies' },
      { label: 'Frontend stack', href: '/technologies' },
      { label: 'Infrastructure', href: '/technologies' },
      { label: 'Observability', href: '/technologies' },
      { label: 'Databases', href: '/technologies' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Process', href: '/process' },
      { label: 'Industries', href: '/industries' },
      { label: 'Case Studies', href: '/portfolio' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Engineering blog', href: '/about' },
      { label: 'Architecture library', href: '/portfolio' },
      { label: 'Status & SLAs', href: '/contact' },
      { label: 'Security', href: '/about' },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ position: 'relative', borderTop: '1px solid var(--border)', marginTop: 80 }}>
      <div className="bg-grid" style={{ opacity: 0.5 }} />
      <div className="container" style={{ position: 'relative', padding: '80px 32px 40px' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1.4fr 3fr', gap: 60, marginBottom: 80 }}
          className="footer-top"
        >
          <div>
            <Logo />
            <p style={{ marginTop: 18, color: 'var(--fg-3)', fontSize: 14, maxWidth: 320, lineHeight: 1.55 }}>
              Production-grade software engineering for enterprises building real-time, distributed and AI-native systems.
            </p>
            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Headquarters
              </span>
              <span style={{ fontSize: 14, color: 'var(--fg-2)' }}>Brooklyn, NY · Remote-first</span>
            </div>
            <div style={{ marginTop: 18, display: 'flex', gap: 8 }}>
              {['GH', 'X', 'LI', 'DR'].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: 34, height: 34, borderRadius: 8,
                    border: '1px solid var(--border)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, color: 'var(--fg-3)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {GROUPS.map((g, i) => (
              <div key={i}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>
                  {g.title}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {g.items.map((it, j) => (
                    <li key={j}>
                      <Link href={it.href} style={{ fontSize: 14, color: 'var(--fg-2)' }}>
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            fontSize: 'clamp(96px, 18vw, 260px)',
            fontWeight: 500,
            letterSpacing: '-0.06em',
            lineHeight: 0.85,
            background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            textAlign: 'left',
            marginBottom: 40,
            userSelect: 'none',
          }}
        >
          Infraloom
        </div>

        <div
          style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            paddingTop: 24, borderTop: '1px solid var(--border)',
            fontSize: 12, color: 'var(--fg-3)', flexWrap: 'wrap', gap: 12,
          }}
        >
          <div>© 2026 Infraloom Engineering, Inc. · All systems operational</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="#" style={{ color: 'var(--fg-3)' }}>Privacy</a>
            <a href="#" style={{ color: 'var(--fg-3)' }}>Terms</a>
            <a href="#" style={{ color: 'var(--fg-3)' }}>SOC 2</a>
            <span className="mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 6px var(--success)' }} />
              v2026.05.08
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .footer-top { grid-template-columns: 1fr !important; gap: 32px !important; }
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </footer>
  );
}
