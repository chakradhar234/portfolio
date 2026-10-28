import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Chakri — background, skills, and resume.",
};

export default function AboutPage() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          About
        </h1>
      </header>

      <div className="mt-8 space-y-4 text-muted">
        <p>
          I&apos;m Chakri, a software engineer focused on building clear,
          reliable web applications. I care about readable code, accessible
          interfaces, and products that solve real problems without unnecessary
          complexity.
        </p>
        <p>
          Most of my work sits on the full stack, from UI and APIs to deployment
          and observability. I&apos;m currently spending more time on system
          design, performance tuning, and sharpening how I communicate tradeoffs
          in technical decisions.
        </p>
      </div>

      <section className="mt-16" aria-labelledby="skills-heading">
        <h2
          id="skills-heading"
          className="text-lg font-semibold text-foreground"
        >
          Skills
        </h2>
        <div className="mt-6 space-y-4 text-muted">
          <p>
            <span className="text-foreground">Frontend:</span> React, Next.js,
            TypeScript, HTML, CSS, Tailwind CSS
          </p>
          <p>
            <span className="text-foreground">Backend:</span> Node.js, REST
            APIs, authentication basics, serverless functions
          </p>
          <p>
            <span className="text-foreground">Databases:</span> PostgreSQL,
            SQL, schema design, Prisma
          </p>
          <p>
            <span className="text-foreground">Tools:</span> Git, GitHub, VS
            Code, Vercel, Linux, Docker basics
          </p>
        </div>
      </section>

      <p className="mt-16">
        <Link
          href="/resume.pdf"
          className="text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          Download resume (PDF)
        </Link>
      </p>
    </>
  );
}
