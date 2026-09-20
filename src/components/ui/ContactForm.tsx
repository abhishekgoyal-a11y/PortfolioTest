"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { personal } from "@/data/personal";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  function validate(): string | null {
    if (!name.trim()) return "Please enter your name.";
    if (!email.trim()) return "Please enter your email.";
    // Simple email regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Please enter a valid email address.";
    if (!message.trim()) return "Please enter a message.";
    return null;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const err = validate();
    if (err) {
      setError(err);
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      // No backend configured — fall back to mailto.
      // Small delay so the loading state is visible.
      await new Promise((r) => setTimeout(r, 400));

      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );
      const href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

      if (typeof window !== "undefined") {
        window.location.href = href;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please email me directly.");
    }
  }

  const isLoading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
      noValidate
      aria-label="Contact form"
    >
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-name"
          className="text-sm font-medium text-foreground"
        >
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="name"
          aria-required="true"
          disabled={isLoading}
          className={cn(
            "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-60"
          )}
          placeholder="Your full name"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-email"
          className="text-sm font-medium text-foreground"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          aria-required="true"
          disabled={isLoading}
          className={cn(
            "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-60"
          )}
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          aria-required="true"
          disabled={isLoading}
          className={cn(
            "w-full resize-y rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-60"
          )}
          placeholder="Tell me about your project, role, or how I can help."
        />
      </div>

      {status === "error" && error && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {status === "success" && (
        <div
          role="status"
          className="flex items-start gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-600 dark:text-emerald-400"
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            Your mail client should have opened. If not, email me directly at{" "}
            <a
              className="font-medium underline"
              href={`mailto:${personal.email}`}
            >
              {personal.email}
            </a>
            .
          </span>
        </div>
      )}

      <Button
        type="submit"
        disabled={isLoading}
        className="mt-2 h-11 px-5"
        aria-label="Send message"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send message
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground">
        Prefer email? Send me a message and I&apos;ll get back to you.
      </p>
    </form>
  );
}
