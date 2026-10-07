import { CSSProperties } from 'react';

interface TagsProps {
  items: string[];
  color?: string;
  style?: CSSProperties;
}

/** Stack names as small pills. The slash separators stay in the markup but are hidden by the pill styling. */
export function Tags({ items, color, style }: TagsProps) {
  return (
    <div
      className="tags"
      style={{
        display: 'flex', flexWrap: 'wrap', gap: 6,
        ...style,
      }}
    >
      {items.map((t, i) => (
        <span key={i} className="tag" style={color ? { color } : undefined}>
          {t}
          {i < items.length - 1 && <span aria-hidden="true" className="tag-sep">/</span>}
        </span>
      ))}
      <style>{`
        .tag {
          display: inline-flex; align-items: center;
          padding: 5px 12px; border-radius: var(--radius-pill);
          background: var(--ice); color: var(--ultramarine);
          font-size: 12px; font-weight: 500; line-height: 1.3; white-space: nowrap;
        }
        [data-theme="dark"] .tag { background: var(--paper-3); color: var(--text); }
        .tag-sep { display: none; }
      `}</style>
    </div>
  );
}
