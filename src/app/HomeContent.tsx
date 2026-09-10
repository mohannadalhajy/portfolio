"use client";

import ProjectGallery from "@/components/project-gallery";
import HeroGem from "@/components/HeroGem";
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

const philosophy = [
  {
    number: "01",
    title: "Type-Safety First",
    desc: "Enforcing strict TypeScript configurations to eliminate runtime errors before they happen.",
  },
  {
    number: "02",
    title: "Designing for Failure",
    desc: "Building resilient microservices that gracefully handle partial outages and network partitions.",
  },
  {
    number: "03",
    title: "User-Centric Performance",
    desc: "Prioritizing fast edge delivery, lean bundles, and optimistic UI updates for the end user.",
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
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_2px_rgba(245,158,11,0.6)]" />
              Available for new opportunities in UAE
            </div>

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

      {/* Engineering Philosophy */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={STAGGER_CHILDREN}
        className="space-y-6"
      >
        <h2 className="font-serif text-2xl text-zinc-100">Engineering Philosophy</h2>
        <div className="divide-y divide-zinc-800/60 border-y border-zinc-800/60">
          {philosophy.map((item) => (
            <motion.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              key={item.number}
              className="flex gap-6 py-6"
            >
              <div className="pt-1 font-serif text-sm text-amber-400">{item.number}</div>
              <div>
                <h3 className="font-serif text-lg text-zinc-100">{item.title}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="space-y-8"
      >
        <h2 className="font-serif text-2xl text-zinc-100">Experience</h2>

        <div className="relative border-l border-zinc-800/60 ml-3 space-y-14 py-2">
          <div className="relative pl-8 group">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-zinc-800 bg-zinc-950 transition-colors group-hover:border-amber-500 group-hover:bg-amber-500/20"></span>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">
                  Full Stack Developer{" "}
                  <span className="text-zinc-400 font-medium">
                    — Step By Tech
                  </span>
                </h3>
              </div>
              <span className="shrink-0 text-sm font-medium text-amber-400">
                2021 – Present · Dubai
              </span>
            </div>

            <p className="text-sm font-medium text-zinc-300 mb-6 max-w-2xl leading-relaxed">
              Led development of high-impact backend systems and dynamic product
              lines using Node.js, NestJS, and TypeScript.
            </p>

            <ul className="list-none space-y-3 mb-6 text-sm text-zinc-400">
              <li className="flex gap-3">
                <span className="text-amber-500/50 mt-1">▹</span>
                <span className="leading-relaxed">
                  Engineered expansive API architectures servicing varied
                  markets including Vidnik (social), Zadlaw (legal), and Exyar
                  (auto).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500/50 mt-1">▹</span>
                <span className="leading-relaxed">
                  Orchestrated real-time messaging and video conferencing
                  capabilities for mobile-first products.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500/50 mt-1">▹</span>
                <span className="leading-relaxed">
                  Architected and deployed responsive admin dashboards and
                  internal operational tooling via React.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500/50 mt-1">▹</span>
                <span className="leading-relaxed">
                  Spearheaded integration of intricate UI functions like 3D
                  visualization and real-time mapping integrations.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500/50 mt-1">▹</span>
                <span className="leading-relaxed">
                  Directed cloud deployment strategies utilizing AWS
                  infrastructure, Docker containerization, and Nginx.
                </span>
              </li>
            </ul>

            <ProjectGallery
              images={["/stepbytech-certificate.jpeg"]}
              alt="Step By Tech certificate"
            />
          </div>

          <div className="relative pl-8 group">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-zinc-800 bg-zinc-950 transition-colors group-hover:border-zinc-400 group-hover:bg-zinc-800"></span>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">
                  Full Stack Developer{" "}
                  <span className="text-zinc-400 font-medium">— InfoTech</span>
                </h3>
              </div>
              <span className="shrink-0 text-sm font-medium text-zinc-400">
                2020 – 2021 · Dubai
              </span>
            </div>

            <ul className="list-none space-y-3 text-sm text-zinc-400">
              <li className="flex gap-3">
                <span className="text-zinc-600 mt-1">▹</span>
                <span className="leading-relaxed">
                  Designed highly secure multi-tenant capabilities, enabling
                  total data isolation for enterprise organizational customers.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-600 mt-1">▹</span>
                <span className="leading-relaxed">
                  Oversaw continuous data integrations, rigorously enforcing
                  standards to ensure maximum profile reliability and
                  compliance.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-600 mt-1">▹</span>
                <span className="leading-relaxed">
                  Co-architected foundational systems, emphasizing zero-downtime
                  maintenance and robust system optimization tools.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="space-y-8"
      >
        <h2 className="font-serif text-2xl text-zinc-100">What Leadership Says</h2>
        <div className="grid gap-10 sm:grid-cols-2">
          <blockquote className="border-l-2 border-amber-500/40 pl-6">
            <p className="font-serif text-lg italic leading-relaxed text-zinc-200">
              &ldquo;Mohannad didn&apos;t just write code; he architected systems
              that allowed our product lines to scale their user base
              exponentially without degraded performance. A true technical
              leader.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-zinc-400">
              <span className="text-zinc-300">Team Leader</span> · Step By Tech
            </footer>
          </blockquote>

          <blockquote className="border-l-2 border-amber-500/40 pl-6">
            <p className="font-serif text-lg italic leading-relaxed text-zinc-200">
              &ldquo;His focus on multi-tenant security and zero-downtime
              deployments was critical to our enterprise deliverables. He
              brings a senior mindset to every architecture discussion.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-zinc-400">
              <span className="text-zinc-300">Product Manager</span> · Vidnik
            </footer>
          </blockquote>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="space-y-8"
      >
        <h2 className="font-serif text-2xl text-zinc-100">Education</h2>

        <div className="relative border-l border-zinc-800/60 ml-3 py-2">
          <div className="relative pl-8 group">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-zinc-800 bg-zinc-950 transition-colors group-hover:border-zinc-400 group-hover:bg-zinc-800"></span>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">
                  Damascus University
                </h3>
              </div>
              <span className="shrink-0 text-sm font-medium text-zinc-400">
                2015 – 2020 · Syria
              </span>
            </div>

            <p className="text-sm font-medium text-zinc-300 max-w-2xl leading-relaxed">
              Bachelor&apos;s degree in Software and Information Systems
              Engineering
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
