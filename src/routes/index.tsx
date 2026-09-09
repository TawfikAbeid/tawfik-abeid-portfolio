import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Affiliations } from "@/components/site/Affiliations";
import { Journey } from "@/components/site/Journey";
import { Education } from "@/components/site/Education";
import { Credentials } from "@/components/site/Credentials";
import { Gallery } from "@/components/site/Gallery";
import { Skills } from "@/components/site/Skills";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { PhotoBand } from "@/components/site/PhotoBand";
import { images } from "@/data/portfolio";

const title = "Tawfik Abeid | Law Graduate, Community Leader & Event Coordinator";
const description =
  "Personal site of Tawfik Abeid: Cairo University Law Graduate (LLB, Class of 2026), Aspire Community Leader for Giza, and event operations coordinator based in Giza, Egypt.";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="scroll-smooth">
      <Nav />
      <Hero />
      <About />
      <PhotoBand
        src={images.gem}
        alt="Looking out from the Grand Egyptian Museum toward the Giza pyramids"
        caption="Grand Egyptian Museum, Giza — January 2026"
      />
      <Journey />
      <Education />
      <Credentials />
      <Gallery />
      <Affiliations />
      <Skills />

      <Contact />
      <Footer />
    </main>
  );
}
