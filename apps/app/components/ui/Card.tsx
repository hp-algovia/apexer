type CardProps = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={['border-acier bg-forge shadow-card rounded-lg border p-5', className ?? ''].join(
        ' ',
      )}
    >
      {children}
    </div>
  )
}
