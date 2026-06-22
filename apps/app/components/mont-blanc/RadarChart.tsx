// Radar SVG (pentagone pour 5 axes). Pas de librairie externe.
// Les axes sont fournis par l'étape (ordre = ordre des protocoles).

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
          stroke="#2A2A2A"
          strokeWidth="1"
        />
      ))}

      {axes.map((axis, i) => {
        const { x, y } = pointAt(cx, cy, maxRadius, i, total)
        return <line key={axis.id} x1={cx} y1={cy} x2={x} y2={y} stroke="#2A2A2A" strokeWidth="1" />
      })}

      {compareScores ? (
        <polygon
          points={polygon(cx, cy, maxRadius, axes, compareScores)}
          fill="#6B728022"
          stroke="#6B7280"
          strokeWidth="1.5"
        />
      ) : null}

      <polygon
        points={polygon(cx, cy, maxRadius, axes, scores)}
        fill="#FF6B3533"
        stroke="#FF6B35"
        strokeWidth="2"
      />

      {axes.map((axis, i) => {
        const value = Math.min(100, Math.max(0, scores[axis.id] ?? 0))
        const { x, y } = pointAt(cx, cy, (maxRadius * value) / 100, i, total)
        return <circle key={axis.id} cx={x} cy={y} r={4} fill="#FF6B35" />
      })}

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
