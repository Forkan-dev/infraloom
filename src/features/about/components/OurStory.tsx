import Image from 'next/image';
import { Reveal } from '@/components/shared/Reveal';

const STATS = [
  { value: '40+', label: 'Companies served' },
  { value: '180+', label: 'Systems shipped' },
  { value: '99.98%', label: 'Avg. uptime' },
];

const LEADERS = [
  {
    name: 'Shareks Rahman',
    role: 'Founder & CEO',
    bio: 'Former infrastructure lead at a FAANG-adjacent payments company. Built his first distributed system at 19. Obsessed with systems that don\'t wake you up at 3am.',
    initials: 'SR',
    color: '#8b5cf6',
    photo: '/projects/office/ower.png',
  },
  {
    name: 'Amir Hossain',
    role: 'Co-founder & CTO',
    bio: 'Distributed systems engineer with 12 years shipping real-time platforms. Led engineering at two acquired startups. Kubernetes contributor.',
    initials: 'AH',
    color: '#3b82f6',
    photo: null,
  },
  {
    name: 'Nadia Karim',
    role: 'Head of Engineering',
    bio: 'Full-stack architect who wrote the company\'s first multi-tenant data model. Advocates for readable code and honest timelines.',
    initials: 'NK',
    color: '#06b6d4',
    photo: null,
  },
  {
    name: 'Tariq Islam',
    role: 'Lead DevOps Engineer',
    bio: 'SRE background from a top-10 global bank. Built observability stacks that reduced MTTR from hours to minutes across three client environments.',
    initials: 'TI',
    color: '#22c55e',
    photo: null,
  },
  {
    name: 'Sara Chowdhury',
    role: 'Head of Product & Design',
    bio: 'Bridges the gap between engineering and business. Designed interfaces used by 100k+ daily active users across SaaS products.',
    initials: 'SC',
    color: '#ec4899',
    photo: null,
  },
];

