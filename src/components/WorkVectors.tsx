import { motion, useReducedMotion } from 'framer-motion'
import type { WorkVectorName } from '@/data/content'

const FRAME = {
  viewBox: '0 0 640 400',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
  focusable: false,
  className: 'work-vector size-full',
} as const

const loop = {
  duration: 6,
  repeat: Number.POSITIVE_INFINITY,
  ease: [0.65, 0, 0.35, 1] as const,
  times: [0, 0.18, 0.46, 0.64, 1],
}

function Handle({ x, y }: { x: number; y: number }) {
  return (
    <rect
      x={x - 5}
      y={y - 5}
      width="10"
      height="10"
      rx="2"
      fill="#141414"
      stroke="#D7E2EA"
      strokeWidth="2"
      vectorEffect="non-scaling-stroke"
    />
  )
}

type ComponentTileProps = {
  x: number
  y: number
  dx: number
  dy: number
  rotation: number
  variant: 'diamond' | 'circle' | 'bars' | 'frame'
  reducedMotion: boolean
}

function ComponentTile({ x, y, dx, dy, rotation, variant, reducedMotion }: ComponentTileProps) {
  return (
    <motion.g
      initial={false}
      transform={reducedMotion ? `translate(${dx} ${dy})` : undefined}
      animate={
        reducedMotion
          ? undefined
          : {
              x: [0, 0, dx, dx, 0],
              y: [0, 0, dy, dy, 0],
              rotate: [rotation, rotation, 0, 0, rotation],
            }
      }
      transition={loop}
      style={{ transformOrigin: `${x + 44}px ${y + 30}px` }}
    >
      <g transform={`translate(${x} ${y})`}>
        <rect
          width="88"
          height="60"
          rx="12"
          fill="#171717"
          stroke="#D7E2EA"
          strokeOpacity="0.58"
          strokeWidth="2"
        />
        {variant === 'diamond' && <path d="m25 14 13 13-13 13-13-13Z" fill="#D7E2EA" />}
        {variant === 'circle' && <circle cx="25" cy="27" r="13" fill="#D7E2EA" />}
        {variant === 'bars' && (
          <g fill="#D7E2EA">
            <rect x="12" y="30" width="7" height="11" rx="2" />
            <rect x="23" y="20" width="7" height="21" rx="2" />
            <rect x="34" y="13" width="7" height="28" rx="2" />
          </g>
        )}
        {variant === 'frame' && (
          <rect x="12" y="14" width="28" height="26" rx="4" stroke="#D7E2EA" strokeWidth="3" />
        )}
        <rect x="52" y="18" width="23" height="6" rx="3" fill="#D7E2EA" fillOpacity="0.8" />
        <rect x="52" y="31" width="17" height="5" rx="2.5" fill="#D7E2EA" fillOpacity="0.3" />
      </g>
    </motion.g>
  )
}

