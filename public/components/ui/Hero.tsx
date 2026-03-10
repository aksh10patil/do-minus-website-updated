"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";

// --- Types ---
interface Property {
    id: number;
    name: string;
    type: string;
    imageUrl: string;
    imagePosition?: string;
    textTheme?: "light" | "dark";
}

// --- Mock Data ---
const properties: Property[] = [
    {
        id: 1,
        name: "Ca' Pedrot",
        type: "Mountain Retreat",
        imageUrl: "/Do-Minus/Ca_Pedrot/ca_pedrot_6.avif",
        imagePosition: "right",
        textTheme: "light",
    },
    {
        id: 5,
        name: "Ca' Pedrot",
        type: "Mountain Retreat",
        imageUrl: "/Do-Minus/Ca_Pedrot/ca_pedrot_v1.avif",
        imagePosition: "right",
        textTheme: "light",
    },
    {
        id: 2,
        name: "Ca Polete",
        type: "Thermal Spa",
        imageUrl: "/Do-Minus/Ca_Polete/ca_polete_2.avif",
        imagePosition: "center",
        textTheme: "light",
    },
    {
        id: 3,
        name: "Ca Spontoi",
        type: "Alpine Lodge",
        imageUrl: "/Do-Minus/Ca_Spontoi/ca_sponoti_v2.avif",
        imagePosition: "center",
        textTheme: "light",
    },
    {
        id: 4,
        name: "Ca Negra",
        type: "Secluded Villa",
        imageUrl: "/Do-Minus/Ca_Negra/ca_negra_v1.avif",
        imagePosition: "center",
        textTheme: "light",
    },
    {
        id: 5,
        name: "Barca Winga",
        type: "Riverside Escape",
        imageUrl: "/Do-Minus/Barca_Winga/barca_winga.avif",
        imagePosition: "left",
        textTheme: "dark",
    },
];

// --- Animation Variants ---
const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
};

const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] } },
};

// --- Luxury Typewriter Variants ---
const luxuryTypewriterContainer: Variants = {
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

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") {
                setCurrentIndex((prev) => (prev === properties.length - 1 ? 0 : prev + 1));
            } else if (e.key === "ArrowLeft") {
                setCurrentIndex((prev) => (prev === 0 ? properties.length - 1 : prev - 1));
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
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
            <div className="relative w-full md:w-[55%] h-[50%] md:h-full bg-[#1b1a19] p-6 md:p-12 lg:p-16 flex flex-col justify-between z-30">
                {/* Top Left Links */}
                <div className="flex flex-col space-y-6 text-xs md:text-sm tracking-widest opacity-80 mt-8 text-[#d4d4d4]">

                    <p className="group cursor-pointer hover:opacity-100 transition-opacity w-fit">
                        Properties
                        <span className="block h-[1px] w-0 bg-[#d4d4d4] transition-all duration-300 group-hover:w-full"></span>
                    </p>

                    <p className="group cursor-pointer hover:opacity-100 transition-opacity w-fit">
                        Philosophy
                        <span className="block h-[1px] w-0 bg-[#d4d4d4] transition-all duration-300 group-hover:w-full"></span>
                    </p>

                    <p className="group cursor-pointer hover:opacity-100 transition-opacity w-fit">
                        Experiences
                        <span className="block h-[1px] w-0 bg-[#d4d4d4] transition-all duration-300 group-hover:w-full"></span>
                    </p>

                </div>

                {/* Right Middle Text */}
                <div className="absolute right-12 top-[45%] -translate-y-1/2 text-right text-xs md:text-sm leading-8 tracking-widest opacity-40 text-[#d4d4d4]">
                    <p>Wellness</p>
                    <p>Nature</p>
                    <p>Design</p>
                </div>

                {/* Bottom Left Title */}
                <div className="mt-auto mb-[2vh] md:mb-[5vh] relative z-40 w-max pointer-events-none">
                    <motion.h1
                        variants={luxuryTypewriterContainer}
                        initial="hidden"
                        animate="visible"
                        className="text-[clamp(45px,9vw,250px)] leading-[0.85] tracking-[-0.02em] font-light flex items-center whitespace-nowrap text-[#d6cdb7] drop-shadow-md translate-y-[5vh] md:translate-y-0 translate-x-0 md:translate-x-[6vw] lg:translate-x-[10vw] xl:translate-x-[12vw]"
                    >
                        {titleText.split("").map((char, index) => (
                            <motion.span key={index} variants={luxuryLetter}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>
            </div>

            {/* RIGHT COLUMN: Slideshow */}
            <div className="relative w-full md:w-[45%] h-[50%] md:h-full bg-[#050505] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentProperty.id}
                        initial={{ opacity: 0, filter: "blur(8px)", scale: 1.05 }}
                        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                        exit={{ opacity: 0, filter: "blur(8px)", scale: 0.95 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <motion.img
                            src={currentProperty.imageUrl}
                            alt={currentProperty.name}
                            className="object-cover w-full h-full"
                            style={{ objectPosition: currentProperty.imagePosition || "center" }}
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.1 }}
                            transition={{ duration: 10, ease: "linear" }}
                        />
                    </motion.div>
                </AnimatePresence>


                {/* Vertical Text Overlay */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentProperty.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`absolute right-4 md:right-8 top-40 -translate-y-1/2 z-20 pointer-events-none font-light tracking-[0.2em] text-md md:text-lg flex flex-col items-center gap-5 drop-shadow-lg ${currentProperty.textTheme === "dark" ? "text-black" : "text-white"
                            }`}
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", textShadow: currentProperty.textTheme === "dark" ? "0 2px 10px rgba(255,255,255,0.3)" : "0 2px 10px rgba(0,0,0,0.5)" }}
                    >
                        <p>{currentProperty.name}</p>
                        <p>{currentProperty.type}</p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}