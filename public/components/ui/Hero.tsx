"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// --- Types ---
interface Property {
    id: number;
    name: string;
    type: string;
    imageUrl: string;
}

// --- Mock Data ---
const properties: Property[] = [
    {
        id: 1,
        name: "Ca'Pedrot",
        type: "Mountain Retreat",
        imageUrl: "/Do-Minus/Ca_Pedrot/ca_pedrot_v2.avif",
    },
    {
        id: 2,
        name: "Ca Polete",
        type: "Thermal Spa",
        imageUrl: "/Do-Minus/Ca Polete/ca_polete_v1.avif",
    },
    {
        id: 3,
        name: "Ca Spontoi",
        type: "Alpine Lodge",
        imageUrl: "/Do-Minus/Ca Spontoi/ca_spontoi_v1.avif",
    },
];

// --- Animation Variants ---
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
};

const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] } },
};

// --- Luxury Typewriter Variants ---
const luxuryTypewriterContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12, // The speed between each letter appearing
            delayChildren: 0.4,
        },
    },
};

const luxuryLetter: any = {
    hidden: { opacity: 0, y: 15, filter: "blur(2px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
    },
};

const cursorPulse: any = {
    hidden: { opacity: 0 },
    visible: {
        opacity: [0, 1, 0],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const menuVariants: any = {
    closed: {
        x: "-100%",
        transition: {
            type: "tween",
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1] as const,
        }
    },
    open: {
        x: 0,
        transition: {
            type: "tween",
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1] as const,
        }
    }
};

const menuItemVariants: any = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1 + 0.3,
            duration: 0.5,
            ease: [0.2, 0.65, 0.3, 0.9] as const
        }
    })
};

const menuItems = [
    { name: "Home", href: "#" },
    { name: "Philosophy", href: "#" },
    { name: "Region", href: "#" },
    { name: "Properties", href: "#" },
    { name: "Contact Us", href: "#" },
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const titleText = "Do-Minus";

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === properties.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const currentProperty = properties[currentIndex];

    return (
        <section
            className="flex flex-col md:flex-row h-full w-full text-[#f4f4f0] overflow-hidden"
            style={{ fontFamily: '"Courier New", Courier, monospace' }}
        >
            {/* MENU OVERLAY */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-y-0 left-0 w-full md:w-1/2 bg-[#050505] z-50 p-8 md:p-12 lg:p-16 flex flex-col text-[#f4f4f0]"
                        style={{ fontFamily: '"Courier New", Courier, monospace' }}
                    >
                        <div className="flex justify-between items-start w-full">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 -ml-2 hover:opacity-70 transition-opacity"
                            >
                                <X strokeWidth={1} size={32} />
                            </button>
                        </div>

                        <div className="flex flex-col justify-center flex-1 space-y-8 mt-12 md:mt-24">
                            {menuItems.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    custom={i}
                                    variants={menuItemVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest hover:text-[#bba371] transition-colors w-max uppercase"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* LEFT COLUMN */}
            <div className="relative w-full md:w-1/2 h-[50%] md:h-full bg-[#050505] p-6 md:p-12 lg:p-16 flex flex-col justify-between z-10">

                <div className="flex justify-between items-start w-full">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="p-2 -ml-2 hover:opacity-70 transition-opacity"
                    >
                        <Menu strokeWidth={1} size={32} />
                    </button>

                    <div className="text-right text-sm leading-relaxed tracking-wider opacity-80">
                        <p>Wellness</p>
                        <p>Nature</p>
                        <p>Design</p>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="my-auto pt-24 pb-12">
                    {/* Luxury Typewriter Title */}
                    <motion.h1
                        variants={luxuryTypewriterContainer}
                        initial="hidden"
                        animate="visible"
                        className="text-6xl md:text-8xl lg:text-[100px] tracking-tight font-light mb-6 flex items-center"
                    >
                        {titleText.split("").map((char, index) => (
                            <motion.span key={index} variants={luxuryLetter}>
                                {char}
                            </motion.span>
                        ))}
                        {/* Soft pulsing cursor */}
                        <motion.span
                            variants={cursorPulse}
                            initial="hidden"
                            animate="visible"
                            className="inline-block w-[3px] h-[60px] md:h-[80px] lg:h-[100px] bg-[#bba371] ml-4 opacity-50"
                        />
                    </motion.h1>

                    {/* Staggered Subtext */}
                    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                        <motion.p
                            variants={fadeUpVariants}
                            className="text-[#bba371] italic text-xl md:text-2xl mb-12 tracking-wide"
                        >
                            Design Retreats & Spa
                        </motion.p>

                        <motion.p
                            variants={fadeUpVariants}
                            className="max-w-sm text-sm md:text-base leading-loose opacity-80"
                        >
                            Exclusive spaces combining nature, wellbeing, and design.
                            Historic buildings meticulously restored by Riccarda Guidotti
                            and Andrea Frapolli.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* RIGHT COLUMN: Slideshow */}
            <div className="relative w-full md:w-1/2 h-[50%] md:h-full bg-[#050505]">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentProperty.id}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <img
                            src={currentProperty.imageUrl}
                            alt={currentProperty.name}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-8 right-8 text-right z-20">
                    <p className="text-sm tracking-widest opacity-90 mb-1">
                        {String(currentIndex + 1).padStart(2, '0')}/{String(properties.length).padStart(2, '0')}
                    </p>
                    <p className="text-lg tracking-wider">
                        {currentProperty.name}
                    </p>
                    <p className="text-sm opacity-80 tracking-widest">
                        {currentProperty.type}
                    </p>
                </div>
            </div>
        </section>
    );
}