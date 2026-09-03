import { useEffect, useState } from "react";
import { CV_URL, images } from "@/data/portfolio";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY * 0.14));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[620px] overflow-hidden bg-ink">
      <img
        src={images.hero}
        alt="Portrait of Tawfik Abeid"
        fetchPriority="high"
        className="animate-slow-zoom absolute inset-0 h-[115%] w-full object-cover object-[center_20%]"
        style={{ transform: `translateY(${offset}px)` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/35"
      />

      <div className="relative flex h-full items-end">
        <div className="mx-auto w-full max-w-[1400px] px-5 pb-24 md:px-10 md:pb-28">
          <p
            className="eyebrow animate-reveal text-background/70"
            style={{ animationDelay: "0.15s" }}
          >
            Giza, Egypt
          </p>
          <h1
            className="animate-reveal mt-4 text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.95] tracking-[-0.02em] text-background"
            style={{ animationDelay: "0.3s" }}
          >
            Tawfik Abeid
          </h1>
          <p
            className="animate-reveal mt-5 max-w-xl text-sm text-background/80 md:text-base"
            style={{ animationDelay: "0.5s" }}
          >
            Law Student · Community Leader · Program &amp; Operations Intern
          </p>
          <p
            className="animate-reveal mt-6 max-w-2xl font-serif text-[clamp(1.15rem,2.4vw,1.85rem)] leading-snug text-background/95 italic"
            style={{ animationDelay: "0.65s" }}
          >
            “Building through law, leadership, and meaningful collaboration.”
          </p>

          <div
            className="animate-reveal mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#journey"
              className="rounded-sm bg-background px-6 py-3 text-sm text-foreground transition-colors duration-300 hover:bg-powder"
            >
              Explore My Journey
            </a>
            <a
              href={CV_URL}
              download
              className="rounded-sm border border-background/50 px-6 py-3 text-sm text-background transition-colors duration-300 hover:bg-background/10"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 h-16 w-px -translate-x-1/2 overflow-hidden bg-background/20"
      >
        <span className="animate-line-drift block h-8 w-px bg-background/80" />
      </div>
    </section>
  );
}
