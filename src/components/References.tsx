import { Award, ExternalLink, HeartHandshake } from 'lucide-react'
import { profile } from '../data/cv'
import { Reveal, SectionHeading } from './ui'

export default function References() {
  return (
    <section id="references" className="section-rule mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading index="05" label="References" title="Straight from the people I've built with." />

      <Reveal className="mt-16">
        <blockquote className="text-center">
          <span className="display-type block text-6xl text-balance sm:text-8xl lg:text-9xl">
            <span className="text-cobalt">“</span>Years, not weeks.<span className="text-cobalt">”</span>
          </span>
        </blockquote>
      </Reveal>

      <Reveal delay={0.1} className="mt-14">
        <a href={profile.upwork} target="_blank" rel="noopener noreferrer" className="block group">
           <div className="border-brutal border-cobalt bg-cobalt p-7 text-bg transition-colors group-hover:bg-accent group-hover:text-fg sm:p-10">
            <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <div className="max-w-xl">
                <p className="font-sans text-xl font-bold tracking-tight">Built together, long term.</p>
                <p className="mt-4 leading-relaxed">
                  Most of my work runs on long-term engagements — years, not weeks. Clients stick around because the code keeps shipping.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center border border-bg/40 px-3 py-1 font-mono text-xs font-medium text-bg">
                    <Award size={12} className="mr-1 inline" strokeWidth={2} />Excellent track record
                  </span>
                  <span className="inline-flex items-center border border-bg/40 px-3 py-1 font-mono text-xs font-medium text-bg">
                    <HeartHandshake size={12} className="mr-1 inline" strokeWidth={2} />Long-term engagements
                  </span>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 border border-current px-5 py-2.5 font-mono text-sm font-bold transition-colors group-hover:border-bg group-hover:text-bg">
                View Upwork <ExternalLink size={14} strokeWidth={2} />
              </span>
            </div>
           </div>
        </a>
      </Reveal>
    </section>
  )
}
