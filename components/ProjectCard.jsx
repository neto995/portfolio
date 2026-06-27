import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-zinc-600 hover:bg-zinc-900"
    >
      <p className="text-sm text-zinc-500">{project.type}</p>

      <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-zinc-200">
        {project.title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-zinc-400">
        {project.description}
      </p>

      <p className="mt-6 text-sm font-medium text-white">
        View case study →
      </p>
    </Link>
  );
}