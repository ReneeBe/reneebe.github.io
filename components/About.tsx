const frontend = [
  { name: "TypeScript", color: "#3a86ff" },
  { name: "React", color: "#06d6a0" },
  { name: "Next.js", color: "#f0f0f8" },
  { name: "Tailwind CSS", color: "#3a86ff" },
  { name: "Framer Motion", color: "#f72585" },
  { name: "GraphQL", color: "#f72585" },
];

const backend = [
  { name: "Node.js", color: "#06d6a0" },
  { name: "PostgreSQL", color: "#3a86ff" },
  { name: "Prisma", color: "#7209b7" },
  { name: "Redis", color: "#f72585" },
  { name: "Docker", color: "#3a86ff" },
  { name: "AWS", color: "#f72585" },
];

function SkillPill({ name, color }: { name: string; color: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200 hover:scale-105"
      style={{
        borderColor: `${color}30`,
        color: color,
        background: `${color}0d`,
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: color, opacity: 0.7 }} />
      {name}
    </span>
  );
}

function StackCard({
  title,
  icon,
  skills,
  accent,
}: {
  title: string;
  icon: string;
  skills: { name: string; color: string }[];
  accent: string;
}) {
  return (
    <div
      className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: `0 0 40px ${accent}15` }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-xl text-lg"
          style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}
        >
          {icon}
        </div>
        <div>
          <p className="text-xs font-mono text-white/30 uppercase tracking-widest">Stack</p>
          <h3
            className="text-base font-bold text-white"
            style={{ fontFamily: "var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif" }}
          >
            {title}
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <SkillPill key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      {/* Section label */}
      <div className="mb-12 flex items-center gap-4">
        <p className="text-xs font-mono text-white/30 uppercase tracking-widest">01 / about</p>
        <div className="h-px flex-1 bg-white/5" />
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left: bio */}
        <div>
          <h2
            className="mb-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif" }}
          >
            I build products,
            <br />
            <span className="gradient-text">not just features.</span>
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-white/55">
            <p>
              I&apos;m a fullstack engineer with 5+ years of experience taking ideas from
              whiteboard to production. I care about the whole stack — clean APIs,
              performant UIs, solid infrastructure.
            </p>
            <p>
              Currently working through the{" "}
              <a href="/50projects" className="font-medium text-[#3a86ff] hover:underline">
                50 Projects in 50 Days
              </a>{" "}
              challenge and writing about what I learn on the{" "}
              <a href="/blog" className="font-medium text-[#06d6a0] hover:underline">
                blog
              </a>
              .
            </p>
          </div>

          {/* Available for work card */}
          <div
            className="mt-8 glass rounded-2xl p-5"
            style={{ boxShadow: "0 0 40px rgba(247,37,133,0.1)" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full bg-[#06d6a0]"
                  style={{ boxShadow: "0 0 8px #06d6a0" }}
                />
                <div>
                  <p className="text-sm font-semibold text-white">Available for work</p>
                  <p className="text-xs text-white/40">Open to fulltime & contract roles</p>
                </div>
              </div>
              <a
                href="mailto:hello@reneeberger.dev"
                className="rounded-full px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #f72585, #7209b7)" }}
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>

        {/* Right: stacks */}
        <div className="flex flex-col gap-4">
          <StackCard
            title="Frontend"
            icon="🎨"
            skills={frontend}
            accent="#3a86ff"
          />
          <StackCard
            title="Backend & Infra"
            icon="⚙️"
            skills={backend}
            accent="#06d6a0"
          />
        </div>
      </div>
    </section>
  );
}
