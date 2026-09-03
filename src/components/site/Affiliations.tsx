import { affiliations } from "@/data/portfolio";

export function Affiliations() {
  const row = [...affiliations, ...affiliations];

  return (
    <section aria-labelledby="affiliations-heading" className="border-b border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <h2 id="affiliations-heading" className="eyebrow font-sans text-muted-foreground">
          Selected affiliations and experiences
        </h2>
      </div>

      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul
          className="animate-marquee flex w-max items-center gap-10 group-hover:[animation-play-state:paused] md:gap-16"
          aria-hidden
        >
          {row.map((name, i) => (
            <li
              key={`${name}-${i}`}
              className="shrink-0 font-serif text-lg text-foreground/70 md:text-2xl"
            >
              {name}
            </li>
          ))}
        </ul>
        <ul className="sr-only">
          {affiliations.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="mt-8 max-w-xl text-xs leading-relaxed text-muted-foreground">
          Roles across these organisations include internships, volunteer positions, and
          learning programmes. Each is labelled precisely in the journey below.
        </p>
      </div>
    </section>
  );
}
