export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
      <p className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-400">
        Business Operations · Revenue Operations · Analytics
      </p>

      <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
        Turning ambiguity into clarity.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
        I help companies transform operational complexity into scalable
        processes, better decisions, and measurable business impact through
        data, finance, and technology.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
        >
          View Selected Work
        </a>

        <a
          href="https://www.linkedin.com/in/ernesto995/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-400"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}