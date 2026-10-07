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
          border-radius: 999px;
          border: 0;
          background: var(--background);
          color: var(--ink-2);
          transition: background 0.2s ease, color 0.2s ease;
          white-space: nowrap;
        }
        .chip-opt:hover { background: var(--ice); color: var(--primary); }
        [data-theme="dark"] .chip-opt:hover { background: var(--paper-3); color: var(--signal); }
        .chip-opt-active, .chip-opt-active:hover { background: var(--primary); color: #fff; }
      `}</style>
    </div>
  );
}
