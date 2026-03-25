"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <>
      <div className="pointer-events-none sticky top-6 z-50 flex justify-center px-4 pb-6">
        <header className="pointer-events-auto flex w-full max-w-2xl items-center justify-between gap-6 rounded-full border border-zinc-800/50 bg-zinc-950/80 px-4 py-2 shadow-xl backdrop-blur-md">
          <Link
            href="/"
            className="px-2 font-semibold tracking-tight text-zinc-100 transition-colors hover:text-white"
          >
            Mohannad
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((i) => {
              const isActive = pathname === i.href;
              return (
                <Link
                  key={i.href}
                  href={i.href}
                  className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    isActive ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-full bg-zinc-800/60"
                      initial={false}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{i.label}</span>
                </Link>
              );
            })}

            <div className="mx-2 h-4 w-px bg-zinc-800/80" />

            <a
              href="/mohannad-alhajy-cv.pdf"
              download
              className="rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-900 transition-transform hover:bg-white active:scale-95"
            >
              CV
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-auto flex h-8 w-8 flex-col items-center justify-center space-y-1.5 focus:outline-none md:hidden"
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
        </header>
      </div>

      {/* Mobile Dropdown Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 rounded-2xl border border-zinc-800/50 bg-zinc-950/95 p-4 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col space-y-2">
              {nav.map((i) => {
                const isActive = pathname === i.href;
                return (
                  <Link
                    key={i.href}
                    href={i.href}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-zinc-800/50 text-zinc-100"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {i.label}
                  </Link>
                );
              })}
              <div className="my-2 h-px w-full bg-zinc-800/50" />
              <a
                href="/mohannad-alhajy-cv.pdf"
                download
                className="rounded-xl bg-zinc-100 px-4 py-3 text-center text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
              >
                Download CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
