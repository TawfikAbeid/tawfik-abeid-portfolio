import { images } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-36">
        <div>
          <p className="eyebrow text-muted-foreground">About</p>
          <div className="mt-8 max-w-[320px]">
            <img
              src={images.portrait}
              alt="Tawfik Abeid, professional portrait"
              loading="lazy"
              className="aspect-square w-full rounded-full object-cover object-top grayscale-[15%] transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </div>

        <div>
          <h2 className="max-w-[22ch] text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.05] tracking-[-0.015em]">
            A focused start, built through people, purpose, and progress.
          </h2>

          <div className="mt-10 grid gap-8 text-[0.975rem] leading-relaxed text-foreground/80 sm:grid-cols-2">
            <p>
              Tawfik is a fourth-year LLB candidate at Cairo University Faculty of Law,
              expected to graduate in 2026. His studies centre on legal research, civil
              procedure, and contract law — the slower, more careful side of the discipline.
            </p>
            <p>
              Alongside his degree, he takes part in international leadership programmes and
              community leadership, and works in program operations, customer-facing roles,
              and event coordination. The through-line is collaboration: doing useful work
              with other people, reliably.
            </p>
          </div>

          <dl className="mt-14 grid gap-x-10 gap-y-6 border-t border-border pt-8 sm:grid-cols-3">
            {[
              { k: "Based in", v: "Giza, Egypt" },
              { k: "Studying", v: "LLB, Cairo University" },
              { k: "Expected", v: "Graduation 2026" },
            ].map((i) => (
              <div key={i.k}>
                <dt className="eyebrow text-muted-foreground">{i.k}</dt>
                <dd className="mt-2 font-serif text-lg">{i.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
