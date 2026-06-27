export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-sm font-semibold tracking-wide text-zinc-950"
        >
          Ernesto Otaqui
        </a>

        <div className="flex gap-6 text-sm text-zinc-500">
          <a href="#projects" className="hover:text-zinc-950">
            Work
          </a>
          <a
            href="https://www.linkedin.com/in/ernesto995/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-950"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}
