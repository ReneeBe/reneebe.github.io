"use client";

import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

type Props = { post: PostMeta };

export default function BlogCard({ post }: Props) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article
        className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
        style={{ boxShadow: "0 0 0 transparent" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(58,134,255,0.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 transparent";
        }}
      >
        <div
          className="mb-3 flex items-center gap-3 font-mono text-xs"
          style={{ color: "color-mix(in srgb, var(--foreground) 25%, transparent)" }}
        >
          <time dateTime={post.date}>{formattedDate}</time>
          <span>·</span>
          <span>{post.readingTime} min read</span>
        </div>
        <h2
          className="mb-2 text-xl font-bold transition-colors group-hover:text-[var(--grad-c)]"
          style={{ fontFamily: "var(--font-heading)", color: "var(--foreground)" }}
        >
          {post.title}
        </h2>
        <p
          className="mb-4 text-sm leading-relaxed"
          style={{ color: "color-mix(in srgb, var(--foreground) 45%, transparent)" }}
        >{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-0.5 font-mono text-xs font-medium text-[#06d6a0]"
              style={{ background: "rgba(6,214,160,0.08)", border: "1px solid rgba(6,214,160,0.15)" }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
