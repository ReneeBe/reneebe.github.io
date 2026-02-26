import type { Metadata } from "next";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of projects I've designed and built.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-4 flex items-center gap-4">
        <p className="text-xs font-mono text-white/30 uppercase tracking-widest">02 / projects</p>
        <div className="h-px flex-1 bg-white/5" />
      </div>
      <h1
        className="mb-4 text-5xl font-black tracking-tight text-white sm:text-6xl"
        style={{ fontFamily: "var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif" }}
      >
        Things I&apos;ve
        <br />
        <span className="gradient-text">built.</span>
      </h1>
      <p className="mb-14 text-base text-white/40 max-w-lg">
        A selection of personal projects, tools, and experiments. All built with care.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
