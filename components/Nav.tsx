"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const links = [
  { href: "/", label: "Home" },
  { href: "/50projects", label: "50&nbsp;Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-center px-4 pt-4">
      <nav
        className="glass flex items-center gap-1 rounded-full px-2 py-2 shadow-lg"
        style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)" }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="mr-2 rounded-full px-4 py-1.5 text-sm font-black tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "var(--foreground)" }}
        >
          reneebe
          <span className="gradient-text">.github.io</span>
        </Link>

        {/* Divider */}
        <div className="h-4 w-px" style={{ background: "color-mix(in srgb, var(--foreground) 10%, transparent)" }} />

        {/* Links */}
        {links.map(({ href, label }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className="rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200"
              style={{
                background: isActive ? "color-mix(in srgb, var(--foreground) 10%, transparent)" : undefined,
                color: isActive
                  ? "var(--foreground)"
                  : "color-mix(in srgb, var(--foreground) 50%, transparent)",
              }}
              dangerouslySetInnerHTML={{ __html: label }}
            />
          );
        })}

        {/* Hire me badge */}
        <div className="ml-2 h-4 w-px" style={{ background: "color-mix(in srgb, var(--foreground) 10%, transparent)" }} />
        <Link
          href="mailto:hello@reneeberger.dev"
          className="ml-1 rounded-full px-4 py-1.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:brightness-110"
          style={{ background: "linear-gradient(135deg, var(--grad-a), var(--grad-b))" }}
        >
          Hire me
        </Link>
      </nav>

      {/* Theme switcher — top right */}
      <div className="absolute right-4 top-4">
        <ThemeSwitcher />
      </div>
    </header>
  );
}
