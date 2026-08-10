import { motion, useReducedMotion } from 'framer-motion'
import { Award, ExternalLink, HeartHandshake } from 'lucide-react'
import { profile } from '../data/cv'
import { GlowCard, Reveal, SectionHeading } from './ui'

export default function References() {
  const reduced = useReducedMotion()

  return (
    <section id="references" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading
        index="05"
        label="References"
        title="Straight from the people I've built with."
      />

      <Reveal className="mt-14">
        <motion.div
          whileHover={reduced ? undefined : { y: -4 }}
          transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          className="group"
        >
          <div className="rounded-2xl transition-shadow duration-300 group-hover:shadow-[0_0_90px_-25px_rgba(232,121,249,0.5)]">
            <a
              href={profile.upwork}
              target="_blank"
              rel="noreferrer"
              className="block"
              aria-label="View Hasnain Haider's Upwork profile"
            >
              <GlowCard>
                <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
                  <div className="max-w-xl">
                    <p className="font-display text-xl font-semibold tracking-tight text-fog">
                      Built together, long term.
                    </p>
                    <p className="mt-4 leading-relaxed text-mist">
                      Most of my work runs on long-term engagements — years, not weeks.
                      Clients stick around because the code keeps shipping and the
                      product keeps improving. Further references provided upon request.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-mist">
                        <Award size={13} strokeWidth={2} className="text-indigo-300" />
                        Excellent track record
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-mist">
                        <HeartHandshake
                          size={13}
                          strokeWidth={2}
                          className="text-fuchsia-300"
                        />
                        Long-term engagements
                      </span>
                    </div>
                  </div>

                  <span className="font-display inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-fog transition-colors duration-300 group-hover:border-white/25 group-hover:bg-white/[0.08]">
                    View Upwork profile
                    <ExternalLink
                      size={16}
                      strokeWidth={2}
                      className="text-gradient text-transparent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </GlowCard>
            </a>
          </div>
        </motion.div>
      </Reveal>
    </section>
  )
}
