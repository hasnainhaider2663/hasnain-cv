import { ArrowUpRight } from 'lucide-react'
import { Pill, Reveal, SectionHeading } from './ui'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section-rule mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading index="02" label="Projects" title="Things I've built, shipped and scaled." lead="Selected products across community, commerce, streaming and edtech." />

      <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={Math.min((i % 2) * 0.08, 0.16)}>
            <article className="paper-panel flex h-full flex-col p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-sans text-2xl font-bold tracking-tight">{project.name}</h3>
                  <p className="mt-1 font-mono text-xs tracking-wider text-muted">{project.period}</p>
                </div>
                {project.tag && <Pill accent>{project.tag}</Pill>}
              </div>

              <div className="prose-job mt-5 flex-1 text-sm leading-relaxed text-muted" dangerouslySetInnerHTML={{ __html: project.description }} />

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className="border px-2.5 py-1 font-mono text-[11px] text-muted">
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
        ))}
      </div>
    </section>
  )
}
