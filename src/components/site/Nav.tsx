import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CV_URL } from "@/data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Impact", href: "#journey" },
  { label: "Legal & Academic", href: "#education" },
  { label: "Credentials", href: "#credentials" },

  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-4 md:px-10"
      >
        <a href="#top" className="eyebrow text-ivory">
          Tawfik Abeid
        </a>

        <div className="flex shrink-0 items-center gap-4">
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rule-link text-sm text-ivory/80 transition-colors hover:text-lime"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={CV_URL}
            download
            className="rounded-sm bg-lime px-4 py-2 text-xs tracking-wide text-ink transition-opacity hover:opacity-90"
          >
            Download CV
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center text-ivory md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-white/10 bg-ink px-5 py-6 md:hidden">
          {links.map((l) => (
            <li key={l.href} className="border-b border-white/10">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-lg text-ivory"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
