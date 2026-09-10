"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FADE_DOWN_ANIMATION_VARIANTS, STAGGER_CHILDREN } from "@/lib/motion";

const MAX_VISIBLE_TAGS = 4;

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

export default function ProjectsContent() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={STAGGER_CHILDREN}
      className="space-y-12"
    >
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="space-y-2">
        <h1 className="font-serif text-3xl text-zinc-100 sm:text-4xl">Projects</h1>
        <p className="text-lg text-zinc-400">
          Selected work focusing on scalable backends, payments, and real-time systems.
        </p>
      </motion.div>

      <div className="divide-y divide-zinc-800/60 border-y border-zinc-800/60">
        {projects.map((p, i) => {
          const visibleTags = p.stack.slice(0, MAX_VISIBLE_TAGS);
          const remaining = p.stack.length - visibleTags.length;

          return (
            <motion.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              key={p.slug}
              className="group relative py-6"
            >
              <Link
                href={`/projects/${p.slug}`}
                className="absolute inset-0"
                aria-label={`View ${p.title} details`}
              />

              <div className="flex items-baseline justify-between gap-4">
                <h2 className="flex items-baseline gap-3 font-serif text-xl text-zinc-100 transition-colors group-hover:text-amber-300">
                  <span className="font-sans text-xs font-medium tracking-widest text-amber-500/50">
                    {ROMAN[i] ?? i + 1}
                  </span>
                  {p.title}
                </h2>
                <ArrowRight className="h-4 w-4 shrink-0 text-zinc-600 transition-all group-hover:translate-x-1 group-hover:text-amber-400" />
              </div>

              <p className="mt-2 max-w-2xl line-clamp-2 text-sm leading-relaxed text-zinc-400">
                {p.subtitle}
              </p>

              <p className="mt-3 text-xs uppercase tracking-wide text-zinc-400">
                {visibleTags.join(" · ")}
                {remaining > 0 && ` · +${remaining} more`}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
