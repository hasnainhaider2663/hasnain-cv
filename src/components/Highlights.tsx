import { motion, useReducedMotion } from 'framer-motion'
import { BarChart3, Code2, Cpu, Rocket, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { GlowCard, Reveal, SectionHeading } from './ui'
import { highlights } from '../data/cv'

const stats = [
  { value: '11+', label: 'years experience' },
  { value: '338', label: 'PRs shipped' },
  { value: '20k', label: 'tickets sold in 8h peak' },
  { value: '41%', label: 'LLM cost cut' },
]

const icons: LucideIcon[] = [Cpu, BarChart3, Users, Rocket, Code2]

export default function Highlights() {
  const reduced = useReducedMotion()

  return (
    <section id="highlights" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[9rem] font-bold tracking-[0.18em] text-white/[0.02] md:text-[15rem]">
          IMPACT
        </span>
      </div>

      <div className="relative">
        <SectionHeading
          index="01"
          label="Highlights"
          title="A decade of shipping, a habit of impact."
          lead="What I'm best known for across eleven years of building."
        />

        <Reveal delay={0.18}>
          <div className="glass mt-16 grid grid-cols-2 gap-x-6 gap-y-10 rounded-2xl px-6 py-10 sm:px-10 md:mt-20 md:grid-cols-4 md:px-12">
            {stats.map((stat) => (
              <div key={stat.value} className="md:text-center">
                <div className="text-gradient font-display text-4xl font-semibold tracking-tight md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-mist">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-6 md:mt-20">
          {highlights.map((highlight, i) => {
            const Icon = icons[i] ?? Cpu
            const span = i < 2 ? 'md:col-span-3' : 'md:col-span-2'
            return (
              <Reveal key={highlight.title} delay={Math.min(0.1 + i * 0.08, 0.4)} className={span}>
                <motion.div
                  whileHover={reduced ? undefined : { y: -4 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  className="group h-full"
                >
                  <div className="h-full rounded-2xl transition-shadow duration-300 group-hover:shadow-[0_0_80px_-20px_rgba(129,140,248,0.5)]">
                    <GlowCard className="flex h-full flex-col">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#a5b4fc] via-[#e879f9] to-[#22d3ee]">
                        <Icon size={18} strokeWidth={2} className="text-ink" aria-hidden />
                      </div>
                      <h3 className="font-display mt-5 text-lg font-semibold tracking-tight text-fog">
                        {highlight.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-mist">
                        {highlight.body}
                      </p>
                    </GlowCard>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
