import { images } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-32 md:px-10 md:py-52">
        <Reveal>
          <p className="eyebrow text-muted-foreground">About</p>
          <h2 className="display-h2 mt-10 max-w-[24ch]">
            Law, community leadership, and event operations in one practice.
          </h2>
        </Reveal>

        <div className="mt-24 grid gap-16 md:mt-32 md:grid-cols-[1.05fr_0.95fr] md:gap-24">
          <Reveal delay={0.05}>
            <img
              src={images.formal}
              alt="Tawfik Abeid, professional portrait in a navy blazer"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-top grayscale-[18%] transition-all duration-[1200ms] hover:grayscale-0"
            />
          </Reveal>

          <Reveal delay={0.12} className="md:pt-10">
            <div className="space-y-8 text-[1.0625rem] leading-[1.85] text-foreground/80">
              <p className="font-serif text-[clamp(1.35rem,2.2vw,1.95rem)] leading-[1.35] text-foreground italic">
                Tawfik Abeid is a Cairo University Law Graduate (LLB, Class of 2026) and
                active Community Leader based in Giza, Egypt.
              </p>
              <p>
                He built hands-on experience in community leadership and event
                coordination through successive roles: Community Leader at Aspire
                Institute (Giza), Speaker Liaison at the Harvard Alumni Summit MEA,
                and a two-time volunteer at RiseUp Summit.
              </p>
              <p>
                His passion is connecting his legal background with the organisational
                and communication skills he developed through direct work with
                international communities and events — with community leadership as
                the driver and law as the academic foundation.
              </p>
            </div>


            <dl className="mt-20 grid gap-x-10 gap-y-10 border-t border-border pt-10 sm:grid-cols-3">
              {[
                { k: "Based in", v: "Giza, Egypt" },
                { k: "Qualification", v: "LLB, Cairo University" },
                { k: "Graduated", v: "June 2026" },
              ].map((i) => (
                <div key={i.k}>
                  <dt className="eyebrow text-muted-foreground">{i.k}</dt>
                  <dd className="mt-3 font-serif text-xl">{i.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
