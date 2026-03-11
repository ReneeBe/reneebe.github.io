export type ChallengeProject = {
  day: number;
  title: string;
  description?: string;
  url?: string;
  repo?: string;
  completed: boolean;
};

export const challengeProjects: ChallengeProject[] = [
  {
    day: 1,
    title: "Portfolio Site",
    description: "Personal portfolio built with Next.js 16, Tailwind CSS v4, and MDX.",
    url: "https://reneebe.github.io",
    completed: true,
  },
  {
    day: 2,
    title: "Portfolio Skins",
    description: "Theme switcher for my portfolio — pre-made skins and AI-generated themes from a text description.",
    url: "https://reneebe.github.io/portfolio-skins",
    repo: "https://github.com/reneebe/portfolio-skins",
    completed: true,
  },
  {
    day: 3,
    title: "Nano Claude Theme Manager",
    description: "Cloudflare Worker that chains Gemini image generation + Claude vision to produce ThemeVars JSON from a text description.",
    repo: "https://github.com/ReneeBe/nano-claude-theme-manager",
    completed: true,
  },
  ...Array.from({ length: 47 }, (_, i) => ({
    day: i + 4,
    title: `Day ${i + 4}`,
    completed: false,
  })),
];
