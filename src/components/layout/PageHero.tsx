import { ReactNode } from 'react';
import { Reveal } from '@/components/shared/Reveal';

interface PageHeroProps {
  title: string;
  body: string;
  children?: ReactNode;
}

/**
 * Inner-page header: light and centred on the page background (title, intro, actions),
 * so only the home page carries the dark hero with the infinity artwork.
 */
export function PageHero({ title, body, children }: PageHeroProps) {
  return (
    <section className="page-hero-ed">
      <div className="container page-hero-inner">
        <Reveal>
          <h1 className="page-hero-title">
            <span className="line-mask"><span>{title}</span></span>
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <div className="page-hero-foot">
            <p className="lede page-hero-body">{body}</p>
            <div className="page-hero-actions">{children}</div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .page-hero-ed { padding: 72px 0 8px; }
        .page-hero-inner { display: flex; flex-direction: column; align-items: center; text-align: center; }
        .page-hero-title {
          max-width: 18ch; text-wrap: balance;
          font-size: clamp(36px, 5vw, 72px); color: var(--ultramarine);
        }
        .page-hero-foot { display: flex; flex-direction: column; align-items: center; gap: 28px; margin-top: 20px; }
        .page-hero-body { max-width: 58ch; margin: 0 auto; color: var(--text-muted); }
        .page-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
        .page-hero-actions:empty { display: none; }
        [data-theme="dark"] .page-hero-title { color: var(--text); }
        @media (max-width: 760px) {
          .page-hero-ed { padding: 44px 0 0; }
        }
      `}</style>
    </section>
  );
}
