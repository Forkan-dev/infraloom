'use client';

const STAGES = ['Discovery', 'Planning', 'Architecture', 'Develop', 'QA', 'Deploy', 'Monitor', 'Scale'];

interface SDLCFlowProps {
  active?: number;
}

export function SDLCFlow({ active = 0 }: SDLCFlowProps) {
  return (
    <div style={{ position: 'relative', padding: '24px 0' }}>
      <div
        style={{
          height: 1,
          background: 'var(--border)',
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: 2,
          background: 'linear-gradient(90deg, var(--blue), var(--violet))',
          position: 'absolute',
          top: 'calc(50% - 0.5px)',
          left: 0,
          width: `${(active / (STAGES.length - 1)) * 100}%`,
          boxShadow: '0 0 16px rgba(139,92,246,0.6)',
          transition: 'width 0.6s cubic-bezier(0.32, 0.72, 0, 1)',
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
        {STAGES.map((s, i) => {
          const done = i <= active;
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 14,
                flex: 1,
              }}
            >
              <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.1em' }}>
                0{i + 1}
              </div>
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: done
                    ? 'linear-gradient(135deg, var(--blue), var(--violet))'
                    : 'var(--surface)',
                  border: done ? 'none' : '1px solid var(--border-2)',
                  boxShadow: done ? '0 0 14px rgba(139,92,246,0.55)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.32, 0.72, 0, 1)',
                }}
              />
              <div
                style={{
                  fontSize: 13,
                  color: done ? 'var(--fg)' : 'var(--fg-3)',
                  fontWeight: 500,
                }}
              >
                {s}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
