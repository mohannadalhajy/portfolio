"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function ProjectGallery({
  images,
  alt = "Project screenshot",
}: {
  images: string[];
  alt?: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") setSelectedIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setSelectedIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, images.length]);

  return (
    <>
      <section className="space-y-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setSelectedIndex(i)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              aria-label={`View ${alt} ${i + 1} of ${images.length} full size`}
            >
              <Image
                src={img}
                alt={`${alt} ${i + 1} of ${images.length}`}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} preview`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close preview"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative h-[80vh] w-[90vw] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt={`${alt} ${selectedIndex! + 1} of ${images.length}`}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
