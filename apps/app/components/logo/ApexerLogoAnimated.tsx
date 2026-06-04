'use client'

import { motion } from 'framer-motion'

type ApexerLogoAnimatedProps = {
  /** Progression de 0 à 100 — pilote la taille du triangle orange */
  progress: number
  size?: number
  className?: string
  /** Affiche le % sous le logo */
  showLabel?: boolean
}

const lerp = (from: number, to: number, t: number) => from + (to - from) * t

/**
 * Le logo APEXER comme barre de progression.
 * Triangle noir (l'individu) : fixe. Triangle orange (l'écosystème) :
 * commence en pointe et grandit jusqu'à envelopper le noir à 100 %.
 */
export function ApexerLogoAnimated({
  progress,
  size = 64,
  className,
  showLabel = false,
}: ApexerLogoAnimatedProps) {
  const t = Math.min(100, Math.max(0, progress)) / 100

  // Sommet fixe (50,10) — la cible. La base s'élargit et descend avec la progression.
  const leftX = lerp(45, 20, t)
  const rightX = lerp(55, 80, t)
  const baseY = lerp(50, 90, t)

  const orangePath = `M50 10L${leftX} ${baseY}H${rightX}L50 10Z`

  return (
    <div className={`inline-flex flex-col items-center gap-2 ${className ?? ''}`}>
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`Progression ${Math.round(progress)}%`}
      >
        <motion.path
          d={orangePath}
          fill="#FF6B35"
          initial={false}
          animate={{ d: orangePath }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* L'individu — fixe, contour acier pour rester lisible sur fond noir */}
        <path d="M50 45L40 90H60L50 45Z" fill="#000000" stroke="#2A2A2A" strokeWidth="1" />
      </svg>
      {showLabel ? (
        <span className="text-feu font-mono text-sm font-semibold">{Math.round(progress)}%</span>
      ) : null}
    </div>
  )
}
