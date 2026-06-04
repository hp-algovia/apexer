import { redirect } from 'next/navigation'

// Le middleware fait le routing fin (auth / onboarding / dashboard).
// Ce fallback couvre le cas où la racine est atteinte sans redirection.
export default function RootPage() {
  redirect('/onboarding')
}
