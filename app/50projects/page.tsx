import type { Metadata } from "next";
import { challengeProjects } from "@/content/challenge";
import { getAllPosts } from "@/lib/posts";
import ChallengeGrid from "@/components/ChallengeGrid";

export const metadata: Metadata = {
  title: "50 Projects in 50 Weekdays",
  description: "Tracking my progress building one small project every weekday for 50 days.",
};

export default function FiftyProjectsPage() {
  // Build a map from day number → blog slug using the day-XX tag on each post
  const posts = getAllPosts();
  const dayToBlogSlug: Record<number, string> = {};
  for (const post of posts) {
    const dayTag = post.tags.find((t) => /^day-\d+$/.test(t));
    if (dayTag) {
      const day = parseInt(dayTag.replace("day-", ""), 10);
      dayToBlogSlug[day] = post.slug;
    }
  }

  const projects = challengeProjects.map((p) => ({
    ...p,
    blogSlug: dayToBlogSlug[p.day],
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-4 flex items-center gap-4">
        <p
          className="text-xs font-mono uppercase tracking-widest"
          style={{ color: "color-mix(in srgb, var(--foreground) 30%, transparent)" }}
        >
          03 / challenge
        </p>
        <div className="h-px flex-1" style={{ background: "color-mix(in srgb, var(--foreground) 5%, transparent)" }} />
      </div>
      <h1
        className="mb-4 text-3xl font-black tracking-tight sm:text-5xl md:text-6xl"
        style={{ fontFamily: "var(--font-heading)", color: "var(--foreground)" }}
      >
        50 Projects{" "}
        <br className="hidden sm:block lg:hidden" />
        <span className="gradient-text">in 50 Days.</span>
      </h1>
      <p
        className="mb-14 max-w-xl text-base"
        style={{ color: "color-mix(in srgb, var(--foreground) 40%, transparent)" }}
      >
        One small project every weekday for 50 days. Building instincts, shipping fast,
        learning in public. Click any completed project to see details.
      </p>

      <ChallengeGrid projects={projects} />
    </div>
  );
}
