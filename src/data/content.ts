import { blogPosts } from '@/data/blogPosts'

export const profile = {
  name: 'Aryan Rana',
  brand: '7Frames Aryan',
  role: 'UI/UX Designer',
  location: 'Himachal Pradesh, India',
  email: 'aryanrana762@gmail.com',
  portrait: '/images/bitmoji.png',
} as const

export const hero = {
  greeting: "Hi, i'm",
  name: 'aryan',
  tagline: 'a ui/ux designer crafting interfaces that people actually enjoy using',
} as const

/**
 * Primary destinations for the BubbleMenu overlay and their individual tilt.
 */
export const bubbleNavItems = [
  {
    label: 'home',
    href: '/#home',
    rotation: -8,
  },
  {
    label: 'work',
    href: '/#work',
    rotation: 8,
  },
  {
    label: 'blogs',
    href: '/blog',
    rotation: 8,
  },
  {
    label: 'contact',
    href: '/#contact',
    rotation: -8,
  },
] as const

/* ============================================================================
   WORK
   ========================================================================= */

export type CategoryId = 'design' | 'plugins' | 'apps'
export type WorkVectorName =
  | 'compmagnet'
  | 'font-manager'
  | 'select-to-replace'
  | 'scale-mate'
  | 'comment-deck'
  | 'bunksmart'

interface Category {
  id: CategoryId
  label: string
}

/** Order here is the order of the filter chips. */
export const categories: Category[] = [
  { id: 'design', label: 'Case Studies & Design' },
  { id: 'plugins', label: 'Figma Plugins' },
  { id: 'apps', label: 'Apps' },
]

interface WorkItemBase {
  id: string
  name: string
  /** Shown under the title. */
  meta: string
  category: CategoryId
  /** Internal portfolio detail page; kept separate from external project URLs. */
  caseStudyId?: string
  href?: string
}

export type WorkItem = WorkItemBase &
  (
    | { cover: string }
    | { vector: WorkVectorName }
    | {
        status: 'launching-soon'
        caseStudyId?: never
        href?: never
      }
  )

