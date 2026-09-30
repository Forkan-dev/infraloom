import Image from 'next/image';

interface LogoProps {
  height?: number;
  /** 'auto' follows the site theme; 'light' / 'dark' force the variant for a fixed background. */
  variant?: 'auto' | 'light' | 'dark';
  priority?: boolean;
}

// Source PNG sizes — used to keep the aspect ratio.
const LIGHT = { src: '/brand/infraloom-logo-light.png', w: 1216, h: 219 };
const DARK = { src: '/brand/infraloom-logo-dark.png', w: 1168, h: 219 };

function LogoImage({ logo, height, className, priority }: { logo: typeof LIGHT; height: number; className?: string; priority?: boolean }) {
  return (
    <Image
      src={logo.src}
      alt="Infraloom"
      width={Math.round(height * (logo.w / logo.h))}
      height={height}
      priority={priority}
      className={className}
      style={{ height, width: 'auto' }}
    />
  );
}

export function Logo({ height = 30, variant = 'auto', priority }: LogoProps) {
  if (variant === 'light') return <LogoImage logo={LIGHT} height={height} priority={priority} />;
  if (variant === 'dark') return <LogoImage logo={DARK} height={height} priority={priority} />;

  // Both variants render; CSS in globals.css shows the one matching [data-theme].
  return (
    <span style={{ display: 'inline-flex' }}>
      <LogoImage logo={DARK} height={height} className="logo-on-dark" priority={priority} />
      <LogoImage logo={LIGHT} height={height} className="logo-on-light" priority={priority} />
    </span>
  );
}
