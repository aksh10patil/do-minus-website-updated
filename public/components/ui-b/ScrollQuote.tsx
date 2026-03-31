"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollQuoteProps {
    text?: string;
}

const defaultText =
    '"What characterizes our projects is a sharp architecture combined with an interior of refined simplicity exuding a calmness and lightness."';

export default function ScrollQuote({ text = defaultText }: ScrollQuoteProps) {
    const containerRef = useRef<HTMLElement>(null);

    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 85%", "end 25%"]
    });

    const words = text.split(" ");

    return (
        <section
            ref={containerRef}
            className="w-full bg-[#1A1A1A] py-[18vh] md:py-[30vh] flex flex-col items-center justify-center px-6 sm:px-12 md:px-24 lg:px-48 relative overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="flex flex-col items-center w-full z-10"
            >
                <p className="flex flex-wrap justify-center text-center max-w-[48rem]">
                    {words.map((word, i) => {
                        
                        const stagger = 0.025;
                        const duration = 0.12;

                        const start = i * stagger;
                        const end = start + duration;

                        return (
                            <Word key={i} progress={scrollYProgress} range={[start, end]}>
                                {word}
                            </Word>
                        );
                    })}
                </p>
            </motion.div>
        </section>
    );
}

interface WordProps {
    children: string;
    progress: MotionValue<number>;
    range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
    
    const opacity = useTransform(progress, range, [0.25, 1]);
    const y = useTransform(progress, range, [6, 0]);
    const scale = useTransform(progress, range, [0.98, 1]);

    
    const color = useTransform(progress, range, ["#a8a29e", "#e5ded0"]);

    return (
        <span className="relative inline-block mx-[0.3em] md:mx-[0.65em] my-[0.15em] md:my-[0.2em]">
            <motion.span
                style={{ opacity, y, scale, color }}
                className="
                text-[clamp(15px,1.8vw,26px)] md:text-[clamp(18px,2.2vw,30px)] 
                leading-[1.6] md:leading-[1.75] 
                font-light 
               tracking-[0.005em] md:tracking-[0.01em] 
                inline-block
                "
            >
                {children}
            </motion.span>
        </span>
    );
};