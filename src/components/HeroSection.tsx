"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Download, Sun, Moon } from "lucide-react"

export default function HeroSection() {
  const [showIntro, setShowIntro] = useState(true)
  const [currentTermIndex, setCurrentTermIndex] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const containerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const profileImageRef = useRef<HTMLDivElement>(null)
  const aboutTitleRef = useRef<HTMLHeadingElement>(null)

  const introTerms = [
    { text: "Hello", icon: "👋", lang: "" },
    { text: "Designer", icon: "🎨", lang: "" },
    { text: "UI/UX", icon: "💻", lang: "" },
    { text: "Photographer", icon: "📸", lang: "" },
    { text: "Creator", icon: "⚡", lang: "" }
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (showIntro) {
      interval = setInterval(() => {
        setCurrentTermIndex((prev) => {
          if (prev >= introTerms.length - 1) {
            setTimeout(() => setShowIntro(false), 300)
            return prev
          }
          return prev + 1
        })
      }, 350) // Much faster Marvel-like speed
    }

    return () => clearInterval(interval)
  }, [showIntro, introTerms.length])

  useEffect(() => {
    // Animations removed - elements will appear immediately
  }, [])

  return (
    <>
      {/* Intro Animation */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-slate-950 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                key={currentTermIndex}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex flex-col items-center space-y-3"
              >
                <div className="text-5xl md:text-7xl">
                  {introTerms[currentTermIndex]?.icon}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white">
                  {introTerms[currentTermIndex]?.text}
                </h1>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    <section 
      ref={containerRef}
      id="home" 
      className={`min-h-screen flex flex-col relative overflow-hidden transition-all duration-500 overscroll-none ${
        isDarkMode 
          ? 'bg-gradient-to-br from-neutral-950 via-zinc-950 to-black' 
          : 'bg-gradient-to-br from-slate-50 via-white to-gray-50'
      }`}
    >
      {/* Theme Toggle Button */}
      <motion.button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
          isDarkMode 
            ? 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200' 
            : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.button>

      {/* Modern Animated Background with Dynamic Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {isDarkMode ? (
          <>
            {/* Dark Mode Sophisticated Background */}
            <div className="absolute inset-0 opacity-35">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(163,163,163,0.06),transparent_40%)]" />
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(255,255,255,0.05)_60deg,transparent_120deg)]" />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse" />
            </div>
            
            {/* Animated Gradient Orbs - Dark Mode */}
            <motion.div
              animate={{
                x: [0, 120, 0],
                y: [0, -60, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-neutral-700/30 via-zinc-600/20 to-transparent rounded-full blur-3xl"
            />
            
            <motion.div
              animate={{
                x: [0, -90, 0],
                y: [0, 70, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 5,
              }}
              className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-neutral-600/25 via-zinc-700/15 to-transparent rounded-full blur-3xl"
            />
            
            {/* Rotating Conic Gradient - Dark Mode */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.02),transparent)] rounded-full"
            />
            
            {/* Pulsing Gradient Overlay - Dark Mode */}
            <motion.div
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-br from-neutral-900/20 via-transparent to-zinc-900/20"
            />
          </>
        ) : (
          <>
            {/* Light Mode Modern Background - Enhanced with Gold */}
            <div className="absolute inset-0 opacity-60">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.20),transparent_40%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(251,191,36,0.18),transparent_50%)]" />
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(59,130,246,0.12)_60deg,transparent_120deg)]" />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(251,191,36,0.08)_50%,transparent_75%)] bg-[length:80px_80px] animate-pulse" />
            </div>
            
            {/* Animated Gradient Orbs - Light Mode with Gold */}
            <motion.div
              animate={{
                x: [0, 120, 0],
                y: [0, -60, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-300/50 via-amber-300/35 to-transparent rounded-full blur-3xl"
            />
            
            <motion.div
              animate={{
                x: [0, -90, 0],
                y: [0, 70, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 5,
              }}
              className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-purple-300/40 via-yellow-300/30 to-transparent rounded-full blur-3xl"
            />
            
            {/* Additional Golden Orb */}
            <motion.div
              animate={{
                x: [0, 80, 0],
                y: [0, -40, 0],
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 10,
              }}
              className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-amber-400/35 via-yellow-400/25 to-transparent rounded-full blur-3xl"
            />
            
            {/* Rotating Conic Gradient - Light Mode */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[conic-gradient(from_0deg,transparent,rgba(59,130,246,0.03),transparent)] rounded-full"
            />
            
            {/* Pulsing Gradient Overlay - Light Mode */}
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-amber-50/20 to-purple-100/30"
            />
          </>
        )}
      </div>

      {/* Enhanced Floating Bitmoji Characters with Modern Aesthetics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-5">
        {/* Top Right - Photographer */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            rotate: [0, 3, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-12 w-16 h-16 opacity-40"
        >
          <img 
            src="/images/bitmoji/bitmoji_photographer_clean.png" 
            alt="Photographer Bitmoji"
            className="w-full h-full object-contain"
          />
        </motion.div>
        
        {/* Bottom Left - Designer */}
        <motion.div
          animate={{
            x: [0, -18, 0],
            y: [0, 12, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/3 left-16 w-14 h-14 opacity-40"
        >
          <img 
            src="/images/bitmoji/bitmoji_designer_clean.png" 
            alt="Designer Bitmoji"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Top Left - Additional Floating Element */}
        <motion.div
          animate={{
            x: [0, 15, 0],
            y: [0, -10, 0],
            rotate: [0, -2, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
          className={`absolute top-2/3 right-1/4 w-12 h-12 rounded-lg shadow-lg backdrop-blur-sm border transition-all duration-500 ${
            isDarkMode 
              ? 'bg-neutral-900/15 border-neutral-700/20 opacity-40' 
              : 'bg-white/30 border-blue-200/20 opacity-50'
          }`}
        >
          <img 
            src="/images/bitmoji/bitmoji_photographer_clean.png" 
            alt="Photographer Bitmoji"
            className={`w-full h-full object-contain p-1.5 transition-all duration-500 ${
              isDarkMode 
                ? 'filter brightness-70 contrast-110' 
                : 'filter brightness-110 contrast-105'
            }`}
          />
        </motion.div>

        {/* Bottom Right - Additional Floating Element */}
        <motion.div
          animate={{
            x: [0, -12, 0],
            y: [0, 8, 0],
            rotate: [0, 2, 0],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 9,
          }}
          className={`absolute bottom-1/4 right-20 w-10 h-10 rounded-lg shadow-lg backdrop-blur-sm border transition-all duration-500 ${
            isDarkMode 
              ? 'bg-neutral-900/15 border-neutral-700/20 opacity-35' 
              : 'bg-white/30 border-purple-200/20 opacity-45'
          }`}
        >
          <img 
            src="/images/bitmoji/bitmoji_designer_clean.png" 
            alt="Designer Bitmoji"
            className={`w-full h-full object-contain p-1.5 transition-all duration-500 ${
              isDarkMode 
                ? 'filter brightness-70 contrast-110' 
                : 'filter brightness-110 contrast-105'
            }`}
          />
        </motion.div>
      </div>

      {/* Auto Layout Container - Optimized for Full Viewport */}
      <div className="flex-1 flex flex-col justify-start max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-2 sm:py-4 md:py-6 pt-6 sm:pt-8 lg:pt-8 relative z-10">
        
        {/* Main Content - Compact Layout */}
        <div className="flex flex-col space-y-4 lg:space-y-6">
          
          {/* Mobile Layout - Single Column with minimal spacing */}
          <div className="lg:hidden flex flex-col items-center space-y-3">
            
            {/* Status Chip - Mobile */}
            <div className="flex justify-center">
              <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border shadow-lg backdrop-blur-sm transition-all duration-500 ${
                isDarkMode 
                  ? 'bg-neutral-900/60 border-neutral-700/30' 
                  : 'bg-white/70 border-blue-200/30'
              }`}>
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping opacity-20" />
                </div>
                <span className={`text-sm font-medium tracking-wide transition-colors duration-500 ${
                  isDarkMode ? 'text-neutral-300' : 'text-gray-700'
                }`}>Available for work</span>
              </div>
            </div>

            {/* 1. Profile Image with Enhanced Design - Reduced spacing */}
            <div 
              ref={profileImageRef}
              className="relative flex justify-center items-center w-full pt-2"
            >
              <div className="relative">
                {/* Minimalist Ring with Theme Support */}
                <div className={`w-48 h-48 sm:w-56 sm:h-56 rounded-full p-0.5 shadow-2xl transition-all duration-500 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900 shadow-neutral-900/50' 
                    : 'bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 shadow-blue-900/20'
                }`}>
                  {/* Inner Container */}
                  <div className={`w-full h-full rounded-full p-1 transition-colors duration-500 ${
                    isDarkMode ? 'bg-neutral-950' : 'bg-white'
                  }`}>
                    <div className={`w-full h-full rounded-full overflow-hidden border transition-all duration-500 ${
                      isDarkMode 
                        ? 'bg-neutral-900 border-neutral-600/20' 
                        : 'bg-gray-50 border-blue-200/30'
                    }`}>
                      <img 
                        src="/images/profile/20250206_051456000_iOS.jpg" 
                        alt="Aryan Profile"
                        className="w-full h-full object-cover filter contrast-110 brightness-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23171717'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23d4d4d8' font-family='system-ui' font-size='16'%3EProfile%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Minimal Status Indicators with Theme Support */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full border-3 shadow-lg transition-all duration-500 ${
                  isDarkMode 
                    ? 'bg-neutral-800 border-neutral-950' 
                    : 'bg-blue-100 border-white'
                }`}>
                  <div className={`w-full h-full rounded-full animate-pulse transition-colors duration-500 ${
                    isDarkMode ? 'bg-neutral-600' : 'bg-blue-400'
                  }`} />
                </div>
                <div className={`absolute -bottom-2 -left-2 w-4 h-4 bg-emerald-500 rounded-full border-2 shadow-lg animate-bounce transition-all duration-500 ${
                  isDarkMode ? 'border-neutral-950' : 'border-white'
                }`} />
              </div>
            </div>

            {/* 2. Profile Info with Enhanced Typography - Minimal spacing */}
            <div className="flex flex-col items-center space-y-3 text-center px-6">
              
              {/* Main Title with Original Neutral Typography */}
              <h1 
                ref={titleRef}
                className="text-5xl sm:text-6xl font-light leading-tight tracking-tight"
              >
                <span className={`bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500 ${
                  isDarkMode 
                    ? 'from-neutral-100 via-amber-200 to-neutral-300' 
                    : 'from-amber-500 via-yellow-500 to-amber-600'
                }`}>
                  7frames_aryan
                </span>
              </h1>
              
              {/* Role Chips below title */}
              <div className="space-y-3">
                
                {/* Refined Role Chips - Smaller for mobile visibility */}
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  <span className={`px-3 py-1.5 text-xs font-light rounded-full border backdrop-blur-sm transition-all duration-500 ${
                    isDarkMode 
                      ? 'bg-neutral-800/40 text-neutral-300 border-neutral-700/30' 
                      : 'bg-white/60 text-gray-700 border-blue-200/30'
                  }`}>
                    Photographer
                  </span>
                  <span className={`px-3 py-1.5 text-xs font-light rounded-full border backdrop-blur-sm transition-all duration-500 ${
                    isDarkMode 
                      ? 'bg-neutral-800/40 text-neutral-300 border-neutral-700/30' 
                      : 'bg-white/60 text-gray-700 border-blue-200/30'
                  }`}>
                    UI/UX Designer
                  </span>
                  <span className={`px-3 py-1.5 text-xs font-light rounded-full border backdrop-blur-sm transition-all duration-500 ${
                    isDarkMode 
                      ? 'bg-neutral-800/40 text-neutral-300 border-neutral-700/30' 
                      : 'bg-white/60 text-gray-700 border-blue-200/30'
                  }`}>
                    Editor
                  </span>
                  <span className={`px-3 py-1.5 text-xs font-light rounded-full border backdrop-blur-sm transition-all duration-500 ${
                    isDarkMode 
                      ? 'bg-neutral-800/40 text-neutral-300 border-neutral-700/30' 
                      : 'bg-white/60 text-gray-700 border-blue-200/30'
                  }`}>
                    Gamer
                  </span>
                </div>
              </div>

              {/* Location with refined design */}
              <div className={`flex items-center gap-3 px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-500 ${
                isDarkMode 
                  ? 'bg-neutral-900/30 border-neutral-700/20' 
                  : 'bg-white/50 border-blue-200/30'
              }`}>
                <MapPin className={`w-4 h-4 transition-colors duration-500 ${
                  isDarkMode ? 'text-neutral-400' : 'text-blue-500'
                }`} />
                <span className={`text-sm sm:text-base font-light tracking-wide transition-colors duration-500 ${
                  isDarkMode ? 'text-neutral-300' : 'text-gray-700'
                }`}>Himachal Pradesh 🏔️</span>
              </div>
            </div>

            {/* 3. Refined CTA Button */}
            <div className="w-full max-w-sm relative z-20">
              <a
                href="/cv/Aryan_Rana_CV.pdf"
                download="Aryan_Rana_CV.pdf"
                className={`w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer select-none touch-manipulation tracking-wide ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black' 
                    : 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white'
                }`}
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>

            {/* 4. Refined Skills Showcase - Moved up for first screen visibility */}
            <div className="w-full max-w-lg">
              <h3 className={`text-lg sm:text-xl font-light text-center mb-4 leading-relaxed tracking-wide transition-colors duration-500 ${
                isDarkMode ? 'text-neutral-100' : 'text-gray-800'
              }`}>
                <span className={isDarkMode ? 'text-neutral-100' : 'text-gray-800'}>What side of me </span>
                <span className={`transition-colors duration-500 ${
                  isDarkMode ? 'text-neutral-400' : 'text-gray-600'
                }`}>
                  do you want to see?
                </span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {/* UI/UX Designer Card */}
                <div className={`flex flex-col items-center p-6 rounded-3xl border cursor-pointer group text-center transition-all duration-500 backdrop-blur-sm ${
                  isDarkMode 
                    ? 'bg-neutral-900/20 border-neutral-800/30 hover:bg-neutral-900/30' 
                    : 'bg-white/60 border-blue-200/30 hover:bg-white/80'
                }`}>
                  <a 
                    href="https://7framesaryan-design.vercel.app/"
                    className="flex flex-col items-center w-full"
                  >
                    <div className="w-20 h-20 mb-4 flex-shrink-0">
                      <img 
                        src="/images/bitmoji/bitmoji_designer_clean.png" 
                        alt="Designer Bitmoji"
                        className="w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300 filter brightness-90"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/images/bitmoji/designer-bitmoji.svg";
                        }}
                      />
                    </div>
                    <div>
                      <h4 className={`text-base font-medium mb-2 transition-colors duration-500 ${
                        isDarkMode ? 'text-neutral-200' : 'text-gray-800'
                      }`}>
                        UI/UX Designer
                      </h4>
                      <p className={`text-sm font-light transition-colors duration-500 ${
                        isDarkMode ? 'text-neutral-400' : 'text-gray-600'
                      }`}>
                        Design & UX
                      </p>
                    </div>
                  </a>
                </div>

                {/* Photographer Card */}
                <div className={`flex flex-col items-center p-6 rounded-3xl border cursor-pointer group text-center transition-all duration-500 backdrop-blur-sm ${
                  isDarkMode 
                    ? 'bg-neutral-900/20 border-neutral-800/30 hover:bg-neutral-900/30' 
                    : 'bg-white/60 border-blue-200/30 hover:bg-white/80'
                }`}>
                  <a 
                    href="https://7framesaryan-photography.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center w-full"
                  >
                    <div className="w-20 h-20 mb-4 flex-shrink-0">
                      <img 
                        src="/images/bitmoji/bitmoji_photographer_clean.png" 
                        alt="Photographer Bitmoji"
                        className="w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300 filter brightness-90"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/images/bitmoji/photographer-bitmoji.svg";
                        }}
                      />
                    </div>
                    <div>
                      <h4 className={`text-base font-medium mb-2 transition-colors duration-500 ${
                        isDarkMode ? 'text-neutral-200' : 'text-gray-800'
                      }`}>
                        Photographer
                      </h4>
                      <p className={`text-sm font-light transition-colors duration-500 ${
                        isDarkMode ? 'text-neutral-400' : 'text-gray-600'
                      }`}>
                        Crazy shots
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 5. Sophisticated About Section */}
            <div className="w-full max-w-2xl">
              <div className={`rounded-3xl border p-8 shadow-2xl backdrop-blur-sm transition-all duration-500 ${
                isDarkMode 
                  ? 'bg-neutral-900/20 border-neutral-800/30' 
                  : 'bg-white/60 border-blue-200/30'
              }`}>
                <h2 
                  ref={aboutTitleRef}
                  className="text-3xl sm:text-4xl font-light mb-8 text-center tracking-wide"
                >
                  <span className={`transition-colors duration-500 ${
                    isDarkMode ? 'text-neutral-100' : 'text-gray-800'
                  }`}>About </span>
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500 ${
                    isDarkMode 
                      ? 'from-neutral-300 to-neutral-500' 
                      : 'from-blue-600 to-purple-600'
                  }`}>
                    Me
                  </span>
                </h2>
                
                <div 
                  ref={descriptionRef}
                  className="space-y-6"
                >
                  <div className={`text-lg leading-relaxed space-y-6 font-light transition-colors duration-500 ${
                    isDarkMode ? 'text-neutral-300' : 'text-gray-700'
                  }`}>
                    <p className="bio-text">
                      Hello, I&apos;m Aryan - a mountain dweller with an intense passion for <span className={`font-normal transition-colors duration-500 ${
                        isDarkMode ? 'text-neutral-100' : 'text-blue-600'
                      }`}>technology</span>,{" "}
                      <span className={`font-normal transition-colors duration-500 ${
                        isDarkMode ? 'text-neutral-100' : 'text-purple-600'
                      }`}>creative arts</span>, and <span className={`font-normal transition-colors duration-500 ${
                        isDarkMode ? 'text-neutral-100' : 'text-blue-600'
                      }`}>excellence</span>. 
                      As a <span className={`font-normal transition-colors duration-500 ${
                        isDarkMode ? 'text-neutral-100' : 'text-purple-600'
                      }`}>photographer</span> and <span className={`font-normal transition-colors duration-500 ${
                        isDarkMode ? 'text-neutral-100' : 'text-blue-600'
                      }`}>UI/UX designer</span>, I 
                      love diving deep into challenges and creating innovative solutions.
                    </p>
                    
                    <p className="bio-text">
                      My approach goes beyond just solving problems - I believe in understanding the root cause and delivering <span className={`font-normal transition-colors duration-500 ${
                        isDarkMode ? 'text-neutral-100' : 'text-blue-600'
                      }`}>precise, thoughtful solutions</span>. 
                      This attention to detail is what I bring to every single project I work on.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Refined Social Links */}
            <div className="w-full max-w-sm mb-12 relative z-20">
              <h3 className="text-lg font-light text-center mb-6 text-neutral-300 tracking-wide">Connect with me</h3>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/7frames_aryan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Instagram profile"
                  className="w-14 h-14 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer select-none touch-manipulation border border-neutral-700/50"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Spotify */}
                <a
                  href="https://open.spotify.com/user/31iv3nhnffqhbim7dyylpnprrexm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Listen on Spotify"
                  className="w-14 h-14 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer select-none touch-manipulation border border-neutral-700/50"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.959-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.361 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/aryanrana007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn"
                  className="w-14 h-14 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer select-none touch-manipulation border border-neutral-700/50"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/aryster07"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub profile"
                  className="w-14 h-14 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer select-none touch-manipulation border border-neutral-700/50"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@aryster007"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe on YouTube"
                  className="w-14 h-14 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer select-none touch-manipulation border border-neutral-700/50"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                
              </div>
            </div>
          </div>

          {/* Desktop Layout - Compact Full Viewport */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-12 xl:gap-16 items-start min-h-[70vh]">
            
            {/* Left Column - Profile Picture */}
            <div className="col-span-2 flex flex-col items-center justify-center space-y-6">
              
              {/* Profile Image Container */}
              <div 
                ref={profileImageRef}
                className="relative flex justify-center items-center w-full"
              >
                <div className="relative">
                  <div className={`w-56 h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full p-1 shadow-2xl transition-all duration-500 ${
                    isDarkMode 
                      ? 'bg-neutral-800 shadow-neutral-900/30' 
                      : 'bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 shadow-blue-900/20'
                  }`}>
                    <div className={`w-full h-full rounded-full overflow-hidden border transition-all duration-500 ${
                      isDarkMode 
                        ? 'bg-neutral-900 border-neutral-700/50' 
                        : 'bg-white border-blue-200/30'
                    }`}>
                      <img 
                        src="/images/profile/20250206_051456000_iOS.jpg" 
                        alt="Aryan Profile"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `
                            <div class="w-full h-full bg-gradient-to-br ${isDarkMode ? 'from-neutral-700 via-neutral-800 to-neutral-900 text-neutral-200' : 'from-blue-100 via-purple-100 to-blue-200 text-gray-800'} flex items-center justify-center font-light text-6xl">
                              A
                            </div>
                          `;
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Status Indicators */}
                  <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full border-4 animate-pulse shadow-lg transition-all duration-500 ${
                    isDarkMode 
                      ? 'bg-neutral-600 border-neutral-900 shadow-neutral-600/30' 
                      : 'bg-blue-400 border-white shadow-blue-400/30'
                  }`} />
                  <div className={`absolute -bottom-3 -left-3 w-6 h-6 rounded-full border-4 animate-bounce shadow-lg transition-all duration-500 ${
                    isDarkMode 
                      ? 'bg-neutral-700 border-neutral-900 shadow-neutral-700/30' 
                      : 'bg-purple-400 border-white shadow-purple-400/30'
                  }`} />
                
                  {/* Floating Bitmojis around profile */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -right-12 top-1/2 w-12 h-12 rounded-2xl shadow-lg opacity-90 transform -translate-y-1/2"
                  >
                    <img 
                      src="/images/bitmoji/bitmoji_designer_clean.png" 
                      alt="Designer Bitmoji"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  
                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -right-8 bottom-16 w-10 h-10 rounded-xl shadow-lg opacity-90"
                  >
                    <img 
                      src="/images/bitmoji/bitmoji_photographer_clean.png" 
                      alt="Photographer Bitmoji"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Profile Info - Below the Picture */}
              <div className="flex flex-col items-center space-y-3 md:space-y-4 text-center">
                <h1 
                  ref={titleRef}
                  className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-light leading-tight"
                >
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500 ${
                    isDarkMode 
                      ? 'from-neutral-100 via-amber-200 to-neutral-300' 
                      : 'from-amber-500 via-yellow-500 to-amber-600'
                  }`}>
                    7frames_aryan
                  </span>
                </h1>

                {/* Small Role Chips */}
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  <span className={`px-3 py-1 text-xs font-light rounded-full border transition-all duration-500 ${
                    isDarkMode 
                      ? 'bg-neutral-800 text-neutral-300 border-neutral-700' 
                      : 'bg-white text-gray-700 border-blue-200'
                  }`}>
                    Photographer
                  </span>
                  <span className={`px-3 py-1 text-xs font-light rounded-full border transition-all duration-500 ${
                    isDarkMode 
                      ? 'bg-neutral-800 text-neutral-300 border-neutral-700' 
                      : 'bg-white text-gray-700 border-blue-200'
                  }`}>
                    UI/UX Designer
                  </span>
                  <span className={`px-3 py-1 text-xs font-light rounded-full border transition-all duration-500 ${
                    isDarkMode 
                      ? 'bg-neutral-800 text-neutral-300 border-neutral-700' 
                      : 'bg-white text-gray-700 border-blue-200'
                  }`}>
                    Editor
                  </span>
                  <span className={`px-3 py-1 text-xs font-light rounded-full border transition-all duration-500 ${
                    isDarkMode 
                      ? 'bg-neutral-800 text-neutral-300 border-neutral-700' 
                      : 'bg-white text-gray-700 border-blue-200'
                  }`}>
                    Gamer
                  </span>
                </div>

                <div className={`flex items-center justify-center gap-2 transition-colors duration-500 ${
                  isDarkMode ? 'text-neutral-400' : 'text-gray-600'
                }`}>
                  <MapPin className={`w-4 h-4 transition-colors duration-500 ${
                    isDarkMode ? 'text-neutral-300' : 'text-blue-500'
                  }`} />
                  <span className="text-sm sm:text-base lg:text-lg font-light">Himachal Pradesh 🏔️</span>
                </div>

                {/* CTA Button - Below Profile Info */}
                <div className="pt-5 flex justify-center relative z-20">
                  <a
                    href="/cv/Aryan_Rana_CV.pdf"
                    download="Aryan_Rana_CV.pdf"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black px-10 py-5 rounded-full font-medium text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer group select-none touch-manipulation"
                  >
                    <Download className="w-5 h-5 lg:w-6 lg:h-6 group-hover:animate-bounce" />
                    <span>Download CV</span>
                  </a>
                </div>

                {/* Social Links - Below Download CV */}
                <div className="pt-6 relative z-20">
                  <div className="flex items-center justify-center gap-4">
                    
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/7frames_aryan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Visit Instagram profile"
                      aria-label="Visit Instagram profile"
                      className={`w-12 h-12 rounded-full border flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer select-none touch-manipulation ${
                        isDarkMode 
                          ? 'bg-neutral-800 hover:bg-neutral-700 border-neutral-700 hover:border-neutral-600 text-neutral-300 hover:text-white' 
                          : 'bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>

                    {/* Spotify */}
                    <a
                      href="https://open.spotify.com/user/31iv3nhnffqhbim7dyylpnprrexm"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Listen on Spotify"
                      aria-label="Listen on Spotify"
                      className={`w-12 h-12 rounded-full border flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer select-none touch-manipulation ${
                        isDarkMode 
                          ? 'bg-neutral-800 hover:bg-neutral-700 border-neutral-700 hover:border-neutral-600 text-neutral-300 hover:text-white' 
                          : 'bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.959-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.361 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/aryanrana007/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Connect on LinkedIn"
                      aria-label="Connect on LinkedIn"
                      className={`w-12 h-12 rounded-full border flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer select-none touch-manipulation ${
                        isDarkMode 
                          ? 'bg-neutral-800 hover:bg-neutral-700 border-neutral-700 hover:border-neutral-600 text-neutral-300 hover:text-white' 
                          : 'bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>

                    {/* GitHub */}
                    <a
                      href="https://github.com/aryster07"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub profile"
                      aria-label="View GitHub profile"
                      className={`w-12 h-12 rounded-full border flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer select-none touch-manipulation ${
                        isDarkMode 
                          ? 'bg-neutral-800 hover:bg-neutral-700 border-neutral-700 hover:border-neutral-600 text-neutral-300 hover:text-white' 
                          : 'bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>

                    {/* YouTube */}
                    <a
                      href="https://www.youtube.com/@aryster007"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Subscribe on YouTube"
                      aria-label="Subscribe on YouTube"
                      className={`w-12 h-12 rounded-full border flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer select-none touch-manipulation ${
                        isDarkMode 
                          ? 'bg-neutral-800 hover:bg-neutral-700 border-neutral-700 hover:border-neutral-600 text-neutral-300 hover:text-white' 
                          : 'bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Compact Content */}
            <div className="col-span-3 flex flex-col justify-center space-y-6 lg:space-y-8">
              
              {/* About Me Title - Compact */}
              <div className="text-center lg:text-left">
                <h2 
                  ref={aboutTitleRef}
                  className="text-2xl lg:text-3xl xl:text-4xl font-light tracking-wide leading-tight"
                >
                  <span className={`transition-colors duration-500 ${
                    isDarkMode ? 'text-neutral-100' : 'text-gray-900'
                  }`}>About </span>
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500 ${
                    isDarkMode 
                      ? 'from-neutral-300 via-amber-200 to-neutral-500' 
                      : 'from-gray-700 via-amber-600 to-gray-900'
                  }`}>
                    Me
                  </span>
                </h2>
              </div>

              {/* Bio Content Section - Compact */}
              <div 
                ref={descriptionRef}
                className="flex flex-col space-y-4 text-center lg:text-left"
              >
                <div className={`text-sm lg:text-base xl:text-lg leading-relaxed space-y-4 transition-colors duration-500 ${
                  isDarkMode ? 'text-neutral-300' : 'text-gray-600'
                }`}>
                  <p className="bio-text font-light leading-relaxed">
                    Hello, I&apos;m Aryan - a mountain dweller with an intense passion for{" "}
                    <span className={`font-medium transition-colors duration-500 ${
                      isDarkMode ? 'text-neutral-100' : 'text-gray-800'
                    }`}>technology</span> and{" "}
                    <span className={`font-medium transition-colors duration-500 ${
                      isDarkMode ? 'text-neutral-200' : 'text-gray-700'
                    }`}>creative arts</span>. As a{" "}
                    <span className={`font-medium transition-colors duration-500 ${
                      isDarkMode ? 'text-neutral-100' : 'text-gray-800'
                    }`}>photographer</span> and{" "}
                    <span className={`font-medium transition-colors duration-500 ${
                      isDarkMode ? 'text-neutral-200' : 'text-gray-700'
                    }`}>UI/UX designer</span>, I love creating innovative solutions and delivering{" "}
                    <span className={`font-medium transition-colors duration-500 ${
                      isDarkMode ? 'text-neutral-100' : 'text-gray-800'
                    }`}>precise, thoughtful work</span>.
                  </p>
                </div>
              </div>

              {/* Which Side Section - Compact Cards */}
              <div className="flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left">
                <h3 className={`text-2xl lg:text-3xl xl:text-4xl font-light tracking-wide transition-colors duration-500 ${
                  isDarkMode ? 'text-neutral-100' : 'text-gray-800'
                }`}>
                  <span className={isDarkMode ? 'text-neutral-100' : 'text-gray-800'}>Which side of me </span>
                  <span className={`transition-colors duration-500 ${
                    isDarkMode ? 'text-neutral-400' : 'text-gray-600'
                  }`}>
                    would you like to see?
                  </span>
                </h3>
                
                {/* Enhanced Bitmoji Cards - Larger */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full">
                  
                  {/* UI/UX Designer Card - Enhanced */}
                  <div className={`relative group p-8 lg:p-10 rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                    isDarkMode 
                      ? 'bg-neutral-900/40 border-neutral-800/50 hover:bg-neutral-900/60 hover:border-neutral-700' 
                      : 'bg-white/80 border-blue-200/50 hover:bg-white hover:border-blue-300/70 hover:shadow-xl'
                  }`}>
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-neutral-800/20 to-zinc-900/20' 
                        : 'bg-gradient-to-br from-blue-50/80 to-purple-50/80'
                    }`} />
                    
                    <a 
                      href="#portfolio"
                      className="relative flex flex-col items-center space-y-6 lg:space-y-8 text-center w-full"
                    >
                      <div className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 flex items-center justify-center">
                        <motion.div
                          whileHover={{ 
                            scale: 1.1,
                            transition: { duration: 0.4, ease: "easeOut" }
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full h-full cursor-pointer"
                        >
                          <img 
                            src="/images/bitmoji/bitmoji_designer_clean.png" 
                            alt="Designer Bitmoji"
                            className="w-full h-full object-contain drop-shadow-2xl"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/images/bitmoji/designer-bitmoji.svg";
                            }}
                          />
                        </motion.div>
                      </div>
                    
                      {/* Title Below Bitmoji */}
                      <div className="text-center space-y-4">
                        <h4 className={`text-xl lg:text-2xl xl:text-3xl font-medium tracking-wide transition-colors duration-500 ${
                          isDarkMode 
                            ? 'bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent' 
                            : 'text-gray-800'
                        }`}>
                          UI/UX Designer
                        </h4>
                        <p className={`text-lg lg:text-xl leading-relaxed font-light transition-colors duration-500 ${
                          isDarkMode ? 'text-neutral-400' : 'text-gray-600'
                        }`}>
                          Design thinking & User experience
                        </p>
                      </div>
                    </a>
                  </div>

                  {/* Photographer Card - Enhanced */}
                  <div className={`relative group p-8 lg:p-10 rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                    isDarkMode 
                      ? 'bg-neutral-900/40 border-neutral-800/50 hover:bg-neutral-900/60 hover:border-neutral-700' 
                      : 'bg-white/80 border-blue-200/50 hover:bg-white hover:border-blue-300/70 hover:shadow-xl'
                  }`}>
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-neutral-800/20 to-zinc-900/20' 
                        : 'bg-gradient-to-br from-blue-50/80 to-purple-50/80'
                    }`} />
                    
                    <div className="relative flex flex-col items-center space-y-6 lg:space-y-8 text-center">
                      {/* Large Bitmoji - Enhanced */}
                      <div className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 flex items-center justify-center">
                        <motion.div
                          whileHover={{ 
                            scale: 1.1,
                            transition: { duration: 0.4, ease: "easeOut" }
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full h-full cursor-pointer"
                        >
                          <a 
                            href="https://7framesaryan-photography.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full h-full"
                          >
                            <img 
                              src="/images/bitmoji/bitmoji_photographer_clean.png" 
                              alt="Photographer Bitmoji"
                              className="w-full h-full object-contain drop-shadow-2xl"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/images/bitmoji/photographer-bitmoji.svg";
                              }}
                            />
                          </a>
                        </motion.div>
                      </div>
                    
                    {/* Title Below Bitmoji */}
                    <div className="text-center space-y-3">
                      <h4 className={`text-lg lg:text-xl xl:text-2xl font-medium tracking-wide transition-colors duration-500 ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent' 
                          : 'text-gray-800'
                      }`}>
                        Photographer
                      </h4>
                      <p className={`text-base lg:text-lg leading-relaxed font-light transition-colors duration-500 ${
                        isDarkMode ? 'text-neutral-400' : 'text-gray-600'
                      }`}>
                        Visual storytelling & Creative arts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}
