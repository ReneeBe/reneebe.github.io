export type Project = {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Site",
    description:
      "This very site — built with Next.js 15, Tailwind CSS v4, and MDX for blog posts. Dark mode, bold typography, and a 50-project tracker.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    repo: "https://github.com/reneeberger/portfolio",
  },
  {
    title: "Dev Task CLI",
    description:
      "A command-line task manager for developers. Supports projects, priorities, tags, and a pomodoro timer. Built with Node.js and SQLite.",
    tags: ["Node.js", "TypeScript", "SQLite", "CLI"],
    repo: "https://github.com/reneeberger/dev-task-cli",
  },
  {
    title: "Palette Generator",
    description:
      "Generate accessible color palettes from a single seed color. Exports to CSS variables, Tailwind config, or JSON. Built with React.",
    tags: ["React", "TypeScript", "Color Theory", "CSS"],
    url: "https://palette.example.com",
    repo: "https://github.com/reneeberger/palette-gen",
  },
  {
    title: "RSS Reader",
    description:
      "A minimal RSS feed reader with folder organization, read/unread tracking, and keyboard-first navigation. Self-hostable.",
    tags: ["Next.js", "PostgreSQL", "Docker", "RSS"],
    repo: "https://github.com/reneeberger/rss-reader",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather dashboard with hourly forecasts, wind maps, and 7-day outlook. Uses OpenWeatherMap API.",
    tags: ["React", "API", "Charts", "CSS"],
    url: "https://weather.example.com",
    repo: "https://github.com/reneeberger/weather-dash",
  },
  {
    title: "Markdown Notes",
    description:
      "Local-first markdown notes app with live preview, tag search, and export to PDF. Runs entirely in the browser.",
    tags: ["React", "LocalStorage", "Markdown", "PDF"],
    url: "https://notes.example.com",
  },
];
