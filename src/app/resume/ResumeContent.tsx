"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ArrowUpRight, Mail } from "lucide-react";
import { FADE_DOWN_ANIMATION_VARIANTS, STAGGER_CHILDREN } from "@/lib/motion";
import { resumeUrl, resumeViewUrl, resumeUpdated, siteConfig } from "@/lib/site";

const highlights = [
  { label: "Title", value: "Senior Software Engineer" },
  { label: "Experience", value: "5+ years" },
  { label: "Focus", value: "Backend Engineering & APIs" },
  { label: "Stack", value: "Node.js · NestJS · TypeScript" },
  { label: "Based in", value: "Dubai, UAE" },
];

export default function ResumeContent() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={STAGGER_CHILDREN}
      className="space-y-10"
    >
      <motion.header variants={FADE_DOWN_ANIMATION_VARIANTS} className="max-w-3xl space-y-5">
        <h1 className="font-serif text-3xl text-zinc-900 dark:text-zinc-100 sm:text-4xl">Resume</h1>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Read it here, or take a copy with you. Below is the same document I
          send to hiring teams for Senior Software Engineer and Backend
          Engineer roles — scalable APIs, real-time systems, and
          subscription and payment flows in production for 30,000+ users.
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">Last updated {resumeUpdated}</p>
      </motion.header>

      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="flex flex-wrap items-center gap-x-6 gap-y-3"
      >
        <a
          href={resumeUrl}
          download
          className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-50 transition-all hover:bg-zinc-800 hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
        >
          <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          Download PDF
        </a>
        <a
          href={resumeViewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-amber-400 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          Open in new tab
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-amber-400 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          <Mail className="h-4 w-4" />
          Email me
        </a>
      </motion.div>

      <motion.dl
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 sm:grid-cols-5 dark:border-zinc-800/60 dark:bg-zinc-800/60"
      >
        {highlights.map((item) => (
          <div
            key={item.label}
            // five tiles: the last one fills the row on the two-column phone layout
            className="bg-zinc-50 px-4 py-4 max-sm:last:col-span-2 dark:bg-zinc-950"
          >
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
              {item.label}
            </dt>
            <dd className="mt-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {item.value}
            </dd>
          </div>
        ))}
      </motion.dl>

      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="space-y-3">
        {/* Inline PDF viewers are unreliable on mobile browsers, so the embed is
            desktop-only and everyone else gets the two buttons above. */}
        <div className="hidden overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm md:block dark:border-zinc-800/60 dark:bg-zinc-900">
          <object
            data={`${resumeViewUrl}#view=FitH`}
            type="application/pdf"
            aria-label="Resume preview"
            className="h-[min(85vh,1100px)] w-full"
          >
            <p className="p-6 text-sm text-zinc-600 dark:text-zinc-400">
              Your browser can&apos;t display the PDF inline.{" "}
              <a href={resumeUrl} download className="underline underline-offset-4">
                Download it instead
              </a>
              .
            </p>
          </object>
        </div>
        <p className="text-sm text-zinc-600 md:hidden dark:text-zinc-400">
          The preview is easier to read on a larger screen — on mobile, open the
          PDF in a new tab or download it.
        </p>
      </motion.div>

      <motion.p
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="border-t border-zinc-200 pt-8 text-sm text-zinc-600 dark:border-zinc-800/60 dark:text-zinc-400"
      >
        Prefer the long version?{" "}
        <Link
          href="/projects"
          className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-amber-400 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          The project write-ups
        </Link>{" "}
        go into the decisions and tradeoffs behind this work.
      </motion.p>
    </motion.div>
  );
}
