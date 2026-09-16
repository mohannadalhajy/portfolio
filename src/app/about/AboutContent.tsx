"use client";

import Image from "next/image";
import ProjectGallery from "@/components/project-gallery";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS, STAGGER_CHILDREN } from "@/lib/motion";
import { technologyGroups } from "@/data/skills";

const philosophy = [
  {
    number: "01",
    title: "I stopped splitting services early",
    desc: "I used to reach for microservices on day one. After debugging one payment flow across four repos and three queues, I changed my mind: I now ship a modular monolith with hard internal boundaries and only split out a service once it has its own scaling or failure profile. Most teams pay the distributed-systems tax years before they get anything back for it.",
  },
  {
    number: "02",
    title: "Money code should be boring and idempotent",
    desc: "Every payment or subscription handler I write assumes the webhook will arrive twice, out of order, and after the user closed the tab. That means an idempotency key on every write and state derived from the provider rather than from my own optimism. It is slower to build and I would defend it in any review — a duplicate charge costs more trust than a month of velocity.",
  },
  {
    number: "03",
    title: "Real-time is a product decision, not a tech one",
    desc: "Sockets everywhere is a tempting default, and mostly the wrong one. I reserve persistent connections for things that genuinely change while you watch — chat, presence, live status — and let polling or plain requests carry the rest. The tradeoff I accept: a slightly less impressive demo, in exchange for reconnect logic I can actually reason about at 3am.",
  },
  {
    number: "04",
    title: "AI writes the first draft, never the last word",
    desc: "I use models the way I would use a fast, tireless junior: scaffolding, test fixtures, migrations, the tedious middle of a refactor. What I do not delegate is understanding. Every line that ships is one I have read and could defend without the chat window open, and anything touching payments, auth, or data I own goes through my own hands first. The speedup is real, but it lands in the boring parts on purpose — reviewing code nobody understands is how you end up with a system nobody can change.",
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
      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:gap-10"
      >
        <div className="max-w-3xl space-y-5">
          <h1 className="font-serif text-3xl text-zinc-900 dark:text-zinc-100 sm:text-4xl">About Me</h1>
          <div className="space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              Full Stack Developer with 5+ years of experience, weighted toward
              the backend: scalable systems in Node.js, NestJS, and TypeScript,
              REST API and database design, and the integration work — payments,
              real-time messaging, cloud infrastructure — that has to be correct
              under load. I ship the frontend too, in React and Next.js, most
              often the dashboards and admin consoles that operate what I built
              on the server.
            </p>
            <p>
              I&apos;ve contributed to multiple production platforms including
              social apps, legal services, car rentals, HR management, and project
              management systems. My work focuses on building reliable systems
              that integrate real-world services such as payments, messaging,
              real-time communication, and cloud infrastructure.
            </p>
          </div>
        </div>

        <div className="mx-auto w-40 shrink-0 sm:mx-0 sm:w-48">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm dark:border-zinc-800/60">
            <Image
              src="/mohannad-alhajy.webp"
              alt="Mohannad Alhajy"
              width={480}
              height={720}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Engineering Philosophy */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={STAGGER_CHILDREN}
        className="space-y-6 border-t border-zinc-200 dark:border-zinc-800/60 pt-10"
      >
        <h2 className="font-serif text-2xl text-zinc-900 dark:text-zinc-100">Engineering Philosophy</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Four things I&apos;ve argued for often enough to write down — one of
          which I used to believe the opposite of.
        </p>
        <div className="divide-y divide-zinc-200 dark:divide-zinc-800/60 border-y border-zinc-200 dark:border-zinc-800/60">
          {philosophy.map((item) => (
            <motion.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              key={item.number}
              className="flex gap-6 py-6"
            >
              <div className="pt-1 font-serif text-sm text-amber-600 dark:text-amber-400">{item.number}</div>
              <div>
                <h3 className="font-serif text-lg text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
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
        className="space-y-8 border-t border-zinc-200 dark:border-zinc-800/60 pt-10"
      >
        <h2 className="font-serif text-2xl text-zinc-900 dark:text-zinc-100">Experience</h2>

        <div className="relative border-l border-zinc-200 dark:border-zinc-800/60 ml-3 space-y-14 py-2">
          <TimelineItem
            title="Full Stack Developer"
            meta="— Step By Tech"
            date="2021 – Present · Dubai"
            accent
          >
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-6 max-w-2xl leading-relaxed">
              Led backend development across several product lines using
              Node.js, NestJS, and TypeScript.
            </p>

            <ul className="list-none space-y-3 mb-6 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex gap-3">
                <span className="text-amber-600/70 dark:text-amber-500/50 mt-1">▹</span>
                <span className="leading-relaxed">
                  Built the APIs behind Vidnik (social), Zadlaw (legal), and
                  Exyar (auto).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600/70 dark:text-amber-500/50 mt-1">▹</span>
                <span className="leading-relaxed">
                  Shipped real-time messaging and video calling for
                  mobile-first products.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600/70 dark:text-amber-500/50 mt-1">▹</span>
                <span className="leading-relaxed">
                  Built admin dashboards and internal tooling in React.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600/70 dark:text-amber-500/50 mt-1">▹</span>
                <span className="leading-relaxed">
                  Added 3D visualization and live mapping to the product
                  front ends.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600/70 dark:text-amber-500/50 mt-1">▹</span>
                <span className="leading-relaxed">
                  Ran deployments on AWS with Docker and Nginx.
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
            <ul className="list-none space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600 mt-1">▹</span>
                <span className="leading-relaxed">
                  Built multi-tenancy with full data isolation for enterprise
                  customers.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600 mt-1">▹</span>
                <span className="leading-relaxed">
                  Maintained ongoing data integrations and the standards that
                  kept them reliable.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600 mt-1">▹</span>
                <span className="leading-relaxed">
                  Helped design core systems for zero-downtime releases, plus
                  the tooling around them.
                </span>
              </li>
            </ul>
          </TimelineItem>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="space-y-8 border-t border-zinc-200 dark:border-zinc-800/60 pt-10"
      >
        <h2 className="font-serif text-2xl text-zinc-900 dark:text-zinc-100">Education</h2>

        <div className="relative border-l border-zinc-200 dark:border-zinc-800/60 ml-3 py-2">
          <TimelineItem
            title="Damascus University"
            date="2015 – 2020 · Syria"
            compact
          >
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 max-w-2xl leading-relaxed">
              Bachelor&apos;s degree in Software and Information Systems
              Engineering
            </p>
          </TimelineItem>
        </div>
      </motion.section>

      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="space-y-4 border-t border-zinc-200 dark:border-zinc-800/60 pt-10"
      >
        <h2 className="font-serif text-lg text-zinc-900 dark:text-zinc-100">Technologies</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          The stack behind the projects I&apos;ve shipped — everything listed
          here is something I&apos;ve used in production.
        </p>
        <div className="space-y-6 pt-2">
          {technologyGroups.map((group) => (
            <div key={group.label} className="space-y-3">
              <h3 className="text-xs font-medium uppercase tracking-wider text-amber-700/80 dark:text-amber-500/60">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-200 dark:border-zinc-800/60 px-3 py-1 text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
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
        className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-zinc-300 bg-zinc-50 transition-colors dark:border-zinc-800 dark:bg-zinc-950 ${
          accent
            ? "group-hover:border-amber-500 group-hover:bg-amber-500/20"
            : "group-hover:border-zinc-500 group-hover:bg-zinc-200 dark:group-hover:border-zinc-400 dark:group-hover:bg-zinc-800"
        }`}
      />

      <div
        className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 ${
          compact ? "mb-2" : "mb-4"
        }`}
      >
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
          {meta && <span className="text-zinc-600 dark:text-zinc-400 font-medium"> {meta}</span>}
        </h3>
        <span
          className={`shrink-0 text-sm font-medium ${
            accent ? "text-amber-600 dark:text-amber-400" : "text-zinc-600 dark:text-zinc-400"
          }`}
        >
          {date}
        </span>
      </div>

      {children}
    </div>
  );
}