export const work: WorkItem[] = [
  // --- Featured work --------------------------------------------------------
  {
    id: 'osmfx-mods',
    name: 'OsmFX Mods',
    meta: 'Web Design / FiveM Marketplace',
    category: 'design',
    cover: '/work/osmfx-mods/cover.webp',
    href: 'https://www.osmfxmods.com/',
  },
  {
    id: 'grozify-app',
    name: 'Grozify App',
    meta: 'UI Design / Mobile App',
    category: 'design',
    cover: '/work/grozify-app/cover.jpg',
    href: 'https://www.behance.net/gallery/239127575/Grozify-app-Your-best-grocery-app',
  },

  // --- Figma plugins --------------------------------------------------------
  {
    id: 'compmagnet',
    name: 'CompMagnet',
    meta: 'Instant component organization',
    category: 'plugins',
    vector: 'compmagnet',
    href: 'https://www.figma.com/community/plugin/1587789564837977428/compmagnet',
  },
  {
    id: 'font-manager',
    name: 'Font Manager',
    meta: 'Find & fix missing fonts',
    category: 'plugins',
    vector: 'font-manager',
    href: 'https://www.figma.com/community/plugin/1665274728752886163/font-manager',
  },
  {
    id: 'select-to-replace',
    name: 'Select to Replace',
    meta: 'Swap selected layers in place',
    category: 'plugins',
    vector: 'select-to-replace',
    href: 'https://www.figma.com/community/plugin/1644335723084029434/select-to-replace',
  },
  {
    id: 'scale-mate',
    name: 'Scale Mate',
    meta: 'Scale layers without breaking them',
    category: 'plugins',
    vector: 'scale-mate',
    href: 'https://www.figma.com/community/plugin/1603712698507247421/scale-mate',
  },
  {
    id: 'comment-deck',
    name: 'Get Comments',
    meta: 'Fetch, filter & export Figma comments',
    category: 'plugins',
    vector: 'comment-deck',
    href: 'https://www.figma.com/community/plugin/1665269721936256397/get-comments',
  },

  // --- Case studies & design ------------------------------------------------
  {
    id: 'amizone-redesign',
    name: 'AMIZONE Mobile Redesign',
    meta: 'UX Research / Mobile App',
    category: 'design',
    cover: '/work/amizone-redesign/cover/cover.png',
    caseStudyId: 'amizone-redesign',
  },
  {
    id: 'financing-app-payment-flow',
    name: 'Financing App Payment Flow',
    meta: 'UX Research / App Design',
    category: 'design',
    cover: '/work/financing-app-payment-flow/cover/cover.png',
    caseStudyId: 'financing-app-payment-flow',
  },
  {
    id: 'locked-in',
    name: 'Locked-in',
    meta: 'UI/UX Design',
    category: 'design',
    cover: '/work/locked-in/cover.png',
    href: 'https://www.behance.net/gallery/235841675/Locked-in',
  },
  {
    id: 'anonymous-confession-app',
    name: 'Anonymous Confession App',
    meta: 'UX Design / Mobile App',
    category: 'design',
    cover: '/work/anonymous-confession-app/cover.png',
    href: 'https://www.behance.net/gallery/235779281/Anonymous-Confession-App',
  },
  {
    id: 'gfm-expedition-redesign',
    name: 'GFM Expedition Redesign',
    meta: 'Web Design / Redesign',
    category: 'design',
    cover: '/work/gfm-expedition-redesign/cover.png',
    href: 'https://www.behance.net/gallery/235658919/GFM-Expedition-Redesign',
  },
  {
    id: 'lynnettes-kitchen',
    name: 'Lynnettes Kitchen',
    meta: 'Branding / Web Design',
    category: 'design',
    cover: '/work/lynnettes-kitchen/cover.png',
    href: 'https://www.behance.net/gallery/235655707/Lynnettes-Kitchen',
  },

  // --- Apps -----------------------------------------------------------------
  {
    id: 'bunksmart',
    name: 'BunkSmart',
    meta: 'Attendance App / Google Play',
    category: 'apps',
    vector: 'bunksmart',
    href: 'https://play.google.com/store/apps/details?id=com.apppoetry.android.bunksmart',
  },
]

/* ============================================================================
   ABOUT · SKILLS · BLOG · CONTACT · FOOTER
   ========================================================================= */

export const about = {
  title: 'About Me',
  description:
    "I'm Aryan Rana, a UI/UX designer passionate about creating beautiful, functional, and user-centered digital experiences. Beyond design, I build Figma plugins, shoot photography under 7Frames, study films, play games, and explore technology and AI. Based in Himachal Pradesh, India.",
} as const

export const skillsIntro = {
  eyebrow: 'Capabilities',
  title: 'Core Design Skills',
  description:
    'I excel in essential design skills, creating visually stunning and functional digital experiences. From UI design to UX research, my passion is to craft effective and memorable digital solutions.',
} as const

export type SkillIcon =
  | 'neural'
  | 'circle'
  | 'hexagon'
  | 'triangle'
  | 'diamond'
  | 'rings'
  | 'bars'

interface Skill {
  name: string
  icon: SkillIcon
}

/** Four in the first row, three inset below — matches the Figma stagger. */
export const skills: Skill[] = [
  { name: 'AI Integration', icon: 'neural' },
  { name: 'UI Design', icon: 'circle' },
  { name: 'User Research', icon: 'hexagon' },
  { name: 'Prototyping', icon: 'triangle' },
  { name: 'Figma', icon: 'diamond' },
  { name: 'Design Systems', icon: 'rings' },
  { name: 'UX Research', icon: 'bars' },
]

/** Newest first. */
export const sortedPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))

export const getPost = (slug: string) => blogPosts.find((post) => post.slug === slug)

export type HomePostBadge = 'Latest' | 'Most read' | 'Recent'

/** How many posts the homepage rail shows. */
const HOME_POST_COUNT = 3

