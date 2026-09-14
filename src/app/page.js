import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import WhatIBuild from "./components/sections/WhatIBuild";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Achievements from "./components/sections/Achievements";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><WhatIBuild /></Reveal>
      <Reveal><Experience /></Reveal>
      <Projects />
      <Achievements />
      <Reveal><Education /></Reveal>
      <Reveal><Contact /></Reveal>
    </>
  );
}
