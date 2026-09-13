"use client";

import { useEffect, useRef, useState } from "react";

function GemShape({ gradientId }: { gradientId: string }) {
  return (
    <svg viewBox="0 0 200 300" className="h-auto w-full">
      <defs>
        <linearGradient id={`${gradientId}-crown`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id={`${gradientId}-left`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id={`${gradientId}-right`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id={`${gradientId}-pavilion`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* crown: top facets catching the light */}
      <polygon points="100,0 170,70 100,95" fill={`url(#${gradientId}-crown)`} />
      <polygon points="100,0 30,70 100,95" fill={`url(#${gradientId}-left)`} />

      {/* girdle: widest facets */}
      <polygon points="170,70 170,180 100,95" fill={`url(#${gradientId}-right)`} />
      <polygon points="30,70 30,180 100,95" fill={`url(#${gradientId}-left)`} />

      {/* pavilion: base tapering to the point */}
      <polygon points="170,180 100,300 100,95" fill={`url(#${gradientId}-pavilion)`} />
      <polygon points="30,180 100,300 100,95" fill={`url(#${gradientId}-pavilion)`} />

      {/* facet edges */}
      <path
        d="M100,0 L170,70 L170,180 L100,300 L30,180 L30,70 Z
           M100,0 L100,95 M30,70 L100,95 M170,70 L100,95
           M100,300 L100,95 M30,180 L100,95 M170,180 L100,95"
        stroke="rgba(252,211,150,0.45)"
        strokeWidth="1"
        strokeLinejoin="round"
        fill="none"
      />
      {/* crisp top highlight */}
      <path d="M100,0 L170,70 L100,95 Z" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" />
    </svg>
  );
}

export default function HeroGem({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    function handlePointerMove(event: PointerEvent) {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalize offset to roughly [-1, 1] relative to viewport half-size
      const offsetX = (event.clientX - centerX) / (window.innerWidth / 2);
      const offsetY = (event.clientY - centerY) / (window.innerHeight / 2);

      const maxTilt = 10; // degrees
      setTilt({
        x: Math.max(-1, Math.min(1, offsetY)) * -maxTilt,
        y: Math.max(-1, Math.min(1, offsetX)) * maxTilt,
      });
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none relative select-none ${className}`}
      aria-hidden="true"
      style={{ perspective: "800px" }}
    >
      <div className="animate-glow-pulse absolute inset-0 -z-10 scale-90 rounded-full bg-gradient-to-br from-amber-500/25 to-teal-500/20 blur-[70px]" />

      {/* tilt wrapper: separate element from the float animation so their transforms don't clash */}
      <div
        className="transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="animate-gem-float">
          <div className="w-40 drop-shadow-[0_0_25px_rgba(245,158,11,0.15)] sm:w-48 lg:w-56">
            <GemShape gradientId="gem-grad-main" />
          </div>

          {/* reflection: mirrored + faded via a CSS mask, offset with a small gap */}
          <div
            className="-mt-2 w-40 -scale-y-100 opacity-40 sm:w-48 lg:w-56"
            style={{
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent 35%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent 35%)",
            }}
          >
            <GemShape gradientId="gem-grad-reflection" />
          </div>
        </div>
      </div>
    </div>
  );
}
