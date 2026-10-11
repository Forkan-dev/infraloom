import { ReactNode } from 'react';
import { Reveal } from '@/components/shared/Reveal';
import { HeroInfinityArt } from '@/components/shared/HeroInfinityArt';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  body: string;
  children?: ReactNode;
}

/**
 * Inner-page opener. Oversized headline hung from the left margin, then a strong rule,
 * with the body text pushed to the right half so the page opens on an asymmetric split.
 */
export function PageHero({ eyebrow, title, body, children }: PageHeroProps) {
  return (
    <section className="page-hero-ed">
      <div className="block block-dark on-dark page-hero-block">
        <HeroInfinityArt className="page-hero-art" />
        <div className="container page-hero-inner">
          <Reveal>
            <div className="page-hero-meta">
              {eyebrow ? <span className="eyebrow">{eyebrow}</span> : <span />}
              <LoomMark />
            </div>
          </Reveal>
          <Reveal>
            <h1 className="page-hero-title">
              <span className="line-mask"><span>{title}</span></span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <div className="page-hero-foot">
              <div className="page-hero-actions">{children}</div>
              <p className="lede page-hero-body">{body}</p>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .page-hero-ed { position: relative; }
        .page-hero-block {
          padding: 72px 0 64px; min-height: 400px;
          display: flex; flex-direction: column; justify-content: center;
          background: var(--ultramarine);
        }
        /* the neon infinity artwork covers the block, infinity on the right (same art as the home hero) */
        .page-hero-art { inset: 0; width: 100%; height: 100%; z-index: 0; }
        .page-hero-block::after { content: ""; position: absolute; inset: 0; z-index: 1; pointer-events: none; }
        .page-hero-inner { position: relative; z-index: 2; width: 100%; }
        .page-hero-meta { display: flex; align-items: center; margin-bottom: 28px; }
        .page-hero-meta:has(> span:empty:first-child) { display: none; }
        .page-hero-meta .loom-mark { display: none; }
        .page-hero-title { max-width: 14ch; color: #fff; font-size: clamp(36px, 4.6vw, 68px); }
        .page-hero-inner > * { max-width: 540px; }
        .page-hero-foot { display: flex; flex-direction: column; gap: 28px; margin-top: 28px; }
        .page-hero-actions { order: 2; display: flex; gap: 12px; flex-wrap: wrap; align-items: flex-start; }
        .page-hero-actions:empty { display: none; }
        .page-hero-body { order: 1; color: var(--text-on-dark-muted); }
        @media (max-width: 1279px) {
          .page-hero-inner > * { max-width: 460px; }
        }
        /* no room side by side: the artwork sits at the bottom, whole infinity centred under the copy */
        @media (max-width: 980px) {
          .page-hero-block { min-height: 0; padding: 44px 0 calc(66vw + 24px); }
          .page-hero-inner > * { max-width: none; }
          .page-hero-art { inset: auto; bottom: 0; left: -78.4%; width: 180%; height: auto; aspect-ratio: 16 / 9; }
          .page-hero-block::after {
            background: linear-gradient(to bottom, var(--ultramarine) calc(100% - 96vw), rgba(7, 18, 63, 0) calc(100% - 70vw));
          }
        }
      `}</style>
    </section>
  );
}

/** Small loom motif: warp threads crossed by a single weft, taken from the logo's orthogonal arms. */
export function LoomMark({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 44 22" fill="none" aria-hidden="true" className="loom-mark">
      {[2, 10, 18, 26, 34, 42].map((x) => (
        <path key={x} d={`M${x} 0v22`} stroke="currentColor" strokeWidth="1" />
      ))}
      <path d="M0 11h44" stroke="var(--blue)" strokeWidth="2" />
    </svg>
  );
}
