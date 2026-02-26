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
    title: "Expanding Cards",
    description: "CSS-only expanding image cards with smooth transitions.",
    url: "https://challenge.example.com/01",
    completed: true,
  },
  {
    day: 2,
    title: "Progress Steps",
    description: "Multi-step form progress indicator with animated connectors.",
    url: "https://challenge.example.com/02",
    completed: true,
  },
  {
    day: 3,
    title: "Rotating Nav",
    description: "Circular rotating navigation menu with CSS transforms.",
    completed: true,
  },
  {
    day: 4,
    title: "Hidden Search Bar",
    description: "Search input that expands on focus with smooth animation.",
    completed: true,
  },
  {
    day: 5,
    title: "Blurry Loading",
    description: "Background image that sharpens as a fake loading bar fills.",
    completed: true,
  },
  {
    day: 6,
    title: "Scroll Animation",
    description: "Elements animate into view as you scroll down the page.",
    completed: true,
  },
  {
    day: 7,
    title: "Split Landing Page",
    description: "Two-panel landing page that splits apart on hover.",
    completed: true,
  },
  {
    day: 8,
    title: "Form Wave Animation",
    description: "Label text waves letter by letter when the input is focused.",
    completed: true,
  },
  {
    day: 9,
    title: "Sound Board",
    description: "Clickable buttons each play a different sound effect.",
    completed: true,
  },
  {
    day: 10,
    title: "Dad Jokes",
    description: "Fetch and display random dad jokes from an API.",
    completed: true,
  },
  ...Array.from({ length: 40 }, (_, i) => ({
    day: i + 11,
    title: `Day ${i + 11}`,
    completed: false,
  })),
];
