type FontSizeEntry = [string, { lineHeight: string }]

export const colors: Record<string, string> = {
  navy: '#0B1A2A',
  gold: '#B08A3E',
  'gold-soft': '#D9BB7A',
  'gold-deep': '#8A6A2E',
  red: '#9A2A2A',
  grey: '#6B6F76',
  'grey-light': '#9CA0A6',
  'grey-soft': '#D1D3D6',
  light: '#F5F2EC',
  soft: '#EFEAE0',
  white: '#FFFFFF',
  black: '#1A1A1A',
  border: '#E5E5E5',
  success: '#2D7D5A',
}

export const fontFamily: Record<string, string[]> = {
  sans: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
  body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
  serif: ['Georgia', 'serif'],
}

export const fontSize: Record<string, FontSizeEntry> = {
  xs: ['0.75rem', { lineHeight: '1.5' }],
  sm: ['0.875rem', { lineHeight: '1.5' }],
  base: ['1rem', { lineHeight: '1.6' }],
  lg: ['1.125rem', { lineHeight: '1.6' }],
  xl: ['1.25rem', { lineHeight: '1.5' }],
  '2xl': ['1.5rem', { lineHeight: '1.4' }],
  '3xl': ['1.875rem', { lineHeight: '1.3' }],
  '4xl': ['2.25rem', { lineHeight: '1.2' }],
  '5xl': ['3rem', { lineHeight: '1.1' }],
  '6xl': ['3.75rem', { lineHeight: '1.05' }],
}

export const spacing: Record<string, string> = {
  '18': '4.5rem',
  '22': '5.5rem',
}

export const borderRadius: Record<string, string> = {
  sm: '4px',
  DEFAULT: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
}

export const boxShadow: Record<string, string> = {
  soft: '0 1px 3px rgba(11,26,42,0.04), 0 1px 2px rgba(11,26,42,0.06)',
  medium: '0 4px 12px rgba(11,26,42,0.06), 0 2px 6px rgba(11,26,42,0.08)',
  strong: '0 12px 32px rgba(11,26,42,0.08), 0 4px 12px rgba(11,26,42,0.10)',
}

export const maxWidth: Record<string, string> = {
  prose: '65ch',
  narrow: '640px',
  content: '896px',
  wide: '1200px',
}
