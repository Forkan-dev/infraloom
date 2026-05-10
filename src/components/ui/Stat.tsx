interface StatProps {
  value: string;
  label: string;
  accent?: string;
}

export function Stat({ value, label, accent }: StatProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div
        style={{
          fontSize: 44,
          fontWeight: 500,
          letterSpacing: '-0.04em',
          lineHeight: 1,
          color: accent ?? 'var(--fg)',
        }}
      >
        {value}
      </div>
      <div
        className="mono"
        style={{
          fontSize: 12,
          color: 'var(--fg-3)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}
      >
        {label}
      </div>
    </div>
  );
}
