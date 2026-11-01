"use client";

import {
  type FormEvent,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const SUGGESTED_QUESTIONS = [
  "What does Chakri work on?",
  "Which technologies does he know?",
  "Tell me about his projects",
] as const;

const MAX_INPUT_LINES = 3;
const LINE_HEIGHT_PX = 24;
const INPUT_PADDING_Y_PX = 16;

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function SendArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 text-background"
    >
      <path
        d="M5 12h12M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ChatProps = {
  variant?: "page" | "panel";
  inputId?: string;
  inputRef?: RefObject<HTMLTextAreaElement | null>;
};

export function Chat({
  variant = "page",
  inputId = "chat-input",
  inputRef,
}: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const localInputRef = useRef<HTMLTextAreaElement>(null);
  const textareaRef = inputRef ?? localInputRef;
  const isPanel = variant === "panel";
  const showSuggestions = messages.length === 0;

  const busy = isThinking || isStreaming;
  const maxInputHeight = LINE_HEIGHT_PX * MAX_INPUT_LINES + INPUT_PADDING_Y_PX;

  function resizeTextarea(textarea: HTMLTextAreaElement) {
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, maxInputHeight)}px`;
    textarea.style.overflowY =
      textarea.scrollHeight > maxInputHeight ? "auto" : "hidden";
  }

  function scrollMessagesToBottom(behavior: ScrollBehavior = "smooth") {
    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }
    container.scrollTo({ top: container.scrollHeight, behavior });
  }

  useEffect(() => {
    const behavior = isStreaming ? "auto" : "smooth";
    scrollMessagesToBottom(behavior);
  }, [messages, isThinking, isStreaming]);

  async function sendQuestion(question: string) {
    const trimmed = question.trim();
    if (!trimmed || busy) {
      return;
    }

    const userMessage: Message = {
      id: createId(),
      role: "user",
      content: trimmed,
    };
    const assistantId = createId();

    setMessages((prev) => [
      ...prev,
      userMessage,
      { id: assistantId, role: "assistant", content: "" },
    ]);
    setInput("");
    const textarea = textareaRef.current;
    if (textarea) {
      requestAnimationFrame(() => resizeTextarea(textarea));
    }
    setIsThinking(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });

      const contentType = response.headers.get("content-type") ?? "";

      if (!response.ok || contentType.includes("application/json")) {
        const data = (await response.json()) as {
          answer?: string;
          error?: string;
        };
        const text = data.error ?? data.answer ?? BUSY_FALLBACK;
        setMessages((prev) =>
          prev.map((message) =>
            message.id === assistantId
              ? { ...message, content: text }
              : message,
          ),
        );
        return;
      }

      if (!response.body) {
        throw new Error("No response body");
      }

      setIsThinking(false);
      setIsStreaming(true);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        assistantText += decoder.decode(value, { stream: true });
        const snapshot = assistantText;
        setMessages((prev) =>
          prev.map((message) =>
            message.id === assistantId
              ? { ...message, content: snapshot }
              : message,
          ),
        );
      }

      assistantText += decoder.decode();
      if (assistantText) {
        setMessages((prev) =>
          prev.map((message) =>
            message.id === assistantId
              ? { ...message, content: assistantText }
              : message,
          ),
        );
      }
    } catch {
      setMessages((prev) =>
        prev.map((message) =>
          message.id === assistantId
            ? { ...message, content: BUSY_FALLBACK }
            : message,
        ),
      );
    } finally {
      setIsThinking(false);
      setIsStreaming(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendQuestion(input);
  }

  const messagesAreaClassName = isPanel
    ? "min-h-0 flex-1 space-y-4 overflow-y-auto px-1 py-2"
    : "max-h-[min(420px,50vh)] space-y-4 overflow-y-auto border border-border p-4";

  const inputRow = (
    <div className="flex items-end gap-2">
      <textarea
        id={inputId}
        ref={textareaRef}
        rows={1}
        maxLength={500}
        value={input}
        disabled={busy}
        onChange={(event) => {
          setInput(event.target.value);
          resizeTextarea(event.target);
        }}
        placeholder="Type your question…"
        className="min-h-[2.5rem] w-full flex-1 resize-none overflow-hidden rounded-sm border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-60"
        style={{ maxHeight: maxInputHeight }}
      />
      <button
        type="submit"
        disabled={busy || input.trim().length === 0}
        aria-label="Send message"
        className={
          isPanel
            ? "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            : "inline-flex shrink-0 items-center rounded-sm bg-accent px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        }
      >
        {isPanel ? <SendArrowIcon /> : "Send"}
      </button>
    </div>
  );

  return (
    <div
      className={
        isPanel ? "flex min-h-0 flex-1 flex-col overflow-hidden" : "mt-10"
      }
    >
      <div
        ref={scrollContainerRef}
        className={messagesAreaClassName}
        aria-live="polite"
        aria-relevant="additions text"
      >
        {showSuggestions ? (
          <>
            <p className="text-sm text-muted">
              Ask a question about Chakri&apos;s work, skills, or projects.
            </p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_QUESTIONS.map((question) => (
                <button
                  key={question}
                  type="button"
                  disabled={busy}
                  onClick={() => void sendQuestion(question)}
                  className="rounded-sm border border-border px-3 py-1.5 text-left text-xs text-foreground transition-colors hover:text-accent disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {question}
                </button>
              ))}
            </div>
          </>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={
                message.role === "user"
                  ? "text-foreground"
                  : "border-t border-border pt-4 text-muted first:border-t-0 first:pt-0"
              }
            >
              <p className="text-xs font-medium uppercase tracking-wide text-foreground">
                {message.role === "user" ? "You" : "Assistant"}
              </p>
              <p className="mt-1 break-words whitespace-pre-wrap">
                {message.role === "assistant" &&
                message.content === "" &&
                isThinking ? (
                  <span className="text-muted">Thinking...</span>
                ) : (
                  message.content
                )}
              </p>
            </div>
          ))
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className={`shrink-0 border-border ${isPanel ? "border-t px-1 pt-3 pb-1" : "mt-6 space-y-3"}`}
      >
        <label htmlFor={inputId} className="sr-only">
          Your question
        </label>
        {inputRow}
        {!isPanel && isStreaming ? (
          <p className="text-sm text-muted">Reply streaming…</p>
        ) : null}
        <p
          className={
            isPanel
              ? "mt-1.5 text-[11px] leading-snug text-muted"
              : "text-xs text-muted"
          }
        >
          AI answers come from Chakri&apos;s resume and may contain mistakes.
        </p>
      </form>
    </div>
  );
}

const BUSY_FALLBACK =
  "The assistant is busy right now, please try again or email Chakri";
