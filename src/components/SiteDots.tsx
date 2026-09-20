"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const pages = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteDots() {
  const pathname = usePathname();

  // iOS Safari anchors `position: fixed` to the layout viewport, which still
  // includes the (not-yet-collapsed) toolbar height until the page is
  // scrolled at least once. That leaves a fixed bottom bar sitting below the
  // visible fold on first paint of a page short enough not to require an
  // initial scroll. Track the real gap via the visualViewport API and add it
  // back in as extra offset so the pill stays visible from the first frame.
  const [toolbarGap, setToolbarGap] = useState(0);

  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;

    const update = () => {
      const gap = window.innerHeight - (vv.height + vv.offsetTop);
      setToolbarGap(Math.max(gap, 0));
    };

    update();
    // Only listen for resize (toolbar show/hide, keyboard, orientation) —
    // not scroll. Reacting to every scroll tick re-renders this fixed layer
    // on each frame, which is what was causing the visible jitter.
    vv.addEventListener("resize", update);
    return () => {
      vv.removeEventListener("resize", update);
    };
  }, []);

  // pill tab bar — mobile only; the desktop nav lives in SiteHeader
  return (
    <nav
        aria-label="Site navigation"
        className="fixed inset-x-4 z-50 flex items-center justify-between gap-1 rounded-full border border-zinc-200 bg-zinc-50/80 px-1.5 py-1.5 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80 sm:hidden"
        style={{
          bottom: `calc(2rem + env(safe-area-inset-bottom) + ${toolbarGap}px)`,
        }}
      >
        {pages.map((p) => {
          const isActive = pathname === p.href;
          return (
            <Link
              key={p.href}
              href={p.href}
              aria-label={p.label}
              aria-current={isActive ? "page" : undefined}
              className={`flex-1 whitespace-nowrap rounded-full px-3 py-2 text-center text-[10px] font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                isActive
                  ? "bg-teal-400/10 text-teal-200 shadow-[0_0_16px_1px_rgba(45,212,191,0.25)] ring-1 ring-inset ring-teal-400/40"
                  : "text-zinc-500 dark:text-zinc-500"
              }`}
            >
              {p.label}
            </Link>
          );
        })}
    </nav>
  );
}
