import { TechCell } from '@/components/shared/TechCell';
import { GlyphMap } from '@/components/shared/Glyphs';

const TECHS = [
  { name: 'Laravel', glyph: 'triangle', color: '#f87171' },
  { name: 'Golang', glyph: 'circle', color: '#67e8f9' },
  { name: 'Node.js', glyph: 'hex', color: '#86efac' },
  { name: 'React', glyph: 'ring', color: '#93c5fd' },
  { name: 'Vue.js', glyph: 'diamond', color: '#86efac' },
  { name: 'Flutter', glyph: 'bolt', color: '#7dd3fc' },
  { name: 'Kotlin', glyph: 'cube', color: '#c4b5fd' },
  { name: 'NestJS', glyph: 'dna', color: '#fda4af' },
  { name: 'RabbitMQ', glyph: 'flow', color: '#fb923c' },
  { name: 'Kong', glyph: 'shield', color: '#a3e635' },
  { name: 'Docker', glyph: 'layers', color: '#7dd3fc' },
  { name: 'Kubernetes', glyph: 'tree', color: '#93c5fd' },
  { name: 'Fluent Bit', glyph: 'pulse', color: '#67e8f9' },
  { name: 'PostgreSQL', glyph: 'cube', color: '#7dd3fc' },
  { name: 'Redis', glyph: 'spiral', color: '#fda4af' },
  { name: 'PHP', glyph: 'hex', color: '#a78bfa' },
] as const;

export function TrustedTechnologies() {
  const doubled = [...TECHS, ...TECHS];
  return (
    <section className="section-tight" style={{ position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: 36 }}>
        <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
          The stack we ship in production
        </span>
      </div>
      <div style={{
        position: 'relative', overflow: 'hidden',
        maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
      }}>
        <div className="marquee" style={{ display: 'flex', gap: 12, width: 'max-content' }}>
          {doubled.map((t, i) => (
            <TechCell key={i} name={t.name} glyph={GlyphMap[t.glyph]} color={t.color} />
          ))}
        </div>
      </div>
    </section>
  );
}
