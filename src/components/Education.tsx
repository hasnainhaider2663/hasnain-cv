import { useMemo, useState } from 'react'
import { MousePointerClick, Sparkles } from 'lucide-react'
import { Reveal, SectionHeading } from './ui'
import LoaderRickshaw from './LoaderRickshaw'

const MOSAIC_CELLS = 12 * 9

export default function Education() {
  const [revealed, setRevealed] = useState(false)

  const cells = useMemo(
    () =>
      Array.from({ length: MOSAIC_CELLS }).map(() => ({
        delay: (Math.random() * 3).toFixed(2),
        dur: (1.8 + Math.random() * 2.4).toFixed(2),
        out: (Math.random() * 2.4).toFixed(2),
      })),
    [],
  )

  return (
    <section id="education" className="section-rule mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading index="06" label="Fun fact" title="Fun fact." />

      <div className="mt-14">
        <Reveal>
          <div className="border-brutal relative flex h-full flex-col overflow-hidden p-7 sm:p-10">
            <div className={`transition-[filter] duration-1000 ${revealed ? 'rise-in' : 'pixel-crumble pointer-events-none select-none'}`}>
              <Sparkles size={22} strokeWidth={2} className="text-accent" />
              <blockquote className="mt-5 font-display text-3xl leading-tight text-cobalt sm:text-4xl">
                I sometimes had to hang off a rickshaw to get to university.
              </blockquote>

              <div className="mt-6 border border-border/20 bg-[#efe8dc] p-6 sm:p-8">
                <LoaderRickshaw className="mx-auto h-auto w-full max-w-2xl" />
                <p className="mt-4 text-center font-mono text-[11px] leading-relaxed text-[#3a3f45]">
                  That&apos;s me.
                </p>
              </div>
            </div>

            {!revealed && (
              <div className="absolute inset-0 z-10">
                <div className="pixel-grid absolute inset-0" aria-hidden="true" />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 grid"
                  style={{ gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gridAutoRows: 'minmax(0, 1fr)' }}
                >
                  {cells.map((c, i) => (
                    <span
                      key={i}
                      className="pixel-cell"
                      style={{ animationDelay: `${c.delay}s`, animationDuration: `${c.dur}s` }}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setRevealed(true)}
                  aria-label="Reveal a fun fact about me"
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center"
                >
                  <span className="border-2 border-fg bg-bg px-6 py-3 font-mono text-sm font-bold tracking-wider uppercase transition-colors hover:bg-accent hover:border-accent hover:text-bg">
                    <MousePointerClick size={16} className="mr-2 inline" strokeWidth={2} />
                    Click to reveal a fun fact about me
                  </span>
                  <span className="font-mono text-xs tracking-[0.2em] text-muted uppercase">[ it&apos;s a good one ]</span>
                </button>
              </div>
            )}

            {revealed && (
              <div className="pointer-events-none absolute inset-0 z-10">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 grid"
                  style={{ gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gridAutoRows: 'minmax(0, 1fr)' }}
                >
                  {cells.map((c, i) => (
                    <span key={i} className="pixel-cell out" style={{ animationDelay: `${c.out}s` }} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
