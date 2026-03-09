import HeroSection from "@/public/components/ui/Hero";
import PhilosophySection from "@/public/components/ui/Philosophy";
import OurSanctuaries from "@/public/components/ui/OurSanctuaries";
import CuratedImmersion from "@/public/components/ui/CuratedImmersion";
import Footer from "@/public/components/ui/Footer";
import StoryGrid from "@/public/components/ui/StoryGrid";
import PropertyMap from "@/public/components/ui/PropertyMap";

export default function Home() {
  return (
    <main className="relative bg-[#050505] flex flex-col">
      <div className="relative w-full h-[100dvh] z-0 overflow-hidden">
        <HeroSection />
      </div>

      <div className="relative w-full z-10 overflow-hidden">
        <PhilosophySection />
      </div>

      <div className="relative w-full z-10 overflow-hidden">
        <StoryGrid />
      </div>

      <div className="relative w-full z-10 overflow-hidden">
        <OurSanctuaries />
      </div>

      <div className="relative w-full z-10 overflow-hidden bg-[#050505]">
        <PropertyMap />
      </div>

      <div className="relative w-full z-10 overflow-hidden">
        <CuratedImmersion />
      </div>

      <div className="relative w-full z-20 bg-[#050505]">
        <Footer />
      </div>
    </main>
  );
}
