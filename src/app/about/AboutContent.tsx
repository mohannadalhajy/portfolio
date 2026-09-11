"use client";

import ProjectGallery from "@/components/project-gallery";
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

      {/* Experience */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="space-y-8 border-t border-zinc-800/60 pt-10"
      >
        <h2 className="font-serif text-2xl text-zinc-100">Experience</h2>

        <div className="relative border-l border-zinc-800/60 ml-3 space-y-14 py-2">
          <TimelineItem
            title="Full Stack Developer"
            meta="— Step By Tech"
            date="2021 – Present · Dubai"
            accent
          >
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
          </TimelineItem>

          <TimelineItem
            title="Full Stack Developer"
            meta="— InfoTech"
            date="2020 – 2021 · Dubai"
          >
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
                  standards to ensure maximum data reliability and
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
          </TimelineItem>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="space-y-8 border-t border-zinc-800/60 pt-10"
      >
        <h2 className="font-serif text-2xl text-zinc-100">Testimonials</h2>
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
        className="space-y-8 border-t border-zinc-800/60 pt-10"
      >
        <h2 className="font-serif text-2xl text-zinc-100">Education</h2>

        <div className="relative border-l border-zinc-800/60 ml-3 py-2">
          <TimelineItem
            title="Damascus University"
            date="2015 – 2020 · Syria"
            compact
          >
            <p className="text-sm font-medium text-zinc-300 max-w-2xl leading-relaxed">
              Bachelor&apos;s degree in Software and Information Systems
              Engineering
            </p>
          </TimelineItem>
        </div>
      </motion.section>

      {/* Engineering Philosophy */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={STAGGER_CHILDREN}
        className="space-y-6 border-t border-zinc-800/60 pt-10"
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

/* shared timeline-entry marker used by Experience and Education */
function TimelineItem({
  title,
  meta,
  date,
  accent = false,
  compact = false,
  children,
}: {
  title: string;
  meta?: string;
  date: string;
  accent?: boolean;
  compact?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative pl-8 group">
      <span
        className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-zinc-800 bg-zinc-950 transition-colors ${
          accent
            ? "group-hover:border-amber-500 group-hover:bg-amber-500/20"
            : "group-hover:border-zinc-400 group-hover:bg-zinc-800"
        }`}
      />

      <div
        className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 ${
          compact ? "mb-2" : "mb-4"
        }`}
      >
        <h3 className="text-xl font-semibold text-zinc-100">
          {title}
          {meta && <span className="text-zinc-400 font-medium"> {meta}</span>}
        </h3>
        <span
          className={`shrink-0 text-sm font-medium ${
            accent ? "text-amber-400" : "text-zinc-400"
          }`}
        >
          {date}
        </span>
      </div>

      {children}
    </div>
  );
}
