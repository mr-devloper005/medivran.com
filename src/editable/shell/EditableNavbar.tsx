'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LogOut, Menu, PenLine, Search, UserRound, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const brandName = process.env.NEXT_PUBLIC_SITE_NAME || SITE_CONFIG.name
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Media Distribution', href: SITE_CONFIG.taskViews.mediaDistribution || '/media-distribution' },
    { label: 'Search', href: '/search' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/94 text-[var(--slot4-page-text)] shadow-[0_1px_18px_rgba(39,49,44,.08)] backdrop-blur transition-all duration-300">
      <div className="reading-progress" />
      <div className="mx-auto grid min-h-[76px] max-w-[1160px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--slot4-accent)] text-white shadow-[0_8px_24px_rgba(152,201,79,.32)]">
              <img src="/favicon.png" alt="Logo" className="h-11 w-11" />
            </span>
            <span className="hidden sm:block">
              <span className="editorial-serif block text-2xl font-black leading-none text-[var(--slot4-accent)]">{brandName}</span>
              <span className="block text-[10px] font-black uppercase tracking-[.18em] text-black/45"></span>
            </span>
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="editable-nav-link text-xs font-black uppercase tracking-[.08em] transition hover:text-[var(--slot4-accent)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          {session ? (
            <div className="hidden items-center gap-2 sm:flex">
              <Link href="/create" className="inline-flex items-center gap-2 rounded-full bg-[var(--slot4-accent)] px-4 py-2.5 text-xs font-black uppercase tracking-[.08em] text-white shadow-sm"><UserRound className="h-4 w-4" /> {session.name}</Link>
              <button type="button" onClick={logout} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black/65 transition hover:border-[var(--slot4-gold)] hover:text-[var(--slot4-gold)]" aria-label="Logout"><LogOut className="h-4 w-4" /></button>
            </div>
          ) : <Link href="/login" className="hidden text-xs font-black uppercase tracking-[.12em] transition hover:text-[var(--slot4-accent)] sm:block">Log in</Link>}
          <Link href={session ? '/create' : '/signup'} className="rounded-full bg-[var(--slot4-gold)] px-4 py-3 text-[10px] font-black uppercase tracking-[.12em] text-white shadow-[0_12px_26px_rgba(223,169,52,.22)] transition hover:-translate-y-0.5 hover:bg-[var(--slot4-dark-bg)] sm:px-6">
            {session ? 'Create' : 'Sign up'}
          </Link>
        </div>
      </div>

      <div className="border-t border-black/5 bg-[var(--slot4-panel-bg)]">
        <div className="mx-auto flex min-h-[44px] max-w-[1160px] items-center justify-end px-4 sm:px-6 lg:px-8">
          <form action="/search" className="flex min-w-0 flex-1 items-center rounded-full bg-white/85 ring-1 ring-black/10 sm:max-w-[340px]">
            <Search className="ml-4 h-4 w-4 text-black/45" />
            <input name="q" type="search" placeholder="Search media releases" className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-xs font-bold outline-none placeholder:text-black/38" />
          </form>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/10 bg-white px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {[...navItems, ...(session ? [{ label: `Account: ${session.name}`, href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-xl bg-[var(--slot4-panel-bg)] px-4 py-3 text-sm font-black uppercase tracking-[.08em]">{item.label}</Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-xl bg-[var(--slot4-dark-bg)] px-4 py-3 text-left text-sm font-black uppercase tracking-[.08em] text-white">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
