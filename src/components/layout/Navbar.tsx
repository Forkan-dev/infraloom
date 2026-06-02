'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/shared/Logo';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { ArrowRight } from '@/components/ui/ArrowRight';

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

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '16px 0',
        transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s, box-shadow 0.3s',
        background: scrolled ? 'var(--navbar-bg-scrolled)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--navbar-border-scrolled, var(--border))' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--navbar-shadow-scrolled)' : 'none',
        backdropFilter: scrolled ? 'saturate(160%) blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(160%) blur(16px)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Logo />
        </Link>

        <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <NavLink href="/" label="Home" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/process" label="Process" />
          <NavLink href="/projects" label="Projects" />
          {/* <NavLink href="/industries" label="Industries" /> */}
          <NavLink href="/about" label="About" />
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <ThemeToggle />
          <Link href="/contact" className="btn btn-secondary nav-cta-secondary">Contact</Link>
          <Link href="/contact" className="btn btn-primary nav-cta-primary">
            Book a call <ArrowRight />
          </Link>
          <button
            className="nav-burger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            style={{
              display: 'none', width: 36, height: 36, alignItems: 'center', justifyContent: 'center',
              border: '1px solid var(--border)', borderRadius: 8, color: 'var(--fg)',
              background: 'transparent', cursor: 'pointer',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <style>{`
        .nav-link {
          position: relative; display: inline-flex; align-items: center;
          padding: 8px 14px; font-size: 14px; font-weight: 500;
          color: var(--fg-2); border-radius: 8px;
          transition: color 0.2s, background 0.2s;
        }
        .nav-link:hover { color: var(--fg-1); background: rgba(255,255,255,0.04); }
        .nav-link.active { color: var(--fg-1); }
        .nav-link.active::after {
          content: ""; position: absolute; left: 14px; right: 14px; bottom: 2px;
          height: 1.5px; background: linear-gradient(90deg, var(--blue), var(--violet)); border-radius: 2px;
        }
        [data-theme="light"] .nav-link:hover { background: rgba(99,102,241,0.07); color: #1e1b4b; }
        [data-theme="light"] .nav-link { color: #4b5563; }
        [data-theme="light"] .nav-link.active { color: #3730a3; }
        [data-theme="light"] .nav-link.active::after {
          background: linear-gradient(90deg, #2563eb, #7c3aed);
        }
        @media (max-width: 980px) {
          .nav-links { display: none !important; }
          .nav-cta-secondary { display: none !important; }
          .nav-burger { display: inline-flex !important; }
          .nav-cta-primary { display: none !important; }
        }
      `}</style>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href || (href !== '/' && pathname.startsWith(href));
  return (
    <Link href={href} className={`nav-link ${active ? 'active' : ''}`}>
      {label}
    </Link>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/process', label: 'Process' },
    { href: '/projects', label: 'Projects' },
    { href: '/industries', label: 'Industries' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        pointerEvents: open ? 'auto' : 'none',
        opacity: open ? 1 : 0,
        transition: 'opacity 0.3s',
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, width: 'min(360px, 90vw)',
          background: 'var(--bg-1)', borderLeft: '1px solid var(--border)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)',
          padding: '20px 20px 40px',
          display: 'flex', flexDirection: 'column', gap: 8,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <Logo />
          <button onClick={onClose} aria-label="Close" style={{ width: 32, height: 32, color: 'var(--fg-2)', background: 'transparent', border: 'none', cursor: 'pointer' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" /></svg>
          </button>
        </div>
        {NAV_LINKS.map((l, i) => (
          <Link key={i} href={l.href} onClick={onClose} style={{ padding: '14px 12px', borderRadius: 10, fontSize: 18, fontWeight: 500, borderBottom: '1px solid var(--border)' }}>
            {l.label}
          </Link>
        ))}
        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Link href="/contact" onClick={onClose} className="btn btn-primary" style={{ justifyContent: 'center' }}>
            Book a discovery call
          </Link>
        </div>
      </div>
    </div>
  );
}
