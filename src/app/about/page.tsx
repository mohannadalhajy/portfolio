"use client";

import QuickLinks from "@/components/QuickLinks";
import { motion, Variants } from "framer-motion";
import { Code2, Server, Globe2, Briefcase } from "lucide-react";

const FADE_DOWN_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const STAGGER_CHILDREN: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={STAGGER_CHILDREN}
      className="space-y-12"
    >
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">About Me</h1>
        <div className="prose prose-invert max-w-none text-zinc-400">
          <p className="text-lg leading-relaxed">
            Full Stack Developer with 5+ years of experience developing scalable backend systems using Node.js, NestJS, and TypeScript. Skilled in designing REST APIs, database structures, and writing clean, maintainable code. Experienced in building modern web interfaces using React and Next.js.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            I've contributed to multiple production platforms including social apps, legal services, car rentals, HR management, and project management systems. My work focuses on building reliable systems that integrate real-world services such as payments, messaging, real-time communication, and cloud infrastructure.
          </p>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all hover:bg-zinc-900/50">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800/50 bg-zinc-950 text-emerald-400 mb-4">
            <Server className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold text-zinc-100">What I Focus On</h2>
          <ul className="mt-4 list-inside list-disc text-sm text-zinc-400 space-y-2 marker:text-zinc-600">
            <li>Building scalable full-stack web applications</li>
            <li>Designing clean and maintainable backend architectures</li>
            <li>Developing responsive and modern frontend interfaces</li>
            <li>Implementing real-time features and messaging systems</li>
            <li>Integrating cloud services, APIs, and third-party platforms</li>
          </ul>
        </motion.div>

        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all hover:bg-zinc-900/50">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800/50 bg-zinc-950 text-blue-400 mb-4">
            <Briefcase className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold text-zinc-100">Experience Areas</h2>
          <ul className="mt-4 list-inside list-disc text-sm text-zinc-400 space-y-2 marker:text-zinc-600">
            <li>Scalable web platforms and SaaS products</li>
            <li>Payment and subscription systems</li>
            <li>Real-time communication and messaging</li>
            <li>Cloud integrations and distributed services</li>
            <li>API design and system architecture</li>
          </ul>
        </motion.div>

        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all hover:bg-zinc-900/50 md:col-span-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800/50 bg-zinc-950 text-indigo-400 mb-4">
            <Code2 className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold text-zinc-100">Technologies</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {["TypeScript", "JavaScript", "Node.js", "NestJS", "React", "Next.js", "MongoDB", "MySQL", "Redis", "RabbitMQ", "AWS", "Docker", "Nginx"].map((tech) => (
              <span key={tech} className="rounded-full border border-zinc-800/60 bg-zinc-950/50 px-3 py-1 text-sm font-medium text-zinc-300">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <div className="rounded-2xl border border-emerald-900/30 bg-emerald-900/10 p-6 backdrop-blur-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-900/50 bg-emerald-950 text-emerald-400 mb-4">
            <Globe2 className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold text-zinc-100">How I work</h2>
          <p className="mt-4 text-sm text-zinc-400 leading-relaxed max-w-3xl">
            I believe in building software that is simple, reliable, and maintainable. My approach focuses on clean architecture, clear domain boundaries, and systems that can evolve as products grow. I enjoy solving complex engineering problems and delivering high-quality user experiences.
          </p>
        </div>
      </motion.div>

      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <QuickLinks />
      </motion.div>
    </motion.div>
  );
}