export function OurStory() {
  return (
    <>
      {/* ── Our Story ── */}
      <section className="section-tight" style={{ position: 'relative' }}>
        <div className="bg-glow violet" style={{ left: '-5%', top: 100, opacity: 0.18 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* Section label */}
          <Reveal>
            <div style={{ marginBottom: 48 }}>
              <h2 style={{ margin: 0, maxWidth: '20ch' }}>
                Built by engineers, for engineers.
              </h2>
            </div>
          </Reveal>

          {/* Story split */}
          <div className="story-split">
            {/* Left: text */}
            <Reveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center' }}>
                <p style={{ fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.75, margin: 0 }}>
                  Infraloom was born out of frustration. Our founders kept inheriting systems that looked fine on the
                  outside but were held together with hope and hardcoded secrets. They wanted to build something different —
                  software that could survive a 3am incident without anyone panicking.
                </p>
                <p style={{ fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.75, margin: 0 }}>
                  What started as a two-person infrastructure consultancy grew into a full-stack engineering studio.
                  Today we design, build, and operate production-grade platforms for companies that can't afford to be
                  wrong — from seed-stage startups to enterprise teams scaling globally.
                </p>
                <div className="story-stats">
                  {STATS.map((s, i) => (
                    <div key={i} className="story-stat">
                      <div className="story-stat-value">{s.value}</div>
                      <div className="story-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right: image */}
            <Reveal delay={80}>
              <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3' }}>
                <Image
                  src="/projects/office/office1.jpeg"
                  alt="Infraloom office"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.1))',
                }} />
                <div style={{
                  position: 'absolute', bottom: 20, left: 20, right: 20,
                  padding: '14px 18px', borderRadius: 10,
                  background: 'rgba(10,10,11,0.75)', backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.12em' }}>INFRALOOM HQ</div>
                  <div style={{ fontSize: 13, color: 'var(--fg)', marginTop: 2 }}>Where the systems get built</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Second image + text reversed */}
          <div className="story-split story-split-rev" style={{ marginTop: 40 }}>
            <Reveal delay={60}>
              <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3' }}>
                <Image
                  src="/projects/office/office2.jpg"
                  alt="Infraloom team at work"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(225deg, rgba(6,182,212,0.12), rgba(139,92,246,0.08))',
                }} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center' }}>
                <h3 style={{ margin: 0, fontSize: 26 }}>A culture of ownership</h3>
                <p style={{ fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.75, margin: 0 }}>
                  Everyone at Infraloom is an engineer first. We don't have account managers calling engineers to ask
                  for status updates — the people building your system are the same ones in your Slack, attending your
                  architecture reviews, and carrying the pager.
                </p>
                <p style={{ fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.75, margin: 0 }}>
                  We believe the best code comes from teams that care about the outcome, not just the deliverable.
                  That's why we only take on engagements where we can do the work justice.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <style>{`
          .story-split {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 56px;
            align-items: center;
          }
          .story-stats {
            display: flex;
            gap: 40px;
            margin-top: 20px;
            flex-wrap: wrap;
            padding-top: 24px;
            border-top: 1px solid var(--border);
          }
          .story-stat-value {
            font-size: clamp(32px, 3.4vw, 44px);
            font-weight: 600;
            font-family: var(--font-mono);
            letter-spacing: -0.04em;
            line-height: 1.1;
            background: linear-gradient(135deg, #ffffff 20%, #93c5fd 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          [data-theme="light"] .story-stat-value {
            background: linear-gradient(135deg, #1e40af 0%, #6d28d9 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .story-stat-label {
            font-size: 14px;
            font-weight: 500;
            color: var(--fg-2);
            margin-top: 6px;
            letter-spacing: 0.01em;
          }
          @media (max-width: 880px) {
            .story-split { grid-template-columns: 1fr !important; gap: 32px !important; }
            .story-split-rev > div:first-child { order: 2; }
            .story-split-rev > div:last-child { order: 1; }
            .story-stats { gap: 28px; }
          }
        `}</style>
      </section>

      {/* ── Leadership ── */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ margin: '0 0 14px' }}>The people behind the work</h2>
              <p style={{ color: 'var(--fg-2)', fontSize: 16, maxWidth: '48ch', margin: '0 auto' }}>
                A small, senior team. No layers of management between you and the engineers building your system.
              </p>
            </div>
          </Reveal>

          <div className="leaders-grid-5">
            {LEADERS.map((l, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="leader-card-v">

                  {/* Square image / avatar */}
                  <div style={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: 14, overflow: 'hidden', marginBottom: 18 }}>
                    {l.photo ? (
                      <>
                        <Image
                          src={l.photo}
                          alt={l.name}
                          fill
                          style={{ objectFit: 'cover', objectPosition: 'top center' }}
                        />
                        <div style={{
                          position: 'absolute', inset: 0,
                          background: `linear-gradient(180deg, transparent 40%, rgba(10,10,11,0.65) 100%)`,
                        }} />
                      </>
                    ) : (
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: `linear-gradient(135deg, ${l.color}15 0%, ${l.color}30 100%)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <div style={{
                          position: 'absolute', inset: 0, opacity: 0.3,
                          backgroundImage: `radial-gradient(${l.color}44 1px, transparent 1px)`,
                          backgroundSize: '20px 20px',
                        }} />
                        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                          <div style={{
                            width: 72, height: 72, borderRadius: '50%', margin: '0 auto 12px',
                            background: `linear-gradient(135deg, ${l.color}40, ${l.color}70)`,
                            border: `2px solid ${l.color}80`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 24, fontWeight: 700, color: '#fff',
                            fontFamily: 'var(--font-mono)',
                            boxShadow: `0 8px 32px ${l.color}30`,
                          }}>
                            {l.initials}
                          </div>
                        </div>
                        <div style={{
                          position: 'absolute', bottom: -30, right: -30,
                          width: 120, height: 120, borderRadius: '50%',
                          background: `radial-gradient(circle, ${l.color}30, transparent 70%)`,
                        }} />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div style={{ padding: '0 4px' }}>
                    <div className="mono" style={{
                      fontSize: 10, letterSpacing: '0.14em', marginBottom: 6,
                      color: l.color, fontWeight: 600,
                    }}>
                      {l.role.toUpperCase()}
                    </div>
                    <h4 style={{ margin: '0 0 10px', fontSize: 16, fontWeight: 600, color: 'var(--fg)' }}>
                      {l.name}
                    </h4>
                    <p style={{ margin: 0, fontSize: 13, color: 'var(--fg-3)', lineHeight: 1.65 }}>
                      {l.bio}
                    </p>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <style>{`
          .leaders-grid-5 {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 24px;
            align-items: start;
          }
          .leader-card-v {
            display: flex;
            flex-direction: column;
            cursor: default;
          }
          .leader-card-v:hover > div:first-child {
            transform: scale(1.02);
            transition: transform 0.3s ease;
          }
          .leader-card-v > div:first-child {
            transition: transform 0.3s ease;
          }
          @media (max-width: 1100px) {
            .leaders-grid-5 { grid-template-columns: repeat(3, 1fr); gap: 20px; }
          }
          @media (max-width: 700px) {
            .leaders-grid-5 { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          }
          @media (max-width: 440px) {
            .leaders-grid-5 { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>
    </>
  );
}
