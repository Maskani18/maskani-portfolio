import { About } from "@/sections/about/About";
import { Colophon } from "@/sections/colophon/Colophon";
import { Contact } from "@/sections/contact/Contact";
import { Education } from "@/sections/education/Education";
import { Experience } from "@/sections/experience/Experience";
import { Hero } from "@/sections/hero/Hero";
import { Skills } from "@/sections/skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Colophon />
    </>
  );
}
