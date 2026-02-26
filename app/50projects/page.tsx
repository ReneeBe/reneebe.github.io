import type { Metadata } from "next";
import { challengeProjects } from "@/content/challenge";
import ChallengeGrid from "@/components/ChallengeGrid";

export const metadata: Metadata = {
  title: "50 Projects in 50 Weekdays",
  description: "Tracking my progress building one small project every weekday for 50 days.",
};

export default function FiftyProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-4 flex items-center gap-4">
        <p className="text-xs font-mono text-white/30 uppercase tracking-widest">03 / challenge</p>
        <div className="h-px flex-1 bg-white/5" />
      </div>
      <h1
        className="mb-4 text-5xl font-black tracking-tight text-white sm:text-6xl"
        style={{ fontFamily: "var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif" }}
      >
        50 Projects
        <br />
        <span className="gradient-text">in 50 Weekdays.</span>
      </h1>
      <p className="mb-14 max-w-xl text-base text-white/40">
        One small project every weekday for 50 days. Building instincts, shipping fast,
        learning in public. Click a completed slot to see the live demo.
      </p>

      <ChallengeGrid projects={challengeProjects} />
    </div>
  );
}
