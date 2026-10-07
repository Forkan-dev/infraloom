import { ReactNode } from 'react';

interface SectionHeadProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  align?: 'center' | 'left';
  children?: ReactNode;
}

/**
 * Editorial section opener: a full-width rule, the eyebrow in the margin column,
 * the title set large across the main columns, and any action pinned to the right edge.
 */
export function SectionHead({ eyebrow, title, body, align = 'left', children }: SectionHeadProps) {
  return (
    <div className={`section-head ${align === 'center' ? 'is-center' : ''}`}>
      <div className="section-head-index">
        {eyebrow && <span className="meta">{eyebrow}</span>}
      </div>
      {title && (
        <div className="section-head-title">
          <h2>{title}</h2>
        </div>
      )}
      {children && <div className="section-head-aside">{children}</div>}
      {body && <p className="lede section-head-body">{body}</p>}
    </div>
  );
}
