import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Affiliations } from "@/components/site/Affiliations";
import { Journey } from "@/components/site/Journey";
import { Credentials } from "@/components/site/Credentials";
import { Gallery } from "@/components/site/Gallery";
import { Skills } from "@/components/site/Skills";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Tawfik Abeid — Law Student & Community Leader";
const description =
  "Editorial portfolio of Tawfik Abeid: LLB candidate at Cairo University, community leader, and program & operations intern based in Giza, Egypt.";

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
      <Affiliations />
      <Journey />
      <Credentials />
      <Gallery />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
