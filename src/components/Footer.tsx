import { useReducedMotion } from 'framer-motion'
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/cv'
import { Eyebrow, Reveal } from './ui'
import { GitHubIcon, LinkedInIcon } from './brand-icons'

export default function Footer() {
  const reduced = useReducedMotion()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <footer id="contact" className="relative overflow-hidden pt-32 pb-8">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[520px] bg-[radial-gradient(ellipse_at_bottom_center,rgba(232,121,249,0.10),rgba(99,102,241,0.06),transparent_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[400px] grid-lines mask-fade-b opacity-40"
        aria-hidden
      />
      <div
        className="animate-float pointer-events-none absolute -left-24 bottom-40 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="animate-float pointer-events-none absolute -right-24 bottom-64 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"
        style={{ animationDelay: '-4.5s' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <Eyebrow index="06" label="Contact" />
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            <span className="text-gradient">Let&apos;s build something exceptional.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist">
            Have a product, platform, or AI system in mind? I&apos;m always up for
            building something fast, robust, and a little bit brilliant.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(100deg,#a5b4fc,#e879f9,#22d3ee)] px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.04]"
            >
              <Mail size={16} strokeWidth={2} />
              Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-fog transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.08]"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-fog transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.08]"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <a
              href={`mailto:${profile.email}`}
              className="group flex flex-col items-center gap-2.5"
            >
              <Mail size={18} strokeWidth={2} className="text-indigo-300" />
              <span className="text-sm text-mist transition-colors duration-300 group-hover:text-fog">
                {profile.email}
              </span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="group flex flex-col items-center gap-2.5"
            >
              <Phone size={18} strokeWidth={2} className="text-fuchsia-300" />
              <span className="text-sm text-mist transition-colors duration-300 group-hover:text-fog">
                {profile.phone}
              </span>
            </a>
            <div className="flex flex-col items-center gap-2.5">
              <MapPin size={18} strokeWidth={2} className="text-cyan-300" />
              <span className="text-sm text-mist">{profile.location}</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-24 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-7 text-sm text-mist sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Lisbon, Portugal</p>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-mist transition-colors duration-300 hover:border-white/25 hover:text-fog"
          >
            <ArrowUp size={16} strokeWidth={2} />
          </button>
        </div>
      </div>
    </footer>
  )
}
