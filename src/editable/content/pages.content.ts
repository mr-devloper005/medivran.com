import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution, releases, and public updates',
      description: 'Explore press releases, media coverage, newsroom updates, campaign notes, and dynamic categories through a focused distribution experience.',
      openGraphTitle: 'Media distribution, releases, and public updates',
      openGraphDescription: 'Discover media releases, announcements, and coverage through a calmer newsroom-style experience.',
      keywords: ['media distribution', 'press releases', 'newsroom updates', 'media coverage'],
    },
    hero: {
      badge: 'Latest media and newsroom updates',
      title: ['Distribute every media update with clarity and reach.'],
      description: 'Browse real media distribution posts, company announcements, coverage notes, and public updates across categories managed from the master panel.',
      primaryCta: { label: 'Browse latest updates', href: '/updates' },
      secondaryCta: { label: 'Open News Media', href: '/updates?category=news-media' },
      searchPlaceholder: 'Search news, companies, categories, and updates',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
      featureCardDescription: 'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for reading, browsing, and connecting different kinds of content.',
      paragraphs: [
        'This site brings together article-style reading, visual browsing, and structured discovery so visitors can move naturally between different content types.',
        'Instead of separating stories, visuals, and supporting resources into disconnected surfaces, the platform keeps them connected in one place with consistent navigation and easier exploration.',
        'Whether someone starts with a story, an image-led post, a listing, or a resource page, they can keep discovering related content without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with stronger emphasis on stories and imagery.',
        'Connected sections for articles, visuals, listings, and supporting resources.',
        'Cleaner browsing rhythm designed to make exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore articles, visuals, and resources through one connected experience.',
      description: 'Move between articles, image-led posts, listings, and resources through one clearer and more connected visual system.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A focused distribution desk for modern media updates.',
    description: `${slot4BrandConfig.siteName} helps teams turn releases, announcements, and coverage into a readable public archive that visitors can trust and search quickly.`,
    paragraphs: [
      'Media distribution works best when information is structured, timely, and easy to scan. This website keeps headlines, summaries, categories, and detail pages connected so each update has a clear path from publication to discovery.',
      'Visitors can move from a homepage highlight into the archive, narrow results by task or category, and open a detail page without losing the editorial rhythm of the site.',
      'The editable interface keeps the public layer polished while leaving backend publishing, master-panel data, and route behavior intact.',
    ],
    values: [
      {
        title: 'Release-ready presentation',
        description: 'Cards and detail pages prioritize headlines, categories, summaries, and source context so updates feel ready for public readers.',
      },
      {
        title: 'Real archive discovery',
        description: 'Search and archive pages focus on live posts from the active feed instead of decorative placeholder content.',
      },
      {
        title: 'Calm newsroom layout',
        description: 'A restrained green and gold visual system keeps repeated browsing comfortable and professional.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Send releases, corrections, and distribution requests.',
    description: 'Tell the media desk what needs to be published, updated, syndicated, or clarified. The form is built for release intake, newsroom coordination, partnership requests, and support.',
    formTitle: 'Contact the media desk',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search media distribution posts, releases, topics, categories, and public updates across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find releases, coverage, and media updates faster.',
      description: 'Use keywords, categories, and content types to discover live posts from every active distribution section.',
      placeholder: 'Search releases, sources, categories, or headlines',
    },
    resultsTitle: 'Latest media distribution results',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create media updates.',
      description: 'Use your account to open the publishing workspace and prepare posts for the active media distribution sections.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a release-ready media post.',
      description: 'Choose the content type, add headline, category, source, summary, and body copy, then save a clean draft for distribution workflows.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to the media desk.',
      description: 'Login to continue browsing, preparing releases, and creating distribution-ready content from your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account for media distribution.',
      description: 'Create an account to access the publishing workspace, save release details, and submit content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
