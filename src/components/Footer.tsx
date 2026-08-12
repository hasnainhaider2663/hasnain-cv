import { ArrowUp, MapPin } from 'lucide-react'
import { profile } from '../data/cv'
import { Reveal, EmailReveal } from './ui'
import { GitHubIcon, LinkedInIcon } from './brand-icons'

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t-[3px] border-fg pt-16 sm:pt-24 pb-0">
      <div className="ink-block mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <Reveal>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 font-mono text-xs tracking-[0.25em] uppercase">
              <span className="text-accent">06</span><span>/</span><span>CONTACT</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="display-type mx-auto mt-8 max-w-5xl text-center text-5xl font-black text-balance sm:text-7xl lg:text-9xl">
            LET&apos;S BUILD<br /><span className="text-accent">SOMETHING EXCEPTIONAL.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-7 max-w-xl text-center text-base leading-relaxed text-bg/70 sm:text-lg">
            Have a product, platform, or system in mind? I&apos;m always up for building something fast, robust, and a little bit brilliant.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <EmailReveal variant="button" />
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex border border-bg/50 bg-transparent w-full sm:w-auto items-center justify-center gap-2 px-7 py-3.5 font-mono text-sm font-bold text-bg text-center hover:bg-bg hover:text-fg transition-colors">
              <LinkedInIcon size={14} /> <span>LINKEDIN</span>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex border border-bg/50 bg-transparent w-full sm:w-auto items-center justify-center gap-2 px-7 py-3.5 font-mono text-sm font-bold text-bg text-center hover:bg-bg hover:text-fg transition-colors">
              <GitHubIcon size={14} /> <span>GITHUB</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-16 grid gap-6 border-t border-bg/30 pt-6">
            <div className="flex flex-col items-center gap-2">
              <MapPin size={16} strokeWidth={2} className="text-accent" />
              <span className="font-mono text-xs text-bg/70">{profile.location}</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 sm:mt-20 border-t-[3px] border-fg">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 font-mono text-xs text-muted sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Lisbon, Portugal</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="border p-2 text-muted transition-colors hover-invert"
          >
            <ArrowUp size={14} strokeWidth={2} />
          </button>
        </div>
      </div>
    </footer>
  )
}
