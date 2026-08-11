import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Pill, Reveal, SectionHeading } from './ui'
import { jobs } from '../data/jobs'

export default function Experience() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section id="experience" className="section-rule mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading index="02" label="Experience" title="Where I've built, led and shipped." lead="Seven roles across startup strategy and enterprise scale." />

      <div className="relative mt-16 md:mt-20">
        <div aria-hidden className="absolute bottom-0 left-[7px] top-0 w-[3px] bg-accent" />

        <div className="space-y-16 md:space-y-20">
          {jobs.map((job, i) => (
            <Reveal key={job.slug} delay={Math.min(i * 0.05, 0.25)}>
              <div className="relative grid grid-cols-[20px_1fr] gap-x-6 md:grid-cols-[20px_160px_1fr] md:gap-x-10">
                <div className="relative">
                  <span aria-hidden className="absolute left-1/2 top-5 h-5 w-5 -translate-x-1/2 bg-accent md:top-0" />
                </div>

                <div className="hidden md:block">
                  <div className="sticky top-12 font-mono text-xs tracking-wider text-muted">{job.period}</div>
                </div>

                <div>
                  <span className="block font-mono text-xs tracking-wider text-muted md:hidden">{job.period}</span>

                  <div className="mt-2 flex flex-wrap items-center gap-3 md:mt-0">
                    <h3 className="font-sans text-xl font-bold tracking-tight sm:text-2xl">{job.company}</h3>
                    {job.tag && <Pill>{job.tag}</Pill>}
                  </div>

                  <p className="mt-1 font-mono text-sm text-accent">{job.title}</p>

                  <div
                    className={`prose-job mt-5 overflow-hidden text-sm leading-relaxed text-muted transition-[max-height] duration-500 ${expanded === job.slug ? 'max-h-[1600px]' : 'max-h-36'}`}
                    dangerouslySetInnerHTML={{ __html: job.description }}
                  />
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === job.slug ? null : job.slug)}
                    aria-expanded={expanded === job.slug}
                    className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-accent hover:underline"
                  >
                    {expanded === job.slug ? 'Show less' : 'Read more'}
                    <ChevronDown size={14} className={`transition-transform ${expanded === job.slug ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
