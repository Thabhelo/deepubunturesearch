"use client"

import { motion } from 'framer-motion'
import type { Product } from '@/lib/mdx'
import { WaveformSpiral } from '@/components/canvas/waveform-spiral'
import { TensorGrid } from '@/components/canvas/tensor-grid'

interface ProductHeroProps {
  product: Product
}

function getProductScene(slug: string) {
  switch (slug) {
    case 'cowcow':
      return <WaveformSpiral />
    case 'deep-ubuntu-ai':
      return <TensorGrid />
    default:
      return <div className="absolute inset-0 bg-gradient-to-br from-dbu-grad-from/20 to-dbu-grad-to/20" />
  }
}

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Scene */}
      {product.frontMatter.modelScene && getProductScene(product.slug)}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dbu-bg/20 via-transparent to-dbu-bg/80 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className={`px-4 py-2 rounded-full text-sm font-medium ${
              product.frontMatter.status === 'stable' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : product.frontMatter.status === 'beta'
                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
            }`}>
              {product.frontMatter.status.toUpperCase()}
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            <span className="text-gradient">{product.frontMatter.title}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-dbu-fg-2 font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
            {product.frontMatter.tagline}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {product.frontMatter.stack.map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-dbu-gradient/10 border border-dbu-grad-from/30 rounded-lg text-dbu-fg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-dbu-gradient hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300">
              Get Started
            </button>
            <button className="border border-dbu-grad-from/30 hover:border-dbu-grad-from/50 text-dbu-fg hover:text-dbu-fg bg-transparent px-8 py-4 text-lg rounded-xl transition-all duration-300">
              View Documentation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 