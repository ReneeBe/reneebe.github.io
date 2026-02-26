"use client";

import type { Project } from "@/content/projects";

const accents = [
  { color: "#f72585", glow: "rgba(247,37,133,0.2)" },
  { color: "#7209b7", glow: "rgba(114,9,183,0.2)" },
  { color: "#3a86ff", glow: "rgba(58,134,255,0.2)" },
  { color: "#06d6a0", glow: "rgba(6,214,160,0.2)" },
];

type Props = { project: Project; index: number };

export default function ProjectCard({ project, index }: Props) {
  const { color, glow } = accents[index % accents.length];

  return (
    <article
      className="glass group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5"
      style={{ boxShadow: `0 0 0 0 ${glow}`, transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${glow}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${glow}`;
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute left-0 right-0 top-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />

      {/* Number label */}
      <div
        className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black font-mono"
        style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <h3
        className="mb-2 text-lg font-bold text-white"
        style={{ fontFamily: "var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif" }}
      >
        {project.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-white/50">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full px-2.5 py-0.5 text-[11px] font-medium text-white/40"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold transition-colors hover:underline"
            style={{ color }}
          >
            Live demo ↗
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-white/30 transition-colors hover:text-white/70"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </article>
  );
}
