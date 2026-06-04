'use client'

type SelectableCardProps = {
  selected: boolean
  onSelect: () => void
  children: React.ReactNode
  className?: string
}

export function SelectableCard({ selected, onSelect, children, className }: SelectableCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={[
        'ease-apexer rounded-lg border p-4 text-left transition-all duration-200 active:scale-[0.98]',
        selected
          ? 'border-feu bg-feu/10 shadow-glow-feu'
          : 'border-acier bg-forge hover:border-fumee',
        className ?? '',
      ].join(' ')}
    >
      {children}
    </button>
  )
}
