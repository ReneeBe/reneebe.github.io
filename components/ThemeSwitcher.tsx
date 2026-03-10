"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { themes, defaultTheme, type Theme, type ThemeVars } from "@/lib/themes";

// Update this after deploying the Cloudflare Worker
const AI_ENDPOINT = "https://portfolio-skins-ai.YOUR_SUBDOMAIN.workers.dev";

export default function ThemeSwitcher() {
  const [current, setCurrent] = useState<Theme>(defaultTheme);
  const [open, setOpen] = useState(false);
  const [customText, setCustomText] = useState("");
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const applyTheme = useCallback((theme: Theme) => {
    const root = document.documentElement;
    for (const [key, value] of Object.entries(theme.vars)) {
      root.style.setProperty(key, value);
    }
    document.body.style.backgroundColor = theme.vars["--background"];
    document.body.style.color = theme.vars["--foreground"];
    setCurrent(theme);
    if (theme.id === "custom") {
      localStorage.setItem("portfolio-theme", "custom");
      localStorage.setItem("portfolio-theme-custom", JSON.stringify(theme));
    } else {
      localStorage.setItem("portfolio-theme", theme.id);
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "custom") {
      const raw = localStorage.getItem("portfolio-theme-custom");
      if (raw) applyTheme(JSON.parse(raw) as Theme);
    } else if (saved) {
      const found = themes.find((t) => t.id === saved);
      if (found) applyTheme(found);
    }
  }, [applyTheme]);

  useEffect(() => {
    const handler = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent) {
        if (e.key === "Escape") setOpen(false);
        return;
      }
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", handler);
    };
  }, []);

  async function generateTheme() {
    if (!customText.trim()) return;
    setGenerating(true);
    setError("");
    try {
      const res = await fetch(AI_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: customText }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Generation failed");
      }
      const vars = (await res.json()) as ThemeVars;
      applyTheme({
        id: "custom",
        name: customText.slice(0, 28),
        emoji: "✨",
        vars,
      });
      setOpen(false);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setGenerating(false);
    }
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="glass flex h-9 w-9 items-center justify-center rounded-full text-sm transition-all duration-200 hover:scale-105"
        aria-label="Change theme"
        title="Change theme"
      >
        <span role="img" aria-label={current.name}>{current.emoji}</span>
      </button>

      {open && (
        <div className="glass-strong absolute right-0 top-11 z-[60] w-64 rounded-2xl p-2 shadow-2xl">
          <p className="px-3 pb-1.5 pt-2 text-[10px] font-semibold uppercase tracking-widest text-white/30">
            Themes
          </p>

          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => {
                applyTheme(theme);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition-all hover:bg-white/5 ${
                current.id === theme.id ? "bg-white/8" : ""
              }`}
            >
              <span className="w-5 text-center text-base">{theme.emoji}</span>
              <span className="flex-1 font-medium text-white/80">{theme.name}</span>
              <div className="flex gap-0.5">
                {(["--grad-a", "--grad-b", "--grad-c", "--grad-d"] as const).map(
                  (k) => (
                    <div
                      key={k}
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: theme.vars[k] }}
                    />
                  )
                )}
              </div>
            </button>
          ))}

          {current.id === "custom" && (
            <button
              className="flex w-full items-center gap-3 rounded-xl bg-white/8 px-3 py-2 text-left text-sm ring-1 ring-white/10"
            >
              <span className="w-5 text-center text-base">✨</span>
              <span className="flex-1 font-medium text-white/80 truncate">{current.name}</span>
            </button>
          )}

          <div className="mx-3 my-2 border-t border-white/10" />

          <div className="px-1 pb-1">
            <p className="mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-widest text-white/30">
              AI Theme
            </p>
            <textarea
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) generateTheme();
              }}
              placeholder={`"ocean at dusk" or "retro arcade"…`}
              className="w-full resize-none rounded-xl bg-white/5 px-3 py-2 text-xs text-white/70 placeholder:text-white/25 focus:outline-none focus:ring-1 focus:ring-white/20"
              rows={2}
            />
            {error && (
              <p className="mt-1 text-[11px] text-red-400">{error}</p>
            )}
            <button
              onClick={generateTheme}
              disabled={!customText.trim() || generating}
              className="mt-1.5 w-full rounded-xl py-2 text-xs font-semibold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
              style={{ background: "linear-gradient(135deg, var(--grad-a), var(--grad-b))" }}
            >
              {generating ? (
                <span className="flex items-center justify-center gap-1.5">
                  <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Generating…
                </span>
              ) : (
                "✨ Generate with AI"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
