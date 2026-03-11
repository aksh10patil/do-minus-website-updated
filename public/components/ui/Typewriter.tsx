"use client";

import { motion } from "framer-motion";

interface TypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    mode?: "normal" | "luxury";
}

export default function Typewriter({ text, speed, delay, className = "", mode = "normal" }: TypewriterProps) {
    const characters = text.split("");

    const containerNormal = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: speed ?? 0.05,
                delayChildren: delay ?? 0,
            },
        },
    };

    const childNormal = {
        hidden: { opacity: 0, filter: "blur(4px)", y: 5 },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                duration: 0.4,
            },
        },
    };

    const containerLuxury = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: speed ?? 0.12,
                delayChildren: delay ?? 0.4,
            },
        },
    };

    const childLuxury = {
        hidden: { opacity: 0, y: 15, filter: "blur(2px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
        },
    };

    const container = mode === "luxury" ? containerLuxury : containerNormal;
    const child = mode === "luxury" ? childLuxury : childNormal;

    return (
        <motion.span
            className={className}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={child}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
}
