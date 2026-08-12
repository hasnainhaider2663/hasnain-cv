import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Reveal, SectionHeading } from './ui'
import { jobs } from '../data/jobs'

function Row({ job, idx }: { job: (typeof jobs)[number]; idx: number }) {
  const [open, setOpen] = useState(false)
  const num = String(idx + 1).padStart(2, '0')

  return (
    <li className="border-t border-bg/15 first:border-t-0">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="group block w-full px-4 py-5 text-left transition-colors hover:bg-bg/5 sm:px-5"
      >
        <div className="flex items-baseline gap-3 font-mono text-sm sm:text-base">
          <ChevronRight size={14} strokeWidth={2} className={`shrink-0 text-accent transition-transform ${open ? 'rotate-90' : ''}`} />
          <span className="opacity-40">{num}</span>
          <span className="font-bold tracking-tight">{job.company}</span>
          <span className="hidden text-xs opacity-50 sm:inline">·</span>
          <span className="hidden text-xs opacity-60 sm:inline">{job.tag}</span>
          <span className="ml-auto text-xs tracking-wider opacity-50">{job.period}</span>
        </div>

        <div className="mt-1.5 ml-7 hidden font-mono text-[11px] tracking-wider opacity-60 sm:block">
          {job.title}
        </div>

        {open && (
          <div className="mt-4 ml-7 border-l border-accent/40 pl-4">
            <div className="prose-job text-sm leading-relaxed opacity-90" dangerouslySetInnerHTML={{ __html: job.description }} />
          </div>
        )}
      </button>
    </li>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-rule mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading index="02" label="Experience" title="Where I've built, led and shipped." lead="Seven roles across startup strategy and enterprise scale." />

      <Reveal delay={0.1} className="mt-16 md:mt-20">
        <div className="ink-block overflow-hidden">
          <div className="flex items-center gap-2 border-b border-bg/15 px-4 py-2.5 font-mono text-[11px] opacity-60 sm:px-5">
            <span className="h-2.5 w-2.5 rounded-full bg-coral" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full bg-sky" />
            <span className="ml-3 tracking-wider">~/experience — bash</span>
          </div>
          <div className="px-4 py-3 font-mono text-[11px] tracking-wider opacity-50 sm:px-5">
            $ cat experience.log
          </div>
          <ul>
            {jobs.map((job, i) => (
              <Row key={job.slug} job={job} idx={i} />
            ))}
          </ul>
          <div className="border-t border-bg/15 px-4 py-2.5 font-mono text-[11px] tracking-wider opacity-40 sm:px-5">
            {jobs.length} roles · click row to expand
          </div>
        </div>
      </Reveal>
    </section>
  )
}
