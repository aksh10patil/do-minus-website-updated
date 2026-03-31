"use client";

import { useState, useRef, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { usePreloaderGate } from "./usePreloaderGate";

export default function ChatWidget() {
    const isPreloaderReady = usePreloaderGate();
    const [open, setOpen] = useState(false);
    const [unreadCount, setUnreadCount] = useState(1); 
    const [messages, setMessages] = useState<string[]>([
        "Welcome to Do-Minus. How may I assist you?"
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const containerVariants: Variants = {
        closed: {
            width: "56px",
            height: "56px",
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
        },
        open: {
            width: "320px",
            height: "420px",
            transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        },
    };

    
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    const handleToggle = () => {
        setOpen(!open);
        if (!open) setUnreadCount(0); 
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = input;

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await res.json();

            setMessages((prev) => [...prev, data.reply]);

            
            if (!open) setUnreadCount((prev) => prev + 1);
        } catch {
            setMessages((prev) => [
                ...prev,
                "Apologies, something went wrong."
            ]);
        }

        setLoading(false);
    };

    if (!isPreloaderReady) {
        return null;
    }

    return (
        <div className="fixed z-60 bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-3 sm:right-4 md:right-8 lg:right-16">
            <motion.div
                initial="closed"
                animate={open ? "open" : "closed"}
                variants={containerVariants}
                className="bg-[#1A1A1A]/40 backdrop-blur-md border border-white/5 shadow-2xl rounded-sm overflow-hidden flex flex-col"

            >
                {/* Header Container */}
                <div className={`flex items-center justify-between ${open ? "pr-4" : ""}`}>
                    {/* Toggle Button / Icon */}
                    <div
                        onClick={handleToggle}
                        className="h-[56px] w-[56px] flex items-center justify-center cursor-pointer"
                    >
                        <div className="relative flex items-center justify-center">
                            {/* AI Agent Icon */}
                            <motion.svg
                                animate={{ rotate: open ? 90 : 0 }}
                                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#d6cdb7"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                            </motion.svg>

                            {/* Red Accent Notification Badge */}
                            <AnimatePresence>
                                {!open && unreadCount > 0 && (
                                    <>
                                        {/* Outer pulse */}
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.8 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ delay: 5 }} 
                                            className="absolute -top-1.5 -right-1.5 bg-[#E63946] w-3.5 h-3.5 rounded-full animate-ping"
                                        />

                                        {/* Solid inner badge */}
                                        <motion.span
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                            transition={{ delay: 5 }} 
                                            className="absolute -top-1.5 -right-1.5 bg-[#E63946] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center"
                                        >
                                            {unreadCount}
                                        </motion.span>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Minimalist Close Button (Only visible when open) */}
                    {open && (
                        <button
                            onClick={handleToggle}
                            className="text-white/30 hover:text-white/80 transition-colors"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="flex flex-col flex-1 h-[calc(100%-56px)] px-4 pb-4"
                        >
                            {/* Title */}
                            <div className="text-[#d6cdb7] text-sm tracking-widest uppercase mb-3 border-b border-white/10 pb-2">
                                Concierge
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto text-sm space-y-3 pr-2 scrollbar-thin scrollbar-thumb-white/10">
                                {messages.map((msg, i) => (
                                    <div
                                        key={i}
                                        className={`${i % 2 === 0
                                            ? "text-[#d4d4d4]"
                                            : "text-[#bba371] text-right"
                                            }`}
                                    >
                                        {msg}
                                    </div>
                                ))}

                                {/* Typing indicator */}
                                {loading && (
                                    <div className="text-[#d4d4d4] opacity-50 italic text-xs">
                                        Concierge is typing...
                                    </div>
                                )}

                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input */}
                            <div className="mt-3 flex items-center border-t border-white/10 pt-3">
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) =>
                                        e.key === "Enter" && sendMessage()
                                    }
                                    placeholder="Ask something..."
                                    className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-white/30"
                                />
                                <button
                                    onClick={sendMessage}
                                    disabled={loading || !input.trim()}
                                    className="text-[#bba371] text-xs tracking-widest uppercase hover:text-white transition-colors disabled:opacity-50"
                                >
                                    Send
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
