"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Download, ArrowUpRight } from "lucide-react";
import { FADE_DOWN_ANIMATION_VARIANTS, STAGGER_CHILDREN } from "@/lib/motion";
import { siteConfig } from "@/lib/site";
import CopyButton from "@/components/CopyButton";

const contactMethods = [
  {
    title: "Email",
    subtitle: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    copyValue: siteConfig.email,
  },
  {
    title: "WhatsApp",
    subtitle: "+971 50 998 7098",
    href: "https://wa.me/971509987098?text=Hello%20Mohannad%2C%20I%20saw%20your%20portfolio",
    copyValue: "+971509987098",
  },
  {
    title: "LinkedIn",
    subtitle: "mohannad-alhajy",
    href: siteConfig.linkedin,
    copyValue: siteConfig.linkedin,
  },
  {
    title: "GitHub",
    subtitle: "@mohannadalhajy",
    href: siteConfig.github,
    copyValue: siteConfig.github,
  },
];

export default function ContactContent() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={STAGGER_CHILDREN}
      className="space-y-12"
    >
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="space-y-5">
        <h1 className="font-serif text-3xl text-zinc-100 sm:text-4xl">Contact</h1>
        <p className="text-lg text-zinc-400">
          Get in touch for new opportunities and collaborations.
        </p>
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-amber-400">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_2px_rgba(245,158,11,0.6)]" />
          Available for new opportunities in UAE
        </div>
      </motion.div>

      <div className="grid gap-10 border-t border-zinc-800/60 pt-10 lg:grid-cols-2">
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="space-y-6">
          <p className="max-w-md text-sm leading-relaxed text-zinc-400">
            Whether it&apos;s a new product, scaling an existing platform, or a
            quick technical question — feel free to reach out. I usually reply
            within a day.
          </p>

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
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-100 underline decoration-zinc-700 underline-offset-4 transition-colors hover:decoration-amber-400"
          >
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={STAGGER_CHILDREN}
          className="divide-y divide-zinc-800/60 border-y border-zinc-800/60 lg:border-y-0 lg:border-l lg:pl-10"
        >
          {contactMethods.map((method) => (
            <motion.div
              key={method.title}
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="group relative flex items-center justify-between gap-4 py-4"
            >
              <a
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={`Open ${method.title}`}
                className="absolute inset-0 z-0"
              />
              <div className="pointer-events-none min-w-0">
                <div className="text-sm font-medium text-zinc-100">{method.title}</div>
                <div className="truncate text-xs text-zinc-400">{method.subtitle}</div>
              </div>
              <div className="relative z-10 flex shrink-0 items-center gap-3">
                <CopyButton value={method.copyValue} label={`Copy ${method.title.toLowerCase()}`} />
                <ArrowUpRight className="pointer-events-none h-4 w-4 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-400" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
