"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Key images to preload — covers StoryGrid hero images + representative property images
const IMAGES_TO_PRELOAD: string[] = [
    "/Do-Minus/Ca_Pedrot/ca_pedrot_5.avif",
    "/Do-Minus/Ca_Negra/ca_negra_v1.avif",
    "/Do-Minus/Ca_Pedrot/ca_pedrot_2.avif",
    "/Do-Minus/Barca_Winga/barca_winga.avif",
    "/Do-Minus/Ca_Polete/ca_polete.avif",
    "/Do-Minus/Ca_Pedrot/ca_pedrot.avif",
    "/Do-Minus/Ca_Spontoi/ca_spontoi.avif",
];

interface PreloaderProps {
    onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
    const [done, setDone] = useState<boolean>(false);

    useEffect(() => {
        const total = IMAGES_TO_PRELOAD.length;

        if (total === 0) {
            setDone(true);
            return;
        }

        let loaded = 0;

        const tick = () => {
            loaded++;
            if (loaded >= total) {
                setTimeout(() => setDone(true), 800);
            }
        };

        IMAGES_TO_PRELOAD.forEach((src) => {
            const img = new Image();
            img.onload = tick;
            img.onerror = tick;
            img.src = src;
        });
    }, []);


    const wordmark = "Do-Minus";
    const letters = Array.from(wordmark);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const letterVariants: Variants = {
        hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
        },
    };

    return (
        <AnimatePresence onExitComplete={onComplete}>
            {!done && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: "blur(10px)", scale: 1.02 }}
                    transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1A1A1A]"
                >
                    {/* Staggered Wordmark */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-[#d6cdb7] text-3xl md:text-5xl font-light tracking-[0.01em] select-none flex"
                    >
                        {letters.map((letter, index) => (
                            <motion.span key={index} variants={letterVariants}>
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
