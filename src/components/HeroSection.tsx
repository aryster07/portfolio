"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { MapPin, Download, ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [showMore, setShowMore] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [currentTermIndex, setCurrentTermIndex] = useState(0)
  const containerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
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
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_60%)]" />
      </div>

      {/* Floating Bitmoji Characters */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          className="absolute top-1/4 right-12 w-12 h-12 opacity-15"
        >
          <img 
            src="/images/bitmoji/bitmoji_photographer_clean.png" 
            alt="Photographer Bitmoji"
            className="w-full h-full object-contain filter brightness-60"
          />
        </motion.div>
        
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
          className="absolute bottom-1/3 left-16 w-10 h-10 opacity-12"
        >
          <img 
            src="/images/bitmoji/bitmoji_designer_clean.png" 
            alt="Designer Bitmoji"
            className="w-full h-full object-contain filter brightness-50"
          />
        </motion.div>

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
          className="absolute top-2/3 right-1/4 w-8 h-8 opacity-10"
        >
          <img 
            src="/images/bitmoji/bitmoji_photographer_clean.png" 
            alt="Photographer Bitmoji"
            className="w-full h-full object-contain filter brightness-70"
          />
        </motion.div>
      </div>

      {/* Auto Layout Container - Like Figma */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 sm:py-6 md:py-8 pt-16 sm:pt-20 lg:pt-12">
        
        {/* Main Content - Mobile First Layout */}
        <div className="flex flex-col space-y-10 lg:space-y-6">
          
          {/* Mobile Layout - Single Column */}
          <div className="lg:hidden flex flex-col items-center space-y-8">
            
            {/* Status Chip - Mobile */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/30">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-30" />
                </div>
                <span className="text-sm font-medium text-slate-300">Available for hire</span>
              </div>
            </div>

            {/* 1. Profile Image with Enhanced Design */}
            <div 
              ref={profileImageRef}
              className="relative flex justify-center items-center w-full pt-2"
            >
              <div className="relative">
                {/* Outer Ring with Gradient */}
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 p-1 shadow-2xl shadow-blue-500/25">
                  {/* Inner Ring */}
                  <div className="w-full h-full rounded-full bg-slate-900 p-1">
                    <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden border border-blue-400/20">
                      <img 
                        src="/images/profile/20250206_051456000_iOS.jpg" 
                        alt="Aryan Profile"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23334155'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23cbd5e1' font-family='system-ui' font-size='16'%3EProfile%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Status Indicators - Enhanced */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-slate-900 shadow-lg">
                  <div className="w-full h-full rounded-full bg-blue-400 animate-pulse" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-3 border-slate-900 shadow-lg animate-bounce" />
              </div>
            </div>

            {/* 2. Profile Info with Enhanced Typography */}
            <div className="flex flex-col items-center space-y-4 text-center px-4">
              {/* Name with improved styling */}
              <div className="space-y-2">
                <h1 
                  ref={titleRef}
                  className="text-4xl sm:text-5xl font-black leading-tight tracking-tight"
                >
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
                    7frames_aryan
                  </span>
                </h1>
                
                {/* Small Role Chips */}
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-500/30">
                    Photographer
                  </span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30">
                    UI/UX Designer
                  </span>
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-medium rounded-full border border-amber-500/30">
                    Editor
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full border border-green-500/30">
                    Gamer
                  </span>
                </div>
              </div>

              {/* Location with enhanced design */}
              <div className="flex items-center gap-2 px-3 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm sm:text-base text-blue-100 font-medium">Himachal Pradesh 🏔️</span>
              </div>
            </div>

            {/* 3. Quick Actions - Direct Button */}
            <div className="w-full max-w-sm">
              <a
                href="/cv/Aryan_Rana_CV.pdf"
                download="Aryan_Rana_CV.pdf"
                className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>

            {/* 4. Skills Showcase */}
            <div className="w-full max-w-md">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 leading-relaxed">
                <span className="text-white">What side of me </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  do you want to see?
                </span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {/* UI/UX Designer Card */}
                <div className="flex flex-col items-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 cursor-pointer group text-center hover:bg-slate-700/40 transition-colors duration-300">
                  <div className="w-16 h-16 mb-3 flex-shrink-0">
                    <img 
                      src="/images/bitmoji/bitmoji_designer_clean.png" 
                      alt="Designer Bitmoji"
                      className="w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/bitmoji/designer-bitmoji.svg";
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                      UI/UX Designer
                    </h4>
                    <p className="text-slate-400 text-xs">
                      Design & UX
                    </p>
                  </div>
                </div>

                {/* Photographer Card */}
                <div className="flex flex-col items-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 cursor-pointer group text-center hover:bg-slate-700/40 transition-colors duration-300">
                  <a 
                    href="https://7framesaryan.vercel.app/#home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center w-full"
                  >
                    <div className="w-16 h-16 mb-3 flex-shrink-0">
                      <img 
                        src="/images/bitmoji/bitmoji_photographer_clean.png" 
                        alt="Photographer Bitmoji"
                        className="w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/images/bitmoji/photographer-bitmoji.svg";
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                        Photographer
                      </h4>
                      <p className="text-slate-400 text-xs">
                        Crazy shots
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 5. About Me Section - Modern Card */}
            <div className="w-full max-w-lg">
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-700/30 p-6">
                <h2 
                  ref={aboutTitleRef}
                  className="text-2xl sm:text-3xl font-bold mb-6 text-center"
                >
                  <span className="text-white">About </span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Me
                  </span>
                </h2>
                
                <div 
                  ref={descriptionRef}
                  className="space-y-4"
                >
                  <div className="text-slate-300 text-base leading-relaxed space-y-4">
                    <p className="bio-text">
                      Hello, I'm Aryan - a mountain dweller with an intense passion for <span className="text-blue-400 font-semibold">technology</span>,{" "}
                      <span className="text-purple-400 font-semibold">creative arts</span>, and <span className="text-slate-300 font-semibold">excellence</span>. 
                      As a <span className="text-amber-400 font-semibold">photographer</span> and <span className="text-blue-400 font-semibold">UI/UX designer</span>, I 
                      love diving deep into challenges and creating innovative solutions.
                    </p>
                    
                    <p className="bio-text">
                      My approach goes beyond just solving problems - I believe in understanding the root cause and delivering <span className="text-purple-400 font-semibold">precise, thoughtful solutions</span>. 
                      This attention to detail is what I bring to every single project I work on.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Social Links - Direct Design */}
            <div className="w-full max-w-sm mb-8">
              <h3 className="text-lg font-semibold text-center mb-4 text-slate-200">Connect with me</h3>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/7frames_aryan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Instagram profile"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
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
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
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
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
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
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
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
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                
              </div>
            </div>
          </div>

          {/* Desktop Layout - Original Two Column Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
            
            {/* Left Column - Profile Picture */}
            <div className="order-2 lg:order-1 flex flex-col items-center justify-center space-y-4 md:space-y-5">
              
              {/* Profile Image Container */}
              <div 
                ref={profileImageRef}
                className="relative flex justify-center items-center w-full"
              >
                <div className="relative">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 xl:w-60 xl:h-60 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 p-2 shadow-2xl shadow-blue-500/20">
                    <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden border-2 border-blue-400/30">
                      <img 
                        src="/images/profile/20250206_051456000_iOS.jpg" 
                        alt="Aryan Profile"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `
                            <div class="w-full h-full bg-gradient-to-br from-blue-500 via-purple-600 to-slate-500 flex items-center justify-center text-white font-bold text-6xl">
                              A
                            </div>
                          `;
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Status Indicators */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-400 rounded-full border-4 border-slate-900 animate-pulse shadow-lg shadow-blue-400/30" />
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-purple-400 rounded-full border-4 border-slate-900 animate-bounce shadow-lg shadow-purple-400/30" />
                
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
                  className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold leading-tight"
                >
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-slate-300 bg-clip-text text-transparent drop-shadow-lg">
                    7frames_aryan
                  </span>
                </h1>

                {/* Small Role Chips */}
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-500/30">
                    Photographer
                  </span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30">
                    UI/UX Designer
                  </span>
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-medium rounded-full border border-amber-500/30">
                    Editor
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full border border-green-500/30">
                    Gamer
                  </span>
                </div>

                <div className="flex items-center justify-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-sm sm:text-base lg:text-lg">Himachal Pradesh 🏔️</span>
                </div>

                {/* CTA Button - Below Profile Info */}
                <div className="pt-5 flex justify-center">
                  <a
                    href="/cv/Aryan_Rana_CV.pdf"
                    download="Aryan_Rana_CV.pdf"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-5 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer group"
                  >
                    <Download className="w-5 h-5 lg:w-6 lg:h-6 group-hover:animate-bounce" />
                    <span>Download CV</span>
                  </a>
                </div>

                {/* Social Links - Below Download CV */}
                <div className="pt-6">
                  <div className="flex items-center justify-center gap-4">
                    
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/7frames_aryan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Visit Instagram profile"
                      aria-label="Visit Instagram profile"
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
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
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
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
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
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
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
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
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Bio Content */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              
              {/* About Me Title */}
              <div className="text-center lg:text-left mb-6">
                <h2 
                  ref={aboutTitleRef}
                  className="text-2xl lg:text-3xl xl:text-4xl font-bold"
                >
                  <span className="text-white">About </span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Me
                  </span>
                </h2>
              </div>

              {/* Bio Content Section - Free form without container */}
              <div 
                ref={descriptionRef}
                className="flex flex-col space-y-4 text-center lg:text-left"
              >
                <div className="text-slate-300 text-sm lg:text-base xl:text-lg leading-relaxed space-y-4">
                  <p className="bio-text">
                    Hello, I'm Aryan - a mountain dweller with an intense passion for <span className="text-blue-400 font-semibold">technology</span> and{" "}
                    <span className="text-purple-400 font-semibold">creative arts</span>. As a <span className="text-amber-400 font-semibold">photographer</span> and{" "}
                    <span className="text-blue-400 font-semibold">UI/UX designer</span>, I love creating innovative solutions and delivering{" "}
                    <span className="text-purple-400 font-semibold">precise, thoughtful work</span>.
                  </p>
                </div>
              </div>

              {/* Which Side Section - Below Bio */}
              <div className="flex flex-col items-center space-y-6 text-center mt-8">
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold">
                  <span className="text-white">Which side of me </span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    would you like to see?
                  </span>
                </h3>
                
                {/* Bitmoji Cards - Independent Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full max-w-5xl px-4 relative">
                  
                  {/* Vertical Divider - Hidden on mobile, visible on desktop */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-600/30 to-transparent hidden md:block transform -translate-x-1/2"></div>
                  
                  {/* UI/UX Designer */}
                  <div className="flex flex-col items-center space-y-4">
                    {/* Large Bitmoji - Main Focus */}
                    <div className="w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 flex items-center justify-center">
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
                    <div className="text-center space-y-3">
                      <h4 className="text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        UI/UX Designer
                      </h4>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xs">
                        Design thinking & User experience
                      </p>
                    </div>
                  </div>

                  {/* Photographer */}
                  <div className="flex flex-col items-center space-y-4">
                    {/* Large Bitmoji - Main Focus */}
                    <div className="w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 flex items-center justify-center">
                      <motion.div
                        whileHover={{ 
                          scale: 1.1,
                          transition: { duration: 0.4, ease: "easeOut" }
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full h-full cursor-pointer"
                      >
                        <a 
                          href="https://7framesaryan.vercel.app/#home"
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
                      <h4 className="text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Photographer
                      </h4>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xs">
                        Visual storytelling & Creativity
                      </p>
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
