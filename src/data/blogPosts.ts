export type BlogVector = 'geometry' | 'contrast' | 'network' | 'scale' | 'system' | 'tooling'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  /** ISO date used for ordering and article metadata. */
  date: string
  readingMinutes: number
  tags: string[]
  /** One per post — the cover art is what tells them apart at a glance. */
  vector: BlogVector
  /**
   * Marks a post as one of the most-read, for the homepage rail. Curated by
   * hand: the site has no analytics backend, so there is no real visit count
   * to sort on. Flip these as the real numbers come in.
   */
  featured?: boolean
  /** Each string is rendered as one paragraph. */
  body: string[]
}

/**
 * Aryan's writing on product thinking, design practice and building software.
 * Newest first so the source stays easy to scan even before consumers sort it.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: 'you-are-not-training-your-ai',
    title: 'You Are Not Training Your AI. You Are Personalizing It.',
    excerpt: 'Telling a model how you write is onboarding, not training. The difference matters.',
    date: '2026-08-05',
    readingMinutes: 3,
    tags: ['AI', 'Critical Thinking'],
    vector: 'scale',
    body: [
      'Someone tells the assistant how they talk, how they write, what their visual direction is, which words they never use. Then they say they are training their AI. They are not. They are personalizing it, and those two words describe completely different things happening at completely different scales.',
      'What actually happens when you paste your tone of voice into a chat is that your text sits in the context window next to your question. The model reads it the same way it reads everything else you typed. Nothing inside the model changes. If a memory feature saves it, it is saved as text and quietly pasted back in next time, which is a very good product feature and still not training. Nobody else in the world gets a model that writes like you because you explained yourself in a chat window.',
      'Training is what the model owner did before you ever opened the app. Pretraining runs over an enormous body of text, then post-training shapes the behavior with fine-tuning, human feedback and safety work. It runs on thousands of accelerators for weeks. It pulls megawatts, and every one of those watts comes back out as heat, which is why this conversation ends up being about cooling systems, water and grid capacity. A single frontier run costs in the tens to hundreds of millions of dollars, and the datacenter build-out behind it is the part measured in billions. That is the machinery people are casually claiming to operate from a text box.',
      'The clearest way to see it is a new joiner in your office. You tell them how the team works, which client hates long emails, where the files live, what the review process is. That is onboarding. You are personalizing a person to your environment. Their actual training was the years of school, the degree, the failed attempts, the money and time and setbacks it took to become someone worth hiring. You did not train them in a week. You told them where the coffee machine is.',
      'One honest caveat, because I do not want to overcorrect. Training is not sealed off from everyone but the lab. Fine-tuning is real and available: you can adapt a model on your own data, and it does change the weights. That is genuine training, in a small and specific way. It just has nothing to do with typing your preferences into a chat and calling it that. And when a system does learn from user feedback, the party doing the training is still the owner, not you.',
      'None of this is a reason to look down on personalization. Someone maintaining a five hundred line context file for their coding assistant, a CLAUDE.md or a house style guide, has built something real and gets real leverage from it. That is genuine work with a genuine payoff. It is just leverage on a fixed model, not a changed one, and the difference shows the moment the file is gone.',
      'This matters because the confusion is not harmless. It makes people think their preferences are permanent when they are one cleared context away from gone. It makes them think their data went into a model when usually it went into a prompt, or worry about the opposite when it genuinely did. It makes buyers pay for personalization while believing they bought a custom model. Use the right word. Personalization is yours, and it is genuinely useful. Training belongs to something much larger, much more expensive and much less magical than a chat window.',
    ],
  },
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
    featured: true,
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
    featured: true,
    body: [
      'Development gets the thing working. Engineering asks whether it will keep working when real life gets messy. I do not see one as better than the other, and I am not talking about job titles. They are simply two kinds of work that a good product needs.',
      'The first version is a real achievement because it gives the team something they can use and learn from. But a good demo only proves that one path worked once. We still need to ask what happens when the internet is slow, data is missing, someone taps twice or a release goes wrong.',
      'Making a product dependable means being clear about what must never break or get lost. Design is part of that too: show pending work, old data and recovery limits honestly. Development gets the idea into people\'s hands, and engineering helps it stay trustworthy. Strong teams make room for both.',
    ],
  },
]
