type CaseStudyId = 'amizone-redesign' | 'financing-app-payment-flow'

type CaseStudyGalleryLayout = 'comparison' | 'grid'

export interface CaseStudyImage {
  src: string
  alt: string
  width: number
  height: number
  caption: string
}

export interface CaseStudyGallery {
  id: string
  heading: string
  description: string
  layout: CaseStudyGalleryLayout
  images: readonly CaseStudyImage[]
}

interface CaseStudyStat {
  metric: string
  label: string
  description: string
}

interface CaseStudy {
  id: CaseStudyId
  title: string
  subtitle: string
  description: string
  category: string
  timeline: string
  role: string
  tools: readonly string[]
  impact: readonly string[]
  /** Short label the UI can place above the preserved outcome claims. */
  evidenceLabel: string
  /** Disclosure that keeps original portfolio claims distinct from audited data. */
  evidenceNote: string
  hero: CaseStudyImage
  stats: readonly CaseStudyStat[]
  challenges: readonly string[]
  solutions: readonly string[]
  results: readonly string[]
  galleries: readonly CaseStudyGallery[]
}

const SOURCE_REPORTED_LABEL = 'Source-reported project outcomes'
const SOURCE_REPORTED_NOTE =
  'The outcome claims below are preserved from the original portfolio source and have not been independently verified.'

