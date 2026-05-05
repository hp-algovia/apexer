'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@apexer/ui'
import { Container } from './Container'

const navItems = [
  { href: '/methode', label: 'Méthode' },
  { href: '/forge', label: 'Forges' },
  { href: '/events', label: 'Events' },
  { href: '/batisseurs', label: 'Bâtisseurs' },
  { href: '/pourquoi-apexer', label: 'Pourquoi APEXER ?' },
  { href: '/journal', label: 'Journal' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'duration-400 ease-apexer sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all',
        scrolled ? 'border-border h-16 bg-white/85' : 'h-24 border-transparent bg-white/70',
      )}
    >
      <Container className="flex h-full items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="APEXER — accueil">
          <Image
            src="/logo-apexer.png"
            alt="APEXER"
            width={200}
            height={56}
            priority
            className={cn(
              'duration-400 ease-apexer w-auto transition-all',
              scrolled ? 'h-7 md:h-8' : 'h-9 md:h-10',
            )}
          />
        </Link>

        <nav aria-label="Navigation principale" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-body text-charbon hover:text-orange group relative inline-block py-1 text-sm font-medium transition-colors"
                >
                  {item.label}
                  <span className="bg-orange ease-apexer absolute -bottom-0.5 left-0 h-px w-0 transition-[width] duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/ouvrir-une-forge"
            className="font-body text-orange hover:text-orange-deep group relative inline-flex items-center text-sm font-semibold transition-colors"
          >
            <span className="relative">
              Ouvrir une Forge
              <span className="bg-orange ease-apexer absolute -bottom-0.5 left-0 h-px w-0 transition-[width] duration-300 group-hover:w-full" />
            </span>
          </Link>
          <Link
            href="/candidater"
            className="bg-orange shadow-soft ease-apexer hover:bg-orange-deep hover:shadow-glow inline-flex items-center justify-center rounded-md px-5 py-2.5 font-sans text-sm font-semibold text-white transition-all duration-200 active:scale-[0.98] active:duration-100"
          >
            Postuler à une Forge
          </Link>
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="border-border text-charbon flex h-10 w-10 items-center justify-center rounded-md border md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                'bg-charbon absolute left-0 top-0 h-px w-5 transition-transform duration-200',
                open && 'translate-y-[6px] rotate-45',
              )}
            />
            <span
              className={cn(
                'bg-charbon absolute left-0 top-[6px] h-px w-5 transition-opacity duration-200',
                open && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'bg-charbon absolute left-0 top-[12px] h-px w-5 transition-transform duration-200',
                open && '-translate-y-[6px] -rotate-45',
              )}
            />
          </span>
        </button>
      </Container>

      {open ? (
        <div className="border-border border-t bg-white md:hidden">
          <Container className="py-6">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-body text-charbon hover:bg-off block rounded-md px-3 py-3 text-base font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid gap-3">
              <Link
                href="/ouvrir-une-forge"
                onClick={() => setOpen(false)}
                className="border-orange text-orange inline-flex items-center justify-center rounded-md border px-5 py-3 font-sans text-sm font-semibold"
              >
                Ouvrir une Forge
              </Link>
              <Link
                href="/candidater"
                onClick={() => setOpen(false)}
                className="bg-orange shadow-soft inline-flex items-center justify-center rounded-md px-5 py-3 font-sans text-sm font-semibold text-white"
              >
                Postuler à une Forge
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
