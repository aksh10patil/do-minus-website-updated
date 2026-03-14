import Image from "next/image";
import Link from "next/link";
import Footer from "@/public/components/ui/Footer";
import Typewriter from "@/public/components/ui/Typewriter";
import LuxReveal from "@/public/components/ui/LuxReveal";

interface PropertyImage {
    src: string;
    alt: string;
}

interface PropertyData {
    name: string;
    location: string;
    heroImage: string;
    philosophy: string;
    description: string;
    details: Record<string, string>;
    images: PropertyImage[];
}

const propertiesData: Record<string, PropertyData> = {
    "ca-spontoi": {
        name: "CÀ SPONTOI",
        location: "Gnosca, Ticino",
        heroImage: "/Do-Minus/Ca_Spontoi/ca_spontoi_v5.avif",
        philosophy: "Quiet village escape.\nNature and architecture.\nHistoric stone.",
        description: "A restored Ticino stone house in the historic village of Gnosca. Blends traditional architecture with subtle contemporary interventions while preserving its historic character.",
        details: {
            guests: "Up to 8 guests",
            capacity: "Private spa & garden",
            setting: "Mountain views"
        },
        images: [
            { src: "/Do-Minus/Ca_Spontoi/ca_spontoi_v5.avif", alt: "Historic Stone Facade" },
            { src: "/Do-Minus/Ca_Spontoi/ca_spontoi.avif", alt: "Living Space" },
            { src: "/Do-Minus/Ca_Spontoi/ca_spontoi_1.avif", alt: "Bedroom Retreat" },
            { src: "/Do-Minus/Ca_Spontoi/ca_spontoi_2.avif", alt: "Private Spa Area" },
            { src: "/Do-Minus/Ca_Spontoi/ca_spontoi_v1.avif", alt: "Garden View" },
            { src: "/Do-Minus/Ca_Spontoi/ca_spontoi_v3.avif", alt: "Architectural Detail" },
            { src: "/Do-Minus/Ca_Spontoi/ca_spontoi_v4.avif", alt: "Mountain Surroundings" },
            { src: "/Do-Minus/Ca_Spontoi/ca_sponoti_v2.avif", alt: "Interior Ambience" },
            { src: "/Do-Minus/Ca_Spontoi/ca_spontoi_map.avif", alt: "Location Map" }
        ]
    },
    "ca-polete": {
        name: "CÀ PÖLETE",
        location: "Monte Carasso, Ticino",
        heroImage: "/Do-Minus/Ca_Polete/ca_polete_v3.avif",
        philosophy: "Vibrant town life.\nSecluded calm.\nShared experiences.",
        description: "A design-led urban retreat combining vibrant town life with the privacy of a secluded design house. Designed for group gatherings and slow luxury.",
        details: {
            guests: "Up to 9 guests",
            capacity: "Separate private spa",
            setting: "Urban retreat"
        },
        images: [
            { src: "/Do-Minus/Ca_Polete/ca_polete_v3.avif", alt: "Urban Retreat Exterior" },
            { src: "/Do-Minus/Ca_Polete/ca_polete.avif", alt: "Design-led Living Area" },
            { src: "/Do-Minus/Ca_Polete/ca_polete_1.avif", alt: "Kitchen & Dining" },
            { src: "/Do-Minus/Ca_Polete/ca_polete_2.avif", alt: "Gathering Space" },
            { src: "/Do-Minus/Ca_Polete/ca_polete_v1.avif", alt: "Private Spa Room" },
            { src: "/Do-Minus/Ca_Polete/ca_polete_v2.avif", alt: "Cozy Wood-burning Stove" }
        ]
    },
    "ca-pedrot": {
        name: "CÀ PEDROT",
        location: "Mornera, 1,350m",
        heroImage: "/Do-Minus/Ca_Pedrot/ca_pedrot_v1.avif",
        philosophy: "Disconnect from daily life.\nReconnect with wilderness.\n1,350 meters above.",
        description: "A secluded mountain refuge located high above the valley. Offers an immersive alpine experience surrounded by nature, featuring a unique treehouse sauna and panoramic views.",
        details: {
            guests: "Up to 6 guests",
            capacity: "Treehouse sauna",
            setting: "Remote alpine"
        },
        images: [
            { src: "/Do-Minus/Ca_Pedrot/ca_pedrot_v3.avif", alt: "Mountain Refuge Exterior" },
            { src: "/Do-Minus/Ca_Pedrot/ca_pedrot.avif", alt: "Alpine Living Area" },
            { src: "/Do-Minus/Ca_Pedrot/ca_pedrot_2.avif", alt: "Treehouse Sauna" },
            { src: "/Do-Minus/Ca_Pedrot/ca_pedrot_3.avif", alt: "Panoramic Valley Views" },
            { src: "/Do-Minus/Ca_Pedrot/ca_pedrot_4.avif", alt: "Cottage Architecture" },
            { src: "/Do-Minus/Ca_Pedrot/ca_pedrot_5.avif", alt: "Snow Ritual Setting" },
            { src: "/Do-Minus/Ca_Pedrot/ca_pedrot_6.avif", alt: "Cozy Sleeping Quarters" },
            { src: "/Do-Minus/Ca_Pedrot/ca_pedrot_7.avif", alt: "Warm Alpine Ambience" },
            { src: "/Do-Minus/Ca_Pedrot/ca_pedrot_v1.avif", alt: "Winter Exterior" },
            { src: "/Do-Minus/Ca_Pedrot/ca_pedrot_v2.avif", alt: "Surrounding Wilderness" }
        ]
    },
    "ca-negra": {
        name: "CÀ NEGRA",
        location: "Mornera, 1,390m",
        heroImage: "/Do-Minus/Ca_Negra/ca_negra_v4.avif",
        philosophy: "Self-sufficient energy.\nNature immersion.\nPerfect seclusion.",
        description: "A self-sufficient alpine chalet near Cà Pedrot. Offers a sustainable retreat experience surrounded by mountains and forests, featuring an outdoor sauna and a nearby natural lake.",
        details: {
            guests: "Up to 9 guests",
            capacity: "Outdoor tree sauna",
            setting: "Energy self-sufficient"
        },
        images: [
            { src: "/Do-Minus/Ca_Negra/ca_negra_v4.avif", alt: "Self-Sufficient Chalet" },
            { src: "/Do-Minus/Ca_Negra/ca_negra_v1.avif", alt: "Outdoor Tree Sauna" },
            { src: "/Do-Minus/Ca_Negra/ca_negra_v2.avif", alt: "Wood Fireplace" },
            { src: "/Do-Minus/Ca_Negra/ca_negra_v3.avif", alt: "Forest Surroundings" }
        ]
    },
    "barca-winga": {
        name: "BARCA WINGA",
        location: "Lake Maggiore, Ticino",
        heroImage: "/Do-Minus/Barca_Winga/barca_winga.avif",
        philosophy: "Life on the water.\nMinimalist nautical living.\nVintage sailboat.",
        description: "A vintage 1981 sailboat offering a completely unique stay experience on Lake Maggiore. Fall asleep under the stars and wake up with the sound of water.",
        details: {
            guests: "2 guests",
            capacity: "Floating accommodation",
            setting: "Lake views"
        },
        images: [
            { src: "/Do-Minus/Barca_Winga/barca_winga_2.avif", alt: "Vintage 1981 Sailboat" },
            { src: "/Do-Minus/Barca_Winga/barca_winga.avif", alt: "Floating Accommodation" },
            { src: "/Do-Minus/Barca_Winga/barca_winga_boat_map.avif", alt: "Lake Maggiore Location" }
        ]
    }
};

