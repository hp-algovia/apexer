import type { Database } from '@apexer/db'
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// Pages accessibles sans session (séquence d'accroche + connexion)
const PUBLIC_PATHS = ['/auth/login', '/auth/callback', '/onboarding', '/onboarding/welcome']

function isPublicPath(pathname: string) {
  return PUBLIC_PATHS.includes(pathname)
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          )
        },
      },
    },
  )

  // IMPORTANT : ne rien insérer entre createServerClient et getUser()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { pathname } = request.nextUrl

  const redirect = (to: string) => {
    const url = request.nextUrl.clone()
    url.pathname = to
    url.search = ''
    return NextResponse.redirect(url)
  }

  // ── Pas authentifié ──────────────────────────────
  if (!user) {
    if (pathname === '/') return redirect('/onboarding') // splash E-01
    if (isPublicPath(pathname)) return supabaseResponse
    return redirect('/auth/login')
  }

  // ── Authentifié : router selon l'état d'onboarding ──
  const { data: profile } = await supabase
    .from('profiles')
    .select('onboarding_completed')
    .eq('id', user.id)
    .single()

  const onboarded = profile?.onboarding_completed === true

  if (!onboarded) {
    // Tout sauf /onboarding/* et /auth/callback est renvoyé vers l'onboarding
    if (pathname.startsWith('/onboarding') || pathname === '/auth/callback') {
      return supabaseResponse
    }
    return redirect('/onboarding/photo')
  }

  // Onboardé : plus rien à faire sur splash / login / racine
  if (pathname === '/' || pathname === '/auth/login' || pathname.startsWith('/onboarding')) {
    return redirect('/dashboard')
  }

  return supabaseResponse
}
