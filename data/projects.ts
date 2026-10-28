export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "Minimal dark-themed portfolio with typed content data and server-rendered pages.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/chakradhar234/portfolio",
  },
  {
    title: "TPM UI Modernization",
    description:
      "Frontend improvements and bug fixes for enterprise third-party risk management workflows.",
    tags: ["React", "TypeScript", "ASP.NET"],
    githubUrl: "https://github.com/chakradhar234",
  },
  {
    title: "Full-Stack Starter",
    description:
      "Small reference app combining a React UI, API layer, and relational database schema.",
    tags: ["React", "C#", "MSSQL"],
    githubUrl: "https://github.com/chakradhar234",
    liveUrl: "https://example.com",
  },
];
