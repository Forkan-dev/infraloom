/**
 * The home hero artwork (public/logo/infraloom-hero-infinity.svg) rendered inline so its layers can animate.
 *  1. Ignite, once: every neon layer draws along the infinity together; the echo rings fade in after.
 * Static (fully drawn) under prefers-reduced-motion. Sized and positioned by the parent via className.
 */
export function HeroInfinityArt({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`hia ${className}`.trim()}
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* the infinity, drawn like the "oo" in the wordmark: one stroke, two open ends near the cross */}
        <path
          id="hia-inf"
          pathLength={1000}
          d="M -50 50 C -110 110, -165 150, -235 150 C -320 150, -380 85, -380 0 C -380 -85, -315 -150, -230 -150 C -140 -150, -60 -60, 0 0 C 60 60, 140 150, 230 150 C 315 150, 380 85, 380 0 C 380 -85, 320 -150, 235 -150 C 165 -150, 110 -110, 50 -50"
        />
        <radialGradient id="hia-bgGlow" cx="1370" cy="540" r="900" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1a2fa8" stopOpacity="0.55" />
          <stop offset="0.45" stopColor="#0d1d72" stopOpacity="0.35" />
          <stop offset="1" stopColor="#071140" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hia-vignette" cx="960" cy="540" r="1150" gradientUnits="userSpaceOnUse">
          <stop offset="0.6" stopColor="#040a2a" stopOpacity="0" />
          <stop offset="1" stopColor="#030822" stopOpacity="0.75" />
        </radialGradient>
        <linearGradient id="hia-core" x1="-380" y1="0" x2="380" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2F6BFF" />
          <stop offset="0.5" stopColor="#4A82FF" />
          <stop offset="1" stopColor="#2F6BFF" />
        </linearGradient>
        <filter id="hia-bloomWide" x="-50%" y="-80%" width="200%" height="260%"><feGaussianBlur stdDeviation="38" /></filter>
        <filter id="hia-bloomMid" x="-50%" y="-80%" width="200%" height="260%"><feGaussianBlur stdDeviation="14" /></filter>
        <filter id="hia-bloomTight" x="-50%" y="-80%" width="200%" height="260%"><feGaussianBlur stdDeviation="4" /></filter>
        <filter id="hia-haze" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.5" /></filter>
      </defs>

      {/* background */}
      <rect width="1920" height="1080" fill="#071140" />
      <rect width="1920" height="1080" fill="url(#hia-bgGlow)" />

      {/* faint echo rings for depth */}
      <g className="hia-echo">
        <g transform="translate(1370 540) scale(1.32)" fill="none" stroke="#2F6BFF" strokeLinecap="round" filter="url(#hia-haze)">
          <use href="#hia-inf" strokeWidth="2" opacity="0.10" />
        </g>
        <g transform="translate(1370 540) scale(1.62)" fill="none" stroke="#2F6BFF" strokeLinecap="round" filter="url(#hia-haze)">
          <use href="#hia-inf" strokeWidth="1.5" opacity="0.05" />
        </g>
      </g>

      {/* neon infinity */}
      <g transform="translate(1370 540) scale(1.05)" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <use className="hia-draw hia-breathe" href="#hia-inf" stroke="#1E4BFF" strokeWidth="60" filter="url(#hia-bloomWide)" />
        <use className="hia-draw" href="#hia-inf" stroke="#2F6BFF" strokeWidth="30" opacity="0.75" filter="url(#hia-bloomMid)" />
        <use className="hia-draw" href="#hia-inf" stroke="#3D78FF" strokeWidth="18" filter="url(#hia-bloomTight)" />
        <use className="hia-draw" href="#hia-inf" stroke="url(#hia-core)" strokeWidth="13" />
        <use className="hia-draw" href="#hia-inf" stroke="#BFD3FF" strokeWidth="4.5" opacity="0.9" />
      </g>

      <rect width="1920" height="1080" fill="url(#hia-vignette)" />

      <style>{`
        .hia { position: absolute; pointer-events: none; }
        .hia-draw {
          stroke-dasharray: 1000; stroke-dashoffset: 1000;
          animation: hiaDraw 2.6s cubic-bezier(0.65, 0, 0.35, 1) 0.2s forwards;
        }
        .hia-breathe { opacity: 0.45; }
        .hia-echo { opacity: 0; animation: hiaFade 1.6s ease 2.2s forwards; }
        @keyframes hiaDraw { to { stroke-dashoffset: 0; } }
        @keyframes hiaFade { to { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .hia-draw, .hia-breathe { animation: none; stroke-dashoffset: 0; }
          .hia-echo { animation: none; opacity: 1; }
        }
      `}</style>
    </svg>
  );
}
