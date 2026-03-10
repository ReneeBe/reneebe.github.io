import type { ChallengeProject } from "@/content/challenge";

const accentColors = ["#f72585", "#7209b7", "#3a86ff", "#06d6a0"];

type Props = { projects: ChallengeProject[] };

export default function ChallengeGrid({ projects }: Props) {
  const completed = projects.filter((p) => p.completed).length;
  const pct = Math.round((completed / 50) * 100);

  return (
    <div>
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
              / 50 complete
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

      {/* Grid */}
      <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
        {projects.map((project) => {
          const accent = accentColors[(project.day - 1) % accentColors.length];

          const inner = (
            <div
              key={project.day}
              className={`flex aspect-square flex-col items-start justify-between rounded-xl p-2 transition-all duration-300 ${
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
                className="text-[10px] font-black font-mono"
                style={{ color: project.completed ? accent : "color-mix(in srgb, var(--foreground) 15%, transparent)" }}
              >
                {String(project.day).padStart(2, "0")}
              </span>
              {project.completed && (
                <span
                  className="line-clamp-2 text-[9px] font-medium leading-tight"
                  style={{ color: "color-mix(in srgb, var(--foreground) 60%, transparent)" }}
                >
                  {project.title}
                </span>
              )}
            </div>
          );

          return project.completed && project.url ? (
            <a
              key={project.day}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {inner}
            </a>
          ) : (
            <div key={project.day}>{inner}</div>
          );
        })}
      </div>
    </div>
  );
}
