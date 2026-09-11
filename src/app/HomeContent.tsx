"use client";

import HeroGem from "@/components/HeroGem";
import StatusBadge from "@/components/StatusBadge";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FADE_DOWN_ANIMATION_VARIANTS, STAGGER_CHILDREN } from "@/lib/motion";

const skills = [
  {
    label: "Backend & Architecture",
    tools: "Node.js, NestJS, Microservices, REST / GraphQL, WebSockets",
  },
  {
    label: "Frontend & UX",
    tools: "TypeScript, React, Next.js, Redux / Zustand, Tailwind CSS",
  },
  {
    label: "Cloud & DevOps",
    tools: "AWS (EC2, S3, RDS, Lambda), Docker, CI/CD Pipelines",
  },
  {
    label: "Databases & Caching",
    tools: "MySQL, MongoDB, Redis",
  },
];

const highlights = [
  {
    title: "Scalable Platforms",
    desc: "Design and development of full-stack platforms with reliable backend microservices and engaging frontends.",
  },
  {
    title: "Real-Time Systems",
    desc: "Implementation of lightning-fast communication features leveraging WebSockets and Pub/Sub architectures.",
  },
  {
    title: "Cloud Integrations",
    desc: "Advanced integrations with cloud platforms from deployments to third-party authentication and payments.",
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
              <div
                className="animate-glow-pulse pointer-events-none absolute -inset-x-10 -inset-y-8 -z-10 bg-gradient-to-r from-amber-500/10 via-transparent to-teal-500/10 blur-2xl"
                aria-hidden="true"
              />
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
                Full Stack Developer
              </p>
              <h1 className="mt-2 font-serif text-5xl text-zinc-100 sm:text-6xl lg:text-7xl">
                Mohannad Alhajy
              </h1>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
              I design and build scalable web platforms with a focus on clean
              architecture, reliable APIs, and maintainable systems. My work
              includes production applications across industries such as HR
              management, legal services, car rental, and project management.
            </p>

            <div className="flex divide-x divide-zinc-800/70 pt-2">
              <div className="pr-8">
                <div className="font-serif text-3xl text-zinc-100">5+</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-zinc-400">
                  Years experience
                </div>
              </div>
              <div className="px-8">
                <div className="font-serif text-3xl text-zinc-100">20+</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-zinc-400">
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
          className="divide-y divide-zinc-800/60 border-y border-zinc-800/60"
        >
          {skills.map((s) => (
            <div
              key={s.label}
              className="grid gap-1 py-4 sm:grid-cols-[200px_1fr] sm:items-baseline"
            >
              <div className="text-xs font-medium uppercase tracking-widest text-amber-400">
                {s.label}
              </div>
              <div className="text-sm text-zinc-400">{s.tools}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="flex flex-wrap items-center gap-6"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-900 transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] active:scale-95"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="/mohannad-alhajy-cv.pdf"
            download
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-100 hover:decoration-amber-400"
          >
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Download Resume
          </a>
          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-100 hover:decoration-amber-400"
          >
            Let&apos;s Talk
          </Link>
        </motion.div>
      </motion.section>

      {/* Highlights */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={STAGGER_CHILDREN}
        className="grid gap-8 border-t border-zinc-800/60 pt-10 sm:grid-cols-3 sm:divide-x sm:divide-zinc-800/60"
      >
        {highlights.map((x, i) => (
          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            key={x.title}
            className={i > 0 ? "sm:pl-8" : ""}
          >
            <div className="font-serif text-4xl text-zinc-700">0{i + 1}</div>
            <h3 className="mt-3 font-serif text-lg text-zinc-100">{x.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{x.desc}</p>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
