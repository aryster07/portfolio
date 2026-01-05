"use client";

import React, { useState, useEffect } from 'react';
import { Monitor, Camera } from 'lucide-react';
import { designProjects } from '@/data/portfolio';
import { Contact, CustomCursor } from '@/components';
import { DesignerHero, DesignerSkills, DesignerProjects, DesignerFooter } from '@/components/designer';
import { CreatorHero, CreatorProjects, CreatorFooter } from '@/components/creator';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Mode = 'designer' | 'creator';

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  thumbnailUrl?: string;
  previewUrl?: string;
  placeholderUrl?: string;
  originalUrl: string;
  publicId: string;
  downloadUrl: string;
  width: number;
  height: number;
}

interface PhotographySection {
  title: string;
  images: GalleryImage[];
}

export default function Portfolio() {
  const [mode, setMode] = useState<Mode>('designer');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [photographySections, setPhotographySections] = useState<PhotographySection[]>([]);

  useScrollReveal([mode]);

  // Check URL hash and query params on load to set correct mode
  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(window.location.search);
    const modeParam = params.get('mode');
    
    // Set creator mode if specified in URL
    if (modeParam === 'creator' || hash === '#creator' || hash.startsWith('#creator')) {
      setMode('creator');
      
      // Scroll to work section if hash is #work
      if (hash === '#work') {
        setTimeout(() => {
          const workSection = document.getElementById('work');
          if (workSection) {
            workSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, []);

  useEffect(() => {
    const loadPhotographyProjects = async () => {
      try {
        const response = await fetch('/api/images');
        const sections = await response.json();
        if (Array.isArray(sections)) {
          setPhotographySections(sections);
        }
      } catch (error) {
        // Silently handle error - photography sections will remain empty
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
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        <div className={`pointer-events-auto relative backdrop-blur-xl rounded-2xl p-1.5 shadow-2xl overflow-hidden transition-all duration-500
          ${mode === 'designer' 
            ? 'bg-white/80 border border-black/5 shadow-black/5' 
            : 'bg-white/5 border border-white/10 shadow-purple-500/10'}`}>
          
          {/* Animated Glow Effect */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${mode === 'creator' ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-fuchsia-600/20 blur-xl" />
          </div>
          
          {/* Sliding Pill Background */}
          <div
            className={`absolute top-1.5 bottom-1.5 rounded-xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-0
            ${mode === 'designer'
                ? 'left-1.5 w-[120px] bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg shadow-slate-900/25'
                : 'left-[126px] w-[120px] bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg shadow-purple-500/40'}`}
          />
          
          <div className="relative z-10 flex">
            <button
              onClick={() => toggleMode('designer')}
              className={`w-[120px] py-2.5 rounded-xl text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 interactive
              ${mode === 'designer' 
                ? 'text-white' 
                : mode === 'creator' 
                  ? 'text-white/40 hover:text-white/70' 
                  : 'text-slate-400 hover:text-slate-600'}`}
            >
              <Monitor size={13} strokeWidth={2.5} /> Designer
            </button>
            <button
              onClick={() => toggleMode('creator')}
              className={`w-[120px] py-2.5 rounded-xl text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 interactive
              ${mode === 'creator' 
                ? 'text-white' 
                : mode === 'designer'
                  ? 'text-slate-400 hover:text-slate-600'
                  : 'text-white/40 hover:text-white/70'}`}
            >
              <Camera size={13} strokeWidth={2.5} /> Creator
            </button>
          </div>
        </div>
      </nav>

      {/* --- PAGE CONTENT --- */}
      <main className={`transition-all duration-700 ease-out ${isTransitioning ? 'opacity-0 blur-lg scale-95' : 'opacity-100 blur-0 scale-100'}`}>
        {mode === 'designer' ? (
          <>
            <DesignerHero />
            <DesignerSkills />
            <DesignerProjects projects={designProjects} />
            <Contact />
            <DesignerFooter />
          </>
        ) : (
          <>
            <CreatorHero />
            <CreatorProjects photographySections={photographySections} />
            <Contact />
            <CreatorFooter />
          </>
        )}
      </main>
    </div>
  );
}
