import Image from "next/image";
import { getProjectAccent } from "@/data/project-meta";

export default function ProjectCover({
  slug,
  title,
  photo,
  className = "",
}: {
  slug: string;
  title: string;
  photo?: string;
  className?: string;
}) {
  const accent = getProjectAccent(slug);
  const Icon = accent.icon;

  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden border-b border-zinc-800/60 bg-zinc-950 ${className}`}
    >
      {photo ? (
        <>
          <Image
            src={photo}
            alt={`${title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent" />
        </>
      ) : (
        <>
          {/* dot-grid texture */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
          {/* color glow blobs */}
          <div
            className={`absolute -top-10 -right-6 h-36 w-36 rounded-full blur-3xl ${accent.glowA}`}
          />
          <div
            className={`absolute -bottom-10 -left-6 h-32 w-32 rounded-full blur-3xl ${accent.glowB}`}
          />
          {/* watermark icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon
              className="h-16 w-16 text-white/[0.08] transition-transform duration-500 group-hover:scale-110"
              strokeWidth={1.25}
            />
          </div>
        </>
      )}

      {/* accent badge */}
      <div
        className={`absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border backdrop-blur-md ${accent.badge}`}
      >
        <Icon className="h-4 w-4" strokeWidth={2} />
      </div>
    </div>
  );
}
