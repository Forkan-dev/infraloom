import Image from 'next/image';
import { Logo } from '@/components/shared/Logo';

interface BrowserShotProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Area of the screenshot that holds the original brand logo, in source pixels. */
  logoBox: { w: number; h: number };
}

// Screenshot inside a browser chrome, with the original logo covered by the Infraloom mark.
export function BrowserShot({ src, alt, width, height, logoBox }: BrowserShotProps) {
  return (
    <div style={{
      borderRadius: 14, overflow: 'hidden',
      border: '1px solid var(--border)', background: 'var(--bg-2)',
      boxShadow: '0 12px 48px rgba(0,0,0,0.5)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderBottom: '1px solid var(--border)', background: 'var(--bg-3)' }}>
        <span style={{ display: 'inline-flex', gap: 6 }}>
          {['#ff5f57', '#febc2e', '#28c840'].map((c) => <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
        </span>
        <span className="mono" style={{
          flex: 1, maxWidth: 320, margin: '0 auto', textAlign: 'center',
          fontSize: 11, color: 'var(--fg-3)', padding: '4px 10px', borderRadius: 6,
          background: 'var(--bg-1)', border: '1px solid var(--border)',
          overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
        }}>
          HRM · Admin dashboard
        </span>
        <span style={{ width: 46 }} />
      </div>
      <div style={{ position: 'relative' }}>
        <Image src={src} alt={alt} width={width} height={height} style={{ width: '100%', height: 'auto', display: 'block' }} />
        <div style={{
          position: 'absolute', left: 0, top: 0,
          width: `${(logoBox.w / width) * 100}%`, height: `${(logoBox.h / height) * 100}%`,
          background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '0 8px',
        }}>
          <div className="hrm-shot-logo" style={{ width: '100%', maxWidth: 190 }}>
            <Logo height={40} variant="light" />
          </div>
        </div>
      </div>
      <style>{`.hrm-shot-logo img { width: 100% !important; height: auto !important; }`}</style>
    </div>
  );
}
