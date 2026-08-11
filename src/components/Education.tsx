import { Languages, MapPin, Sparkles } from 'lucide-react'
import { languages, profile } from '../data/cv'
import { Reveal, SectionHeading, Pill } from './ui'
import LoaderRickshaw from './LoaderRickshaw'

export default function Education() {
  return (
    <section id="education" className="section-rule mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading index="04" label="The little things" title="More than the code." />

      <div className="mt-14">
        <Reveal>
          <div className="border-brutal flex h-full flex-col p-7 sm:p-10">
            <Sparkles size={22} strokeWidth={2} className="text-accent" />
            <blockquote className="mt-5 font-display text-3xl leading-tight text-cobalt sm:text-4xl">
              I sometimes had to hang off a rickshaw taxi to get to university.
            </blockquote>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Islamabad, riding the loader — everyone squeezed inside, one mad lad hanging off the back.
            </p>

            <div className="mt-6 border border-border/20 bg-[#efe8dc] p-6 sm:p-8">
              <LoaderRickshaw className="mx-auto h-auto w-full max-w-2xl" />
              <p className="mt-4 text-center font-mono text-[11px] leading-relaxed text-[#3a3f45]">
                That&apos;s me.
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
