"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold tracking-tight text-zinc-100 transition-colors hover:text-white">
          Mohannad Alhajy
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1">
          <a
            href="/mohannad-alhajy-cv.pdf"
            download
            className="rounded-xl border border-zinc-800/50 px-4 py-2 text-sm text-zinc-300 transition-all hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-100"
          >
            CV
          </a>
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="rounded-xl px-4 py-2 text-sm text-zinc-300 transition-all hover:bg-zinc-900 hover:text-zinc-100"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-8 w-8 flex-col items-center justify-center space-y-1.5 md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-zinc-300 transition-transform duration-300 ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-zinc-300 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-zinc-300 transition-transform duration-300 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-zinc-900/50 bg-zinc-950/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col space-y-2 px-4 py-4">
              <a
                href="/mohannad-alhajy-cv.pdf"
                download
                className="rounded-xl border border-zinc-800/50 px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-zinc-900"
              >
                Download CV
              </a>
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {i.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
