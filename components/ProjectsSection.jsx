import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#f8faf5] px-6 py-24 text-zinc-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-zinc-500">
            Selected Work
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight text-zinc-950 md:text-5xl">
            Business problems solved through data.
          </h2>
        </div>

        <div className="border-y border-zinc-200">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
