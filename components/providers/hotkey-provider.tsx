"use client"

import React, { createContext, useContext, useEffect } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { useTheme } from 'next-themes'
import { useHotkeyStore } from '@/lib/stores/hotkey-store'
import { toast } from '@/lib/utils/toast'

interface HotkeyContextType {
  showFormulas: boolean
  animationsEnabled: boolean
  toggleFormulas: () => void
  toggleAnimations: () => void
  toggleTheme: () => void
}

const HotkeyContext = createContext<HotkeyContextType | undefined>(undefined)

export function useHotkeyContext() {
  const context = useContext(HotkeyContext)
  if (!context) {
    throw new Error('useHotkeyContext must be used within a HotkeyProvider')
  }
  return context
}

export function HotkeyProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme()
  const { 
    showFormulas, 
    animationsEnabled, 
    toggleFormulas, 
    toggleAnimations 
  } = useHotkeyStore()

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    toast({
      title: 'Theme switched',
      description: `Switched to ${newTheme} mode`,
    })
  }

  // Hotkey bindings
  useHotkeys('m', () => {
    toggleFormulas()
    toast({
      title: 'Formulas toggled',
      description: showFormulas ? 'Formulas hidden' : 'Formulas shown',
    })
  })

  useHotkeys('g', () => {
    toggleAnimations()
    toast({
      title: 'Animations toggled',
      description: animationsEnabled ? 'Animations disabled' : 'Animations enabled',
    })
  })

  useHotkeys('t', () => {
    toggleTheme()
  })

  useHotkeys('meta+k,ctrl+k', (e) => {
    e.preventDefault()
    // Command palette will be implemented later
    toast({
      title: 'Command palette',
      description: 'Command palette coming soon!',
    })
  })

  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches && animationsEnabled) {
        toggleAnimations()
        toast({
          title: 'Animations disabled',
          description: 'Respecting reduced motion preference',
        })
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    
    // Initial check
    if (mediaQuery.matches && animationsEnabled) {
      toggleAnimations()
    }

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [animationsEnabled, toggleAnimations])

  const value = {
    showFormulas,
    animationsEnabled,
    toggleFormulas,
    toggleAnimations,
    toggleTheme,
  }

  return (
    <HotkeyContext.Provider value={value}>
      {children}
    </HotkeyContext.Provider>
  )
} 