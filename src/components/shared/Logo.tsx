import Image from 'next/image';

interface LogoProps {
  height?: number;
  /** 'auto' follows the site theme; 'light' / 'dark' force the artwork for a fixed light or dark background. */
  variant?: 'auto' | 'light' | 'dark';
  priority?: boolean;
}

const LIGHT = { src: '/logo/infraloom-light.png', w: 1216, h: 219 };
const DARK = { src: '/logo/infraloom-dark.png', w: 1168, h: 219 };

export function Logo({ height = 30, variant = 'auto' }: LogoProps) {
  const showDark = variant !== 'light';
  const showLight = variant !== 'dark';
  return (
    <span className="logo" style={{ display: 'inline-flex', alignItems: 'center', height }}>
      {showDark && (
        <Image
          className={variant === 'auto' ? 'logo-img logo-img--dark' : 'logo-img'}
          src={DARK.src}
          alt="Infraloom"
          width={DARK.w}
          height={DARK.h}
          style={{ height, width: 'auto' }}
          priority
        />
      )}
      {showLight && (
        <Image
          className={variant === 'auto' ? 'logo-img logo-img--light' : 'logo-img'}
          src={LIGHT.src}
          alt="Infraloom"
          width={LIGHT.w}
          height={LIGHT.h}
          style={{ height, width: 'auto' }}
          priority
        />
      )}
    </span>
  );
}
