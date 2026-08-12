import { ArrowUpRight } from 'lucide-react'
import { Pill, Reveal, SectionHeading } from './ui'
import { projects } from '../data/projects'

const LAYOUT = [
  { span: 'md:col-span-7', offset: 'md:mt-0', pad: 'p-6 sm:p-9', num: '01', heading: 'text-2xl sm:text-3xl', rotate: '-rotate-2', tone: 'paper' },
  { span: 'md:col-span-5', offset: 'md:mt-16', pad: 'p-6 sm:p-8', num: '02', heading: 'text-2xl', rotate: 'rotate-1', tone: 'ink' },
  { span: 'md:col-span-5', offset: 'md:-mt-8', pad: 'p-6 sm:p-8', num: '03', heading: 'text-2xl', rotate: '-rotate-1', tone: 'paper' },
  { span: 'md:col-span-7', offset: 'md:mt-8', pad: 'p-7 sm:p-10', num: '04', heading: 'text-2xl sm:text-3xl', rotate: 'rotate-2', tone: 'cobalt' },
  { span: 'md:col-span-12', offset: 'md:mt-10', pad: 'p-8 sm:p-12', num: '05', heading: 'text-3xl sm:text-4xl', rotate: '-rotate-1', tone: 'paper' },
  { span: 'md:col-span-5', offset: 'md:-mt-10', pad: 'p-6 sm:p-8', num: '06', heading: 'text-2xl', rotate: 'rotate-1', tone: 'ink' },
  { span: 'md:col-span-7', offset: 'md:mt-6', pad: 'p-6 sm:p-9', num: '07', heading: 'text-2xl sm:text-3xl', rotate: '-rotate-2', tone: 'paper' },
]

function Tape() {
  return (
    <span aria-hidden className="absolute left-1/2 top-0 z-20 h-6 w-24 -translate-x-1/2 -translate-y-1/2 -rotate-6 bg-accent/60 shadow-sm" />
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-rule mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading index="02" label="Projects" title="Things I've built, shipped and scaled." lead="Selected products across community, commerce, streaming and edtech." />

      <div className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-12 md:gap-y-24">
        {projects.map((project, i) => {
          const layout = LAYOUT[i % LAYOUT.length]
          const tone = layout.tone
          const toneClass = tone === 'ink' ? 'ink-block' : tone === 'cobalt' ? 'border-brutal bg-cobalt text-bg' : 'paper-panel'

          return (
            <Reveal key={project.slug} delay={Math.min(i * 0.05, 0.2)} className={`${layout.span} ${layout.offset}`}>
              <article
                className={`relative ${toneClass} flex h-full flex-col transition-transform duration-300 hover:z-30 hover:rotate-0 hover:scale-[1.02] ${layout.rotate} ${layout.pad}`}
              >
                <Tape />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={`display-type block text-5xl leading-none opacity-20 sm:text-6xl ${tone === 'paper' ? 'text-accent' : ''}`}>
                      {layout.num}
                    </span>
                    <h3 className={`mt-3 font-sans font-bold tracking-tight ${layout.heading}`}>{project.name}</h3>
                    <p className="mt-1 font-mono text-xs tracking-wider opacity-60">{project.period}</p>
                  </div>
                  {project.tag && <Pill accent>{project.tag}</Pill>}
                </div>

                <div className={`prose-job mt-5 flex-1 text-sm leading-relaxed opacity-90 ${tone === 'paper' ? 'text-muted' : ''}`} dangerouslySetInnerHTML={{ __html: project.description }} />

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className={`border px-2.5 py-1 font-mono text-[11px] ${tone === 'paper' ? 'text-muted' : 'opacity-70'}`}>
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:underline"
                  >
                    {project.linkLabel ?? project.link} <ArrowUpRight size={13} strokeWidth={2} />
                  </a>
                )}
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
