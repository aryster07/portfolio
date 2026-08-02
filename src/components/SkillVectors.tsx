import { useReducedMotion } from 'framer-motion'
import type { SkillIcon } from '@/data/content'

/** Animated line-art vectors for the skills cards. */
const common = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  className: 'size-full',
}

export function SkillVector({ name }: { name: SkillIcon }) {
  const reduceMotion = useReducedMotion()

  switch (name) {
    // Neural net — nodes pulse in sequence along the connections.
    case 'neural':
      return (
        <svg {...common}>
          <path d="M10 14h12M10 24h12M10 34h12M26 24h12" opacity={0.5} />
          <path d="M22 14 38 24 22 34" opacity={0.5} />
          {[
            { cx: 10, cy: 14, d: '0s' },
            { cx: 10, cy: 24, d: '0.3s' },
            { cx: 10, cy: 34, d: '0.6s' },
            { cx: 22, cy: 24, d: '0.9s' },
            { cx: 38, cy: 24, d: '1.2s' },
          ].map((n) => (
            <circle key={`${n.cx}-${n.cy}`} cx={n.cx} cy={n.cy} r="3" fill="currentColor">
              {!reduceMotion && (
                <animate
                  attributeName="opacity"
                  values="0.35;1;0.35"
                  dur="2.4s"
                  begin={n.d}
                  repeatCount="indefinite"
                />
              )}
            </circle>
          ))}
        </svg>
      )

    // Concentric rings breathing outward.
    case 'circle':
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="16">
            {!reduceMotion && <animate attributeName="r" values="16;18;16" dur="3s" repeatCount="indefinite" />}
          </circle>
          <circle cx="24" cy="24" r="9" opacity={0.6}>
            {!reduceMotion && <animate attributeName="r" values="9;7;9" dur="3s" repeatCount="indefinite" />}
          </circle>
          <circle cx="24" cy="24" r="2.5" fill="currentColor" />
        </svg>
      )

    // Hexagon slowly rotating with a scanning magnifier.
    case 'hexagon':
      return (
        <svg {...common}>
          <path d="M24 5 40 14v20L24 43 8 34V14Z">
            {!reduceMotion && (
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 24 24;360 24 24"
                dur="24s"
                repeatCount="indefinite"
              />
            )}
          </path>
          <circle cx="22" cy="22" r="6" opacity={0.8}>
            {!reduceMotion && <animate attributeName="cx" values="20;28;20" dur="4s" repeatCount="indefinite" />}
          </circle>
          <path d="m27 27 5 5" opacity={0.8}>
            {!reduceMotion && (
              <animateTransform
                attributeName="transform"
                type="translate"
                values="-2 0;6 0;-2 0"
                dur="4s"
                repeatCount="indefinite"
              />
            )}
          </path>
        </svg>
      )

    // Triangle with a wireframe sweep, for prototyping.
    case 'triangle':
      return (
        <svg {...common}>
          <path d="M24 8 42 40H6Z" />
          <path d="M15 27h18" opacity={0.55}>
            {!reduceMotion && <animate attributeName="opacity" values="0.15;0.9;0.15" dur="2.2s" repeatCount="indefinite" />}
          </path>
          <path d="M19.5 18h9" opacity={0.55}>
            {!reduceMotion && (
              <animate
                attributeName="opacity"
                values="0.15;0.9;0.15"
                dur="2.2s"
                begin="0.5s"
                repeatCount="indefinite"
              />
            )}
          </path>
        </svg>
      )

    // Figma's stacked-shape idea: a diamond that flips.
    case 'diamond':
      return (
        <svg {...common}>
          <path d="M24 6 42 24 24 42 6 24Z">
            {!reduceMotion && (
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 24 24;180 24 24;0 24 24"
                dur="8s"
                repeatCount="indefinite"
              />
            )}
          </path>
          <path d="M24 15 33 24l-9 9-9-9Z" opacity={0.65} fill="currentColor" fillOpacity={0.18} />
        </svg>
      )

    // Two rings orbiting — design systems.
    case 'rings':
      return (
        <svg {...common}>
          <g>
            <circle cx="18" cy="24" r="11" opacity={0.85} />
            <circle cx="30" cy="24" r="11" opacity={0.85} />
            {!reduceMotion && (
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 24 24;360 24 24"
                dur="14s"
                repeatCount="indefinite"
              />
            )}
          </g>
        </svg>
      )

    // Bars rising and falling — research data.
    case 'bars':
      return (
        <svg {...common}>
          <path d="M6 42h36" opacity={0.5} />
          {[
            { x: 12, h: 14, d: '0s' },
            { x: 21, h: 24, d: '0.35s' },
            { x: 30, h: 18, d: '0.7s' },
          ].map((b) => (
            <rect
              key={b.x}
              x={b.x}
              y={38 - b.h}
              width="6"
              height={b.h}
              rx="1.5"
              fill="currentColor"
              fillOpacity={0.25}
            >
              {!reduceMotion && (
                <>
                  <animate
                    attributeName="height"
                    values={`${b.h};${b.h * 0.45};${b.h}`}
                    dur="2.8s"
                    begin={b.d}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    values={`${38 - b.h};${38 - b.h * 0.45};${38 - b.h}`}
                    dur="2.8s"
                    begin={b.d}
                    repeatCount="indefinite"
                  />
                </>
              )}
            </rect>
          ))}
        </svg>
      )
  }
}
