import { contact } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory/55">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-white/10 px-5 py-8 text-xs md:px-10">
        <p className="min-w-0 truncate">
          Tawfik Abeid — Building through law, leadership, and meaningful collaboration. ·{" "}
          {contact.location}
        </p>
        <p className="shrink-0">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
