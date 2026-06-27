import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group rounded-lg border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/70 transition hover:border-zinc-300 hover:shadow-md"
    >
      <p className="text-sm text-zinc-500">{project.type}</p>

      <h3 className="mt-4 text-xl font-semibold text-zinc-950 group-hover:text-zinc-700">
        {project.title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-zinc-600">
        {project.description}
      </p>

      <p className="mt-6 text-sm font-medium text-zinc-950">
        View case study →
      </p>
    </Link>
  );
}
