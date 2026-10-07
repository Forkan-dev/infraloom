'use client';

import { useTheme } from '@/providers/ThemeProvider';

/** Two-position switch drawn as a half-filled square: the filled half shows the current edition. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Light' : 'Dark'}
      className="theme-toggle"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="1.5" y="1.5" width="13" height="13" stroke="currentColor" strokeWidth="1.2" />
        <path d={dark ? 'M8 1.5h6.5v13H8z' : 'M1.5 1.5H8v13H1.5z'} fill="currentColor" />
      </svg>
      <style>{`
        .theme-toggle {
          width: 36px; height: 36px; padding: 0;
          display: inline-flex; align-items: center; justify-content: center;
          border: 0; background: transparent; color: var(--ink-2); cursor: pointer;
          transition: color 0.3s var(--ease);
        }
        .theme-toggle:hover { color: var(--accent); }
      `}</style>
    </button>
  );
}
