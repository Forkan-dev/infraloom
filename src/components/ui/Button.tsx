import Link from 'next/link';
import { ReactNode, ButtonHTMLAttributes, ElementType } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  href,
  as,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const cls = `btn btn-${variant} ${className}`.trim();

  if (href !== undefined) {
    return <Link href={href} className={cls}>{children}</Link>;
  }

  const Tag = (as ?? 'button') as ElementType;
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}
