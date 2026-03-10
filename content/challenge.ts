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
  ...Array.from({ length: 48 }, (_, i) => ({
    day: i + 3,
    title: `Day ${i + 3}`,
    completed: false,
  })),
];
