interface ArrowRightProps {
  size?: number;
}

export function ArrowRight({ size = 14 }: ArrowRightProps) {
  return (
    <svg
      className="arrow"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
