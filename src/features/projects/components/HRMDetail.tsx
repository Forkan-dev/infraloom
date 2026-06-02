import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/shared/Reveal';

const CHECK_IN_METHODS = [
  { name: 'Face Recognition', color: '#8b5cf6' },
  { name: 'QR Code Scan', color: '#3b82f6' },
  { name: 'Geofencing', color: '#06b6d4' },
  { name: 'IP Restriction', color: '#f59e0b' },
  { name: 'Selfie Verification', color: '#ec4899' },
  { name: 'ZKTeco Biometric', color: '#22c55e' },
  { name: 'Offline Sync', color: '#a78bfa' },
  { name: 'Admin Manual Entry', color: '#94a3b8' },
];

const HERO_STATS = [
  { l: 'Check-in methods', v: '8' },
  { l: 'API endpoints', v: '80+' },
  { l: 'Permission types', v: '50+' },
  { l: 'Architecture', v: 'Multi-tenant' },
];

const TECH = ['Laravel', 'Vue.js', 'Firebase Firestore', 'MySQL', 'Redis', 'Stripe', 'ZKTeco API', 'REST API', 'Push Notifications'];


export function HRMDetail() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section style={{ position: 'relative', padding: '180px 0 64px', overflow: 'hidden' }}>
        <div className="bg-grid" />
        <div className="bg-glow violet" style={{ top: -350, right: -180, opacity: 0.45 }} />
        <div className="bg-glow cyan" style={{ top: -80, left: -200, opacity: 0.3 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--fg-3)', marginBottom: 28 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M7 3l-3 3 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All projects
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <span className="mono" style={{ fontSize: 11, color: '#c4b5fd', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                SaaS · Enterprise · HRM
              </span>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                padding: '3px 10px', borderRadius: 999,
                fontSize: 11, fontFamily: 'var(--font-mono)',
                background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', color: '#4ade80',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
                Live
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="gradient-text" style={{ marginBottom: 20, maxWidth: '16ch' }}>
              HRM — Human Resource Management
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="lede" style={{ maxWidth: '58ch', marginBottom: 36 }}>
              An enterprise-grade SaaS platform — multiple companies on one hosted instance, each with full data isolation, dual dashboards, and a smart attendance system supporting 8 check-in methods.
            </p>
          </Reveal>

          <Reveal delay={210}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
              <a
                href="http://103.174.51.180:5001/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: 15, padding: '12px 24px' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Try Live Demo
              </a>
              <span style={{ fontSize: 13, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)' }}>
                No sign-up required · Hosted live
              </span>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="hrm-stats" style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${HERO_STATS.length}, 1fr)`,
              gap: 1, background: 'var(--border)', borderRadius: 14, overflow: 'hidden',
              border: '1px solid var(--border)', maxWidth: 700,
            }}>
              {HERO_STATS.map((s, i) => (
                <div key={i} style={{ padding: '20px 24px', background: 'var(--bg-2)' }}>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em', marginBottom: 8 }}>{s.l.toUpperCase()}</div>
                  <div style={{ fontSize: 26, fontWeight: 500, fontFamily: 'var(--font-mono)', letterSpacing: '-0.03em' }}>{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <style>{`@media (max-width: 700px) { .hrm-stats { grid-template-columns: repeat(2, 1fr) !important; max-width: 100% !important; } }`}</style>
      </section>

      {/* Screenshots */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 24 }}>
              <span className="eyebrow" style={{ marginBottom: 12 }}>Screenshots</span>
              <h2 style={{ marginTop: 16, marginBottom: 0 }}>Built for real teams.</h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="screenshots-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {['/projects/hrm/image.png', '/projects/hrm/image1.png'].map((src, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: 14,
                    overflow: 'hidden',
                    border: '1px solid var(--border)',
                    background: 'var(--bg-2)',
                    boxShadow: '0 12px 48px rgba(0,0,0,0.5)',
                    position: 'relative',
                  }}
                >
                  <div style={{
                    position: 'absolute', inset: 0, zIndex: 0,
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.08), transparent 60%)',
                  }} />
                  <Image
                    src={src}
                    alt={`HRM screenshot ${i + 1}`}
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 1 }}
                  />
                </div>
              ))}
            </div>
          </Reveal>
          <style>{`@media (max-width: 700px) { .screenshots-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Overview */}
      <section className="section-tight">
        <div className="container">
          <div className="overview-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            <Reveal>
              <div className="card" style={{ padding: 36, height: '100%' }}>
                <span className="mono" style={{ fontSize: 11, color: '#c4b5fd', letterSpacing: '0.14em' }}>● WHAT IT IS</span>
                <h3 style={{ margin: '16px 0 16px' }}>One platform. Every HR workflow.</h3>
                <p style={{ color: 'var(--fg-2)', margin: '0 0 16px', fontSize: 15, lineHeight: 1.7 }}>
                  HRM is a fully hosted SaaS product designed for multiple companies to run on a single instance — each with complete data isolation and their own branded environment.
                </p>
                <p style={{ color: 'var(--fg-2)', margin: 0, fontSize: 15, lineHeight: 1.7 }}>
                  Branch managers handle attendance, leave approvals, payroll, and projects independently. The parent company retains full visibility across all branches through a unified company dashboard.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card" style={{ padding: 36, height: '100%' }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--success)', letterSpacing: '0.14em' }}>● PLATFORM STRUCTURE</span>
                <h3 style={{ margin: '16px 0 20px' }}>Dual-dashboard architecture.</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { role: 'Company Dashboard', desc: 'Organisation-wide overview — all branches, headcount, payroll summary, and compliance.' },
                    { role: 'Branch Dashboard', desc: 'Local manager control — attendance logs, leave approvals, payroll runs, and team projects.' },
                    { role: 'Employee Portal', desc: 'Self-service — check-in, leave requests, payslips, expense claims, and task tracking.' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <span className="mono" style={{
                        flexShrink: 0, width: 28, height: 28,
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        borderRadius: 7, background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)',
                        color: '#c4b5fd', fontSize: 11,
                      }}>{`0${i + 1}`}</span>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: '#fff', marginBottom: 4 }}>{item.role}</div>
                        <div style={{ fontSize: 13, color: 'var(--fg-3)', lineHeight: 1.55 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
          <style>{`@media (max-width: 880px) { .overview-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>


      {/* Attendance Methods */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="card" style={{ padding: 40, overflow: 'hidden', position: 'relative' }}>
              <div className="bg-dots" style={{ opacity: 0.3 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span className="eyebrow" style={{ marginBottom: 12 }}>Attendance System</span>
                <h3 style={{ marginTop: 16, marginBottom: 12 }}>8 ways to check in. One unified log.</h3>
                <p style={{ color: 'var(--fg-2)', fontSize: 15, maxWidth: '52ch', marginBottom: 32 }}>
                  Every check-in — regardless of method — captures a timestamp, GPS coordinates, and a live photo, stored with full audit history.
                </p>
                <div className="methods-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
                  {CHECK_IN_METHODS.map((m, i) => (
                    <div key={i} style={{
                      padding: '14px 16px', borderRadius: 10,
                      background: 'var(--bg-1)', border: `1px solid ${m.color}22`,
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: m.color, flexShrink: 0, boxShadow: `0 0 8px ${m.color}` }} />
                      <span style={{ fontSize: 13, color: 'var(--fg-2)', fontWeight: 500 }}>{m.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <style>{`@media (max-width: 700px) { .methods-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="card" style={{ padding: 36, textAlign: 'center' }}>
              <span className="eyebrow" style={{ marginBottom: 12 }}>Tech Stack</span>
              <h3 style={{ marginTop: 16, marginBottom: 24 }}>Built on proven, production-grade tools.</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
                {TECH.map((t, i) => (
                  <span key={i} className="chip" style={{ fontSize: 13, padding: '7px 16px' }}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
