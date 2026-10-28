"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLink({ href, children, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const active = isActive(pathname, href);

  return (
    <Link
      href={href}
      className={`text-sm transition-colors hover:text-accent ${
        active ? "text-accent" : "text-foreground"
      } ${className}`.trim()}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
