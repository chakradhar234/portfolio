export const siteDescription =
  "Software engineer building and shipping full-stack enterprise web products.";

/**
 * Canonical site URL for metadata, sitemap, and robots.
 * Set NEXT_PUBLIC_SITE_URL in Vercel to your production domain.
 */
const FALLBACK_SITE_URL = "https://chakri.vercel.app";

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) {
    return fromEnv;
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  return FALLBACK_SITE_URL;
}
