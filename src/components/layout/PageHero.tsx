import { ReactNode } from 'react';
import { Reveal } from '@/components/shared/Reveal';
import { LoomRing } from '@/components/shared/LoomRing';

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
        <LoomRing className="page-hero-ring" />
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
        .page-hero-block { padding: 72px 0 64px; }
        .page-hero-inner { position: relative; z-index: 1; }
        .page-hero-ring { width: 440px; height: 440px; right: -150px; top: 50%; transform: translateY(-50%); }
        .page-hero-meta { display: flex; align-items: center; margin-bottom: 28px; }
        .page-hero-meta:has(> span:empty:first-child) { display: none; }
        .page-hero-meta .loom-mark { display: none; }
        .page-hero-title { max-width: 16ch; color: #fff; font-size: clamp(36px, 5.2vw, 76px); }
        .page-hero-foot { display: flex; flex-direction: column; gap: 28px; margin-top: 28px; max-width: 60ch; }
        .page-hero-actions { order: 2; display: flex; gap: 12px; flex-wrap: wrap; align-items: flex-start; }
        .page-hero-actions:empty { display: none; }
        .page-hero-body { order: 1; color: var(--text-on-dark-muted); }
        @media (max-width: 1100px) {
          .page-hero-ring { width: 340px; height: 340px; right: -140px; }
        }
        @media (max-width: 880px) {
          .page-hero-block { padding: 44px 0 40px; }
          .page-hero-ring { width: 220px; height: 220px; right: -90px; top: -40px; transform: none; opacity: 0.4; }
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
