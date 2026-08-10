import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

export function Reveal({
  children,
  delay = 0,
  y = 28,
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
      initial={{ opacity: 0, y: reduced ? 0 : y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-[13px] font-medium tracking-[0.22em] uppercase">
      <span className="text-gradient">{index}</span>
      <span className="h-px w-10 bg-white/15" aria-hidden />
      <span className="text-mist">{label}</span>
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
    <div className="max-w-3xl">
      <Reveal>
        <Eyebrow index={index} label={label} />
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={0.16}>
          <p className="mt-5 text-lg leading-relaxed text-mist">{lead}</p>
        </Reveal>
      ) : null}
    </div>
  )
}

export function GlowCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`glass relative rounded-2xl p-6 transition-colors duration-300 hover:border-white/15 sm:p-8 ${className}`}>
      {children}
    </div>
  )
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-mist">
      {children}
    </span>
  )
}
