import { Button } from '@/components/ui/Button';
import { ArrowRight } from '@/components/ui/ArrowRight';

export function BigCTA() {
  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div
          style={{
            position: 'relative',
            padding: '72px 56px',
            borderRadius: 26,
            border: '1px solid rgba(139,92,246,0.3)',
            background:
              'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.18) 50%, rgba(6,182,212,0.12) 100%)',
            overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          <div className="bg-grid" style={{ opacity: 0.4 }} />
          <div
            style={{
              position: 'absolute',
              top: -200,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 600,
              height: 600,
              borderRadius: '50%',
              background:
                'radial-gradient(closest-side, rgba(139,92,246,0.4), transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <div style={{ position: 'relative' }}>
            <span className="eyebrow" style={{ marginBottom: 24 }}>
              Get in touch
            </span>
            <h2
              className="gradient-text"
              style={{
                marginTop: 20,
                marginBottom: 20,
                fontSize: 'clamp(36px, 5vw, 64px)',
              }}
            >
              Let&apos;s build your{' '}
              <em style={{ color: '#c4b5fd', fontStyle: 'italic' }}>
                next platform
              </em>
              .
            </h2>
            <p className="lede" style={{ margin: '0 auto 36px' }}>
              A 30 minute call with a senior engineer. Bring your architecture
              problem and we will talk it through.
            </p>
            <div
              style={{
                display: 'flex',
                gap: 12,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button href="/contact">
                Schedule a consultation <ArrowRight />
              </Button>
              <Button href="/portfolio" variant="secondary">
                Start your project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
