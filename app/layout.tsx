import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getSiteUrl, siteDescription } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();
const defaultTitle = "Chakri | Software Engineer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Chakri",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Chakri",
    title: defaultTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background font-sans text-foreground">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main
          id="main-content"
          tabIndex={-1}
          className="mx-auto w-full max-w-[720px] flex-1 px-6 py-16 outline-none"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
