import Link from "next/link";
import type { Project } from "@/data/projects";

function projectHref(project: Project) {
  return project.liveUrl ?? project.githubUrl;
}

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

type ProjectListHomeProps = {
  projects: Project[];
};

export function ProjectListHome({ projects }: ProjectListHomeProps) {
  return (
    <ul className="mt-6 border-t border-border">
      {projects.map((project) => {
        const href = projectHref(project);
        const rowClassName = "group block py-6";
        const content = (
          <>
            <h3 className="font-medium text-foreground transition-colors group-hover:text-accent">
              {project.title}
            </h3>
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
          </>
        );

        return (
          <li key={project.title} className="border-b border-border">
            {isExternalHref(href) ? (
              <a
                href={href}
                className={rowClassName}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <Link href={href} className={rowClassName}>
                {content}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
