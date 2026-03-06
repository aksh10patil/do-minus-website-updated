"use client";

import React from "react";
import { motion } from "framer-motion";

const textFadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    },
};

const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
};

const lineReveal: any = {
    hidden: { width: 0, opacity: 0 },
    visible: {
        width: "100%",
        opacity: 0.2,
        transition: { duration: 1.5, delay: 0.3, ease: "easeInOut" }
    },
};

export default function Footer() {
    return (
        <footer
            className="relative w-full bg-[#050505] text-[#f4f4f0] pt-24 pb-12 md:pt-32 px-6 md:px-12 lg:px-20 flex flex-col items-center overflow-hidden"
            style={{ fontFamily: '"Courier New", Courier, monospace' }}
        >
            <div className="w-full max-w-[1400px] flex flex-col md:flex-row justify-between mb-16 md:mb-24 gap-12 md:gap-8 z-10">
                {/* Left Section - Brand */}
                <motion.div
                    className="flex flex-col md:w-1/3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.h2
                        variants={textFadeUp}
                        className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-light mb-6"
                    >
                        Do-Minus
                    </motion.h2>
                    <motion.p
                        variants={textFadeUp}
                        className="text-sm md:text-base leading-loose opacity-70 mb-8 max-w-sm"
                    >
                        A curated collection of architectural retreats and thermal spas designed around the philosophy of subtraction.
                    </motion.p>
                    <motion.a
                        variants={textFadeUp}
                        href="mailto:discover@do-minus.com"
                        className="text-[#bba371] text-xs md:text-sm tracking-[0.2em] font-bold uppercase transition-opacity hover:opacity-70 w-fit pb-1 border-b border-transparent hover:border-[#bba371]"
                    >
                        discover@do-minus.com
                    </motion.a>
                </motion.div>

                {/* Middle Section - Links */}
                <motion.div
                    className="flex flex-col md:w-1/6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.h3 variants={textFadeUp} className="text-sm tracking-[0.3em] font-bold mb-6 opacity-50 uppercase">Explore</motion.h3>
                    <ul className="flex flex-col space-y-4 text-sm tracking-wide opacity-80">
                        {["Sanctuaries", "Philosophy", "Region", "Experiences", "Contact"].map((link) => (
                            <motion.li key={link} variants={textFadeUp}>
                                <a href={`#${link.toLowerCase()}`} className="hover:text-[#bba371] transition-colors">{link}</a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Right Section - Newsletter */}
                <motion.div
                    className="flex flex-col md:w-1/3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.h3 variants={textFadeUp} className="text-sm tracking-[0.3em] font-bold mb-6 opacity-50 uppercase">Newsletter</motion.h3>
                    <motion.p variants={textFadeUp} className="text-sm leading-relaxed opacity-70 mb-6">
                        Subscribe to receive exclusive invitations and updates on our latest sanctuaries.
                    </motion.p>
                    <motion.form variants={textFadeUp} className="flex flex-col relative" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="YOUR EMAIL"
                            className="bg-transparent border-b border-white/20 pb-2 text-sm outline-none focus:border-[#bba371] transition-colors placeholder:text-white/30 tracking-widest text-white uppercase"
                        />
                        <button
                            type="submit"
                            className="absolute right-0 bottom-2 text-xs tracking-[0.2em] uppercase font-bold text-[#bba371] hover:text-white transition-colors"
                        >
                            Subscribe
                        </button>
                    </motion.form>
                </motion.div>
            </div>

            {/* Divider */}
            <motion.div
                variants={lineReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full h-[1px] bg-white max-w-[1400px] mb-8 z-10"
            />

            {/* Bottom Legal / Socials */}
            <motion.div
                className="w-full max-w-[1400px] flex flex-col md:flex-row justify-between items-center text-xs opacity-50 tracking-wider space-y-4 md:space-y-0 z-10"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.p variants={textFadeUp}>
                    © {new Date().getFullYear()} Do-Minus Retreats. All rights reserved.
                </motion.p>

                <motion.div variants={textFadeUp} className="flex space-x-6 uppercase tracking-[0.2em]">
                    <a href="#" className="hover:text-[#bba371] transition-colors">Instagram</a>
                    <a href="#" className="hover:text-[#bba371] transition-colors">Facebook</a>
                </motion.div>
            </motion.div>

            {/* Subtle background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-[#bba371]/5 blur-[120px] rounded-t-[100%] pointer-events-none" />
        </footer>
    );
}
