"use client";
import { Instagram, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
    mode: 'designer' | 'creator';
}

export function Footer({ mode }: FooterProps) {
    const theme = {
        designer: {
            bg: 'bg-slate-100',
            text: 'text-slate-900',
            muted: 'text-slate-500',
            border: 'border-slate-200',
        },
        creator: {
            bg: 'bg-neutral-950',
            text: 'text-gray-100',
            muted: 'text-gray-400',
            border: 'border-neutral-800',
        }
    }[mode];

    return (
        <footer className={`py-16 px-6 border-t ${theme.border} ${theme.bg}`}>
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-8 md:mb-0 text-center md:text-left">
                    <h3 className={`text-2xl font-bold mb-2 ${theme.text}`}>7Frames Aryan.</h3>
                    <p className={theme.muted}>
                        {mode === 'designer'
                            ? "Crafted with ❤️ and ☕"
                            : "Capturing moments and preserving memories through the art of photography."}
                    </p>
                    <p className={`text-sm mt-2 ${theme.muted}`}>
                        {mode === 'designer'
                            ? "© 2025 Aryan Rana. All rights reserved."
                            : "© 2025 7Frames_Aryan. All rights reserved."}
                    </p>
                </div>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/7Frames_Aryan/" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full interactive transition-all duration-300 hover:-translate-y-1 ${mode === 'designer' ? 'bg-white text-slate-800 hover:text-blue-600 shadow-sm' : 'bg-neutral-900 text-gray-400 hover:text-purple-500 hover:bg-white/10'}`}>
                        <Instagram size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/aryanrana007/" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full interactive transition-all duration-300 hover:-translate-y-1 ${mode === 'designer' ? 'bg-white text-slate-800 hover:text-blue-600 shadow-sm' : 'bg-neutral-900 text-gray-400 hover:text-purple-500 hover:bg-white/10'}`}>
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:aryanrana762@gmail.com" className={`p-3 rounded-full interactive transition-all duration-300 hover:-translate-y-1 ${mode === 'designer' ? 'bg-white text-slate-800 hover:text-blue-600 shadow-sm' : 'bg-neutral-900 text-gray-400 hover:text-purple-500 hover:bg-white/10'}`}>
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
