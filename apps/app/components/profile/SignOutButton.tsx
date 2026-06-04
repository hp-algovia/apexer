'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export function SignOutButton() {
  const router = useRouter()
  const supabase = createClient()

  async function signOut() {
    await supabase.auth.signOut()
    router.push('/auth/login')
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={() => void signOut()}
      className="text-fumee hover:text-alerte text-sm transition-colors"
    >
      Me déconnecter
    </button>
  )
}
