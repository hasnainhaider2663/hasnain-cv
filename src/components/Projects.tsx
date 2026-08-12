import { ArrowUpRight } from 'lucide-react'
import { Pill, Reveal, SectionHeading } from './ui'
import { projects } from '../data/projects'

const LAYOUT = [
  { cols: 'md:col-span-8', pad: 'p-7 sm:p-10', num: 'P-01', heading: 'text-2xl sm:text-4xl', dim: '8 × 4', tone: 'paper' },
  { cols: 'md:col-span-4', pad: 'p-6', num: 'P-02', heading: 'text-xl sm:text-2xl', dim: '4 × 4', tone: 'ink' },
  { cols: 'md:col-span-4', pad: 'p-6', num: 'P-03', heading: 'text-xl sm:text-2xl', dim: '4 × 4', tone: 'coral' },
  { cols: 'md:col-span-5', pad: 'p-6 sm:p-8', num: 'P-04', heading: 'text-2xl', dim: '5 × 4', tone: 'cobalt' },
  { cols: 'md:col-span-7', pad: 'p-7 sm:p-10', num: 'P-05', heading: 'text-2xl sm:text-4xl', dim: '7 × 4', tone: 'paper' },
  { cols: 'md:col-span-5', pad: 'p-6 sm:p-8', num: 'P-06', heading: 'text-2xl', dim: '5 × 4', tone: 'ink' },
  { cols: 'md:col-span-4', pad: 'p-6', num: 'P-07', heading: 'text-xl sm:text-2xl', dim: '4 × 4', tone: 'coral' },
]

const CORNERS = ['top-2 left-2 border-t border-l', 'top-2 right-2 border-t border-r', 'bottom-2 left-2 border-b border-l', 'bottom-2 right-2 border-b border-r']

export default function Projects() {
  return (
    <section id="projects" className="section-rule mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading index="02 / PROJECTS" label="Grid" title="Things I've built, shipped and scaled." lead="Selected products across community, commerce, streaming and edtech." />

      <div className="relative mt-20">
        <div aria-hidden className="blueprint-grid absolute inset-0 -z-10 opacity-60" />
        <div className="grid items-start gap-6 md:grid-cols-12">
          {projects.map((project, i) => {
            const layout = LAYOUT[i % LAYOUT.length]
            const tone = layout.tone
            const toneClass =
              tone === 'ink' ? 'ink-block' : tone === 'cobalt' ? 'border-brutal bg-cobalt text-bg' : tone === 'coral' ? 'border-brutal bg-coral text-fg' : 'paper-panel'

            return (
              <Reveal key={project.slug} delay={Math.min(i * 0.05, 0.2)} className={layout.cols}>
                <article className={`relative ${toneClass} flex h-full flex-col ${layout.pad}`}>
                  {CORNERS.map((c, ci) => (
                    <span
                      key={ci}
                      aria-hidden
                      className={`absolute ${c} h-2.5 w-2.5 ${tone === 'paper' ? 'border-fg/40' : 'border-current opacity-40'}`}
                    />
                  ))}

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className={`font-mono text-[10px] tracking-[0.25em] ${tone === 'paper' ? 'text-accent' : 'opacity-70'}`}>{layout.num}</span>
                      <h3 className={`mt-2 font-sans font-bold tracking-tight ${layout.heading}`}>{project.name}</h3>
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

                  <div className="mt-6 flex items-end justify-between gap-3">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-accent hover:underline"
                      >
                        OPEN <ArrowUpRight size={12} strokeWidth={2} />
                      </a>
                    ) : <span />}
                    <span className={`font-mono text-[10px] tracking-[0.2em] opacity-60`}>DIM {layout.dim}</span>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
