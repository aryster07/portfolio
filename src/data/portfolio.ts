// Types
export interface Project {
    id: string;
    title: string;
    category: string;
    img: string;
    description?: string;
    link?: string;
    tools?: string[];
    behanceUrl?: string;
    images?: {
        cover: string;
        [key: string]: any;
    };
}

export interface CaseStudy {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    category: string;
    timeline: string;
    role: string;
    tools: string[];
    impact: string[];
    behanceUrl?: string;
    images: {
        hero: string;
        cover: string;
        oldDesigns?: string[];
        newDesigns: string[];
        wireframes: string[];
        userResearch?: string[];
        prototypes?: string[];
        finalScreens: string[];
    };
    stats: {
        metric: string;
        label: string;
        description: string;
    }[];
    challenges: string[];
    solutions: string[];
    results: string[];
}

// Case Studies Data
export const caseStudies: CaseStudy[] = [
    {
        id: 'amizone-redesign',
        title: 'AMIZONE Mobile Redesign',
        subtitle: 'University Portal Redesign',
        description: 'A comprehensive redesign of the AMIZONE university portal, transforming it into a modern, mobile-first platform that serves 50,000+ students across multiple campuses with improved accessibility and user experience.',
        category: 'Mobile App Redesign',
        timeline: '2 months',
        role: 'UI/UX Designer',
        tools: ['Figma', 'User Research', 'Prototyping', 'Usability Testing'],
        impact: ['100% mobile responsive design', '70% faster login process', '5x better information hierarchy'],
        images: {
            hero: '/case-studies/amizone-redesign/cover/cover.png',
            cover: '/case-studies/amizone-redesign/cover/cover.png',
            oldDesigns: [
                '/case-studies/amizone-redesign/old-designs/login_old.jpg'
            ],
            newDesigns: [
                '/case-studies/amizone-redesign/new-designs/login_new.png'
            ],
            wireframes: [],
            userResearch: [],
            prototypes: [],
            finalScreens: [
                '/case-studies/amizone-redesign/final-screens/dashboard.png',
                '/case-studies/amizone-redesign/final-screens/attendance.png',
                '/case-studies/amizone-redesign/final-screens/other info.png'
            ]
        },
        stats: [
            {
                metric: '50,000+',
                label: 'Students Impacted',
                description: 'Across multiple campuses'
            },
            {
                metric: '70%',
                label: 'Faster Login',
                description: 'Streamlined authentication process'
            },
            {
                metric: '100%',
                label: 'Mobile Responsive',
                description: 'Mobile-first design approach'
            }
        ],
        challenges: [
            'Outdated interface with poor mobile responsiveness',
            'Cluttered information architecture affecting usability',
            'Slow and cumbersome login process',
            'Lack of accessibility features for diverse student population'
        ],
        solutions: [
            'Implemented mobile-first design approach with responsive layouts',
            'Redesigned information architecture with clear hierarchy',
            'Streamlined login flow with modern authentication patterns',
            'Added accessibility features following WCAG guidelines',
            'Conducted extensive user research with students and faculty'
        ],
        results: [
            'Achieved 100% mobile responsiveness across all devices',
            'Reduced login time by 70% through streamlined process',
            'Improved information hierarchy by 5x for better navigation',
            'Enhanced accessibility for 50,000+ students',
            'Received positive feedback from university administration'
        ]
    },
    {
        id: 'financing-app-payment-flow',
        title: 'Financing App Payment Flow',
        subtitle: 'Payment Flow Redesign',
        description: 'A complete redesign of the payment flow for a financing application, focusing on creating an intuitive, secure, and user-friendly experience that guides users through complex financial transactions with confidence.',
        category: 'Mobile App Design',
        timeline: 'Design Project',
        role: 'UI/UX Designer',
        tools: ['Figma', 'User Flow Mapping', 'Wireframing', 'Prototyping'],
        impact: ['Streamlined payment process', 'Enhanced user confidence', 'Modern financial UI'],
        images: {
            hero: '/case-studies/financing-app-payment-flow/cover/cover.png',
            cover: '/case-studies/financing-app-payment-flow/cover/cover.png',
            oldDesigns: [],
            newDesigns: [],
            wireframes: [
                '/case-studies/financing-app-payment-flow/wireframes/WhatsApp Image 2025-08-24 at 22.56.49_b1d3d2d4.jpg',
                '/case-studies/financing-app-payment-flow/wireframes/WhatsApp Image 2025-08-25 at 17.05.05_3adf0106.jpg'
            ],
            userResearch: [],
            prototypes: [],
            finalScreens: [
                '/case-studies/financing-app-payment-flow/final-screens/plan-details.png',
                '/case-studies/financing-app-payment-flow/final-screens/progress-bar.png',
                '/case-studies/financing-app-payment-flow/final-screens/next-payment.png',
                '/case-studies/financing-app-payment-flow/final-screens/others.png',
                '/case-studies/financing-app-payment-flow/final-screens/final-screens1.png',
                '/case-studies/financing-app-payment-flow/final-screens/final-screens2.png'
            ]
        },
        stats: [
            {
                metric: '100%',
                label: 'User-Centered',
                description: 'Designed with user needs in mind'
            },
            {
                metric: 'Modern',
                label: 'Design Approach',
                description: 'Contemporary financial UI patterns'
            },
            {
                metric: 'Secure',
                label: 'Payment Flow',
                description: 'Trust-building design elements'
            }
        ],
        challenges: [
            'Complex payment flow causing user confusion',
            'Lack of visual feedback during payment process',
            'Building trust in financial transactions',
            'Balancing security with ease of use'
        ],
        solutions: [
            'Created clear step-by-step payment flow with progress indicators',
            'Implemented real-time visual feedback for user actions',
            'Designed trust-building elements with security badges',
            'Simplified form inputs while maintaining security',
            'Added clear error handling and validation messages'
        ],
        results: [
            'Successfully delivered intuitive payment flow',
            'Enhanced user confidence in financial transactions',
            'Created modern and trustworthy interface',
            'Demonstrated strong understanding of financial UX'
        ]
    },
    {
        id: 'grozify-app',
        title: 'Grozify App',
        subtitle: 'Your Best Grocery App',
        description: 'A comprehensive grocery shopping application designed to streamline the shopping experience with modern UI/UX principles and user-centered design.',
        category: 'Mobile App Design',
        timeline: 'Design Project',
        role: 'UI/UX Designer',
        tools: ['Figma', 'User Research', 'Prototyping', 'UI Design'],
        impact: ['Enhanced shopping experience', 'Modern grocery app design', 'User-friendly interface'],
        behanceUrl: 'https://www.behance.net/gallery/239127575/Grozify-app-Your-best-grocery-app',
        images: {
            hero: '/case-studies/grozify-app/cover.jpg',
            cover: '/case-studies/grozify-app/cover.jpg',
            oldDesigns: [],
            newDesigns: [],
            wireframes: [],
            userResearch: [],
            prototypes: [],
            finalScreens: []
        },
        stats: [
            {
                metric: '100%',
                label: 'User-Centered',
                description: 'Designed with user needs in mind'
            },
            {
                metric: 'Modern',
                label: 'Design Approach',
                description: 'Contemporary UI/UX patterns'
            }
        ],
        challenges: [
            'Creating intuitive grocery shopping flow',
            'Designing for diverse user demographics',
            'Balancing features with simplicity'
        ],
        solutions: [
            'Conducted user research to understand shopping behaviors',
            'Implemented clear navigation and categorization',
            'Created clean, modern interface with easy-to-use features'
        ],
        results: [
            'Successfully delivered modern grocery app design',
            'Created intuitive shopping experience',
            'Demonstrated strong UI/UX capabilities'
        ]
    },
    {
        id: 'locked-in',
        title: 'Locked-in',
        subtitle: 'Design Project',
        description: 'A comprehensive design project showcasing modern UI/UX principles and creative problem-solving.',
        category: 'UI/UX Design',
        timeline: 'Design Project',
        role: 'UI/UX Designer',
        tools: ['Figma', 'Dribbble', 'Behance', 'ChatGPT', 'Gemini'],
        impact: ['Enhanced user experience', 'Modern design approach', 'Creative solution delivery'],
        behanceUrl: 'https://www.behance.net/gallery/235841675/Locked-in',
        images: {
            hero: '/case-studies/locked-in/cover.png',
            cover: '/case-studies/locked-in/cover.png',
            oldDesigns: [],
            newDesigns: [],
            wireframes: [],
            userResearch: [],
            prototypes: [],
            finalScreens: []
        },
        stats: [
            {
                metric: '5',
                label: 'Tools Used',
                description: 'Comprehensive design toolkit'
            },
            {
                metric: '100%',
                label: 'Creative',
                description: 'Original design concept'
            }
        ],
        challenges: [
            'Creating innovative design solutions',
            'Balancing creativity with usability',
            'Implementing modern design trends'
        ],
        solutions: [
            'Leveraged AI tools for enhanced creativity',
            'Used Dribbble and Behance for inspiration',
            'Applied user-centered design principles'
        ],
        results: [
            'Successfully delivered creative design solution',
            'Demonstrated modern design capabilities',
            'Showcased innovative problem-solving approach'
        ]
    },
    {
        id: 'anonymous-confession-app',
        title: 'Anonymous Confession App',
        subtitle: 'Mobile App Design',
        description: 'A secure and user-friendly mobile application designed for anonymous confessions, focusing on privacy, trust, and emotional well-being.',
        category: 'Mobile App Design',
        timeline: 'Design Project',
        role: 'UI/UX Designer',
        tools: ['Figma', 'Dribbble', 'Behance', 'ChatGPT', 'Gemini'],
        impact: ['Enhanced user privacy', 'Safe confession platform', 'Intuitive user experience'],
        behanceUrl: 'https://www.behance.net/gallery/235779281/Anonymous-Confession-App',
        images: {
            hero: '/case-studies/anonymous-confession-app/cover.png',
            cover: '/case-studies/anonymous-confession-app/cover.png',
            oldDesigns: [],
            newDesigns: [],
            wireframes: [],
            userResearch: [],
            prototypes: [],
            finalScreens: []
        },
        stats: [
            {
                metric: '100%',
                label: 'Anonymous',
                description: 'Complete user privacy protection'
            },
            {
                metric: '5',
                label: 'Tools Used',
                description: 'Comprehensive design toolkit'
            }
        ],
        challenges: [
            'Ensuring complete user anonymity',
            'Building trust in sensitive app concept',
            'Creating safe and welcoming interface',
            'Balancing privacy with usability'
        ],
        solutions: [
            'Implemented strong privacy-first design principles',
            'Used calming and trustworthy visual elements',
            'Created simple and intuitive user flows',
            'Applied psychological safety design patterns'
        ],
        results: [
            'Successfully delivered privacy-focused design',
            'Created trusted platform for sensitive content',
            'Demonstrated understanding of user psychology',
            'Showcased ethical design principles'
        ]
    },
    {
        id: 'gfm-expedition-redesign',
        title: 'GFM Expedition Redesign',
        subtitle: 'Web/App Redesign Project',
        description: 'A comprehensive redesign of the GFM Expedition platform, focusing on improved user experience, modern interface design, and enhanced functionality.',
        category: 'Web/App Redesign',
        timeline: 'Design Project',
        role: 'UI/UX Designer',
        tools: ['Figma', 'Dribbble', 'Behance', 'ChatGPT', 'Gemini'],
        impact: ['Improved user experience', 'Modern interface design', 'Enhanced platform functionality'],
        behanceUrl: 'https://www.behance.net/gallery/235658919/GFM-Expedition-Redesign',
        images: {
            hero: '/case-studies/gfm-expedition-redesign/cover.png',
            cover: '/case-studies/gfm-expedition-redesign/cover.png',
            oldDesigns: [],
            newDesigns: [],
            wireframes: [],
            userResearch: [],
            prototypes: [],
            finalScreens: []
        },
        stats: [
            {
                metric: '100%',
                label: 'Redesigned',
                description: 'Complete platform overhaul'
            },
            {
                metric: '5',
                label: 'Tools Used',
                description: 'Comprehensive design toolkit'
            }
        ],
        challenges: [
            'Modernizing legacy expedition platform',
            'Improving complex user workflows',
            'Maintaining brand identity while innovating',
            'Enhancing mobile responsiveness'
        ],
        solutions: [
            'Conducted thorough UX audit of existing platform',
            'Implemented modern design patterns and components',
            'Created responsive design system',
            'Streamlined user journey and information architecture'
        ],
        results: [
            'Successfully delivered modern platform redesign',
            'Improved user engagement and usability',
            'Enhanced mobile experience',
            'Maintained brand consistency with fresh approach'
        ]
    },
    {
        id: 'lynnettes-kitchen',
        title: 'Lynnettes Kitchen',
        subtitle: 'Restaurant/Food Brand Design',
        description: 'A comprehensive branding and digital design project for Lynnettes Kitchen, focusing on creating an appetizing visual identity and user-friendly dining experience.',
        category: 'Branding & Web Design',
        timeline: 'Design Project',
        role: 'UI/UX Designer',
        tools: ['Figma', 'Dribbble', 'Behance', 'ChatGPT', 'Gemini'],
        impact: ['Enhanced brand identity', 'Improved customer experience', 'Modern restaurant branding'],
        behanceUrl: 'https://www.behance.net/gallery/235655707/Lynnettes-Kitchen',
        images: {
            hero: '/case-studies/lynnettes-kitchen/cover.png',
            cover: '/case-studies/lynnettes-kitchen/cover.png',
            oldDesigns: [],
            newDesigns: [],
            wireframes: [],
            userResearch: [],
            prototypes: [],
            finalScreens: []
        },
        stats: [
            {
                metric: '100%',
                label: 'Brand New',
                description: 'Complete brand identity creation'
            },
            {
                metric: '5',
                label: 'Tools Used',
                description: 'Comprehensive design toolkit'
            }
        ],
        challenges: [
            'Creating appetizing visual brand identity',
            'Designing for food industry standards',
            'Balancing warmth with professionalism',
            'Creating memorable restaurant experience'
        ],
        solutions: [
            'Developed warm and inviting color palette',
            'Created food-focused visual design language',
            'Implemented user-friendly menu and ordering system',
            'Designed cohesive brand experience across touchpoints'
        ],
        results: [
            'Successfully launched complete brand identity',
            'Created engaging restaurant digital presence',
            'Delivered cohesive customer experience',
            'Established strong visual brand recognition'
        ]
    },
    // ============================================
    // COMING SOON PROJECTS (No cover images yet)
    // ============================================
    {
        id: 'vscode-extensions',
        title: 'Chrome Extensions',
        subtitle: 'Coming Soon',
        description: 'Two custom Chrome browser extensions currently in development to enhance user productivity and browsing experience. Case study coming soon.',
        category: 'Browser Extension Development',
        timeline: 'Coming Soon',
        role: 'Developer & Designer',
        tools: ['Chrome Extension API', 'JavaScript', 'HTML/CSS', 'Manifest V3'],
        impact: ['Enhanced browsing productivity', 'Custom browser solutions', 'Published extensions'],
        images: {
            hero: '/case-studies/vscode-extensions/cover.png',
            cover: '/case-studies/vscode-extensions/cover.png',
            oldDesigns: [],
            newDesigns: [],
            wireframes: [],
            userResearch: [],
            prototypes: [],
            finalScreens: []
        },
        stats: [
            {
                metric: '2',
                label: 'Extensions',
                description: 'Chrome extensions built'
            },
            {
                metric: '100%',
                label: 'Custom Built',
                description: 'Developed from scratch'
            }
        ],
        challenges: [
            'Understanding Chrome Extension API',
            'Creating intuitive browser tools',
            'Optimizing extension performance',
            'Adapting to Manifest V3 requirements'
        ],
        solutions: [
            'Mastered Chrome Extension development',
            'Implemented efficient code architecture',
            'Created seamless user experience',
            'Focused on performance optimization'
        ],
        results: [
            'Successfully built 2 Chrome extensions',
            'Enhanced user browsing experience',
            'Demonstrated full-stack capabilities',
            'Gained extension development expertise'
        ]
    },
    {
        id: 'portfolio-redesign',
        title: 'Portfolio Redesign',
        subtitle: 'Coming Soon',
        description: 'A complete redesign of my personal portfolio website featuring dual mode (Designer/Creator), modern animations, and optimized performance. Case study coming soon.',
        category: 'Web Development & Design',
        timeline: 'Coming Soon',
        role: 'Full-Stack Designer & Developer',
        tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Figma'],
        impact: ['Modern dual-mode interface', 'Optimized performance', 'Type-safe codebase'],
        images: {
            hero: '/case-studies/portfolio-redesign/cover.png',
            cover: '/case-studies/portfolio-redesign/cover.png',
            oldDesigns: [],
            newDesigns: [],
            wireframes: [],
            userResearch: [],
            prototypes: [],
            finalScreens: []
        },
        stats: [
            {
                metric: '2',
                label: 'Modes',
                description: 'Designer & Creator personas'
            },
            {
                metric: '100%',
                label: 'Type-Safe',
                description: 'TypeScript throughout'
            },
            {
                metric: 'A+',
                label: 'Performance',
                description: 'Optimized build & caching'
            }
        ],
        challenges: [
            'Creating seamless dual-mode experience',
            'Implementing smooth animations and transitions',
            'Optimizing performance and load times',
            'Building responsive design system'
        ],
        solutions: [
            'Developed toggle system with smooth transitions',
            'Used Framer Motion for fluid animations',
            'Implemented Next.js 16 with Turbopack',
            'Created custom cursor and scroll effects'
        ],
        results: [
            'Launched modern dual-persona portfolio',
            'Achieved excellent performance scores',
            'Zero TypeScript errors, production-ready',
            'Showcased full-stack development skills'
        ]
    },
    {
        id: 'self-attendance-app',
        title: 'Self Attendance App',
        subtitle: 'Coming Soon',
        description: 'A self-developed attendance management application designed to simplify and automate personal attendance tracking. Case study coming soon.',
        category: 'Mobile/Web App Development',
        timeline: 'Coming Soon',
        role: 'Full-Stack Developer & Designer',
        tools: ['React', 'TypeScript', 'Firebase', 'Figma'],
        impact: ['Automated attendance tracking', 'User-friendly interface', 'Real-time updates'],
        images: {
            hero: '/case-studies/self-attendance-app/cover.png',
            cover: '/case-studies/self-attendance-app/cover.png',
            oldDesigns: [],
            newDesigns: [],
            wireframes: [],
            userResearch: [],
            prototypes: [],
            finalScreens: []
        },
        stats: [
            {
                metric: '100%',
                label: 'Automated',
                description: 'Smart attendance tracking'
            },
            {
                metric: 'Real-time',
                label: 'Updates',
                description: 'Instant synchronization'
            }
        ],
        challenges: [
            'Creating reliable attendance tracking logic',
            'Designing intuitive data visualization',
            'Implementing secure authentication',
            'Building real-time sync functionality'
        ],
        solutions: [
            'Developed robust tracking algorithm',
            'Created clean dashboard with analytics',
            'Integrated secure authentication system',
            'Implemented Firebase real-time database'
        ],
        results: [
            'Successfully deployed attendance app',
            'Simplified personal attendance management',
            'Achieved reliable tracking system',
            'Demonstrated full-stack capabilities'
        ]
    },
    {
        id: 'figma-plugins',
        title: 'Figma Plugins',
        subtitle: 'Figma Plugin Development',
        description: 'Three powerful Figma plugins published on Figma Community: CompMagnet for instant component organization, Font Manager for finding & fixing missing fonts, and Comment Deck for filtering, sorting, and exporting Figma comments instantly.',
        category: 'Figma Plugins',
        timeline: 'Completed',
        role: 'Plugin Developer & Designer',
        tools: ['Figma Plugin API', 'TypeScript', 'React', 'HTML/CSS'],
        impact: ['3 Published plugins', 'Workflow automation', 'Design efficiency'],
        images: {
            hero: '/case-studies/figma-plugins/cover.png',
            cover: '/case-studies/figma-plugins/cover.png',
            oldDesigns: [],
            newDesigns: [
                '/case-studies/figma-plugins/compmagnet.png',
                '/case-studies/figma-plugins/font-manager.png',
                '/case-studies/figma-plugins/cmt deck thumb.png'
            ],
            wireframes: [],
            userResearch: [],
            prototypes: [],
            finalScreens: [
                '/case-studies/figma-plugins/compmagnet.png',
                '/case-studies/figma-plugins/font-manager.png',
                '/case-studies/figma-plugins/cmt deck thumb.png'
            ]
        },
        stats: [
            {
                metric: '3',
                label: 'Plugins',
                description: 'CompMagnet, Font Manager & Comment Deck'
            },
            {
                metric: 'Published',
                label: 'Figma Community',
                description: 'Available to designers'
            },
            {
                metric: '100%',
                label: 'Custom Built',
                description: 'Developed from scratch'
            }
        ],
        challenges: [
            'Auto-detecting components and variants efficiently (CompMagnet)',
            'Organizing components in alphabetical 5-column grid',
            'Finding and fixing missing fonts instantly (Font Manager)',
            'Managing and organizing feedback from multiple collaborators (Comment Deck)',
            'Optimizing plugin performance for large design files'
        ],
        solutions: [
            'Built smart component detection and organization algorithm',
            'Implemented variant preservation with grid layout system',
            'Created comprehensive font scanning and detection system',
            'Developed comment aggregation with filter, sort, and export features',
            'Optimized all plugins for instant performance'
        ],
        results: [
            'CompMagnet: Instant component organization published',
            'Font Manager: Find & fix missing fonts published',
            'Comment Deck: Filter, sort & export comments published',
            'All three plugins live on Figma Community',
            'Enhanced workflows for designers worldwide'
        ]
    },
    {
        id: 'web-game',
        title: 'Web Game',
        subtitle: 'Coming Soon',
        description: 'Currently developing an interactive web-based game featuring engaging gameplay mechanics and modern web technologies.',
        category: 'Game Development',
        timeline: 'Coming Soon',
        role: 'Game Developer & Designer',
        tools: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Game Design'],
        impact: ['Interactive gameplay', 'Modern web tech', 'Creative coding'],
        images: {
            hero: '/case-studies/web-game/cover.png',
            cover: '/case-studies/web-game/cover.png',
            oldDesigns: [],
            newDesigns: [],
            wireframes: [],
            userResearch: [],
            prototypes: [],
            finalScreens: []
        },
        stats: [
            {
                metric: 'WIP',
                label: 'In Progress',
                description: 'Active development'
            },
            {
                metric: '100%',
                label: 'Custom',
                description: 'Built from scratch'
            }
        ],
        challenges: [
            'Implementing game physics and mechanics',
            'Creating engaging gameplay experience',
            'Optimizing browser performance',
            'Designing game visuals and UI'
        ],
        solutions: [
            'Learning game development principles',
            'Using HTML5 Canvas for rendering',
            'Implementing efficient game loop',
            'Creating responsive game design'
        ],
        results: [
            'Active development of web game',
            'Exploring game development skills',
            'Expanding creative coding abilities',
            'Building interactive experiences'
        ]
    }
];

// Helpers
export const getCaseStudyById = (id: string): CaseStudy | undefined => {
    return caseStudies.find(study => study.id === id);
};

// Map case studies to Project format for backward compatibility
export const designProjects: Project[] = caseStudies.map(study => ({
    id: study.id,
    title: study.title,
    category: study.category,
    img: study.images.cover,
    description: study.subtitle,
    link: study.behanceUrl,
    tools: study.tools,
    behanceUrl: study.behanceUrl,
    images: study.images
}));
