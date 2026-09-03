import { useState } from "react";
import { toast } from "sonner";
import { contact } from "@/data/portfolio";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    setSending(true);
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client with the message drafted.");
    setSending(false);
    form.reset();
  };

  return (
    <section id="contact" className="grain bg-ink text-background">
      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-16 px-5 py-24 md:grid-cols-2 md:px-10 md:py-36">
        <div>
          <p className="eyebrow text-background/50">Contact</p>
          <h2 className="mt-6 max-w-[16ch] text-[clamp(2.25rem,5.6vw,4.75rem)] leading-[1.02] tracking-[-0.02em]">
            Let’s build meaningful work together.
          </h2>

          <dl className="mt-14 space-y-6 text-sm">
            <div>
              <dt className="eyebrow text-background/45">Email</dt>
              <dd className="mt-2">
                <a href={`mailto:${contact.email}`} className="rule-link">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-background/45">Phone</dt>
              <dd className="mt-2">
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="rule-link">
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-background/45">LinkedIn</dt>
              <dd className="mt-2">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rule-link"
                >
                  linkedin.com/in/tawfikabeid
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-background/45">Location</dt>
              <dd className="mt-2">{contact.location}</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} className="space-y-6 md:pt-24">
          <Field label="Name" name="name" type="text" />
          <Field label="Email" name="email" type="email" />
          <div>
            <label htmlFor="message" className="eyebrow text-background/45">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-3 w-full resize-none border-b border-background/25 bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-background/35 focus:border-background"
              placeholder="A short note about what you have in mind."
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="rounded-sm bg-background px-6 py-3 text-sm text-foreground transition-colors duration-300 hover:bg-powder disabled:opacity-60"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type }: { label: string; name: string; type: string }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-background/45">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-3 w-full border-b border-background/25 bg-transparent pb-3 text-sm outline-none transition-colors focus:border-background"
      />
    </div>
  );
}
