import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Selected Work
        </p>

        <h2 className="mt-4 text-3xl font-semibold text-zinc-950 md:text-5xl">
          Business problems solved through data.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
