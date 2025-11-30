"use client";
import Image from 'next/image';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

export function CreatorHero() {
    return (
        <section className="min-h-screen flex items-center relative px-6 md:px-20 overflow-hidden">
            {/* Animated Background */}
            <AnimatedBackground mode="creator" />

            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 pt-32">
                <div className="lg:col-span-7 z-10 order-2 lg:order-1">
                    {/* Status Badge */}
                    <div className="reveal-hidden inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/30 text-green-400 text-sm font-medium mb-6" style={{ transitionDelay: '0ms' }}>
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Available
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter mb-8 text-gray-100">
                        <span className="block">7Frames</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600">Aryan.</span>
                    </h1>

                    {/* Location Badge */}
                    <div className="reveal-hidden flex items-center gap-2 mb-6 text-gray-500" style={{ transitionDelay: '100ms' }}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Himachal Pradesh, India</span>
                    </div>

                    <p className="reveal-hidden text-lg md:text-xl leading-relaxed max-w-2xl text-gray-400" style={{ transitionDelay: '100ms' }}>
                        I shoot everything, just not with a gun (Yet) 💀
                    </p>

                    <div className="reveal-hidden flex flex-wrap gap-4 mt-10" style={{ transitionDelay: '200ms' }}>
                        <a href="#contact" className="px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase interactive transition-all hover:scale-105 hover:-translate-y-1 bg-white text-black hover:bg-amber-500 hover:text-white">
                            Connect With Me
                        </a>
                        <a href="#work" className="px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase interactive transition-all border border-white/20 text-white hover:bg-white/10 hover:scale-105 hover:-translate-y-1">
                            View Work
                        </a>
                    </div>
                </div>

                {/* Visuals / Bitmoji */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center h-full order-1 lg:order-2 pt-12 lg:pt-0">
                    <div className="animate-float relative -mt-40">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 mix-blend-normal flex items-center justify-center">
                            <div className="absolute inset-0 bg-purple-900 rounded-full opacity-40 blur-3xl animate-pulse"></div>
                            <Image
                                src="/images/bitmoji/bitmoji_photographer.png"
                                alt="Aryan Creator"
                                width={400}
                                height={400}
                                className="relative z-10 object-contain drop-shadow-2xl scale-75"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
