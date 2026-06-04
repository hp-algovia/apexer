import type { NextRequest } from 'next/server'
import { updateSession } from './lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  return updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Tout sauf :
     * - _next/static, _next/image (assets Next)
     * - favicon, icônes, manifest
     * - vidéos et images publiques
     */
    '/((?!_next/static|_next/image|favicon.ico|icons/|videos/|manifest.webmanifest|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4)$).*)',
  ],
}