export const caseStudies: readonly CaseStudy[] = [
  {
    id: 'amizone-redesign',
    title: 'AMIZONE Mobile Redesign',
    subtitle: 'University Portal Redesign',
    description:
      'A comprehensive redesign of the AMIZONE university portal, transforming it into a modern, mobile-first platform that serves 50,000+ students across multiple campuses with improved accessibility and user experience.',
    category: 'Mobile App Redesign',
    timeline: '2 months',
    role: 'UI/UX Designer',
    tools: ['Figma', 'User Research', 'Prototyping', 'Usability Testing'],
    impact: [
      '100% mobile responsive design',
      '70% faster login process',
      '5x better information hierarchy',
    ],
    evidenceLabel: SOURCE_REPORTED_LABEL,
    evidenceNote: SOURCE_REPORTED_NOTE,
    hero: {
      src: '/work/amizone-redesign/cover/cover.png',
      alt: 'AMIZONE case study cover comparing the original portal login with the redesigned mobile login',
      width: 1536,
      height: 1024,
      caption: 'Original and redesigned AMIZONE login experiences.',
    },
    stats: [
      {
        metric: '50,000+',
        label: 'Students Impacted',
        description: 'Across multiple campuses',
      },
      {
        metric: '70%',
        label: 'Faster Login',
        description: 'Streamlined authentication process',
      },
      {
        metric: '100%',
        label: 'Mobile Responsive',
        description: 'Mobile-first design approach',
      },
    ],
    challenges: [
      'Outdated interface with poor mobile responsiveness',
      'Cluttered information architecture affecting usability',
      'Slow and cumbersome login process',
      'Lack of accessibility features for diverse student population',
    ],
    solutions: [
      'Implemented mobile-first design approach with responsive layouts',
      'Redesigned information architecture with clear hierarchy',
      'Streamlined login flow with modern authentication patterns',
      'Added accessibility features following WCAG guidelines',
      'Conducted extensive user research with students and faculty',
    ],
    results: [
      'Achieved 100% mobile responsiveness across all devices',
      'Reduced login time by 70% through streamlined process',
      'Improved information hierarchy by 5x for better navigation',
      'Enhanced accessibility for 50,000+ students',
      'Received positive feedback from university administration',
    ],
    galleries: [
      {
        id: 'login-redesign',
        heading: 'Login redesign',
        description:
          'A direct comparison of the original browser-based login and the redesigned mobile-first entry point.',
        layout: 'comparison',
        images: [
          {
            src: '/work/amizone-redesign/old-designs/login_old.jpg',
            alt: 'Original AMIZONE login in a mobile browser with portal links, credentials fields, CAPTCHA, and university branding',
            width: 540,
            height: 1170,
            caption: 'Original AMIZONE login experience.',
          },
          {
            src: '/work/amizone-redesign/new-designs/login_new.png',
            alt: 'Redesigned AMIZONE mobile login with focused credentials form, account recovery, and separate administrator entry',
            width: 489,
            height: 1000,
            caption: 'Redesigned mobile-first login concept.',
          },
        ],
      },
      {
        id: 'student-portal',
        heading: 'Student portal',
        description:
          'Core concepts for seeing attendance, following the daily class schedule, and reaching university services.',
        layout: 'grid',
        images: [
          {
            src: '/work/amizone-redesign/final-screens/dashboard.png',
            alt: 'AMIZONE mobile dashboard showing course attendance percentages and a dated class schedule',
            width: 418,
            height: 869,
            caption: 'Dashboard with attendance status and upcoming classes.',
          },
          {
            src: '/work/amizone-redesign/final-screens/attendance.png',
            alt: 'AMIZONE mobile class schedule listing course times, lecturers, rooms, and status indicators',
            width: 505,
            height: 843,
            caption: 'Detailed daily class schedule.',
          },
          {
            src: '/work/amizone-redesign/final-screens/other-info.png',
            alt: 'AMIZONE mobile services screen with library, email, virtual lab, and research repository access',
            width: 504,
            height: 839,
            caption: 'University services and account information.',
          },
        ],
      },
    ],
  },
  {
    id: 'financing-app-payment-flow',
    title: 'Financing App Payment Flow',
    subtitle: 'Payment Flow Redesign',
    description:
      'A complete redesign of the payment flow for a financing application, focusing on creating an intuitive, secure, and user-friendly experience that guides users through complex financial transactions with confidence.',
    category: 'Mobile App Design',
    timeline: 'Design Project',
    role: 'UI/UX Designer',
    tools: ['Figma', 'User Flow Mapping', 'Wireframing', 'Prototyping'],
    impact: [
      'Streamlined payment process',
      'Enhanced user confidence',
      'Modern financial UI',
    ],
    evidenceLabel: SOURCE_REPORTED_LABEL,
    evidenceNote: SOURCE_REPORTED_NOTE,
    hero: {
      src: '/work/financing-app-payment-flow/cover/cover.png',
      alt: 'Finance app case study cover showing a payment dashboard and payment-method selection on two mobile devices',
      width: 1280,
      height: 858,
      caption: 'Financing dashboard and payment-method concepts.',
    },
    stats: [
      {
        metric: '100%',
        label: 'User-Centered',
        description: 'Designed with user needs in mind',
      },
      {
        metric: 'Modern',
        label: 'Design Approach',
        description: 'Contemporary financial UI patterns',
      },
      {
        metric: 'Secure',
        label: 'Payment Flow',
        description: 'Trust-building design elements',
      },
    ],
    challenges: [
      'Complex payment flow causing user confusion',
      'Lack of visual feedback during payment process',
      'Building trust in financial transactions',
      'Balancing security with ease of use',
    ],
    solutions: [
      'Created clear step-by-step payment flow with progress indicators',
      'Implemented real-time visual feedback for user actions',
      'Designed trust-building elements with security badges',
      'Simplified form inputs while maintaining security',
      'Added clear error handling and validation messages',
    ],
    results: [
      'Successfully delivered intuitive payment flow',
      'Enhanced user confidence in financial transactions',
      'Created modern and trustworthy interface',
      'Demonstrated strong understanding of financial UX',
    ],
    galleries: [
      {
        id: 'wireframes',
        heading: 'Flow wireframes',
        description:
          'Early layouts establish the account overview and the path from choosing an amount through payment confirmation.',
        layout: 'comparison',
        images: [
          {
            src: '/work/financing-app-payment-flow/wireframes/wireframe-01.jpg',
            alt: 'Low-fidelity financing dashboard wireframe with plan balance, payoff progress, next payment, and alternate payment actions',
            width: 853,
            height: 1280,
            caption: 'Account overview and next-payment wireframe.',
          },
          {
            src: '/work/financing-app-payment-flow/wireframes/wireframe-02.jpg',
            alt: 'Four-step payment wireframe showing amount selection, payment method, confirmation, and payment success',
            width: 1280,
            height: 853,
            caption: 'End-to-end payment-flow wireframe.',
          },
        ],
      },
      {
        id: 'dashboard-system',
        heading: 'Dashboard system',
        description:
          'Reusable account and payment modules expose progress, the next due amount, and secondary repayment actions.',
        layout: 'grid',
        images: [
          {
            src: '/work/financing-app-payment-flow/final-screens/plan-details.png',
            alt: 'Finance plan overview card showing principal, provider, amount paid, and months completed',
            width: 419,
            height: 294,
            caption: 'Plan overview and repayment status.',
          },
          {
            src: '/work/financing-app-payment-flow/final-screens/progress-bar.png',
            alt: 'Payment progress indicator showing the amount paid and six of twelve months completed',
            width: 360,
            height: 71,
            caption: 'Repayment progress indicator.',
          },
          {
            src: '/work/financing-app-payment-flow/final-screens/next-payment.png',
            alt: 'Next-payment card showing amount due, due month, Pay Now, and Schedule actions',
            width: 416,
            height: 297,
            caption: 'Upcoming payment and scheduling actions.',
          },
          {
            src: '/work/financing-app-payment-flow/final-screens/others.png',
            alt: 'Secondary repayment controls for changing the payment date, making an extra payment, or paying the full balance',
            width: 416,
            height: 237,
            caption: 'Alternate repayment actions.',
          },
        ],
      },
      {
        id: 'final-experience',
        heading: 'Final mobile experience',
        description:
          'High-fidelity device views bring the dashboard modules together and provide a focused payment-method step.',
        layout: 'comparison',
        images: [
          {
            src: '/work/financing-app-payment-flow/final-screens/final-screens1.png',
            alt: 'Finance app dashboard on an angled mobile device with plan progress, next payment, and repayment actions',
            width: 1134,
            height: 1012,
            caption: 'High-fidelity financing dashboard.',
          },
          {
            src: '/work/financing-app-payment-flow/final-screens/final-screens2.png',
            alt: 'Finance app payment-method screen on an angled mobile device with wallet and card choices',
            width: 520,
            height: 798,
            caption: 'Payment-method selection screen.',
          },
        ],
      },
    ],
  },
]
