"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const defaultImages = [
    "/Do-Minus/Ca_Spontoi/ca_spontoi.avif",
    "/Do-Minus/Ca_Spontoi/ca_spontoi_1.avif",
    "/Do-Minus/Ca_Spontoi/ca_spontoi_2.avif",
];

const propertyDetails = [
    {
        title: "Check-in / Check-out",
        content: "Check-in is strictly from 15:00 onwards. Check-out must be completed by 11:00. Early arrivals and late departures are subject to availability and prior arrangement."
    },
    {
        title: "Accommodates",
        content: "Comfortably sleeps up to 4 guests. The master suite features a king-size bed, while the secondary room offers a premium queen-size setup with high-thread-count linens."
    },
    {
        title: "Accessibility",
        content: "The property features ground-floor access with zero-step entry to main living areas. Please note that the historic nature of the building means some doorways may be narrow."
    },
    {
        title: "Amenities",
        content: "Fully equipped chef's kitchen, high-speed fiber internet, Nespresso coffee station, underfloor heating, and bespoke organic bath products provided standard."
    },
    {
        title: "House Rules",
        content: "To maintain the serene atmosphere, parties and events are strictly prohibited. Quiet hours are enforced between 22:00 and 07:00. No smoking indoors."
    },
    {
        title: "Cancellation Policy",
        content: "Full refund for cancellations made within 48 hours of booking, if the check-in date is at least 14 days away. 50% refund for cancellations made at least 7 days before check-in."
    },
    {
        title: "Bespoke Services",
        content: "Our dedicated concierge is available to curate tailored experiences, from private chef dining and in-room massage therapy to guided alpine excursions and exclusive local vineyard tours."
    },
    {
        title: "Arrival & Parking",
        content: "Private, secured parking is provided discreetly on the premises. For a seamless arrival, bespoke chauffeur transfers from regional airports or train stations can be arranged through our team."
    },
    {
        title: "Pet Policy",
        content: "Well-behaved canine companions are welcome upon prior approval. We provide a tailored welcome kit including an artisan bed and organic treats. A nominal deep-cleaning fee applies."
    }
];

export default function PropertyDetails({ images = defaultImages, details = propertyDetails }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-[#1A1A1A] py-24 lg:py-48 mb-30 lg:mb-48  flex justify-center relative overflow-hidden ">
            <div className="w-full max-w-[1920px] px-8 lg:px-16 flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24">

                {/* LEFT SIDE: Single Image */}
                <div className="w-full lg:w-1/2 h-[55vh] md:h-[75vh]">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="w-full h-full overflow-hidden group relative"
                >
                    <img
                        src={images[0]}
                        alt="Property Main"
                        className="w-full h-full object-cover transition-all duration-[1.5s]"
                    />
                </motion.div>
            </div>

            {/* RIGHT SIDE */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-full lg:w-1/2 flex flex-col justify-start min-h-[50vh] md:min-h-[70vh] z-10"
            >
                <h2 className="text-[#f4f4f0] text-3xl md:text-4xl font-mono mb-12">
                    More Details
                </h2>

                <div className="flex flex-col border-t border-white/10">
                    {details.map((detail, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={index} className="border-b border-white/10 group">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full py-5 flex items-center justify-between text-left"
                                >
                                    <span className={`font-mono text-[clamp(14px,1.5vw,18px)] ${isOpen ? 'text-[#bba371]' : 'text-white/80 group-hover:text-white'}`}>
                                        {detail.title}
                                    </span>

                                    <motion.span
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`ml-4 ${isOpen ? 'text-[#bba371]' : 'text-white/50 group-hover:text-white'}`}
                                    >
                                        ^
                                    </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-6 text-white/50 text-sm md:text-base leading-relaxed pr-8">
                                                {detail.content}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
            </div>
        </section>
    );
}