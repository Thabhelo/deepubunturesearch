"use client"

import { motion } from 'framer-motion'
import { useHotkeyContext } from '@/components/providers/hotkey-provider'

const partners = [
  'Army Research Lab',
  'Air Force Research Laboratory',
  'Defense Innovation Unit',
  'MIT Lincoln Lab',
  'Stanford AI Lab',
  'Google Research',
  'Microsoft Research',
  'DeepMind',
  'Anthropic',
  'OpenAI',
]

export function TrustStripSection() {
  const { animationsEnabled } = useHotkeyContext()

  return (
    <section className="py-16 bg-dbu-bg-2/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-dbu-fg mb-4">
            Trusted by Leading <span className="text-gradient">Research Institutions</span>
          </h2>
          <p className="text-dbu-fg-2 max-w-2xl mx-auto">
            Collaborating with top-tier organizations to advance AI research and development
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Gradient masks for smooth scroll effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-dbu-bg to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-dbu-bg to-transparent z-10" />
          
          <motion.div
            animate={animationsEnabled ? {
              x: [0, -1000],
            } : {}}
            transition={animationsEnabled ? {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            } : {}}
            className="flex space-x-8 items-center"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="flex-shrink-0 bg-dbu-bg-2/80 border border-dbu-grad-from/20 rounded-lg px-6 py-4 backdrop-blur-sm"
              >
                <span className="text-dbu-fg-2 font-medium whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 