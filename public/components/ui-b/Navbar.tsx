"use client";

import { motion } from "framer-motion";
import Link from "next/link";


export default function Navbar({ hidden = false }: { hidden?: boolean }) {
    const navLinks = [
        { name: "Properties", href: "/properties" },
        { name: "Philosophy", href: "#" },
        { name: "Journal", href: "#" },
        { name: "Contact", href: "#" },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: hidden ? 0 : 1 }}
            transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
            className={`absolute top-0 left-0 h-full w-max z-20 px-6 md:px-12 lg:px-16 ${hidden ? 'pointer-events-none' : 'pointer-events-none'}`}
            style={{ fontFamily: '"Courier New", Courier, monospace' }}
        >
            {/* Logo Section */}
            <div className="pointer-events-auto">
                <Link href="/" className="group flex flex-col cursor-pointer w-fit">


                </Link>
            </div>

            {/* Desktop Links — pinned to a fixed vertical position */}
            <div className="absolute top-8 md:top-12 left-12 flex flex-col z-25 space-y-4 text-xs tracking-widest opacity-90 text-[#d4d4d4] pointer-events-auto bg-[#1A1A1A]/20 backdrop-blur-sm border border-white/5 shadow-2xl  p-4 max-w-[150px]">
                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        href={link.href}
                        className="group relative cursor-pointer hover:opacity-100 hover:text-white transition-opacity w-fit uppercase"
                    >
                        {link.name}
                        <span className="block h-[1px] w-0 bg-[#bba371] transition-all duration-300 group-hover:w-full mt-1"></span>
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button - Minimal M/B Style */}
            <div className="md:hidden mt-auto pointer-events-auto bg-[#1A1A1A]/20 backdrop-blur-sm p-4 rounded-xl border border-white/5 shadow-2xl w-fit">
                <button className="flex flex-col gap-1.5 group">
                    <span className="w-6 h-[1px] bg-[#d6cdb7] transition-all duration-300 group-hover:w-8 group-hover:bg-white" />
                    <span className="w-4 h-[1px] bg-[#bba371] transition-all duration-300 group-hover:w-6" />
                </button>
            </div>
        </motion.nav>
    );
}
