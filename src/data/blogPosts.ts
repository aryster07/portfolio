export type BlogVector = 'geometry' | 'contrast' | 'network' | 'system' | 'tooling'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  /** ISO date used for ordering and article metadata. */
  date: string
  readingMinutes: number
  tags: string[]
  vector: BlogVector
  /** Each string is rendered as one paragraph. */
  body: string[]
}

/**
 * Aryan's writing on product thinking, design practice and building software.
 * Newest first so the source stays easy to scan even before consumers sort it.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: 'design-the-system-before-the-screen',
    title: 'Design the System Before You Design the Screen',
    excerpt: 'A polished screen cannot fix a product that still does not make sense.',
    date: '2026-08-02',
    readingMinutes: 1,
    tags: ['UX', 'Systems Thinking'],
    vector: 'system',
    body: [
      'I do not like starting with polished screens when the product itself is still unclear. A screen only shows one moment. If the team has not agreed on what happens before it, after it or when something goes wrong, the UI ends up carrying all that confusion.',
      'Before picking components, I want to know the simple stuff: what can the user do, who is allowed to do it, what changes and what happens if it fails. A rough flow or a few notes are enough. The important part is that design, product and engineering are all talking about the same thing.',
      'The messy cases usually show where the real problem is. Instead of adding another popup or special label, fix the rule that caused the confusion. Once everyone knows what an action does and how someone can recover, the screen becomes much simpler. I still care about polish; I just want the product to make sense first.',
    ],
  },
  {
    slug: 'a-smart-person-said-it-is-not-enough',
    title: 'A Smart Person Said It. That Is Not Enough.',
    excerpt: 'A smart person can share a good idea, but we still need to think for ourselves.',
    date: '2026-07-28',
    readingMinutes: 1,
    tags: ['Critical Thinking', 'Design Practice'],
    vector: 'contrast',
    body: [
      'I do not want to accept an idea just because a smart person said it or a famous company uses it. That can be a good reason to look closer, but it is not proof that the idea is right for the problem in front of me.',
      'When someone says, “the research says so,” I want to know who was studied and in what situation. The same goes for copying a big product. Their users, goals and limits may be very different from ours. If I cannot explain an idea in my own words, I probably do not understand it yet.',
      'This does not mean disagreeing with everything to look clever. I try to understand the claim, test it against the actual problem and notice where it stops working. If it still makes sense, I use it. The useful part is knowing why it works, not having a famous name to hide behind.',
    ],
  },
  {
    slug: 'the-hidden-cost-of-designing-for-the-deadline',
    title: 'The Hidden Cost of Designing for the Deadline',
    excerpt: 'A rushed screen often saves time now and creates more work for everyone later.',
    date: '2026-07-22',
    readingMinutes: 1,
    tags: ['Product Design', 'Collaboration'],
    vector: 'network',
    body: [
      'When a deadline is close, a polished screen feels like the fastest way to show progress. The problem is that it can look finished while the actual flow is still full of gaps. That missing thinking does not disappear. It just lands on someone else later.',
      'If the screen does not explain what happens next, a developer has to guess. Then testing finds a different answer, product reopens the decision and the client sees the gap when everything looks almost done. A little time saved in design can easily become a lot of rework across the whole team.',
      'I know there is not always time for a big process. In that case, I would rather make a rough flow than a perfect mockup. Mark what is ready, what is still a guess and what will wait until later. A deadline should help us choose what to leave out, not pretend the missing parts do not exist.',
    ],
  },
  {
    slug: 'when-products-get-serious-every-word-matters',
    title: 'When Products Get Serious, Every Word Matters',
    excerpt: 'When an action has real consequences, even a small word can make a big difference.',
    date: '2026-07-16',
    readingMinutes: 1,
    tags: ['Content Design', 'Product Design'],
    vector: 'geometry',
    body: [
      'A vague button label can feel harmless in a concept. It is not harmless when the product handles someone\'s money, work or important records. Once an action has real consequences, every small choice needs to help the user understand what is about to happen.',
      'Words such as “send,” “delete” and “publish” make a clear promise. “Continue” often does not. Defaults matter too, because many people will simply accept them. I always ask whether the wording and the default are safe, clear and genuinely useful for the person using the product.',
      'After an important action, the product should clearly say what happened. If it is still working, show that. If it failed, explain what the person can do next. These details may not look exciting in a portfolio shot, but they are what make a product feel dependable when someone really needs it.',
    ],
  },
  {
    slug: 'development-creates-engineering-makes-dependable',
    title: 'Development Creates It. Engineering Makes It Dependable.',
    excerpt: 'Getting a product to work is one job; helping it stay reliable is another.',
    date: '2026-07-10',
    readingMinutes: 1,
    tags: ['Engineering', 'Product Thinking'],
    vector: 'tooling',
    body: [
      'Development gets the thing working. Engineering asks whether it will keep working when real life gets messy. I do not see one as better than the other, and I am not talking about job titles. They are simply two kinds of work that a good product needs.',
      'The first version is a real achievement because it gives the team something they can use and learn from. But a good demo only proves that one path worked once. We still need to ask what happens when the internet is slow, data is missing, someone taps twice or a release goes wrong.',
      'Making a product dependable means being clear about what must never break or get lost. Design is part of that too: show pending work, old data and recovery limits honestly. Development gets the idea into people\'s hands, and engineering helps it stay trustworthy. Strong teams make room for both.',
    ],
  },
]
