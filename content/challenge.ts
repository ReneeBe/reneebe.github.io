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
  ...Array.from({ length: 49 }, (_, i) => ({
    day: i + 2,
    title: `Day ${i + 2}`,
    completed: false,
  })),
];
