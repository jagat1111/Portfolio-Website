"use client";

import About from "@/common/components/sections/about/index";
import Contact from "@/common/components/sections/contact/index";
import Experience from "@/common/components/sections/experience/index";
import Hero from "@/common/components/sections/hero/index";
import Projects from "@/common/components/sections/projects/index";
import Skills from "@/common/components/sections/skills/index";
import Certificate from "@/common/components/sections/Certificate/Certificate";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-0">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Certificate />
      <Contact />
    </main>
  );
}
