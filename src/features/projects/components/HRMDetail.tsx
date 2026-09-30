import Link from 'next/link';
import { Reveal } from '@/components/shared/Reveal';
import { BrowserShot } from './hrm/BrowserShot';
import { PhoneFrame, phoneFrameCss } from './hrm/PhoneFrame';

const WEB_SHOTS = [
  { src: '/projects/hrm/image.png', alt: 'HRM employee list', width: 1906, height: 927, logoBox: { w: 215, h: 65 } },
  { src: '/projects/hrm/image1.png', alt: 'HRM general settings', width: 1912, height: 951, logoBox: { w: 250, h: 75 } },
];

const MODULES = [
  { t: 'Live Tracking', c: '#06b6d4', d: 'Continuous GPS logs for field staff during active shifts, synced in real time through Firestore and shown on a manager map.' },
  { t: 'Leave Management', c: '#22c55e', d: 'Unlimited leave types, multi-level approvals, carry-forward and live balances that flow straight into attendance reports.' },
  { t: 'Payroll & Finance', c: '#f59e0b', d: 'Salary structures, auto-generated payslips, advance salary, commissions, expense claims and Excel / PDF exports.' },
  { t: 'Projects & Tasks', c: '#3b82f6', d: 'Projects, tasks with subtasks and priorities, discussions, attachments, payment tracking and an activity timeline.' },
  { t: 'Employee Records', c: '#8b5cf6', d: 'Profiles, departments, designations, multi-shift schedules, document vault, appraisals and write-ups.' },
  { t: 'Workplace Tools', c: '#ec4899', d: 'Notices, support tickets, awards, events, travel requests, meetings and built-in video conferencing.' },
];

const MOBILE_SHOTS = [
  { src: '/projects/hrm/mobile/screen-1.jpg', statusBg: '#ebebeb', darkStatus: true, label: 'One-tap check-in' },
  { src: '/projects/hrm/mobile/screen-2.jpg', statusBg: '#557aed', label: 'Home dashboard' },
  { src: '/projects/hrm/mobile/screen-3.jpg', statusBg: '#5078e9', label: 'Employee profile' },
  { src: '/projects/hrm/mobile/screen-4.jpg', statusBg: '#5078e9', label: 'Onboarding' },
  { src: '/projects/hrm/mobile/screen-5.jpg', statusBg: '#5078e7', label: 'Attendance approvals' },
  { src: '/projects/hrm/mobile/screen-6.jpg', statusBg: '#ffffff', darkStatus: true, label: 'Attendance history' },
];

const MOBILE_API = [
  'Face registration & recognition',
  'Check-in / out with GPS',
  'Break start & end',
  'Live location push',
  'Leave & expense requests',
  'Push notifications (FCM)',
  'Single-device login',
  'Offline queue with sync',
];

const PLATFORM = [
  { k: 'Tenancy', v: 'Separate MySQL database per company — zero data leakage between clients.' },
  { k: 'Billing', v: 'Monthly / yearly plans on Stripe; modules switch off automatically when a plan expires.' },
  { k: 'Access', v: '50+ granular permissions, custom roles, enforced by middleware on every route and API call.' },
  { k: 'Audit', v: 'Soft deletes, activity log on every major action and per-device session tracking.' },
];

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
  { l: 'Modules', v: '23' },
  { l: 'Architecture', v: 'Multi-tenant' },
];

