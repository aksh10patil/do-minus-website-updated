import HeroSection from "@/public/components/ui/Hero";
import PhilosophySection from "@/public/components/ui/Philosophy";
import OurSanctuaries from "@/public/components/ui/OurSanctuaries";
import CuratedImmersion from "@/public/components/ui/CuratedImmersion";
import Footer from "@/public/components/ui/Footer";
export default function Home() {
  return (
    <main className="relative bg-[#050505]">
      {/* Hero Wrapper */}
      <div className="sticky top-0 h-[100dvh] w-full z-0 overflow-hidden">
        <HeroSection />
      </div>

      {/* Philosophy Wrapper */}
      <div className="sticky top-0 h-[100dvh] w-full z-10 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        <PhilosophySection />
      </div>

      {/* Sanctuaries Wrapper */}
      <div className="sticky top-0 h-[100dvh] w-full z-20 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        <OurSanctuaries />
      </div>

      {/* Immersion Wrapper */}
      <div className="sticky top-0 h-[100dvh] w-full z-30 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        <CuratedImmersion />
      </div>

      {/* Footer Wrapper */}
      <div className="relative w-full z-40 bg-[#050505] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        <Footer />
      </div>
    </main>
  );
}
