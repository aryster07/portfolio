import type { BlogVector } from '@/data/blogPosts'

/**
 * Abstract cover art for the blog cards — one distinct vector per post, drawn
 * in ink on the white band. Placeholders until real cover images exist, but
 * they read as deliberate rather than as missing images.
 */
const frame = {
  viewBox: '0 0 384 240',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
  className: 'size-full',
}

export function BlogVector({ name }: { name: BlogVector }) {
  switch (name) {
    // Stacked geometry — composition / minimalism.
    case 'geometry':
      return (
        <svg {...frame}>
          <rect x="128" y="150" width="128" height="26" fill="#0C0C0C" />
          <circle cx="152" cy="120" r="26" fill="#0C0C0C" />
          <path d="M212 94l30 52h-60z" fill="#0C0C0C" />
          <path d="M112 64 176 178" stroke="#0C0C0C" strokeWidth="3" />
        </svg>
      )

    // Overlapping panels with a focus ring — accessibility / contrast.
    case 'contrast':
      return (
        <svg {...frame}>
          <rect x="96" y="72" width="104" height="104" fill="#0C0C0C" />
          <rect
            x="176"
            y="96"
            width="104"
            height="104"
            stroke="#0C0C0C"
            strokeWidth="3"
            fill="#FFFFFF"
          />
          <circle cx="176" cy="124" r="18" fill="#FFFFFF" stroke="#0C0C0C" strokeWidth="3" />
        </svg>
      )

    // Node graph — research synthesis.
    case 'network':
      return (
        <svg {...frame}>
          <path
            d="M96 168 152 92 216 148 288 76M152 92 176 176M216 148 264 184"
            stroke="#0C0C0C"
            strokeWidth="2.5"
          />
          {[
            [96, 168],
            [152, 92],
            [216, 148],
            [288, 76],
            [176, 176],
            [264, 184],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="8" fill="#0C0C0C" />
          ))}
        </svg>
      )

    // Nested frames — design systems.
    case 'system':
      return (
        <svg {...frame}>
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={112 + i * 18}
              y={60 + i * 14}
              width={160 - i * 36}
              height={120 - i * 28}
              stroke="#0C0C0C"
              strokeWidth="2.5"
              fill="none"
            />
          ))}
          <circle cx="192" cy="120" r="5" fill="#0C0C0C" />
        </svg>
      )

    // A solid original beside a traced outline with nothing inside it.
    case 'replica':
      return (
        <svg {...frame}>
          <rect x="96" y="76" width="88" height="88" fill="#0C0C0C" />
          <circle cx="140" cy="120" r="16" fill="#FFFFFF" />
          <path d="M124 148h32" stroke="#FFFFFF" strokeWidth="4" />
          <rect
            x="212"
            y="76"
            width="88"
            height="88"
            stroke="#0C0C0C"
            strokeWidth="3"
            strokeDasharray="10 8"
            fill="#FFFFFF"
          />
        </svg>
      )

    // A dense mass beside the thin layer added on top — scale mismatch.
    case 'scale':
      return (
        <svg {...frame}>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect key={i} x="88" y={68 + i * 16} width="112" height="8" fill="#0C0C0C" />
          ))}
          <path d="M200 152 232 152" stroke="#0C0C0C" strokeWidth="2.5" />
          <rect
            x="232"
            y="140"
            width="60"
            height="24"
            stroke="#0C0C0C"
            strokeWidth="3"
            fill="#FFFFFF"
          />
        </svg>
      )

    // Cursor + selection marquee — tooling / plugins.
    case 'tooling':
      return (
        <svg {...frame}>
          <rect
            x="108"
            y="70"
            width="152"
            height="104"
            stroke="#0C0C0C"
            strokeWidth="2.5"
            strokeDasharray="10 8"
          />
          {[
            [108, 70],
            [260, 70],
            [108, 174],
            [260, 174],
          ].map(([x, y]) => (
            <rect key={`${x}-${y}`} x={x - 6} y={y - 6} width="12" height="12" fill="#0C0C0C" />
          ))}
          <path d="M196 116l44 52-18 4-8 20z" fill="#0C0C0C" />
        </svg>
      )
  }
}
