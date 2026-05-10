'use client';

interface ChipPickerProps {
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}

export function ChipPicker({ options, value, onChange }: ChipPickerProps) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {options.map((o) => {
        const active = value === o;
        return (
          <button
            key={o}
            onClick={() => onChange(o)}
            type="button"
            className="chip"
            style={{
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              padding: '8px 14px',
              fontSize: 13,
              background: active ? 'linear-gradient(135deg, rgba(59,130,246,0.18), rgba(139,92,246,0.18))' : 'var(--bg-2)',
              borderColor: active ? 'rgba(139,92,246,0.4)' : 'var(--border)',
              color: active ? '#fff' : 'var(--fg-2)',
            }}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
