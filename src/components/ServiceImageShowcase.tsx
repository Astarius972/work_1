"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

interface ServiceImageShowcaseProps {
  images: readonly string[];
  alt: string;
}

export function ServiceImageShowcase({
  images,
  alt,
}: ServiceImageShowcaseProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (count <= 1) return;
    const timer = setInterval(() => goTo(index + 1), 4500);
    return () => clearInterval(timer);
  }, [count, goTo, index]);

  if (count === 0) return null;

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-surface">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={src}
            alt={`${alt} — ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
            priority={i === 0}
          />
        </div>
      ))}

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Өмнөх зураг"
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Дараагийн зураг"
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Зураг ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>

          <div className="absolute left-4 top-4 rounded-full bg-black/45 px-2.5 py-1 text-xs text-white/90 backdrop-blur-sm">
            {index + 1} / {count}
          </div>
        </>
      )}
    </div>
  );
}
