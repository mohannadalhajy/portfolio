"use client";

import HeroGem from "@/components/HeroGem";
import StatusBadge from "@/components/StatusBadge";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FADE_DOWN_ANIMATION_VARIANTS, STAGGER_CHILDREN } from "@/lib/motion";
import { skillGroups } from "@/data/skills";

const testimonials = [
  {
    quote:
      "Mohannad didn't just write code; he architected systems that allowed our product lines to scale their user base exponentially without degraded performance. A true technical leader.",
    name: "Bilal Tahir",
    role: "Team Leader",
    company: "Step By Tech",
  },
  {
    quote:
      "His focus on multi-tenant security and zero-downtime deployments was critical to our enterprise deliverables. He brings a senior mindset to every architecture discussion.",
    name: "Nabeel Iqbal",
    role: "Product Manager",
    company: "Vidnik",
  },
];

export default function HomeContent() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={STAGGER_CHILDREN}
        className="space-y-10"
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="space-y-5 lg:max-w-xl">
            <StatusBadge />

            <div className="relative">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">
                Full Stack Developer
              </p>
              <h1 className="mt-2 font-serif text-5xl text-zinc-900 dark:text-zinc-100 sm:text-6xl lg:text-7xl">
                Mohannad Alhajy
              </h1>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              I design and build scalable web platforms with a focus on clean
              architecture, reliable APIs, and maintainable systems. My work
              includes production applications across industries such as HR
              management, legal services, car rental, and project management.
            </p>

            <div className="flex divide-x divide-zinc-200 dark:divide-zinc-800/70 pt-2">
              <div className="pr-8">
                <div className="font-serif text-3xl text-zinc-900 dark:text-zinc-100">5+</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                  Years experience
                </div>
              </div>
              <div className="px-8">
                <div className="font-serif text-3xl text-zinc-900 dark:text-zinc-100">20+</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                  Completed projects
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="relative hidden shrink-0 self-center lg:block"
          >
            <HeroGem />
          </motion.div>
        </div>

        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="divide-y divide-zinc-200 dark:divide-zinc-800/60 border-y border-zinc-200 dark:border-zinc-800/60"
        >
          {skillGroups.map((s) => (
            <div
              key={s.label}
              className="grid gap-1 py-4 sm:grid-cols-[200px_1fr] sm:items-baseline"
            >
              <div className="text-xs font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
                {s.label}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">{s.tools}</div>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* Testimonials — social proof placed right before the CTA below */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={STAGGER_CHILDREN}
        className="grid gap-10 border-t border-zinc-200 dark:border-zinc-800/60 pt-10 sm:grid-cols-2"
      >
        {testimonials.map((t) => (
          <motion.blockquote
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            key={t.name}
            className="border-l-2 border-amber-500/40 pl-6"
          >
            <p className="font-serif text-lg italic leading-relaxed text-zinc-800 dark:text-zinc-200">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="text-zinc-700 dark:text-zinc-300">{t.name}</span> · {t.role},{" "}
              {t.company}
            </footer>
          </motion.blockquote>
        ))}
      </motion.section>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="flex flex-wrap items-center gap-6 border-t border-zinc-200 dark:border-zinc-800/60 pt-10"
      >
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-50 transition-all hover:bg-zinc-800 hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
        >
          View Projects
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <a
          href="/mohannad-alhajy-cv.pdf"
          download
          className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-amber-400 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          Download Resume
        </a>
        <Link
          href="/contact"
          className="text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-amber-400 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          Let&apos;s Talk
        </Link>
      </motion.div>
    </div>
  );
}
