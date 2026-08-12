import { ArrowUpRight, Quote } from 'lucide-react'
import { Reveal, SectionHeading } from './ui'
import { profile } from '../data/cv'
import { reviews } from '../data/reviews'

export default function References() {
  return (
    <section id="references" className="section-rule mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading index="04" label="References" title="Recommended by people I've shipped with." lead="Letters and testimonials from managers and teammates." />

      <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6">
        {reviews.map((r, i) => (
          <Reveal key={r.author + i} delay={Math.min(i * 0.08, 0.2)}>
            <figure className="paper-panel flex h-full flex-col p-6 sm:p-8">
              <Quote size={22} strokeWidth={2} className="text-accent" />
              <blockquote className="mt-5 font-display text-xl leading-snug text-balance">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto border-t border-border/20 pt-4">
                <p className="font-sans text-sm font-bold">{r.author || 'Teammate'}</p>
                <p className="mt-0.5 text-sm font-semibold text-cobalt">{r.company}</p>
                <p className="mt-1 font-mono text-[11px] tracking-wider text-muted uppercase">
                  {r.role}{r.period ? ` · ${r.period}` : ''}{r.source ? ` · ${r.source}` : ''}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-12">
        <a href={profile.upwork} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 font-mono text-xs text-accent hover:underline">
          More reviews on Upwork <ArrowUpRight size={13} strokeWidth={2} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </Reveal>
    </section>
  )
}
