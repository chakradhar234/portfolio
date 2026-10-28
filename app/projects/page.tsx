import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectListAll } from "@/components/ProjectListAll";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software projects by Chakri, with links to source code and live demos.",
};

export default function ProjectsPage() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Projects
        </h1>
        <p className="mt-4 text-muted">
          Selected builds and experiments across frontend, backend, and data.
        </p>
      </header>

      <ProjectListAll projects={projects} />
    </>
  );
}
