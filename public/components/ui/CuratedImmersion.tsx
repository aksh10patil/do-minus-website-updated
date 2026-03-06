"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Mock Data ---
const immersionData = {
  spa: {
    subtitle: "DO-MINUS SPA",
    title: "Experience the Nature\nand mindfullnes",
    imageUrl: "/Do-Minus/Ca Spontoi/ca_spontoi_2.avif", // Spa/candles
    delay: 0.2,
  },
  dining: {
    subtitle: "DINING",
    title: "The Cuisine like never\nbefore",
    imageUrl: "/Do-Minus/Ca_Pedrot/ca_pedrot_4.avif", // Fine dining/wine
    delay: 0.4,
  },
  mountain: {
    subtitle: "SILENT TALES",
    title: "MOUNTAIN\nEXPEDITIONS",
    imageUrl: "/Do-Minus/Ca Negra/ca_negra_v1.avif", // Epic mountain
    delay: 0.6,
  }
};

// --- Animation Variants ---
const textFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
  },
};

const staggerHeader = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const imageReveal = (delay: number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay, ease: [0.2, 0.65, 0.3, 0.9] },
  },
});

const imageInnerScale = (delay: number) => ({
  hidden: { scale: 1.15 },
  visible: {
    scale: 1,
    transition: { duration: 1.6, delay, ease: [0.2, 0.65, 0.3, 0.9] },
  },
});

export default function CuratedImmersion() {
  return (
    <section
      className="relative w-full h-full bg-[#050505] text-[#f4f4f0] py-4 md:py-16 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden"
      style={{ fontFamily: '"Courier New", Courier, monospace' }}
    >
      {/* Header Section */}
      <motion.div
        className="flex flex-col items-center mb-6 md:mb-12 text-center z-10 shrink-0"
        variants={staggerHeader}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p
          variants={textFadeUp}
          className="text-[#bba371] text-xs md:text-sm tracking-[0.2em] font-bold mb-4 uppercase"
        >
          Beyond the Stay
        </motion.p>

        <motion.h2
          variants={textFadeUp}
          className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-light"
        >
          Curated Immersion
        </motion.h2>
      </motion.div>

      {/* Bento-style Layout */}
      <div className="w-full max-w-[1400px] flex-1 min-h-0 flex flex-col gap-4 md:gap-6">

        {/* Top Row: Spa (Left, Wider) & Dining (Right, Narrower) */}
        <div className="flex flex-row gap-4 md:gap-6 h-[45%] md:h-[50%]">

          {/* Spa Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={imageReveal(immersionData.spa.delay)}
            className="relative w-1/2 md:w-[65%] h-full overflow-hidden group cursor-pointer"
          >
            <motion.img
              variants={imageInnerScale(immersionData.spa.delay)}
              src={immersionData.spa.imageUrl}
              alt="Spa and Wellness"
              className="object-cover w-full h-full transition-transform duration-[2000ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10">
              <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-70 mb-2">
                {immersionData.spa.subtitle}
              </p>
              <h3 className="text-lg md:text-2xl font-bold tracking-wide whitespace-pre-line leading-snug">
                {immersionData.spa.title}
              </h3>
            </div>
          </motion.div>

          {/* Dining Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={imageReveal(immersionData.dining.delay)}
            className="relative w-1/2 md:w-[35%] h-full overflow-hidden group cursor-pointer"
          >
            <motion.img
              variants={imageInnerScale(immersionData.dining.delay)}
              src={immersionData.dining.imageUrl}
              alt="Fine Dining"
              className="object-cover w-full h-full transition-transform duration-[2000ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10">
              <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-70 mb-2">
                {immersionData.dining.subtitle}
              </p>
              <h3 className="text-lg md:text-xl font-bold tracking-wide whitespace-pre-line leading-snug">
                {immersionData.dining.title}
              </h3>
            </div>
          </motion.div>

        </div>

        {/* Bottom Row: Full Width Mountain Expedition */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={imageReveal(immersionData.mountain.delay)}
          className="relative w-full flex-1 md:h-[50%] overflow-hidden group flex items-center justify-center cursor-pointer"
        >
          <motion.img
            variants={imageInnerScale(immersionData.mountain.delay)}
            src={immersionData.mountain.imageUrl}
            alt="Mountain Expeditions"
            className="absolute inset-0 object-cover w-full h-full transition-transform duration-[3000ms] ease-out group-hover:scale-105"
          />
          {/* Centered radial/linear gradient for the center text to pop */}
          <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/40" />

          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-90 mb-4 drop-shadow-md">
              {immersionData.mountain.subtitle}
            </p>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest whitespace-pre-line leading-tight mb-8 drop-shadow-xl">
              {immersionData.mountain.title}
            </h3>

            <button className="bg-white text-black px-8 py-3 text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#bba371] hover:text-white transition-colors duration-300">
              Discover Now
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}