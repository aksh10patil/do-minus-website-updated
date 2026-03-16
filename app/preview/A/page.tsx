"use client";

import { useState } from "react";
import Footer from "@/public/components/ui/Footer";
import StoryGrid from "@/public/components/ui/StoryGrid";

import PropertyMapB from "@/public/components/ui-b/PropertyMapB";
import Navbar from "@/public/components/ui-b/Navbar";
import Preloader from "@/public/components/ui-b/Preloader";

export default function Home() {
    const [propertyHovered, setPropertyHovered] = useState(false);
    const [isReady, setIsReady] = useState(false);

    return (
        <>
            {/* Preloader — sits on top until images are loaded */}
            <Preloader onComplete={() => setIsReady(true)} />

            {/* Page content — fades in once preloader is done */}
            <main
                className="relative flex flex-col transition-opacity duration-700"
                style={{ opacity: isReady ? 1 : 0 }}
            >
                <div className="relative w-full overflow-hidden">
                    <Navbar hidden={propertyHovered} />
                    <PropertyMapB onHoverChange={setPropertyHovered} preloaderDone={isReady} />
                </div>

                <div className="relative w-full z-10 overflow-hidden">
                    <StoryGrid />
                </div>

                <div className="relative w-full z-20">
                    <Footer />
                </div>
            </main>
        </>
    );
}