function CompMagnetVector({ reducedMotion }: { reducedMotion: boolean }) {
  const tiles: Omit<ComponentTileProps, 'reducedMotion'>[] = [
    { x: 72, y: 86, dx: 148, dy: 44, rotation: -7, variant: 'diamond' },
    { x: 466, y: 78, dx: -134, dy: 52, rotation: 8, variant: 'circle' },
    { x: 84, y: 258, dx: 136, dy: -44, rotation: 5, variant: 'bars' },
    { x: 478, y: 266, dx: -146, dy: -52, rotation: -6, variant: 'frame' },
  ]

  return (
    <svg {...FRAME}>
      <defs>
        <linearGradient id="magnet-surface" x1="40" y1="30" x2="600" y2="370">
          <stop stopColor="#111111" />
          <stop offset="0.52" stopColor="#1A1A1A" />
          <stop offset="1" stopColor="#0E0E0E" />
        </linearGradient>
        <radialGradient id="magnet-glow" cx="50%" cy="50%" r="50%">
          <stop stopColor="#D7E2EA" stopOpacity="0.15" />
          <stop offset="1" stopColor="#D7E2EA" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="640" height="400" fill="url(#magnet-surface)" />
      <circle cx="320" cy="202" r="176" fill="url(#magnet-glow)" />
      <g stroke="#D7E2EA" strokeOpacity="0.07">
        <path d="M48 64h544M48 128h544M48 192h544M48 256h544M48 320h544" />
        <path d="M96 48v304M176 48v304M256 48v304M336 48v304M416 48v304M496 48v304M576 48v304" />
      </g>

      <motion.rect
        x="184"
        y="96"
        width="272"
        height="220"
        rx="28"
        fill="#0C0C0C"
        fillOpacity="0.52"
        stroke="#D7E2EA"
        strokeWidth="2"
        strokeDasharray="10 8"
        animate={reducedMotion ? undefined : { strokeOpacity: [0.18, 0.18, 0.72, 0.72, 0.18] }}
        transition={loop}
      />

      <text
        x="320"
        y="70"
        fill="#D7E2EA"
        fillOpacity="0.48"
        textAnchor="middle"
        fontFamily="IBM Plex Sans, sans-serif"
        fontSize="13"
        fontWeight="600"
        letterSpacing="2.4"
      >
        COMPONENT COLLECTION
      </text>

      <motion.g
        opacity={reducedMotion ? 0.5 : 0.14}
        animate={reducedMotion ? undefined : { opacity: [0.08, 0.08, 0.5, 0.5, 0.08] }}
        transition={loop}
        stroke="#D7E2EA"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M140 205c38-60 85-90 140-96M500 205c-38-60-85-90-140-96" />
        <path d="M140 220c38 60 85 90 140 96M500 220c-38 60-85 90-140 96" />
      </motion.g>

      {tiles.map((tile) => (
        <ComponentTile key={`${tile.x}-${tile.y}`} {...tile} reducedMotion={reducedMotion} />
      ))}

      <motion.g
        opacity={reducedMotion ? 1 : 0}
        animate={reducedMotion ? undefined : { opacity: [0, 0, 1, 1, 0] }}
        transition={loop}
      >
        <rect x="290" y="326" width="60" height="34" rx="17" fill="#D7E2EA" />
        <text
          x="320"
          y="348"
          fill="#0C0C0C"
          textAnchor="middle"
          fontFamily="IBM Plex Sans, sans-serif"
          fontSize="13"
          fontWeight="700"
        >
          4 / 4
        </text>
      </motion.g>
    </svg>
  )
}

type FontRowProps = {
  y: number
  family: string
  sample: string
  missing?: boolean
  reducedMotion: boolean
}

