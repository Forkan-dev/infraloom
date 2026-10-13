'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/shared/Logo';
import { ArrowRight } from '@/components/ui/ArrowRight';
import { NAV_LINKS as LINKS } from '@/lib/data/nav';


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link href="/" className="nav-logo" aria-label="Infraloom home">
          <Logo priority height={26} />
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
        </nav>

        <div className="nav-actions">
          <Link href="/contact" className="btn btn-primary nav-cta-primary">
            Book a call <ArrowRight />
          </Link>
          <button className="nav-burger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" aria-hidden="true">
              <path d="M0 1h22M8 11h14" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <style>{`
        .nav {
          position: fixed; top: var(--nav-top); left: var(--block-inset); right: var(--block-inset); z-index: 100;
        }
        .nav .nav-inner {
          display: flex; align-items: center; justify-content: space-between; gap: 24px; height: 64px;
          max-width: var(--block-max); padding: 0 10px 0 24px;
          background: var(--surface); border-radius: var(--radius-pill);
          transition: background 0.3s var(--ease);
        }
        .nav-logo { display: inline-flex; align-items: center; }
        .nav-links { display: flex; align-items: center; gap: 4px; }
        .nav-link {
          display: inline-flex; align-items: center;
          font-size: 14px; font-weight: 500; color: var(--text-muted);
          padding: 8px 16px; border-radius: var(--radius-pill);
          transition: color 0.2s ease, background 0.2s ease;
        }
        .nav-link:hover { color: var(--text); }
        .nav-link.active { background: var(--ice); color: var(--primary); }
        [data-theme="dark"] .nav-link.active { background: var(--paper-3); color: var(--signal); }
        .nav-actions { display: flex; align-items: center; gap: 12px; }
        .nav-cta-primary.btn { padding: 11px 18px; gap: 10px; background: var(--text); color: var(--chartreuse); }
        .nav-cta-primary.btn:hover { background: var(--ultramarine); }
        [data-theme="dark"] .nav-cta-primary.btn { background: var(--chartreuse); color: var(--ultramarine); }
        .nav-burger {
          display: none; width: 44px; height: 44px; align-items: center; justify-content: center;
          border: 0; border-radius: 50%; background: var(--ice); color: var(--primary); cursor: pointer; padding: 0;
        }
        [data-theme="dark"] .nav-burger { background: var(--paper-3); color: var(--signal); }
        @media (max-width: 1020px) {
          .nav-links, .nav-cta-primary { display: none !important; }
          .nav-burger { display: inline-flex; }
          .nav-actions { gap: 4px; }
          .nav .nav-inner { padding: 0 10px 0 20px; height: 60px; }
        }
      `}</style>
    </header>
  );
}

function isActive(pathname: string, href: string) {
  return pathname === href || (href !== '/' && pathname.startsWith(href));
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  return (
    <Link href={href} className={`nav-link ${isActive(pathname, href) ? 'active' : ''}`}>
      {label}
    </Link>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Products' },
    { href: '/industries', label: 'Industries' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className={`mnav ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="container mnav-top">
        <Logo height={26} />
        <button onClick={onClose} aria-label="Close menu" className="nav-burger" style={{ display: 'inline-flex' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
      </div>
      <nav className="container mnav-list" aria-label="Mobile">
        {NAV_LINKS.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={onClose}
            className={`mnav-link ${isActive(pathname, l.href) ? 'active' : ''}`}
            style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}
            tabIndex={open ? 0 : -1}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/contact" onClick={onClose} className="btn btn-primary mnav-cta" tabIndex={open ? 0 : -1}>
          Book a discovery call <ArrowRight />
        </Link>
      </nav>

      <style>{`
        .mnav {
          position: fixed; inset: 0; z-index: 200; background: var(--paper);
          display: flex; flex-direction: column;
          clip-path: inset(0 0 100% 0);
          transition: clip-path 0.6s var(--ease);
          pointer-events: none; overflow-y: auto;
        }
        .mnav.is-open { clip-path: inset(0 0 0 0); pointer-events: auto; }
        .mnav-top {
          display: flex; justify-content: space-between; align-items: center; height: 60px; flex-shrink: 0;
          margin: var(--block-inset); padding: 0 10px 0 20px !important;
          background: var(--surface); border-radius: var(--radius-pill);
          width: auto;
        }
        .mnav-list { display: flex; flex-direction: column; gap: 6px; padding-top: 12px; padding-bottom: 40px; }
        .mnav-link {
          display: flex; align-items: baseline; gap: 18px;
          font-family: var(--font-display); font-size: clamp(30px, 8vw, 44px); font-weight: 600;
          letter-spacing: -0.03em; line-height: 1.15; color: var(--ink);
          padding: 14px 22px; background: var(--surface); border-radius: var(--radius-card);
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.5s var(--ease), transform 0.5s var(--ease), color 0.2s ease, background 0.2s ease;
        }
        .mnav.is-open .mnav-link { opacity: 1; transform: none; }
        .mnav-link.active { background: var(--primary); color: #fff; }
        .mnav-cta { margin-top: 20px; align-self: stretch; }
      `}</style>
    </div>
  );
}
