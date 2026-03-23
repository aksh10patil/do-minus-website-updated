"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { usePreloaderGate } from "./usePreloaderGate";

interface NavbarProps {
    hidden?: boolean;
}

export default function Navbar({ hidden = false }: NavbarProps) {
    const isPreloaderReady = usePreloaderGate();
    const [isHovered, setIsHovered] = useState(false);
    const iconRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const iconElement = iconRef.current;
        if (!iconElement) return;

        const root = document.documentElement;
        const syncIconPosition = () => {
            const rect = iconElement.getBoundingClientRect();
            root.style.setProperty("--navbar-icon-left", `${rect.left}px`);
            root.style.setProperty("--navbar-icon-center-x", `${rect.left + rect.width / 2}px`);
            root.style.setProperty("--navbar-icon-top", `${rect.top}px`);
            root.style.setProperty("--navbar-icon-center-y", `${rect.top + rect.height / 2}px`);
        };

        syncIconPosition();

        const handleResize = () => {
            window.requestAnimationFrame(syncIconPosition);
        };

        const resizeObserver =
            typeof ResizeObserver !== "undefined"
                ? new ResizeObserver(syncIconPosition)
                : null;

        resizeObserver?.observe(iconElement);
        window.addEventListener("resize", handleResize);

        return () => {
            resizeObserver?.disconnect();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const navLinks = [
        { name: "Properties", href: "/properties/${property.slug}" },
        { name: "Philosophy", href: "/philosophy" },
        { name: "Journal", href: "#" },
        { name: "Contact", href: "#" },
    ];

    // Animates both width and height simultaneously for a diagonal pull
    const containerVariants: Variants = {
        hidden: {
            width: "48px",
            height: "48px",
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.3 // Waits for the text to zip up before shrinking diagonally
            }
        },
        visible: {
            width: "180px",
            height: "auto", // Framer Motion natively handles "auto" height perfectly
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    // Handles ONLY the opacity and staggered timing of the links now
    const menuVariants: Variants = {
        hidden: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.15, // Links start melting in just as the box opens
                staggerChildren: 0.1,
            },
        },
    };

    // The individual link animations
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: -8, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
        },
    };

    if (!isPreloaderReady) {
        return null;
    }

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: hidden ? 0 : 1 }}
            transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
            className={`fixed top-0 left-0 h-full w-max z-50 px-6 md:px-12 lg:px-32 ${hidden ? "pointer-events-none" : "pointer-events-none"
                }`}
        >
            {/* Expanding Glassmorphism Container */}
            <motion.div
                className="absolute top-8 md:top-12 left-4 md:left-12 lg:left-32 flex flex-col pointer-events-auto bg-[#1A1A1A]/30 backdrop-blur-md border border-white/5 shadow-2xl rounded-sm overflow-hidden hover:bg-[#1A1A1A]/60 transition-colors duration-500"
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
                variants={containerVariants}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Header / Hamburger Icon (Fixed 48x48 bounds) */}
                <div
                    ref={iconRef}
                    className="h-[48px] w-[48px] shrink-0 p-3 flex items-center justify-center cursor-pointer box-border relative z-10"
                >
                    <div className="flex flex-col gap-[5px] w-6">
                        <span
                            className={`h-[1px] bg-[#d6cdb7] transition-all duration-500 ease-[0.4,0,0.2,1] ${isHovered ? "w-6" : "w-4"
                                }`}
                        />
                        <span
                            className={`h-[1px] bg-[#bba371] transition-all duration-500 ease-[0.4,0,0.2,1] ${isHovered ? "w-4" : "w-6"
                                }`}
                        />

                    </div>
                </div>

                {/* Animated Dropdown Links */}
                <motion.div variants={menuVariants} className="w-full">
                    <div className="flex flex-col gap-4 pb-5 pt-2 mx-3 px-1">
                        {navLinks.map((link, i) => (
                            <motion.div key={i} variants={itemVariants}>
                                <Link
                                    href={link.href}
                                    className="group relative cursor-pointer text-[#d4d4d4] hover:text-white transition-colors duration-300 w-fit uppercase text-[11px] tracking-widest block"
                                >
                                    {link.name}
                                    <span className="block h-[1px] w-0 bg-[#bba371] transition-all duration-500 ease-[0.4,0,0.2,1] group-hover:w-full mt-1.5 opacity-70"></span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </motion.nav>
    );
}
