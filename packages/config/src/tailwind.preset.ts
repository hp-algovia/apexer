import type { Config } from 'tailwindcss'
import { borderRadius, boxShadow, colors, fontFamily, fontSize, maxWidth, spacing } from './tokens'

const preset: Partial<Config> = {
  content: [],
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
      spacing,
      borderRadius,
      boxShadow,
      maxWidth,
    },
  },
}

export default preset
