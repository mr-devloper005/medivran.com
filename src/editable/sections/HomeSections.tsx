import Link from 'next/link'
import { ArrowRight, BarChart3, FileText, Radio, Search, Send, Sparkles } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { CompactIndexCard, getEditableExcerpt, getEditablePostImage, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const heroImage = '/favicon.png?height=900&width=1400'
  const brandName = process.env.NEXT_PUBLIC_SITE_NAME || SITE_CONFIG.name
  const heroTitle = pagesContent.home.hero.title.join(' ') || `${brandName} media distribution desk`
  const chips = ['Press releases', 'Newswire coverage', 'Campaign distribution']

  return (
    <section className="relative overflow-hidden bg-[var(--slot4-dark-bg)] text-white">
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,44,36,.92),rgba(31,44,36,.62),rgba(31,44,36,.2))]" />
      </div>
      <div className={`${dc.shell.section} relative grid min-h-[610px] items-center py-14 lg:grid-cols-[1fr_.7fr]`}>
        <div className="editable-reveal">
          <p className="text-sm font-black uppercase tracking-[.18em] text-[var(--slot4-accent-soft)]">{pagesContent.home.hero.badge}</p>
          <h1 className="editorial-serif mt-5 max-w-4xl text-5xl font-black leading-[1.02] sm:text-7xl">{heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-white/78">{pagesContent.home.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryRoute} className={dc.button.accent}>Browse media archive <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/50 px-7 py-3.5 text-xs font-black uppercase tracking-[.12em] text-white transition hover:bg-white hover:text-[var(--slot4-dark-bg)]">Send a release</Link>
          </div>
        </div>
        <div className="editable-stagger mt-10 grid gap-4 lg:mt-0">
          {chips.map((chip, index) => (
            <Link key={chip} href={index === 0 ? primaryRoute : '/search'} className="group rounded-md bg-black/28 p-5 ring-1 ring-white/15 backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-[var(--slot4-dark-bg)]">
              <p className="text-[10px] font-black uppercase tracking-[.18em] text-[var(--slot4-accent-soft)] group-hover:text-[var(--slot4-accent)]">0{index + 1}</p>
              <h2 className="mt-3 text-2xl font-black">{chip}</h2>
              <p className="mt-2 text-sm leading-6 opacity-75">Coordinate announcements, source context, and audience-ready media summaries.</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 8)
  if (!railPosts.length) return null
  return (
    <section className="bg-[var(--slot4-page-bg)]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="mx-auto max-w-3xl text-center editable-reveal">
          <p className="text-xs font-black uppercase tracking-[.2em] text-[var(--slot4-accent)]">Current distribution</p>
          <h2 className="editorial-serif mt-3 text-4xl font-black leading-tight sm:text-5xl">Latest media updates</h2>
          <span className="mx-auto mt-5 block h-0.5 w-12 bg-[var(--slot4-accent)]" />
        </div>
        <div className={`${dc.layout.rail} editable-stagger mt-10`}>
          {railPosts.map((post, index) => <RailPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const feature = posts[8] || posts[0]
  const cards = posts.slice(1, 7)
  if (!feature) return null
  const featureImage = getEditablePostImage(feature)
  const missionImage = '/favicon.png'
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} py-14 sm:py-20`}>
        <div className="grid overflow-hidden rounded-md shadow-[0_28px_80px_rgba(39,49,44,.1)] lg:grid-cols-2">
          <div className="flex min-h-[360px] items-center justify-center bg-[#d9ddd6] p-12 editable-parallax">
            <img src={missionImage} alt="" className="h-32 w-32 object-contain sm:h-44 sm:w-44" />
          </div>
          <div className="flex flex-col justify-center bg-[var(--slot4-accent)] p-8 text-white sm:p-12">
            <p className="text-xs font-black uppercase tracking-[.2em] text-white/78">Our mission</p>
            <h2 className="editorial-serif mt-3 text-4xl font-black leading-tight sm:text-5xl">Move every announcement with clarity, context, and reach.</h2>
            <p className="mt-5 text-sm font-semibold leading-7 text-white/78">The homepage now works like a calm newsroom front page: focused copy, connected paths, and scannable media distribution cards.</p>
            <Link href="/about" className="mt-8 inline-flex w-fit rounded-full bg-white px-7 py-3 text-xs font-black uppercase tracking-[.12em] text-[var(--slot4-accent)]">More about us</Link>
          </div>
        </div>

        <div className="mt-16 grid gap-4 editable-stagger sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((post, index) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group rounded-md border border-black/10 bg-[var(--slot4-panel-bg)] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_48px_rgba(39,49,44,.12)]">
              <p className="flex items-center justify-between text-[10px] font-black uppercase tracking-[.16em] text-[var(--slot4-accent)]"><span>Media brief</span><span>{String(index + 1).padStart(2, '0')}</span></p>
              <h3 className="mt-4 text-2xl font-black leading-tight">{post.title}</h3>
              <p className="mt-4 line-clamp-4 text-sm leading-7 text-black/58">{getEditableExcerpt(post, 150)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = (collected.length ? collected : posts).slice(0, 7)
  if (!source.length) return null
  return (
    <section className="bg-[var(--slot4-surface-bg)]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <aside className="rounded-md bg-[var(--slot4-dark-bg)] p-8 text-white">
            <p className="text-xs font-black uppercase tracking-[.2em] text-[var(--slot4-accent-soft)]">How we work</p>
            <h2 className="editorial-serif mt-3 text-4xl font-black leading-tight">Distribution in four clean steps.</h2>
            <div className="mt-8 grid gap-5">
              {[
                ['Intake', 'Capture the release, source, category, and audience.'],
                ['Package', 'Shape the headline, summary, supporting body, and media.'],
                ['Publish', 'Route the update into the active media distribution archive.'],
                ['Discover', 'Keep every post searchable and connected to related coverage.'],
              ].map(([title, body], index) => (
                <div key={title} className="grid grid-cols-[42px_1fr] gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--slot4-accent)] text-sm font-black">0{index + 1}</span>
                  <div>
                    <h3 className="font-black">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/68">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
          <div>
            <div className="flex flex-wrap items-end justify-between gap-5 border-b border-black/10 pb-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[.2em] text-[var(--slot4-accent)]">The briefing</p>
                <h2 className="editorial-serif mt-2 text-4xl font-black">More from the desk</h2>
              </div>
              <Link href={primaryRoute} className="hidden text-xs font-black uppercase tracking-[.14em] text-[var(--slot4-gold)] sm:inline-flex">View archive <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </div>
            <div className="mt-2">
              {source.map((post, index) => <CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 rounded-md bg-[var(--slot4-accent)] p-6 text-white sm:grid-cols-3 sm:p-9">
          {[
            [BarChart3, '100%', 'Published releases stay searchable across the active archive.'],
            [Radio, '24/7', 'Media distribution pages refresh with live backend content.'],
            [FileText, `${source.length}+`, 'Current real posts are ready for visitors to scan.'],
          ].map(([Icon, value, label]) => (
            <div key={String(value)} className="text-center">
              <Icon className="mx-auto h-6 w-6 text-white/80" />
              <p className="editorial-serif mt-3 text-5xl font-black">{value as string}</p>
              <p className="mx-auto mt-3 max-w-56 text-sm font-semibold leading-6 text-white/78">{label as string}</p>
            </div>
          ))}
        </div>

        <form action="/search" className="mt-14 grid rounded-full border border-black/10 bg-white p-2 shadow-sm sm:grid-cols-[1fr_auto] sm:items-center">
          <label className="flex min-w-0 items-center">
            <Search className="ml-4 h-4 w-4 text-black/42" />
            <input name="q" placeholder={`Search ${taskLabel(primaryTask).toLowerCase()} posts`} className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm font-bold outline-none placeholder:text-black/35" />
          </label>
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-gold)] px-6 py-3 text-xs font-black uppercase tracking-[.12em] text-white">Search <Search className="h-4 w-4" /></button>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-[var(--slot4-dark-bg)] text-white">
      <div className={`${dc.shell.section} grid gap-8 py-14 sm:py-20 lg:grid-cols-[1fr_.8fr] lg:items-center`}>
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-[var(--slot4-accent-soft)]">Start distributing</p>
          <h2 className="editorial-serif mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Make every media update easier to publish, find, and act on.</h2>
        </div>
        <div>
          <p className="text-base leading-8 text-white/68">Fresh releases, media coverage, newsroom perspectives, and public information live in one focused distribution experience.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className={dc.button.accent}>Send a tip <Send className="h-4 w-4" /></Link>
            <Link href="/signup" className="inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-xs font-black uppercase tracking-[.12em] text-white hover:bg-white hover:text-[var(--slot4-dark-bg)]">Join the desk <Sparkles className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
