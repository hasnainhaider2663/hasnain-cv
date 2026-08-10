import { motion, useReducedMotion } from 'framer-motion'
import { Pill, Reveal, SectionHeading } from './ui'
import { roles } from '../data/cv'

export default function Experience() {
  const reduced = useReducedMotion()

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading
        index="02"
        label="Experience"
        title="Where I've built, led and shipped."
        lead="Seven roles across startup strategy and enterprise scale — full stack, end to end."
      />

      <div className="relative mt-16 md:mt-20">
        <div
          aria-hidden
          className="absolute bottom-6 left-[11px] top-6 w-px bg-gradient-to-b from-accent via-flare to-aqua opacity-50"
        />

        <div className="space-y-14 md:space-y-20">
          {roles.map((role, i) => {
            const even = i % 2 === 0
            return (
              <Reveal
                key={role.company}
                delay={Math.min(i * 0.06, 0.3)}
                className="group relative grid grid-cols-[24px_1fr] gap-x-6 md:grid-cols-[24px_180px_1fr] md:gap-x-8"
              >
                {even ? (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-4 rounded-3xl bg-[radial-gradient(ellipse_at_top_right,rgba(129,140,248,0.10),transparent_62%)] md:-inset-8"
                  />
                ) : null}

                <div className="relative">
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-7 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-accent via-flare to-aqua shadow-[0_0_18px_rgba(129,140,248,0.55)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_30px_rgba(129,140,248,0.9)]"
                  />
                </div>

                <div className="relative hidden md:block">
                  <div className="md:sticky md:top-10 text-sm font-medium leading-relaxed text-mist">
                    {role.period}
                  </div>
                </div>

                <div className="relative">
                  <motion.div
                    whileHover={reduced ? undefined : { y: -4 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                    className="group/card"
                  >
                    <div className="rounded-2xl transition-shadow duration-300 group-hover/card:shadow-[0_0_90px_-25px_rgba(129,140,248,0.4)]">
                      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors duration-300 group-hover/card:border-white/10 sm:p-8">
                        <span className="block text-xs font-medium uppercase tracking-wider text-mist md:hidden">
                          {role.period}
                        </span>

                        <div className="mt-3 flex flex-wrap items-center gap-3 md:mt-0">
                          <h3 className="text-gradient font-display text-xl font-semibold tracking-tight sm:text-2xl">
                            {role.company}
                          </h3>
                          {role.tag ? <Pill>{role.tag}</Pill> : null}
                        </div>

                        <p className="mt-1 text-sm font-medium text-fog/90">
                          {role.title}
                        </p>

                        <ul className="mt-5 space-y-3">
                          {role.points.map((point) => (
                            <li
                              key={point}
                              className="flex gap-4 text-[15px] leading-relaxed text-mist"
                            >
                              <span
                                aria-hidden
                                className="mt-[9px] h-2 w-2 shrink-0 rotate-45 rounded-[2px] bg-gradient-to-br from-accent via-flare to-aqua"
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
