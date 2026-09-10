"use client";

import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS, STAGGER_CHILDREN } from "@/lib/motion";

const focusAreas = [
  "Building scalable full-stack web applications",
  "Designing clean and maintainable backend architectures",
  "Developing responsive and modern frontend interfaces",
  "Implementing real-time features and messaging systems",
  "Integrating cloud services, APIs, and third-party platforms",
];

const experienceAreas = [
  "Scalable web platforms and SaaS products",
  "Payment and subscription systems",
  "Real-time communication and messaging",
  "Cloud integrations and distributed services",
  "API design and system architecture",
];

const technologies = [
  "TypeScript",
  "JavaScript",
  "Node.js",
  "NestJS",
  "React",
  "Next.js",
  "MongoDB",
  "MySQL",
  "Redis",
  "RabbitMQ",
  "AWS",
  "Docker",
  "Nginx",
];

export default function AboutContent() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={STAGGER_CHILDREN}
      className="space-y-16"
    >
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="space-y-5">
        <h1 className="font-serif text-3xl text-zinc-100 sm:text-4xl">About Me</h1>
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-zinc-400">
          <p>
            Full Stack Developer with 5+ years of experience developing scalable
            backend systems using Node.js, NestJS, and TypeScript. Skilled in
            designing REST APIs, database structures, and writing clean,
            maintainable code. Experienced in building modern web interfaces
            using React and Next.js.
          </p>
          <p>
            I&apos;ve contributed to multiple production platforms including
            social apps, legal services, car rentals, HR management, and project
            management systems. My work focuses on building reliable systems
            that integrate real-world services such as payments, messaging,
            real-time communication, and cloud infrastructure.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="grid gap-10 border-t border-zinc-800/60 pt-10 sm:grid-cols-2 sm:divide-x sm:divide-zinc-800/60"
      >
        <div>
          <h2 className="font-serif text-lg text-zinc-100">What I Focus On</h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-400">
            {focusAreas.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 text-amber-500/50">▹</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:pl-10">
          <h2 className="font-serif text-lg text-zinc-100">Experience Areas</h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-400">
            {experienceAreas.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 text-amber-500/50">▹</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="space-y-4 border-t border-zinc-800/60 pt-10"
      >
        <h2 className="font-serif text-lg text-zinc-100">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-800/60 px-3 py-1 text-sm text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="border-t border-zinc-800/60 pt-10"
      >
        <h2 className="font-serif text-lg text-zinc-100">How I Work</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400">
          I believe in building software that is simple, reliable, and
          maintainable. My approach focuses on clean architecture, clear domain
          boundaries, and systems that can evolve as products grow. I enjoy
          solving complex engineering problems and delivering high-quality
          user experiences.
        </p>
      </motion.div>
    </motion.div>
  );
}
