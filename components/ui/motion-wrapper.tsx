'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionDivProps {
  children: ReactNode
  className?: string
  initial?: any
  animate?: any
  transition?: any
  [key: string]: any
}

export function MotionDiv({ children, className, initial, animate, transition, ...props }: MotionDivProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Server-safe version that renders a regular div
export function StaticDiv({ children, className, ...props }: MotionDivProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
} 