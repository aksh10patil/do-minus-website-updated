import LuxReveal from "@/public/components/ui/LuxReveal";
import Footer from "@/public/components/ui/Footer";
import Image from "next/image";

export default function PhilosophyPage() {
    return (
        <main className="min-h-screen bg-[#1A1A1A] text-white selection:bg-white/20" style={{ fontFamily: "Courier, monospace" }}>

            {/* Hero Section */}
            <section className="relative w-full min-h-[90vh] flex justify-center w-full">
                <div className="w-full max-w-[1920px] px-8 md:px-16 lg:px-32 flex flex-col justify-center">
                    <LuxReveal delay={0.2} direction="up" duration={1.2}>
                        <p className="text-[#A3A3A3] text-sm md:text-base tracking-[0.2em] uppercase mb-8">
                            Do-Minus
                        </p>
                        <h1 className="text-[clamp(50px,8vw,160px)] leading-[1.05] tracking-[0.1em] font-light uppercase">
                            Philosophy
                        </h1>
                    </LuxReveal>
                </div>
            </section>

            {/* 1. Do Less */}
            <section className="py-24 md:py-[160px] border-t border-[#333333]/50 flex justify-center w-full">
                <div className="w-full max-w-[1920px] px-8 md:px-16 lg:px-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                    <div className="lg:w-1/3 flex justify-start lg:justify-end w-full">
                    <LuxReveal direction="up">
                        <h2 className="text-[clamp(30px,4vw,60px)] leading-[1.1] tracking-wide font-light text-left lg:text-right">
                            Do Less
                        </h2>
                    </LuxReveal>
                </div>
                <div className="lg:w-2/3 flex flex-col gap-16">
                    <div className="flex flex-col gap-8 text-[#ECECEC] text-sm md:text-base md:text-lg leading-relaxed tracking-wide">
                        <LuxReveal direction="up" delay={0.1}>
                            <p>The name Do-Minus carries a simple but powerful idea: do less.</p>
                        </LuxReveal>
                        <LuxReveal direction="up" delay={0.2}>
                            <p className="text-[#A3A3A3]">
                                In a world that constantly adds more noise, more speed and more distraction, Do-Minus invites the opposite. It is a philosophy rooted in subtraction — removing what is unnecessary to reveal what truly matters.
                            </p>
                        </LuxReveal>
                        <LuxReveal direction="up" delay={0.3}>
                            <p>
                                Inspired by Mies van der Rohe’s principle “less is more” and the Japanese concept of Wabi-Sabi, Do-Minus celebrates simplicity, imperfection and authenticity.
                            </p>
                        </LuxReveal>
                        <LuxReveal direction="up" delay={0.4}>
                            <p className="text-xl md:text-2xl mt-8 italic text-white">
                                Luxury here is quiet.
                            </p>
                        </LuxReveal>
                        <LuxReveal direction="up" delay={0.5}>
                            <p>
                                Not loud, not excessive, but thoughtful, intentional and deeply connected to place.
                            </p>
                        </LuxReveal>
                    </div>
                    <LuxReveal direction="up" delay={0.6}>
                        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden">
                            <Image
                                src="/Do-Minus/Ca_Negra/ca_negra_v1.avif"
                                alt="Quiet luxury at Do-Minus"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </LuxReveal>
                </div>
                </div>
            </section>

            {/* 2. A Return to Simplicity */}
            <section className="py-24 md:py-[160px] border-t border-[#333333]/50 flex justify-center w-full">
                <div className="w-full max-w-[1920px] px-8 md:px-16 lg:px-32 flex flex-col lg:flex-row gap-16 lg:gap-32">
                    <div className="lg:w-1/2 flex flex-col justify-center">
                    <LuxReveal direction="up">
                        <div className="relative w-full aspect-[3/4] overflow-hidden">
                            <Image
                                src="/Do-Minus/Ca_Pedrot/ca_pedrot.avif"
                                alt="Morning light in Ca Pedrot"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </LuxReveal>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center gap-12">
                    <LuxReveal direction="up">
                        <h2 className="text-[clamp(30px,4vw,60px)] leading-[1.1] tracking-wide font-light">
                            A Return<br />to Simplicity
                        </h2>
                    </LuxReveal>
                    <div className="flex flex-col gap-8 text-[#ECECEC] text-sm md:text-base md:text-lg leading-relaxed tracking-wide">
                        <LuxReveal direction="up" delay={0.1}>
                            <p>Every Do-Minus property is designed to slow the rhythm of life.</p>
                        </LuxReveal>
                        <LuxReveal direction="up" delay={0.2}>
                            <p className="text-[#A3A3A3]">
                                Stone walls, wooden textures, natural light and silence create spaces where guests can pause and reconnect with themselves.
                            </p>
                        </LuxReveal>
                        <LuxReveal direction="up" delay={0.3}>
                            <p>This is not hospitality designed for speed.</p>
                            <p className="mt-4">It is hospitality designed for presence.</p>
                        </LuxReveal>
                        <div className="mt-8 flex flex-col gap-2 text-[#A3A3A3] italic">
                            <LuxReveal direction="up" delay={0.4}><p>Morning light entering a historic room.</p></LuxReveal>
                            <LuxReveal direction="up" delay={0.5}><p>Coffee in a quiet garden.</p></LuxReveal>
                            <LuxReveal direction="up" delay={0.6}><p>The warmth of a fireplace after a walk through the mountains.</p></LuxReveal>
                        </div>
                        <LuxReveal direction="up" delay={0.7}>
                            <p className="mt-8">Moments that ask for nothing more than attention.</p>
                        </LuxReveal>
                    </div>
                </div>
                </div>
            </section>

            {/* 3. Architecture That Respects Time */}
            <section className="py-24 md:py-[160px] border-t border-[#333333]/50 bg-[#151515] flex justify-center w-full">
                <div className="w-full max-w-[1920px] px-8 md:px-16 lg:px-32 flex flex-col lg:flex-row-reverse gap-16 lg:gap-32">
                    <div className="lg:w-1/2 flex flex-col justify-center">
                    <LuxReveal direction="up">
                        <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden">
                            <Image
                                src="/Do-Minus/Ca_Polete/ca_polete.avif"
                                alt="Restored architecture at Ca Polete"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </LuxReveal>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center gap-12">
                    <LuxReveal direction="up">
                        <h2 className="text-[clamp(30px,4vw,60px)] leading-[1.1] tracking-wide font-light">
                            Architecture<br />That Respects Time
                        </h2>
                    </LuxReveal>
                    <div className="flex flex-col gap-8 text-[#ECECEC] text-sm md:text-base md:text-lg leading-relaxed tracking-wide">
                        <LuxReveal direction="up" delay={0.2}>
                            <p>The Do-Minus collection began with a simple act: rescuing forgotten houses.</p>
                        </LuxReveal>
                        <LuxReveal direction="up" delay={0.3}>
                            <p className="text-[#A3A3A3]">
                                Architects Riccarda Guidotti and Andrea Frapolli developed a passion for restoring abandoned Ticino homes while collecting vintage design pieces from across Europe. Instead of demolishing these buildings, they chose preservation.
                            </p>
                        </LuxReveal>
                        <LuxReveal direction="up" delay={0.4}>
                            <p>
                                Each house is restored conservatively, allowing history to remain visible while introducing subtle contemporary comforts. The result is a dialogue between past and present.
                            </p>
                        </LuxReveal>
                        <div className="mt-8 flex flex-col gap-2 text-[#A3A3A3] italic">
                            <LuxReveal direction="up" delay={0.5}><p>Stone meets steel.</p></LuxReveal>
                            <LuxReveal direction="up" delay={0.6}><p>Heritage meets modern design.</p></LuxReveal>
                            <LuxReveal direction="up" delay={0.7}><p>Imperfection becomes beauty.</p></LuxReveal>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* 4. Design That Tells a Story */}
            <section className="py-24 md:py-[160px] border-t border-[#333333]/50 flex justify-center w-full">
                <div className="w-full max-w-[1920px] px-8 md:px-16 lg:px-32 flex flex-col lg:flex-row gap-16 lg:gap-32">
                    <div className="lg:w-1/2 flex flex-col justify-center gap-12">
                    <LuxReveal direction="up">
                        <h2 className="text-[clamp(30px,4vw,60px)] leading-[1.1] tracking-wide font-light">
                            Design That<br />Tells a Story
                        </h2>
                    </LuxReveal>
                    <div className="flex flex-col gap-8 text-[#ECECEC] text-sm md:text-base md:text-lg leading-relaxed tracking-wide">
                        <LuxReveal direction="up" delay={0.1}>
                            <p>Inside every property, mid-century design pieces from the 1950s to the 1970s coexist with traditional architecture.</p>
                        </LuxReveal>
                        <LuxReveal direction="up" delay={0.2}>
                            <p>These objects are not decorations. They are fragments of history.</p>
                        </LuxReveal>
                        <LuxReveal direction="up" delay={0.3}>
                            <p className="text-[#A3A3A3]">
                                Each chair, lamp or table carries a narrative — a quiet reminder that design once belonged to architects, craftsmen and thoughtful makers.
                            </p>
                        </LuxReveal>
                        <LuxReveal direction="up" delay={0.4}>
                            <p className="mt-8">The spaces feel curated rather than decorated.</p>
                            <p className="mt-2 text-[#A3A3A3]">Authentic rather than polished.</p>
                        </LuxReveal>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="grid grid-cols-2 gap-4 md:gap-8">
                        <LuxReveal direction="up" delay={0.5} className="relative w-full aspect-[3/4] overflow-hidden mt-8 lg:mt-32">
                            <Image
                                src="/Do-Minus/Ca_Spontoi/ca_spontoi_v1.avif"
                                alt="Mid-century design piece"
                                fill
                                className="object-cover"
                            />
                        </LuxReveal>
                        <LuxReveal direction="up" delay={0.6} className="relative w-full aspect-[3/4] overflow-hidden mb-8 lg:mb-32">
                            <Image
                                src="/Do-Minus/Ca_Pedrot/ca_pedrot_v2.avif"
                                alt="Authentic interior"
                                fill
                                className="object-cover"
                            />
                        </LuxReveal>
                    </div>
                </div>
                </div>
            </section>

            {/* 5. Nature as Co-Author */}
            <section className="py-24 md:py-[160px] border-t border-[#333333]/50 bg-[#151515] flex justify-center w-full">
                <div className="w-full max-w-[1920px] px-8 md:px-16 lg:px-32 flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-32">
                    <div className="lg:w-1/3 flex justify-start w-full">
                    <LuxReveal direction="up">
                        <h2 className="text-[clamp(30px,4vw,60px)] leading-[1.1] tracking-wide font-light text-left">
                            Nature as<br />Co-Author
                        </h2>
                    </LuxReveal>
                </div>
                <div className="lg:w-2/3 flex flex-col gap-16">
                    <LuxReveal direction="up" delay={0.1}>
                        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden">
                            <Image
                                src="/Do-Minus/Ca_Negra/ca_negra_v4.avif"
                                alt="Nature shaping the atmosphere"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </LuxReveal>
                    <div className="flex flex-col gap-8 text-[#ECECEC] text-sm md:text-base md:text-lg leading-relaxed tracking-wide">
                        <LuxReveal direction="up" delay={0.2}>
                            <p>At Do-Minus, nature is not a backdrop. It is part of the experience.</p>
                        </LuxReveal>
                        <LuxReveal direction="up" delay={0.3}>
                            <p className="text-[#A3A3A3]">
                                Mountains, forests, lakes and gardens shape the atmosphere of every property. Seasons transform the spaces continuously.
                            </p>
                        </LuxReveal>
                        <div className="mt-8 flex flex-col gap-2 text-[#A3A3A3] italic">
                            <LuxReveal direction="up" delay={0.4}><p>Snow reflecting candlelight in winter.</p></LuxReveal>
                            <LuxReveal direction="up" delay={0.5}><p>Garden mornings in spring.</p></LuxReveal>
                            <LuxReveal direction="up" delay={0.6}><p>Mountain air in summer.</p></LuxReveal>
                            <LuxReveal direction="up" delay={0.7}><p>Golden forests in autumn.</p></LuxReveal>
                        </div>
                        <LuxReveal direction="up" delay={0.8}>
                            <p className="mt-8">Nature writes its own story alongside the architecture.</p>
                        </LuxReveal>
                    </div>
                </div>
                </div>
            </section>

            {/* 6. Wellness Through Stillness */}
            <section className="py-24 md:py-[160px] border-t border-[#333333]/50 flex justify-center w-full">
                <div className="w-full max-w-[1920px] px-8 md:px-16 lg:px-32 flex flex-col lg:flex-row gap-16 lg:gap-32">
                    <div className="lg:w-1/2 flex flex-col justify-center">
                    <LuxReveal direction="up" delay={0.7}>
                        <div className="relative w-full aspect-[3/4] md:aspect-[4/3] overflow-hidden">
                            <Image
                                src="/Do-Minus/Ca_Pedrot/ca_pedrot_4.avif"
                                alt="Restorative atmosphere"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </LuxReveal>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center gap-12">
                    <LuxReveal direction="up">
                        <h2 className="text-[clamp(30px,4vw,60px)] leading-[1.1] tracking-wide font-light lg:text-right">
                            Wellness<br />Through Stillness
                        </h2>
                    </LuxReveal>
                    <div className="flex flex-col gap-8 text-[#ECECEC] text-sm md:text-base md:text-lg leading-relaxed tracking-wide lg:text-right lg:items-end">
                        <LuxReveal direction="up" delay={0.1}>
                            <p>Every property includes a private spa experience designed around calm and intimacy.</p>
                        </LuxReveal>
                        <LuxReveal direction="up" delay={0.2}>
                            <p className="text-[#A3A3A3] max-w-lg">
                                The goal is not indulgence for its own sake. It is restoration.
                            </p>
                        </LuxReveal>
                        <div className="mt-8 flex flex-col gap-2 text-[#A3A3A3] italic">
                            <LuxReveal direction="up" delay={0.3}><p>A sauna in the mountains.</p></LuxReveal>
                            <LuxReveal direction="up" delay={0.4}><p>A bath surrounded by stone walls.</p></LuxReveal>
                            <LuxReveal direction="up" delay={0.5}><p>A quiet moment under the stars.</p></LuxReveal>
                        </div>
                        <LuxReveal direction="up" delay={0.6}>
                            <p className="mt-8">Wellness at Do-Minus is less about treatment and more about atmosphere.</p>
                        </LuxReveal>
                    </div>
                </div>
                </div>
            </section>

            {/* 7. A Different Kind of Luxury */}
            <section className="py-24 md:py-[160px] border-t border-[#333333]/50 bg-[#151515] flex justify-center w-full">
                <div className="w-full max-w-[1920px] px-8 md:px-16 lg:px-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                    <div className="lg:w-1/3 flex justify-start lg:justify-end w-full">
                    <LuxReveal direction="up">
                        <h2 className="text-[clamp(30px,4vw,60px)] leading-[1.1] tracking-wide font-light text-left lg:text-right">
                            A Different<br />Kind of Luxury
                        </h2>
                    </LuxReveal>
                </div>
                <div className="lg:w-2/3 flex flex-col gap-16">
                    <LuxReveal direction="up" delay={0.1}>
                        <div className="relative w-full aspect-video overflow-hidden">
                            <Image
                                src="/Do-Minus/Ca_Negra/ca_negra_v2.avif"
                                alt="A Different Kind of Luxury"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </LuxReveal>
                    <div className="flex flex-col gap-8 text-[#ECECEC] text-sm md:text-base md:text-lg leading-relaxed tracking-wide">
                        <LuxReveal direction="up" delay={0.2}>
                            <p>Do-Minus redefines luxury through restraint.</p>
                        </LuxReveal>
                        <LuxReveal direction="up" delay={0.3}>
                            <p className="text-[#A3A3A3]">Luxury is:</p>
                            <ul className="mt-4 flex flex-col gap-2 list-none p-0 text-[#A3A3A3]">
                                <li>— space to breathe</li>
                                <li>— design with meaning</li>
                                <li>— materials that age beautifully</li>
                                <li>— time without urgency</li>
                            </ul>
                        </LuxReveal>
                        <LuxReveal direction="up" delay={0.4}>
                            <p className="mt-8">It is not excess.</p>
                            <p className="mt-2 text-xl md:text-2xl text-white italic">It is presence.</p>
                        </LuxReveal>
                    </div>
                </div>
                </div>
            </section>

            {/* 8. An Invitation */}
            <section className="py-32 md:py-[200px] border-t border-[#333333]/50 flex justify-center w-full text-center">
                <div className="w-full max-w-[1920px] px-8 md:px-16 lg:px-32 flex flex-col items-center">
                    <LuxReveal direction="up">
                        <h2 className="text-[clamp(40px,5vw,80px)] leading-[1.1] tracking-wide font-light mb-12">
                        An Invitation
                    </h2>
                </LuxReveal>
                <div className="max-w-3xl flex flex-col gap-8 text-[#ECECEC] text-sm md:text-base md:text-lg leading-relaxed tracking-wide">
                    <LuxReveal direction="up" delay={0.1}>
                        <p>Do-Minus is more than a place to stay.</p>
                        <p className="mt-4">It is a place to slow down.</p>
                    </LuxReveal>
                    <div className="mt-4 flex flex-col gap-2 text-[#A3A3A3] italic">
                        <LuxReveal direction="up" delay={0.2}><p>To reconnect with nature.</p></LuxReveal>
                        <LuxReveal direction="up" delay={0.3}><p>To rediscover silence.</p></LuxReveal>
                        <LuxReveal direction="up" delay={0.4}><p>To experience architecture, design and time differently.</p></LuxReveal>
                    </div>
                    <LuxReveal direction="up" delay={0.5}>
                        <p className="mt-12 text-[#A3A3A3]">At Do-Minus, you do not simply check in.</p>
                        <p className="mt-4 text-2xl md:text-4xl text-white tracking-[0.1em] uppercase">You return to yourself.</p>
                    </LuxReveal>
                </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
