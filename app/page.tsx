import HeroSection from "@/public/components/ui/Hero";
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
        <StoryGrid />
      </div>

      <div className="relative w-full z-10 overflow-hidden bg-[#050505]">
        <PropertyMap />
      </div>

      <div className="relative w-full z-20 bg-[#050505]">
        <Footer />
      </div>
    </main>
  );
}
