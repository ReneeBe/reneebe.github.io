"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const links = [
  { href: "/", label: "Home" },
  { href: "/25projects", label: "25&nbsp;Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-center px-2 pt-3 sm:px-4 sm:pt-4">
      <nav
        className="glass flex items-center gap-0.5 rounded-full px-1.5 py-1.5 shadow-lg sm:gap-1 sm:px-2 sm:py-2"
        style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)" }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="mr-0.5 rounded-full px-1.5 py-1 text-[11px] font-black tracking-tight sm:mr-2 sm:px-4 sm:py-1.5 sm:text-sm"
          style={{ fontFamily: "var(--font-heading)", color: "var(--foreground)" }}
        >
          reneebe
          <span className="gradient-text">.github.io</span>
        </Link>

        {/* Divider */}
        <div className="hidden h-4 w-px sm:block" style={{ background: "color-mix(in srgb, var(--foreground) 10%, transparent)" }} />

        {/* Links */}
        {links.map(({ href, label }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className="whitespace-nowrap rounded-full px-1.5 py-1 text-[11px] font-medium transition-all duration-200 sm:px-4 sm:py-1.5 sm:text-sm"
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
        <div className="ml-1 hidden h-4 w-px sm:ml-2 sm:block" style={{ background: "color-mix(in srgb, var(--foreground) 10%, transparent)" }} />
        <Link
          href="mailto:reneelberger@gmail.com"
          className="ml-0.5 whitespace-nowrap rounded-full px-2 py-1 text-[11px] font-semibold text-white transition-all duration-200 hover:scale-105 hover:brightness-110 sm:ml-1 sm:px-4 sm:py-1.5 sm:text-sm"
          style={{ background: "linear-gradient(135deg, var(--grad-a), var(--grad-b))" }}
        >
          Hire me
        </Link>
      </nav>

      {/* Theme switcher — desktop: top-right inline; mobile: floating bottom-right */}
      <div className="fixed bottom-4 right-4 z-50 sm:absolute sm:bottom-auto sm:top-4">
        <ThemeSwitcher />
      </div>
    </header>
  );
}
