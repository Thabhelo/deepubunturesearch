"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function FrontierResearchSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [typedText, setTypedText] = useState('')
  const fullText = `> Initializing Deep Ubuntu AI Research Platform...
> Loading foundation models...
> Analyzing multilingual datasets...
> Training on African language corpora...
> Optimizing for cultural context...
> Research status: BREAKTHROUGH ACHIEVED
> Next-generation AI models ready for deployment`

  useEffect(() => {
    if (!inView) return

    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [inView, fullText])

  return (
    <section ref={ref} className="py-20 bg-dbu-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dbu-fg mb-6">
              Frontier <span className="text-gradient">AI Research</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 mb-8 leading-relaxed">
              Pushing the boundaries of artificial intelligence with cutting-edge research 
              in foundation models, multilingual processing, and cultural AI alignment.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dbu-gradient/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔬</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dbu-fg mb-2">
                    Advanced Research Labs
                  </h3>
                  <p className="text-dbu-fg-2">
                    State-of-the-art facilities for AI research and development
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dbu-gradient/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🧪</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dbu-fg mb-2">
                    Experimental Models
                  </h3>
                  <p className="text-dbu-fg-2">
                    Novel architectures and training methodologies
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dbu-gradient/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dbu-fg mb-2">
                    Open Source Contributions
                  </h3>
                  <p className="text-dbu-fg-2">
                    Sharing knowledge and tools with the global AI community
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-dbu-bg-2/80 rounded-2xl p-8 border border-dbu-grad-from/20 font-mono">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-dbu-fg-2 text-sm">
                  Deep Ubuntu Research Terminal
                </span>
              </div>
              
              <div className="h-64 overflow-hidden">
                <pre className="text-dbu-fg text-sm leading-relaxed">
                  {typedText}
                  <motion.span
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="text-dbu-gradient"
                  >
                    █
                  </motion.span>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 