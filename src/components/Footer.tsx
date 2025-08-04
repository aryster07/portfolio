"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
              7frames_aryan
            </h3>
            <p className="text-gray-400">
              Creating visual stories that inspire
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {currentYear} Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> by Aryan
            </p>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            Built with Next.js, TypeScript, Tailwind CSS, and GSAP
          </p>
        </div>
      </div>
    </footer>
  )
}
