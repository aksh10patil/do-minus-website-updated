
import Footer from "@/public/components/ui/Footer";
import StoryGrid from "@/public/components/ui/StoryGrid";

import PropertyMapB from "@/public/components/ui-b/PropertyMapB";
import Navbar from "@/public/components/ui-b/Navbar";
export default function Home() {
    return (
        <main className="relative flex flex-col">

            <div className="relative w-full overflow-hidden">
                <Navbar />
                <PropertyMapB />
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
