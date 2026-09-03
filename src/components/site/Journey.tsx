import { useState } from "react";
import { Plus } from "lucide-react";
import { experiences, type Experience } from "@/data/portfolio";
import { ExperienceDetailModal } from "./ExperienceDetailModal";
import { Reveal } from "./Reveal";

export function Journey() {
  const [openId, setOpenId] = useState<string | null>(experiences[0]?.id ?? null);
  const [active, setActive] = useState<Experience | null>(null);

  return (
    <section id="journey" className="grain border-b border-midnight/20 bg-powder">
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-32 md:px-10 md:py-52">
        <Reveal>
          <p className="eyebrow text-midnight/70">Career journey</p>
          <h2 className="display-h2 mt-10 max-w-[18ch] text-midnight">
            A chronological record, most recent first.
          </h2>
        </Reveal>

        <ol className="mt-24 md:mt-36">
          {experiences.map((exp, i) => {
            const expanded = openId === exp.id;
            return (
              <Reveal as="li" key={exp.id} className="block">
                <div className="border-t border-midnight/20 py-10 md:py-14">
                  <button
                    onClick={() => setOpenId(expanded ? null : exp.id)}
                    aria-expanded={expanded}
                    className="group grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-6 text-left md:grid-cols-[4rem_minmax(0,1fr)_auto] md:gap-10"
                  >
                    <span className="hidden pt-3 font-serif text-sm text-midnight/45 md:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <p className="eyebrow text-midnight/60">{exp.date}</p>
                      <h3
                        className={`display-h3 mt-4 font-serif text-midnight transition-opacity duration-500 ${
                          expanded ? "opacity-100" : "opacity-80 group-hover:opacity-100"
                        }`}
                      >
                        {exp.role}
                      </h3>
                      <p className="mt-3 text-sm text-midnight/70">
                        {exp.organization} · <span className="italic">{exp.kind}</span>
                      </p>
                    </div>

                    <Plus
                      className={`mt-3 h-6 w-6 shrink-0 text-midnight/55 transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                        expanded ? "rotate-[135deg]" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-[900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                      expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-10 pt-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-16 md:pl-[5rem]">
                        {exp.thumbnail ? (
                          <div className="overflow-hidden">
                            <img
                              src={exp.thumbnail}
                              alt={`${exp.role} at ${exp.organization}`}
                              loading="lazy"
                              className={`aspect-[3/2] w-full object-cover transition-transform duration-[1400ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                                expanded ? "scale-100" : "scale-105"
                              }`}
                            />
                          </div>
                        ) : (
                          <div className="grid aspect-[3/2] w-full place-items-center border border-dashed border-midnight/25 px-4 text-center text-[0.7rem] tracking-wide text-midnight/50">
                            Photograph to be added
                          </div>
                        )}

                        <div>
                          <ul className="space-y-5 text-[0.975rem] leading-[1.8] text-midnight/85">
                            {exp.bullets.map((b) => (
                              <li key={b} className="flex gap-4">
                                <span
                                  aria-hidden
                                  className="mt-3 h-px w-5 shrink-0 bg-midnight/40"
                                />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => setActive(exp)}
                            className="rule-link mt-10 inline-flex text-xs tracking-[0.18em] uppercase text-midnight"
                          >
                            View proof
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
        <div className="border-t border-midnight/20" />
      </div>

      <ExperienceDetailModal experience={active} onClose={() => setActive(null)} />
    </section>
  );
}
