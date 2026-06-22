import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#f5f6f0',
  '--slot4-page-text': '#27312c',
  '--slot4-panel-bg': '#eef2e7',
  '--slot4-surface-bg': '#fffefa',
  '--slot4-muted-text': '#647066',
  '--slot4-soft-muted-text': '#8a9389',
  '--slot4-accent': '#86bf47',
  '--slot4-accent-fill': '#98c94f',
  '--slot4-accent-soft': '#e7f2d3',
  '--slot4-gold': '#dfa934',
  '--slot4-gold-soft': '#f5e6bd',
  '--slot4-dark-bg': '#1f2c24',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#e7eadf',
  '--slot4-cream': '#f5f6f0',
  '--slot4-warm': '#fffdfa',
  '--slot4-lavender': '#98c94f',
  '--slot4-gray': '#edf0e8',
  '--slot4-body-gradient': 'linear-gradient(180deg, #f8faf5 0%, #fffefa 48%, #eef4e5 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-black/15',
  darkBorder: 'border-white/20',
  shadow: 'shadow-[0_10px_30px_rgba(17,17,17,0.08)]',
  shadowStrong: 'shadow-[0_24px_70px_rgba(17,17,17,0.18)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.78))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[1160px] px-4 sm:px-6 lg:px-8',
    sectionY: 'py-12 sm:py-16 lg:py-20',
  },
  layout: {
    safeGrid: 'grid gap-px bg-black/15 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start',
    rail: 'flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[230px] shrink-0 snap-start sm:w-[260px]',
  },
  type: {
    eyebrow: 'text-[11px] font-black uppercase tracking-[0.2em]',
    heroTitle: 'text-4xl font-black leading-[0.98] sm:text-6xl lg:text-[4.9rem]',
    sectionTitle: 'text-3xl font-black leading-none sm:text-4xl',
    body: 'text-base leading-8',
  },
  surface: {
    card: `border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    soft: `border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `${editablePalette.darkBg} ${editablePalette.darkText}`,
  },
  button: {
    primary: `inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-dark-bg)] px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--slot4-gold)]`,
    secondary: `inline-flex items-center justify-center gap-2 rounded-full border border-black/20 bg-white px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:-translate-y-0.5 hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)]`,
    accent: `inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-gold)] px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--slot4-dark-bg)]`,
  },
  media: {
    frame: `relative overflow-hidden ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(35,58,37,0.14)]',
    fade: 'transition duration-300 hover:opacity-75',
  },
} as const

export const aiLayoutRules = [
  'All visible layout decisions belong inside src/editable; keep data, SEO, API, and route logic untouched.',
  'Use a publication-style white masthead, green/gold calls to action, calm archive spacing, and media-distribution content.',
  'Keep dynamic post fetching intact and never replace backend posts with mock arrays.',
  'Use postHref() for all post links so route aliases and task-specific detail pages remain functional.',
  'Prioritize readable desktop and mobile layouts with broad story columns and a focused long-form article measure.',
  'Branding must remain dynamic from SITE_CONFIG; never hardcode a reference publication name or logo.',
] as const
