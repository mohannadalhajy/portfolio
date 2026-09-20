"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/motion";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          company: data.get("_hp_check"), // honeypot
        }),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        role="status"
        className="flex items-center gap-2 rounded-lg border border-emerald-300/60 bg-emerald-50 px-4 py-4 text-sm text-emerald-700 dark:border-emerald-800/40 dark:bg-emerald-950/20 dark:text-emerald-300"
      >
        <CheckCircle2 className="h-4 w-4 shrink-0" />
        Thanks for reaching out — I&apos;ll get back to you soon.
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {/* Honeypot field — hidden from real users, catches bots. Named away
          from any recognizable autofill field (e.g. "company") so browser
          address/profile autofill doesn't silently fill it in and trip it
          for a real visitor. */}
      <input
        type="text"
        name="_hp_check"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            disabled={status === "submitting"}
            className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-amber-500/60 disabled:opacity-60 dark:border-zinc-800/60 dark:bg-zinc-950/60 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-amber-400/60"
            placeholder="Jane Doe"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            disabled={status === "submitting"}
            className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-amber-500/60 disabled:opacity-60 dark:border-zinc-800/60 dark:bg-zinc-950/60 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-amber-400/60"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          disabled={status === "submitting"}
          className="w-full resize-none rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-amber-500/60 disabled:opacity-60 dark:border-zinc-800/60 dark:bg-zinc-950/60 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-amber-400/60"
          placeholder="What are you working on?"
        />
      </div>

      {status === "error" && (
        <div role="alert" className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-amber-400 dark:hover:bg-amber-300"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </motion.form>
  );
}
