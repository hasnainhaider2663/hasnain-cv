import { Diamond } from 'lucide-react'
import { marqueeItems } from '../data/cv'

function Row() {
  return (
    <div className="flex w-max flex-shrink-0 items-center">
      {marqueeItems.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap px-6 text-sm font-medium uppercase tracking-[0.2em] text-mist transition-colors duration-300 hover:text-fog">
            {item}
          </span>
          <Diamond size={8} className="fill-violet-400/50 text-violet-400/50" aria-hidden />
        </span>
      ))}
    </div>
  )
}

export default function Marquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="mask-fade-x relative overflow-hidden border-y border-white/10 py-5">
      <div
        className="flex w-max animate-marquee"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        <Row />
        <Row />
      </div>
    </div>
  )
}
