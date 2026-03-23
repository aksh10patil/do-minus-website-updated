"use client";

import Map, { Marker } from "react-map-gl/mapbox";
import { useRef, useState, useEffect, useCallback } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const lngOrder = ["barca", "negra", "pedrot", "polete", "spontoi"];

const markerAnimIndex = (id: string) => {
    const index = lngOrder.indexOf(id);
    return index === -1 ? 0 : index;
};

const luxuryTypewriterContainer: any = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.4,
        },
    },
};

const luxuryLetter: any = {
    hidden: { opacity: 0, y: 15, filter: "blur(2px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
    },
};

const properties = [
    {
        id: "barca",
        slug: "barca-winga",
        name: "Barca Winga",
        lat: 46.1782436,
        lng: 8.8411258,
        location: "Lake Maggiore, CH",
        images: ["/Do-Minus/Barca_Winga/barca_winga.avif", "/Do-Minus/Barca_Winga/barca_winga_2.avif", "/Do-Minus/Barca_Winga/barca_winga_boat_map.avif"]
    },
    {
        id: "polete",
        slug: "ca-polete",
        name: "Ca Polete",
        lat: 46.1863,
        lng: 8.9974,
        location: "Monte Carasso",
        images: ["/Do-Minus/Ca_Polete/ca_polete.avif", "/Do-Minus/Ca_Polete/ca_polete_1.avif", "/Do-Minus/Ca_Polete/ca_polete_2.avif", "/Do-Minus/Ca_Polete/ca_polete_v1.avif", "/Do-Minus/Ca_Polete/ca_polete_v2.avif", "/Do-Minus/Ca_Polete/ca_polete_v3.avif"]
    },
    {
        id: "pedrot",
        slug: "ca-pedrot",
        name: "Ca Pedrot",
        lat: 46.2077934,
        lng: 8.9835479,
        location: "Mornera",
        images: ["/Do-Minus/Ca_Pedrot/ca_pedrot.avif", "/Do-Minus/Ca_Pedrot/ca_pedrot_2.avif", "/Do-Minus/Ca_Pedrot/ca_pedrot_3.avif", "/Do-Minus/Ca_Pedrot/ca_pedrot_4.avif", "/Do-Minus/Ca_Pedrot/ca_pedrot_5.avif", "/Do-Minus/Ca_Pedrot/ca_pedrot_6.avif", "/Do-Minus/Ca_Pedrot/ca_pedrot_7.avif", "/Do-Minus/Ca_Pedrot/ca_pedrot_v1.avif", "/Do-Minus/Ca_Pedrot/ca_pedrot_v2.avif", "/Do-Minus/Ca_Pedrot/ca_pedrot_v3.avif"]
    },
    {
        id: "negra",
        slug: "ca-negra",
        name: "Ca Negra",
        lat: 46.2069,
        lng: 8.9797,
        location: "Mornera",
        images: ["/Do-Minus/Ca_Negra/ca_negra_v1.avif", "/Do-Minus/Ca_Negra/ca_negra_v2.avif", "/Do-Minus/Ca_Negra/ca_negra_v3.avif", "/Do-Minus/Ca_Negra/ca_negra_v4.avif"]
    },
    {
        id: "spontoi",
        slug: "ca-spontoi",
        name: "Ca Spontoi",
        lat: 46.23,
        lng: 9.0195363,
        location: "Gnosca",
        images: ["/Do-Minus/Ca_Spontoi/ca_spontoi.avif", "/Do-Minus/Ca_Spontoi/ca_spontoi_1.avif", "/Do-Minus/Ca_Spontoi/ca_spontoi_2.avif", "/Do-Minus/Ca_Spontoi/ca_spontoi_map.avif", "/Do-Minus/Ca_Spontoi/ca_spontoi_v1.avif", "/Do-Minus/Ca_Spontoi/ca_sponoti_v2.avif", "/Do-Minus/Ca_Spontoi/ca_spontoi_v3.avif", "/Do-Minus/Ca_Spontoi/ca_spontoi_v4.avif", "/Do-Minus/Ca_Spontoi/ca_spontoi_v5.avif"]
    }
];

