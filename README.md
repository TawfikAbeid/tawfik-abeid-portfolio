# Tawfik Abeid Portfolio

Redesign my existing personal website into a highly distinctive, editorial portfolio for Tawfik Abeid.

This must feel like a premium personal story and career archive — not a generic AI portfolio, not a corporate landing page, and not a template.

Design inspiration:
- Draw inspiration from premium editorial one-page portfolios: immersive full-width photography, calm whitespace, strong typography, quiet confidence, and a chronological story.
- Take interaction inspiration from ChatGPT/OpenAI product design: refined micro-interactions, smooth transitions, subtle motion, clean UI rhythm, elegant hover states, and excellent responsiveness.
- Do NOT copy OpenAI or ChatGPT branding, logos, colors, interface elements, or wording.
- Do NOT use AI-related graphics, robots, glowing gradients, floating blobs, glassmorphism overload, generic dashboard cards, or fake metrics.

Visual identity:
- Default background: warm off-white / soft ivory (#F6F4F0).
- Main ink: deep charcoal (#1C1C1A).
- Accent: muted midnight blue (#18324B).
- Secondary accent: soft powder blue (#DCECF0), used carefully for the experience timeline.
- Use a subtle paper grain or light editorial texture in selected sections only.
- Typography: elegant high-contrast serif for major headlines and a clean modern sans-serif for interface text and body copy.
- Large typography, generous whitespace, thin lines, restrained rounded corners.
- The website should feel human, cultivated, thoughtful, international, and credible.

Structure:

1. Minimal sticky navigation
- Left: “TAWFIK ABEID”
- Right: About, Journey, Credentials, Gallery, Contact
- Include a small “Download CV” button.
- Navigation should become a subtle translucent ivory bar on scroll.

2. Immersive hero
- Use one of my professional portrait images as a full-bleed editorial hero image.
- Use a subtle dark overlay only if needed for text readability.
- Include:
  Tawfik Abeid
  Law Student · Community Leader · Program & Operations Intern
  “Building through law, leadership, and meaningful collaboration.”
  Giza, Egypt
- CTAs:
  Explore My Journey
  Download CV
- Add a subtle animated downward arrow or line at the bottom.
- Use motion only on page load: slow image reveal, elegant text fade, and one gentle parallax effect. Never make it flashy.

3. Editorial “About” section
- White / ivory section with a circular professional portrait.
- Large headline: “A focused start, built through people, purpose, and progress.”
- Write concise copy based on this:
  Tawfik is a fourth-year LLB candidate at Cairo University, expected to graduate in 2026. He combines legal training with international leadership programs, community leadership, program operations, customer-facing experience, and event coordination.
- Use a 2-column editorial layout, not feature cards.

4. “Selected affiliations and experiences” section
- Use text-based organization names only unless I personally upload approved logos.
- Include: Cairo University Faculty of Law, Aspire Institute, CIB Egypt, EG BANK, iCareer, Soliya, International Institute of Humanitarian Law Sanremo, RiseUp Summit, Harvard Alumni Summit MEA, Career 180, USAM Innovation Fund.
- Do not imply employment where the role was an internship, volunteer role, or learning program.
- Add a quiet horizontal marquee or slow ticker only if it remains elegant and accessible.

5. Career journey timeline
- This is the core section.
- Use a vertical timeline on a powder-blue background, inspired by premium editorial CV layouts.
- Every experience has an expandable entry with:
  - date
  - role title
  - organization
  - 2–3 concise achievement bullets
  - a thumbnail image placeholder
  - “View proof” button
- When clicked, open a beautiful side panel or modal containing:
  - large image gallery
  - certificate image placeholder
  - LinkedIn post link
  - external organization link
  - short reflection: “What I learned”
- All external links must open in a new tab.
- Create a reusable ExperienceDetailModal component and store the content in one easy-to-edit data file.

Use these experiences:
- Community Leader — Giza | Aspire Institute | Volunteer | Apr 2026–Present
- Intern — Program Management & Operations | RAISE Summit / USAM Innovation Fund | Apr 2026–Present
- Speaker Liaison | Harvard Alumni Summit MEA, Grand Egyptian Museum | Jan 2026
- Satellite Team Volunteer | RiseUp Summit 2026 | Jan–Feb 2026
- Community & Domain Leader | Aspire Institute | Oct 2025–Jan 2026
- Exhibition Team Member | Career 180, Her Mark Expo | Oct 2025
- Workshops Team Volunteer | RiseUp Summit 2025 | May 2025
- Virtual Exchange Participant | Soliya Global Circles | 2025 and 2026
- CIB Summer Internship | Commercial International Bank Egypt | Aug 2024
- Sales & Career Development Trainee | iCareer and EG BANK | Jul 2024
- Aspire Leaders Program Fellow | Aspire Institute | Apr–Aug 2024
- Customer Service Representative | A Plus, Egypt | May 2014–Sep 2018

6. Credentials archive
- Present certifications in an elegant visual archive, not a conventional grid.
- Each certificate should have:
  certificate image placeholder, title, issuer, date, and a “View Credential” link.
- Include:
  Aspire Leaders Program Certificate of Completion
  Aspire Institute Certificate of Service
  Forced Displacement Course — International Institute of Humanitarian Law Sanremo
  Soliya Global Circles
  AI Career Essentials — ALX Africa
  Data Literacy in Practice — SAS
  Data Literacy Essential — SAS
  MINT Ambassador — iCareer x EG BANK
  Introduction to Blockchain Technology — EYouth
- Add category filtering: Leadership, Legal & International, Data & AI, Banking & Professional Development.
- Use placeholders for the actual certificate images and links that I will add later.

7. Visual gallery
- Make a curated, masonry-style gallery for my event photos, certificates, professional portraits, and community activities.
- Include a lightbox on click.
- Use only photos I upload; do not use stock photography.
- Each image should optionally show a short caption and a related external link.

8. Skills section
- Minimal and editorial, with no percentage bars.
- Legal & Analytical: Legal Research, Case Analysis, Contract Law, Civil Procedure, Legal Writing, Critical Thinking
- Leadership & Operations: Community Building, Event Management, Project Planning, Team Coordination, Stakeholder Communication
- Professional: Customer Service, Presentation Skills, Personal Branding, Research, Google Workspace, Problem Solving
- Languages: Arabic — Native; English — B1, actively developing toward B2+

9. Contact section
- Dark charcoal section with an oversized serif heading:
  “Let’s build meaningful work together.”
- Email: tawfiqabeid@gmail.com
- Phone: +20 112 230 6544
- LinkedIn: https://www.linkedin.com/in/tawfikabeid/
- Location: Giza, Egypt
- Add a simple email contact form.

10. Content and integrity rules
- Never invent achievements, dates, employer relationships, testimonials, outcomes, statistics, or affiliations.
- Label volunteer, internship, training, and leadership roles accurately.
- Do not add a blog, pricing section, fake testimonials, or generic “trusted by” logos.
- Keep all text concise, polished, and human.
- Build the full responsive website with clean reusable components and accessible HTML.
- Optimize image loading and create clear placeholders for every image, certificate URL, LinkedIn post URL, and organization URL.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b2a93875-97e7-4966-ad39-8feaa6c757bd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
