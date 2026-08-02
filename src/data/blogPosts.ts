export type BlogVector = 'geometry' | 'contrast' | 'network' | 'system' | 'tooling'

interface BlogPostSection {
  heading: string
  /** Each string is rendered as one paragraph. */
  body: string[]
}

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  /** ISO date used for ordering and article metadata. */
  date: string
  readingMinutes: number
  tags: string[]
  vector: BlogVector
  intro: string
  sections: BlogPostSection[]
}

/**
 * Aryan's writing on product thinking, design practice and building software.
 * Newest first so the source stays easy to scan even before consumers sort it.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: 'design-the-system-before-the-screen',
    title: 'Design the System Before You Design the Screen',
    excerpt:
      'Confusing UX often starts before the interface. If the team has not understood the product\'s behavior, no amount of polished UI can make its logic clear.',
    date: '2026-08-02',
    readingMinutes: 8,
    tags: ['UX', 'Systems Thinking'],
    vector: 'system',
    intro:
      'I do not believe a designer should begin with screens when the system behind those screens is still vague. A screen is only a visible moment in a much larger chain of rules, states, permissions and consequences. If that chain is unclear, the interface will eventually expose the confusion—usually at the exact moment a user needs certainty.',
    sections: [
      {
        heading: 'The screen is not the product',
        body: [
          'A screen shows what the system looks like at one point in time. The product is everything that can happen before that moment, during it and after it. What created this state? What can the user do next? What is the system doing in the background? What happens if two actions collide? What changes for another role? These questions are not secondary details. They are the material the experience is made from.',
          'When a team jumps directly into UI, it tends to design the happy path as a set of attractive snapshots. The screens may look connected in a prototype, but the underlying behavior is still being invented one interaction at a time. That is how one button ends up meaning three different things, or one status appears in five places with five slightly different interpretations.',
        ],
      },
      {
        heading: 'Name the logic before you polish it',
        body: [
          'Before choosing components, I want a plain-language model of the system. What are the important objects? Which states can each object enter? Which actions move it between states? Who is allowed to perform those actions? What must already be true? What changes immediately, and what waits for another process or person?',
          'This model does not need to be a grand technical document. It can be a state diagram, a table, a rough flow or a conversation captured in clear notes. The format matters less than the shared understanding. If design, product and engineering describe the same action differently, that disagreement should be resolved before it is hidden inside a polished mockup.',
        ],
      },
      {
        heading: 'Edge cases reveal the real model',
        body: [
          'Edge cases are often treated as cleanup work: empty states, partial data, expired access, duplicate actions, interrupted payments, delayed responses and failed permissions. I see them differently. They are tests of whether the product logic actually holds together. The happy path lets an unclear model survive because everything happens in the expected order. An edge case removes that protection.',
          'If every exception requires a new modal, a special label or an isolated rule, the problem may not be the edge case. The core model may be carrying too many meanings. That is useful information. It gives the team a chance to simplify the behavior instead of asking the interface to explain a contradiction.',
        ],
      },
      {
        heading: 'Build one source of behavioral truth',
        body: [
          'The most useful design artifact is sometimes not a screen at all. A shared behavior map can show the trigger, the required conditions, the state change, the visible result and the recovery path for each important action. It gives designers a basis for the interaction, developers a clearer contract, product managers a place to examine rules and stakeholders a way to see what they are actually approving.',
          'This also makes change less dangerous. When a rule changes, the team can trace what else it affects instead of patching the first screen where the change becomes visible. The interface then becomes an expression of a coherent system, not a collection of local decisions trying to imitate one.',
        ],
      },
      {
        heading: 'Clarity is a systems outcome',
        body: [
          'Good UX is not created by adding explanations after the product becomes confusing. It comes from reducing the amount of contradiction the interface has to explain. That requires understanding the system early, challenging its rules and designing its states with the same care we give to layout and typography.',
          'I still care deeply about the screen. But I want to design it after I can explain what the system believes, what the user is trying to do and what every action will cause. When those answers are clear, the UI usually gets simpler on its own.',
        ],
      },
    ],
  },
  {
    slug: 'a-smart-person-said-it-is-not-enough',
    title: 'A Smart Person Said It. That Is Not Enough.',
    excerpt:
      'Authority can point us toward an idea, but it cannot do the thinking for us. Understand the claim, test its assumptions and keep only what survives examination.',
    date: '2026-07-28',
    readingMinutes: 7,
    tags: ['Critical Thinking', 'Design Practice'],
    vector: 'contrast',
    intro:
      'I never want to accept an idea only because an intelligent person said it, a famous company uses it or a research paper appears to support it. Those things can make an idea worth investigating. They do not make it automatically true, complete or useful in the situation in front of me.',
    sections: [
      {
        heading: 'Borrowed confidence is not understanding',
        body: [
          'Authority is efficient. It helps us decide where to look when we cannot investigate everything from zero. The problem begins when a source\'s reputation replaces our own reasoning. We repeat the conclusion, adopt the framework and defend it with a name instead of an explanation. The idea may be good, but our relationship with it is weak because we do not know why it works or where it stops working.',
          'In design, this happens whenever a pattern is justified with “a big product does it” or a decision is closed with “the research says so.” Which users were studied? What behavior was measured? What conditions shaped the result? Does our product create the same conditions? Without those questions, evidence becomes decoration for a decision that may already have been made.',
        ],
      },
      {
        heading: 'An explanation is a model, not reality',
        body: [
          'Every framework leaves something out. That is what makes it usable. A model highlights certain relationships so we can think and act, but the simplification can become a trap when we forget that it is a simplification. A clean diagram can make uncertain boundaries look fixed. A useful principle can become a universal rule. A research finding can travel far beyond the people and context that produced it.',
          'Understanding an idea means knowing more than its conclusion. I want to know its assumptions, what it predicts, what it ignores and what evidence would make me revise it. If I cannot explain those parts in my own words, I probably do not understand the idea yet—I only recognize it.',
        ],
      },
      {
        heading: 'Think of models as things that can evolve',
        body: [
          'Consider a conceptual sequence of atomic models—not as a precise history lesson, but as an analogy. We might begin with a simple picture that treats the atom as one solid unit. New observations then demand a model with internal parts. More difficult observations may require another model that describes possible locations and behavior differently. Each picture can be useful within its limits, yet none deserves permanent protection just because it once explained something well.',
          'That is how I want to treat design knowledge too. A principle can be valuable and still be incomplete. A method can solve one class of problems and fail in another. Updating the model is not disrespect toward the person who proposed it. It is what serious engagement with the idea looks like.',
        ],
      },
      {
        heading: 'Challenge the idea, not the person',
        body: [
          'Critical thinking is not automatic disagreement. Rejecting every established idea is just another shortcut. A better process is to restate the claim fairly, identify the conditions it depends on, compare it with the situation at hand and test the smallest meaningful prediction. I also ask what failure would look like and what result would change my mind.',
          'This makes disagreement more useful. Instead of saying “I do not like this approach,” we can say which assumption does not hold, which user behavior contradicts it or which trade-off the framework hides. The conversation moves away from status and taste toward something the team can examine together.',
        ],
      },
      {
        heading: 'Keep what survives',
        body: [
          'The goal is not to prove that respected people are wrong. The goal is to avoid outsourcing judgment. Learn from strong thinkers, read the research and study successful products—but do not stop at admiration. Pull the idea apart, use it, test its edges and see what remains dependable.',
          'An idea becomes more valuable when you can defend it without leaning on the authority that introduced it. At that point it is no longer borrowed confidence. It is understanding you can actually use.',
        ],
      },
    ],
  },
  {
    slug: 'the-hidden-cost-of-designing-for-the-deadline',
    title: 'The Hidden Cost of Designing for the Deadline',
    excerpt:
      'Rushing toward a finished screen can skip the information, user and system flows that make it work. The time saved in design returns as confusion across the whole team.',
    date: '2026-07-22',
    readingMinutes: 8,
    tags: ['Product Design', 'Collaboration'],
    vector: 'network',
    intro:
      'Deadline pressure creates a very specific temptation: show the end product as quickly as possible. A polished screen feels like progress because everyone can see it. The less visible work—organizing information, mapping the user\'s path, understanding system behavior and checking edge cases—starts to feel optional. It is not optional. We are only moving its cost to somebody else.',
    sections: [
      {
        heading: 'A quick screen can create slow work',
        body: [
          'When the team asks for a design by tomorrow, producing a believable interface may be the fastest way to satisfy the request. But a believable interface is not necessarily a resolved product. If the flow beneath it is unclear, developers have to infer behavior, product managers have to answer questions that should already be visible and clients discover missing decisions when the work looks nearly finished.',
          'That is why “we saved time in design” can be a misleading sentence. We may have saved design time in one moment while creating review loops, rework, inconsistent implementation and late negotiation for everyone else. The clock did not disappear. It changed owners.',
        ],
      },
      {
        heading: 'Four flows disappear under pressure',
        body: [
          'Information flow asks what the user needs to know, when they need it and where it comes from. User flow asks how a person enters, progresses, changes direction and leaves. System flow asks what the product must validate, store, calculate, request or wait for. Edge-case flow asks what happens when the expected sequence breaks. These are different views of the same experience, and skipping any one of them creates blind spots.',
          'A clean checkout screen, for example, tells us very little by itself. We still need to know what happens when a price changes, a payment remains pending, an address is incomplete, inventory disappears or the user returns later. The exact cases differ by product, but the underlying responsibility does not: the design must describe behavior, not only appearance.',
        ],
      },
      {
        heading: 'The waste moves through the team',
        body: [
          'A missing decision rarely stays contained. The designer creates a local patch. The developer implements an assumption. Quality testing exposes a different interpretation. The product manager reopens the requirement. The client sees an inconsistency and questions the larger solution. One unresolved rule has now produced work in five places.',
          'The worst part is that each person can appear to be doing their job correctly. The developer followed the screen. The designer followed the brief. The product manager protected the date. The client approved what was shown. The failure belongs to the handoff between those views, where nobody maintained a complete picture of the flow.',
        ],
      },
      {
        heading: 'Do the smallest amount of complete thinking',
        body: [
          'Time pressure is real, so the answer cannot always be a long discovery phase. I would rather reduce fidelity than remove thinking. A rough flow with clear states is more valuable than a polished screen full of silent assumptions. Even a short pass can identify the primary goal, required information, major system responses, permissions, empty and error states, and the decisions that remain open.',
          'This creates an honest boundary around the work. We can say which path is ready, which cases are deferred and which assumptions need confirmation. That is much safer than allowing visual completeness to imply product completeness.',
        ],
      },
      {
        heading: 'A deadline should force prioritization, not denial',
        body: [
          'Good deadline decisions are explicit trade-offs. We might limit the first release, simplify a rule, postpone a secondary path or accept a temporary manual step. What we should not do is pretend the missing behavior does not exist because it is inconvenient to model.',
          'Speed matters. So does knowing what we are speeding past. The fastest teams are not the ones that never think through complexity; they are the ones that expose it early enough to choose what deserves attention. A few hours spent on the right flow can prevent days of scattered correction later.',
        ],
      },
    ],
  },
  {
    slug: 'when-products-get-serious-every-word-matters',
    title: 'When Products Get Serious, Every Word Matters',
    excerpt:
      'As a product takes on real consequences, small interface decisions stop being cosmetic. Words, defaults and feedback shape what users understand and what they risk.',
    date: '2026-07-16',
    readingMinutes: 7,
    tags: ['Content Design', 'Product Design'],
    vector: 'geometry',
    intro:
      'In an early concept, a vague label can look harmless. In a serious product, that same label can cause the wrong action, hide a consequence or make a user doubt whether the system understood them. The closer a product gets to handling real money, real work, real records or real commitments, the less room there is for casual decisions.',
    sections: [
      {
        heading: 'Seriousness is about consequence',
        body: [
          'A product does not become serious because its interface looks formal. It becomes serious when actions carry weight. Sending, deleting, approving, publishing, transferring, assigning and signing are not interchangeable button labels. Each one sets an expectation about what will happen and whether the action can be reversed.',
          'The designer\'s responsibility grows with that consequence. A playful animation may be fine, but it cannot obscure a pending state. A compact control may save space, but it cannot hide who will receive the change. Visual polish has to support the decision the user is making, not compete with it.',
        ],
      },
      {
        heading: 'Words are part of the product logic',
        body: [
          'Interface copy is often treated as something added after the layout is finished. I think that reverses the relationship. The words define the action, explain the state and tell the user what the system needs. If the team cannot write a clear label for a button, the action itself may still be unclear.',
          '“Continue” is convenient because it fits almost anywhere, but it tells the user almost nothing. Continue to a review? Submit the request? Start a paid plan? Give access to another person? Specific language makes the product\'s promise visible. It also forces the team to agree on what the control actually does.',
        ],
      },
      {
        heading: 'Defaults are decisions made on the user\'s behalf',
        body: [
          'A selected checkbox, a prefilled audience, an automatic renewal or a remembered filter can make an experience easier. It can also steer behavior without the user noticing. Defaults deserve the same scrutiny as explicit actions because many people will accept them simply by moving forward.',
          'I ask whether the default is safe, expected and easy to understand. I also ask who benefits when the user does nothing. That question is uncomfortable in a useful way. It reveals when convenience for the business is being presented as convenience for the user.',
        ],
      },
      {
        heading: 'Feedback must close the loop',
        body: [
          'After an important action, silence is not minimalism. The user needs to know what happened, whether it finished, what changed and what they can do next. A success message should name the result. An error should explain the problem without blaming the person and offer a realistic recovery. A pending state should remain visible for as long as the outcome is unresolved.',
          'These moments determine whether people trust the system. A beautiful main flow cannot compensate for a confirmation that disappears too quickly or an error that says only “something went wrong.” Precision matters most when the user is uncertain.',
        ],
      },
      {
        heading: 'Care is visible in the small decisions',
        body: [
          'Every choice does not need a meeting, but every meaningful choice needs a reason. Why this word? Why this default? Why this order? Why is the destructive action beside the safe one? Why can this change be undone but that one cannot? The point is not to slow design down. It is to stop accidental decisions from becoming permanent behavior.',
          'As products get serious, craft becomes less about making each screen impressive and more about making each decision dependable. Users may never notice every detail we considered. They will notice when those details fail them.',
        ],
      },
    ],
  },
  {
    slug: 'development-creates-engineering-makes-dependable',
    title: 'Development Creates It. Engineering Makes It Dependable.',
    excerpt:
      'Building a working product and making it reliable are connected but different kinds of work. Strong teams respect both—and know when the second job must begin.',
    date: '2026-07-10',
    readingMinutes: 8,
    tags: ['Engineering', 'Product Thinking'],
    vector: 'tooling',
    intro:
      'Development creates the thing. Engineering keeps asking what the thing must survive. I find that distinction useful, not as a hierarchy and not as a way to divide people into better and worse job titles, but as a way to describe two modes of work that every serious product eventually needs.',
    sections: [
      {
        heading: 'A working path is a real achievement',
        body: [
          'Turning an idea into functioning software is difficult. Someone has to translate uncertain requirements into behavior, connect the pieces, make the interface respond and deliver a path that users can complete. That act of development creates value. Without it, the product remains a conversation, a diagram or a set of screens.',
          'The first working version also teaches the team things that planning cannot. It exposes missing rules, awkward dependencies and assumptions that sounded reasonable before they met real use. Speed is valuable here because a functioning thing gives everyone something concrete to examine.',
        ],
      },
      {
        heading: 'Working once is not the same as working dependably',
        body: [
          'A successful demo answers one question: can the intended path work under these conditions? A dependable product has to answer many more. What happens under load? What happens when a dependency is slow, data is incomplete, a request is repeated or a release goes wrong? Can the team observe the failure, recover safely and change the system without breaking unrelated behavior?',
          'Engineering begins when those constraints are treated as part of the product rather than as technical cleanup. Reliability, security, maintainability, performance and operability are not invisible extras. They shape whether the promise made by the interface can be kept repeatedly.',
        ],
      },
      {
        heading: 'The distinction is about the work, not the title',
        body: [
          'In real teams, developers do engineering and engineers do development. The boundaries move with the company, the product and the stage of work. I am not interested in using the words to rank people. A person who ships a thoughtful feature may be doing both modes in the same afternoon.',
          'The distinction matters because teams can overvalue either side. Endless architecture can prevent useful software from reaching anyone. Endless feature delivery can produce a product that becomes fragile with every change. Creating and refining need each other.',
        ],
      },
      {
        heading: 'Refinement turns assumptions into guarantees',
        body: [
          'The path from a prototype to a dependable system is a process of making promises explicit. Which data must never be lost? Which actions must be safe to repeat? Which failures should be visible to users? How quickly does the system need to respond? What can degrade temporarily, and what must remain available? The answers guide architecture, testing, monitoring and recovery.',
          'This work can feel slower because its best outcomes are events that do not happen: the duplicate charge that is prevented, the broken release that is caught, the outage that is contained. The absence of failure is easy to overlook, but it is one of the main things users are trusting the product to provide.',
        ],
      },
      {
        heading: 'Design is part of dependability too',
        body: [
          'Designers should care about this distinction because the interface is where system guarantees become user expectations. If an action is asynchronous, the design needs a durable pending state. If data can be stale, the user needs context. If recovery has limits, the product should not imply that every mistake is reversible. Honest UX depends on honest system behavior.',
          'The strongest products are built by teams that create boldly and refine responsibly. Development gets the thing into the world. Engineering helps it remain worthy of use. Neither contribution is small, and neither can replace the other.',
        ],
      },
    ],
  },
]