const ScrollingColumn = ({ images, reverse = false, speed = 20 }: { images: string[]; reverse?: boolean; speed?: number }) => {
    const baseSequence = [...images, ...images];
    const duplicatedImages = [...baseSequence, ...baseSequence];

    return (
        <div className="relative h-full overflow-hidden w-1/2">
            <motion.div
                className="w-full flex flex-col pointer-events-auto"
                animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
            >
                {duplicatedImages.map((img, i) => (
                    <div key={i} className="pb-4 md:pb-6 group">
                        <img
                            src={img}
                            className="w-full aspect-[4/5] object-cover rounded-none shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-white/5 group-hover:border-white/20 transition-colors duration-500"
                            alt=""
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const DESKTOP_CAMERA = {
    zoom: 13.5,
    pitch: 60,
    duration: 2800,
    padding: { top: 0, bottom: 0, left: 0, right: 0 }
};

const MOBILE_CAMERA = {
    zoom: 12.8,
    pitch: 50,
    duration: 1200,
    padding: { top: 72, bottom: 260, left: 20, right: 20 }
};

const DEFAULT_VIEW = {
    latitude: 46.195,
    longitude: 8.97,
    zoom: 10,
    pitch: 45,
    bearing: -15
};

export default function PropertyMapB({
    onHoverChange,
    preloaderDone = true
}: {
    onHoverChange?: (hovered: boolean) => void;
    preloaderDone?: boolean;
}) {
    const mapRef = useRef<any>(null);

    const [viewReady, setViewReady] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    const [hoveredProperty, setHoveredProperty] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const activeMobileProperty = properties[activeIndex];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const moveToProperty = useCallback(
        (property: (typeof properties)[number], index: number, mobileMode: boolean) => {
            if (!mapRef.current) return;

            const bearing = mobileMode
                ? -8 + ((index % 2) * 8)
                : -15 + ((index % 3) * 10);

            const camera = mobileMode ? MOBILE_CAMERA : DESKTOP_CAMERA;

            mapRef.current.easeTo({
                center: [property.lng, property.lat],
                zoom: camera.zoom,
                pitch: camera.pitch,
                bearing,
                padding: camera.padding,
                duration: camera.duration,
                easing: (t: number) =>
                    t < 0.5
                        ? 4 * t * t * t
                        : 1 - Math.pow(-2 * t + 2, 3) / 2,
                essential: true,
            });
        },
        []
    );

    useEffect(() => {
        if (!mapRef.current || !viewReady || !isMobile) return;
        moveToProperty(activeMobileProperty, activeIndex, true);
        onHoverChange?.(true);
    }, [activeIndex, activeMobileProperty, viewReady, isMobile, onHoverChange, moveToProperty]);

    const handleSetHoveredProperty = (id: string | null) => {
        if (isMobile) return;
        setHoveredProperty(id);
        onHoverChange?.(id !== null);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % properties.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + properties.length) % properties.length);
    };

    const handleResetView = () => {
        if (!mapRef.current) return;

        mapRef.current.easeTo({
            center: [DEFAULT_VIEW.longitude, DEFAULT_VIEW.latitude],
            zoom: DEFAULT_VIEW.zoom,
            pitch: DEFAULT_VIEW.pitch,
            bearing: DEFAULT_VIEW.bearing,
            duration: isMobile ? 900 : 2200,
            padding: { top: 0, bottom: 0, left: 0, right: 0 },
            essential: true,
        });
    };

    const handleLoad = (e: any) => {
        const map = e.target;
        const isPhone = window.innerWidth < 768;

        setViewReady(true);

        if (!isPhone) {
            map.addSource("mapbox-dem", {
                type: "raster-dem",
                url: "mapbox://mapbox.mapbox-terrain-dem-v1",
                tileSize: 512,
                maxzoom: 14
            });

            map.setTerrain({ source: "mapbox-dem", exaggeration: 1.3 });

            map.setFog({
                color: "#1A1A1A",
                "high-color": "#1A1A1A",
                "horizon-blend": 0.2
            });
        }

        const layers = map.getStyle().layers || [];

        layers.forEach((layer: any) => {
            if (!isPhone && layer.id.includes("road")) {
                map.setPaintProperty(layer.id, "line-color", "#ffffff");
                map.setPaintProperty(layer.id, "line-opacity", 0.15);
            }

            if (layer.id.includes("water") && layer.type === "fill") {
                map.setPaintProperty(layer.id, "fill-color", "#080d17");
            }

            if (
                !isPhone &&
                (layer.id.includes("landcover") ||
                    layer.id.includes("national-park") ||
                    layer.id.includes("pitch")) &&
                layer.type === "fill"
            ) {
                map.setPaintProperty(layer.id, "fill-color", "#132018");
                map.setPaintProperty(layer.id, "fill-opacity", 0.6);
            }

            if (layer.type === "symbol" && layer.layout && layer.layout["text-field"]) {
                map.setPaintProperty(layer.id, "text-color", "#ffffff");
                map.setPaintProperty(layer.id, "text-halo-color", "#1A1A1A");
                map.setPaintProperty(layer.id, "text-halo-width", 1.2);
            }
        });

        if (isPhone) {
            map.easeTo({
                center: [activeMobileProperty.lng, activeMobileProperty.lat],
                zoom: MOBILE_CAMERA.zoom,
                pitch: MOBILE_CAMERA.pitch,
                bearing: -8,
                padding: MOBILE_CAMERA.padding,
                duration: 0,
                essential: true
            });
        }
    };

    const desktopActivePropertyImages =
        properties.find((p) => p.id === hoveredProperty)?.images || [];

    return (
        <section className="relative w-full h-screen bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <Map
                    ref={mapRef}
                    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                    initialViewState={DEFAULT_VIEW}
                    mapStyle="mapbox://styles/mapbox/dark-v11"
                    attributionControl={false}
                    scrollZoom={false}
                    dragRotate={!isMobile}
                    touchZoomRotate={!isMobile}
                    doubleClickZoom={!isMobile}
                    dragPan={isMobile ? false : true}
                    style={{ width: "100%", height: "100%" }}
                    onLoad={handleLoad}
                >
                    {properties.map((property, i) => {
                        const isDesktopActive = hoveredProperty === property.id;
                        const isMobileActive = activeIndex === i;
                        const isActive = isMobile ? isMobileActive : isDesktopActive;

                        return (
                            <Marker
                                key={property.id}
                                longitude={property.lng}
                                latitude={property.lat}
                                anchor="center"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={
                                        preloaderDone
                                            ? { opacity: 1, scale: 1 }
                                            : { opacity: 0, scale: 0 }
                                    }
                                    transition={{
                                        delay: markerAnimIndex(property.id) * (isMobile ? 0.18 : 0.9),
                                        duration: isMobile ? 0.45 : 0.8
                                    }}
                                    className="group relative cursor-pointer"
                                    onMouseEnter={() => !isMobile && handleSetHoveredProperty(property.id)}
                                    onMouseLeave={() => !isMobile && handleSetHoveredProperty(null)}
                                    onClick={(e) => {
                                        if (isMobile) {
                                            e.stopPropagation();
                                            setActiveIndex(i);
                                        }
                                    }}
                                >
                                    {!isMobile ? (
                                        <Link
                                            href={`/properties/${property.slug}`}
                                            className="absolute inset-0 z-50 rounded-full w-full h-full"
                                        />
                                    ) : null}

                                    {isMobile ? (
                                        <>
                                            <div
                                                className={`absolute rounded-full transition-all duration-300 ${isActive
                                                    ? "w-10 h-10 -top-3 -left-3 bg-[#FFD700]/35 blur-md"
                                                    : "w-5 h-5 -top-1.5 -left-1.5 bg-white/10 blur-sm"
                                                    }`}
                                            />

                                            <div
                                                className={`relative rounded-full border border-white transition-all duration-300 ${isActive
                                                    ? "w-4 h-4 bg-[#FFD700] scale-125 shadow-[0_0_20px_rgba(255,215,0,0.8)]"
                                                    : "w-2.5 h-2.5 bg-white/70"
                                                    }`}
                                            />

                                            {isActive && (
                                                <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] uppercase bg-[#1A1A1A]/92 backdrop-blur-md px-3 py-1.5 border border-[#FFD700]/40 whitespace-nowrap text-[#f4f4f0]">
                                                    {property.name}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className={`absolute w-12 h-12 -top-4 -left-4 rounded-full blur-md transition duration-500 ${isActive
                                                    ? "bg-[#FFD700]/60 scale-150"
                                                    : "bg-[#FFD700]/30 animate-pulse"
                                                    }`}
                                                style={{ animationDuration: "4s" }}
                                            />

                                            <div
                                                className={`absolute w-8 h-8 -top-2 -left-2 rounded-full transition duration-1000 ${isActive
                                                    ? "bg-[#FFD700]/0"
                                                    : "bg-[#FFD700]/60 animate-ping"
                                                    }`}
                                                style={{ animationDuration: "3s" }}
                                            />

                                            <div
                                                className={`relative w-4 h-4 rounded-full border-2 border-white shadow-[0_0_15px_3px_rgba(255,215,0,0.6)] transition duration-300 ${isActive
                                                    ? "bg-white shadow-[0_0_25px_8px_rgba(255,215,0,0.9)] scale-150"
                                                    : "bg-[#FFD700] group-hover:scale-125"
                                                    }`}
                                            />

                                            <div
                                                className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition duration-300 text-xs tracking-widest bg-[#1A1A1A]/95 backdrop-blur-md px-4 py-2 border whitespace-nowrap shadow-[0_5px_15px_rgba(255,215,0,0.15)] ${isActive
                                                    ? "opacity-100 border-[#FFD700] text-[#FFD700]"
                                                    : "opacity-0 border-[#333] text-[#f4f4f0] group-hover:opacity-100"
                                                    }`}
                                            >
                                                {property.name}
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            </Marker>
                        );
                    })}
                </Map>
            </div>

            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#1A1A1A]/90 via-transparent to-[#1A1A1A]/90 md:block hidden" />
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#1A1A1A]/90 via-transparent to-transparent md:block hidden" />

            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/30 to-[#1A1A1A]/60 md:hidden block" />
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-x from-[#1A1A1A]/45 via-transparent to-[#1A1A1A]/45 md:hidden block" />

            <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    background: isMobile
                        ? "radial-gradient(circle at 50% 38%, transparent 18%, rgba(26,26,26,0.42) 100%)"
                        : "radial-gradient(ellipse 60% 55% at 50% 50%, transparent 0%, rgba(26,26,26,0.55) 60%, rgba(26,26,26,0.92) 100%)"
                }}
            />

            <div className="hidden md:block">
                <div className={`absolute left-0 bottom-0 z-30 flex flex-col justify-end px-12 lg:px-32 pb-[6vh] w-[60%] pointer-events-none transition-opacity duration-500 ease-in-out ${hoveredProperty ? "opacity-0" : "opacity-100"}`}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className="pointer-events-auto flex flex-col items-start"
                    >
                        <h2 className="text-[#bba371] text-sm tracking-[0.4em] font-bold uppercase mb-4">
                            Welcome to
                        </h2>
                        <motion.h1
                            variants={luxuryTypewriterContainer}
                            initial="hidden"
                            animate="visible"
                            className="text-[clamp(50px,8vw,160px)] leading-[0.9] tracking-[-0.02em] font-light flex items-center whitespace-nowrap text-[#d6cdb7] drop-shadow-md mb-4"
                        >
                            {"Do-Minus".split("").map((char, index) => (
                                <motion.span key={index} variants={luxuryLetter}>
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </motion.div>
                </div>

                <div className="absolute left-16 top-0 bottom-0 z-50 w-[35%] lg:w-[30%] xl:w-[25%] pointer-events-none flex items-center justify-center">
                    <AnimatePresence>
                        {hoveredProperty && (
                            <motion.div
                                initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                                transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
                                className="w-full h-[85vh] flex gap-5"
                                style={{
                                    WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                                    maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
                                }}
                            >
                                <ScrollingColumn images={desktopActivePropertyImages} speed={80} />
                                <ScrollingColumn images={[...desktopActivePropertyImages].reverse()} reverse speed={80} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="absolute right-0 top-0 bottom-0 z-30 flex flex-col justify-center px-16 w-[450px] pointer-events-none">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col gap-6 pointer-events-auto bg-[#1A1A1A]/20 backdrop-blur-sm p-8 border border-white/5 shadow-2xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6"
                        >
                            <h2 className="text-[#bba371] text-sm tracking-[0.2em] font-bold uppercase mb-2">
                                Destinations
                            </h2>
                            <h3 className="text-4xl tracking-tight font-light text-[#f4f4f0] mb-4">
                                Our Domains
                            </h3>
                            <button
                                className="text-[10px] text-white/50 hover:text-white uppercase tracking-[0.2em] transition-colors duration-300 border-b border-white/20 hover:border-white pb-1"
                                onClick={handleResetView}
                            >
                                Reset View
                            </button>
                        </motion.div>

                        {properties.map((property, i) => (
                            <motion.div
                                key={property.id}
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.2 + i * 0.15,
                                    duration: 0.8,
                                    ease: [0.2, 0.65, 0.3, 0.9]
                                }}
                                className="group flex flex-col gap-1 cursor-pointer border-b border-white/10 pb-4 hover:border-[#bba371]/50 transition-colors"
                                onMouseEnter={() => {
                                    handleSetHoveredProperty(property.id);
                                    moveToProperty(property, i, false);
                                }}
                                onMouseLeave={() => handleSetHoveredProperty(null)}
                            >
                                <Link href={`/properties/${property.slug}`} className="flex flex-col gap-1">
                                    <div className="flex items-center justify-between">
                                        <span
                                            className={`text-xl tracking-wide transition-colors duration-300 ${hoveredProperty === property.id
                                                ? "text-[#bba371]"
                                                : "text-white group-hover:text-[#bba371]"
                                                }`}
                                        >
                                            {property.name}
                                        </span>
                                        <span
                                            className={`text-[#bba371] transition-all duration-300 transform ${hoveredProperty === property.id
                                                ? "opacity-100 translate-x-0"
                                                : "opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                                                }`}
                                        >
                                            →
                                        </span>
                                    </div>
                                    <span className="text-xs text-white/50 tracking-widest uppercase">
                                        {property.location}
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="md:hidden block">
                <div
                    className="absolute pt-20 left-4 z-40 pointer-events-none"
                    style={{ top: "max(1rem, env(safe-area-inset-top))" }}
                >
                    <h2 className="text-[#bba371] text-[9px] tracking-[0.35em] font-bold uppercase mb-1.5">
                        Welcome to
                    </h2>
                    <h1 className="text-[clamp(1.6rem,6vw,2rem)] tracking-[0.18em] font-light text-[#f4f4f0] drop-shadow-md">
                        Do-Minus
                    </h1>
                </div>

                <div
                    className="absolute left-2 z-40 pointer-events-none"
                    style={{ top: "38%", transform: "translateY(-50%)" }}
                >
                    <button
                        onClick={handlePrev}
                        className="pointer-events-auto flex items-center justify-center w-11 h-11 rounded-none bg-[#1A1A1A]/60 border border-white/20 hover:bg-[#bba371]/90 hover:border-[#bba371] active:scale-95 transition-all duration-300 backdrop-blur-md group"
                        aria-label="Previous property"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[#d6cdb7] group-hover:text-white group-hover:-translate-x-1 transition-all duration-300"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>
                </div>

                <div
                    className="absolute right-2 z-40 pointer-events-none"
                    style={{ top: "38%", transform: "translateY(-50%)" }}
                >
                    <button
                        onClick={handleNext}
                        className="pointer-events-auto flex items-center justify-center w-11 h-11 rounded-none bg-[#1A1A1A]/60 border border-white/20 hover:bg-[#bba371]/90 hover:border-[#bba371] active:scale-95 transition-all duration-300 backdrop-blur-md group"
                        aria-label="Next property"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[#d6cdb7] group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                </div>

                <div
                    className="absolute w-full left-1/2 -translate-x-1/2 px-3 z-50 pointer-events-none flex justify-center"
                    style={{ bottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -16, filter: "blur(10px)" }}
                            transition={{ duration: 0.45, ease: [0.2, 0.65, 0.3, 0.9] }}
                            className="pointer-events-auto flex flex-col bg-[#1A1A1A]/80 backdrop-blur-2xl border border-white/15 rounded-none overflow-hidden shadow-2xl w-full max-w-[min(92vw,26rem)]"
                        >
                            <div
                                className="w-full relative overflow-hidden group"
                                style={{ height: "clamp(150px, 22vh, 180px)" }}
                            >
                                <Link
                                    href={`/properties/${activeMobileProperty.slug}`}
                                    className="absolute inset-0 z-20"
                                />
                                <img
                                    src={activeMobileProperty.images[0]}
                                    alt={activeMobileProperty.name}
                                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1600ms] ease-out z-0"
                                />
                                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                            </div>

                            <div className="w-full px-5 py-4 flex flex-col justify-center relative">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#bba371] to-transparent opacity-80" />

                                <h2 className="text-[#bba371] text-[9px] tracking-[0.28em] font-bold uppercase mb-1.5">
                                    Destination
                                </h2>

                                <h3 className="text-[clamp(1.5rem,5.5vw,1.9rem)] tracking-tight font-light text-[#f4f4f0] mb-2 leading-none">
                                    {activeMobileProperty.name}
                                </h3>

                                <p className="text-white/60 text-[11px] tracking-[0.18em] uppercase mb-5 flex items-center gap-2">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-[#bba371] shrink-0"
                                    >
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span>{activeMobileProperty.location}</span>
                                </p>

                                <Link
                                    href={`/properties/${activeMobileProperty.slug}`}
                                    className="inline-flex w-fit items-center gap-3 text-sm text-white hover:text-[#bba371] transition-colors border-b border-transparent hover:border-[#bba371] pb-1 group/link z-20 relative"
                                >
                                    Explore Property
                                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                                        →
                                    </span>
                                </Link>

                                <div className="absolute bottom-4 right-5 flex gap-1.5 z-20">
                                    {properties.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveIndex(idx)}
                                            className={`h-1 rounded-none transition-all duration-500 hover:bg-[#bba371]/80 ${idx === activeIndex ? "w-6 bg-[#bba371]" : "w-2 bg-white/20"
                                                }`}
                                            aria-label={`Go to property ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}