import type { Config } from 'tailwindcss'
import {
  borderRadius,
  boxShadow,
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  maxWidth,
  spacing,
  transitionDuration,
  transitionTimingFunction,
} from './tokens'

const preset: Partial<Config> = {
  content: [],
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
      fontWeight,
      spacing,
      borderRadius,
      boxShadow,
      maxWidth,
      transitionTimingFunction,
      transitionDuration,
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'count-pop': {
          '0%': { opacity: '0', transform: 'translateY(8px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 800ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'count-pop': 'count-pop 600ms cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
}

export default preset