const TECH = ['Laravel 9', 'Vue.js', 'MySQL', 'Stancl Tenancy', 'Laravel Sanctum', 'Firebase FCM', 'Firestore', 'Stripe · Cashier', 'Twilio', 'ZKTeco', 'DomPDF', 'Excel export'];


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
                href="https://hrm-v2.infraloom.co/"
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
              {WEB_SHOTS.map((s) => (
                <BrowserShot key={s.src} {...s} />
              ))}
            </div>
          </Reveal>
          <style>{`@media (max-width: 700px) { .screenshots-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Video walkthrough */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 24 }}>
              <span className="eyebrow" style={{ marginBottom: 12 }}>Walkthrough</span>
              <h2 style={{ marginTop: 16, marginBottom: 12 }}>See HRM in action.</h2>
              <p style={{ color: 'var(--fg-2)', fontSize: 15, maxWidth: '58ch', margin: 0 }}>
                A full walkthrough of the platform — company and branch dashboards, attendance, leave, payroll and the employee portal.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{
              position: 'relative',
              aspectRatio: '16 / 9',
              borderRadius: 14,
              overflow: 'hidden',
              border: '1px solid var(--border)',
              background: 'var(--bg-2)',
              boxShadow: '0 12px 48px rgba(0,0,0,0.5)',
            }}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/o8SBqNY_JZQ?rel=0"
                title="HRM — project walkthrough"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
              />
            </div>
          </Reveal>
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

      {/* Mobile App */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="mobile-head" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 32, alignItems: 'end', marginBottom: 40 }}>
              <div>
                <span className="eyebrow" style={{ marginBottom: 12 }}>Mobile App</span>
                <h2 style={{ marginTop: 16, marginBottom: 12 }}>The whole workday, in your pocket.</h2>
                <p style={{ color: 'var(--fg-2)', fontSize: 15, maxWidth: '54ch', margin: 0 }}>
                  Android and iOS apps run on a dedicated REST API. Employees check in with one tap — by face, selfie, QR code or geofence — see their shift and breaks at a glance, and managers approve requests on the go. If the connection drops, check-ins queue on the device and sync when it comes back.
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {MOBILE_API.map((t) => (
                  <span key={t} className="chip" style={{ fontSize: 12, padding: '6px 12px' }}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="mobile-shots" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '40px 24px' }}>
            {MOBILE_SHOTS.map((s, i) => (
              <Reveal key={s.src} delay={(i % 3) * 60}>
                <figure style={{ margin: 0 }}>
                  <PhoneFrame src={s.src} alt={`HRM mobile app — ${s.label}`} statusBg={s.statusBg} darkStatus={s.darkStatus} />
                  <figcaption className="mono" style={{ marginTop: 14, fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.12em', textAlign: 'center' }}>
                    {s.label.toUpperCase()}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <style>{phoneFrameCss}</style>
          <style>{`
            @media (max-width: 880px) { .mobile-head { grid-template-columns: 1fr !important; } }
            @media (max-width: 600px) { .mobile-shots { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 28px 14px !important; } }
          `}</style>
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

      {/* Core Modules */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 24 }}>
              <span className="eyebrow" style={{ marginBottom: 12 }}>Core Modules</span>
              <h2 style={{ marginTop: 16, marginBottom: 0 }}>From check-in to payslip.</h2>
            </div>
          </Reveal>
          <div className="modules-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {MODULES.map((m, i) => (
              <Reveal key={m.t} delay={i * 50}>
                <div className="card" style={{ padding: 28, height: '100%' }}>
                  <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: 3, background: m.c, boxShadow: `0 0 10px ${m.c}` }} />
                  <h3 style={{ fontSize: 18, margin: '14px 0 10px' }}>{m.t}</h3>
                  <p style={{ color: 'var(--fg-3)', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (max-width: 960px) { .modules-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 600px) { .modules-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* SaaS & Security */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="card platform-grid" style={{ padding: 40, display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 40 }}>
              <div>
                <span className="eyebrow" style={{ marginBottom: 12 }}>SaaS &amp; Security</span>
                <h3 style={{ marginTop: 16, marginBottom: 12 }}>Sell it to many companies. Keep every one isolated.</h3>
                <p style={{ color: 'var(--fg-2)', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                  Most SMEs run HR on spreadsheets and chat messages. HRM replaces that with one hosted product: companies sign up, pick a plan and get their own environment — while the platform owner manages billing and payouts from a single admin.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border)', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>
                {PLATFORM.map((p) => (
                  <div key={p.k} style={{ display: 'flex', gap: 16, padding: '16px 20px', background: 'var(--bg-2)' }}>
                    <span className="mono" style={{ flexShrink: 0, width: 72, fontSize: 11, color: '#c4b5fd', letterSpacing: '0.12em', paddingTop: 2 }}>{p.k.toUpperCase()}</span>
                    <span style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6 }}>{p.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <style>{`@media (max-width: 880px) { .platform-grid { grid-template-columns: 1fr !important; padding: 28px !important; } }`}</style>
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
