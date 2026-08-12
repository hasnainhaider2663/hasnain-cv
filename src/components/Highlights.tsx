import { BarChart3, Code2, Cpu, Rocket, Users, type LucideIcon } from 'lucide-react'
import { Reveal, SectionHeading } from './ui'
import { highlights } from '../data/cv'
import { reviews } from '../data/reviews'

const icons: LucideIcon[] = [Cpu, BarChart3, Users, Rocket, Code2]

export default function Highlights() {
  return (
    <section id="highlights" className="section-rule mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading index="01" label="Highlights" title="A decade of shipping, a habit of impact." lead="What people say about working with me." />

      <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, i) => (
          <Reveal key={review.company + i} delay={Math.min(i * 0.05, 0.3)}>
            <figure className="section-rule flex h-full flex-col pt-4">
              <blockquote className="mt-5 font-display text-xl leading-snug">“{review.quote}”</blockquote>
              <figcaption className="mt-5 border-t border-border/20 pt-3">
                {review.author && <span className="font-sans text-sm font-bold">{review.author}</span>}
                <span className="block text-sm font-semibold text-cobalt">{review.company}</span>
                <span className="block font-mono text-xs text-muted">
                  {review.role}
                  {review.period ? ` · ${review.period}` : ''}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-12">
        {highlights.map((h, i) => {
          const Icon = icons[i] ?? Cpu
            const span = i < 2 ? 'md:col-span-6' : 'md:col-span-4'
          return (
            <Reveal key={h.title} delay={Math.min(i * 0.06, 0.3)} className={span}>
              <div className="section-rule flex h-full flex-col pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <Icon size={20} strokeWidth={2} className="text-cobalt" />
                </div>
                <h3 className="mt-5 font-sans text-xl font-bold tracking-tight">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{h.body}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
