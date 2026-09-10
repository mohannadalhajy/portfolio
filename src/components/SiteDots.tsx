"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteDots() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Site navigation"
      className="fixed left-6 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-4"
    >
      {pages.map((p) => {
        const isActive = pathname === p.href;
        return (
          <Link
            key={p.href}
            href={p.href}
            aria-label={p.label}
            aria-current={isActive ? "page" : undefined}
            className="group relative flex h-6 w-6 items-center justify-center"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "scale-125 bg-amber-400 shadow-[0_0_8px_2px_rgba(245,158,11,0.6)]"
                  : "bg-zinc-700 group-hover:bg-zinc-500"
              }`}
            />
            <span className="pointer-events-none absolute left-7 whitespace-nowrap rounded-md border border-zinc-800 bg-zinc-950 px-2 py-1 text-xs text-zinc-300 opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {p.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
