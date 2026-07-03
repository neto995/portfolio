export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200 bg-white/85 text-zinc-950 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-zinc-950"
        >
          <span className="flex h-7 w-7 items-center justify-center border border-[#84cc16] bg-lime-50 font-mono text-[11px] text-lime-800">
            EO
          </span>
          <span>Ernesto Otaqui</span>
        </a>

        <div className="flex items-center gap-5 font-mono text-xs text-zinc-500 sm:gap-7">
          <a href="#projects" className="transition hover:text-lime-700">
            Work
          </a>
          <a
            href="#capabilities"
            className="hidden transition hover:text-lime-700 sm:inline"
          >
            Capabilities
          </a>
          <a
            href="https://linkedin.com/in/ernesto995"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-200 bg-white px-4 py-2 text-zinc-950 transition hover:border-[#84cc16] hover:text-lime-700"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
