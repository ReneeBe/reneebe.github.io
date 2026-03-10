import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing about code, building in public, and what I'm learning.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-4 flex items-center gap-4">
        <p
          className="text-xs font-mono uppercase tracking-widest"
          style={{ color: "color-mix(in srgb, var(--foreground) 30%, transparent)" }}
        >
          04 / blog
        </p>
        <div className="h-px flex-1" style={{ background: "color-mix(in srgb, var(--foreground) 5%, transparent)" }} />
      </div>
      <h1
        className="mb-4 text-5xl font-black tracking-tight sm:text-6xl"
        style={{ fontFamily: "var(--font-heading)", color: "var(--foreground)" }}
      >
        Writing
        <br />
        <span className="gradient-text">in public.</span>
      </h1>
      <p
        className="mb-14 text-base"
        style={{ color: "color-mix(in srgb, var(--foreground) 40%, transparent)" }}
      >
        Notes on what I&apos;m building, learning, and figuring out.
      </p>

      {posts.length === 0 ? (
        <p
          className="font-mono text-sm"
          style={{ color: "color-mix(in srgb, var(--foreground) 25%, transparent)" }}
        >
          // no posts yet — check back soon
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
