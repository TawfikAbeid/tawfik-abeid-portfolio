import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  credentialCategories,
  credentials,
  type CredentialCategory,
} from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Credentials() {
  const [filter, setFilter] = useState<CredentialCategory>("All");
  const visible =
    filter === "All" ? credentials : credentials.filter((c) => c.category === filter);

  return (
    <section id="credentials" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-32 md:px-10 md:py-52">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Credentials archive</p>
          <h2 className="display-h2 mt-10 max-w-[18ch]">
            Certificates, courses, and programmes.
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <ul
            className="mt-16 flex flex-wrap gap-x-8 gap-y-3"
            role="tablist"
            aria-label="Filter credentials"
          >
            {credentialCategories.map((c) => (
              <li key={c}>
                <button
                  role="tab"
                  aria-selected={filter === c}
                  onClick={() => setFilter(c)}
                  className={`rule-link text-xs tracking-[0.18em] uppercase transition-opacity duration-300 ${
                    filter === c ? "opacity-100" : "opacity-45 hover:opacity-80"
                  }`}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        <ul className="mt-20 border-t border-border md:mt-24">
          {visible.map((c, i) => (
            <Reveal
              as="li"
              key={`${c.title}-${c.issuer}`}
              className="block border-b border-border"
            >
              <div className="grid items-baseline gap-4 py-9 md:grid-cols-[4rem_minmax(0,1fr)_auto] md:gap-10 md:py-12">
                <span className="hidden font-serif text-sm text-muted-foreground md:block">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <h3 className="font-serif text-[clamp(1.25rem,2.1vw,1.85rem)] leading-tight">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {c.issuer} · {c.date} · <span className="italic">{c.category}</span>
                    {c.credentialType ? ` · ${c.credentialType}` : ""}
                  </p>
                  {c.image && (
                    <a
                      href={c.imageOriginal ?? c.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 block w-full max-w-[320px] overflow-hidden border border-border"
                      aria-label={`Open the ${c.title} document`}
                    >
                      <img
                        src={c.image}
                        alt={`${c.title} issued by ${c.issuer}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full object-contain transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]"
                      />
                    </a>
                  )}
                </div>

                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rule-link inline-flex shrink-0 items-center gap-2 text-xs tracking-[0.18em] uppercase"
                  >
                    View credential <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : c.document ? (
                  <a
                    href={c.document}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rule-link inline-flex shrink-0 items-center gap-2 text-xs tracking-[0.18em] uppercase"
                  >
                    View document <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="shrink-0 text-xs text-muted-foreground">
                    Credential link to be added
                  </span>
                )}
              </div>

              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
