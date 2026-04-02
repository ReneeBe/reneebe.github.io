"use client";

import { useEffect, useRef } from "react";
import type { ChallengeProject } from "@/content/challenge";

interface Props {
  project: ChallengeProject & { blogSlug?: string };
  accent: string;
  onClose: () => void;
}

export function ProjectPeekModal({ project, accent, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const demoHref = project.url;
  const isStoreLink = demoHref?.includes("chromewebstore.google.com");
  const repoHref = project.repo;
  const blogHref = project.blogSlug ? `/blog/${project.blogSlug}` : undefined;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="glass w-full max-w-sm rounded-2xl p-6 relative"
        style={{
          border: `1px solid ${accent}40`,
          boxShadow: `0 0 40px ${accent}15, 0 25px 50px rgba(0,0,0,0.4)`,
          animation: "peekIn 0.18s ease",
        }}
      >
        <style>{`
          @keyframes peekIn {
            from { opacity: 0; transform: translateY(10px) scale(0.98); }
            to   { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}</style>

        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <span
              className="text-xs font-mono font-black block mb-1"
              style={{ color: accent }}
            >
              {String(project.day).padStart(2, "0")}
            </span>
            <h2
              className="text-lg font-bold leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded-lg p-1.5 transition-colors"
            style={{
              color: "color-mix(in srgb, var(--foreground) 30%, transparent)",
              background: "color-mix(in srgb, var(--foreground) 5%, transparent)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Description */}
        {project.description && (
          <p
            className="text-sm leading-relaxed mb-5"
            style={{ color: "color-mix(in srgb, var(--foreground) 55%, transparent)" }}
          >
            {project.description}
          </p>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-2">
          {demoHref && (
            <a
              href={demoHref}
              target={demoHref.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-opacity hover:opacity-80"
              style={{ background: accent, color: "#fff" }}
            >
              ↗ {isStoreLink ? "Chrome Web Store" : "Live demo"}
            </a>
          )}
          {repoHref && (
            <a
              href={repoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors"
              style={{
                background: "color-mix(in srgb, var(--foreground) 6%, transparent)",
                border: "1px solid color-mix(in srgb, var(--foreground) 10%, transparent)",
                color: "color-mix(in srgb, var(--foreground) 60%, transparent)",
              }}
            >
              GitHub
            </a>
          )}
          {blogHref && (
            <a
              href={blogHref}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors"
              style={{
                background: "color-mix(in srgb, var(--foreground) 6%, transparent)",
                border: "1px solid color-mix(in srgb, var(--foreground) 10%, transparent)",
                color: "color-mix(in srgb, var(--foreground) 60%, transparent)",
              }}
            >
              Blog post
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
