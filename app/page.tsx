import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectListHome } from "@/components/ProjectListHome";

const selectedProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <>
      <section>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-tight">
          Hi, I&apos;m Chakri. I build{" "}
          <span className="text-accent">web products</span>.
        </h1>
        <p className="mt-4 text-muted">
          I build and debug full-stack enterprise software, and I&apos;m
          sharpening how I design reliable systems and ship faster with clearer
          tradeoffs.
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
        <ProjectListHome projects={selectedProjects} />
      </section>
    </>
  );
}
