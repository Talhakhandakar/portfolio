import Image from "next/image";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Exp } from "@/components/exp";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Exp />
      <div className="pb-24" />
    </div>
  );
}
