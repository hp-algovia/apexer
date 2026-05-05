type FontSizeEntry = [string, { lineHeight: string; letterSpacing?: string }]

export const colors: Record<string, string> = {
  white: '#FFFFFF',
  off: '#FAFAFA',
  charbon: '#1A1A1A',
  grey: '#6B7280',
  border: '#E5E7EB',
  orange: '#F97316',
  'orange-soft': '#FFF1E6',
  'orange-deep': '#C2410C',
  gold: '#D4A04A',
  'gold-soft': '#F5E4C0',
  'gold-deep': '#A87A2C',
  black: '#000000',
  success: '#16A34A',
  danger: '#DC2626',
}

export const fontFamily: Record<string, string[]> = {
  sans: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
  body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
  serif: ['Georgia', 'serif'],
}

export const fontSize: Record<string, FontSizeEntry> = {
  xs: ['0.75rem', { lineHeight: '1.5' }],
  sm: ['0.875rem', { lineHeight: '1.5' }],
  base: ['1rem', { lineHeight: '1.65' }],
  lg: ['1.125rem', { lineHeight: '1.6' }],
  xl: ['1.25rem', { lineHeight: '1.5' }],
  '2xl': ['1.5rem', { lineHeight: '1.4' }],
  '3xl': ['1.875rem', { lineHeight: '1.3' }],
  '4xl': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
  '5xl': ['3rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
  '6xl': ['3.75rem', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
  '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
  '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
}

export const spacing: Record<string, string> = {
  '18': '4.5rem',
  '22': '5.5rem',
  '30': '7.5rem',
  '34': '8.5rem',
  '38': '9.5rem',
}

export const borderRadius: Record<string, string> = {
  sm: '4px',
  DEFAULT: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  full: '9999px',
}

export const boxShadow: Record<string, string> = {
  soft: '0 1px 3px rgba(17,17,17,0.04), 0 1px 2px rgba(17,17,17,0.06)',
  medium: '0 6px 20px rgba(17,17,17,0.06), 0 2px 6px rgba(17,17,17,0.05)',
  strong: '0 16px 40px rgba(17,17,17,0.08), 0 4px 12px rgba(17,17,17,0.06)',
  glow: '0 12px 32px rgba(249,115,22,0.18), 0 4px 12px rgba(249,115,22,0.10)',
}

export const maxWidth: Record<string, string> = {
  prose: '65ch',
  narrow: '640px',
  content: '896px',
  wide: '1200px',
  ultra: '1320px',
}

export const transitionTimingFunction: Record<string, string> = {
  apexer: 'cubic-bezier(0.16, 1, 0.3, 1)',
}

export const transitionDuration: Record<string, string> = {
  '400': '400ms',
  '600': '600ms',
  '800': '800ms',
}

export const fontWeight: Record<string, string> = {
  body: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  black: '800',
}
