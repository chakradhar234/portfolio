import type { Metadata } from "next";
import { Chat } from "@/components/Chat";

export const metadata: Metadata = {
  title: "Ask",
  description:
    "Ask an AI assistant questions about Chakri's experience, skills, and projects.",
};

export default function AskPage() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Ask about Chakri
        </h1>
        <p className="mt-4 text-muted">
          Chat with a small assistant trained only on public info from this site.
        </p>
      </header>
      <Chat />
    </>
  );
}
