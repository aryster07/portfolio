"use client";

import React, { useState, useEffect } from 'react';
import { Monitor, Camera } from 'lucide-react';
import { designProjects } from '@/data/portfolio';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Footer } from '@/components/sections/Footer';
import { Contact } from '@/components/sections/Contact';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Mode = 'designer' | 'creator';

export default function Portfolio() {
  const [mode, setMode] = useState<Mode>('designer');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [photographySections, setPhotographySections] = useState<{ title: string; images: any[] }[]>([]);

  useScrollReveal();

  useEffect(() => {
    const loadPhotographyProjects = async () => {
      try {
        const response = await fetch('/api/images');
        const sections = await response.json();
        if (Array.isArray(sections)) {
          setPhotographySections(sections);
        }
      } catch (error) {
        console.error('Error loading photography projects:', error);
      }
    };
    loadPhotographyProjects();
  }, []);

  const toggleMode = (newMode: Mode) => {
    if (mode === newMode) return;
    setIsTransitioning(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setMode(newMode);
      setIsTransitioning(false);
    }, 600);
  };

  const theme = {
    designer: {
      bg: 'bg-[#FAFAFA]',
      font: 'designer-font',
      selection: 'selection:bg-blue-200 selection:text-blue-900'
    },
    creator: {
      bg: 'bg-[#050505]',
      font: 'creator-font',
      selection: 'selection:bg-purple-900 selection:text-white'
    }
  }[mode];

  return (
    <div className={`min-h-screen transition-colors duration-1000 ease-in-out ${theme.bg} ${theme.font} ${theme.selection} relative selection:bg-opacity-30`}>
      <CustomCursor />

      {/* Background Layers */}
      <div className={`noise-bg transition-opacity duration-1000 ${mode === 'creator' ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 ${mode === 'designer' ? 'opacity-100' : 'opacity-0'} grid-bg`} />

      {/* --- NAVIGATION TOGGLE --- */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        <div className="pointer-events-auto relative bg-white/5 backdrop-blur-2xl rounded-full p-2 shadow-2xl border border-white/10 overflow-hidden w-[280px]">
          {/* Sliding Background */}
          <div
            className={`absolute top-2 bottom-2 rounded-full shadow-lg transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) z-0
            ${mode === 'designer'
                ? 'left-2 w-[135px] bg-white'
                : 'left-[138px] w-[135px] bg-gradient-to-r from-[#6366f1] to-[#a855f7]'}`}
          />
          <div className="relative z-10 flex justify-between">
            <button
              onClick={() => toggleMode('designer')}
              className={`w-[135px] py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2 interactive
              ${mode === 'designer' ? 'text-black' : 'text-white/50 hover:text-white'}`}
            >
              <Monitor size={14} /> Designer
            </button>
            <button
              onClick={() => toggleMode('creator')}
              className={`w-[135px] py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2 interactive
              ${mode === 'creator' ? 'text-white' : 'text-slate-500 hover:text-black dark:text-gray-400 dark:hover:text-white'}`}
            >
              Creator <Camera size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- PAGE CONTENT --- */}
      <main className={`transition-all duration-700 ease-out ${isTransitioning ? 'opacity-0 blur-lg scale-95' : 'opacity-100 blur-0 scale-100'}`}>
        <Hero mode={mode} />
        <Skills mode={mode} />
        <Projects mode={mode} projects={designProjects} photographySections={photographySections} />
        <Contact />
        <Footer mode={mode} />
      </main>
    </div>
  );
}
