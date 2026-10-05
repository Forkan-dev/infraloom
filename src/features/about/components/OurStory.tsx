import Image from 'next/image';
import { Reveal } from '@/components/shared/Reveal';

const LEADERS = [
  { name: 'Syeed Hasin', role: 'Co-founder & CEO', photo: '/members/Syeed-hasin.png' },
  { name: 'Forkan Alam', role: 'Co-founder & Engineering Manager', photo: '/members/Forkan.png' },
];

export function OurStory() {
  return (
    <section className="section-tight">
      <div className="container">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ margin: '0 0 14px' }}>The people behind the work</h2>
            <p style={{ color: 'var(--fg-2)', fontSize: 16, maxWidth: '48ch', margin: '0 auto' }}>
              No layers of management between you and the people building your system.
            </p>
          </div>
        </Reveal>

        <div className="founders">
          {LEADERS.map((l, i) => (
            <Reveal key={l.name} delay={i * 100}>
              <figure className="founder">
                <div className="founder-photo">
                  <Image
                    src={l.photo}
                    alt={l.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 380px"
                    style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                  />
                </div>
                <figcaption className="founder-info">
                  <div className="founder-name">{l.name}</div>
                  <div className="founder-role">{l.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .founders {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 380px));
          justify-content: center;
          gap: 28px;
        }
        .founder {
          margin: 0;
          padding: 10px;
          border-radius: 22px;
          border: 1px solid var(--border);
          background: var(--bg-2);
          transition: transform 0.35s var(--ease), border-color 0.35s var(--ease);
        }
        .founder:hover { transform: translateY(-4px); border-color: rgba(139,92,246,0.35); }
        .founder-photo {
          position: relative;
          aspect-ratio: 4 / 5;
          border-radius: 14px;
          overflow: hidden;
          background: var(--bg-3, #111);
        }
        .founder-photo img { transition: transform 0.6s var(--ease); }
        .founder:hover .founder-photo img { transform: scale(1.04); }
        .founder-info { padding: 18px 10px 10px; }
        .founder-name { font-size: 19px; font-weight: 600; color: var(--fg-1); letter-spacing: -0.01em; }
        .founder-role { font-size: 14px; color: var(--fg-3); margin-top: 4px; }
        @media (max-width: 640px) {
          .founders { grid-template-columns: minmax(0, 380px); }
        }
      `}</style>
    </section>
  );
}
