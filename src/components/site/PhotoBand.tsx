import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

/** Full-bleed photographic band with a gentle parallax drift and image reveal. */
export function PhotoBand({ src, alt, caption, className = "" }: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShown(true)),
      { threshold: 0.08 },
    );
    io.observe(el);

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setOffset((progress - 0.5) * 60);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <figure className={`bg-ink ${className}`}>
      <div ref={wrapRef} className="relative h-[62svh] min-h-[380px] w-full overflow-hidden md:h-[82svh]">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={{ transform: `translate3d(0, ${offset}px, 0) scale(${shown ? 1.06 : 1.14})` }}
          className={`absolute inset-0 h-[118%] w-full object-cover transition-[opacity,transform] duration-[1400ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
            shown ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      {caption && (
        <figcaption className="mx-auto max-w-[1400px] px-5 py-6 text-xs tracking-wide text-background/60 md:px-10">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
