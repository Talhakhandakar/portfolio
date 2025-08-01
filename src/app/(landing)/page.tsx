import Image from "next/image";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <div className="pb-24" />
    </div>
  );
}
