import Link from "next/link";
import { projects } from "@/data/projects";

const selectedProjects = projects.slice(0, 3);

function projectHref(project: (typeof projects)[number]) {
  return project.liveUrl ?? project.githubUrl ?? "/projects";
}

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function Home() {
  return (
    <>
      <section>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Hi, I&apos;m Chakri. I build{" "}
          <span className="text-accent">web products</span>.
        </h1>
        <p className="mt-4 text-muted">
          I ship full-stack web apps and I&apos;m deepening my skills in system
          design and performance.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-sm bg-accent px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center border border-border px-4 py-2 text-sm text-foreground transition-colors hover:text-accent"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="mt-20" aria-labelledby="selected-projects-heading">
        <h2
          id="selected-projects-heading"
          className="text-lg font-semibold text-foreground"
        >
          Selected projects
        </h2>
        <ul className="mt-6 border-t border-border">
          {selectedProjects.map((project) => {
            const href = projectHref(project);
            const external = isExternalHref(href);
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
                {external ? (
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
      </section>
    </>
  );
}
