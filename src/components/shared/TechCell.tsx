import { ReactNode } from 'react';

interface TechCellProps {
  name: string;
  glyph: ReactNode;
  color?: string;
}

/** One entry in the technology ribbon: monochrome mark, name in display type, hairline divider. */
export function TechCell({ name, glyph }: TechCellProps) {
  return (
    <div className="tech-cell">
      <span className="tech-cell-glyph">{glyph}</span>
      <span className="tech-cell-name">{name}</span>
    </div>
  );
}
