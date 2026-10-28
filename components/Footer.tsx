import { Suspense } from "react";
import { FooterYear } from "@/components/FooterYear";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[720px] flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted">
        <p>
          ©{" "}
          <Suspense fallback={null}>
            <FooterYear />
          </Suspense>{" "}
          Chakri
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/yourusername"
            className="transition-colors hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="transition-colors hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
