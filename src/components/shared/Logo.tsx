import Image from 'next/image';

interface LogoProps {
  height?: number;
}

const LIGHT = { src: '/logo/infraloom-light.png', w: 1216, h: 219 };
const DARK = { src: '/logo/infraloom-dark.png', w: 1168, h: 219 };

export function Logo({ height = 32 }: LogoProps) {
  return (
    <span className="logo" style={{ display: 'inline-flex', alignItems: 'center', height }}>
      <Image
        className="logo-img logo-img--dark"
        src={DARK.src}
        alt="Infraloom"
        width={DARK.w}
        height={DARK.h}
        style={{ height, width: 'auto' }}
        priority
      />
      <Image
        className="logo-img logo-img--light"
        src={LIGHT.src}
        alt="Infraloom"
        width={LIGHT.w}
        height={LIGHT.h}
        style={{ height, width: 'auto' }}
        priority
      />
    </span>
  );
}
