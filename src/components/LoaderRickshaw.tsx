import type { SVGProps } from 'react'

const INK = '#1c2430'
const SKIN = '#d9a878'

function Wheel({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#20242b" />
      <circle cx={cx} cy={cy} r={r - 6} fill="none" stroke="#3a4048" strokeWidth={3} />
      <circle cx={cx} cy={cy} r={r - 13} fill="#e6e6e6" />
      <circle cx={cx} cy={cy} r={3} fill="#20242b" />
      {[0, 60, 120, 180, 240, 300].map((a) => {
        const rad = (a * Math.PI) / 180
        return (
          <line
            key={a}
            x1={cx + Math.cos(rad) * (r - 8)}
            y1={cy + Math.sin(rad) * (r - 8)}
            x2={cx + Math.cos(rad) * (r - 3)}
            y2={cy + Math.sin(rad) * (r - 3)}
            stroke="#20242b"
            strokeWidth={2}
          />
        )
      })}
    </g>
  )
}

function Person({
  x,
  roofY,
  shirt,
  shirtShadow,
  isMe = false,
}: {
  x: number
  roofY: number
  shirt: string
  shirtShadow: string
  isMe?: boolean
}) {
  const headY = roofY + 22
  const hipY = headY + 58
  return (
    <g>
      {/* arms gripping roof */}
      <polygon points={`${x - 2},${roofY} ${x - 8},${roofY + 6} ${x - 5},${headY + 8} ${x + 2},${headY + 4}`} fill={shirtShadow} />
      <polygon points={`${x + 2},${roofY} ${x + 9},${roofY + 6} ${x + 6},${headY + 8} ${x - 1},${headY + 4}`} fill={shirtShadow} />
      {/* head */}
      <polygon points={`${x - 7},${headY - 4} ${x},${headY - 12} ${x + 7},${headY - 4} ${x + 5},${headY + 6} ${x},${headY + 9} ${x - 5},${headY + 6}`} fill={SKIN} />
      <polygon points={`${x - 7},${headY - 4} ${x},${headY - 12} ${x + 7},${headY - 4} ${x + 4},${headY - 8}`} fill="#2b2b2b" />
      {/* torso */}
      <polygon points={`${x - 6},${headY + 7} ${x + 6},${headY + 7} ${x + 8},${hipY} ${x - 8},${hipY}`} fill={shirt} />
      <polygon points={`${x - 6},${headY + 7} ${x},${headY + 7} ${x},${hipY} ${x - 8},${hipY}`} fill={shirtShadow} />
      {/* legs */}
      <polygon points={`${x - 7},${hipY} ${x - 1},${hipY} ${x - 4},${hipY + 18} ${x - 9},${hipY + 18}`} fill="#2f3a4a" />
      <polygon points={`${x + 1},${hipY} ${x + 7},${hipY} ${x + 9},${hipY + 18} ${x + 4},${hipY + 18}`} fill="#26313f" />
      {isMe && (
        <g>
          <rect x={x + 18} y={headY - 30} width={42} height={20} rx={3} fill="#f3eee4" stroke={INK} strokeWidth={1.5} />
          <polygon points={`${x + 60} ${headY - 24} ${x + 66} ${headY - 20} ${x + 60} ${headY - 16}`} fill="#f3eee4" stroke={INK} strokeWidth={1.5} />
          <text x={x + 39} y={headY - 15} fontSize="11" fontWeight="700" fill={INK} fontFamily="ui-sans-serif, sans-serif" textAnchor="middle">
            ME
          </text>
        </g>
      )}
    </g>
  )
}

