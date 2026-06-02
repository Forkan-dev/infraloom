import { Reveal } from '@/components/shared/Reveal';

const CAPABILITIES = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M8 9l3 3-3 3M13 15h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    title: 'Custom Software',
    body: 'End-to-end product engineering, from architecture to production.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M3 15a4 4 0 004 4h10a3 3 0 100-6 5 5 0 00-9.9-1A4 4 0 003 15z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Cloud Architecture',
    body: 'AWS · GCP · Kubernetes — resilient, multi-region infrastructure.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Real-time Streaming',
    body: 'WebSocket, RTMP, WebRTC — event-driven systems at sub-100ms.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l1.5 4.5H18l-3.75 2.7 1.5 4.5L12 12l-3.75 2.7 1.5-4.5L6 7.5h4.5L12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M5 19h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: 'AI Integration',
    body: 'RAG pipelines, autonomous agents, and local LLM deployments.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: 'DevOps & Observability',
    body: 'CI/CD pipelines, SLOs, Grafana, Prometheus — ship with confidence.',
  },
];

export function Hero() {
  return (
    <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 100, overflow: 'hidden' }}>
      <div className="bg-grid" />
      <div className="bg-glow violet" style={{ top: -350, right: -200 }} />
      <div className="bg-glow blue" style={{ top: -200, left: -300 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 60, alignItems: 'center' }}>
          <div>
            <Reveal delay={80}>
              <h1 className="gradient-text" style={{ marginBottom: 28 }}>
                We build scalable <span className="serif" style={{ color: '#c4b5fd' }}>software systems</span> for modern&nbsp;businesses.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lede" style={{ marginBottom: 36, maxWidth: '52ch' }}>
                A senior engineering studio designing and shipping production-grade
                platforms — distributed backends, real-time streaming, and AI-native
                products for ambitious companies.
              </p>
            </Reveal>
          </div>

          <Reveal delay={340}>
            <div style={{
              padding: '8px 0',
              background: 'linear-gradient(180deg, rgba(20,21,24,0.6), rgba(15,16,19,0.3))',
              border: '1px solid var(--border)',
              borderRadius: 22,
              backdropFilter: 'blur(10px)',
              overflow: 'hidden',
            }}>
              <div style={{ padding: '16px 20px 12px', borderBottom: '1px solid var(--border)' }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.14em' }}>CORE CAPABILITIES</span>
              </div>
              {CAPABILITIES.map((cap, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 14,
                    padding: '14px 20px',
                    borderBottom: i < CAPABILITIES.length - 1 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <div style={{
                    flexShrink: 0, width: 36, height: 36,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: 10,
                    background: 'rgba(139,92,246,0.1)',
                    border: '1px solid rgba(139,92,246,0.2)',
                    color: '#c4b5fd',
                  }}>
                    {cap.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg-1)', marginBottom: 2 }}>{cap.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--fg-3)', lineHeight: 1.5 }}>{cap.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
