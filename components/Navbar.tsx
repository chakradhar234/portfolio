import { NavLink } from "@/components/NavLink";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <header className="border-b border-border">
      <nav
        className="mx-auto flex max-w-[720px] items-center justify-between gap-4 px-6 py-4"
        aria-label="Main"
      >
        <NavLink href="/" className="font-medium">
          Chakri
        </NavLink>
        <ul className="flex shrink-0 items-center gap-4 sm:gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <NavLink href={href}>{label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
