import { Reveal } from '@/components/shared/Reveal';
import { ServiceIcon } from '@/components/shared/ServiceIcon';
import { GlyphMap } from '@/components/shared/Glyphs';
import { LoomRing } from '@/components/shared/LoomRing';

const CAPABILITIES = [
  {
    icon: <ServiceIcon name="web" />,
    title: 'Custom Software',
    body: 'Product engineering from the first sketch to launch day and beyond.',
  },
  {
    icon: <ServiceIcon name="cloud" />,
    title: 'Cloud Architecture',
    body: 'Infrastructure on AWS, GCP and Kubernetes that stays up across regions.',
  },
  {
    icon: GlyphMap.pulse,
    title: 'Real-time Streaming',
    body: 'WebSocket, RTMP and WebRTC systems that answer in under 100ms.',
  },
  {
    icon: <ServiceIcon name="ai" />,
    title: 'AI Integration',
    body: 'RAG pipelines, autonomous agents, and local LLM deployments.',
  },
  {
    icon: <ServiceIcon name="devops" />,
    title: 'DevOps & Observability',
    body: 'CI/CD, SLOs, Grafana and Prometheus, so every release is a quiet one.',
  },
];

export function Hero() {
  return (
    <section className="hero">
      <div className="block block-dark on-dark hero-block">
        <LoomRing className="hero-ring" />

        <div className="container hero-inner">
          <Reveal>
            <h1 className="hero-title">
              <span className="line-mask"><span>We build the</span></span>
              <span className="line-mask"><span className="hero-accent">software systems</span></span>
              <span className="line-mask"><span>businesses run&nbsp;on.</span></span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <div className="hero-foot">
              <span className="eyebrow hero-label">Core capabilities</span>
              <p className="lede hero-lede">
                A small senior team behind backends, real-time products and AI tools
                that work on day one and still make sense in year three.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal stagger className="inset caps">
        {CAPABILITIES.map((cap) => (
          <div key={cap.title} className="cap">
            <span className="icon-chip cap-icon">{cap.icon}</span>
            <div className="cap-title">{cap.title}</div>
            <div className="cap-body">{cap.body}</div>
          </div>
        ))}
      </Reveal>

      <style>{`
        .hero {
          position: relative;
          /* the dark block and the cards below share one width: their edges sit halfway between the
             container edge and the screen edge, so wider than the container and never full width */
          --hero-side: max(var(--block-inset), calc((100% - var(--container)) / 4));
        }
        .hero .hero-block, .hero .caps { margin-left: var(--hero-side); margin-right: var(--hero-side); }
        .hero .hero-block {
          border-radius: 0 0 var(--radius-block) var(--radius-block);
          /* start at the very top of the page, behind the floating nav */
          margin-top: calc(-1 * var(--nav-offset));
          padding: calc(var(--nav-offset) + 80px) 0 72px;
        }
        .hero-inner { position: relative; z-index: 1; }
        .hero-ring { width: 480px; height: 480px; right: -150px; top: 50%; transform: translateY(-50%); }
        .hero-title {
          font-size: clamp(40px, 6.4vw, 96px);
          font-weight: 600;
          letter-spacing: -0.04em;
          line-height: 1.1;
          max-width: 13ch;
          color: #fff;
        }
        .line-mask > span.hero-accent {
          display: inline-block;
          background: var(--chartreuse); color: var(--ultramarine);
          border-radius: 12px; padding: 0 0.14em; margin-left: -0.04em;
        }
        .hero-foot {
          display: flex; flex-direction: column; align-items: flex-start; gap: 20px;
          margin-top: 36px; max-width: 46ch;
        }
        .hero-label { order: 0; }
        .hero-lede { font-size: clamp(17px, 1.4vw, 20px); line-height: 1.5; color: var(--text-on-dark-muted); max-width: 44ch; }
        .caps {
          display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 12px;
          margin-top: 20px;
        }
        .cap {
          padding: 22px 22px 26px; display: flex; flex-direction: column;
          background: var(--surface); border-radius: var(--radius-card);
          transition: background 0.2s ease, color 0.2s ease;
        }
        .cap:nth-child(3) { background: var(--lilac); }
        .cap-icon { margin-bottom: 36px; }
        .cap-title { font-family: var(--font-display); font-size: 20px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.15; color: var(--text); margin-bottom: 8px; transition: color 0.2s ease; }
        .cap-body { font-size: 14px; line-height: 1.5; color: var(--text-muted); transition: color 0.2s ease; }
        .cap:nth-child(3) .cap-title, .cap:nth-child(3) .cap-body { color: var(--lilac-text); }
        .cap:nth-child(3) .cap-icon { background: #fff; color: var(--lilac-text); }
        .cap:hover, .cap:nth-child(3):hover { background: var(--primary); }
        .cap:hover .cap-title { color: #fff; }
        .cap:hover .cap-body { color: var(--ice); }
        .cap:hover .cap-icon { background: var(--chartreuse); color: var(--ultramarine); }
        [data-theme="dark"] .cap:nth-child(3) { background: var(--surface); }
        [data-theme="dark"] .cap:nth-child(3) .cap-title { color: var(--text); }
        [data-theme="dark"] .cap:nth-child(3) .cap-body { color: var(--text-muted); }
        [data-theme="dark"] .cap:nth-child(3) .cap-icon { background: var(--paper-3); color: var(--signal); }
        @media (max-width: 1100px) {
          .caps { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .hero-ring { width: 380px; height: 380px; right: -140px; }
        }
        @media (max-width: 760px) {
          .hero .hero-block { padding: calc(var(--nav-offset) + 40px) 0 44px; }
          .hero-ring { width: 240px; height: 240px; right: -96px; top: calc(var(--nav-offset) - 20px); transform: none; opacity: 0.4; }
          .caps { grid-template-columns: 1fr; }
          .cap-icon { margin-bottom: 18px; }
        }
      `}</style>
    </section>
  );
}
