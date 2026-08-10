import { useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion'
import { Menu, X } from 'lucide-react'

const LINKS: { label: string; href: string }[] = [
  { label: 'Highlights', href: '#highlights' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const reduced = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  const { scrollY, scrollYProgress } = useScroll()

  useMotionValueEvent(scrollY, 'change', (value) => setScrolled(value > 12))

  useEffect(() => {
    const sections = LINKS.map((link) => link.href.slice(1))
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const dropdownY = reduced ? 0 : -8

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="fixed inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400"
        style={{ scaleX: scrollYProgress }}
        aria-hidden
      />
      <div
        className={`border-b transition-all duration-300 ${
          scrolled ? 'glass-strong border-white/10' : 'border-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#hero" className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 shadow-glow" />
            <span className="font-display text-lg font-semibold tracking-tight text-fog">
              Hasnain
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => {
              const id = link.href.slice(1)
              const isActive = active === id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-fog' : 'text-mist hover:text-fog'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-white/[0.07]"
                        transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full text-mist transition-colors hover:text-fog md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: dropdownY }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: dropdownY }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="glass-strong mx-4 mt-2 rounded-2xl p-2 md:hidden"
            >
              <ul className="flex flex-col">
                {LINKS.map((link) => {
                  const id = link.href.slice(1)
                  const isActive = active === id
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-white/[0.07] text-fog'
                            : 'text-mist hover:bg-white/[0.04] hover:text-fog'
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
