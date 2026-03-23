"use client";

import { useState } from "react";

export default function ProjectGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="space-y-4">
        {/* <h2 className="text-lg font-semibold">Preview</h2> */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt="preview"
                className="h-full w-full object-cover transition group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-h-full max-w-full rounded-xl"
          />
        </div>
      )}
    </>
  );
}