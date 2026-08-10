import { BadgeCheck, GraduationCap, Languages, MapPin } from 'lucide-react'
import { education, languages, profile } from '../data/cv'
import { GlowCard, Reveal, SectionHeading } from './ui'

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading index="04" label="Education" title="The foundation." />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <Reveal>
          <GlowCard className="flex h-full flex-col">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
                <GraduationCap size={20} strokeWidth={2} />
              </span>
              <h3 className="font-display text-lg font-semibold tracking-tight">
                Education
              </h3>
            </div>

            <p className="font-display text-gradient mt-6 text-2xl font-semibold tracking-tight">
              {education.degree}
            </p>
            <p className="mt-3 text-base font-medium text-fog">{education.school}</p>
            <p className="mt-1 text-sm text-mist">{education.period}</p>
          </GlowCard>
        </Reveal>

        <Reveal delay={0.1}>
          <GlowCard className="flex h-full flex-col">
            <h3 className="font-display text-lg font-semibold tracking-tight">
              Beyond the code
            </h3>

            <ul className="mt-6 flex flex-col gap-3">
              {languages.map((language) => (
                <li key={language} className="flex items-center gap-3 text-sm text-fog">
                  <Languages size={15} className="text-cyan-300" strokeWidth={2} />
                  {language}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-4 pt-8">
              <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="text-sm text-mist">
                  Authorization to work in Portugal
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                  <BadgeCheck size={13} strokeWidth={2} />
                  Yes
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-mist">
                <MapPin size={15} className="text-indigo-300" strokeWidth={2} />
                {profile.location}
              </div>
            </div>
          </GlowCard>
        </Reveal>
      </div>
    </section>
  )
}
