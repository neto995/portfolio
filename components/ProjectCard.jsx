import Link from "next/link";

const projectLabels = {
  lobo: "Platform",
  "revenue-forecasting": "Forecast",
  "sql-portfolio": "SQL",
};

export default function ProjectCard({ project }) {
  const label = projectLabels[project.slug] || project.type;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid gap-5 border-b border-zinc-200 py-8 transition last:border-b-0 hover:bg-lime-50/55 md:grid-cols-[120px_minmax(0,1fr)_auto] md:items-center md:px-4"
    >
      <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-[#22c55e] shadow-[0_0_16px_rgba(34,197,94,0.45)]"
        />
        {label}
      </p>

      <div>
        <h3 className="text-xl font-semibold text-zinc-950 transition group-hover:text-lime-700">
          {project.title}
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 md:text-base">
          {project.description}
        </p>
      </div>

      <p className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-500 transition group-hover:translate-x-1 group-hover:text-lime-700 md:justify-self-end">
        View →
      </p>
    </Link>
  );
}
