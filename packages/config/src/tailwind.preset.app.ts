import type { Config } from 'tailwindcss'
import { appBorderRadius, appBoxShadow, appColors, appFontFamily, appFontSize } from './tokens.app'

// Preset Tailwind de l'app APEXER (dark mode natif).
// Ne pas confondre avec le preset du site vitrine (tailwind.preset.ts).
const presetApp: Partial<Config> = {
  content: [],
  theme: {
    extend: {
      colors: appColors,
      fontFamily: appFontFamily,
      fontSize: appFontSize,
      borderRadius: appBorderRadius,
      boxShadow: appBoxShadow,
      transitionTimingFunction: {
        apexer: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-logo': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.04)' },
        },
        'flame-flicker': {
          '0%, 100%': { transform: 'scale(1) rotate(-1deg)' },
          '50%': { transform: 'scale(1.08) rotate(1deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 600ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-logo': 'pulse-logo 1.5s ease-in-out infinite',
        'flame-flicker': 'flame-flicker 1.2s ease-in-out infinite',
      },
    },
  },
}

export default presetApp
