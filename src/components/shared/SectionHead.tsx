import { ReactNode } from 'react';

interface SectionHeadProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  align?: 'center' | 'left';
  children?: ReactNode;
}

export function SectionHead({
  eyebrow,
  title,
  body,
  align = 'center',
  children,
}: SectionHeadProps) {
  const isLeft = align === 'left';
  return (
    <div
      className="section-head"
      style={
        isLeft
          ? { textAlign: 'left', marginLeft: 0, alignItems: 'flex-start' }
          : undefined
      }
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="gradient-text">{title}</h2>}
      {body && (
        <p
          className="lede"
          style={isLeft ? {} : { margin: '0 auto' }}
        >
          {body}
        </p>
      )}
      {children}
    </div>
  );
}
