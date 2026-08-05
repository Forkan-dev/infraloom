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

const s = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

const ICONS: Record<ServiceIconName, ReactNode> = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" {...s} />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" {...s} />
    </>
  ),
  game: (
    <>
      <path
        d="M7.6 7.5h8.8a4.5 4.5 0 0 1 4.4 3.6l.7 3.6a2.6 2.6 0 0 1-4.7 2l-1-1.4H8.2l-1 1.4a2.6 2.6 0 0 1-4.7-2l.7-3.6a4.5 4.5 0 0 1 4.4-3.6Z"
        {...s}
      />
      <path d="M7.2 11v2.2M6.1 12.1h2.2" {...s} />
      <path d="M15.9 11.6h.01M17.6 13.3h.01" {...s} strokeWidth="2" />
    </>
  ),
  ai: (
    <>
      <path d="M12 3.5 13.6 8 18 9.6 13.6 11.2 12 15.7 10.4 11.2 6 9.6 10.4 8Z" {...s} />
      <path d="M18 15.5l.7 1.9 1.8.7-1.8.7-.7 1.9-.7-1.9-1.8-.7 1.8-.7Z" {...s} opacity="0.6" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18.5a4 4 0 0 1-.4-8 5.5 5.5 0 0 1 10.6 1.1A3.7 3.7 0 0 1 17 18.5Z" {...s} />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" {...s} />
      <path d="M10.8 18.5h2.4" {...s} />
    </>
  ),
  devops: (
    <>
      <path d="M4 16.5 9 11l3.5 3.5L20 7" {...s} />
      <path d="M15.5 7H20v4.5" {...s} />
      <path d="M4 20h16" {...s} opacity="0.4" />
    </>
  ),
  saas: (
    <>
      <path d="M12 3.2 20.8 8 12 12.8 3.2 8Z" {...s} />
      <path d="M3.2 12 12 16.8 20.8 12" {...s} opacity="0.6" />
      <path d="M3.2 16 12 20.8 20.8 16" {...s} opacity="0.35" />
    </>
  ),
  enterprise: (
    <>
      <path d="M3 20.5h18" {...s} />
      <path d="M5.5 20.5V5.5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v15" {...s} />
      <path d="M13.5 10.5h4a1 1 0 0 1 1 1v9" {...s} />
      <path d="M8.2 8h3M8.2 11.5h3M8.2 15h3" {...s} opacity="0.55" />
    </>
  ),
  support: (
    <>
      <path d="M20 12a8 8 0 0 1-13.4 5.9M4 12a8 8 0 0 1 13.4-5.9" {...s} />
      <path d="M17.4 2.8v3.5h-3.5M6.6 21.2v-3.5h3.5" {...s} />
    </>
  ),
};

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {ICONS[name]}
    </svg>
  );
}
