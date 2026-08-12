import { useState } from 'react'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { Reveal, SectionHeading } from './ui'
import { projects } from '../data/projects'

function Row({ project, idx }: { project: (typeof projects)[number]; idx: number }) {
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
          <span className="font-bold tracking-tight">{project.name}</span>
          <span className="hidden text-xs opacity-50 sm:inline">·</span>
          <span className="hidden text-xs opacity-60 sm:inline">{project.tag}</span>
          <span className="ml-auto text-xs tracking-wider opacity-50">{project.period}</span>
        </div>

        <div className="mt-1.5 ml-7 hidden font-mono text-[11px] tracking-wider opacity-60 sm:block">
          {project.stack.join('  ·  ')}
        </div>

        {open && (
          <div className="mt-4 ml-7 border-l border-accent/40 pl-4">
            <div className="prose-job text-sm leading-relaxed opacity-90" dangerouslySetInnerHTML={{ __html: project.description }} />
            <div className="mt-4 flex flex-wrap items-center gap-2 sm:hidden">
              {project.stack.map(tech => (
                <span key={tech} className="border border-bg/30 px-2 py-0.5 font-mono text-[10px] opacity-70">{tech}</span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:underline"
              >
                $ open {project.linkLabel ?? project.link} <ArrowUpRight size={12} strokeWidth={2} />
              </a>
            )}
          </div>
        )}
      </button>
    </li>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-rule mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading index="02" label="Projects" title="Things I've built, shipped and scaled." lead="Selected products across community, commerce, streaming and edtech." />

      <Reveal delay={0.1} className="mt-16 md:mt-20">
        <div className="ink-block overflow-hidden">
          <div className="flex items-center gap-2 border-b border-bg/15 px-4 py-2.5 font-mono text-[11px] opacity-60 sm:px-5">
            <span className="h-2.5 w-2.5 rounded-full bg-coral" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full bg-sky" />
            <span className="ml-3 tracking-wider">~/projects — bash</span>
          </div>
          <div className="px-4 py-3 font-mono text-[11px] tracking-wider opacity-50 sm:px-5">
            $ ls -la projects/ --expanded
          </div>
          <ul>
            {projects.map((project, i) => (
              <Row key={project.slug} project={project} idx={i} />
            ))}
          </ul>
          <div className="border-t border-bg/15 px-4 py-2.5 font-mono text-[11px] tracking-wider opacity-40 sm:px-5">
            {projects.length} entries · click row to expand
          </div>
        </div>
      </Reveal>
    </section>
  )
}
