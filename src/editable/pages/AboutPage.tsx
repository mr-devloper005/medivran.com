import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  const brandName = process.env.NEXT_PUBLIC_SITE_NAME || SITE_CONFIG.name
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="bg-[var(--slot4-accent)] text-white">
          <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <p className="text-xs font-black uppercase tracking-[0.28em]">{pagesContent.about.badge}</p>
            <h1 className="editorial-serif mt-5 max-w-4xl text-5xl font-black leading-tight sm:text-7xl">{pagesContent.about.title}</h1>
          </div>
        </section>

        <section className="mx-auto grid max-w-[var(--editable-container)] bg-white shadow-[0_24px_70px_rgba(39,49,44,.08)] lg:grid-cols-[1.35fr_0.65fr]">
          <article className="border-b border-black/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:border-black/10 lg:p-16">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">About {brandName}</p>
            <p className="editorial-serif mt-6 text-3xl font-bold leading-[1.25] sm:text-4xl">{pagesContent.about.description}</p>
            <div className="article-content mt-10 space-y-6">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="grid bg-[var(--slot4-panel-bg)] editable-stagger">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} className="border-b border-black/10 p-7 last:border-b-0 sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">0{index + 1}</p>
                <h2 className="editorial-serif mt-4 text-3xl font-black leading-tight">{value.title}</h2>
                <p className="mt-4 text-sm leading-7 text-black/65">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>

        <section className="bg-[var(--slot4-dark-bg)] text-white">
          <div className="mx-auto flex max-w-[var(--editable-container)] flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <h2 className="editorial-serif max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Explore the live media distribution archive.</h2>
            <Link href="/search" className="inline-flex w-fit rounded-full bg-[var(--slot4-gold)] px-6 py-4 text-xs font-black uppercase tracking-[0.16em]">Explore the archive</Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
