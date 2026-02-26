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
        <p className="text-xs font-mono text-white/30 uppercase tracking-widest">04 / blog</p>
        <div className="h-px flex-1 bg-white/5" />
      </div>
      <h1
        className="mb-4 text-5xl font-black tracking-tight text-white sm:text-6xl"
        style={{ fontFamily: "var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif" }}
      >
        Writing
        <br />
        <span className="gradient-text">in public.</span>
      </h1>
      <p className="mb-14 text-base text-white/40">
        Notes on what I&apos;m building, learning, and figuring out.
      </p>

      {posts.length === 0 ? (
        <p className="font-mono text-sm text-white/25">// no posts yet — check back soon</p>
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
