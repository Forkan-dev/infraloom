import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/shared/Reveal';
import { CHANNEL1_FEATURES } from '@/lib/data/projects';

const NEWS_FORMATS = [
  { name: 'Text Article', color: '#8b5cf6' },
  { name: 'Video News', color: '#3b82f6' },
  { name: 'Audio Story', color: '#06b6d4' },
  { name: 'Blog Post', color: '#f59e0b' },
  { name: 'Picture Gallery', color: '#ec4899' },
  { name: 'ePaper Edition', color: '#22c55e' },
  { name: 'Breaking News', color: '#f97316' },
  { name: 'Serial / Series', color: '#a78bfa' },
];

const HERO_STATS = [
  { l: 'API endpoints', v: '50+' },
  { l: 'DB tables', v: '108+' },
  { l: 'News formats', v: '5' },
  { l: 'Architecture', v: 'Modular' },
];


const USER_ROLES = [
  { role: 'Admin', desc: 'Full control: users, roles, settings, all content and system configuration.' },
  { role: 'Editor / Reporter', desc: 'Create, edit, and submit news articles for editorial review.' },
  { role: 'Moderator', desc: 'Manage comments, approve or reject user discussions.' },
  { role: 'Reader / Subscriber', desc: 'Read, comment, bookmark, share, vote, and access premium content via paid plans.' },
];

const FEATURE_ICONS: Record<number, React.ReactNode> = {
  0: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  1: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
    </svg>
  ),
  2: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  3: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  4: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  ),
  5: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  6: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
    </svg>
  ),
  7: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

