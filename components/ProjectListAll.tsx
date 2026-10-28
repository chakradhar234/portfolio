import type { Project } from "@/data/projects";

const linkClassName =
  "text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline";

type ProjectListAllProps = {
  projects: Project[];
};

export function ProjectListAll({ projects }: ProjectListAllProps) {
  return (
    <ul className="mt-6 border-t border-border">
      {projects.map((project) => (
        <li key={project.title} className="border-b border-border py-6">
          <h2 className="font-medium text-foreground">{project.title}</h2>
          <p className="mt-1 text-muted">{project.description}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-sm border border-border px-2 py-0.5 text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a
              href={project.githubUrl}
              className={linkClassName}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                className={linkClassName}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            ) : null}
          </p>
        </li>
      ))}
    </ul>
  );
}