/**
 * The homepage rail: the newest post first, then whatever is marked as
 * most-read, topped up with the next newest if there are not enough.
 *
 * "Most read" comes from the hand-set `featured` flag, not from traffic — the
 * site is static and has no analytics backend to sort on. Swapping in real
 * numbers later only means changing how this list is ordered.
 */
export const homePosts: { post: (typeof sortedPosts)[number]; badge: HomePostBadge }[] = (() => {
  const picks: { post: (typeof sortedPosts)[number]; badge: HomePostBadge }[] = []
  const taken = new Set<string>()

  const add = (post: (typeof sortedPosts)[number] | undefined, badge: HomePostBadge) => {
    if (!post || taken.has(post.slug) || picks.length >= HOME_POST_COUNT) return
    taken.add(post.slug)
    picks.push({ post, badge })
  }

  add(sortedPosts[0], 'Latest')
  for (const post of sortedPosts) if (post.featured) add(post, 'Most read')
  for (const post of sortedPosts) add(post, 'Recent')

  return picks
})()

export const formatPostDate = (iso: string): string =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })

export const contact = {
  title: 'Contact Me',
  description:
    "Let's build something beautiful together. Reach out for collaborations, freelance work, or just to say hello.",
} as const

/**
 * The Figma mock showed placeholder details (hello@aryanrana.com, @aryan_rana).
 * These are Aryan's real handles.
 */
export const contactChannels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: '/icons/mail.svg' },
  {
    label: 'Instagram',
    value: '@7Frames_Aryan',
    href: 'https://www.instagram.com/7Frames_Aryan/',
    icon: '/icons/instagram.svg',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/7framesaryan',
    href: 'https://www.linkedin.com/in/7framesaryan/',
    icon: '/icons/linkedin.svg',
  },
]

export const footerNav = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/#work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
]

/** Short list of disciplines for the footer column. */
export const workCategoriesSummary = [
  'UI / UX Design',
  'UX Research',
  'Figma Plugins',
  'Photography',
]

export const footerSocials = [
  {
    label: 'Dribbble',
    href: 'https://dribbble.com/aryanrana007',
    icon: '/icons/dribbble.svg',
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/wearetheone',
    icon: '/icons/behance.svg',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@7frames_aryan',
    icon: '/icons/youtube.svg',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/7framesaryan/',
    icon: '/icons/linkedin.svg',
  },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/user/31iv3nhnffqhbim7dyylpnprrexm?si=9fbd475451f14688',
    icon: '/icons/spotify.svg',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/7Frames_Aryan/',
    icon: '/icons/instagram.svg',
  },
  {
    label: 'Figma Community',
    href: 'https://www.figma.com/@7frames_aryan',
    icon: '/icons/figma.svg',
  },
]

/* ============================================================================
   MARQUEE
   ========================================================================= */

/** Own screens rather than hotlinked assets — nothing here depends on a third party. */
export const marqueeImages: string[] = [
  '/work/amizone-redesign/cover/cover.png',
  '/work/figma-plugins/compmagnet.png',
  '/work/financing-app-payment-flow/final-screens/final-screens1.png',
  '/work/locked-in/cover.png',
  '/work/amizone-redesign/final-screens/dashboard.png',
  '/work/figma-plugins/font-manager.png',
  '/work/gfm-expedition-redesign/cover.png',
  '/work/amizone-redesign/new-designs/login_new.png',
  '/work/lynnettes-kitchen/cover.png',
  '/work/figma-plugins/comment-deck.png',
  '/work/financing-app-payment-flow/final-screens/final-screens2.png',
  '/work/anonymous-confession-app/cover.png',
  '/work/amizone-redesign/final-screens/attendance.png',
  '/work/grozify-app/cover.jpg',
  '/work/financing-app-payment-flow/cover/cover.png',
  '/work/amizone-redesign/final-screens/other-info.png',
  '/work/figma-plugins/cover.png',
  '/work/financing-app-payment-flow/final-screens/plan-details.png',
]
