import { Reveal } from '@/components/shared/Reveal';
import { ServiceIcon } from '@/components/shared/ServiceIcon';
import { GlyphMap } from '@/components/shared/Glyphs';
import { HeroInfinityArt } from '@/components/shared/HeroInfinityArt';

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
        <HeroInfinityArt className="hero-art" />
        <div className="container hero-inner">
          <Reveal>
            <h1 className="hero-title">
              <span className="line-mask"><span>Built Around</span></span>
              <span className="line-mask"><span className="hero-accent">Your Ambition.</span></span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <div className="hero-foot">
              <p className="lede hero-lede">
                From streamlining everyday operations to unlocking new opportunities, we help businesses move
                forward with confidence.
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
          padding: calc(var(--nav-offset) + 88px) 0 96px;
          min-height: min(760px, 88vh);
          display: flex; flex-direction: column; justify-content: center;
          background: var(--ultramarine);
        }
        /* the animated neon infinity artwork covers the block, infinity on the right */
        .hero-art { inset: 0; width: 100%; height: 100%; z-index: 0; }
        /* edge fades (used on narrower screens) sit above the artwork, below the copy */
        .hero .hero-block::after { content: ""; position: absolute; inset: 0; z-index: 1; pointer-events: none; }
        /* copy in a left column, vertically centred against the artwork */
        .hero-inner { position: relative; z-index: 2; width: 100%; }
        .hero-inner > * { max-width: 600px; }
        .hero-title {
          font-size: clamp(40px, 5.2vw, 82px);
          font-weight: 600;
          letter-spacing: -0.04em;
          line-height: 1.08;
          color: #fff;
        }
        .line-mask > span.hero-accent {
          display: inline-block; white-space: nowrap;
          background: var(--chartreuse); color: var(--ultramarine);
          border-radius: 12px; padding: 0 0.14em; margin-left: -0.04em;
        }
        .hero-foot {
          display: flex; flex-direction: column; align-items: flex-start; gap: 20px;
          margin-top: 32px; max-width: 46ch;
        }
        .hero-lede { font-size: clamp(17px, 1.35vw, 20px); line-height: 1.55; color: var(--text-on-dark-muted); max-width: 46ch; }
        .caps {
          display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 12px;
          margin-top: 20px;
        }
        /* white cards with dark blue text and a dark blue chip (lime icon); one light lime accent card */
        .cap {
          padding: 22px 22px 26px; display: flex; flex-direction: column;
          background: var(--surface); border-radius: var(--radius-card);
          transition: background 0.2s ease, color 0.2s ease;
        }
        .cap-icon { margin-bottom: 36px; }
        .cap-title { font-family: var(--font-display); font-size: 20px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.15; color: var(--ultramarine); margin-bottom: 8px; transition: color 0.2s ease; }
        .cap-body { font-size: 14px; line-height: 1.5; color: var(--ultramarine-muted); transition: color 0.2s ease; }
        .cap:nth-child(3) { background: var(--lime-soft); }
        .cap:hover, .cap:nth-child(3):hover { background: var(--primary); }
        .cap:hover .cap-title { color: #fff; }
        .cap:hover .cap-body { color: var(--ice); }
        .cap:hover .cap-icon { background: var(--chartreuse); color: var(--ultramarine); }
        [data-theme="dark"] .cap:nth-child(3) { background: var(--surface); }
        [data-theme="dark"] .cap-title { color: var(--text); }
        [data-theme="dark"] .cap-body { color: var(--text-muted); }
        @media (max-width: 1100px) {
          .caps { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        /* narrower desktops: position the artwork so the whole infinity sits beside the copy */
        @media (min-width: 981px) and (max-width: 1279px) {
          /* artwork at 78% height, anchored right; navy fades hide its top, bottom and left edges */
          .hero-art { inset: auto; right: 0; top: 11%; height: 78%; width: auto; aspect-ratio: 16 / 9; }
          .hero .hero-block::after {
            background:
              linear-gradient(to bottom, var(--ultramarine) 11%, rgba(7, 18, 63, 0) 24%, rgba(7, 18, 63, 0) 76%, var(--ultramarine) 89%),
              linear-gradient(to right, var(--ultramarine) 20%, rgba(7, 18, 63, 0) 45%);
          }
          .hero-lede { max-width: 36ch; }
        }
        /* no room side by side: scale the artwork so the whole infinity sits centred under the copy */
        @media (max-width: 980px) {
          .hero .hero-block {
            min-height: 0;
            padding-bottom: calc(66vw + 32px);
          }
          /* the artwork sits at the bottom, 180% wide; a navy fade over its top edge blends it into the block */
          .hero-art { inset: auto; bottom: 0; left: -78.4%; width: 180%; height: auto; aspect-ratio: 16 / 9; }
          .hero .hero-block::after {
            background: linear-gradient(to bottom, var(--ultramarine) calc(100% - 96vw), rgba(7, 18, 63, 0) calc(100% - 70vw));
          }
        }
        @media (max-width: 760px) {
          .hero .hero-block { padding: calc(var(--nav-offset) + 40px) 0 calc(66vw + 24px); }
          .caps { grid-template-columns: 1fr; }
          .cap-icon { margin-bottom: 18px; }
        }
      `}</style>
    </section>
  );
}
