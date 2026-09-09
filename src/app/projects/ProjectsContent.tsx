"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import QuickLinks from "@/components/QuickLinks";
import ProjectCover from "@/components/ProjectCover";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FADE_DOWN_ANIMATION_VARIANTS, STAGGER_CHILDREN } from "@/lib/motion";

const MAX_VISIBLE_TAGS = 4;

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
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Projects</h1>
        <p className="text-lg text-zinc-400">
          Selected work focusing on scalable backends, payments, and real-time systems.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => {
          const visibleTags = p.stack.slice(0, MAX_VISIBLE_TAGS);
          const remaining = p.stack.length - visibleTags.length;

          return (
            <motion.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              key={p.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-zinc-700/60 hover:bg-zinc-900/50"
            >
              <Link
                href={`/projects/${p.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`View ${p.title} details`}
              />

              <ProjectCover slug={p.slug} title={p.title} photo={p.photos[0]} />

              <div className="flex flex-1 flex-col gap-3 p-5">
                <div>
                  <h2 className="text-lg font-semibold text-zinc-100">{p.title}</h2>
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-zinc-400">
                    {p.subtitle}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-2">
                  {visibleTags.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-zinc-800/60 bg-zinc-950/50 px-2.5 py-1 text-xs font-medium text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                  {remaining > 0 && (
                    <span className="px-1 text-xs font-medium text-zinc-500">
                      +{remaining} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 pt-1 text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                  View details
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <QuickLinks />
      </motion.div>
    </motion.div>
  );
}
