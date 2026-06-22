'use client'

import Link from 'next/link'
import { ArrowRight, Mail, Radio, Send } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()
  const brandName = process.env.NEXT_PUBLIC_SITE_NAME || SITE_CONFIG.name

  return (
    <footer className="bg-[#f0f2ea] text-[var(--slot4-page-text)]">
      <section className="bg-[var(--slot4-accent)] text-white">
        <div className="mx-auto grid max-w-[1160px] gap-5 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="editable-reveal">
            <p className="text-xs font-black uppercase tracking-[.22em] text-white/75">Stay tuned</p>
            <h2 className="editorial-serif mt-2 text-3xl font-black leading-tight sm:text-4xl">Media alerts, coverage notes, and distribution updates.</h2>
          </div>
          <form action="/signup" className="flex self-center rounded-full border border-white/80 bg-white/10 p-1 backdrop-blur">
            <Mail className="ml-4 mt-3.5 h-4 w-4 text-white/75" />
            <input name="email" type="email" placeholder="Enter your email" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm font-bold outline-none placeholder:text-white/70" />
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 text-xs font-black uppercase tracking-[.12em] text-[var(--slot4-accent)]">Submit <Send className="h-3.5 w-3.5" /></button>
          </form>
        </div>
      </section>

      <div className="mx-auto max-w-[1160px] px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.7fr_.7fr_.85fr]">
          <div>
            <Link href="/" className="editorial-serif inline-flex items-center gap-3 text-4xl font-black leading-none text-[var(--slot4-accent)] sm:text-5xl">
              <img src="/favicon.png" alt="Logo" className="h-11 w-11 shrink-0" />
              <span>{brandName}</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-black/58">{globalContent.footer?.description || SITE_CONFIG.description}</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[.12em] text-[var(--slot4-accent)] shadow-sm"><Radio className="h-4 w-4" /> Media Distribution</div>
          </div>
          <div>
            <h3 className="text-base font-black uppercase">Explore</h3>
            <div className="mt-4 grid gap-3">
              <Link href={SITE_CONFIG.taskViews.mediaDistribution || '/media-distribution'} className="group inline-flex items-center justify-between text-sm text-black/58 hover:text-[var(--slot4-accent)]">Media Archive<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/search" className="group inline-flex items-center justify-between text-sm text-black/58 hover:text-[var(--slot4-accent)]">Search<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/create" className="group inline-flex items-center justify-between text-sm text-black/58 hover:text-[var(--slot4-accent)]">Create<ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div>
            <h3 className="text-base font-black uppercase">Publication</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/about" className="text-sm text-black/58 hover:text-[var(--slot4-accent)]">About</Link>
              <Link href="/contact" className="text-sm text-black/58 hover:text-[var(--slot4-accent)]">Contact</Link>
              {session ? (
                <>
                  <Link href="/create" className="text-sm text-black/58 hover:text-[var(--slot4-accent)]">Create as {session.name}</Link>
                  <button onClick={logout} className="text-left text-sm text-black/58 hover:text-[var(--slot4-accent)]">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-sm text-black/58 hover:text-[var(--slot4-accent)]">Log in</Link>
                  <Link href="/signup" className="text-sm text-black/58 hover:text-[var(--slot4-accent)]">Sign up</Link>
                </>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-base font-black uppercase">Connect</h3>
            <p className="mt-4 text-sm leading-7 text-black/58">Send releases, coverage corrections, syndication questions, and campaign distribution requests through the contact desk.</p>
            <Link href="/contact" className="mt-5 inline-flex rounded-full bg-[var(--slot4-gold)] px-5 py-3 text-xs font-black uppercase tracking-[.12em] text-white">Get in touch</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-black/10 bg-white px-4 py-5 text-center text-[10px] font-black uppercase tracking-[.16em] text-black/42">Copyright {year} {brandName}. Media distribution and public information.</div>
    </footer>
  )
}
