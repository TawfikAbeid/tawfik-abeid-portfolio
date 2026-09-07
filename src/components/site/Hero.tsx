import { useEffect, useState } from "react";
import { Linkedin, Mail, Phone } from "lucide-react";
import { contact, CV_URL, images } from "@/data/portfolio";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY * 0.12));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <div className="grid min-h-[100svh] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)]">
        <div className="relative z-10 flex flex-col justify-end px-5 pb-24 pt-28 md:px-10 md:pb-28 lg:justify-center lg:pb-0 lg:pt-24">
          <p
            className="eyebrow animate-reveal text-lime"
            style={{ animationDelay: "0.12s" }}
          >
            Giza, Egypt
          </p>
          <h1
            className="animate-reveal mt-5 max-w-[9ch] text-[clamp(3.1rem,9vw,7.4rem)] leading-[0.9] tracking-[-0.03em] text-ivory"
            style={{ animationDelay: "0.28s" }}
          >
            Tawfik Abeid
          </h1>
          <p
            className="animate-reveal mt-6 max-w-md text-sm text-ivory/75 md:text-base"
            style={{ animationDelay: "0.45s" }}
          >
            Law Student · Community Leader · Program &amp; Operations Intern
          </p>
          <p
            className="animate-reveal mt-6 max-w-xl font-serif text-[clamp(1.15rem,2.3vw,1.75rem)] leading-snug text-ivory italic"
            style={{ animationDelay: "0.6s" }}
          >
            “Building through law, leadership, and meaningful collaboration.”
          </p>

          <div
            className="animate-reveal mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.75s" }}
          >
            <a
              href="#journey"
              className="rounded-sm bg-lime px-6 py-3 text-sm text-ink transition-opacity duration-300 hover:opacity-90"
            >
              Explore My Journey
            </a>
            <a
              href={CV_URL}
              download
              className="rounded-sm border border-ivory/30 px-6 py-3 text-sm text-ivory transition-colors duration-300 hover:border-lime hover:text-lime"
            >
              Download CV
            </a>
          </div>

          <div
            className="animate-reveal mt-10 flex items-center gap-5 text-ivory/70"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-lime"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="transition-colors hover:text-lime"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              aria-label="Phone"
              className="transition-colors hover:text-lime"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative min-h-[62svh] lg:min-h-full">
          <img
            src={images.hero}
            alt="Tawfik Abeid wearing glasses and smiling, professional portrait"
            fetchPriority="high"
            className="animate-slow-zoom absolute inset-0 h-[112%] w-full object-cover object-[center_18%] grayscale-[8%]"
            style={{ transform: `translateY(${offset}px)` }}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent lg:bg-gradient-to-r lg:from-ink lg:via-ink/25 lg:to-transparent"
          />
          <div aria-hidden className="pointer-events-none absolute inset-8 hidden lg:block">
            <span className="absolute left-0 top-0 h-16 w-16 border-l-2 border-t-2 border-lime/80" />
            <span className="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-lime/80" />
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 h-16 w-px -translate-x-1/2 overflow-hidden bg-ivory/15"
      >
        <span className="animate-line-drift block h-8 w-px bg-lime" />
      </div>
    </section>
  );
}
