import type { CSSProperties } from 'react'
import { Code2, Cloud, Layers, Server, Smartphone, Sparkles, type LucideIcon } from 'lucide-react'
import { skillGroups } from '../data/cv'
import { Reveal, SectionHeading } from './ui'

const GROUP_ICONS: Record<string, LucideIcon> = {
  Frontend: Code2, Backend: Server, 'Cloud & Infra': Cloud, Mobile: Smartphone, Additional: Layers,
}

export default function Skills() {
  return (
    <section id="skills" className="section-rule mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading index="03" label="Skills" title="A full-stack arsenal." lead="From pixels to Postgres — the stack I reach for." />

      <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = GROUP_ICONS[group.name] ?? Sparkles
          return (
            <Reveal key={group.name} delay={Math.min(i * 0.06, 0.3)}>
              <div className="section-rule flex h-full flex-col pt-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-sans text-2xl font-bold tracking-tight">{group.name}</h3>
                  <Icon size={20} strokeWidth={2} style={{ color: group.accent }} />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="border px-2.5 py-1 font-mono text-[11px] text-muted break-words"
                      style={{ borderColor: `${group.accent}44` } as CSSProperties}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