export default function LoaderRickshaw(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 480 260" role="img" aria-label="Suzuki loader pickup truck with people hanging off the back" {...props}>
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5b6b7c" />
          <stop offset="100%" stopColor="#33404f" />
        </linearGradient>
        <linearGradient id="bodyDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a4757" />
          <stop offset="100%" stopColor="#24303d" />
        </linearGradient>
        <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9b794" />
          <stop offset="100%" stopColor="#a08a63" />
        </linearGradient>
        <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c0653a" />
          <stop offset="100%" stopColor="#8f4523" />
        </linearGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx={240} cy={226} rx={215} ry={10} fill="#000000" opacity={0.12} />

      {/* road */}
      <polygon points="0,230 480,230 480,248 0,248" fill="#3d4148" />
      <polygon points="0,238 480,238 480,246 0,246" fill="#484c54" />

      {/* wheels */}
      <Wheel cx={92} cy={202} r={26} />
      <Wheel cx={266} cy={202} r={26} />

      {/* bed rails + undercarriage */}
      <rect x={108} y={206} width={230} height={10} rx={3} fill={INK} />
      <line x1={128} y1={212} x2={128} y2={198} stroke={INK} strokeWidth={4} />
      <line x1={240} y1={212} x2={240} y2={198} stroke={INK} strokeWidth={4} />
      <line x1={318} y1={212} x2={318} y2={198} stroke={INK} strokeWidth={4} />

      {/* canopy roof */}
      <rect x={118} y={76} width={190} height={16} rx={5} fill="url(#roofGrad)" stroke={INK} strokeWidth={3} />
      <line x1={128} y1={92} x2={128} y2={150} stroke={INK} strokeWidth={4} />
      <line x1={296} y1={92} x2={296} y2={150} stroke={INK} strokeWidth={4} />
      {[150, 185, 220, 255].map((rx) => (
        <line key={rx} x1={rx} y1={92} x2={rx} y2={84} stroke="#7d6a4a" strokeWidth={3} />
      ))}

      {/* cargo bed */}
      <rect x={120} y={150} width={182} height={12} fill={INK} />
      <rect x={120} y={130} width={182} height={22} fill="url(#bodyDark)" stroke={INK} strokeWidth={3} />
      {/* cargo */}
      <polygon points="150,130 200,130 200,100 150,106" fill="#8b4a2f" stroke={INK} strokeWidth={2} />
      <polygon points="200,130 250,130 250,92 200,100" fill="#a05a38" stroke={INK} strokeWidth={2} />
      <polygon points="160,106 200,100 206,102 165,108" fill="#6f3a24" />
      {/* people sitting in the bed (busts above the rail) */}
      <polygon points="148,132 178,132 176,150 150,150" fill="#4f5d7a" stroke={INK} strokeWidth={1} />
      <polygon points="150,120 158,112 166,120 164,130 152,130" fill={SKIN} />
      <polygon points="150,120 158,112 166,120 162,116" fill="#2b2b2b" />
      <polygon points="196,132 226,132 224,150 198,150" fill="#5a7a55" stroke={INK} strokeWidth={1} />
      <polygon points="198,120 206,112 214,120 212,130 200,130" fill={SKIN} />
      <polygon points="198,120 206,112 214,120 210,116" fill="#2b2b2b" />
      <polygon points="244,132 274,132 272,150 246,150" fill="#8a6a45" stroke={INK} strokeWidth={1} />
      <polygon points="246,120 254,112 262,120 260,130 248,130" fill={SKIN} />
      <polygon points="246,120 254,112 262,120 258,116" fill="#2b2b2b" />

      {/* cab */}
      <path d="M 52 196 L 52 140 Q 52 126 66 126 L 96 126 L 96 116 Q 96 100 110 96 L 150 96 L 150 196 Z" fill="url(#bodyGrad)" stroke={INK} strokeWidth={4} />
      {/* windshield */}
      <polygon points="100,104 136,98 136,124 100,124" fill="#a9c4d6" stroke={INK} strokeWidth={2} opacity={0.9} />
      <polygon points="100,104 136,98 136,124 100,124" fill="#6d8aa0" opacity={0.4} />
      {/* driver */}
      <polygon points="106,128 128,124 132,138 106,140" fill={SKIN} stroke={INK} strokeWidth={1.5} />
      <polygon points="104,120 130,116 130,124 104,126" fill="#3a3a3a" />
      <polygon points="112,128 124,125 130,138 118,142" fill="#4a6b8a" stroke={INK} strokeWidth={1} />
      {/* headlight + grille */}
      <rect x={56} y={150} width={20} height={12} rx={3} fill="#f2d36b" stroke={INK} strokeWidth={2} />
      <path d="M 58 176 h 30 v 6 h -30 z" fill={INK} />
      <path d="M 62 196 L 54 186 Q 54 178 58 176" fill="none" stroke={INK} strokeWidth={3} />
      {/* accent stripe */}
      <path d="M 52 160 L 96 160 L 96 196 L 52 196 Z" fill="url(#accentGrad)" opacity={0.85} />
      <path d="M 58 160 h 34 v 4 h -34 z" fill="#e0804f" opacity={0.9} />
      {/* door line */}
      <line x1={96} y1={130} x2={96} y2={196} stroke={INK} strokeWidth={3} opacity={0.6} />

      {/* me hanging off the back */}
      <Person x={310} roofY={92} shirt="#b3552f" shirtShadow="#8a3f1f" isMe />
    </svg>
  )
}
