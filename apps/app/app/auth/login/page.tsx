'use client'

import { ApexerLogo } from '@/components/logo/ApexerLogo'
import { Button } from '@/components/ui/Button'
import { createClient } from '@/lib/supabase/client'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.57 5.57 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29a7.16 7.16 0 0 1 0-4.58V6.62H1.29a12.04 12.04 0 0 0 0 10.76l3.98-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A11.97 11.97 0 0 0 12 0 11.99 11.99 0 0 0 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75Z"
      />
    </svg>
  )
}

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const supabase = createClient()

  const [mode, setMode] = useState<'signup' | 'login'>('signup')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(
    searchParams.get('error') ? 'La connexion a échoué. Réessaie.' : null,
  )

  async function signInWithGoogle() {
    setLoading(true)
    setError(null)
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/onboarding/photo`,
      },
    })
    if (oauthError) {
      setError('La connexion Google a échoué. Réessaie.')
      setLoading(false)
    }
  }

  async function submitEmail(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@') || password.length < 8) {
      setError('Email valide et mot de passe de 8 caractères minimum requis.')
      return
    }
    setLoading(true)
    setError(null)

    const { error: authError } =
      mode === 'signup'
        ? await supabase.auth.signUp({ email, password })
        : await supabase.auth.signInWithPassword({ email, password })

    if (authError) {
      setError(
        mode === 'signup'
          ? 'La création du compte a échoué. ' + authError.message
          : 'Email ou mot de passe incorrect.',
      )
      setLoading(false)
      return
    }

    // Le middleware route vers /onboarding/photo ou /dashboard selon l'état
    router.push('/dashboard')
    router.refresh()
  }

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-10 flex flex-col items-center gap-4">
          <ApexerLogo size={72} />
          <h1 className="font-sans text-3xl font-black text-white">
            {mode === 'signup' ? 'Rejoins APEXER' : 'Bon retour'}
          </h1>
          <p className="text-fumee text-center text-sm">L’action forge l’excellence.</p>
        </div>

        <Button variant="white" fullWidth onClick={signInWithGoogle} disabled={loading}>
          <GoogleIcon />
          Continuer avec Google
        </Button>

        <div className="my-6 flex items-center gap-4">
          <div className="bg-acier h-px flex-1" />
          <span className="text-fumee text-xs uppercase tracking-wider">ou</span>
          <div className="bg-acier h-px flex-1" />
        </div>

        <form onSubmit={submitEmail} className="flex flex-col gap-3">
          <input
            type="email"
            required
            autoComplete="email"
            placeholder="ton@email.fr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-acier bg-forge placeholder:text-fumee focus:border-feu rounded-md border px-4 py-3.5 text-base text-white focus:outline-none"
          />
          <input
            type="password"
            required
            minLength={8}
            autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
            placeholder="Mot de passe (8 caractères min.)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-acier bg-forge placeholder:text-fumee focus:border-feu rounded-md border px-4 py-3.5 text-base text-white focus:outline-none"
          />

          {error ? <p className="text-alerte text-sm">{error}</p> : null}

          <Button type="submit" fullWidth disabled={loading}>
            {loading ? 'Un instant…' : mode === 'signup' ? 'Créer mon compte' : 'Me connecter'}
          </Button>
        </form>

        <button
          type="button"
          onClick={() => {
            setMode(mode === 'signup' ? 'login' : 'signup')
            setError(null)
          }}
          className="text-fumee mt-6 w-full text-center text-sm transition-colors hover:text-white"
        >
          {mode === 'signup' ? 'J’ai déjà un compte' : 'Créer un nouveau compte'}
        </button>
      </div>
    </main>
  )
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
