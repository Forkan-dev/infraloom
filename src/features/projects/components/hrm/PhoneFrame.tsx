import Image from 'next/image';

interface PhoneFrameProps {
  src: string;
  alt: string;
  /** Colour behind the status bar — matches the top edge of the screenshot. */
  statusBg: string;
  /** Use dark status-bar glyphs on light screens. */
  darkStatus?: boolean;
}

// All screenshots are cropped to the same screen area, so every phone renders at an identical size.
const SCREEN_W = 538;
const SCREEN_H = 1134;

// Sizes are in container-query units (cqw) so the frame keeps its proportions at any width.
export function PhoneFrame({ src, alt, statusBg, darkStatus }: PhoneFrameProps) {
  const glyph = darkStatus ? '#111' : '#fff';
  return (
    <div className="phone-wrap">
      <div className="phone-body">
        <span className="phone-btn" style={{ left: '-1.1cqw', top: '22%', height: '6%' }} />
        <span className="phone-btn" style={{ left: '-1.1cqw', top: '31%', height: '10%' }} />
        <span className="phone-btn" style={{ right: '-1.1cqw', top: '27%', height: '13%' }} />
        <div className="phone-screen" style={{ background: statusBg }}>
          <div className="phone-status" style={{ color: glyph }}>
            <span>9:41</span>
            <span style={{ display: 'inline-flex', gap: '1.4cqw', alignItems: 'center' }}>
              <svg viewBox="0 0 18 12" style={{ width: '5.4cqw' }}><g fill={glyph}><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5.5" width="3" height="6.5" rx="1" /><rect x="10" y="3" width="3" height="9" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" /></g></svg>
              <svg viewBox="0 0 26 12" style={{ width: '7.4cqw' }}><rect x=".75" y=".75" width="21.5" height="10.5" rx="3" fill="none" stroke={glyph} strokeOpacity=".45" strokeWidth="1.5" /><rect x="2.75" y="2.75" width="17.5" height="6.5" rx="1.6" fill={glyph} /><rect x="23.5" y="4" width="1.8" height="4" rx=".9" fill={glyph} fillOpacity=".45" /></svg>
            </span>
          </div>
          <span className="phone-island" />
          <div style={{ position: 'relative', aspectRatio: `${SCREEN_W} / ${SCREEN_H}` }}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 600px) 45vw, 260px"
              style={{ objectFit: 'fill' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Shared styles — rendered once by the parent.
export const phoneFrameCss = `
  .phone-wrap { container-type: inline-size; width: 100%; max-width: 260px; margin: 0 auto; }
  .phone-body {
    position: relative; padding: 3.4cqw; border-radius: 16cqw;
    background: linear-gradient(145deg, #3a3e47 0%, #1b1d22 45%, #2b2e35 100%);
    box-shadow:
      inset 0 0 0 0.6cqw #4b505b,
      inset 0 0 0 1.4cqw #111317,
      0 1px 0 rgba(255,255,255,0.08),
      0 30px 60px -18px rgba(0,0,0,0.55),
      0 12px 24px -12px rgba(0,0,0,0.4);
  }
  .phone-btn { position: absolute; width: 1.2cqw; border-radius: 1cqw; background: linear-gradient(90deg, #2b2e35, #4b505b); }
  .phone-screen { position: relative; border-radius: 12.6cqw; overflow: hidden; }
  .phone-status {
    height: 11cqw; padding: 0 8cqw 0 10cqw;
    display: flex; align-items: center; justify-content: space-between;
    font: 600 4.6cqw/1 -apple-system, 'SF Pro Text', 'Segoe UI', sans-serif; letter-spacing: -0.01em;
  }
  .phone-island {
    position: absolute; top: 2.6cqw; left: 50%; transform: translateX(-50%);
    width: 29cqw; height: 8.4cqw; border-radius: 99px; background: #000;
  }
`;
