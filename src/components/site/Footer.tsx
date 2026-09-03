import { contact } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-ink text-background/60">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-background/15 px-5 py-8 text-xs md:px-10">
        <p className="min-w-0 truncate">Tawfik Abeid · {contact.location}</p>
        <p className="shrink-0">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
