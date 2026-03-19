"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform, Variants } from "framer-motion";

// --- Types & Data ---
type PhilosophyBlock = {
    id: string;
    title: string;
    text: string;
    image: string;
};

const luxuryTypewriterContainer: Variants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.4,
        },
    },
};

const luxuryLetter: Variants = {
    hidden: { opacity: 0, y: 15, filter: "blur(2px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
    },
};

const philosophyData: PhilosophyBlock[] = [
    {
        id: "01",
        title: "Do Less",
        text: "In a world that constantly adds more noise, more speed and more distraction, we invite the opposite. A philosophy rooted in subtraction — removing what is unnecessary to reveal what truly matters.",
        image: "/Do-Minus/Ca_Spontoi/ca_spontoi_v5.avif",
    },
    {
        id: "02",
        title: "Return to Simplicity",
        text: "Spaces designed to slow the rhythm of life. Natural textures, soft light, and silence create an environment where you can pause and reconnect with the present moment.",
        image: "/Do-Minus/Ca_Negra/ca_negra_v4.avif",
    },
    {
        id: "03",
        title: "Respect Time",
        text: "We do not erase history; we converse with it. Every material chosen, every shadow cast, is a deliberate nod to the passage of time. Imperfection becomes the ultimate sophistication.",
        image: "/Do-Minus/Ca_Pedrot/ca_pedrot_v3.avif",
    },
];

// --- Sub-component: Parallax & Drifting Image ---
const ParallaxImage = ({ src, alt }: { src: string; alt: string }) => {
    const imageRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: imageRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.0]);
    const x = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

    return (
        <div ref={imageRef} className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden mt-12 md:mt-24 group">
            <div className="absolute inset-0 z-10 border border-[#444]/40 mix-blend-overlay pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />
            <motion.div style={{ scale, x }} className="w-full h-full origin-center">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                />
            </motion.div>
        </div>
    );
};

// --- Sub-component: Blur & Fade Text Reveal ---
const BlurRevealText = ({ children }: { children: React.ReactNode }) => {
    const textRef = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: textRef,
        offset: ["start 90%", "start 45%"],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
    const blur = useTransform(scrollYProgress, [0, 1], ["blur(12px)", "blur(0px)"]);
    const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

    return (
        <motion.p
            ref={textRef}
            style={{ opacity, filter: blur, y }}
            className="text-sm md:text-base md:text-lg leading-relaxed tracking-wide text-[#A3A3A3] max-w-2xl"
        >
            {children}
        </motion.p>
    );
};

// --- Sub-component: Individual Philosophy Block ---
const PhilosophyBlockEl = ({ block, index }: { block: PhilosophyBlock; index: number }) => {
    const blockRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: blockRef,
        offset: ["start center", "end center"],
    });

    const headerOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0.3, 1, 1, 0.3]);
    const headerColor = useTransform(
        scrollYProgress,
        [0, 0.05, 0.95, 1],
        ["#555555", "#d6ceb8", "#d6ceb8", "#555555"]
    );
    const lineScaleX = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

    // Tightened the gap to 60px so they stack nicely like a menu
    const stickyTop = `calc(12vh + ${index * 60}px)`;

    const scrollToSection = () => {
        const element = document.getElementById(`section-${block.id}`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            id={`section-${block.id}`}
            ref={blockRef}
            // Added scroll-mt-[35vh] so the browser leaves space for the stacked headers when auto-scrolling
            className="relative min-h-[120vh] flex flex-col z-10 mb-32 md:mb-48 last:mb-0 scroll-mt-[35vh]"
        >
            <div
                className="sticky z-20 pointer-events-none w-full lg:w-[25%]"
                style={{
                    top: stickyTop,
                    paddingTop: "1rem",
                    paddingBottom: "1.5rem", // Reduced padding to prevent background overlapping the next header
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#1A1A1A]/95 to-transparent -z-10" />

                {/* Transformed into a clickable button */}
                <button
                    onClick={scrollToSection}
                    className="flex flex-col pointer-events-auto w-max text-left group outline-none"
                >
                    <div className="flex items-baseline gap-4 md:gap-8">
                        <motion.h2
                            style={{ opacity: headerOpacity, color: headerColor }}
                            className="text-[clamp(20px,5vw,32px)] leading-[1.05] tracking-[0.01em] transition-colors duration-500 group-hover:text-[#d6ceb8]"
                        >
                            {block.title}
                        </motion.h2>
                    </div>

                    <motion.div
                        style={{ scaleX: lineScaleX, originX: 0 }}
                        className="mt-1 h-[1px] w-full bg-[#d6ceb8] opacity-60 ml-0 md:ml-0 "
                    />
                </button>
            </div>

            <div className="w-full lg:w-2/3 ml-auto flex flex-col gap-8 pt-8 z-10">
                <BlurRevealText>{block.text}</BlurRevealText>
                <ParallaxImage src={block.image} alt={block.title} />
            </div>
        </div>
    );
};

// --- Main Layout Component ---
export default function InteractivePhilosophySection() {
    const contentRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: contentRef,
        offset: ["start 12%", "end 100%"],
    });
    const smoothedProgress = useSpring(scrollYProgress, {
        stiffness: 160,
        damping: 28,
        mass: 0.25,
    });

    const lineHeight = useTransform(smoothedProgress, [0, 1], ["0%", "100%"]);
    const lineOpacity = useTransform(smoothedProgress, [0, 0.05, 1], [0.25, 1, 1]);
    const lineVisibility = useTransform(smoothedProgress, [0, 0.04, 0.96, 1], [0, 1, 1, 0]);

    return (
        <section
            className="pl-14 relative w-full bg-[#1A1A1A] text-[#ECECEC] font-light selection:bg-white/20"
        >
            <div ref={contentRef} className="relative w-full max-w-[1920px] mx-auto px-12 md:px-24 lg:px-40 py-[15vh]">

                <div className="relative z-10 mb-20 md:mb-48 pt-20">
                    <motion.h1
                        variants={luxuryTypewriterContainer}
                        initial="hidden"
                        animate="visible"
                        className="text-[clamp(50px,8vw,160px)] leading-[0.9] tracking-[-0.02em] font-light flex items-center whitespace-nowrap text-[#d6cdb7] drop-shadow-md mb-4"
                    >
                        {"Architecture".split("").map((char, index) => (
                            <motion.span key={index} variants={luxuryLetter}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>

                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none fixed top-[12vh] z-0 h-[76vh] w-[1.5px] -translate-x-1/2 overflow-hidden bg-[#a89f87]/20"
                    style={{
                        left: "var(--navbar-icon-center-x, 72px)",
                        opacity: lineVisibility,
                    }}
                >
                    <motion.div
                        style={{ height: lineHeight, opacity: lineOpacity }}
                        className="absolute left-0 top-0 w-full 
                            bg-gradient-to-b 
                            from-[#e7e0cc] 
                            via-[#d6ceb8] 
                            to-[#8B7325] 
                            shadow-[0_0_12px_rgba(214,206,184,0.45)]"
                    />
                </motion.div>

                {philosophyData.map((block, index) => (
                    <PhilosophyBlockEl key={block.id} block={block} index={index} />
                ))}
            </div>
        </section>
    );
}
