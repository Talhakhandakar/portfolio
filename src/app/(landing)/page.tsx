import Image from "next/image";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Exp } from "@/components/exp";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Exp />
      <Skills />
      <div className="pb-24" />
    </div>
  );
}
