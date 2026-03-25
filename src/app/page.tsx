"use client";

import QuickLinks from "@/components/QuickLinks";
import ProjectGallery from "@/components/project-gallery";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Server, Zap, Cloud } from "lucide-react";

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
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800/50 bg-zinc-900/30 px-3 py-1 text-sm text-zinc-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for new opportunities in Dubai, UAE
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-br from-zinc-100 to-zinc-500 bg-clip-text text-transparent">Mohannad Alhajy</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Full Stack Developer with 5+ years of experience building scalable applications and modern web platforms, focused on clean architecture, reliable systems, and high-quality user experiences.
          </p>
        </motion.div>

        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="flex flex-wrap gap-2">
          <Tag>NestJS</Tag>
          <Tag>Node.js</Tag>
          <Tag>React</Tag>
          <Tag>Next.js</Tag>
          <Tag>TypeScript</Tag>
          <Tag>Microservices</Tag>
          <Tag>AWS</Tag>
          <Tag>WebSockets</Tag>
        </motion.div>

        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="flex flex-wrap gap-3 pt-4">
          <Link
            href="/projects"
            className="group flex items-center justify-center gap-2 rounded-xl bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-white hover:ring-4 hover:ring-zinc-100/20 active:scale-95"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="/mohannad-alhajy-cv.pdf"
            download
            className="group flex items-center justify-center gap-2 rounded-xl border border-zinc-800/50 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-zinc-100 backdrop-blur-md transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:text-white active:scale-95"
          >
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Download CV
          </a>
          <Link
            href="/contact"
            className="rounded-xl border border-zinc-800/50 bg-transparent px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:bg-zinc-900 hover:text-zinc-100 active:scale-95"
          >
            Contact
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
            icon: Server
          },
          {
            title: "Real-Time Systems",
            desc: "Implementation of lightning-fast communication features leveraging WebSockets and Pub/Sub architectures.",
            icon: Zap
          },
          {
            title: "Cloud Integrations",
            desc: "Advanced integrations with cloud platforms from deployments to third-party authentication and payments.",
            icon: Cloud
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

      {/* Experience */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Experience</h2>

        <div className="flex flex-col gap-6">
          <div className="group relative rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all hover:border-zinc-700 hover:bg-zinc-900/40">
            <div className="absolute inset-px -z-10 rounded-2xl bg-gradient-to-b from-zinc-800/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="flex flex-col justify-between sm:flex-row sm:items-baseline gap-2 mb-4">
              <h3 className="text-xl font-semibold text-zinc-100">
                Full Stack Developer <span className="text-zinc-500 font-medium">— Step By Tech</span>
              </h3>
              <span className="inline-flex rounded-full bg-zinc-950 border border-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
                2021 – Present · Dubai
              </span>
            </div>
            
            <p className="text-sm font-medium text-zinc-300 mb-4">
              Led development of high-impact backend systems and dynamic product lines using Node.js, NestJS, and TypeScript.
            </p>
            
            <ul className="list-inside list-disc text-sm text-zinc-400 space-y-2 mb-6 ml-1 marker:text-zinc-600">
              <li>Engineered expansive API architectures servicing varied markets including Vidnik (social), Zadlaw (legal), and Exyar (auto).</li>
              <li>Orchestrated real-time messaging and video conferencing capabilities for mobile-first products.</li>
              <li>Architected and deployed responsive admin dashboards and internal operational tooling via React.</li>
              <li>Spearheaded integration of intricate UI functions like 3D visualization and real-time mapping integrations.</li>
              <li>Directed cloud deployment strategies utilizing AWS infrastructure, Docker containerization, and Nginx.</li>
            </ul>

            <ProjectGallery images={["/stepbytech-certificate.jpeg"]}/>
          </div>

          <div className="group relative rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all hover:border-zinc-700 hover:bg-zinc-900/40">
            <div className="absolute inset-px -z-10 rounded-2xl bg-gradient-to-b from-zinc-800/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="flex flex-col justify-between sm:flex-row sm:items-baseline gap-2 mb-4">
              <h3 className="text-xl font-semibold text-zinc-100">
                Full Stack Developer <span className="text-zinc-500 font-medium">— InfoTech</span>
              </h3>
              <span className="inline-flex rounded-full bg-zinc-950 border border-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
                2020 – 2021 · Dubai
              </span>
            </div>
            
            <ul className="list-inside list-disc text-sm text-zinc-400 space-y-2 ml-1 marker:text-zinc-600">
              <li>Designed highly secure multi-tenant capabilities, enabling total data isolation for enterprise organizational customers.</li>
              <li>Oversaw continuous data integrations, rigorously enforcing standards to ensure maximum profile reliability and compliance.</li>
              <li>Co-architected foundational systems, emphasizing zero-downtime maintenance and robust system optimization tools.</li>
            </ul>
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
