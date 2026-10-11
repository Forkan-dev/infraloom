import { ReactNode } from 'react';

interface TechCellProps {
  name: string;
  glyph: ReactNode;
  color?: string;
}

/** One entry in the technology ribbon: the official logo in its brand colour, then the name, in a white pill. */
export function TechCell({ name, glyph, color }: TechCellProps) {
  return (
    <div className="tech-cell">
      <span className="tech-cell-glyph" style={color ? { color } : undefined}>{glyph}</span>
      <span className="tech-cell-name">{name}</span>
    </div>
  );
}
