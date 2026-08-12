const statements = [
  '11 years turning ambiguity into shipped software',
  'Web · Mobile · Cloud',
  'Lisbon / Portugal / open to serious problems',
]

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border/20 bg-cobalt py-4 text-bg" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[...Array(2)].map((_, dupe) => (
          <div key={dupe} className="flex w-max shrink-0 items-center gap-6 px-6">
            {statements.map(item => (
              <span key={item + dupe} className="font-mono text-xs tracking-[0.2em] text-bg/80 uppercase whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
