"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const FADE_DOWN_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const STAGGER_CHILDREN: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ContactPage() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={STAGGER_CHILDREN}
      className="space-y-8"
    >
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Contact</h1>
        <p className="text-lg text-zinc-400">
          Get in touch for new opportunities and collaborations.
        </p>
      </motion.div>

      <motion.div variants={STAGGER_CHILDREN} className="grid gap-4 sm:grid-cols-2">
        <motion.a
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="group flex flex-col gap-2 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-zinc-700/80 hover:bg-zinc-900/50"
          href="mailto:mohannad.alhajy@gmail.com"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-zinc-400 group-hover:text-zinc-100 transition-colors">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-medium text-zinc-400">Email</div>
            <div className="mt-1 font-semibold text-zinc-100">mohannad.alhajy@gmail.com</div>
          </div>
        </motion.a>

        <motion.a
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="group flex flex-col gap-2 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-zinc-700/80 hover:bg-zinc-900/50"
          href="https://linkedin.com/in/mohannad-alhajy"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-zinc-400 group-hover:text-zinc-100 transition-colors">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </div>
          <div>
            <div className="text-sm font-medium text-zinc-400">LinkedIn</div>
            <div className="mt-1 font-semibold text-zinc-100">mohannad-alhajy</div>
          </div>
        </motion.a>

        <motion.a
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="group flex flex-col gap-2 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-zinc-700/80 hover:bg-zinc-900/50"
          href="https://wa.me/971509987098?text=Hello%20Mohannad%2C%20I%20saw%20your%20portfolio"
          target="_blank"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-zinc-400 group-hover:text-zinc-100 transition-colors">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-medium text-zinc-400">Phone</div>
            <div className="mt-1 font-semibold text-zinc-100">+971 50 998 7098</div>
          </div>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}