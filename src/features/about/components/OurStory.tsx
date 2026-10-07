import Image from 'next/image';
import { Reveal } from '@/components/shared/Reveal';
import { SectionHead } from '@/components/shared/SectionHead';

const LEADERS = [
  { name: 'Syeed Hasin', role: 'Co-founder & CEO', photo: '/members/Syeed-hasin.png' },
  { name: 'Forkan Alam', role: 'Co-founder & Engineering Manager', photo: '/members/Forkan.png' },
];

export function OurStory() {
  return (
    <section className="section">
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
                  sizes="(max-width: 880px) 100vw, 520px"
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
        .founders {
          display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: 24px;
          align-items: start;
        }
        .founder { margin: 0; }
        .founder:nth-child(1) { grid-column: 3 / span 4; }
        .founder:nth-child(2) { grid-column: 8 / span 4; margin-top: 120px; }
        .founder { padding: 12px; background: var(--surface); border-radius: var(--radius-card); }
        .founder-photo { position: relative; aspect-ratio: 4 / 5; overflow: hidden; background: var(--paper-3); border-radius: 16px; }
        .founder-photo img { filter: grayscale(1) contrast(1.05); }
        .founder:hover .founder-photo img { transform: scale(1.03) !important; }
        .founder-info {
          display: flex; justify-content: space-between; align-items: baseline; gap: 16px; flex-wrap: wrap;
          padding: 18px 10px 8px;
        }
        .founder-name { font-family: var(--font-display); font-size: 24px; font-weight: 600; letter-spacing: -0.03em; color: var(--ink); }
        .founder-role { font-size: 13px; font-weight: 500; color: var(--primary); background: var(--ice); padding: 4px 12px; border-radius: 999px; }
        [data-theme="dark"] .founder-role { background: var(--paper-3); color: var(--signal); }
        @media (max-width: 880px) {
          .founder:nth-child(1), .founder:nth-child(2) { grid-column: 1 / -1; margin-top: 0; }
          .founder + .founder { margin-top: 12px; }
        }
      `}</style>
    </section>
  );
}
