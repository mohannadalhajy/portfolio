"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Minimum horizontal swipe distance (px) to count as a deliberate
// next/prev gesture rather than an incidental drag or a tap.
const SWIPE_THRESHOLD = 50;

export default function ProjectGallery({
  images,
  alt = "Project screenshot",
}: {
  images: string[];
  alt?: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;
  const isOpen = selectedIndex !== null;
  const touchStartX = useRef<number | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const showNext = useCallback(
    () => setSelectedIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );
  const showPrev = useCallback(
    () => setSelectedIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  );

  const openAt = (index: number, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setSelectedIndex(index);
  };

  // Keyboard shortcuts + focus trap. Keyed off `isOpen` rather than
  // `selectedIndex` so it doesn't tear down and reattach on every
  // next/prev navigation.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
        return;
      }
      if (e.key === "ArrowRight") {
        showNext();
        return;
      }
      if (e.key === "ArrowLeft") {
        showPrev();
        return;
      }
      if (e.key === "Tab") {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const focusable = Array.from(
          dialog.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
          ),
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        if (e.shiftKey) {
          if (active === first || !dialog.contains(active)) {
            e.preventDefault();
            last.focus();
          }
        } else if (active === last || !dialog.contains(active)) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, showNext, showPrev]);

  // Move focus into the dialog on open and return it to the thumbnail
  // that opened it on close, so keyboard/screen-reader users aren't
  // dropped back at the top of the page.
  useEffect(() => {
    if (!isOpen) return;

    const trigger = triggerRef.current;
    closeButtonRef.current?.focus();

    return () => {
      trigger?.focus();
    };
  }, [isOpen]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (delta > SWIPE_THRESHOLD) showPrev();
    else if (delta < -SWIPE_THRESHOLD) showNext();
  };

  return (
    <>
      <section className="space-y-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={(e) => openAt(i, e.currentTarget)}
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

      {selectedImage &&
        createPortal(
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} preview`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedIndex(null)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close preview"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white sm:left-4"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white sm:right-4"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

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

            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-zinc-900/80 px-3 py-1 text-xs text-zinc-300">
                {selectedIndex! + 1} / {images.length}
              </div>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
