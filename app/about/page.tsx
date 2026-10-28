import type { Metadata } from "next";
import Link from "next/link";
import { experience } from "@/data/experience";
import { recognition } from "@/data/recognition";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Chakri — experience, recognition, skills, and resume.",
};

export default function AboutPage() {
  const showRecognition = recognition.length > 0;

  return (
    <>
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          About
        </h1>
      </header>

      <div className="mt-8 space-y-4 text-muted">
        <p>
          I&apos;m Chakri, a software engineer working on enterprise SaaS at
          Diligent, where I ship features, fix production issues, and improve
          the experience for global client teams.
        </p>
        <p>
          I enjoy tracing bugs to their root cause, working across the stack
          from React and TypeScript to C#, ASP.NET, and SQL, and collaborating
          with product and support when customer impact is on the line.
        </p>
        <p>
          I&apos;m focused on growing as a full-stack engineer—stronger system
          design, clearer communication, and steady delivery on meaningful
          product work.
        </p>
      </div>

      <section className="mt-16" aria-labelledby="experience-heading">
        <h2
          id="experience-heading"
          className="text-lg font-semibold text-foreground"
        >
          Experience
        </h2>
        <ul className="mt-6 border-t border-border">
          {experience.map((entry) => (
            <li
              key={`${entry.company}-${entry.role}`}
              className="border-b border-border py-6"
            >
              <h3 className="font-medium text-foreground">{entry.role}</h3>
              <p className="mt-1 text-muted">
                {entry.company} · {entry.startDate} – {entry.endDate} ·{" "}
                {entry.location}
              </p>
              {entry.bullets.length > 0 ? (
                <ul className="mt-4 space-y-2 text-muted">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      {showRecognition ? (
        <section className="mt-16" aria-labelledby="recognition-heading">
          <h2
            id="recognition-heading"
            className="text-lg font-semibold text-foreground"
          >
            Recognition
          </h2>
          <ul className="mt-6 border-t border-border">
            {recognition.map((item) => (
              <li
                key={`${item.date}-${item.from}`}
                className="border-b border-border py-6 text-muted"
              >
                <p className="text-foreground">{item.date}</p>
                <p className="mt-1">{item.text}</p>
                <p className="mt-2 text-sm">{item.from}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-16" aria-labelledby="skills-heading">
        <h2
          id="skills-heading"
          className="text-lg font-semibold text-foreground"
        >
          Skills
        </h2>
        <div className="mt-6 space-y-4 text-muted">
          <p>
            <span className="text-foreground">Frontend:</span> React,
            TypeScript, JavaScript, Tailwind CSS
          </p>
          <p>
            <span className="text-foreground">Backend:</span> C#, ASP.NET,
            Java, Spring Boot
          </p>
          <p>
            <span className="text-foreground">Databases:</span> MSSQL, MySQL
          </p>
          <p>
            <span className="text-foreground">Tools:</span> Git, GitHub,
            Vercel
          </p>
        </div>
      </section>

      <p className="mt-16">
        <Link
          href="/resume.pdf"
          className="text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          Resume
        </Link>
      </p>
    </>
  );
}
