import { ReactNode } from 'react';

export const GlyphMap: Record<string, ReactNode> = {
  hex: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" stroke="currentColor" strokeWidth="1.5" /></svg>,
  triangle: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3 L22 21 L2 21 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>,
  circle: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" /></svg>,
  square: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" /></svg>,
  diamond: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2 L22 12 L12 22 L2 12 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>,
  cube: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3 L21 8 V17 L12 22 L3 17 V8 Z M12 3 V12 M12 12 L21 8 M12 12 L3 8" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>,
  ring: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" opacity="0.6" /></svg>,
  bolt: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M13 3 L4 14 H11 L9 21 L20 9 H13 L15 3 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>,
  dna: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 4 C 8 8 16 16 19 20 M19 4 C 16 8 8 16 5 20 M7 7 H17 M7 17 H17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>,
  flow: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth="1.4" /><circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.4" /><circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="1.4" /><path d="M7 5 L17 11 M7 19 L17 13" stroke="currentColor" strokeWidth="1.3" /></svg>,
  layers: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 7 L12 3 L21 7 L12 11 Z M3 12 L12 16 L21 12 M3 17 L12 21 L21 17" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>,
  pulse: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M2 12 H6 L8 5 L12 19 L14 12 H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  tree: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="1.4" /><circle cx="5" cy="20" r="2" stroke="currentColor" strokeWidth="1.4" /><circle cx="12" cy="20" r="2" stroke="currentColor" strokeWidth="1.4" /><circle cx="19" cy="20" r="2" stroke="currentColor" strokeWidth="1.4" /><path d="M12 6 V12 M12 12 H5 V18 M12 12 V18 M12 12 H19 V18" stroke="currentColor" strokeWidth="1.3" /></svg>,
  shield: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3 L20 6 V13 C20 17 16.5 20 12 21 C7.5 20 4 17 4 13 V6 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>,
  spiral: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 21 C 6 21 4 15 4 12 C 4 8 7 5 11 5 C 14 5 16 7 16 10 C 16 12 14 14 12 14 C 11 14 9 13 9 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>,
  grid: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.4" rx="1" /><rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.4" rx="1" /><rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.4" rx="1" /><rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.4" rx="1" /></svg>,
};

export function Glyph({ name }: { name: string }) {
  return <>{GlyphMap[name] ?? null}</>;
}
