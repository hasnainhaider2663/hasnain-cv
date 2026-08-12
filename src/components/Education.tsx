import { useMemo, useState } from 'react'
import { MousePointerClick, Sparkles } from 'lucide-react'
import { Reveal } from './ui'
import LoaderRickshaw from './LoaderRickshaw'

const MOSAIC_COLS = 18
const MOSAIC_ROWS = 11

function PerforationRail({ side }: { side: 'left' | 'right' }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute top-0 bottom-0 z-10 hidden ${side === 'left' ? 'left-0' : 'right-0'} md:flex flex-col justify-around py-6`}
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <span key={i} className="block h-4 w-4 rounded-[2px] bg-bg/25 mx-4" />
      ))}
    </div>
  )
}

export default function Education() {
  const [revealed, setRevealed] = useState(false)

  const cells = useMemo(
    () =>
      Array.from({ length: MOSAIC_COLS * MOSAIC_ROWS }).map(() => ({
        delay: (Math.random() * 4).toFixed(2),
        dur: (2.6 + Math.random() * 3.2).toFixed(2),
        out: (Math.random() * 1.4).toFixed(2),
      })),
    [],
  )

  return (
    <section id="education" className="relative overflow-hidden ink-block">
      <div aria-hidden className="absolute inset-x-0 top-0 z-20 h-3 bg-accent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 z-20 h-3 bg-accent" />

      <PerforationRail side="left" />
      <PerforationRail side="right" />

      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 md:px-16 md:py-16 lg:py-20">
        <Reveal>
          <div className="text-center">
            <span className="font-mono text-[11px] tracking-[0.35em] opacity-60">REEL 06 · FUN FACT · TAKE 01</span>
            <h2 className="display-type mt-3 text-5xl text-accent sm:text-7xl lg:text-8xl">FUN FACT.</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 md:mt-10">
          <div className="border-brutal paper-panel relative overflow-hidden p-6 sm:p-8 md:p-10">
            <span aria-hidden className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.2em] opacity-50">● REC</span>
            <span aria-hidden className="absolute right-4 top-4 font-mono text-[10px] tracking-[0.2em] opacity-50">SCENE 01</span>

            <div className={`transition-[filter,transform] duration-1000 ${revealed ? 'rise-in-imax' : 'pixel-crumble pointer-events-none select-none'}`}>
              <div className="flex flex-col items-center text-center">
                <Sparkles size={24} strokeWidth={2} className="text-accent" />
                <blockquote className="mt-4 max-w-4xl font-display text-3xl leading-[1.05] text-cobalt text-balance sm:text-5xl lg:text-6xl">
                  &ldquo;I sometimes had to hang off a rickshaw to get to university.&rdquo;
                </blockquote>
              </div>

              <div className="mx-auto mt-8 max-w-4xl border border-border/20 bg-[#efe8dc] p-5 sm:p-7 md:p-8">
                <LoaderRickshaw className="mx-auto h-auto w-full max-w-3xl" />
                <p className="mt-3 text-center font-mono text-[11px] tracking-[0.18em] text-[#3a3f45]">
                  That&apos;s me.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-mono text-[11px] tracking-[0.2em] text-bg/70">
                <span>ISLAMABAD · COMSATS</span>
                <span aria-hidden>·</span>
                <span>LOADER RICKSHAW</span>
                <span aria-hidden>·</span>
                <span>~7 MINUTES TO CAMPUS</span>
              </div>
            </div>

            {!revealed && (
              <div className="absolute inset-0 z-10">
                <div className="pixel-grid absolute inset-0" aria-hidden="true" />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 grid"
                  style={{ gridTemplateColumns: `repeat(${MOSAIC_COLS}, minmax(0, 1fr))`, gridAutoRows: `minmax(0, 1fr)` }}
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
                  <span className="border-2 border-fg bg-bg text-fg px-7 py-3.5 font-mono text-sm font-bold tracking-wider uppercase transition-colors hover:bg-accent hover:border-accent hover:text-fg">
                    <MousePointerClick size={16} className="mr-2 inline" strokeWidth={2} />
                    Click to roll the reel
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.3em] text-fg/80 uppercase">[ one frame, one story ]</span>
                </button>
              </div>
            )}

            {revealed && (
              <div className="pointer-events-none absolute inset-0 z-10">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 grid"
                  style={{ gridTemplateColumns: `repeat(${MOSAIC_COLS}, minmax(0, 1fr))`, gridAutoRows: `minmax(0, 1fr)` }}
                >
                  {cells.map((c, i) => (
                    <span key={i} className="pixel-cell out" style={{ animationDelay: `${c.out}s`, animationDuration: '1.1s' }} />
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
