interface ArrowRightProps {
  size?: number;
}

/** Long-tail arrow with a square-cut head, drawn for the Infraloom line system. */
export function ArrowRight({ size = 14 }: ArrowRightProps) {
  return (
    <svg
      className="arrow"
      width={Math.round(size * 1.5)}
      height={size}
      viewBox="0 0 24 16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 8h20M15 2l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}
