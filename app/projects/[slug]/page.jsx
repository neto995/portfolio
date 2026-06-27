import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-32">
        <Link href="/" className="text-sm text-zinc-500 hover:text-white">
          ← Back to home
        </Link>

        <p className="mt-12 text-sm uppercase tracking-[0.3em] text-zinc-500">
          {project.type}
        </p>

        <h1 className="mt-6 text-4xl font-semibold text-white md:text-6xl">
          {project.title}
        </h1>

        <p className="mt-8 text-lg leading-8 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-12 grid gap-6">
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="text-xl font-semibold text-white">
              Business Problem
            </h2>

            <p className="mt-4 text-sm leading-6 text-zinc-400">
              {project.problem}
            </p>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="text-xl font-semibold text-white">Approach</h2>

            <p className="mt-4 text-sm leading-6 text-zinc-400">
              {project.approach}
            </p>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="text-xl font-semibold text-white">Impact</h2>

            <p className="mt-4 text-sm leading-6 text-zinc-400">
              {project.impact}
            </p>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="text-xl font-semibold text-white">
              Tools & Skills
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}