'use client';

import { useTheme } from '@/providers/ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const light = theme === 'light';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        width: 32,
        height: 32,
        padding: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--border)',
        borderRadius: 8,
        background: 'transparent',
        color: 'var(--fg-2)',
        cursor: 'pointer',
        transition: 'color 0.2s, border-color 0.2s',
      }}
    >
      {light ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M21 13 A 9 9 0 1 1 11 3 A 7 7 0 0 0 21 13 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 2 V4 M12 20 V22 M2 12 H4 M20 12 H22 M5 5 L6.5 6.5 M17.5 17.5 L19 19 M5 19 L6.5 17.5 M17.5 6.5 L19 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}
