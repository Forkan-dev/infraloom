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
    <footer className="block foot">
      <div className="container">
        <div className="foot-top">
          <div className="foot-lead">
            <Logo variant="dark" height={28} />
            <p className="foot-statement">
              Software engineering for companies building real-time, distributed and AI products.
            </p>
          </div>

          <div className="foot-hq">
            <span className="foot-label">Headquarters</span>
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
            <div className="foot-socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="footer-social"
                >
                  {s.icon}
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="foot-grid">
          {GROUPS.map((g, i) => (
            <div key={i} className="foot-col">
              <div className="foot-label">
                {g.title}
              </div>
              <ul>
                {g.items.map((it, j) => (
                  <li key={j}>
                    <Link href={it.href} className="foot-link">{it.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-watermark" aria-hidden="true">
          Infral<InfinityMark />m
        </div>

        <div className="foot-bar">
          <div>© 2026 Infraloom Engineering, Inc. · All systems operational</div>
          <div className="foot-bar-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">SOC 2</a>
            <span className="mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--chartreuse)' }} />
              v2026.05.08
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .foot {
          --foot-ink: var(--ice);
          --foot-ink-2: var(--text-on-dark-muted);
          --foot-ink-3: rgba(195, 209, 255, 0.6);
          --foot-rule: rgba(195, 209, 255, 0.14);
          background: #0B0F24; color: var(--foot-ink);
          padding: 80px 0 32px; margin-top: 72px; margin-bottom: var(--block-inset);
        }
        [data-theme="dark"] .foot { background: #0A1A5C; }
        .foot-top {
          display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: 24px;
          padding-bottom: 72px;
        }
        .foot-lead { grid-column: 1 / span 7; }
        .foot-statement {
          margin-top: 36px; max-width: 20ch;
          font-family: var(--font-display); font-size: clamp(26px, 2.8vw, 40px); font-weight: 500;
          line-height: 1.15; letter-spacing: -0.03em; color: #fff;
        }
        .foot-hq { grid-column: 9 / span 4; display: flex; flex-direction: column; gap: 18px; padding-top: 6px; }
        .foot-label {
          display: flex; align-items: baseline; gap: 10px;
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--foot-ink-3);
        }
        .footer-contact { display: flex; flex-direction: column; gap: 12px; }
        .footer-contact-row {
          display: inline-flex; align-items: center; gap: 12px;
          font-size: 15px; line-height: 1.4; color: var(--foot-ink-2); width: fit-content;
        }
        .footer-contact-icon {
          width: 34px; height: 34px; flex-shrink: 0; border-radius: 50%;
          background: rgba(123, 155, 255, 0.14);
          display: inline-flex; align-items: center; justify-content: center;
          color: var(--signal);
          transition: color 0.2s ease, background 0.2s ease;
        }
        .footer-contact-link { font-variant-numeric: tabular-nums; transition: color 0.3s var(--ease); }
        .footer-contact-link:hover { color: var(--foot-ink); }
        .footer-contact-link:hover .footer-contact-icon { color: #fff; background: var(--primary); }
        .foot-socials { display: flex; gap: 8px; margin-top: 6px; }
        .footer-social {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 8px 16px 8px 8px; border-radius: 999px;
          background: rgba(123, 155, 255, 0.12);
          font-size: 13px; font-weight: 500; color: var(--foot-ink);
          transition: background 0.2s ease, color 0.2s ease;
        }
        .footer-social:hover { background: var(--primary); color: #fff; }
        .foot-grid {
          display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); column-gap: 24px;
          border-top: 1px solid var(--foot-rule);
        }
        .foot-col { padding: 28px 24px 0 0; }
        .foot-col ul { list-style: none; padding: 0; margin: 22px 0 0; display: flex; flex-direction: column; gap: 12px; }
        .foot-link {
          font-size: 15px; color: var(--signal);
          background: linear-gradient(currentColor, currentColor) 0 100% / 0 1px no-repeat;
          padding-bottom: 2px;
          transition: color 0.3s var(--ease), background-size 0.45s var(--ease);
        }
        .foot-link:hover { color: #fff; background-size: 100% 1px; }
        /* one highlighted link: Company → Contact */
        .foot-col:nth-child(2) li:last-child .foot-link { color: var(--chartreuse); }
        .footer-watermark {
          margin: 72px 0 24px;
          font-family: var(--font-display); font-weight: 500;
          font-size: clamp(88px, 19.5vw, 300px);
          letter-spacing: -0.065em; line-height: 0.78;
          color: var(--foot-ink);
          user-select: none; white-space: nowrap;
        }
        .footer-watermark svg { height: 0.5em; width: auto; vertical-align: baseline; margin: 0 -0.015em; color: var(--primary); }
        .foot-bar {
          display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;
          padding-top: 22px; border-top: 1px solid var(--foot-rule);
          font-size: 12px; color: var(--foot-ink-3);
        }
        .foot-bar-links { display: flex; gap: 22px; align-items: center; }
        .foot-bar-links a { transition: color 0.3s var(--ease); }
        .foot-bar-links a:hover { color: var(--foot-ink); }
        @media (max-width: 980px) {
          .foot { padding-top: 56px; margin-top: 56px; }
          .foot-lead, .foot-hq { grid-column: 1 / -1; }
          .foot-hq { margin-top: 48px; }
          .foot-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

          .foot-col { padding-bottom: 28px; }
          .footer-watermark { margin-top: 56px; }
        }
      `}</style>
    </footer>
  );
}
