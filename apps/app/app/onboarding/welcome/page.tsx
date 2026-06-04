'use client'

import { useRouter } from 'next/navigation'

// E-02 — Vidéo d'accroche plein écran, skippable, enchaîne vers la connexion
export default function WelcomePage() {
  const router = useRouter()
  const goToLogin = () => router.replace('/auth/login')

  return (
    <main className="relative flex flex-1 flex-col">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/recommence.mp4"
        autoPlay
        muted
        playsInline
        onEnded={goToLogin}
        onError={goToLogin}
      />
      <button
        type="button"
        onClick={goToLogin}
        className="bg-noir/60 hover:bg-noir/80 absolute right-6 top-6 z-10 rounded-full px-4 py-2 text-sm text-white backdrop-blur transition-colors"
      >
        Passer
      </button>
    </main>
  )
}