function FontRow({ y, family, sample, missing = false, reducedMotion }: FontRowProps) {
  return (
    <motion.g
      initial={false}
      animate={reducedMotion ? undefined : { x: [-14, -14, 0, 0, -14], opacity: [0.45, 0.45, 1, 1, 0.45] }}
      transition={loop}
    >
      <motion.rect
        x="136"
        y={y}
        width="368"
        height="58"
        rx="13"
        fill={missing ? '#D7E2EA' : '#171717'}
        fillOpacity={missing ? 0.08 : 1}
        stroke="#D7E2EA"
        strokeOpacity={missing ? 0.64 : 0.16}
        animate={
          reducedMotion || !missing ? undefined : { fillOpacity: [0.05, 0.05, 0.18, 0.18, 0.05] }
        }
        transition={loop}
      />
      <text
        x="158"
        y={y + 25}
        fill="#D7E2EA"
        fontFamily="IBM Plex Sans, sans-serif"
        fontSize="14"
        fontWeight="650"
      >
        {family}
      </text>
      <text
        x="158"
        y={y + 44}
        fill="#D7E2EA"
        fillOpacity="0.38"
        fontFamily="IBM Plex Sans, sans-serif"
        fontSize="11"
      >
        {sample}
      </text>
      <circle
        cx="472"
        cy={y + 29}
        r="13"
        fill={missing ? '#D7E2EA' : 'none'}
        stroke="#D7E2EA"
        strokeOpacity={missing ? 0.9 : 0.42}
        strokeWidth="2"
      />
      {missing ? (
        <g stroke="#0C0C0C" strokeWidth="2.5" strokeLinecap="round">
          <path d={`M472 ${y + 22}v9`} />
          <path d={`M472 ${y + 35}h.01`} />
        </g>
      ) : (
        <path
          d={`m466 ${y + 29} 4 4 8-9`}
          fill="none"
          stroke="#D7E2EA"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </motion.g>
  )
}

function FontManagerVector({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <svg {...FRAME}>
      <defs>
        <linearGradient id="font-surface" x1="42" y1="32" x2="598" y2="368">
          <stop stopColor="#0E0E0E" />
          <stop offset="0.5" stopColor="#191919" />
          <stop offset="1" stopColor="#101010" />
        </linearGradient>
      </defs>

      <rect width="640" height="400" fill="url(#font-surface)" />
      <rect x="104" y="40" width="432" height="320" rx="28" fill="#101010" stroke="#D7E2EA" strokeOpacity="0.18" />

      <rect x="136" y="66" width="54" height="45" rx="12" fill="#D7E2EA" />
      <text
        x="163"
        y="96"
        fill="#0C0C0C"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="22"
        fontWeight="700"
      >
        Aa
      </text>
      <text
        x="207"
        y="84"
        fill="#D7E2EA"
        fontFamily="IBM Plex Sans, sans-serif"
        fontSize="15"
        fontWeight="700"
      >
        FONT MANAGER
      </text>
      <text
        x="207"
        y="104"
        fill="#D7E2EA"
        fillOpacity="0.38"
        fontFamily="IBM Plex Sans, sans-serif"
        fontSize="11"
      >
        2 installed · 1 missing
      </text>

      <FontRow y={128} family="IBM Plex Sans" sample="Interface sample" reducedMotion={reducedMotion} />
      <FontRow y={194} family="Moonrock" sample="Display sample" reducedMotion={reducedMotion} />
      <FontRow
        y={260}
        family="Neue Montreal"
        sample="Missing from this device"
        missing
        reducedMotion={reducedMotion}
      />

      <motion.g
        opacity={reducedMotion ? 0 : 1}
        animate={reducedMotion ? undefined : { y: [0, 0, 150, 150, 0], opacity: [0, 0.9, 0.9, 0, 0] }}
        transition={loop}
      >
        <rect x="126" y="130" width="388" height="2" rx="1" fill="#D7E2EA" />
        <rect x="126" y="124" width="388" height="14" fill="#D7E2EA" fillOpacity="0.045" />
      </motion.g>
    </svg>
  )
}

type CommentBubbleProps = {
  x: number
  y: number
  dx: number
  dy: number
  avatar: string
  reducedMotion: boolean
}

function CommentBubble({ x, y, dx, dy, avatar, reducedMotion }: CommentBubbleProps) {
  return (
    <motion.g
      initial={false}
      transform={reducedMotion ? `translate(${dx} ${dy})` : undefined}
      animate={reducedMotion ? undefined : { x: [0, 0, dx, dx, 0], y: [0, 0, dy, dy, 0] }}
      transition={loop}
    >
      <g transform={`translate(${x} ${y})`}>
        <rect width="154" height="58" rx="15" fill="#171717" stroke="#D7E2EA" strokeOpacity="0.48" />
        <path d="M24 58 14 70l2-18" fill="#171717" stroke="#D7E2EA" strokeOpacity="0.48" />
        <circle cx="27" cy="25" r="13" fill="#D7E2EA" />
        <text
          x="27"
          y="30"
          fill="#0C0C0C"
          textAnchor="middle"
          fontFamily="IBM Plex Sans, sans-serif"
          fontSize="11"
          fontWeight="700"
        >
          {avatar}
        </text>
        <rect x="50" y="16" width="81" height="6" rx="3" fill="#D7E2EA" fillOpacity="0.72" />
        <rect x="50" y="30" width="66" height="5" rx="2.5" fill="#D7E2EA" fillOpacity="0.3" />
        <rect x="50" y="42" width="42" height="5" rx="2.5" fill="#D7E2EA" fillOpacity="0.18" />
      </g>
    </motion.g>
  )
}

function GetCommentsVector({ reducedMotion }: { reducedMotion: boolean }) {
  const comments: Omit<CommentBubbleProps, 'reducedMotion'>[] = [
    { x: 58, y: 66, dx: 278, dy: 44, avatar: 'A' },
    { x: 92, y: 176, dx: 244, dy: 4, avatar: 'M' },
    { x: 48, y: 288, dx: 288, dy: -38, avatar: 'R' },
  ]

  return (
    <svg {...FRAME}>
      <defs>
        <linearGradient id="comments-surface" x1="46" y1="38" x2="596" y2="366">
          <stop stopColor="#111111" />
          <stop offset="0.58" stopColor="#1A1A1A" />
          <stop offset="1" stopColor="#0E0E0E" />
        </linearGradient>
      </defs>

      <rect width="640" height="400" fill="url(#comments-surface)" />
      <g stroke="#D7E2EA" strokeOpacity="0.07">
        <path d="M44 80h552M44 144h552M44 208h552M44 272h552M44 336h552" />
        <path d="M92 44v312M172 44v312M252 44v312M332 44v312M412 44v312M492 44v312M572 44v312" />
      </g>

      <rect x="306" y="42" width="286" height="320" rx="26" fill="#0C0C0C" fillOpacity="0.72" stroke="#D7E2EA" strokeOpacity="0.24" />
      <text
        x="334"
        y="78"
        fill="#D7E2EA"
        fontFamily="IBM Plex Sans, sans-serif"
        fontSize="14"
        fontWeight="700"
        letterSpacing="1.6"
      >
        COMMENTS
      </text>
      <rect x="526" y="60" width="38" height="27" rx="13.5" fill="#D7E2EA" />
      <text
        x="545"
        y="78"
        fill="#0C0C0C"
        textAnchor="middle"
        fontFamily="IBM Plex Sans, sans-serif"
        fontSize="12"
        fontWeight="700"
      >
        03
      </text>

      {comments.map((comment) => (
        <CommentBubble key={comment.avatar} {...comment} reducedMotion={reducedMotion} />
      ))}

      <motion.g
        opacity={reducedMotion ? 1 : 0}
        animate={reducedMotion ? undefined : { opacity: [0, 0, 1, 1, 0], y: [8, 8, 0, 0, 8] }}
        transition={loop}
      >
        <rect x="334" y="324" width="94" height="28" rx="14" fill="#D7E2EA" />
        <path d="M353 334h11v9h-11zM357 331h11v9" fill="none" stroke="#0C0C0C" strokeWidth="1.7" />
        <text x="375" y="343" fill="#0C0C0C" fontFamily="IBM Plex Sans, sans-serif" fontSize="11" fontWeight="700">
          COPY
        </text>
        <rect x="438" y="324" width="116" height="28" rx="14" fill="#171717" stroke="#D7E2EA" strokeOpacity="0.38" />
        <rect x="454" y="332" width="12" height="11" rx="2" stroke="#D7E2EA" strokeWidth="1.7" />
        <text x="475" y="343" fill="#D7E2EA" fontFamily="IBM Plex Sans, sans-serif" fontSize="11" fontWeight="700">
          FRAME
        </text>
      </motion.g>
    </svg>
  )
}

function SelectToReplaceVector({ reducedMotion }: { reducedMotion: boolean }) {
  const sourceMotion = reducedMotion ? undefined : { x: [0, 0, 300, 300, 0] }
  const replacementMotion = reducedMotion ? undefined : { x: [0, 0, -300, -300, 0] }

  return (
    <svg {...FRAME}>
      <defs>
        <linearGradient id="replace-surface" x1="52" y1="42" x2="588" y2="358">
          <stop stopColor="#1A1A1A" />
          <stop offset="1" stopColor="#101010" />
        </linearGradient>
        <radialGradient id="replace-glow" cx="50%" cy="50%" r="50%">
          <stop stopColor="#D7E2EA" stopOpacity="0.13" />
          <stop offset="1" stopColor="#D7E2EA" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="640" height="400" fill="url(#replace-surface)" />
      <circle cx="320" cy="200" r="150" fill="url(#replace-glow)" />

      <g stroke="#D7E2EA" strokeOpacity="0.08" strokeWidth="1">
        {[92, 152, 212, 272, 332, 392, 452, 512, 572].map((x) => (
          <path key={`v-${x}`} d={`M${x} 48v304`} />
        ))}
        {[80, 140, 200, 260, 320].map((y) => (
          <path key={`h-${y}`} d={`M52 ${y}h536`} />
        ))}
      </g>

      <text
        x="114"
        y="83"
        fill="#D7E2EA"
        fillOpacity="0.46"
        fontFamily="IBM Plex Sans, sans-serif"
        fontSize="13"
        fontWeight="600"
        letterSpacing="2.2"
      >
        SELECTED
      </text>
      <text
        x="414"
        y="83"
        fill="#D7E2EA"
        fillOpacity="0.46"
        fontFamily="IBM Plex Sans, sans-serif"
        fontSize="13"
        fontWeight="600"
        letterSpacing="2.2"
      >
        REPLACE
      </text>

      <rect
        x="92"
        y="100"
        width="176"
        height="200"
        rx="18"
        stroke="#D7E2EA"
        strokeOpacity="0.58"
        strokeWidth="2"
        strokeDasharray="8 8"
      />
      <rect
        x="392"
        y="100"
        width="176"
        height="200"
        rx="18"
        stroke="#D7E2EA"
        strokeOpacity="0.24"
        strokeWidth="2"
      />

      <motion.g animate={sourceMotion} transition={loop}>
        <rect x="120" y="132" width="120" height="136" rx="15" fill="#D7E2EA" />
        <circle cx="180" cy="180" r="23" fill="#0C0C0C" />
        <rect x="146" y="222" width="68" height="7" rx="3.5" fill="#0C0C0C" fillOpacity="0.78" />
        <rect x="158" y="238" width="44" height="6" rx="3" fill="#0C0C0C" fillOpacity="0.34" />
      </motion.g>

      <motion.g animate={replacementMotion} transition={loop}>
        <rect
          x="420"
          y="132"
          width="120"
          height="136"
          rx="15"
          fill="#202020"
          stroke="#D7E2EA"
          strokeOpacity="0.76"
          strokeWidth="2"
        />
        <path d="m480 158 28 27-28 27-28-27Z" fill="#D7E2EA" />
        <rect x="446" y="226" width="68" height="7" rx="3.5" fill="#D7E2EA" fillOpacity="0.78" />
        <rect x="458" y="242" width="44" height="6" rx="3" fill="#D7E2EA" fillOpacity="0.34" />
      </motion.g>

      <g>
        <circle cx="330" cy="200" r="34" fill="#0C0C0C" stroke="#D7E2EA" strokeOpacity="0.42" />
        <motion.g
          animate={reducedMotion ? undefined : { rotate: [0, 0, 180, 180, 360] }}
          transition={loop}
          style={{ transformOrigin: '330px 200px' }}
          stroke="#D7E2EA"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M314 190h31l-8-8" />
          <path d="M346 210h-31l8 8" />
        </motion.g>
      </g>

      {[92, 268].map((x) => [100, 300].map((y) => <Handle key={`${x}-${y}`} x={x} y={y} />))}
    </svg>
  )
}

function ScaleMateVector({ reducedMotion }: { reducedMotion: boolean }) {
  const selectionMotion = reducedMotion
    ? undefined
    : { scale: [0.7, 0.7, 1, 1, 0.7], rotate: [-1.5, -1.5, 0, 0, -1.5] }
  const dimensionMotion = reducedMotion ? undefined : { scaleX: [0.7, 0.7, 1, 1, 0.7] }

  return (
    <svg {...FRAME}>
      <defs>
        <linearGradient id="scale-surface" x1="50" y1="42" x2="592" y2="360">
          <stop stopColor="#101010" />
          <stop offset="0.55" stopColor="#191919" />
          <stop offset="1" stopColor="#0E0E0E" />
        </linearGradient>
        <radialGradient id="scale-glow" cx="50%" cy="48%" r="50%">
          <stop stopColor="#D7E2EA" stopOpacity="0.12" />
          <stop offset="1" stopColor="#D7E2EA" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="640" height="400" fill="url(#scale-surface)" />
      <ellipse cx="320" cy="198" rx="230" ry="156" fill="url(#scale-glow)" />

      <rect x="64" y="56" width="512" height="288" rx="24" stroke="#D7E2EA" strokeOpacity="0.16" />
      <g stroke="#D7E2EA" strokeOpacity="0.08">
        <path d="M96 104h448M96 152h448M96 200h448M96 248h448M96 296h448" />
        <path d="M128 80v240M192 80v240M256 80v240M320 80v240M384 80v240M448 80v240M512 80v240" />
      </g>

      <motion.g
        animate={selectionMotion}
        transition={loop}
        style={{ transformOrigin: '320px 194px' }}
      >
        <rect
          x="190"
          y="112"
          width="260"
          height="164"
          rx="20"
          fill="#151515"
          stroke="#D7E2EA"
          strokeWidth="2"
          strokeDasharray="9 7"
          vectorEffect="non-scaling-stroke"
        />
        <rect x="218" y="140" width="76" height="76" rx="14" fill="#D7E2EA" />
        <circle cx="256" cy="178" r="19" fill="#0C0C0C" />
        <rect x="318" y="144" width="101" height="11" rx="5.5" fill="#D7E2EA" fillOpacity="0.9" />
        <rect x="318" y="169" width="82" height="8" rx="4" fill="#D7E2EA" fillOpacity="0.42" />
        <rect x="318" y="189" width="94" height="8" rx="4" fill="#D7E2EA" fillOpacity="0.24" />
        <rect x="218" y="238" width="201" height="10" rx="5" fill="#D7E2EA" fillOpacity="0.18" />

        <Handle x={190} y={112} />
        <Handle x={450} y={112} />
        <Handle x={190} y={276} />
        <Handle x={450} y={276} />
      </motion.g>

      <motion.g
        animate={dimensionMotion}
        transition={loop}
        style={{ transformOrigin: '320px 314px' }}
        stroke="#D7E2EA"
        strokeOpacity="0.62"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M190 314h260" />
        <path d="m202 307-12 7 12 7M438 307l12 7-12 7" />
      </motion.g>

      <motion.g
        opacity={reducedMotion ? 0 : 1}
        animate={reducedMotion ? undefined : { opacity: [1, 1, 0, 0, 1] }}
        transition={loop}
      >
        <rect x="290" y="296" width="60" height="35" rx="17.5" fill="#141414" stroke="#D7E2EA" strokeOpacity="0.28" />
        <text
          x="320"
          y="319"
          fill="#D7E2EA"
          fillOpacity="0.68"
          textAnchor="middle"
          fontFamily="IBM Plex Sans, sans-serif"
          fontSize="13"
          fontWeight="600"
          letterSpacing="1"
        >
          70%
        </text>
      </motion.g>
      <motion.g
        opacity={reducedMotion ? 1 : 0}
        animate={reducedMotion ? undefined : { opacity: [0, 0, 1, 1, 0] }}
        transition={loop}
      >
        <rect x="286" y="296" width="68" height="35" rx="17.5" fill="#D7E2EA" />
        <text
          x="320"
          y="319"
          fill="#0C0C0C"
          textAnchor="middle"
          fontFamily="IBM Plex Sans, sans-serif"
          fontSize="13"
          fontWeight="700"
          letterSpacing="1"
        >
          100%
        </text>
      </motion.g>
    </svg>
  )
}

export function WorkVector({ name }: { name: WorkVectorName }) {
  const reducedMotion = Boolean(useReducedMotion())

  switch (name) {
    case 'compmagnet':
      return <CompMagnetVector reducedMotion={reducedMotion} />
    case 'font-manager':
      return <FontManagerVector reducedMotion={reducedMotion} />
    case 'select-to-replace':
      return <SelectToReplaceVector reducedMotion={reducedMotion} />
    case 'scale-mate':
      return <ScaleMateVector reducedMotion={reducedMotion} />
    case 'comment-deck':
      return <GetCommentsVector reducedMotion={reducedMotion} />
  }
}
