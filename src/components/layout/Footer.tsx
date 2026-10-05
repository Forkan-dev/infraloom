import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { CONTACT } from '@/lib/data/contact';
import { PinIcon, PhoneIcon } from '@/components/shared/ContactIcons';

const GROUPS = [
  {
    title: 'Services',
    items: [
      { label: 'Web Applications', href: '/services' },
      { label: 'Game Streaming', href: '/services' },
      { label: 'SaaS Platforms', href: '/services' },
      { label: 'AI & Automation', href: '/services' },
      { label: 'Cloud Infrastructure', href: '/services' },
      { label: 'DevOps & CI/CD', href: '/services' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Process', href: '/process' },
      // { label: 'Industries', href: '/industries' },
      { label: 'Case Studies', href: '/portfolio' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    items: [
      // { label: 'Engineering blog', href: '/about' },
      { label: 'Architecture library', href: '/portfolio' },
      { label: 'Status & SLAs', href: '/contact' },
      { label: 'Security', href: '/about' },
    ],
  },
];

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61594481653663',
    color: '#0866FF',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="11.5" fill="#fff" />
        <path
          fill="#0866FF"
          d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
        />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@infraloomtech',
    color: '#FF0000',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#FF0000"
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
        />
        <path fill="#fff" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

function InfinityMark() {
  return (
    <svg viewBox="0 0 100 50" fill="none" focusable="false">
      <path
        d="M50 25C42 12 33 4 25 4 13.4 4 4 13.4 4 25s9.4 21 21 21c8 0 17-8 25-21 8-13 17-21 25-21 11.6 0 21 9.4 21 21s-9.4 21-21 21c-8 0-17-8-25-21Z"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
              Software engineering for companies building real-time, distributed and AI products.
            </p>
            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Headquarters
              </span>
              <div className="footer-contact">
                <span className="footer-contact-row">
                  <span className="footer-contact-icon"><PinIcon /></span>
                  {CONTACT.address}
                </span>
                {CONTACT.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="footer-contact-row footer-contact-link">
                    <span className="footer-contact-icon"><PhoneIcon /></span>
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 22, display: 'flex', gap: 10 }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="footer-social"
                  style={{ '--brand': s.color } as React.CSSProperties}
                >
                  {s.icon}
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

        <div className="footer-watermark" aria-hidden="true">
          Infral<InfinityMark />m
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
        .footer-social {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: 1px solid var(--border);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, border-color 0.2s, background 0.2s;
        }
        .footer-social:hover {
          transform: translateY(-2px);
          border-color: color-mix(in srgb, var(--brand) 55%, transparent);
          background: color-mix(in srgb, var(--brand) 10%, transparent);
        }
        .footer-contact { display: flex; flex-direction: column; gap: 10px; margin-top: 4px; }
        .footer-contact-row {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          line-height: 1.4;
          color: var(--fg-2);
          width: fit-content;
        }
        .footer-contact-icon {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          border-radius: 8px;
          border: 1px solid var(--border);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--fg-3);
          transition: color 0.2s, border-color 0.2s;
        }
        .footer-contact-link { font-variant-numeric: tabular-nums; transition: color 0.2s; }
        .footer-contact-link:hover { color: var(--fg-1); }
        .footer-contact-link:hover .footer-contact-icon { color: #c4b5fd; border-color: rgba(139,92,246,0.4); }
        .footer-watermark {
          font-size: clamp(96px, 18vw, 260px);
          font-weight: 500;
          letter-spacing: -0.06em;
          line-height: 0.85;
          margin-bottom: 40px;
          user-select: none;
          color: var(--watermark-ink);
          /* one fade for the letters and the infinity mark alike */
          -webkit-mask-image: linear-gradient(180deg, #000 0%, transparent 100%);
          mask-image: linear-gradient(180deg, #000 0%, transparent 100%);
        }
        .footer-watermark svg {
          /* sized to the x-height so it sits where the "oo" would */
          height: 0.52em;
          width: auto;
          vertical-align: baseline;
          margin: 0 -0.02em;
        }
        @media (max-width: 880px) {
          .footer-top { grid-template-columns: 1fr !important; gap: 32px !important; }
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </footer>
  );
}
