"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function FullStackSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const solutions = [
    {
      title: "Foundation Models",
      description: "State-of-the-art language models trained on African languages and contexts",
      icon: "🧠",
    },
    {
      title: "Computer Vision",
      description: "Advanced image recognition and processing for African environments",
      icon: "👁️",
    },
    {
      title: "Speech Recognition",
      description: "Multi-lingual speech processing supporting indigenous languages",
      icon: "🗣️",
    },
    {
      title: "Data Infrastructure",
      description: "Robust offline-first data capture and processing systems",
      icon: "🏗️",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-dbu-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Solutions List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dbu-fg mb-6">
              Full-Stack <span className="text-gradient">AI Solutions</span>
            </h2>
            <p className="text-xl text-dbu-fg-2 mb-12 leading-relaxed">
              From foundation models to deployment, we provide comprehensive AI solutions 
              tailored for African markets and beyond.
            </p>
            
            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="text-3xl">{solution.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-dbu-fg mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-dbu-fg-2 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Block Diagram Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-dbu-bg-2/50 rounded-2xl p-8 border border-dbu-grad-from/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-semibold text-dbu-fg mb-2">
                  AI Stack Architecture
                </h3>
                <p className="text-dbu-fg-2">
                  Integrated components working in harmony
                </p>
              </div>
              
              {/* Simplified Block Diagram */}
              <div className="space-y-4">
                {['Frontend Applications', 'API Gateway', 'ML Models', 'Data Layer'].map((layer, index) => (
                  <motion.div
                    key={layer}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-dbu-gradient/10 border border-dbu-grad-from/30 rounded-lg p-4 text-center"
                  >
                    <span className="text-dbu-fg font-medium">{layer}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 