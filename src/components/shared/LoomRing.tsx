/**
 * Decorative "loom ring" for dark hero blocks: a thick primary outer ring, a thinner signal inner ring,
 * a chartreuse hub and dashed primary crosshairs. Sized and positioned by the parent via className.
 */
export function LoomRing({ className = '' }: { className?: string }) {
  return (
    <svg className={`loom-ring ${className}`.trim()} viewBox="0 0 400 400" fill="none" aria-hidden="true" focusable="false">
      <path d="M0 200H400M200 0V400" stroke="var(--primary)" strokeWidth="3" strokeDasharray="10 10" />
      <circle className="loom-ring-outer" cx="200" cy="200" r="168" stroke="var(--primary)" strokeWidth="30" />
      <circle className="loom-ring-inner" cx="200" cy="200" r="92" stroke="var(--signal)" strokeWidth="12" />
      <circle className="loom-ring-hub" cx="200" cy="200" r="34" fill="var(--chartreuse)" />
      <path d="M168 200h64M200 168v64" stroke="var(--primary)" strokeWidth="3" strokeDasharray="6 6" />
      <style>{`
        .loom-ring { position: absolute; pointer-events: none; }
        .loom-ring-outer { stroke-dasharray: 1056; stroke-dashoffset: 1056; animation: loomRingDraw 1.4s var(--ease) 0.2s forwards; }
        .loom-ring-inner { stroke-dasharray: 579; stroke-dashoffset: 579; animation: loomRingDraw 1.2s var(--ease) 0.6s forwards; }
        .loom-ring-hub { transform-origin: 200px 200px; transform: scale(0); animation: loomRingPop 0.6s var(--ease) 1.1s forwards; }
        @keyframes loomRingDraw { to { stroke-dashoffset: 0; } }
        @keyframes loomRingPop { to { transform: scale(1); } }
        @media (prefers-reduced-motion: reduce) {
          .loom-ring-outer, .loom-ring-inner { animation: none; stroke-dashoffset: 0; }
          .loom-ring-hub { animation: none; transform: none; }
        }
      `}</style>
    </svg>
  );
}
