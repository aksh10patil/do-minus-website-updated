
import Footer from "@/public/components/ui/Footer";
import StoryGrid from "@/public/components/ui/StoryGrid";


import PropertyMapC from "@/public/components/ui-b/PropertyMapC";
import Navbar from "@/public/components/ui-b/Navbar";
export default function Home() {
    return (
        <main className="relative flex flex-col">
            <Navbar />
            <div className="relative w-full z-10 overflow-hidden">
                <PropertyMapC />
            </div>


            <div className="relative w-full z-10 overflow-hidden">
                <StoryGrid />
            </div>

            <div className="relative w-full z-20">
                <Footer />
            </div>
        </main>
    );
}
