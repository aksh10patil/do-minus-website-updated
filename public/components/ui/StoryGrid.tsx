"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StoryGrid() {
    return (
        <section
            className="relative w-full h-[100dvh] bg-[#050505] text-[#a3a3a3] pt-24 md:pt-28 pb-6 md:pb-12 px-6 md:px-12 lg:px-20 flex justify-center items-center overflow-hidden"
            style={{ fontFamily: '"Courier New", Courier, monospace' }}
        >
            <div className="max-w-[75rem] w-full h-full max-h-[900px] mx-auto flex flex-col gap-6 md:gap-10">

                {/* Top Text Section */}
                <div className="flex w-full justify-end shrink-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full md:w-[70%] lg:w-[45%] text-xs md:text-sm leading-relaxed tracking-wider text-white/70"
                    >
                        <p className="mb-4">
                            Old <span className="text-white">stone</span>, warm{" "}
                            <span className="text-white">wood</span>, silence.
                        </p>

                        <p className="mb-4">
                            Five <span className="text-white">Ticinese houses</span> rescued from time
                            and restored with the care they deserve, furnished with{" "}
                            <span className="text-white">vintage design pieces</span>, surrounded by{" "}
                            <span className="text-white">nature</span> that asks nothing of you. A{" "}
                            <span className="text-white">mountain cottage</span> at 1,390 metres. A{" "}
                            <span className="text-white">village home</span> steps from a waterfall. A{" "}
                            <span className="text-white">sailboat</span> rocking on Lago Maggiore.
                        </p>

                        <p>
                            This is <span className="text-[#bba371] font-bold tracking-wider">Do-Minus</span>.
                        </p>
                    </motion.div>
                </div>

                {/* Masonry-like Grid Section */}
                <div className="w-full flex-1 flex flex-row md:flex-col gap-3 md:gap-4 min-h-0 overflow-x-auto overflow-y-hidden md:overflow-hidden snap-x snap-mandatory md:snap-none scrollbar-hide pb-4 md:pb-0 relative z-10">

                    {/* Top Row (Desktop) / Left Slide (Mobile) */}
                    <div className="w-[85vw] md:w-full flex-shrink-0 md:flex-shrink flex flex-col md:flex-row gap-3 md:gap-4 md:flex-[1.2] min-h-0 snap-center md:snap-align-none">
                        {/* Image 1 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full md:w-[35%] h-full relative overflow-hidden group shrink-0 md:shrink flex-1 md:flex-none"
                        >
                            <img
                                src="/Do-Minus/Ca_Pedrot/ca_pedrot.avif"
                                alt="Vintage interior with warm light"
                                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                            />
                        </motion.div>

                        {/* Image 2 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full md:w-[65%] h-full relative overflow-hidden group shrink-0 md:shrink flex-1 md:flex-none"
                        >
                            <img
                                src="/Do-Minus/Ca_Pedrot/ca_pedrot_5.avif"
                                alt="Village home exterior with roses"
                                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                            />
                        </motion.div>
                    </div>

                    {/* Bottom Row (Desktop) / Right Slide (Mobile) */}
                    <div className="w-[85vw] md:w-full flex-shrink-0 md:flex-shrink flex flex-col md:flex-row gap-3 md:gap-4 md:flex-1 min-h-0 snap-center md:snap-align-none">
                        {/* Image 3 with Text Overlay */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full md:w-[60%] h-full relative overflow-hidden group flex items-center justify-center shrink-0 md:shrink flex-1 md:flex-none"
                        >
                            <div className="absolute inset-0 bg-[#050505]/40 z-10 group-hover:bg-[#050505]/20 transition-colors duration-[1.5s]" />
                            <img
                                src="/Do-Minus/Ca_Pedrot/ca_pedrot_2.avif"
                                alt="Coffee and glasses on a book"
                                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] grayscale-[0.2]"
                            />
                            {/* Overlay Text */}
                            <div className="relative z-20 text-[#f4f4f0] text-xl md:text-2xl tracking-[0.2em] font-light pointer-events-none drop-shadow-md">
                                the philosophy
                            </div>
                        </motion.div>

                        {/* Image 4 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full md:w-[40%] h-full relative overflow-hidden group shrink-0 md:shrink flex-1 md:flex-none"
                        >
                            <img
                                src="/Do-Minus/Ca_Negra/ca_negra_v1.avif"
                                alt="Architecture exterior at dusk"
                                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
