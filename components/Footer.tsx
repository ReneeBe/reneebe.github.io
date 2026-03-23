import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 py-8 text-center">
      <Link
        href="/privacy"
        className="text-xs transition-colors duration-200"
        style={{ color: "color-mix(in srgb, var(--foreground) 25%, transparent)" }}
      >
        Privacy Policy
      </Link>
    </footer>
  );
}
