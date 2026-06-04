// ═══════════════════════════════════════════════════
// APEXER APP — Tokens (charte officielle dark mode)
// Distincte de la charte du site vitrine (tokens.ts).
// ═══════════════════════════════════════════════════

type FontSizeEntry = [string, { lineHeight: string; letterSpacing?: string }]

export const appColors: Record<string, string> = {
  // Palette principale
  feu: '#FF6B35', // Orange Feu — CTA, accents, progression
  noir: '#0A0A0A', // Noir Charbon — fonds immersifs
  white: '#FFFFFF', // Blanc Pur — texte sur fond sombre
  forge: '#1A1A1A', // Gris Forge — cards sur fond noir
  acier: '#2A2A2A', // Gris Acier — bordures, séparateurs
  fumee: '#6B7280', // Gris Fumée — texte secondaire, labels
  cendre: '#F4F4F5', // Gris Cendre — fond clair alternatif (rare)
  // Accents fonctionnels
  valide: '#22C55E', // Vert Validé — succès, complétion
  alerte: '#EF4444', // Rouge Alerte — erreur, manqué
  prestige: '#F59E0B', // Or Prestige — badges premium
  black: '#000000',
}

export const appFontFamily: Record<string, string[]> = {
  sans: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
  body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
  mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
}

export const appFontSize: Record<string, FontSizeEntry> = {
  xs: ['0.75rem', { lineHeight: '1.5' }],
  sm: ['0.875rem', { lineHeight: '1.5' }],
  base: ['1rem', { lineHeight: '1.6' }],
  lg: ['1.125rem', { lineHeight: '1.55' }],
  xl: ['1.25rem', { lineHeight: '1.4' }],
  '2xl': ['1.5rem', { lineHeight: '1.3' }],
  '3xl': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
  '4xl': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
  '5xl': ['3rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
  '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
}

export const appBorderRadius: Record<string, string> = {
  sm: '6px',
  DEFAULT: '10px',
  md: '14px',
  lg: '18px',
  xl: '24px',
  '2xl': '32px',
  full: '9999px',
}

export const appBoxShadow: Record<string, string> = {
  card: '0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)',
  elevated: '0 8px 24px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.4)',
  'glow-feu': '0 0 24px rgba(255,107,53,0.35), 0 4px 12px rgba(255,107,53,0.2)',
  'glow-prestige': '0 0 24px rgba(245,158,11,0.35), 0 4px 12px rgba(245,158,11,0.2)',
}
