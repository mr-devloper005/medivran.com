import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] overflow-hidden rounded-md bg-white shadow-[0_24px_70px_rgba(39,49,44,.08)] lg:grid-cols-[1.02fr_0.98fr]">
          <div className="flex flex-col justify-center border-b border-black/10 bg-[var(--slot4-accent)] p-8 text-white sm:p-12 lg:border-b-0 lg:border-r lg:border-black/10 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.28em]">{pagesContent.auth.login.badge}</p>
            <h1 className="editorial-serif mt-5 max-w-xl text-5xl font-black leading-tight sm:text-7xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-sm font-semibold leading-8 text-white/75">{pagesContent.auth.login.description}</p>
            <div className="mt-8 grid gap-3 text-sm font-semibold text-white/78">
              <span className="rounded-full bg-white/12 px-4 py-3">Access the create workspace after login.</span>
              <span className="rounded-full bg-white/12 px-4 py-3">Navbar changes to your name and logout button.</span>
            </div>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Member access</p>
            <h2 className="editorial-serif mt-3 text-4xl font-black">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 border-t border-black/10 pt-5 text-sm text-black/65">New here? <Link href="/signup" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
