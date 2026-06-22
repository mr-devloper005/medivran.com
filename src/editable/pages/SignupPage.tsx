import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] overflow-hidden rounded-md bg-white shadow-[0_24px_70px_rgba(39,49,44,.08)] lg:grid-cols-[0.98fr_1.02fr]">
          <div className="flex flex-col justify-center border-b border-black/10 p-7 sm:p-12 lg:border-b-0 lg:border-r lg:border-black/10 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Create account</p>
            <h1 className="editorial-serif mt-3 text-4xl font-black">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 border-t border-black/10 pt-5 text-sm text-black/65">Already have an account? <Link href="/login" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div className="flex flex-col justify-center bg-[var(--slot4-dark-bg)] p-8 text-white sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent-soft)]">{pagesContent.auth.signup.badge}</p>
            <h2 className="editorial-serif mt-5 max-w-xl text-5xl font-black leading-tight sm:text-7xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-sm font-semibold leading-8 text-white/68">{pagesContent.auth.signup.description}</p>
            <div className="mt-8 rounded-md border border-white/15 bg-white/8 p-5 text-sm leading-7 text-white/72">Use this access for draft intake, release preparation, category routing, and public archive publishing workflows.</div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
