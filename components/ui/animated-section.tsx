'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 