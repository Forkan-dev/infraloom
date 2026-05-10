import { ReactNode, CSSProperties } from 'react';

interface BadgeProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export function Badge({ children, style, className = '' }: BadgeProps) {
  return (
    <span className={`chip ${className}`.trim()} style={style}>
      {children}
    </span>
  );
}
