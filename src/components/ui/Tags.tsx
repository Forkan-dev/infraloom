import { CSSProperties } from 'react';

interface TagsProps {
  items: string[];
  color?: string;
  style?: CSSProperties;
}

export function Tags({ items, color, style }: TagsProps) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, ...style }}>
      {items.map((t, i) => (
        <span
          key={i}
          className="chip"
          style={color ? { color } : undefined}
        >
          {t}
        </span>
      ))}
    </div>
  );
}
