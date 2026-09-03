import { useEffect, useState } from "react";
import { CV_URL } from "@/data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Credentials", href: "#credentials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-10"
      >
        <a
          href="#top"
          className={`eyebrow min-w-0 truncate transition-colors duration-500 ${
            scrolled ? "text-foreground" : "text-background md:text-background"
          }`}
        >
          Tawfik Abeid
        </a>

        <div className="flex shrink-0 items-center gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`rule-link text-sm transition-colors duration-500 ${
                    scrolled ? "text-foreground/80 hover:text-foreground" : "text-background/85 hover:text-background"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={CV_URL}
            download
            className={`rounded-sm border px-4 py-2 text-xs tracking-wide transition-all duration-500 ${
              scrolled
                ? "border-foreground/25 text-foreground hover:bg-foreground hover:text-background"
                : "border-background/50 text-background hover:bg-background hover:text-foreground"
            }`}
          >
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}
