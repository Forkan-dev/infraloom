import type { ReactNode } from 'react';

export type ServiceIconName =
  | 'web'
  | 'game'
  | 'saas'
  | 'enterprise'
  | 'mobile'
  | 'ai'
  | 'cloud'
  | 'devops'
  | 'support';

/** Thread node: the small filled square shared with the Infraloom glyph system. */
const N = ({ x, y }: { x: number; y: number }) => <rect x={x - 1.5} y={y - 1.5} width="3" height="3" fill="currentColor" stroke="none" />;

// Same construction as GlyphMap: 24 grid, 1.4 stroke, square caps, straight threads and ring hubs.
const ICONS: Record<ServiceIconName, ReactNode> = {
  web: (
    <>
      <path d="M2.5 4.5h19v15h-19zM2.5 9h19" />
      <N x={5.5} y={6.75} />
    </>
  ),
  game: (
    <>
      <path d="M3 8h18v9H3z" />
      <path d="M7.5 10.5v4M5.5 12.5h4" />
      <N x={15.5} y={11} />
      <N x={18} y={14} />
    </>
  ),
  ai: (
    <>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2.5v6M12 15.5v6M2.5 12h6M15.5 12h6" />
      <N x={12} y={2.5} />
      <N x={21.5} y={12} />
    </>
  ),
  cloud: (
    <>
      <path d="M2.5 17.5h19M5.5 17.5V12h13v5.5M9 12V7.5h6V12" />
    </>
  ),
  mobile: (
    <>
      <path d="M7 2.5h10v19H7zM7 17.5h10" />
      <N x={12} y={19.5} />
    </>
  ),
  devops: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15.5 7H21v5.5" />
      <path d="M3 21h18" opacity="0.45" />
    </>
  ),
  saas: (
    <>
      <path d="M3 5h18M3 12h18M3 19h18" />
      <N x={7} y={5} />
      <N x={12} y={12} />
      <N x={17} y={19} />
    </>
  ),
  enterprise: (
    <>
      <path d="M2.5 21h19M5 21V3.5h9V21M14 9.5h5V21" />
      <path d="M8 7.5h3M8 11.5h3M8 15.5h3" opacity="0.55" />
    </>
  ),
  support: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M6 6l3.5 3.5M18 18l-3.5-3.5M18 6l-3.5 3.5M6 18l3.5-3.5" />
    </>
  ),
};

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
    >
      {ICONS[name]}
    </svg>
  );
}
