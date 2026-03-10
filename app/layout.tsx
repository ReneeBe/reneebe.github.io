import type { Metadata } from "next";
import { Space_Grotesk, Inter, Orbitron, Lora, Pacifico } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Renee Berger — Fullstack Engineer",
    template: "%s | Renee Berger",
  },
  description:
    "Fullstack engineer building products for the web. Available for new opportunities.",
  openGraph: {
    title: "Renee Berger — Fullstack Engineer",
    description:
      "Fullstack engineer building products for the web. Available for new opportunities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${orbitron.variable} ${lora.variable} ${pacifico.variable} antialiased`}>
        {/* Animated gradient blobs */}
        <div className="blob-layer" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
          <div className="blob blob-4" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Nav />
          <main className="pt-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
