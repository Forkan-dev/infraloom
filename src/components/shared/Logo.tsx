interface LogoProps {
  height?: number;
}

export function Logo({ height = 40 }: LogoProps) {
  const width = Math.round(height * (400 / 144));
  return (
    <svg
      width={width}
      height={height}
      viewBox="100 88 400 144"
      role="img"
      aria-label="Infraloom"
      xmlns="http://www.w3.org/2000/svg"
    >
      <desc>Geometric hexagonal node logo for Infraloom in blue and white</desc>

      {/* connector lines — center to hexagon points */}
      <line x1="174" y1="160" x2="174" y2="108" stroke="#378ADD" strokeWidth="1.5" opacity="0.5" />
      <line x1="174" y1="160" x2="219" y2="134" stroke="#378ADD" strokeWidth="1.5" opacity="0.5" />
      <line x1="174" y1="160" x2="219" y2="186" stroke="#378ADD" strokeWidth="1.5" opacity="0.5" />
      <line x1="174" y1="160" x2="174" y2="212" stroke="#378ADD" strokeWidth="1.5" opacity="0.5" />
      <line x1="174" y1="160" x2="129" y2="186" stroke="#378ADD" strokeWidth="1.5" opacity="0.5" />
      <line x1="174" y1="160" x2="129" y2="134" stroke="#378ADD" strokeWidth="1.5" opacity="0.5" />

      {/* outer ring */}
      <line x1="174" y1="108" x2="219" y2="134" stroke="#185FA5" strokeWidth="1" opacity="0.3" />
      <line x1="219" y1="134" x2="219" y2="186" stroke="#185FA5" strokeWidth="1" opacity="0.3" />
      <line x1="219" y1="186" x2="174" y2="212" stroke="#185FA5" strokeWidth="1" opacity="0.3" />
      <line x1="174" y1="212" x2="129" y2="186" stroke="#185FA5" strokeWidth="1" opacity="0.3" />
      <line x1="129" y1="186" x2="129" y2="134" stroke="#185FA5" strokeWidth="1" opacity="0.3" />
      <line x1="129" y1="134" x2="174" y2="108" stroke="#185FA5" strokeWidth="1" opacity="0.3" />

      {/* diagonal cross lines */}
      <line x1="129" y1="134" x2="219" y2="186" stroke="#185FA5" strokeWidth="0.75" opacity="0.15" />
      <line x1="219" y1="134" x2="129" y2="186" stroke="#185FA5" strokeWidth="0.75" opacity="0.15" />
      <line x1="174" y1="108" x2="174" y2="212" stroke="#185FA5" strokeWidth="0.75" opacity="0.15" />

      {/* outer nodes */}
      <circle cx="174" cy="108" r="6" fill="#185FA5" opacity="0.5" />
      <circle cx="219" cy="134" r="6" fill="#185FA5" opacity="0.5" />
      <circle cx="219" cy="186" r="6" fill="#185FA5" opacity="0.5" />
      <circle cx="174" cy="212" r="6" fill="#185FA5" opacity="0.5" />
      <circle cx="129" cy="186" r="6" fill="#185FA5" opacity="0.5" />
      <circle cx="129" cy="134" r="6" fill="#185FA5" opacity="0.5" />

      {/* inner ring nodes */}
      <circle cx="174" cy="130" r="4" fill="#378ADD" opacity="0.6" />
      <circle cx="196" cy="147" r="4" fill="#378ADD" opacity="0.6" />
      <circle cx="196" cy="173" r="4" fill="#378ADD" opacity="0.6" />
      <circle cx="174" cy="190" r="4" fill="#378ADD" opacity="0.6" />
      <circle cx="152" cy="173" r="4" fill="#378ADD" opacity="0.6" />
      <circle cx="152" cy="147" r="4" fill="#378ADD" opacity="0.6" />

      {/* center node */}
      <circle cx="174" cy="160" r="10" fill="#185FA5" />
      <circle cx="174" cy="160" r="5" fill="#378ADD" />

      {/* wordmark */}
      <text
        x="252"
        y="172"
        fontFamily="-apple-system, 'system-ui', 'Segoe UI', sans-serif"
        fontSize="44"
        fontWeight="500"
      >
        <tspan fill="#0C447C">infra</tspan>
        <tspan fill="#378ADD">loom</tspan>
      </text>

      {/* tagline */}
      <text
        x="254"
        y="197"
        fill="#C2C0B6"
        fontFamily="-apple-system, 'system-ui', 'Segoe UI', sans-serif"
        fontSize="12"
        fontWeight="400"
      >
        SOFTWARE LIFECYCLE · AI
      </text>
    </svg>
  );
}
