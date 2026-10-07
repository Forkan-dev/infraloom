import { ReactNode, SVGProps } from 'react';

/*
 * Infraloom glyph system.
 * Drawn on a 24 grid with one 1.4 stroke and square caps, from the same parts as the logo mark:
 * a ring hub, straight threads, and small square nodes where threads meet.
 */
function G(props: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      {...props}
    />
  );
}

/** Small filled square used as a thread node. */
const N = ({ x, y }: { x: number; y: number }) => <rect x={x - 1.5} y={y - 1.5} width="3" height="3" fill="currentColor" stroke="none" />;

export const GlyphMap: Record<string, ReactNode> = {
  hex: <G><path d="M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5z" /><path d="M12 2.5v19" /></G>,
  triangle: <G><path d="M12 3l9 17H3z" /><path d="M7.8 15h8.4M10.2 10.5h3.6" /></G>,
  circle: <G><circle cx="12" cy="12" r="4" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /></G>,
  square: <G><path d="M3.5 3.5h17v17h-17z" /><path d="M9 3.5v17M15 3.5v17" /></G>,
  diamond: <G><path d="M12 2.5l9.5 9.5-9.5 9.5L2.5 12z" /><path d="M2.5 12h19" /></G>,
  cube: <G><path d="M12 2.8l8.4 4.7v9L12 21.2l-8.4-4.7v-9z" /><path d="M3.6 7.5L12 12l8.4-4.5M12 12v9.2" /></G>,
  ring: <G><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="3.5" /><N x={12} y={3.5} /></G>,
  bolt: <G><path d="M14 2.5L5.5 13.5h6.5L10 21.5l8.5-11H12z" /></G>,
  dna: <G><path d="M3 7c4.5 0 4.5 10 9 10s4.5-10 9-10" /><path d="M3 17c4.5 0 4.5-10 9-10s4.5 10 9 10" /></G>,
  flow: <G><path d="M4 5h7v14h9M11 12h9" /><N x={4} y={5} /><N x={20} y={12} /><N x={20} y={19} /></G>,
  layers: <G><path d="M3 6h18M6 12h15M9 18h12" /><N x={3} y={12} /><N x={6} y={18} /></G>,
  pulse: <G><path d="M2 13h5V6h5v12h5v-5h5" /></G>,
  tree: <G><path d="M12 4v6M4.5 20v-6h15v6M12 10v10" /><N x={12} y={4} /><N x={4.5} y={20} /><N x={12} y={20} /><N x={19.5} y={20} /></G>,
  shield: <G><path d="M12 2.5l8 3v6.8c0 4.6-3.4 7.9-8 9.2-4.6-1.3-8-4.6-8-9.2V5.5z" /><path d="M12 2.5v19" /></G>,
  spiral: <G><path d="M3 8h18M3 16h18M8 3v18M16 3v18" /></G>,
  grid: <G><path d="M3.5 3.5h7v7h-7zM13.5 3.5h7v7h-7zM3.5 13.5h7v7h-7zM13.5 13.5h7v7h-7z" /></G>,
};

export function Glyph({ name }: { name: string }) {
  return <>{GlyphMap[name] ?? null}</>;
}
