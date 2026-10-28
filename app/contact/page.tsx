import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Chakri by email, GitHub, or LinkedIn.",
};

const links = [
  {
    label: "Email",
    href: "mailto:nchakradhar234@gmail.com",
    text: "nchakradhar234@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/chakradhar234",
    text: "github.com/chakradhar234",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nchakradhar/",
    text: "linkedin.com/in/nchakradhar",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Contact
        </h1>
        <p className="mt-4 text-muted">
          Have a question, opportunity, or project in mind? I&apos;d love to
          hear from you.
        </p>
      </header>

      <ul className="mt-10 space-y-4">
        {links.map(({ label, href, text }) => (
          <li key={label} className="text-muted">
            <span className="text-foreground">{label}: </span>
            <a
              href={href}
              className="text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
