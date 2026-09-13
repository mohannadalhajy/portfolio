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

  return (
    <>
      {/* dot rail — desktop/tablet only */}
      <nav
        aria-label="Site navigation"
        className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-5 rounded-full border border-zinc-800 bg-zinc-950/60 px-2.5 py-5 backdrop-blur sm:flex"
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
              <span className="relative grid h-3 w-3 shrink-0 place-items-center">
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ease-out ${
                    isActive
                      ? "scale-125 bg-teal-300 shadow-[0_0_8px_2px_rgba(45,212,191,0.7)]"
                      : "bg-zinc-500 group-hover:scale-125 group-hover:bg-teal-300 group-hover:shadow-[0_0_8px_2px_rgba(45,212,191,0.7)]"
                  }`}
                />
                <span
                  className={`absolute inset-0 rounded-full border transition-all duration-700 ease-out ${
                    isActive
                      ? "scale-[2.1] border-amber-400/60 opacity-100"
                      : "scale-100 border-transparent opacity-0 group-hover:scale-[2.1] group-hover:border-amber-400/40 group-hover:opacity-100"
                  }`}
                />
              </span>
              <span className="pointer-events-none absolute left-7 -translate-x-1 whitespace-nowrap rounded-full border border-teal-400/30 bg-zinc-950/90 px-5 py-3 text-xs uppercase tracking-[0.2em] text-zinc-200 opacity-0 shadow-[0_0_20px_2px_rgba(45,212,191,0.15)] backdrop-blur transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
                {p.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* pill tab bar — mobile only */}
      <nav
        aria-label="Site navigation"
        className="fixed inset-x-4 z-50 flex items-center justify-between gap-1 rounded-full border border-zinc-800 bg-zinc-950/80 px-1.5 py-1.5 shadow-lg backdrop-blur sm:hidden"
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
                  : "text-zinc-500"
              }`}
            >
              {p.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
