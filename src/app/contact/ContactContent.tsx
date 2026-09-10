"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Download } from "lucide-react";
import { FADE_DOWN_ANIMATION_VARIANTS, STAGGER_CHILDREN } from "@/lib/motion";
import { siteConfig } from "@/lib/site";
import CopyButton from "@/components/CopyButton";

const contactMethods = [
  {
    title: "Email",
    subtitle: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    copyValue: siteConfig.email,
    icon: <Mail className="h-5 w-5" />,
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  },
  {
    title: "WhatsApp",
    subtitle: "+971 50 998 7098",
    href: "https://wa.me/971509987098?text=Hello%20Mohannad%2C%20I%20saw%20your%20portfolio",
    copyValue: "+971509987098",
    icon: <Phone className="h-5 w-5" />,
    badge: "border-green-500/30 bg-green-500/10 text-green-300",
  },
  {
    title: "LinkedIn",
    subtitle: "mohannad-alhajy",
    href: siteConfig.linkedin,
    copyValue: siteConfig.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    badge: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  },
  {
    title: "GitHub",
    subtitle: "@mohannadalhajy",
    href: siteConfig.github,
    copyValue: siteConfig.github,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.698 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    badge: "border-zinc-400/30 bg-zinc-400/10 text-zinc-200",
  },
];

export default function ContactContent() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={STAGGER_CHILDREN}
      className="space-y-10"
    >
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Contact</h1>
        <p className="text-lg text-zinc-400">
          Get in touch for new opportunities and collaborations.
        </p>
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800/70 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          Available for new opportunities in UAE
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="flex flex-col justify-between gap-6 rounded-2xl border border-zinc-800/70 bg-zinc-900/50 p-6 backdrop-blur-sm"
        >
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-100">
              Let&apos;s build something great together
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
              Whether it&apos;s a new product, scaling an existing platform, or a quick
              technical question — feel free to reach out. I usually reply within a day.
            </p>
          </div>

          <div className="space-y-3 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-zinc-500" />
              Dubai, United Arab Emirates
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-zinc-500" />
              GST · UTC+4
            </div>
          </div>

          <a
            href="/mohannad-alhajy-cv.pdf"
            download
            className="group inline-flex items-center justify-center gap-2 self-start rounded-xl border border-zinc-800/70 bg-zinc-950 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-all hover:border-zinc-700 hover:bg-zinc-800 active:scale-95"
          >
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Download Resume (PDF)
          </a>
        </motion.div>

        <motion.div variants={STAGGER_CHILDREN} className="grid gap-4 sm:grid-cols-2">
          {contactMethods.map((method) => (
            <motion.div
              key={method.title}
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="group relative flex flex-col gap-3 rounded-2xl border border-zinc-800/70 bg-zinc-900/50 p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-zinc-700/80 hover:bg-zinc-900/50"
            >
              <a
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={`Open ${method.title}`}
                className="absolute inset-0 z-0 rounded-2xl"
              />
              <div className="pointer-events-none flex items-start justify-between gap-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md ${method.badge}`}
                >
                  {method.icon}
                </div>
                {method.copyValue && (
                  <div className="pointer-events-auto">
                    <CopyButton value={method.copyValue} label={`Copy ${method.title.toLowerCase()}`} />
                  </div>
                )}
              </div>
              <div className="pointer-events-none min-w-0">
                <div className="text-sm font-medium text-zinc-400">{method.title}</div>
                <div className="mt-1 truncate font-semibold text-zinc-100">
                  {method.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
