// Lueur de forge renforcée — pages de révélation (score, fin d'étape).
// La forge chauffe plus fort : braise au sol + reflet en haut.
export function ForgeGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          'radial-gradient(ellipse 80% 40% at 50% 100%, rgba(255,107,53,0.12) 0%, rgba(255,107,53,0) 70%), radial-gradient(ellipse 70% 30% at 50% 0%, rgba(212,160,74,0.08) 0%, rgba(212,160,74,0) 65%)',
      }}
    />
  )
}
