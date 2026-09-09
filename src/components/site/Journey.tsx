import { useState } from "react";
import { Plus } from "lucide-react";
import { experiences, type Experience } from "@/data/portfolio";
import { ExperienceDetailModal } from "./ExperienceDetailModal";
import { Reveal } from "./Reveal";

export function Journey() {
  const [openId, setOpenId] = useState<string | null>(experiences[0]?.id ?? null);
  const [active, setActive] = useState<Experience | null>(null);

  return (
    <section id="journey" className="grain border-b border-white/10 bg-ink">
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-32 md:px-10 md:py-52">
        <Reveal>
          <p className="eyebrow text-lime">Core impact &amp; leadership</p>
          <h2 className="display-h2 mt-10 max-w-[18ch] text-ivory">
            Leadership and event operations, most recent first.
          </h2>

        </Reveal>

        <ol className="relative mt-24 md:mt-36 md:pl-3">
          <span
            aria-hidden
            className="absolute bottom-0 left-[1.15rem] top-0 hidden w-px bg-lime/35 md:block"
          />
          {experiences.map((exp, i) => {
            const expanded = openId === exp.id;
            return (
              <Reveal as="li" key={exp.id} className="block">
                <div className="relative border-t border-white/10 py-10 md:py-14">
                  <span
                    aria-hidden
                    className="absolute left-0 top-14 hidden h-2.5 w-2.5 -translate-x-[3px] rounded-full bg-lime md:block"
                  />
                  <button
                    onClick={() => setOpenId(expanded ? null : exp.id)}
                    aria-expanded={expanded}
                    className="group grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-6 text-left md:grid-cols-[4rem_minmax(0,1fr)_auto] md:gap-10 md:pl-8"
                  >
                    <span className="hidden pt-3 font-serif text-sm text-lime/70 md:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <p className="eyebrow text-ivory/50">{exp.date}</p>
                      <h3
                        className={`display-h3 mt-4 font-serif text-ivory transition-opacity duration-500 ${
                          expanded ? "opacity-100" : "opacity-80 group-hover:opacity-100"
                        }`}
                      >
                        {exp.role}
                      </h3>
                      <p className="mt-3 text-sm text-ivory/65">
                        {exp.organization} · <span className="italic">{exp.kind}</span>
                      </p>
                    </div>

                    <Plus
                      className={`mt-3 h-6 w-6 shrink-0 text-lime transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
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
                      <div className="grid gap-10 pt-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-16 md:pl-[7.5rem]">
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
                          <div className="grid aspect-[3/2] w-full place-items-center border border-dashed border-white/20 px-4 text-center text-[0.7rem] tracking-wide text-ivory/45">
                            Photograph to be added
                          </div>
                        )}

                        <div>
                          <ul className="space-y-5 text-[0.975rem] leading-[1.8] text-ivory/80">
                            {exp.bullets.map((b) => (
                              <li key={b} className="flex gap-4">
                                <span
                                  aria-hidden
                                  className="mt-3 h-px w-5 shrink-0 bg-lime/70"
                                />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => setActive(exp)}
                            className="rule-link mt-10 inline-flex text-xs tracking-[0.18em] uppercase text-lime"
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
        <div className="border-t border-white/10" />
      </div>

      <ExperienceDetailModal experience={active} onClose={() => setActive(null)} />
    </section>
  );
}
