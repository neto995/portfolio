import HeroSignal from "./HeroSignal";

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
      <section className="relative isolate overflow-hidden border-b border-lime-200/70 bg-[#f8faf5] px-6 pb-16 pt-28 text-zinc-950 sm:pt-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.98),transparent_26%),radial-gradient(circle_at_78%_26%,rgba(132,204,22,0.18),transparent_28%),linear-gradient(135deg,#fbfcf8_0%,#f4f8ec_52%,#eef5e2_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#f8faf5] to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-[-24%] bottom-[-18%] top-[22%] -z-10 opacity-55 [perspective:1100px]"
        >
          <svg
            className="h-full w-full transform-gpu [transform:rotateX(62deg)_rotateZ(-7deg)_scale(1.16)]"
            viewBox="0 0 1440 520"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="heroGraphLine" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="rgba(132,204,22,0)" />
                <stop offset="28%" stopColor="rgba(132,204,22,0.16)" />
                <stop offset="62%" stopColor="rgba(34,197,94,0.22)" />
                <stop offset="100%" stopColor="rgba(132,204,22,0.03)" />
              </linearGradient>
            </defs>

            <path
              d={graphPath}
              stroke="rgba(63,98,18,0.04)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="18"
              transform="translate(0 34)"
            />
            <path
              d={graphPath}
              stroke="rgba(132,204,22,0.16)"
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

        <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,0.96fr)_minmax(460px,0.9fr)] lg:gap-16">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 sm:text-xs sm:tracking-[0.34em]">
              Operations · Revenue · Analytics
              <span
                aria-hidden="true"
                className="ml-2 inline-block h-3 w-1 translate-y-0.5 bg-[#84cc16]"
              />
            </p>

            <h1 className="mt-8 text-5xl font-semibold leading-[0.98] tracking-normal text-zinc-950 sm:text-6xl md:text-7xl lg:text-[4.55rem] xl:text-[5rem]">
              <span className="block">Turning ambiguity</span>
              <span className="block">
                into <span className="text-lime-700">operational</span>
              </span>
              <span className="block text-lime-700">clarity.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
              I help companies transform messy operational problems into
              scalable processes, clearer decisions, and measurable business
              impact through data, finance, and execution.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center bg-[#84cc16] px-6 py-4 font-mono text-sm font-medium tracking-[0.04em] text-[#132a05] shadow-[0_18px_48px_rgba(132,204,22,0.22)] transition hover:bg-[#a3e635] focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8faf5]"
              >
                View Selected Work →
              </a>

              <a
                href="https://linkedin.com/in/ernesto995"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-zinc-200 bg-white/70 px-6 py-4 font-mono text-sm font-medium tracking-[0.04em] text-zinc-800 transition hover:border-[#84cc16] hover:bg-white hover:text-lime-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8faf5]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="w-full max-w-[540px] justify-self-start lg:justify-self-end">
            <HeroSignal />
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        aria-label="Operator focus areas"
        className="bg-zinc-50 px-6 pb-24 text-zinc-950"
      >
        <div className="mx-auto max-w-6xl border-t border-zinc-200 pt-10">
          <div className="mb-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
                BUSINESS OPERATIONS · REVENUE OPERATIONS · ANALYTICS
              </p>
              <h2 className="mt-4 max-w-2xl text-2xl font-semibold text-zinc-950 sm:text-3xl">
                Built at the intersection of operations, data, and strategy.
              </h2>
            </div>

            <div className="flex items-center gap-4 rounded-lg border border-lime-700/20 bg-lime-50 px-4 py-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-lime-100 text-sm font-semibold text-lime-800">
                EO
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-950">
                  Ernesto Otaqui
                </p>
                <p className="text-xs text-zinc-500">Operator profile</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-200/70 transition hover:border-lime-700/25 hover:shadow-md"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="h-2 w-2 rounded-full bg-lime-700/70" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">
                    Focus
                  </span>
                </div>
                <h3 className="text-base font-semibold text-zinc-950">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
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
