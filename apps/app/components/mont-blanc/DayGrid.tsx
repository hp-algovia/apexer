type DayGridProps = {
  totalDays: number
  currentDay: number
  validatedDays: number[]
  missedDays?: number[]
  className?: string
}

// Grille des jours d'une étape : vert=validé, feu=aujourd'hui, alerte=manqué, acier=futur.
export function DayGrid({
  totalDays,
  currentDay,
  validatedDays,
  missedDays = [],
  className,
}: DayGridProps) {
  const validated = new Set(validatedDays)
  const missed = new Set(missedDays)

  return (
    <div className={['grid grid-cols-7 gap-2', className ?? ''].join(' ')}>
      {Array.from({ length: totalDays }, (_, i) => i + 1).map((day) => {
        const isValidated = validated.has(day)
        const isToday = day === currentDay && !isValidated
        const isMissed = missed.has(day) && !isValidated
        const cls = isValidated
          ? 'bg-valide text-noir'
          : isToday
            ? 'bg-feu text-noir'
            : isMissed
              ? 'bg-alerte/80 text-white'
              : 'bg-acier text-fumee'
        return (
          <div
            key={day}
            className={[
              'flex aspect-square items-center justify-center rounded-md font-mono text-xs font-bold',
              cls,
            ].join(' ')}
            title={`Jour ${day}`}
          >
            {day}
          </div>
        )
      })}
    </div>
  )
}
