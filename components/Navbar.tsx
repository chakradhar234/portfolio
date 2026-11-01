import { NavLink } from "@/components/NavLink";

const navLinks = [
  { href: "/ask", label: "Ask my AI" },
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
        <ul className="flex max-w-[65%] flex-wrap items-center justify-end gap-x-3 gap-y-2 sm:max-w-none sm:gap-x-6">
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
