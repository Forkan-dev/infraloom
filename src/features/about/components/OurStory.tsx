import Image from 'next/image';
import { Reveal } from '@/components/shared/Reveal';
import { SectionHead } from '@/components/shared/SectionHead';

const LEADERS = [
  { name: 'Syeed Hasin', role: 'Co-founder & CEO', photo: '/members/Syeed-hasin.png' },
  { name: 'Forkan Alam', role: 'Co-founder & Engineering Manager', photo: '/members/Forkan.png' },
];

/**
 * Founders: a centred heading over two large portraits. Each name sits on a white panel floating over the
 * bottom of the photo; on hover the photo turns to colour and the panel turns solid blue.
 */
export function OurStory() {
  return (
    <section className="block people">
      <div className="container">
        <Reveal>
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
                  sizes="(max-width: 640px) 100vw, 460px"
                  style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
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
        .people { padding: 96px 0; margin-top: 12px; background: var(--surface); }
        .founders {
          display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px;
          max-width: 940px; margin: 0 auto;
        }
        .founder { position: relative; margin: 0; }
        .founder-photo {
          position: relative; aspect-ratio: 4 / 5; overflow: hidden;
          border-radius: var(--radius-card); background: var(--ice);
        }
        .founder-photo img { filter: grayscale(1) contrast(1.05); transition: filter 0.5s ease, transform 1.2s var(--ease) !important; }
        .founder:hover .founder-photo img { filter: grayscale(0); transform: scale(1.04) !important; }
        /* name panel floating over the bottom of the portrait */
        .founder-info {
          position: absolute; left: 14px; right: 14px; bottom: 14px; z-index: 1;
          display: flex; flex-direction: column; align-items: flex-start; gap: 10px;
          padding: 18px 20px; border-radius: 16px; background: var(--surface);
          transition: background 0.25s ease;
        }
        .founder-name {
          font-family: var(--font-display); font-size: 24px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.15;
          color: var(--ultramarine); transition: color 0.25s ease;
        }
        .founder-role {
          font-size: 13px; font-weight: 600; line-height: 1.3;
          color: var(--chartreuse); background: var(--ultramarine);
          padding: 6px 12px; border-radius: var(--radius-pill);
          transition: background 0.25s ease, color 0.25s ease;
        }
        .founder:hover .founder-info { background: var(--primary); }
        .founder:hover .founder-name { color: #fff; }
        .founder:hover .founder-role { background: var(--chartreuse); color: var(--ultramarine); }
        @media (max-width: 640px) {
          .people { padding: 56px 0; }
          .founders { grid-template-columns: 1fr; gap: 16px; }
          .founder-name { font-size: 22px; }
        }
      `}</style>
    </section>
  );
}
