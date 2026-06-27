export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 md:flex-row">
        <p>© {new Date().getFullYear()} Ernesto Otaqui</p>

        <div className="flex gap-6">
          <a
            href="https://github.com/neto995"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ernesto995/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}