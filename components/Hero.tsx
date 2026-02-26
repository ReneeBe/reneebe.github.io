import Link from "next/link";

const stats = [
  { value: "5+", label: "Years building" },
  { value: "30+", label: "Projects shipped" },
  { value: "FS", label: "Frontend & Backend" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-5rem)] flex-col items-center justify-center px-6 text-center">
      {/* Terminal label */}
      <div
        className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono"
        style={{ color: "#06d6a0" }}
      >
        <span className="h-2 w-2 rounded-full bg-[#06d6a0] opacity-80" style={{ boxShadow: "0 0 6px #06d6a0" }} />
        <span className="text-white/40">$</span>
        <span>&nbsp;whoami&nbsp;</span>
        <span className="text-white/30">//</span>
        <span className="text-white/60">fullstack_engineer</span>
      </div>

      {/* Name */}
      <h1
        className="mb-4 text-7xl font-black leading-[0.9] tracking-tighter sm:text-8xl md:text-[9rem]"
        style={{ fontFamily: "var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif" }}
      >
        <span className="gradient-text">Renee</span>
        <br />
        <span className="text-white">Berger</span>
      </h1>

      {/* Subtitle */}
      <p className="mb-10 max-w-md text-lg text-white/50">
        I build fast, scalable web products — from pixel-perfect UIs to
        robust backend systems and everything in between.
      </p>

      {/* CTAs */}
      <div className="mb-16 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="mailto:hello@reneeberger.dev"
          className="glow-pink inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:brightness-110"
          style={{ background: "linear-gradient(135deg, #f72585, #7209b7)" }}
        >
          <span className="h-2 w-2 rounded-full bg-white/80" style={{ boxShadow: "0 0 5px white" }} />
          Available for work
        </Link>
        <Link
          href="/projects"
          className="glass inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white/80 transition-all duration-300 hover:scale-105 hover:text-white"
        >
          See my projects
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <Link
          href="/blog"
          className="glass inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white/50 transition-all duration-300 hover:scale-105 hover:text-white/80"
        >
          Read the blog
        </Link>
      </div>

      {/* Stats row */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center">
            <div
              className="text-3xl font-black tracking-tight gradient-text"
              style={{ fontFamily: "var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif" }}
            >
              {value}
            </div>
            <div className="mt-0.5 text-xs text-white/35 uppercase tracking-widest">{label}</div>
          </div>
        ))}
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/20">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
