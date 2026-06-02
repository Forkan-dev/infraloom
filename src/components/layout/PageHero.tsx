import { ReactNode } from 'react';
import { Reveal } from '@/components/shared/Reveal';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  body: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, body, children }: PageHeroProps) {
  return (
    <section
      style={{
        position: 'relative',
        padding: '180px 0 80px',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <div className="bg-grid" />
      <div
        className="bg-glow violet"
        style={{ top: -300, left: '50%', transform: 'translateX(-50%)' }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {eyebrow && (
          <Reveal>
            <span className="eyebrow" style={{ marginBottom: 24 }}>
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={80}>
          <h1 className="gradient-text" style={{ marginTop: 20, marginBottom: 24 }}>
            {title}
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="lede" style={{ margin: '0 auto' }}>
            {body}
          </p>
        </Reveal>
        {children && (
          <Reveal delay={220}>
            <div
              style={{
                marginTop: 36,
                display: 'flex',
                justifyContent: 'center',
                gap: 12,
                flexWrap: 'wrap',
              }}
            >
              {children}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
