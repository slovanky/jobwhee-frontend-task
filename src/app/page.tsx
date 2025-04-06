import Discover from "@/components/Discover/Discover";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <div className="w-full h-[17px]"></div>
      <Hero />
      <div className="w-full h-[70px] sm:h-[128px]"></div>
      <Discover />
      <div className="w-full h-[120px]"></div>
    </div>
  );
}
