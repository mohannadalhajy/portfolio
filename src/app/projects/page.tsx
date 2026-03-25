"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import QuickLinks from "@/components/QuickLinks";
import { motion, Variants } from "framer-motion";

const FADE_DOWN_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const STAGGER_CHILDREN: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ProjectsPage() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={STAGGER_CHILDREN}
      className="space-y-12"
    >
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Projects</h1>
        <p className="text-lg text-zinc-400">
          Selected work focusing on scalable backends, payments, and real-time systems.
        </p>
      </motion.div>

      <div className="grid gap-6">
        {projects.map((p) => (
          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            key={p.slug}
            className="group relative rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all hover:border-zinc-700/80 hover:bg-zinc-900/50"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-zinc-100">
                  <Link href={`/projects/${p.slug}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {p.title}
                  </Link>
                </h2>
                <p className="text-sm text-zinc-400">{p.subtitle}</p>
              </div>

              <Link
                href={`/projects/${p.slug}`}
                className="relative z-10 shrink-0 inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white"
              >
                Details
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-zinc-800/60 bg-zinc-950/50 px-3 py-1 text-xs font-medium text-zinc-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <QuickLinks />
      </motion.div>
    </motion.div>
  );
}
