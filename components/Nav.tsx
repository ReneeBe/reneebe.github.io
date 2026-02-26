"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/50projects", label: "50&nbsp;Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className="glass flex items-center gap-1 rounded-full px-2 py-2 shadow-lg"
        style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)" }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="mr-2 rounded-full px-4 py-1.5 font-heading text-sm font-black text-white tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif" }}
        >
          rb
          <span className="gradient-text">.dev</span>
        </Link>

        {/* Divider */}
        <div className="h-4 w-px bg-white/10" />

        {/* Links */}
        {links.map(({ href, label }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:bg-white/5 hover:text-white/90"
              }`}
              dangerouslySetInnerHTML={{ __html: label }}
            />
          );
        })}

        {/* Hire me badge */}
        <div className="ml-2 h-4 w-px bg-white/10" />
        <Link
          href="mailto:hello@reneeberger.dev"
          className="ml-1 rounded-full px-4 py-1.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:brightness-110"
          style={{ background: "linear-gradient(135deg, #f72585, #7209b7)" }}
        >
          Hire me
        </Link>
      </nav>
    </header>
  );
}
