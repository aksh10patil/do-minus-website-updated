"use client";

import { useState } from "react";
import StoryGrid from "@/public/components/ui/StoryGrid";
import PropertyMapB from "@/public/components/ui-b/PropertyMapB";
import Preloader from "@/public/components/ui-b/Preloader";

export default function Home() {
  const [propertyHovered, setPropertyHovered] = useState(false);
  const [isReady, setIsReady] = useState(false);

  return (
    <>

      <Preloader onComplete={() => setIsReady(true)} />

      <main
        className="relative flex flex-col transition-opacity duration-700"
        style={{ opacity: isReady ? 1 : 0 }}
      >
        <div className="relative w-full overflow-hidden">
          <PropertyMapB onHoverChange={setPropertyHovered} preloaderDone={isReady} />
        </div>

        <div className="relative w-full z-10 overflow-hidden">
          <StoryGrid />
        </div>

      </main>
    </>
  );
}
