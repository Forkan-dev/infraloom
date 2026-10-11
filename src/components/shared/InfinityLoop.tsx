/**
 * Geometric infinity: two perfect circles (r = 100, centres at x = ±140) joined by two straight lines
 * that meet the circles tangentially and cross at the exact centre (≈91°). The path starts at that
 * centre, so the draw-in grows outward from the middle. Shared by the hero graphic and the footer wordmark.
 */
export const INFINITY_PATH =
  'M0 0L68.57 -69.99A100 100 0 1 1 68.57 69.99L-68.57 -69.99A100 100 0 1 0 -68.57 69.99Z';

/** Hero graphic: the blue infinity draws itself once on load, smoothly. Static under prefers-reduced-motion. */
export function InfinityLoop({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`infinity ${className}`.trim()}
      viewBox="-260 -120 520 240"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path className="inf-loop" d={INFINITY_PATH} pathLength={1000} />
      <style>{`
        .infinity { position: absolute; pointer-events: none; }
        .inf-loop {
          stroke: var(--primary); stroke-width: 26; stroke-linejoin: round;
          stroke-dasharray: 1000; stroke-dashoffset: 1000;
          animation: infDraw 2.2s cubic-bezier(0.65, 0, 0.35, 1) 0.3s forwards;
        }
        @keyframes infDraw { to { stroke-dashoffset: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .inf-loop { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>
    </svg>
  );
}
