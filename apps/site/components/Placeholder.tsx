import { cn } from '@apexer/ui'

type PlaceholderProps = {
  label: string
  ratio?: '16/9' | '4/5' | '1/1' | '21/9' | '3/2'
  className?: string
}

const ratioClass: Record<NonNullable<PlaceholderProps['ratio']>, string> = {
  '16/9': 'aspect-[16/9]',
  '4/5': 'aspect-[4/5]',
  '1/1': 'aspect-square',
  '21/9': 'aspect-[21/9]',
  '3/2': 'aspect-[3/2]',
}

export function Placeholder({ label, ratio = '16/9', className }: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder image — ${label}`}
      className={cn(
        'bg-soft border-grey-soft/60 text-grey relative w-full overflow-hidden rounded-lg border',
        ratioClass[ratio],
        className,
      )}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em]">IMAGE</span>
        <span className="text-grey-light font-body max-w-xs text-sm leading-snug">{label}</span>
      </div>
    </div>
  )
}
