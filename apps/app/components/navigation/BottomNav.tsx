'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItem = {
  href: string
  label: string
  icon: (active: boolean) => React.ReactNode
}

const stroke = (active: boolean) => (active ? '#FF6B35' : '#6B7280')

const NAV_ITEMS: NavItem[] = [
  {
    href: '/dashboard',
    label: 'Accueil',
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9.5Z"
          stroke={stroke(active)}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: '/mont-blanc',
    label: 'Programme',
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M3 20h18L14 7l-3.5 6L8 9l-5 11Z"
          stroke={stroke(active)}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: '/progress',
    label: 'Progression',
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 20V10M10 20V4M16 20v-8M21 20H3"
          stroke={stroke(active)}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: '/badges',
    label: 'Badges',
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="9" r="6" stroke={stroke(active)} strokeWidth="2" />
        <path
          d="m8.5 14-2 7L12 18l5.5 3-2-7"
          stroke={stroke(active)}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: '/profile',
    label: 'Profil',
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="8" r="4" stroke={stroke(active)} strokeWidth="2" />
        <path
          d="M4 21c0-4 3.5-6 8-6s8 2 8 6"
          stroke={stroke(active)}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

export function BottomNav() {
  const pathname = usePathname()

  // /progress et /progress/objective sont deux onglets distincts
  const isActive = (href: string) =>
    href === '/progress' ? pathname === '/progress' : pathname.startsWith(href)

  return (
    <nav className="pb-safe border-acier bg-noir/95 fixed inset-x-0 bottom-0 z-20 border-t backdrop-blur">
      <div className="mx-auto flex max-w-md items-stretch justify-between px-2">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-1 flex-col items-center gap-1 py-2.5"
              aria-current={active ? 'page' : undefined}
            >
              {item.icon(active)}
              <span
                className={['text-[10px] font-medium', active ? 'text-feu' : 'text-fumee'].join(
                  ' ',
                )}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
