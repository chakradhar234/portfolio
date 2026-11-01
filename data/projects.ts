export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "A minimal dark-themed portfolio with typed content data, server-rendered pages, and an AI chatbot that answers visitor questions about me using the Gemini API.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API"],
    githubUrl: "https://github.com/chakradhar234/portfolio",
    liveUrl: "https://portfolio-wheat-tau-f4cfydtr9p.vercel.app",
  },
  {
    title: "SunSeat",
    description:
      "A travel-planning PWA that recommends which side of a vehicle to sit on to avoid or catch the sun, based on route and sun position.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "PWA"],
  },
  {
    title: "Event Management System",
    description:
      "A platform to create, browse and join events, with email notifications and registration confirmations.",
    tags: ["JSP", "Servlets", "JDBC", "MySQL"],
  },
  {
    title: "Food Delivery Website",
    description:
      "A responsive ordering app with menu browsing, cart, user authentication and order processing.",
    tags: ["JSP", "JDBC", "MySQL"],
  },
];
