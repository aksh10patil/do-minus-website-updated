"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LuxRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
}

export default function LuxReveal({ children, className = "", delay = 0, direction = "up", duration = 0.8 }: LuxRevealProps) {
    const getDirectionOffset = () => {
        switch (direction) {
            case "up": return { y: 20 };
            case "down": return { y: -20 };
            case "left": return { x: 20 };
            case "right": return { x: -20 };
            case "none": return {};
        }
    };

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, filter: "blur(4px)", ...getDirectionOffset() }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration, delay, ease: [0.2, 0.65, 0.3, 0.9] }}
        >
            {children}
        </motion.div>
    );
}
