import { ReactNode } from 'react';

interface TechCellProps {
  name: string;
  glyph: ReactNode;
  color?: string;
}

export function TechCell({ name, glyph, color = '#9ca3af' }: TechCellProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '14px 16px',
        border: '1px solid var(--border)',
        background: 'var(--surface)',
        borderRadius: 12,
        transition: 'border-color 0.3s, background 0.3s',
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          width: 22,
          height: 22,
          color,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {glyph}
      </span>
      <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--fg-2)' }}>
        {name}
      </span>
    </div>
  );
}
