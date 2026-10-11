import Image from 'next/image';
import { Reveal } from '@/components/shared/Reveal';
import { SectionHead } from '@/components/shared/SectionHead';

const LEADERS = [
  { name: 'Syeed Hasin', role: 'Co-founder & CEO', photo: '/members/Syeed-hasin.png' },
  { name: 'Forkan Alam', role: 'Co-founder & Engineering Manager', photo: '/members/Forkan.png' },
];

export function OurStory() {
  return (
    <section className="block people">
      <div className="container people-grid">
        <Reveal className="people-head">
          <SectionHead
            title="The people behind the work"
            body="No layers of management between you and the people building your system."
          />
        </Reveal>

        <div className="founders">
          {LEADERS.map((l) => (
            <figure key={l.name} className="founder">
              <Reveal className="reveal-clip founder-photo">
                <Image
                  src={l.photo}
                  alt={l.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 420px"
                  style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                />
              </Reveal>
              <figcaption className="founder-info">
                <span className="founder-name">{l.name}</span>
                <span className="founder-role">{l.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        /* white block, editorial split: heading on the left, founders on the right */
        .people { padding: 96px 0; margin-top: 12px; background: var(--surface); }
        .people-grid {
          display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: 24px; row-gap: 40px;
          align-items: start;
        }
        .people-head { grid-column: 1 / span 4; padding-top: 8px; }
        .people .section-head { display: flex; flex-direction: column; gap: 20px; margin-bottom: 0; }
        .people .section-head-title h2 { max-width: 12ch; font-size: clamp(32px, 3.4vw, 48px); }
        .people .section-head-body { max-width: 30ch; }
        .founders {
          grid-column: 6 / span 7;
          display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px;
          align-items: stretch;
        }
        .founder {
          margin: 0; padding: 12px; display: flex; flex-direction: column;
          background: var(--background); border-radius: var(--radius-card);
          transition: background 0.2s ease;
        }
        .founder-photo { position: relative; aspect-ratio: 4 / 5; overflow: hidden; background: var(--ice); border-radius: 16px; }
        .founder-photo img { filter: grayscale(1) contrast(1.05); transition: filter 0.4s ease, transform 1.2s var(--ease) !important; }
        .founder:hover .founder-photo img { filter: grayscale(0); transform: scale(1.03) !important; }
        .founder-info {
          display: flex; flex-direction: column; align-items: flex-start; gap: 10px;
          padding: 18px 10px 10px;
        }
        .founder-name { font-family: var(--font-display); font-size: 24px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.15; color: var(--ultramarine); }
        .founder-role {
          font-size: 13px; font-weight: 600; line-height: 1.3;
          color: var(--chartreuse); background: var(--ultramarine);
          padding: 6px 12px; border-radius: var(--radius-pill);
        }
        [data-theme="dark"] .founder-name { color: var(--text); }
        @media (max-width: 980px) {
          .people-head { grid-column: 1 / -1; padding-top: 0; }
          .people .section-head-title h2 { max-width: 18ch; }
          .founders { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .people { padding: 56px 0; }
          .founders { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
