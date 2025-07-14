"use client"

import { motion } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react'
import Link from 'next/link'
import type { Product } from '@/lib/mdx'

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const cardSpring = useSpring({
    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0px) scale(1)',
    boxShadow: isHovered 
      ? '0 12px 48px rgba(110, 0, 255, 0.35)' 
      : '0 6px 24px rgba(110, 0, 255, 0.25)',
    config: { mass: 1, tension: 280, friction: 60 }
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'alpha':
        return 'from-orange-500 to-red-500'
      case 'beta':
        return 'from-yellow-500 to-orange-500'
      case 'stable':
        return 'from-green-500 to-emerald-500'
      default:
        return 'from-purple-500 to-pink-500'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <animated.div
        style={cardSpring}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group"
      >
        <Link href={`/products/${product.slug}`}>
          <div className="bg-dbu-bg-2/50 rounded-2xl p-8 border border-dbu-grad-from/20 hover:border-dbu-grad-from/40 transition-colors duration-300 cursor-pointer h-full">
            <div className="flex items-start justify-between mb-6">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getStatusColor(product.frontMatter.status)} flex items-center justify-center`}>
                <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
              </div>
              
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                product.frontMatter.status === 'stable' 
                  ? 'bg-green-500/20 text-green-400' 
                  : product.frontMatter.status === 'beta'
                  ? 'bg-yellow-500/20 text-yellow-400'
                  : 'bg-orange-500/20 text-orange-400'
              }`}>
                {product.frontMatter.status.toUpperCase()}
              </div>
            </div>
            
            <h3 className="text-2xl font-display font-semibold text-dbu-fg mb-4 group-hover:text-gradient transition-all duration-300">
              {product.frontMatter.title}
            </h3>
            
            <p className="text-dbu-fg-2 mb-6 leading-relaxed">
              {product.frontMatter.tagline}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {product.frontMatter.stack.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-dbu-gradient/10 rounded-lg text-dbu-fg-2 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center text-dbu-fg-2 group-hover:text-dbu-fg transition-colors duration-300">
              <span className="text-sm font-medium">Learn more</span>
              <svg 
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      </animated.div>
    </motion.div>
  )
} 