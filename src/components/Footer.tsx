"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto w-full max-w-5xl px-4 py-8 space-y-6 text-sm text-zinc-400">
        {/* <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                className={`transition-colors hover:text-amber-400 ${
                  isActive ? "text-amber-400" : ""
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav> */}

        <div className="flex flex-col gap-2 border-t border-zinc-900 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mohannad Alhajy</p>
          <p className="text-zinc-400">Developed by Mohannad Alhajy</p>
        </div>
      </div>
    </footer>
  );
}
