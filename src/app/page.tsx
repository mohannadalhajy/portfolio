"use client";

import QuickLinks from "@/components/QuickLinks";
import ProjectGallery from "@/components/project-gallery";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Download,
  Server,
  Zap,
  Cloud,
  Database,
  Monitor,
  Smartphone,
  Globe,
  Layers,
  ArrowRightLeft,
  Activity,
} from "lucide-react";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border border-zinc-800/60 bg-zinc-900/40 px-3 py-1 text-sm text-zinc-300 backdrop-blur-sm transition-colors hover:border-zinc-600 hover:bg-zinc-800/60">
    {children}
  </span>
);

const FADE_DOWN_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const STAGGER_CHILDREN: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={STAGGER_CHILDREN}
        className="space-y-8"
      >
        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800/50 bg-zinc-900/30 px-3 py-1 text-sm text-zinc-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for new opportunities in Dubai, UAE
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-br from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
              Mohannad Alhajy
            </span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Full Stack Developer<br></br> I design and build scalable web
            platforms with a focus on clean architecture, reliable APIs, and
            maintainable systems. My work includes production applications
            across industries such as HR management, legal services, car rental,
            and project management.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="text-zinc-100 font-bold">5+</span> Years
              Experience
            </div>
            <div className="h-4 w-px bg-zinc-800"></div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-100 font-bold">20+</span> Systems
              Architected
            </div>
            <div className="h-4 w-px bg-zinc-800"></div>
            <div className="flex items-center gap-2">
              {/* <span className="text-zinc-100 font-bold">99.99%</span> Uptime */}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="grid gap-3 sm:grid-cols-2 pt-2"
        >
          <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-4 backdrop-blur-md transition-colors hover:border-zinc-700/60">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-100">
              <span className="text-base">⚙️</span> Backend & Architecture
            </div>
            <div className="text-sm text-zinc-400 leading-relaxed">
              Node.js, NestJS, Microservices, REST / GraphQL, WebSockets
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-4 backdrop-blur-md transition-colors hover:border-zinc-700/60">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-100">
              <span className="text-base">🖥️</span> Frontend & UX
            </div>
            <div className="text-sm text-zinc-400 leading-relaxed">
              TypeScript, React, Next.js, Redux / Zustand, Tailwind CSS
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-4 backdrop-blur-md transition-colors hover:border-zinc-700/60">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-100">
              <span className="text-base">☁️</span> Cloud & DevOps
            </div>
            <div className="text-sm text-zinc-400 leading-relaxed">
              AWS (EC2, S3, RDS, Lambda), Docker, CI/CD Pipelines
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-4 backdrop-blur-md transition-colors hover:border-zinc-700/60">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-100">
              <span className="text-base">🗄️</span> Databases & Caching
            </div>
            <div className="text-sm text-zinc-400 leading-relaxed">
              MYSQL, MongoDB, Redis
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="flex flex-wrap gap-3 pt-4"
        >
          <Link
            href="/projects"
            className="group flex items-center justify-center gap-2 rounded-xl bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-white hover:ring-4 hover:ring-zinc-100/20 active:scale-95"
          >
            View Featured Architecture
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="/mohannad-alhajy-cv.pdf"
            download
            className="group flex items-center justify-center gap-2 rounded-xl border border-zinc-800/50 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-zinc-100 backdrop-blur-md transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:text-white active:scale-95"
          >
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Download Resume (PDF)
          </a>
          <Link
            href="/contact"
            className="rounded-xl border border-zinc-800/50 bg-transparent px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:bg-zinc-900 hover:text-zinc-100 active:scale-95"
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
        className="grid gap-4 sm:grid-cols-3"
      >
        {[
          {
            title: "Scalable Platforms",
            desc: "Design and development of full-stack platforms with reliable backend microservices and engaging frontends.",
            icon: Server,
          },
          {
            title: "Real-Time Systems",
            desc: "Implementation of lightning-fast communication features leveraging WebSockets and Pub/Sub architectures.",
            icon: Zap,
          },
          {
            title: "Cloud Integrations",
            desc: "Advanced integrations with cloud platforms from deployments to third-party authentication and payments.",
            icon: Cloud,
          },
        ].map((x) => (
          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            key={x.title}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-zinc-700/60 hover:bg-zinc-900/50"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800/50 bg-zinc-950 text-zinc-400 group-hover:text-zinc-100 transition-colors">
              <x.icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-zinc-100">{x.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {x.desc}
            </p>
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
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
          Engineering Philosophy
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Type-Safety First",
              desc: "Enforcing strict TypeScript configurations to eliminate runtime errors before they happen.",
              number: "01",
            },
            {
              title: "Designing for Failure",
              desc: "Building resilient microservices that gracefully handle partial outages and network partitions.",
              number: "02",
            },
            {
              title: "User-Centric Performance",
              desc: "Prioritizing fast edge delivery, lean bundles, and optimistic UI updates for the end user.",
              number: "03",
            },
          ].map((item) => (
            <motion.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              key={item.number}
              className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm"
            >
              <div className="text-sm font-bold text-emerald-500/50 mb-2">
                {item.number}
              </div>
              <h3 className="text-base font-semibold text-zinc-100 mb-2">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {item.desc}
              </p>
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
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
          Experience
        </h2>

        <div className="relative border-l border-zinc-800/60 ml-3 space-y-14 py-2">
          <div className="relative pl-8 group">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-zinc-800 bg-zinc-950 transition-colors group-hover:border-emerald-500 group-hover:bg-emerald-500/20"></span>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">
                  Full Stack Developer{" "}
                  <span className="text-zinc-500 font-medium">
                    — Step By Tech
                  </span>
                </h3>
              </div>
              <span className="shrink-0 text-sm font-medium text-emerald-400">
                2021 – Present · Dubai
              </span>
            </div>

            <p className="text-sm font-medium text-zinc-300 mb-6 max-w-2xl leading-relaxed">
              Led development of high-impact backend systems and dynamic product
              lines using Node.js, NestJS, and TypeScript.
            </p>

            <ul className="list-none space-y-3 mb-6 text-sm text-zinc-400">
              <li className="flex gap-3">
                <span className="text-emerald-500/50 mt-1">▹</span>
                <span className="leading-relaxed">
                  Engineered expansive API architectures servicing varied
                  markets including Vidnik (social), Zadlaw (legal), and Exyar
                  (auto).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500/50 mt-1">▹</span>
                <span className="leading-relaxed">
                  Orchestrated real-time messaging and video conferencing
                  capabilities for mobile-first products.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500/50 mt-1">▹</span>
                <span className="leading-relaxed">
                  Architected and deployed responsive admin dashboards and
                  internal operational tooling via React.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500/50 mt-1">▹</span>
                <span className="leading-relaxed">
                  Spearheaded integration of intricate UI functions like 3D
                  visualization and real-time mapping integrations.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500/50 mt-1">▹</span>
                <span className="leading-relaxed">
                  Directed cloud deployment strategies utilizing AWS
                  infrastructure, Docker containerization, and Nginx.
                </span>
              </li>
            </ul>

            <ProjectGallery images={["/stepbytech-certificate.jpeg"]} />
          </div>

          <div className="relative pl-8 group">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-zinc-800 bg-zinc-950 transition-colors group-hover:border-zinc-400 group-hover:bg-zinc-800"></span>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">
                  Full Stack Developer{" "}
                  <span className="text-zinc-500 font-medium">— InfoTech</span>
                </h3>
              </div>
              <span className="shrink-0 text-sm font-medium text-zinc-500">
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
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
          What Leadership Says
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="relative rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm">
            <div className="mb-4 text-4xl text-zinc-800">&quot;</div>
            <p className="text-sm leading-relaxed text-zinc-400 mb-6 relative z-10">
              Mohannad didn&apos;t just write code; he architected systems that
              allowed our product lines to scale their user base exponentially
              without degraded performance. A true technical leader.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-zinc-800"></div>
              <div>
                <div className="text-sm font-semibold text-zinc-100">
                  Team Leader
                </div>
                <div className="text-xs text-zinc-500">Step By Tech</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm">
            <div className="mb-4 text-4xl text-zinc-800">&quot;</div>
            <p className="text-sm leading-relaxed text-zinc-400 mb-6 relative z-10">
              His focus on multi-tenant security and zero-downtime deployments
              was critical to our enterprise deliverables. He brings a senior
              mindset to every architecture discussion.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-zinc-800"></div>
              <div>
                <div className="text-sm font-semibold text-zinc-100">
                  Product Manager
                </div>
                <div className="text-xs text-zinc-500">Vidnik</div>
              </div>
            </div>
          </div>
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
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
          Education
        </h2>

        <div className="relative border-l border-zinc-800/60 ml-3 py-2">
          <div className="relative pl-8 group">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-zinc-800 bg-zinc-950 transition-colors group-hover:border-zinc-400 group-hover:bg-zinc-800"></span>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">
                  Damascus University
                </h3>
              </div>
              <span className="shrink-0 text-sm font-medium text-zinc-500">
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

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        <QuickLinks />
      </motion.div>
    </div>
  );
}
