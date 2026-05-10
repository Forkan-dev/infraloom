'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/shared/Logo';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { ArrowRight } from '@/components/ui/ArrowRight';

const SERVICES_ITEMS = [
  { title: 'Custom Software', body: 'End-to-end product engineering', href: '/services' },
  { title: 'Cloud Architecture', body: 'AWS · GCP · Kubernetes', href: '/services' },
  { title: 'Real-time Streaming', body: 'Event-driven, sub-100ms', href: '/services' },
  { title: 'AI Integration', body: 'RAG, agents, local LLMs', href: '/services' },
  { title: 'DevOps & CI/CD', body: 'Observability and SLOs', href: '/services' },
  { title: 'System Architecture', body: 'Microservices and design review', href: '/services' },
];

const TECH_ITEMS = [
  { title: 'Backend', body: 'Go, Node, Laravel, NestJS', href: '/technologies' },
  { title: 'Frontend', body: 'React, Next.js, Vue', href: '/technologies' },
  { title: 'Infrastructure', body: 'Kubernetes, Kong, RabbitMQ', href: '/technologies' },
  { title: 'Observability', body: 'Fluent Bit, Grafana, Prometheus', href: '/technologies' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpen(null);
  }, [pathname]);

  const handleEnter = (k: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(k);
  };
  const handleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  };

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '16px 0',
        transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        background: scrolled ? 'rgba(10,10,11,0.72)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'saturate(140%) blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(140%) blur(14px)' : 'none',
      }}
      onMouseLeave={handleLeave}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Logo />
        </Link>

        <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <NavLink href="/" label="Home" />
          <NavTrigger label="Services" k="services" open={open} onEnter={handleEnter} />
          <NavTrigger label="Technologies" k="tech" open={open} onEnter={handleEnter} />
          <NavLink href="/process" label="Process" />
          <NavLink href="/portfolio" label="Case Studies" />
          <NavLink href="/industries" label="Industries" />
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

      <MegaMenu open={open === 'services'} onMouseEnter={() => handleEnter('services')} onMouseLeave={handleLeave}>
        <MegaCol heading="Engineering services" items={SERVICES_ITEMS.slice(0, 3)} />
        <MegaCol heading="Platform & operations" items={SERVICES_ITEMS.slice(3)} />
        <MegaPromo
          title="Build with senior engineers"
          body="Fractional CTOs, principal architects and full delivery teams."
          cta="See all services"
          href="/services"
        />
      </MegaMenu>

      <MegaMenu open={open === 'tech'} onMouseEnter={() => handleEnter('tech')} onMouseLeave={handleLeave}>
        <MegaCol heading="Stack" items={TECH_ITEMS} />
        <MegaCol heading="Specialties" items={[
          { title: 'Real-time streaming', body: 'WebSocket, RTMP, WebRTC, RabbitMQ', href: '/portfolio' },
          { title: 'Data & databases', body: 'Postgres, Redis, MongoDB', href: '/technologies' },
        ]} />
        <MegaPromo
          title="Pixel streaming case study"
          body="Multi-instance Unreal Engine streaming with Kong + RabbitMQ."
          cta="Read the architecture"
          href="/portfolio/pixel-streaming"
        />
      </MegaMenu>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <style>{`
        .nav-link {
          position: relative; display: inline-flex; align-items: center;
          padding: 8px 14px; font-size: 14px; font-weight: 500;
          color: var(--fg-2); border-radius: 8px;
          transition: color 0.2s, background 0.2s; cursor: pointer;
          background: transparent; border: none; font-family: var(--font-sans);
        }
        .nav-link:hover { color: var(--fg-1); background: rgba(255,255,255,0.04); }
        .nav-link.active { color: var(--fg-1); }
        .nav-link.active::after {
          content: ""; position: absolute; left: 14px; right: 14px; bottom: 2px;
          height: 1.5px; background: linear-gradient(90deg, var(--blue), var(--violet)); border-radius: 2px;
        }
        .nav-trigger-open { color: var(--fg-1) !important; background: rgba(255,255,255,0.04) !important; }
        .mega-item:hover { background: rgba(255,255,255,0.04); }
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

function NavTrigger({ label, k, open, onEnter }: { label: string; k: string; open: string | null; onEnter: (k: string) => void }) {
  const isOpen = open === k;
  return (
    <button
      className={`nav-link ${isOpen ? 'nav-trigger-open' : ''}`}
      onMouseEnter={() => onEnter(k)}
      onFocus={() => onEnter(k)}
    >
      {label}
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ marginLeft: 4, transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none' }}>
        <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function MegaMenu({ open, children, onMouseEnter, onMouseLeave }: {
  open: boolean; children: React.ReactNode;
  onMouseEnter: () => void; onMouseLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: 'absolute', top: '100%', left: 0, right: 0,
        display: 'flex', justifyContent: 'center',
        pointerEvents: open ? 'auto' : 'none',
        opacity: open ? 1 : 0,
        transform: open ? 'translateY(0)' : 'translateY(-6px)',
        transition: 'opacity 0.2s, transform 0.2s',
        padding: '12px 0 24px',
      }}
    >
      <div style={{
        width: 'min(960px, calc(100vw - 64px))',
        background: 'rgba(15,16,19,0.92)',
        border: '1px solid var(--border)',
        borderRadius: 18,
        backdropFilter: 'saturate(140%) blur(20px)',
        WebkitBackdropFilter: 'saturate(140%) blur(20px)',
        boxShadow: '0 30px 60px -20px rgba(0,0,0,0.7)',
        padding: 20,
        display: 'grid',
        gridTemplateColumns: '1.1fr 1.1fr 1fr',
        gap: 14,
      }}>
        {children}
      </div>
    </div>
  );
}

function MegaCol({ heading, items }: { heading: string; items: { title: string; body: string; href: string }[] }) {
  return (
    <div style={{ padding: 8 }}>
      <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12, paddingLeft: 12 }}>
        {heading}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map((it, i) => (
          <Link key={i} href={it.href} className="mega-item" style={{ padding: '10px 12px', borderRadius: 10, display: 'flex', flexDirection: 'column', gap: 2, transition: 'background 0.2s' }}>
            <span style={{ fontSize: 14, color: 'var(--fg-1)', fontWeight: 500 }}>{it.title}</span>
            <span style={{ fontSize: 12, color: 'var(--fg-3)' }}>{it.body}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function MegaPromo({ title, body, cta, href }: { title: string; body: string; cta: string; href: string }) {
  return (
    <Link href={href} style={{ padding: 18, borderRadius: 14, background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))', border: '1px solid rgba(139,92,246,0.25)', display: 'flex', flexDirection: 'column', gap: 8, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top right, rgba(139,92,246,0.25), transparent 60%)', pointerEvents: 'none' }} />
      <span className="mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#c4b5fd', position: 'relative' }}>Featured</span>
      <h4 style={{ position: 'relative', marginTop: 4 }}>{title}</h4>
      <p style={{ fontSize: 13, color: 'var(--fg-2)', margin: 0, position: 'relative' }}>{body}</p>
      <span style={{ position: 'relative', marginTop: 6, fontSize: 13, color: '#93c5fd', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        {cta} <ArrowRight />
      </span>
    </Link>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/technologies', label: 'Technologies' },
    { href: '/process', label: 'Process' },
    { href: '/portfolio', label: 'Case Studies' },
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
