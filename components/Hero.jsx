const focusAreas = [
  {
    title: "Business Operations",
    detail: "Operating models, workflows, ownership, and execution cadence.",
  },
  {
    title: "Data Analytics",
    detail: "Decision-ready analysis that turns raw signals into direction.",
  },
  {
    title: "Revenue Strategy",
    detail: "Pipeline visibility, pricing logic, forecasting, and growth levers.",
  },
  {
    title: "Process Improvement",
    detail: "Cleaner systems for teams that need to move with less friction.",
  },
];

const graphPath =
  "M-90 350 C70 318 148 372 278 288 C392 214 476 336 590 246 C700 158 780 104 918 190 C1040 266 1124 196 1250 92 C1340 18 1424 54 1530 28";

export default function Hero() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-zinc-950 px-6 pb-20 pt-28 text-white sm:pt-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_18%,rgba(63,63,70,0.38),transparent_28%),radial-gradient(circle_at_78%_24%,rgba(190,242,100,0.08),transparent_24%),linear-gradient(135deg,#050505_0%,#09090b_56%,#111113_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-zinc-950 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-[-24%] bottom-[-18%] top-[20%] -z-10 opacity-75 [perspective:1100px]"
        >
          <svg
            className="h-full w-full transform-gpu [transform:rotateX(62deg)_rotateZ(-7deg)_scale(1.16)]"
            viewBox="0 0 1440 520"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="heroGraphLine" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="rgba(190,242,100,0)" />
                <stop offset="22%" stopColor="rgba(190,242,100,0.22)" />
                <stop offset="58%" stopColor="rgba(244,244,245,0.46)" />
                <stop offset="100%" stopColor="rgba(190,242,100,0.06)" />
              </linearGradient>
            </defs>

            <path
              d={graphPath}
              stroke="rgba(244,244,245,0.06)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="18"
              transform="translate(0 34)"
            />
            <path
              d={graphPath}
              stroke="rgba(190,242,100,0.13)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
              transform="translate(0 16)"
            />
            <path
              d={graphPath}
              pathLength="1"
              stroke="url(#heroGraphLine)"
              strokeDasharray="1"
              strokeDashoffset="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3.5"
            >
              <animate
                attributeName="stroke-dashoffset"
                dur="6.5s"
                keyTimes="0;0.55;1"
                repeatCount="indefinite"
                values="1;0;0"
              />
            </path>
          </svg>
        </div>

        <div className="mx-auto flex min-h-[calc(88svh-8rem)] max-w-6xl items-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Turning ambiguity into operational clarity.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg md:text-xl">
              I help companies transform messy operational problems into
              scalable processes, clearer decisions, and measurable business
              impact through data, finance, and execution.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 shadow-[0_18px_48px_rgba(255,255,255,0.12)] transition hover:bg-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                View Selected Work
              </a>

              <a
                href="https://www.linkedin.com/in/ernesto995/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-100 transition hover:border-white/30 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Operator focus areas"
        className="bg-zinc-950 px-6 pb-24 text-white"
      >
        <div className="mx-auto max-w-6xl border-t border-white/10 pt-10">
          <div className="mb-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
                BUSINESS OPERATIONS · REVENUE OPERATIONS · ANALYTICS
              </p>
              <h2 className="mt-4 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
                Built at the intersection of operations, data, and strategy.
              </h2>
            </div>

            <div className="flex items-center gap-4 rounded-lg border border-lime-300/20 bg-lime-300/10 px-4 py-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-lime-300/15 text-sm font-semibold text-lime-200">
                EO
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Ernesto Otaqui
                </p>
                <p className="text-xs text-zinc-400">Operator profile</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-lg border border-white/10 bg-zinc-900/70 p-5 transition hover:border-lime-300/30 hover:bg-zinc-900"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="h-2 w-2 rounded-full bg-lime-300/80" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                    Focus
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {area.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
