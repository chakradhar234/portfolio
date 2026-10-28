import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Page not found
      </h1>
      <p className="mt-4 text-muted">
        That page doesn&apos;t exist or may have moved.
      </p>
      <p className="mt-8">
        <Link
          href="/"
          className="text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          Back to home
        </Link>
      </p>
    </section>
  );
}
