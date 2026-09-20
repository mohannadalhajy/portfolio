"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { resumeUrl, siteConfig } from "@/lib/site";

const pages = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 hidden border-b border-zinc-200/70 bg-zinc-50/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/80 sm:block">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6 px-4 py-3 sm:pr-20">
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className="font-serif text-sm tracking-wide text-zinc-900 transition-colors hover:text-teal-600 dark:text-zinc-100 dark:hover:text-teal-300"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Main" className="flex items-center gap-1">
          {pages.map((p) => {
            const isActive = pathname === p.href || pathname.startsWith(`${p.href}/`);
            return (
              <Link
                key={p.href}
                href={p.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "text-teal-600 dark:text-teal-300"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                {p.label}
              </Link>
            );
          })}
          <a
            href={resumeUrl}
            download
            className="ml-2 rounded-full border border-teal-500/40 px-3 py-1.5 text-sm text-teal-700 transition-colors hover:border-teal-500/70 hover:bg-teal-500/10 dark:text-teal-300"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
