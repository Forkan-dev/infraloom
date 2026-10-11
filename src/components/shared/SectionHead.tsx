import { ReactNode } from 'react';

interface SectionHeadProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  align?: 'center' | 'left';
  children?: ReactNode;
}

/**
 * Section opener: eyebrow, title, intro and any action, stacked and centred (see .section-head in globals.css).
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
