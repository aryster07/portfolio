"use client";
import { Download } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
    mode: 'designer' | 'creator';
}

export function Hero({ mode }: HeroProps) {
    return (
        <section className="min-h-screen flex items-center relative px-6 md:px-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 pt-32">
                <div className="lg:col-span-7 z-10 order-2 lg:order-1">
                    {/* Status Badge */}
                    <div className={`reveal-hidden inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border ${mode === 'designer' ? 'bg-blue-50 border-blue-100 text-blue-600' : 'bg-purple-900/20 border-purple-500/30 text-purple-300'}`}>
                        <span className={`w-2 h-2 rounded-full ${mode === 'designer' ? 'bg-blue-500 animate-pulse' : 'bg-purple-500 animate-pulse'}`}></span>
                        {mode === 'designer' ? 'Available for Freelance' : 'Accepting Commissions'}
                    </div>

                    <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter mb-8 ${mode === 'designer' ? 'text-slate-900' : 'text-gray-100'}`}>
                        {mode === 'designer' ? (
                            <span>
                                <span className="genjiro-font">7frames</span> <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 genjiro-font">aryan.</span>
                            </span>
                        ) : (
                            <span className="glitch-text" data-text="7FRAMES ARYAN">
                                7FRAMES <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">ARYAN.</span>
                            </span>
                        )}
                    </h1>

                    <p className={`text-lg md:text-xl max-w-xl leading-relaxed ${mode === 'designer' ? 'text-slate-500' : 'text-gray-400'}`} style={{ transitionDelay: '100ms' }}>
                        {mode === 'designer'
                            ? "Passionate about creating beautiful, functional, and user-centered digital experiences. Specializing in Figma, user research, and crafting interfaces that users love."
                            : "I shoot everything, just not with a gun (Yet) 💀"}
                    </p>

                    <div className="reveal-hidden flex flex-wrap gap-4 mt-10" style={{ transitionDelay: '200ms' }}>
                        <a href="#work" className={`px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase interactive transition-all hover:scale-105 hover:-translate-y-1 ${mode === 'designer' ? 'bg-slate-900 text-white hover:bg-blue-600' : 'bg-white text-black hover:bg-purple-500 hover:text-white'}`}>
                            View Work
                        </a>
                        <a href="/resume/CV.pdf" target="_blank" rel="noopener noreferrer" className={`px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase interactive transition-all border hover:scale-105 hover:-translate-y-1 flex items-center gap-2 ${mode === 'designer' ? 'border-slate-300 text-slate-900 hover:border-blue-600 hover:text-blue-600' : 'border-white/20 text-white hover:bg-white/10'}`}>
                            Download CV <Download size={16} />
                        </a>
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
                                    className="relative z-10 object-contain drop-shadow-2xl grayscale contrast-125 scale-75"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
