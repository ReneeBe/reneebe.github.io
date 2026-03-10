import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPost(slug);
    return { title: post.title, description: post.excerpt };
  } catch {
    return {};
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      {/* Back */}
      <Link
        href="/blog"
        className="mb-10 inline-flex items-center gap-2 font-mono text-xs transition-colors"
        style={{ color: "color-mix(in srgb, var(--foreground) 30%, transparent)" }}
      >
        ← back to blog
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div
          className="mb-4 flex flex-wrap items-center gap-3 font-mono text-xs"
          style={{ color: "color-mix(in srgb, var(--foreground) 25%, transparent)" }}
        >
          <time dateTime={post.date}>{formattedDate}</time>
          <span>·</span>
          <span>{post.readingTime} min read</span>
        </div>
        <h1
          className="mb-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl"
          style={{ fontFamily: "var(--font-heading)", color: "var(--foreground)" }}
        >
          {post.title}
        </h1>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-0.5 font-mono text-xs font-medium"
              style={{ color: "var(--grad-d)", background: "color-mix(in srgb, var(--grad-d) 10%, transparent)", border: "1px solid color-mix(in srgb, var(--grad-d) 20%, transparent)" }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Divider */}
      <div className="mb-12 h-px" style={{ background: "color-mix(in srgb, var(--foreground) 5%, transparent)" }} />

      {/* Content */}
      <div
        className="prose prose-invert max-w-none
          prose-headings:font-black prose-headings:tracking-tight
          prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
          prose-a:text-[#3a86ff] prose-a:no-underline hover:prose-a:underline
          prose-code:text-[#f72585] prose-code:bg-white/5 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm
          prose-pre:bg-white/[0.04] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
          prose-strong:text-white
          prose-p:text-white/60 prose-li:text-white/60
          prose-blockquote:border-l-[#f72585] prose-blockquote:text-white/40"
      >
        <MDXRemote source={post.content} />
      </div>

      {/* Footer CTA */}
      <div className="mt-20 glass rounded-2xl p-6 text-center">
        <p className="mb-3 text-sm" style={{ color: "color-mix(in srgb, var(--foreground) 40%, transparent)" }}>
          Found this useful? Let&apos;s connect.
        </p>
        <a
          href="mailto:hello@reneeberger.dev"
          className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
          style={{ background: "linear-gradient(135deg, var(--grad-a), var(--grad-b))" }}
        >
          Say hello
        </a>
      </div>
    </div>
  );
}
