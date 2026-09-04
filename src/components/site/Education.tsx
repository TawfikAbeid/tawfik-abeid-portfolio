import { education } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-44">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Education</p>
          <h2 className="display-h2 mt-8 max-w-[20ch]">
            Legal study, continued in short courses.
          </h2>
        </Reveal>

        <ol className="mt-20 border-t border-border md:mt-28">
          {education.map((e, i) => (
            <Reveal as="li" key={e.institution + e.qualification} className="block border-b border-border">
              <div className="grid gap-4 py-10 md:grid-cols-[4rem_minmax(0,1fr)_14rem] md:gap-10 md:py-14">
                <span className="hidden font-serif text-sm text-muted-foreground md:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="display-h3 font-serif">{e.qualification}</h3>
                  <p className="mt-4 text-sm text-muted-foreground">{e.institution}</p>
                  {e.detail && (
                    <p className="mt-4 max-w-[52ch] text-[0.975rem] leading-[1.8] text-foreground/80">
                      {e.detail}
                    </p>
                  )}
                </div>
                <p className="eyebrow text-muted-foreground md:pt-2 md:text-right">
                  {e.period}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <p className="mt-12 max-w-[60ch] text-xs leading-relaxed text-muted-foreground">
          Transcripts and official results are held privately and shared on request only.
        </p>
      </div>
    </section>
  );
}
