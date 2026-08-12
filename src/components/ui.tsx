import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useState, useCallback } from 'react'
import { Copy, Check } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] uppercase">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-border" aria-hidden />
      <span className="text-muted">{label}</span>
    </div>
  )
}

export function SectionHeading({
  index,
  label,
  title,
  lead,
}: {
  index: string
  label: string
  title: ReactNode
  lead?: string
}) {
  return (
    <div className="max-w-4xl">
      <Reveal>
        <div className="flex items-center gap-4 border-b border-border/30 pb-3">
          <span className="font-mono text-xs tracking-[0.2em] text-accent">{index}</span>
          <span className="font-mono text-[10px] tracking-[0.25em] text-muted uppercase">{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="display-type mt-7 max-w-3xl text-5xl text-balance sm:text-7xl">{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.12}>
          <p className="mt-4 text-lg leading-relaxed text-muted">{lead}</p>
        </Reveal>
      )}
    </div>
  )
}

export function BorderCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`paper-panel p-6 sm:p-8 ${className}`}>{children}</div>
}

export function Pill({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <span
      className={`inline-flex items-center border px-3 py-1 font-mono text-xs font-bold ${
        accent ? 'border-accent bg-accent text-fg' : 'border-border text-muted'
      }`}
    >
      {children}
    </span>
  )
}

function decode(encoded: string): string {
  return atob(encoded)
}

const ENCODED_EMAIL = 'aGFzbmFpbmhhaWRlcjI2NjNAZ21haWwuY29t'
const OBFUSCATED_EMAIL = 'hasnainhaider2663 [at] gmail [dot] com'

export function EmailReveal({ variant = 'inline' }: { variant?: 'inline' | 'button' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    const email = decode(ENCODED_EMAIL)
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  if (variant === 'button') {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex border border-coral bg-coral w-full sm:w-auto items-center justify-center gap-2 px-7 py-3.5 font-mono text-sm font-bold text-fg text-center transition-colors hover:bg-cobalt hover:text-bg"
      >
        {copied ? (
          <><Check size={14} className="shrink-0" strokeWidth={2} /> EMAIL COPIED</>
        ) : (
          <><Copy size={14} className="shrink-0" strokeWidth={2} /> {OBFUSCATED_EMAIL}</>
        )}
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 font-mono text-xs text-accent hover:underline"
    >
      {copied ? (
        <><Check size={12} strokeWidth={2} className="text-accent" /> Copied!</>
      ) : (
        <>{OBFUSCATED_EMAIL}</>
      )}
    </button>
  )
}
