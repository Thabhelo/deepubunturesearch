"use client"

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { TorusHero } from '@/components/canvas/torus-hero'
import { Button } from '@/components/ui/button'
import { useHotkeyContext } from '@/components/providers/hotkey-provider'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { animationsEnabled } = useHotkeyContext()

  useEffect(() => {
    if (!animationsEnabled || !sectionRef.current) return

    const tl = gsap.timeline()
    
    // Pin the hero section for scroll effects
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom center",
        pin: true,
        scrub: 1,
      }
    })

    return () => {
      tl.kill()
    }
  }, [animationsEnabled])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Torus */}
      <TorusHero />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dbu-bg/20 via-transparent to-dbu-bg/80 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8">
            <span className="text-dbu-fg">Breakthrough </span>
            <span className="text-gradient">AI</span>
            <span className="text-dbu-fg"> for </span>
            <br className="hidden sm:block" />
            <span className="text-dbu-fg">Africa </span>
            <span className="text-gradient">&</span>
            <span className="text-dbu-fg"> Beyond</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-dbu-fg-2 font-medium mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Pioneering foundation models and AI solutions specifically designed for African languages, cultures, and contexts. 
            Building the future of inclusive artificial intelligence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              Book a Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-8 py-6 text-lg rounded-xl transition-all duration-300"
            >
              Build with Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <span className="text-dbu-fg-2 text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-dbu-grad-from/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-dbu-gradient rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
} 