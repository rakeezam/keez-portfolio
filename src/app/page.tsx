import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Work } from "@/components/sections/work";
import { Skills } from "@/components/sections/skills";
import { Services } from "@/components/sections/services";
import { Achievements } from "@/components/sections/achievements";
import { Education } from "@/components/sections/education";
import { Hobbies } from "@/components/sections/hobbies";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Services />
        <Achievements />
        <Education />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
