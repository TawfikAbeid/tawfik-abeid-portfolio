import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experiences, type Experience } from "@/data/portfolio";
import { ExperienceDetailModal } from "./ExperienceDetailModal";

export function Journey() {
  const [openId, setOpenId] = useState<string | null>(experiences[0]?.id ?? null);
  const [active, setActive] = useState<Experience | null>(null);

  return (
    <section id="journey" className="grain border-b border-border bg-powder">
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <p className="eyebrow text-midnight/70">Career journey</p>
        <h2 className="mt-5 max-w-[20ch] text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.05] tracking-[-0.015em] text-midnight">
          A chronological record, most recent first.
        </h2>

        <ol className="mt-16 border-l border-midnight/20 md:mt-20">
          {experiences.map((exp) => {
            const expanded = openId === exp.id;
            return (
              <li key={exp.id} className="relative pl-6 md:pl-12">
                <span
                  aria-hidden
                  className={`absolute -left-[4.5px] top-8 h-2 w-2 rounded-full transition-colors duration-300 ${
                    expanded ? "bg-midnight" : "bg-midnight/35"
                  }`}
                />
                <div className="border-b border-midnight/15 py-7">
                  <button
                    onClick={() => setOpenId(expanded ? null : exp.id)}
                    aria-expanded={expanded}
                    className="group grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-4 text-left"
                  >
                    <div className="min-w-0">
                      <p className="eyebrow text-midnight/60">{exp.date}</p>
                      <h3 className="mt-2 text-xl leading-tight text-midnight md:text-2xl">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-sm text-midnight/70">
                        {exp.organization} · <span className="italic">{exp.kind}</span>
                      </p>
                    </div>
                    <ChevronDown
                      className={`mt-1 h-5 w-5 shrink-0 text-midnight/60 transition-transform duration-500 ${
                        expanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                      expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-6 pt-6 sm:grid-cols-[160px_minmax(0,1fr)]">
                        {exp.thumbnail ? (
                          <img
                            src={exp.thumbnail}
                            alt={`${exp.role} at ${exp.organization}`}
                            loading="lazy"
                            className="aspect-[4/3] w-full rounded-sm object-cover"
                          />
                        ) : (
                          <div className="grid aspect-[4/3] w-full place-items-center rounded-sm border border-dashed border-midnight/25 px-2 text-center text-[0.7rem] text-midnight/50">
                            Image placeholder
                          </div>
                        )}

                        <div>
                          <ul className="space-y-3 text-sm leading-relaxed text-midnight/85">
                            {exp.bullets.map((b) => (
                              <li key={b} className="flex gap-3">
                                <span
                                  aria-hidden
                                  className="mt-2 h-px w-4 shrink-0 bg-midnight/40"
                                />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => setActive(exp)}
                            className="mt-6 rounded-sm border border-midnight/30 px-5 py-2 text-xs tracking-wide text-midnight transition-colors duration-300 hover:bg-midnight hover:text-background"
                          >
                            View proof
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <ExperienceDetailModal experience={active} onClose={() => setActive(null)} />
    </section>
  );
}
