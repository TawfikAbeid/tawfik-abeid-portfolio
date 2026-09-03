import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  credentialCategories,
  credentials,
  type CredentialCategory,
} from "@/data/portfolio";

export function Credentials() {
  const [filter, setFilter] = useState<CredentialCategory>("All");
  const visible =
    filter === "All" ? credentials : credentials.filter((c) => c.category === filter);

  return (
    <section id="credentials" className="border-b border-border bg-card">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow text-muted-foreground">Credentials archive</p>
            <h2 className="mt-5 max-w-[20ch] text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.05] tracking-[-0.015em]">
              Certificates, courses, and programmes.
            </h2>
          </div>
          <ul className="flex flex-wrap gap-2" role="tablist" aria-label="Filter credentials">
            {credentialCategories.map((c) => (
              <li key={c}>
                <button
                  role="tab"
                  aria-selected={filter === c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full border px-4 py-2 text-xs transition-colors duration-300 ${
                    filter === c
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-foreground/70 hover:border-foreground/40"
                  }`}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-16 border-t border-border">
          {visible.map((c, i) => (
            <li
              key={`${c.title}-${c.issuer}`}
              className="group grid grid-cols-[minmax(0,1fr)] items-center gap-6 border-b border-border py-7 transition-colors duration-300 hover:bg-muted/50 md:grid-cols-[3.5rem_120px_minmax(0,1fr)_auto] md:gap-8"
            >
              <span className="hidden font-serif text-sm text-muted-foreground md:block">
                {String(i + 1).padStart(2, "0")}
              </span>

              {c.image ? (
                <img
                  src={c.image}
                  alt={`${c.title} certificate`}
                  loading="lazy"
                  className="aspect-[4/3] w-full max-w-[120px] rounded-sm border border-border object-cover"
                />
              ) : (
                <div className="grid aspect-[4/3] w-full max-w-[120px] place-items-center rounded-sm border border-dashed border-border bg-background px-2 text-center text-[0.6rem] text-muted-foreground">
                  Certificate placeholder
                </div>
              )}

              <div className="min-w-0">
                <h3 className="text-lg leading-snug md:text-xl">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.issuer} · {c.date}
                </p>
                <p className="eyebrow mt-2 text-midnight/70">{c.category}</p>
              </div>

              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rule-link inline-flex shrink-0 items-center gap-2 text-sm"
                >
                  View Credential <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <span className="shrink-0 text-xs text-muted-foreground">
                  Credential link to be added
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
