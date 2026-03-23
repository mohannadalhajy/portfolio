"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-zinc-900 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Mohannad Alhajy
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2">
          <a
            href="/mohannad-alhajy-cv.pdf"
            download
            className="rounded-xl border border-zinc-800 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900"
          >
            CV
          </a>
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-zinc-300 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-zinc-300 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-zinc-300 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-900 bg-zinc-950/95 backdrop-blur">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            <a
              href="/mohannad-alhajy-cv.pdf"
              download
              className="rounded-xl border border-zinc-800 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900"
            >
              CV
            </a>
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {i.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
