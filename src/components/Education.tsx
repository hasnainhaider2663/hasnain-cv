import { GraduationCap, Languages, MapPin, Terminal } from 'lucide-react'
import { education, languages, profile } from '../data/cv'
import { Reveal, SectionHeading, Pill } from './ui'
import LoaderRickshaw from './LoaderRickshaw'

export default function Education() {
  return (
    <section id="education" className="section-rule mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading index="04" label="Education" title="The foundation." />

      <div className="mt-14 grid gap-8 md:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="ink-block flex h-full flex-col p-7 sm:p-10">
            <GraduationCap size={22} strokeWidth={2} className="text-accent" />
            <p className="mt-5 font-sans text-2xl font-bold tracking-tight">{education.degree}</p>
            <p className="mt-3 text-base font-medium">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-muted">{education.period}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="border-brutal flex h-full flex-col p-7 sm:p-10">
            <Terminal size={22} strokeWidth={2} className="text-accent" />
            <blockquote className="mt-5 font-display text-3xl leading-tight text-cobalt sm:text-4xl">
              “Anyone could program computers to do what they wanted.”
            </blockquote>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              GW-BASIC in 9th grade, Linux soon after, then Computer Science at COMSATS.
            </p>

            <div className="mt-6 border border-border/20 bg-[#efe8dc] p-4">
              <LoaderRickshaw className="h-auto w-full max-w-sm" />
              <p className="mt-3 font-mono text-[11px] leading-relaxed text-[#3a3f45]">
                Islamabad, riding the loader — everyone squeezed inside, one mad lad hanging off the back. That&apos;s me.
              </p>
            </div>

            <h3 className="mt-6 font-sans text-lg font-bold tracking-tight">Beyond the code</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {languages.map(lang => (
                <li key={lang} className="flex items-center gap-3 font-mono text-sm">
                  <Languages size={14} strokeWidth={2} className="text-accent" />{lang}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-4 pt-8">
              <div className="flex items-center justify-between border p-4">
                <span className="font-mono text-xs text-muted">Work authorization</span>
                <Pill accent>Portugal</Pill>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-muted">
                <MapPin size={14} strokeWidth={2} className="text-accent" />{profile.location}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
