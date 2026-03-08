"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

// --- Types ---
interface GridItem {
  id: string;
  title: string;
  imageUrl: string;
  delay: number;
}

// --- Mock Data ---
const gridData = {
  left: {
    id: "inner-sanctum",
    title: "The Inner Sanctum",
    imageUrl: "/Do-Minus/Ca_Polete/ca_polete_v3.avif", // Rustic bedroom
    delay: 0.2,
  },
  middle: {
    id: "nature",
    title: "The Nature",
    imageUrl: "/Do-Minus/Ca_Spontoi/ca_spontoi_1.avif", // Lake/forest
    delay: 0.4,
  },
  rightTop: {
    id: "architecture",
    title: "Architecture",
    imageUrl: "/Do-Minus/Ca_Pedrot/ca_pedrot_6.avif", // Blueprint/sketch
    delay: 0.6,
  },
  rightBottom: {
    id: "dining",
    title: "Dining", // Fixed spelling from "Dinning" for professionalism, but easily changeable!
    imageUrl: "/Do-Minus/Ca_Negra/ca_negra_v2.avif", // Rustic dining/fireplace
    delay: 0.8,
  },
};

// --- Animation Variants ---
const textFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
  },
};

const staggerHeader: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const imageReveal = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay, ease: [0.2, 0.65, 0.3, 0.9] },
  },
});

const imageInnerScale = (delay: number): Variants => ({
  hidden: { scale: 1.15 },
  visible: {
    scale: 1,
    transition: { duration: 1.6, delay, ease: [0.2, 0.65, 0.3, 0.9] },
  },
});

// --- Reusable Card Component ---
const SanctuaryCard = ({ item }: { item: GridItem }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={imageReveal(item.delay)}
    className="relative w-full h-full overflow-hidden group cursor-pointer rounded-sm"
  >
    <motion.img
      variants={imageInnerScale(item.delay)}
      src={item.imageUrl}
      alt={item.title}
      className="object-cover w-full h-full transition-transform duration-[2000ms] ease-out group-hover:scale-110"
    />
    {/* Gradient Overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/0 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

    <h3 className="absolute top-6 left-6 text-xl md:text-2xl font-bold tracking-wide text-white drop-shadow-lg z-10">
      {item.title}
    </h3>
  </motion.div>
);


export default function OurSanctuaries() {
  return (
    <section
      className="relative w-full min-h-screen bg-[#0a0a0a] text-[#f4f4f0] py-20 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center"
      style={{ fontFamily: '"Courier New", Courier, monospace' }}
    >
      {/* Header Section */}
      <motion.div
        className="flex flex-col items-center mb-8 md:mb-10 text-center z-10 shrink-0"
        variants={staggerHeader}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p
          variants={textFadeUp}
          className="text-[#bba371] text-xs md:text-sm tracking-[0.2em] font-bold mb-6 uppercase"
        >
          Our Sanctuaries
        </motion.p>

        <motion.h2
          variants={textFadeUp}
          className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-light mb-6"
        >
          The Architecture of Stillness
        </motion.h2>

        <motion.a
          variants={textFadeUp}
          href="#properties"
          className="text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-60 hover:opacity-100 transition-opacity cursor-pointer pb-1 border-b border-transparent hover:border-[#bba371]"
        >
          Visit All Properties
        </motion.a>
      </motion.div>

      {/* Grid Layout */}
      <div className="w-full max-w-[70rem] h-[55vh] md:h-[60vh] lg:h-[65vh] min-h-[400px] flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0">

        {/* Left Column (Full Height) */}
        <div className="h-full w-[85vw] flex-shrink-0 md:w-auto md:flex-shrink snap-center">
          <SanctuaryCard item={gridData.left} />
        </div>

        {/* Middle Column (Full Height) */}
        <div className="h-full w-[85vw] flex-shrink-0 md:w-auto md:flex-shrink snap-center">
          <SanctuaryCard item={gridData.middle} />
        </div>

        {/* Right Column (Split Height) */}
        <div className="h-full w-[85vw] flex-shrink-0 md:w-auto md:flex-shrink snap-center flex flex-col gap-4 md:gap-6 pb-2 md:pb-0">
          <div className="flex-1 min-h-0">
            <SanctuaryCard item={gridData.rightTop} />
          </div>
          <div className="flex-1 min-h-0">
            <SanctuaryCard item={gridData.rightBottom} />
          </div>
        </div>

      </div>
    </section>
  );
}