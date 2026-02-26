export type Project = {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [];