export function NewsportalDetail() {
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
                Media · Publishing · Laravel
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
            <h1 className="gradient-text" style={{ marginBottom: 20, maxWidth: '18ch' }}>
              Online Newspaper
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="lede" style={{ maxWidth: '58ch', marginBottom: 48 }}>
              A production-ready, enterprise-grade news publishing platform. From reporter submission to admin approval to public reading, with a mobile app companion, multilingual support, and multiple revenue streams.
            </p>
          </Reveal>

        </div>
      </section>

      {/* Screenshots */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ marginBottom: 0 }}>Built for real newsrooms.</h2>
            </div>
          </Reveal>

          {/* Public portal */}
          <Reveal delay={80}>
            <div style={{
              borderRadius: 14, overflow: 'hidden',
              border: '1px solid var(--border)',
              background: 'var(--bg-2)',
              boxShadow: '0 12px 48px rgba(0,0,0,0.5)',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', inset: 0, zIndex: 0,
                background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.08), transparent 60%)',
              }} />
              <Image
                src="/projects/newspaper/frontpage.png"
                alt="Online Newspaper Public Portal"
                width={1400}
                height={800}
                style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 1 }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
                padding: '10px 20px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)',
              }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.1em' }}>PUBLIC PORTAL</span>
              </div>
            </div>
          </Reveal>

          {/* Reporter Dashboard */}
          <Reveal delay={120}>
            <div style={{
              marginTop: 16, borderRadius: 14, overflow: 'hidden',
              border: '1px solid var(--border)', background: 'var(--bg-2)',
              boxShadow: '0 12px 48px rgba(0,0,0,0.5)', position: 'relative',
            }}>
              <div style={{
                position: 'absolute', inset: 0, zIndex: 0,
                background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.08), transparent 60%)',
              }} />
              <Image
                src="/projects/newspaper/reporter-dashbord.png"
                alt="Online Newspaper Reporter Dashboard"
                width={1400}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 1 }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
                padding: '10px 20px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)',
              }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.1em' }}>REPORTER DASHBOARD</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Admin Dashboard */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 28, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <h2 style={{ marginBottom: 8 }}>Full control, one view.</h2>
                <p style={{ color: 'var(--fg-2)', fontSize: 15, maxWidth: '52ch', margin: 0 }}>
                  Real-time visitor analytics, news counters, category stats, reader summaries, and device breakdowns. All visible the moment you log in.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {[
                  { label: 'Visitor Tracking', color: '#8b5cf6' },
                  { label: 'News Counters', color: '#3b82f6' },
                  { label: 'Category Stats', color: '#06b6d4' },
                  { label: 'Device Analytics', color: '#f59e0b' },
                ].map((b, i) => (
                  <span key={i} style={{
                    padding: '5px 12px', borderRadius: 999, fontSize: 12,
                    fontFamily: 'var(--font-mono)',
                    background: `${b.color}12`, border: `1px solid ${b.color}30`, color: b.color,
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: b.color, boxShadow: `0 0 6px ${b.color}` }} />
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            {/* outer glow card */}
            <div style={{
              borderRadius: 18,
              padding: 3,
              background: 'linear-gradient(135deg, rgba(139,92,246,0.35) 0%, rgba(59,130,246,0.2) 50%, rgba(6,182,212,0.15) 100%)',
              boxShadow: '0 0 60px rgba(139,92,246,0.18), 0 24px 64px rgba(0,0,0,0.6)',
            }}>
              <div style={{ borderRadius: 16, overflow: 'hidden', background: '#0d0e11' }}>

                {/* browser chrome bar */}
                <div style={{
                  padding: '10px 16px',
                  background: '#16181d',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  {/* traffic lights */}
                  <div style={{ display: 'flex', gap: 6 }}>
                    {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
                      <span key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c, flexShrink: 0 }} />
                    ))}
                  </div>
                  {/* fake URL bar */}
                  <div style={{
                    flex: 1, maxWidth: 400, margin: '0 auto',
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 6, padding: '4px 12px',
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>channel1.news/admin/dashboard</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8, marginLeft: 'auto' }}>
                    <span className="mono" style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>EN ▾</span>
                  </div>
                </div>

                {/* dashboard image */}
                <Image
                  src="/projects/newspaper/admin-dashbord.png"
                  alt="Online Newspaper Admin Dashboard"
                  width={1400}
                  height={900}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                />
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Multilingual */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ marginBottom: 12 }}>One codebase. Every language.</h2>
              <p style={{ color: 'var(--fg-2)', fontSize: 16, maxWidth: '54ch' }}>
                Full LTR/RTL support across English, Bangla, Arabic, and more. Every model, category, tag, and menu is independently translatable.
              </p>
            </div>
          </Reveal>

          <div className="ch1-lang-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              {
                src: '/projects/newspaper/bangla-version.png',
                lang: 'Bangla',
                dir: 'LTR',
                flag: 'বা',
                color: '#22c55e',
                note: 'Left-to-right · Bengali script',
              },
              {
                src: '/projects/newspaper/arabic-version.png',
                lang: 'Arabic',
                dir: 'RTL',
                flag: 'ع',
                color: '#f59e0b',
                note: 'Right-to-left · Full RTL layout flip',
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{
                  borderRadius: 14, overflow: 'hidden',
                  border: `1px solid ${item.color}22`,
                  background: 'var(--bg-2)',
                  boxShadow: '0 12px 48px rgba(0,0,0,0.45)',
                  position: 'relative',
                }}>
                  {/* header bar */}
                  <div style={{
                    padding: '14px 20px',
                    borderBottom: `1px solid ${item.color}22`,
                    display: 'flex', alignItems: 'center', gap: 12,
                    background: 'var(--bg-1)',
                  }}>
                    <span style={{
                      width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      background: `${item.color}15`, border: `1px solid ${item.color}33`,
                      color: item.color, fontSize: 14, fontWeight: 700,
                    }}>{item.flag}</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{item.lang} Version</div>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', marginTop: 2 }}>{item.note}</div>
                    </div>
                    <span style={{
                      marginLeft: 'auto',
                      padding: '3px 10px', borderRadius: 999,
                      fontSize: 11, fontFamily: 'var(--font-mono)',
                      background: `${item.color}15`, border: `1px solid ${item.color}33`, color: item.color,
                    }}>{item.dir}</span>
                  </div>
                  {/* screenshot */}
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      position: 'absolute', inset: 0, zIndex: 0,
                      background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.07), transparent 60%)',
                    }} />
                    <Image
                      src={item.src}
                      alt={`Online Newspaper ${item.lang} version`}
                      width={800}
                      height={520}
                      style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 1 }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* language chip row */}
          <Reveal delay={160}>
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.1em' }}>SUPPORTED LANGUAGES</span>
              {[
                { label: 'English', dir: 'LTR', color: '#3b82f6' },
                { label: 'বাংলা (Bangla)', dir: 'LTR', color: '#22c55e' },
                { label: 'العربية (Arabic)', dir: 'RTL', color: '#f59e0b' },
              ].map((l, i) => (
                <span key={i} style={{
                  padding: '5px 14px', borderRadius: 999, fontSize: 12,
                  fontFamily: 'var(--font-mono)',
                  background: `${l.color}12`, border: `1px solid ${l.color}30`, color: l.color,
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: l.color, boxShadow: `0 0 5px ${l.color}` }} />
                  {l.label}
                  <span style={{ fontSize: 10, opacity: 0.5 }}>{l.dir}</span>
                </span>
              ))}
              <span className="chip" style={{ fontSize: 12, padding: '5px 14px', opacity: 0.5 }}>+ more</span>
            </div>
          </Reveal>

          <style>{`@media (max-width: 700px) { .ch1-lang-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Overview */}
      <section className="section-tight">
        <div className="container">
          <div className="ch1-overview" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            <Reveal>
              <div className="card" style={{ padding: 36, height: '100%' }}>
                <span className="mono" style={{ fontSize: 11, color: '#c4b5fd', letterSpacing: '0.14em' }}>● WHAT IT IS</span>
                <h3 style={{ margin: '16px 0 16px' }}>One platform. Every news workflow.</h3>
                <p style={{ color: 'var(--fg-2)', margin: '0 0 16px', fontSize: 15, lineHeight: 1.7 }}>
                  Online Newspaper is a complete news publishing ecosystem. Reporters write, editors review, admins approve, and readers engage. All on one hosted platform with real-time publishing, SEO optimization, and monetization built in.
                </p>
                <p style={{ color: 'var(--fg-2)', margin: 0, fontSize: 15, lineHeight: 1.7 }}>
                  The platform supports digital newspapers (ePaper), area-wise news discovery, multilingual audiences, and a full mobile app companion through 50+ REST API endpoints.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card" style={{ padding: 36, height: '100%' }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--success)', letterSpacing: '0.14em' }}>● USER ROLES</span>
                <h3 style={{ margin: '16px 0 20px' }}>Right access for every stakeholder.</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {USER_ROLES.map((item, i) => (
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
          <style>{`@media (max-width: 880px) { .ch1-overview { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Features */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 36 }}>
              <h2 style={{ marginBottom: 12 }}>Everything a newsroom needs, nothing it doesn&apos;t.</h2>
              <p style={{ color: 'var(--fg-2)', fontSize: 16, maxWidth: '52ch' }}>
                Eight focused modules covering every part of the news publishing lifecycle.
              </p>
            </div>
          </Reveal>
          <div className="ch1-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {CHANNEL1_FEATURES.map((f, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="card has-glow" style={{ padding: 28 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                    <span style={{
                      width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)',
                      color: '#c4b5fd',
                    }}>
                      {FEATURE_ICONS[i]}
                    </span>
                    <h4 style={{ margin: 0, fontSize: 15, fontWeight: 500, color: '#fff' }}>{f.title}</h4>
                  </div>
                  <p style={{ margin: 0, fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.65 }}>{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`@media (max-width: 880px) { .ch1-features { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* News Formats */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="card" style={{ padding: 40, overflow: 'hidden', position: 'relative' }}>
              <div className="bg-dots" style={{ opacity: 0.3 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ marginBottom: 12 }}>8 content types. One unified editorial flow.</h3>
                <p style={{ color: 'var(--fg-2)', fontSize: 15, maxWidth: '52ch', marginBottom: 32 }}>
                  Every content type, from breaking text to full ePaper editions, goes through the same reporter to editor to admin approval pipeline.
                </p>
                <div className="ch1-formats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
                  {NEWS_FORMATS.map((m, i) => (
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
          <style>{`@media (max-width: 700px) { .ch1-formats { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
        </div>
      </section>


    </div>
  );
}
