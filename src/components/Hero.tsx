import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ChevronDown, Mail } from 'lucide-react'
import { profile } from '../data/cv'
import { Reveal } from './ui'
import { GitHubIcon, LinkedInIcon } from './brand-icons'

const BLURBS = [
  { name: 'blurb-violet', bg: 'radial-gradient(circle at center, #a5b4fc, transparent 65%)', pos: 'left-[-10rem] top-[-12rem] h-[36rem] w-[36rem] opacity-25' },
  { name: 'blurb-fuchsia', bg: 'radial-gradient(circle at center, #e879f9, transparent 65%)', pos: 'right-[-8rem] top-[8rem] h-[32rem] w-[32rem] opacity-20' },
  { name: 'blurb-cyan', bg: 'radial-gradient(circle at center, #22d3ee, transparent 65%)', pos: 'bottom-[-14rem] left-[12rem] h-[38rem] w-[38rem] opacity-20' },
  { name: 'blurb-indigo', bg: 'radial-gradient(circle at center, #6366f1, transparent 65%)', pos: 'left-[22rem] top-[14rem] h-[24rem] w-[24rem] opacity-15' },
] as const

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -120])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, reduced ? 1 : 0])
  const auraY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 90])

  const city = profile.location.split(',')[0]

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <motion.div style={{ y: auraY }} className="absolute inset-0" aria-hidden>
        {BLURBS.map((blob, index) => (
          <div
            key={blob.name}
            className={`animate-float absolute rounded-full blur-[120px] ${blob.pos}`}
            style={{ background: blob.bg, animationDelay: `${index * 2.2}s` }}
          />
        ))}
      </motion.div>

      <div className="grid-lines mask-fade-b absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent"
        aria-hidden
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-6xl px-5 py-32 sm:px-8"
      >
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Reveal y={20}>
            <p className="text-[13px] font-medium uppercase tracking-[0.28em] text-mist">
              Hello, I&apos;m
            </p>
          </Reveal>

          <Reveal delay={0.08} y={32}>
            <h1 className="font-display mt-6 text-6xl font-bold tracking-tight text-balance sm:text-7xl lg:text-8xl">
              Hasnain <span className="text-gradient">Haider</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16} y={24}>
            <p className="mt-5 text-lg font-medium text-fog sm:text-xl">
              Full Stack Engineer <span className="text-mist">/</span> Software Architect
            </p>
          </Reveal>

          <Reveal delay={0.24} y={20}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-mist">{profile.blurb}</p>
          </Reveal>

          <Reveal delay={0.32} y={16}>
            <div className="mt-7 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-mist">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Open to opportunities
              </span>
              <span className="hidden text-xs text-mist/60 sm:inline">Based in {city}</span>
            </div>
          </Reveal>

          <Reveal delay={0.4} y={16}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 px-7 py-3 text-sm font-semibold text-ink shadow-glow transition-all duration-300 hover:scale-[1.04]"
              >
                View Experience
                <ArrowDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
              <a
                href="#contact"
                className="glass inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-fog transition-colors duration-300 hover:bg-white/[0.08]"
              >
                <Mail size={16} className="text-mist" />
                Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.48} y={12}>
            <div className="mt-8 flex items-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-mist transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.05] hover:text-fog"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-mist transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.05] hover:text-fog"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-mist transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.05] hover:text-fog"
              >
                <Mail size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.56} y={10}>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 text-xs tracking-wide text-mist/60 transition-colors hover:text-fog"
            >
              {profile.email}
            </a>
          </Reveal>
        </div>
      </motion.div>

      <motion.div
        animate={reduced ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-x-0 bottom-7 flex justify-center"
      >
        <a
          href="#experience"
          aria-label="Scroll down to experience"
          className="flex flex-col items-center gap-2 text-mist transition-colors hover:text-fog"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.25em]">Scroll</span>
          <ChevronDown size={18} />
        </a>
      </motion.div>
    </section>
  )
}
