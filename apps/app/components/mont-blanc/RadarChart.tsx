// Radar SVG (pentagone pour 5 axes). Visuel signature APEXER — pas de librairie.

export type RadarAxis = { id: string; label: string }

type RadarChartProps = {
  axes: RadarAxis[]
  scores: Record<string, number> // 0-100 par protocole
  compareScores?: Record<string, number> // overlay (ex. diagnostic d'entrée)
  size?: number
  className?: string
}

function pointAt(cx: number, cy: number, radius: number, index: number, total: number) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / total
  return { x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) }
}

function polygon(
  cx: number,
  cy: number,
  maxRadius: number,
  axes: RadarAxis[],
  scores: Record<string, number>,
): string {
  return axes
    .map((axis, i) => {
      const value = Math.min(100, Math.max(0, scores[axis.id] ?? 0))
      const { x, y } = pointAt(cx, cy, (maxRadius * value) / 100, i, axes.length)
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')
}

export function RadarChart({
  axes,
  scores,
  compareScores,
  size = 280,
  className,
}: RadarChartProps) {
  const cx = size / 2
  const cy = size / 2
  const maxRadius = size * 0.32
  const total = axes.length

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Profil par protocole"
    >
      <defs>
        <radialGradient id="radar-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="radar-zone" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#D4A04A" stopOpacity="0.18" />
        </linearGradient>
        <filter id="radar-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#FF6B35" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Fond du pentagone */}
      <polygon
        points={axes
          .map((_, i) => {
            const { x, y } = pointAt(cx, cy, maxRadius, i, total)
            return `${x.toFixed(1)},${y.toFixed(1)}`
          })
          .join(' ')}
        fill="url(#radar-bg)"
      />

      {/* Anneaux — grille technique pointillée */}
      {[0.25, 0.5, 0.75, 1].map((scale) => (
        <polygon
          key={scale}
          points={axes
            .map((_, i) => {
              const { x, y } = pointAt(cx, cy, maxRadius * scale, i, total)
              return `${x.toFixed(1)},${y.toFixed(1)}`
            })
            .join(' ')}
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
      ))}

      {/* Axes */}
      {axes.map((axis, i) => {
        const { x, y } = pointAt(cx, cy, maxRadius, i, total)
        return (
          <line
            key={axis.id}
            x1={cx}
            y1={cy}
            x2={x}
            y2={y}
            stroke="#1A1A1A"
            strokeWidth="1"
            strokeDasharray="2 3"
          />
        )
      })}

      {/* Overlay comparaison (ex. entrée) */}
      {compareScores ? (
        <polygon
          points={polygon(cx, cy, maxRadius, axes, compareScores)}
          fill="#6B728014"
          stroke="#6B7280"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
      ) : null}

      {/* Zone des scores actuels */}
      <polygon
        points={polygon(cx, cy, maxRadius, axes, scores)}
        fill="url(#radar-zone)"
        stroke="#FF6B35"
        strokeWidth="2"
        filter="url(#radar-glow)"
      />

      {/* Points + halo */}
      {axes.map((axis, i) => {
        const value = Math.min(100, Math.max(0, scores[axis.id] ?? 0))
        const { x, y } = pointAt(cx, cy, (maxRadius * value) / 100, i, total)
        return (
          <g key={axis.id}>
            <circle cx={x} cy={y} r={9} fill="#FF6B35" opacity={0.2} />
            <circle cx={x} cy={y} r={4.5} fill="#FF6B35" />
          </g>
        )
      })}

      {/* Labels */}
      {axes.map((axis, i) => {
        const { x, y } = pointAt(cx, cy, maxRadius + 22, i, total)
        const anchor = x < cx - 5 ? 'end' : x > cx + 5 ? 'start' : 'middle'
        return (
          <text
            key={axis.id}
            x={x}
            y={y}
            fill="#6B7280"
            fontSize="11"
            textAnchor={anchor}
            dominantBaseline="middle"
          >
            {axis.label}
          </text>
        )
      })}
    </svg>
  )
}
