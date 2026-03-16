"use client";

import { motion } from "framer-motion";

export default function StoryGrid() {
    return (
        <section
            className="relative w-full min-h-[100dvh] bg-[#1A1A1A] text-[#a3a3a3] pt-24 md:pt-70 pb-6 md:pb-12 px-6 md:px-12 lg:px-40 flex justify-center items-center"
            style={{ fontFamily: '"Courier New", Courier, monospace' }}
        >
            <div className="max-w-[75rem] w-full mx-auto flex flex-col gap-6 md:gap-10">

                {/* Top Text Section */}
                <div className="flex w-full justify-end shrink-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full md:w-[70%] lg:w-[45%] text-sm md:text-lg leading-normal tracking-wide text-white/70"
                    >
                        <p className="text-[#f4f4f0] text-sm md:text-base leading-snug">
                            Old stone, warm wood, silence.<br />
                            A curated collection of boutique guesthouses in Ticino. For lovers of design, nature, and wellness. Plan your stay and let time slow down.<br />
                            This is Do-Minus.
                        </p>
                    </motion.div>
                </div>

                {/* 3-Box Layout */}
                <div className="w-full flex mt-20 flex-col gap-3 md:gap-4 relative z-10">

                    {/* Top Row: Experiences & Properties */}
                    <div className="w-full flex flex-col md:flex-row gap-3 md:gap-4 min-h-[50vh] md:min-h-0 md:h-[400px] lg:h-[480px] shrink-0">

                        {/* Top Left: Experiences */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full md:w-[40%] h-full relative overflow-hidden group flex items-center justify-center shrink-0"
                        >
                            <div className="absolute inset-0 bg-transparent group-hover:bg-[#050505]/40 z-10 transition-colors duration-[0.5s]" />
                            <img
                                src="/Do-Minus/Ca_Pedrot/ca_pedrot_5.avif"
                                alt="experiences"
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-[0.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:opacity-70 group-hover:grayscale-[0.2]"
                            />
                            {/* Overlay Text */}
                            <div className="relative z-20 text-[#f4f4f0] text-xl md:text-2xl tracking-[0.2em] font-light pointer-events-none drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-[0.5s]">
                                experiences
                            </div>
                        </motion.div>

                        {/* Top Right: Properties */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full md:w-[60%] h-full relative overflow-hidden group flex items-center justify-center shrink-0"
                        >
                            <div className="absolute inset-0 bg-transparent group-hover:bg-[#050505]/40 z-10 transition-colors duration-[0.5s]" />
                            <img
                                src="/Do-Minus/Ca_Negra/ca_negra_v1.avif"
                                alt="properties"
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-[0.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:opacity-70 group-hover:grayscale-[0.2]"
                            />
                            {/* Overlay Text */}
                            <div className="relative z-20 text-[#f4f4f0] text-xl md:text-2xl tracking-[0.2em] font-light pointer-events-none drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-[0.5s]">
                                properties
                            </div>
                        </motion.div>

                    </div>

                    {/* Bottom Row: Philosophy */}
                    <div className="w-full min-h-[30vh] md:min-h-0 md:h-[300px] lg:h-[360px] shrink-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full h-full relative overflow-hidden group flex items-center justify-center shrink-0"
                        >
                            <div className="absolute inset-0 bg-transparent group-hover:bg-[#050505]/40 z-10 transition-colors duration-[0.5s]" />
                            <img
                                src="/Do-Minus/Ca_Pedrot/ca_pedrot_2.avif"
                                alt="the philosophy"
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-[0.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:opacity-70 group-hover:grayscale-[0.2]"
                            />
                            {/* Overlay Text */}
                            <div className="relative z-20 text-[#f4f4f0] text-xl md:text-2xl tracking-[0.2em] font-light pointer-events-none drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-[0.5s]">
                                the philosophy
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
