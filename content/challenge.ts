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
  {
    day: 4,
    title: "Theme Generator",
    description: "Vite/React UI for AI theme generation — describe a vibe, get a full UI theme powered by Gemini + Claude.",
    url: "https://reneebe.github.io/theme-generator",
    repo: "https://github.com/ReneeBe/theme-generator",
    completed: true,
  },
  {
    day: 5,
    title: "Theme Extension",
    description: "Chrome extension that injects AI-generated CSS themes into any website with one click.",
    url: "https://reneebe.github.io/theme-extension",
    repo: "https://github.com/ReneeBe/theme-extension",
    completed: true,
  },
  {
    day: 6,
    title: "Accessibility Auditor",
    description: "Paste a React component and get a list of WCAG 2.2 issues detected via static AST analysis. No backend, no AI — pure client-side.",
    url: "/tools/accessibility-auditor/",
    repo: "https://github.com/reneebe/accessibilityAuditor",
    completed: true,
  },
  {
    day: 7,
    title: "Persist",
    description: "Chrome extension + Cloudflare Worker that captures full page context and lets you selectively share it with AI agents via REST or MCP.",
    repo: "https://github.com/ReneeBe/persist",
    completed: true,
  },
  {
    day: 8,
    title: "Brain Dump Scheduler",
    description: "Paste a free-form brain dump and Claude extracts, prioritizes, and schedules your tasks into a timeline view.",
    url: "https://reneebe.github.io/brain-dump-scheduler",
    repo: "https://github.com/ReneeBe/brain-dump-scheduler",
    completed: true,
  },
  {
    day: 9,
    title: "Type Speed Test",
    description: "A typing speed test with live WPM, accuracy, and error tracking. Dark and light mode included.",
    url: "https://reneebe.github.io/type-speed-test/",
    repo: "https://github.com/ReneeBe/type-speed-test",
    completed: true,
  },
  ...Array.from({ length: 41 }, (_, i) => ({
    day: i + 10,
    title: `Day ${i + 10}`,
    completed: false,
  })),
];
