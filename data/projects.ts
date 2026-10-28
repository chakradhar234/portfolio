export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Taskflow",
    description: "A minimal task board with drag-and-drop and offline-friendly local storage.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/yourusername/taskflow",
    liveUrl: "https://example.com/taskflow",
  },
  {
    title: "API Health Dashboard",
    description: "Monitors HTTP endpoints and surfaces uptime and latency in one view.",
    tags: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/api-health",
  },
  {
    title: "Markdown Notes",
    description: "Fast note-taking app with live preview and folder-based organization.",
    tags: ["Next.js", "MDX"],
    githubUrl: "https://github.com/yourusername/markdown-notes",
    liveUrl: "https://example.com/notes",
  },
];
