import Link from "next/link";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <header className="border-b border-border">
      <nav
        className="mx-auto flex max-w-[720px] items-center justify-between px-6 py-4"
        aria-label="Main"
      >
        <Link
          href="/"
          className="text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          Chakri
        </Link>
        <ul className="flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
