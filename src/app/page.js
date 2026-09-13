import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Techstack from "./components/sections/Techstack";
import Projects from "./components/sections/Projects";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><Techstack /></Reveal>
      <Projects />
      <Achievements />
      <Reveal><Contact /></Reveal>
    </>
  );
}
