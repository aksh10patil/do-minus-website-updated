"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedTitleProps {
    name: string;
}

export default function AnimatedTitle({ name }: AnimatedTitleProps) {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.06, delayChildren: 0.1 },
        },
    };

    const letterVariants: Variants = {
        hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.9, ease: [0.2, 0.65, 0.3, 0.9] },
        },
    };

    return (
        <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-[clamp(60px,7vw,160px)] leading-[0.85] tracking-[-0.02em] font-thin flex items-center whitespace-nowrap text-[#d6cdb7] drop-shadow-md"
            style={{ fontFamily: "Courier, 'Courier New', monospace", fontWeight: 100 }}
        >
            {name.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.h1>
    );
}
