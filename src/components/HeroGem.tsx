function GemShape({ gradientId }: { gradientId: string }) {
  return (
    <svg viewBox="0 0 200 300" className="h-auto w-full">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <polygon
        points="100,0 170,70 170,230 100,300 30,230 30,70"
        fill={`url(#${gradientId})`}
        stroke="rgba(252,211,150,0.4)"
        strokeWidth="1.5"
      />
      <path
        d="M100,0 L170,110 M100,0 L30,110 M100,300 L170,190 M100,300 L30,190 M100,0 L100,300"
        stroke="rgba(252,211,150,0.28)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

export default function HeroGem({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none relative select-none ${className}`} aria-hidden="true">
      <div className="animate-glow-pulse absolute inset-0 -z-10 scale-90 rounded-full bg-gradient-to-br from-amber-500/25 to-teal-500/20 blur-[70px]" />

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
  );
}
