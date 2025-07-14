"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'

export function FooterCTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const footerLinks = {
    'Products': [
      'Deep Ubuntu AI',
      'cowcow CLI',
      'AI Agents',
      'Custom Solutions',
    ],
    'Research': [
      'Publications',
      'Open Source',
      'Datasets',
      'Collaborations',
    ],
    'Company': [
      'About',
      'Careers',
      'Blog',
      'Contact',
    ],
    'Resources': [
      'Documentation',
      'API Reference',
      'Support',
      'Community',
    ],
  }

  return (
    <section ref={ref} className="py-20 bg-dbu-bg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Giant CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8">
            <span className="text-dbu-fg">The future of your industry </span>
            <span className="text-gradient">starts here</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-dbu-fg-2 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join us in revolutionizing AI for Africa and beyond. 
            From research to deployment, we&apos;re building the next generation of intelligent systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-12 py-6 text-xl rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-12 py-6 text-xl rounded-xl transition-all duration-300"
            >
              Schedule a Call
            </Button>
          </div>
        </motion.div>

        {/* Mega Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-dbu-grad-from/20 pt-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-display font-bold text-dbu-fg mb-4">
                Deep Ubuntu Research
              </h3>
              <p className="text-dbu-fg-2 mb-6 max-w-md leading-relaxed">
                Pioneering AI research and development for African languages and contexts. 
                Building inclusive artificial intelligence for a global future.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-dbu-gradient/20 rounded-lg flex items-center justify-center">
                  <span className="text-dbu-fg">🐦</span>
                </div>
                <div className="w-10 h-10 bg-dbu-gradient/20 rounded-lg flex items-center justify-center">
                  <span className="text-dbu-fg">💼</span>
                </div>
                <div className="w-10 h-10 bg-dbu-gradient/20 rounded-lg flex items-center justify-center">
                  <span className="text-dbu-fg">🐙</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold text-dbu-fg mb-4">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-dbu-fg-2 hover:text-dbu-fg transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-dbu-grad-from/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-dbu-fg-2 text-sm">
              © 2024 Deep Ubuntu Research. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-dbu-fg-2 hover:text-dbu-fg text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-dbu-fg-2 hover:text-dbu-fg text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-dbu-fg-2 hover:text-dbu-fg text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 