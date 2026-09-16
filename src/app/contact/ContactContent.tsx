"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Download, ArrowUpRight } from "lucide-react";
import { FADE_DOWN_ANIMATION_VARIANTS, STAGGER_CHILDREN } from "@/lib/motion";
import { siteConfig } from "@/lib/site";
import CopyButton from "@/components/CopyButton";
import StatusBadge from "@/components/StatusBadge";
import ContactForm from "@/components/ContactForm";

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
        <h1 className="font-serif text-3xl text-zinc-900 dark:text-zinc-100 sm:text-4xl">Contact</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Get in touch for new opportunities and collaborations.
        </p>
        <StatusBadge />
      </motion.div>

      <div className="grid gap-10 border-t border-zinc-200 dark:border-zinc-800/60 pt-10 lg:grid-cols-2">
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="space-y-6">
          <p className="max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Whether it&apos;s a new product, scaling an existing platform, or a
            quick technical question — feel free to reach out. I usually reply
            within a day.
          </p>

          <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-zinc-500 dark:text-zinc-500" />
              Dubai, United Arab Emirates
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-zinc-500 dark:text-zinc-500" />
              GST · UTC+4
            </div>
          </div>

          <a
            href="/mohannad-alhajy-cv.pdf"
            download
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-amber-500 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-amber-400"
          >
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={STAGGER_CHILDREN}
          className="divide-y divide-zinc-200 dark:divide-zinc-800/60 border-y border-zinc-200 dark:border-zinc-800/60 lg:border-y-0 lg:border-l lg:pl-10"
        >
          {contactMethods.map((method) => {
            const isExternal = method.href.startsWith("http");
            return (
              <motion.div
                key={method.title}
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="group flex items-center justify-between gap-4 py-4"
              >
                <a
                  href={method.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  aria-label={`Open ${method.title}`}
                  className="flex min-w-0 flex-1 items-center justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
                >
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{method.title}</div>
                    <div className="truncate text-xs text-zinc-600 dark:text-zinc-400">{method.subtitle}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-400 dark:text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-600 dark:group-hover:text-amber-400" />
                </a>
                <CopyButton value={method.copyValue} label={`Copy ${method.title.toLowerCase()}`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="space-y-6 border-t border-zinc-200 dark:border-zinc-800/60 pt-10">
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="space-y-1.5">
          <h2 className="font-serif text-xl text-zinc-900 dark:text-zinc-100">Send a message</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Prefer a form? Fill this out and it&apos;ll land straight in my inbox.
          </p>
        </motion.div>
        <ContactForm />
      </div>
    </motion.div>
  );
}
