import { motion, useReducedMotion } from 'framer-motion'
import type { CSSProperties } from 'react'
import {
  Code2,
  Cloud,
  Layers,
  Server,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { skillGroups } from '../data/cv'
import { GlowCard, Reveal, SectionHeading } from './ui'

const GROUP_ICONS: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Server,
  'Cloud & Infra': Cloud,
  Mobile: Smartphone,
  'AI / LLM': Sparkles,
  Additional: Layers,
}

export default function Skills() {
  const reduced = useReducedMotion()

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading
        index="03"
        label="Skills"
        title="A full-stack arsenal."
        lead="From pixels to Postgres to prompt engineering — the stack I reach for."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = GROUP_ICONS[group.name] ?? Sparkles
          return (
            <Reveal key={group.name} delay={Math.min(i * 0.07, 0.35)}>
              <motion.div
                whileHover={reduced ? undefined : { y: -6 }}
                transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                className="group h-full"
              >
                <div className="h-full rounded-2xl transition-shadow duration-300 group-hover:shadow-[0_0_80px_-20px_rgba(129,140,248,0.5)]">
                  <GlowCard className="flex h-full flex-col">
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: `${group.accent}1f`,
                          color: group.accent,
                        }}
                      >
                        <Icon size={20} strokeWidth={2} />
                      </span>
                      <h3 className="font-display text-lg font-semibold tracking-tight">
                        {group.name}
                      </h3>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-mist transition-colors duration-300 hover:border-[var(--pill-accent)] hover:text-fog"
                          style={{ '--pill-accent': group.accent } as CSSProperties}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </GlowCard>
                </div>
              </motion.div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
