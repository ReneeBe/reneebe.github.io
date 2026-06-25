"use client";

import { useState } from "react";
import type { ChallengeProject } from "@/content/challenge";
import { ProjectPeekModal } from "./ProjectPeekModal";

const accentColors = ["#f72585", "#7209b7", "#3a86ff", "#06d6a0"];

type ProjectWithBlog = ChallengeProject & { blogSlug?: string };
type Props = { projects: ProjectWithBlog[] };

export default function ChallengeGrid({ projects }: Props) {
  const [active, setActive] = useState<ProjectWithBlog | null>(null);

  const completed = projects.filter((p) => p.completed).length;
  const pct = Math.round((completed / 25) * 100);

  return (
    <div className="mx-auto max-w-4xl">
      {/* Progress */}
      <div className="glass mb-8 rounded-2xl p-5">
        <div className="mb-3 flex items-baseline justify-between">
          <div>
            <span
              className="text-3xl font-black gradient-text"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {completed}
            </span>
            <span
              className="ml-1 text-sm"
              style={{ color: "color-mix(in srgb, var(--foreground) 30%, transparent)" }}
            >
              / 25 complete
            </span>
          </div>
          <span
            className="font-mono text-sm font-bold"
            style={{ color: "var(--grad-d)" }}
          >
            {pct}%
          </span>
        </div>
        <div
          className="h-2 w-full overflow-hidden rounded-full"
          style={{ background: "color-mix(in srgb, var(--foreground) 5%, transparent)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${pct}%`,
              background: "linear-gradient(90deg, var(--grad-a), var(--grad-b), var(--grad-c), var(--grad-d))",
              boxShadow: "0 0 10px rgba(58,134,255,0.5)",
            }}
          />
        </div>
      </div>

      {/* Grid — 5x5 layout for 25 projects */}
      <div className="grid grid-cols-5 gap-2 sm:gap-3">
        {projects.map((project) => {
          const accent = accentColors[(project.day - 1) % accentColors.length];

          const cardInner = (
            <div
              className={`flex aspect-square flex-col items-start justify-between rounded-xl p-2 sm:p-4 transition-all duration-300 ${
                project.completed ? "hover:-translate-y-1" : ""
              }`}
              style={
                project.completed
                  ? {
                      background: `${accent}12`,
                      border: `1px solid ${accent}35`,
                      boxShadow: `0 0 16px ${accent}15`,
                    }
                  : {
                      background: "color-mix(in srgb, var(--foreground) 2%, transparent)",
                      border: "1px solid color-mix(in srgb, var(--foreground) 5%, transparent)",
                    }
              }
            >
              <span
                className="text-[10px] sm:text-lg font-black font-mono"
                style={{ color: project.completed ? accent : "color-mix(in srgb, var(--foreground) 15%, transparent)" }}
              >
                {String(project.day).padStart(2, "0")}
              </span>
              {project.completed && (
                <div className="flex w-full flex-col gap-0.5 sm:gap-1">
                  <span
                    className="line-clamp-2 text-[9px] sm:text-sm font-medium leading-tight sm:leading-snug"
                    style={{ color: "color-mix(in srgb, var(--foreground) 60%, transparent)" }}
                  >
                    {project.title}
                  </span>
                  {project.pendingStore && (
                    <span
                      className="text-[7px] sm:text-[10px] font-mono font-bold leading-tight"
                      style={{ color: accent, opacity: 0.7 }}
                    >
                      coming soon
                    </span>
                  )}
                </div>
              )}
            </div>
          );

          return project.completed ? (
            <button
              key={project.day}
              className="block text-left"
              onClick={() => setActive(project)}
              title={project.title}
            >
              {cardInner}
            </button>
          ) : (
            <div key={project.day}>{cardInner}</div>
          );
        })}
      </div>

      {/* Modal */}
      {active && (
        <ProjectPeekModal
          project={active}
          accent={accentColors[(active.day - 1) % accentColors.length]}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  );
}
