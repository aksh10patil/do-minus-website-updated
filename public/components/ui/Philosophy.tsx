"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// --- Mock Data ---
const images = {
    left: [
        "/Do-Minus/Ca_Pedrot/ca_pedrot_v1.avif",
        "/Do-Minus/Ca_Pedrot/ca_pedrot_5.avif",
        "/Do-Minus/Ca_Pedrot/ca_pedrot.avif",
    ],
    center: [
        "/Do-Minus/Ca_Pedrot/ca_pedrot_6.avif",
        "/Do-Minus/Ca_Pedrot/ca_pedrot_2.avif",
        "/Do-Minus/Ca_Pedrot/ca_pedrot_7.avif",
    ],
    right: [
        "/Do-Minus/Ca_Pedrot/ca_pedrot_v2.avif",
        "/Do-Minus/Ca_Pedrot/ca_pedrot_3.avif",
        "/Do-Minus/Ca_Pedrot/ca_pedrot_4.avif",
    ],
};

// --- Animation Variants ---
const textFadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    },
};

const lineReveal: Variants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
        height: 64, // extended line
        opacity: 0.5,
        transition: { duration: 1.2, delay: 0.4, ease: "easeInOut" }
    },
};

const imageReveal = (delay: number): Variants => ({
    hidden: { opacity: 0, y: 80 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] },
    },
});

const SlideshowImage = ({ imagesArr, intervalOffset = 0 }: { imagesArr: string[], intervalOffset?: number }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % imagesArr.length);
        }, 5000 + intervalOffset); // 5s base interval with offset for staggering
        return () => clearInterval(timer);
    }, [imagesArr.length, intervalOffset]);

    return (
        <div className="w-full h-full relative overflow-hidden group">
            <AnimatePresence mode="popLayout">
                <motion.img
                    key={index}
                    src={imagesArr[index]}
                    initial={{ opacity: 0, scale: 1.15 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    alt="Architecture view"
                    className="absolute inset-0 object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none" />
        </div>
    );
};

export default function PhilosophySection() {
    return (
        <section
            className="relative w-full min-h-screen bg-[#050505] text-[#f4f4f0] py-20 px-6 md:px-12 lg:px-20 overflow-hidden flex flex-col items-center justify-center"
            style={{ fontFamily: '"Courier New", Courier, monospace' }}
        >
            {/* Top Header Section */}
            <motion.div
                className="flex flex-col items-center mb-8 md:mb-16 z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.p
                    variants={textFadeUp}
                    className="text-[#bba371] text-xs md:text-sm tracking-[0.4em] font-bold mb-8 uppercase"
                >
                    Philosophy
                </motion.p>

                <motion.h2
                    variants={textFadeUp}
                    className="text-xl md:text-3xl tracking-[0.25em] font-medium"
                >
                    TEXTURE | SPACE | NATURE
                </motion.h2>

            </motion.div>

            {/* Images Grid Showcase - fixed paddings between images */}
            <div className="w-full max-w-[75rem] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-6 px-4">

                {/* LEFT IMAGE */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={imageReveal(0.3)}
                    className="hidden md:block w-[85%] md:w-[26%] aspect-[2/3] relative order-2 md:order-1"
                >
                    <SlideshowImage imagesArr={images.left} intervalOffset={0} />
                </motion.div>

                {/* CENTER IMAGE & QUOTE */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={imageReveal(0)}
                    className="w-full md:w-[36%] flex flex-col items-center order-1 md:order-2"
                >
                    <div className="w-[60%] md:w-[95%] aspect-[3/4] relative mb-6 md:mb-10 overflow-hidden shadow-2xl">
                        <SlideshowImage imagesArr={images.center} intervalOffset={1000} />
                    </div>

                    <motion.div variants={textFadeUp} className="relative w-full px-6 flex justify-center pb-8 md:pb-0">
                        <span className="absolute -top-6 -left-0 md:-left-2 text-[5rem] md:text-[6rem] leading-none text-[#bba371]/20 font-serif">"</span>
                        <p className="text-center text-base md:text-xl italic leading-relaxed tracking-wide opacity-90 mt-2">
                            We do not add; We remove until <br className="hidden md:block" />
                            only the <span className="font-bold text-[#bba371]">essence</span> remains.
                        </p>
                    </motion.div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={imageReveal(0.6)}
                    className="hidden md:block w-[85%] md:w-[26%] aspect-[2/3] relative order-3 mt-4 md:mt-12"
                >
                    <SlideshowImage imagesArr={images.right} intervalOffset={2000} />
                </motion.div>

            </div>

            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#bba371]/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
