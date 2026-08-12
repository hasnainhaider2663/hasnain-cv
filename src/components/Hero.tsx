import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { profile } from '../data/cv'
import { Reveal, Pill } from './ui'
import { GitHubIcon, LinkedInIcon } from './brand-icons'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -80])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, reduced ? 1 : 0.35])

  return (
    <section id="hero" ref={ref} className="relative min-h-[92vh] overflow-hidden border-brutal-b">
      <div className="grid-paper pointer-events-none absolute inset-0" aria-hidden />
      <div className="editorial-drift shape-circle pointer-events-none absolute -right-16 top-20 h-40 w-40 bg-sky/70" aria-hidden />
      <div className="editorial-drift shape-quarter pointer-events-none absolute bottom-0 left-0 h-28 w-28 bg-coral/80" style={{ animationDelay: '-2s' }} aria-hidden />
      <div className="editorial-drift shape-half pointer-events-none absolute bottom-0 right-20 h-24 w-48 bg-cobalt/90" style={{ animationDelay: '-4s' }} aria-hidden />
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-28 sm:px-8 lg:grid-cols-[92px_minmax(0,1fr)_280px] lg:gap-14 lg:py-36"
      >
        <div className="hidden border-r-2 border-border lg:flex lg:flex-col lg:justify-between lg:pb-3">
          <span className="font-mono text-[10px] tracking-[0.25em] text-muted [writing-mode:vertical-rl]">PORTFOLIO / 2026</span>
          <span className="font-mono text-[10px] text-accent">01—06</span>
        </div>
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Reveal y={12}>
            <p className="font-mono text-xs tracking-[0.3em] text-muted uppercase">Hello, I&apos;m</p>
          </Reveal>

          <Reveal delay={0.06} y={20}>
            <h1 className="display-type mt-5 max-w-5xl text-7xl font-black text-balance sm:text-8xl lg:text-[10rem]">
              Hasnain<br />
              <span className="text-coral">Haider</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12} y={16}>
            <p className="mt-7 font-mono text-xs tracking-[0.18em] text-muted uppercase sm:text-sm">
              Full Stack Engineer <span className="text-accent">/</span> Software Architect
            </p>
          </Reveal>

          <Reveal delay={0.18} y={12}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{profile.blurb}</p>
          </Reveal>

          <Reveal delay={0.24} y={8}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Pill accent>Open to opportunities</Pill>
              <span className="font-mono text-xs text-muted">{profile.location}</span>
            </div>
          </Reveal>

          <Reveal delay={0.3} y={12}>
            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
              <a
                href="#experience"
                className="border border-coral bg-coral px-7 py-3 font-mono text-sm font-bold text-fg text-center transition-colors hover:bg-cobalt hover:text-bg sm:w-auto"
              >
                VIEW EXPERIENCE <ArrowDown size={14} className="ml-1 inline" />
              </a>
              <a
                href="#contact"
                className="border border-border/30 bg-surface px-7 py-3 font-mono text-sm font-bold text-fg text-center transition-colors hover:bg-cobalt hover:text-bg sm:w-auto"
              >
                <Mail size={14} className="mr-1 inline" /> CONTACT ME
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.36} y={8}>
            <div className="mt-8 flex items-center gap-0">
              {[
                { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
                { href: profile.github, label: 'GitHub', Icon: GitHubIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center border border-border text-fg transition-colors hover-invert"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="hidden lg:block">
          <aside className="paper-panel relative mt-24 min-h-[330px] overflow-hidden p-6">
            <div className="absolute -right-10 -top-10 shape-circle h-36 w-36 bg-sky" aria-hidden />
            <div className="absolute bottom-8 -left-8 shape-half h-24 w-48 bg-coral" aria-hidden />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                <span>Field notes</span><span>Lisbon / 01</span>
              </div>
              <div>
                <p className="display-type text-6xl text-cobalt">11+</p>
                <p className="mt-2 text-sm text-muted">years turning ambiguous problems into shipped software.</p>
              </div>
              <div className="border-t border-border/25 pt-4 font-mono text-[10px] leading-relaxed text-muted">
                WEB / MOBILE / CLOUD
              </div>
            </div>
          </aside>
        </Reveal>
      </motion.div>

      <motion.a
        href="#experience"
        animate={reduced ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-x-0 bottom-8 flex justify-center"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted">SCROLL</span>
      </motion.a>
    </section>
  )
}
