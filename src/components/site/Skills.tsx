import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="border-b border-border bg-card">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <p className="eyebrow text-muted-foreground">Skills</p>
        <h2
          id="skills-heading"
          className="mt-5 max-w-[20ch] text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.05] tracking-[-0.015em]"
        >
          Practice areas and working strengths.
        </h2>

        <div className="mt-16 border-t border-border">
          {skills.map((group) => (
            <div
              key={group.group}
              className="grid gap-4 border-b border-border py-8 md:grid-cols-[260px_minmax(0,1fr)] md:gap-10"
            >
              <h3 className="font-serif text-xl">{group.group}</h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/80">
                {group.items.map((item) => (
                  <li key={item} className="after:ml-6 after:text-border after:content-['/'] last:after:content-['']">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
