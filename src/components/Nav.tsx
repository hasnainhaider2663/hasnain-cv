import { useEffect, useState } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'Highlights', href: '#highlights' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Fun Facts', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const sections = LINKS.map(l => document.getElementById(l.href.slice(1))).filter(Boolean) as HTMLElement[]
    if (!sections.length) return
    const observer = new IntersectionObserver(
      entries => { for (const e of entries) if (e.isIntersecting) setActive(e.target.id) },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="fixed inset-x-0 top-0 h-[3px] origin-left bg-accent"
        style={{ scaleX: scrollYProgress }}
        aria-hidden
      />
      <nav className="border-b border-border/20 bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#hero" className="font-display text-xl tracking-tight">
            Hasnain<span className="text-coral">.</span>
          </a>

          <ul className="hidden items-center gap-0 md:flex">
            {LINKS.map(link => {
              const isActive = active === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`font-mono text-xs tracking-wider uppercase px-3 py-2 transition-colors ${
                      isActive ? 'text-fg border-b-2 border-accent -mb-[2px]' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            className="grid h-10 w-10 place-items-center text-fg md:hidden"
            aria-label={open ? 'Close' : 'Menu'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-brutal-t bg-bg md:hidden"
            >
              <ul className="flex flex-col py-2">
                {LINKS.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block font-mono text-xs tracking-wider uppercase px-5 py-3 ${
                        active === link.href.slice(1) ? 'text-accent bg-surface' : 'text-muted'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
