import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { archiveGallery, gallery } from "@/data/portfolio";

const allItems = [...gallery, ...archiveGallery];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const item = index === null ? null : allItems[index];


  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <p className="eyebrow text-muted-foreground">Visual gallery</p>
        <h2 className="mt-5 max-w-[20ch] text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.05] tracking-[-0.015em]">
          Portraits, events, and community work.
        </h2>

        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {gallery.map((g, i) => (
            <figure key={g.src + i} className="break-inside-avoid">
              <button
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-sm"
                aria-label={`Open image: ${g.alt}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] ${
                    g.span === "tall"
                      ? "aspect-[3/4]"
                      : g.span === "wide"
                        ? "aspect-[4/3]"
                        : "aspect-square"
                  }`}
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15"
                />
              </button>
              {g.caption && (
                <figcaption className="mt-2 text-xs text-muted-foreground">
                  {g.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          More photographs and captions can be added to this archive at any time.
        </p>
      </div>

      {item && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-5 animate-in fade-in duration-300"
          onClick={() => setIndex(null)}
        >
          <button
            onClick={() => setIndex(null)}
            aria-label="Close image"
            className="absolute right-5 top-5 rounded-full border border-background/30 p-2 text-background transition-colors hover:bg-background/10"
          >
            <X className="h-5 w-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full max-w-4xl">
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-[78svh] w-auto rounded-sm object-contain"
            />
            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-background/80">
              <span>{item.caption ?? item.alt}</span>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-background"
                >
                  Related link <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
