"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    driftX: number;
}

export default function AmbientGoldParticles() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // Generate particles only on the client side to prevent React hydration mismatch errors
        const particleCount = 40; // Increased to 40 so the tiny dust particles aren't too sparse

        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // Starting X position (%)
            y: Math.random() * 100, // Starting Y position (%)
            size: Math.random() * 2.5 + 0.5, // Dust size: Tiny! Between 0.5px and 3px
            duration: Math.random() * 15 + 15, // Animation length: 15s to 30s
            delay: Math.random() * 5, // Staggered start times (max 5s delay so they show quickly)
            driftX: Math.random() * 40 - 20, // How far it sways left/right
        }));

        setParticles(newParticles);
    }, []);

    // If particles haven't generated yet (during SSR), return empty container
    if (particles.length === 0) return <div className="fixed inset-0 z-[100] pointer-events-none" />;

    return (
        <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-[#bba371]" // Your signature gold color
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        // Barely any blur for a sharp dust speck look
                        filter: p.size > 2 ? 'blur(0.5px)' : 'none',
                        opacity: 0.6, // Base opacity lower for subtle dust
                    }}
                    animate={{
                        y: [0, "-100vh"], // Drift all the way up the screen
                        x: [0, p.driftX, 0], // Gentle swaying left and right
                        opacity: [0, 0.6, 0.4, 0], // Subtle fade in and out like dust catching light
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: p.delay,
                    }}
                />
            ))}
        </div>
    );
}