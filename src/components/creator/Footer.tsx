"use client";
import { Instagram, Linkedin, Mail } from 'lucide-react';

export function CreatorFooter() {
    return (
        <footer className="py-16 px-6 border-t border-neutral-800 bg-neutral-950">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-8 md:mb-0 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2 text-gray-100">7Frames Aryan.</h3>
                    <p className="text-gray-400">
                        Capturing moments and preserving memories through the art of photography.
                    </p>
                    <p className="text-sm mt-2 text-gray-400">
                        © 2025 7Frames_Aryan. All rights reserved.
                    </p>
                </div>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/7Frames_Aryan/" target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram" className="p-3 rounded-full interactive transition-all duration-300 hover:-translate-y-1 bg-neutral-900 text-gray-400 hover:text-purple-500 hover:bg-white/10">
                        <Instagram size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/7framesaryan/" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn" className="p-3 rounded-full interactive transition-all duration-300 hover:-translate-y-1 bg-neutral-900 text-gray-400 hover:text-purple-500 hover:bg-white/10">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:aryanrana762@gmail.com" aria-label="Send Email" className="p-3 rounded-full interactive transition-all duration-300 hover:-translate-y-1 bg-neutral-900 text-gray-400 hover:text-purple-500 hover:bg-white/10">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
