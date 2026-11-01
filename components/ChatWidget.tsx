"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Chat } from "@/components/Chat";

function ChatIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 text-background"
    >
      <path
        d="M5 5h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 3V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M8 10h8M8 13h5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const titleId = useId();

  const hideWidget =
    pathname === "/ask" || pathname.startsWith("/ask/");

  const closePanel = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => launcherRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePanel();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(() => inputRef.current?.focus());

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closePanel]);

  if (hideWidget) {
    return null;
  }

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        aria-label="Ask Chakri's AI"
        aria-expanded={open}
        aria-controls="chat-widget-panel"
        aria-hidden={open}
        tabIndex={open ? -1 : 0}
        onClick={() => setOpen(true)}
        className={`fixed right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent shadow-none transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
          open ? "sr-only bottom-4" : "bottom-20 sm:bottom-4"
        }`}
      >
        <ChatIcon />
      </button>

      <div
        id="chat-widget-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        hidden={!open}
        className={`fixed z-50 flex max-h-[calc(100dvh-4rem)] flex-col overflow-hidden border border-border bg-background max-sm:inset-x-0 max-sm:bottom-0 max-sm:h-[calc(100dvh-4rem)] max-sm:w-full max-sm:max-h-[calc(100dvh-4rem)] max-sm:border-x-0 max-sm:border-b-0 sm:bottom-4 sm:right-4 sm:h-[min(600px,calc(100dvh-6rem))] sm:w-[360px] sm:max-h-[calc(100dvh-6rem)] ${
          open ? "flex" : "hidden"
        }`}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-3">
          <h2
            id={titleId}
            className="text-sm font-semibold text-foreground"
          >
            Ask about Chakri
          </h2>
          <button
            type="button"
            onClick={closePanel}
            aria-label="Close chat"
            className="rounded-sm px-2 py-1 text-sm text-muted transition-colors hover:text-accent"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <Chat
          variant="panel"
          inputId="chat-widget-input"
          inputRef={inputRef}
        />
      </div>
    </>
  );
}
