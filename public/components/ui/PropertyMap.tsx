"use client";

import Map, { Marker } from "react-map-gl/mapbox";
import { useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { motion, AnimatePresence } from "framer-motion";

const properties = [
    {
        id: "barca", name: "Barca Winga", lat: 46.1737, lng: 8.8125, location: "Lake Maggiore, CH",
        images: ["/Do-Minus/Barca_Winga/barca_winga.avif", "/Do-Minus/Barca_Winga/barca_winga_2.avif", "/Do-Minus/Barca_Winga/barca_winga_boat_map.avif"]
    },
    {
        id: "polete", name: "Ca Polete", lat: 46.1863, lng: 8.9974, location: "Locarno, CH",
        images: ["/Do-Minus/Ca_Polete/ca_polete_v1.avif", "/Do-Minus/Ca_Polete/ca_polete_v2.avif", "/Do-Minus/Ca_Polete/ca_polete_v3.avif"]
    },
    {
        id: "pedrot", name: "Ca Pedrot", lat: 46.2086, lng: 8.9830, location: "Mergoscia, CH",
        images: ["/Do-Minus/Ca_Pedrot/ca_pedrot_v2.avif", "/Do-Minus/Ca_Pedrot/ca_pedrot_v3.avif", "/Do-Minus/Ca_Pedrot/ca_pedrot_6.avif"]
    },
    {
        id: "negra", name: "Ca Negra", lat: 46.2069, lng: 8.9797, location: "Minusio, CH",
        images: ["/Do-Minus/Ca_Negra/ca_negra_v1.avif", "/Do-Minus/Ca_Negra/ca_negra_v2.avif", "/Do-Minus/Ca_Negra/ca_negra_v3.avif"]
    },
    {
        id: "spontoi", name: "Ca Spontoi", lat: 46.2099, lng: 9.0374, location: "Verzasca Valley, CH",
        images: ["/Do-Minus/Ca_Spontoi/ca_spontoi_1.avif", "/Do-Minus/Ca_Spontoi/ca_spontoi_2.avif", "/Do-Minus/Ca_Spontoi/ca_spontoi_v4.avif"]
    }
];

const imagePositions = [
    "top-[20%] left-[5%] w-[35vw] md:w-[16vw] aspect-[4/3] z-10 -rotate-3 hover:z-50 hover:scale-105 transition-all duration-300",
    "top-[35%] left-[16%] w-[40vw] md:w-[15vw] aspect-[3/4] z-20 rotate-1 shadow-2xl shadow-black/90 hover:z-50 hover:scale-105 transition-all duration-300",
    "bottom-[20%] left-[8%] w-[30vw] md:w-[12vw] aspect-square z-30 -rotate-3 shadow-2xl shadow-black/80 hover:z-50 hover:scale-105 transition-all duration-300"
];

export default function PropertyMap() {
    const mapRef = useRef<any>(null);
    const [hoveredProperty, setHoveredProperty] = useState<string | null>(null);

    const handleLoad = (e: any) => {
        const map = e.target;

        /* Terrain */
        map.addSource("mapbox-dem", {
            type: "raster-dem",
            url: "mapbox://mapbox.mapbox-terrain-dem-v1",
            tileSize: 512,
            maxzoom: 14
        });

        map.setTerrain({ source: "mapbox-dem", exaggeration: 1.3 });

        /* Fog perfectly matched to #050505 for seamless background integration */
        map.setFog({
            color: "rgb(5,5,5)",
            "high-color": "rgb(5,5,5)",
            "horizon-blend": 0.2
        });

        /* Slight white roads */
        const layers = map.getStyle().layers;

        layers.forEach((layer: any) => {
            if (layer.id.includes("road")) {
                try {
                    map.setPaintProperty(layer.id, "line-color", "#e5e5e5");
                    map.setPaintProperty(layer.id, "line-opacity", 0.7);
                } catch { }
            }
        });
    };

    const activePropertyImages = properties.find(p => p.id === hoveredProperty)?.images || [];

    return (
        <section className="relative w-full h-screen bg-[#050505] overflow-hidden" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
            {/* The Map */}
            <div className="absolute inset-0 z-0">
                <Map
                    ref={mapRef}
                    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                    initialViewState={{
                        latitude: 46.195,
                        longitude: 8.97,
                        zoom: 10,
                        pitch: 45,
                        bearing: -15
                    }}
                    mapStyle="mapbox://styles/mapbox/dark-v11"
                    attributionControl={false}
                    style={{ width: "100%", height: "100%" }}
                    onLoad={handleLoad}
                >
                    {properties.map((property, i) => (
                        <Marker
                            key={property.id}
                            longitude={property.lng}
                            latitude={property.lat}
                            anchor="center"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 + i * 0.2, duration: 0.8 }}
                                className="group relative cursor-pointer"
                                onMouseEnter={() => setHoveredProperty(property.id)}
                                onMouseLeave={() => setHoveredProperty(null)}
                            >
                                {/* Outer Glow */}
                                <div className={`absolute w-12 h-12 -top-4 -left-4 rounded-full blur-md transition duration-500 ${hoveredProperty === property.id ? 'bg-[#FFD700]/60 scale-150' : 'bg-[#FFD700]/30 animate-pulse'}`} />

                                {/* Inner Ping */}
                                <div className={`absolute w-8 h-8 -top-2 -left-2 rounded-full transition duration-1000 ${hoveredProperty === property.id ? 'bg-[#FFD700]/0' : 'bg-[#FFD700]/60 animate-ping'}`} />

                                {/* Solid Marker */}
                                <div className={`relative w-4 h-4 rounded-full border-2 border-white shadow-[0_0_15px_3px_rgba(255,215,0,0.6)] transition duration-300 ${hoveredProperty === property.id ? 'bg-white shadow-[0_0_25px_8px_rgba(255,215,0,0.9)] scale-150' : 'bg-[#FFD700] group-hover:scale-125'}`} />

                                {/* Label */}
                                <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition duration-300 text-xs tracking-widest bg-[#050505]/95 backdrop-blur-md px-4 py-2 border whitespace-nowrap shadow-[0_5px_15px_rgba(255,215,0,0.15)] ${hoveredProperty === property.id ? 'opacity-100 border-[#FFD700] text-[#FFD700]' : 'opacity-0 border-[#333] text-[#f4f4f0] group-hover:opacity-100'}`}>
                                    {property.name}
                                </div>
                            </motion.div>
                        </Marker>
                    ))}
                </Map>
            </div>

            {/* Seamless Overlay Gradients */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#050505] via-[#050505]/40 to-[#050505]" />
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#050505] via-transparent to-transparent h-32" />

            {/* Floating Image Gallery */}
            <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
                <div className="relative w-full h-full pointer-events-auto">
                    <AnimatePresence>
                        {hoveredProperty && activePropertyImages.map((img, idx) => (
                            <motion.img
                                key={`${hoveredProperty}-${idx}`}
                                src={img}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                transition={{
                                    duration: 0.6,
                                    delay: idx * 0.15,
                                    ease: [0.2, 0.65, 0.3, 0.9]
                                }}
                                className={`absolute object-cover shadow-2xl shadow-black/80 rounded-sm border border-white/5 ${imagePositions[idx % imagePositions.length]}`}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
            {/* Timewise Animated Property List from Right to Left with Gap */}
            <div className="absolute right-0 top-0 bottom-0 z-20 flex flex-col justify-center px-8 md:px-16 w-full md:w-[450px] pointer-events-none">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col gap-6 pointer-events-auto bg-[#050505]/20 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-2xl"
                >
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6"
                    >
                        <h2 className="text-[#bba371] text-xs md:text-sm tracking-[0.2em] font-bold uppercase mb-2">Destinations</h2>
                        <h3 className="text-3xl md:text-4xl tracking-tight font-light text-[#f4f4f0] mb-4">Our Domains</h3>
                        <button
                            className="text-[10px] text-white/50 hover:text-white uppercase tracking-[0.2em] transition-colors duration-300 border-b border-white/20 hover:border-white pb-1"
                            onClick={() => {
                                mapRef.current?.flyTo({
                                    center: [8.97, 46.195],
                                    zoom: 10,
                                    pitch: 45,
                                    bearing: -15,
                                    duration: 2000
                                });
                            }}
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
                                delay: 0.2 + (i * 0.15),
                                duration: 0.8,
                                ease: [0.2, 0.65, 0.3, 0.9]
                            }}
                            className="group flex flex-col gap-1 cursor-pointer border-b border-white/10 pb-4 hover:border-[#bba371]/50 transition-colors"
                            onMouseEnter={() => {
                                setHoveredProperty(property.id);
                                mapRef.current?.flyTo({
                                    center: [property.lng, property.lat],
                                    zoom: 13.5,
                                    pitch: 60,
                                    bearing: Math.random() * 40 - 20, // Add slight random bearing for dynamic feel
                                    duration: 2500,
                                    essential: true
                                });
                            }}
                            onMouseLeave={() => setHoveredProperty(null)}
                        >
                            <div className="flex items-center justify-between">
                                <span className={`text-lg md:text-xl tracking-wide transition-colors duration-300 ${hoveredProperty === property.id ? 'text-[#bba371]' : 'text-white group-hover:text-[#bba371]'}`}>
                                    {property.name}
                                </span>
                                <span className={`text-[#bba371] transition-all duration-300 transform ${hoveredProperty === property.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                                    →
                                </span>
                            </div>
                            <span className="text-xs text-white/50 tracking-widest uppercase">
                                {property.location}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}