export default async function PropertyPage(props: { params: Promise<{ slug: string }>, searchParams?: Promise<any> }) {
    const params = await props.params;
    const slug = params?.slug || "ca-spontoi";
    const propertyData = propertiesData[slug] || propertiesData["ca-spontoi"];

    return (
        <main className="relative flex flex-col bg-[#1A1A1A] text-[#ffffff] min-h-screen font-mono selection:bg-[#C6A] selection:text-white">
            {/* Navigation Header */}
            <div className="absolute top-0 w-full z-50 flex justify-center mix-blend-difference pointer-events-none">
                <nav className="w-full max-w-[1920px] flex justify-between items-center py-8 px-8 lg:px-32 text-[#FFFFFF] pointer-events-auto">
                    <Link href="/" className="uppercase text-xs sm:text-sm tracking-[0.15em] hover:opacity-70 transition-opacity">
                        Do-Minus
                    </Link>
                    <span className="uppercase text-xs sm:text-sm tracking-[0.15em] opacity-70">
                        {propertyData.location}
                    </span>
                </nav>
            </div>

            {/* Hero Section */}
            <section className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-end items-center">
                <div className="absolute inset-0 z-0 bg-[#1A1A1A]">
                    <Image
                        src={propertyData.heroImage}
                        alt={propertyData.name}
                        fill
                        className="object-cover opacity-70"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#1A1A1A]"></div>
                </div>

                <div className="relative z-10 w-full flex flex-col items-center justify-end text-center pb-4">
                    <h1 className="text-[clamp(50px,12vw,250px)] leading-[0.8] tracking-[0.10em] uppercase font-thin text-[#d6cdb7] translate-y-[10%]" style={{ fontFamily: "Courier, Courier New, monospace"}}>
                        <Typewriter text={propertyData.name} mode="luxury" className="inline-flex items-center whitespace-nowrap" />
                    </h1>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="w-full py-32 lg:py-56 bg-[#1A1A1A] flex justify-center">
                <div className="w-full max-w-[1920px] px-8 lg:px-32 flex justify-center items-center">
                    <LuxReveal delay={0.1} duration={1.2}>
                        <h2 className="text-2xl md:text-3xl lg:text-5xl leading-[1.2] font-light text-center tracking-wide text-[#FFFFFF] max-w-5xl whitespace-pre-line">
                            {propertyData.philosophy}
                        </h2>
                    </LuxReveal>
                </div>
            </section>

            {/* Description & Details Section */}
            <section className="w-full py-24 border-t border-[#6B6B6B]/30 bg-[#1A1A1A] flex justify-center">
                <div className="w-full max-w-[1920px] px-8 lg:px-32 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
                    <div className="lg:col-span-6 flex flex-col justify-center">
                        <LuxReveal delay={0.1}>
                            <p className="text-base md:text-lg leading-relaxed tracking-wide text-[#A3A3A3] max-w-lg">
                                {propertyData.description}
                            </p>
                        </LuxReveal>
                    </div>
                    <div className="lg:col-span-1 hidden lg:block"></div>
                    <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
                        {Object.entries(propertyData.details).map(([key, value], index) => (
                            <LuxReveal key={key} delay={0.2 + (index * 0.1)}>
                                <div className="flex justify-between items-center border-b border-[#6B6B6B]/30 pb-4">
                                    <span className="text-xs uppercase tracking-[0.15em] text-[#A3A3A3]">{key}</span>
                                    <span className="text-sm tracking-wide text-[#FFFFFF] font-light">{value}</span>
                                </div>
                            </LuxReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Gallery / The Space */}
            <section className="w-full py-24 lg:py-40 bg-[#1A1A1A] flex justify-center">
                <div className="w-full max-w-[1920px] px-8 lg:px-16">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 lg:gap-8">
                        {propertyData.images.map((img, index) => (
                            <div key={index} className="relative w-full overflow-hidden group break-inside-avoid mb-4 lg:mb-8">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto origin-center transform scale-100 group-hover:scale-[1.03] transition-transform duration-[15s] ease-out brightness-[0.85] group-hover:brightness-100"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                                    <span className="text-white text-sm md:text-base tracking-[0.2em] uppercase font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {img.alt}
                                    </span>
                                    <div className="h-[1px] w-0 bg-white/50 mt-4 group-hover:w-16 transition-all duration-700 delay-100"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Explore Other Properties */}
            <section className="w-full py-24 border-t border-[#6B6B6B]/30 bg-[#1A1A1A] flex flex-col items-center">
                <div className="w-full max-w-[1920px] px-8 lg:px-16 flex flex-col">
                    <div className="w-full flex justify-center mb-16">
                        <LuxReveal>
                            <h3 className="text-2xl md:text-3xl font-light tracking-[0.15em] text-[#FFFFFF] text-center uppercase" style={{ fontFamily: "Courier, Courier New, monospace" }}>
                                Explore Other Properties
                            </h3>
                        </LuxReveal>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Object.entries(propertiesData)
                            .filter(([key]) => key !== (propertiesData[slug] ? slug : "ca-spontoi"))
                            .map(([key, prop], index) => (
                                <LuxReveal key={key} delay={index * 0.1}>
                                    <Link href={`/properties/${key}`} className="group flex flex-col gap-6">
                                        <div className="relative w-full aspect-[4/5] overflow-hidden">
                                            <Image
                                                src={prop.heroImage}
                                                alt={prop.name}
                                                fill
                                                className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-1000"></div>
                                        </div>
                                        <div className="flex flex-col items-center text-center">
                                            <h4 className="text-lg md:text-xl tracking-[0.1em] text-[#d6cdb7] uppercase" style={{ fontFamily: "Courier, Courier New, monospace" }}>
                                                {prop.name}
                                            </h4>
                                            <span className="text-xs tracking-[0.15em] text-[#A3A3A3] uppercase mt-2">
                                                {prop.location}
                                            </span>
                                        </div>
                                    </Link>
                                </LuxReveal>
                            ))}
                    </div>
                </div>
            </section>

            {/* Contact / Booking */}
            <section className="w-full py-32 lg:py-56 bg-[#1A1A1A] flex justify-center">
                <div className="w-full max-w-[1920px] px-8 lg:px-32 flex flex-col items-center justify-center text-center">
                    <h3 className="text-3xl md:text-5xl font-light tracking-[0.1em] mb-16">
                        READY TO RETURN?
                    </h3>
                    <button className="px-12 py-5 border border-[#FFFFFF] bg-transparent text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#0a0a0a] transition-all duration-700 uppercase tracking-[0.2em] text-xs">
                        Request Booking
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
