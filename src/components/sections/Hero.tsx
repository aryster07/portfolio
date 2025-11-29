"use client";
import { Download } from 'lucide-react';
import Image from 'next/image';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

interface HeroProps {
    mode: 'designer' | 'creator';
}

export function Hero({ mode }: HeroProps) {
    return (
        <section className="min-h-screen flex items-center relative px-6 md:px-20 overflow-hidden">
            {/* Animated Background */}
            <AnimatedBackground mode={mode} />

            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 pt-32">
                <div className="lg:col-span-7 z-10 order-2 lg:order-1">
                    {/* Status Badge */}
                    <div className="reveal-hidden inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-6" style={{ transitionDelay: '0ms' }}>
                        <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                        Available
                    </div>

                    <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter mb-8 ${mode === 'designer' ? 'text-slate-900' : 'text-gray-100'}`}>
                        {mode === 'designer' ? (
                            <span>
                                <span className="genjiro-font">7Frames</span> <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-700 genjiro-font">Aryan.</span>
                            </span>
                        ) : (
                            <span className="glitch-text" data-text="7FRAMES ARYAN">
                                7FRAMES <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600">ARYAN.</span>
                            </span>
                        )}
                    </h1>

                    {/* Location Badge */}
                    <div className="reveal-hidden flex items-center gap-2 mb-6 text-gray-500" style={{ transitionDelay: '100ms' }}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Himachal Pradesh, India</span>
                    </div>

                    <p className={`reveal-hidden text-lg md:text-xl leading-relaxed max-w-2xl ${mode === 'designer' ? 'text-slate-600' : 'text-gray-400'}`} style={{ transitionDelay: '100ms' }}>
                        {mode === 'designer'
                            ? "Passionate about creating beautiful, functional, and user-centered digital experiences. Specializing in Figma, user research, and crafting interfaces that users love."
                            : "I shoot everything, just not with a gun (Yet) 💀"}
                    </p>

                    <div className="reveal-hidden flex flex-wrap gap-4 mt-10" style={{ transitionDelay: '200ms' }}>
                        <a href="#contact" className={`px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase interactive transition-all hover:scale-105 hover:-translate-y-1 ${mode === 'designer' ? 'bg-slate-900 text-white hover:bg-amber-600' : 'bg-white text-black hover:bg-amber-500 hover:text-white'}`}>
                            {mode === 'designer' ? 'Get in Touch' : 'Connect With Me'}
                        </a>
                        {mode === 'designer' ? (
                            <a href="/resume/CV.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase interactive transition-all border border-slate-300 text-slate-900 hover:border-amber-600 hover:text-amber-600 hover:scale-105 hover:-translate-y-1 flex items-center gap-2">
                                Download CV <Download size={16} />
                            </a>
                        ) : (
                            <a href="#work" className="px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase interactive transition-all border border-white/20 text-white hover:bg-white/10 hover:scale-105 hover:-translate-y-1">
                                View Work
                            </a>
                        )}
                    </div>
                </div>

                {/* Visuals / Bitmoji */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center h-full order-1 lg:order-2 pt-12 lg:pt-0">
                    <div className="animate-float relative -mt-40">
                        {mode === 'designer' ? (
                            <div className="relative w-64 h-64 md:w-80 md:h-80 scale-90">
                                <div className="absolute inset-0 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
                                <Image
                                    src="/images/bitmoji/bitmoji_designer_clean.png"
                                    alt="Aryan Designer"
                                    width={400}
                                    height={400}
                                    className="relative z-10 object-contain drop-shadow-2xl"
                                />
                            </div>
                        ) : (
                            <div className="relative w-64 h-64 md:w-80 md:h-80 mix-blend-normal flex items-center justify-center">
                                <div className="absolute inset-0 bg-purple-900 rounded-full opacity-40 blur-3xl animate-pulse"></div>
                                <Image
                                    src="/images/bitmoji/bitmoji_photographer.png"
                                    alt="Aryan Creator"
                                    width={400}
                                    height={400}
                                    className="relative z-10 object-contain drop-shadow-2xl contrast-125 scale-75"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
