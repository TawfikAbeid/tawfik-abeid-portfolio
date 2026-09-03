import { ArrowUpRight, X } from "lucide-react";
import type { Experience } from "@/data/portfolio";

type Props = {
  experience: Experience | null;
  onClose: () => void;
};

export function ExperienceDetailModal({ experience, onClose }: Props) {
  const open = Boolean(experience);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[60] ${open ? "" : "pointer-events-none"}`}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-ink/50 backdrop-blur-[2px] transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label={experience ? `${experience.role} at ${experience.organization}` : "Experience detail"}
        className={`absolute inset-y-0 right-0 flex w-full max-w-[560px] flex-col bg-background shadow-2xl transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {experience && (
          <>
            <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-5 md:px-9">
              <div className="min-w-0">
                <p className="eyebrow text-muted-foreground">{experience.date}</p>
                <h3 className="mt-2 text-2xl leading-tight">{experience.role}</h3>
                <p className="mt-1 text-sm text-foreground/70">{experience.organization}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close panel"
                className="shrink-0 rounded-full border border-border p-2 transition-colors hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8 md:px-9">
              <span className="eyebrow rounded-full bg-powder px-3 py-1 text-accent-foreground">
                {experience.kind}
              </span>

              <div className="mt-8">
                <p className="eyebrow text-muted-foreground">Gallery</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {(experience.gallery.length ? experience.gallery : [null, null]).map(
                    (src, i) =>
                      src ? (
                        <img
                          key={i}
                          src={src}
                          alt={`${experience.role} — photo ${i + 1}`}
                          loading="lazy"
                          className="aspect-[4/3] w-full rounded-sm object-cover"
                        />
                      ) : (
                        <div
                          key={i}
                          className="grid aspect-[4/3] w-full place-items-center rounded-sm border border-dashed border-border bg-muted/60 px-3 text-center text-[0.7rem] text-muted-foreground"
                        >
                          Photo placeholder
                        </div>
                      ),
                  )}
                </div>
              </div>

              <div className="mt-8">
                <p className="eyebrow text-muted-foreground">Certificate</p>
                {experience.certificateImage ? (
                  <img
                    src={experience.certificateImage}
                    alt={`Certificate for ${experience.role}`}
                    loading="lazy"
                    className="mt-3 w-full rounded-sm border border-border object-cover"
                  />
                ) : (
                  <div className="mt-3 grid aspect-[4/3] place-items-center rounded-sm border border-dashed border-border bg-muted/60 text-[0.7rem] text-muted-foreground">
                    Certificate image placeholder
                  </div>
                )}
              </div>

              <div className="mt-8">
                <p className="eyebrow text-muted-foreground">Highlights</p>
                <ul className="mt-3 space-y-3 text-sm leading-relaxed text-foreground/80">
                  {experience.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-foreground/40" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="eyebrow text-muted-foreground">What I learned</p>
                <blockquote className="mt-3 font-serif text-lg leading-snug italic">
                  {experience.learned}
                </blockquote>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <ExternalRow
                  label="LinkedIn post"
                  href={experience.linkedInPost}
                  fallback="LinkedIn post link to be added"
                />
                <ExternalRow
                  label="Organization"
                  href={experience.organizationUrl}
                  fallback="Organization link to be added"
                />
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

function ExternalRow({
  label,
  href,
  fallback,
}: {
  label: string;
  href: string | null;
  fallback: string;
}) {
  if (!href) {
    return (
      <p className="flex items-center justify-between rounded-sm border border-dashed border-border px-4 py-3 text-xs text-muted-foreground">
        <span>{label}</span>
        <span>{fallback}</span>
      </p>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between rounded-sm border border-border px-4 py-3 text-sm transition-colors hover:bg-muted"
    >
      <span>{label}</span>
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}
