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
            className={`chip-opt ${active ? 'chip-opt-active' : ''}`}
          >
            {o}
          </button>
        );
      })}
      <style>{`
        .chip-opt {
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          padding: 9px 16px;
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          border-radius: 10px;
          border: 1px solid var(--border);
          background: var(--bg-2);
          color: var(--fg-2);
          transition: border-color 0.18s, background 0.18s, color 0.18s, box-shadow 0.18s;
          white-space: nowrap;
        }
        .chip-opt:hover {
          border-color: var(--border-strong);
          color: var(--fg-1);
          background: var(--bg-3);
        }
        .chip-opt-active {
          background: linear-gradient(135deg, rgba(59,130,246,0.14), rgba(139,92,246,0.14));
          border-color: rgba(99,102,241,0.5);
          color: var(--fg-1);
          box-shadow: 0 0 0 3px rgba(99,102,241,0.1);
        }
        [data-theme="light"] .chip-opt-active {
          background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(99,102,241,0.1));
          border-color: rgba(99,102,241,0.45);
          color: #3730a3;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.08);
        }
      `}</style>
    </div>
  );
}
