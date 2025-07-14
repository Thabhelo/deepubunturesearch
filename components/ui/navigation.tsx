"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

interface NavigationItem {
  name: string
  href: string
  description?: string
}

interface NavigationSection {
  name: string
  items: NavigationItem[]
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigationSections: NavigationSection[] = [
    {
      name: 'Products',
      items: [
        { name: 'Deep Ubuntu AI', href: '/products/deep-ubuntu-ai', description: 'Advanced foundation models for African languages' },
        { name: 'cowcow CLI', href: '/products/cowcow', description: 'Offline-first data capture tools' },
        { name: 'AI Agents', href: '/products/ai-agents', description: 'Intelligent automation solutions' },
        { name: 'Custom Solutions', href: '/products/custom-solutions', description: 'Tailored AI implementations' },
      ]
    },
    {
      name: 'Research',
      items: [
        { name: 'Publications', href: '/research/publications', description: 'Latest research papers and findings' },
        { name: 'Open Source', href: '/research/open-source', description: 'Community-driven projects' },
        { name: 'Datasets', href: '/research/datasets', description: 'African language datasets' },
        { name: 'Collaborations', href: '/research/collaborations', description: 'Academic partnerships' },
      ]
    },
    {
      name: 'Company',
      items: [
        { name: 'About', href: '/about', description: 'Our mission and team' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Blog', href: '/blog', description: 'Latest insights and updates' },
        { name: 'Contact', href: '/contact', description: 'Get in touch' },
      ]
    },
    {
      name: 'Resources',
      items: [
        { name: 'Documentation', href: '/resources/documentation', description: 'Developer guides and API docs' },
        { name: 'API Reference', href: '/resources/api-reference', description: 'Complete API documentation' },
        { name: 'Support', href: '/resources/support', description: 'Help and troubleshooting' },
        { name: 'Community', href: '/resources/community', description: 'Connect with other developers' },
      ]
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDropdownToggle = (section: string) => {
    setActiveDropdown(activeDropdown === section ? null : section)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dbu-bg/95 backdrop-blur-sm border-b border-dbu-grad-from/20' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
              <span className="text-xl font-display font-bold text-dbu-fg">
                Deep Ubuntu <span className="text-gradient">Research</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationSections.map((section) => (
                <div key={section.name} className="relative">
                  <button
                    onClick={() => handleDropdownToggle(section.name)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                      section.items.some(item => pathname.startsWith(item.href))
                        ? 'text-dbu-fg bg-dbu-gradient/10'
                        : 'text-dbu-fg-2 hover:text-dbu-fg hover:bg-dbu-gradient/5'
                    }`}
                  >
                    <span>{section.name}</span>
                    <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === section.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === section.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-dbu-bg-2/95 backdrop-blur-sm rounded-xl shadow-lg border border-dbu-grad-from/20 overflow-hidden"
                      >
                        <div className="py-2">
                          {section.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={closeDropdown}
                              className={`block px-4 py-3 text-sm hover:bg-dbu-gradient/10 transition-colors duration-200 ${
                                pathname === item.href
                                  ? 'text-dbu-fg bg-dbu-gradient/10'
                                  : 'text-dbu-fg-2 hover:text-dbu-fg'
                              }`}
                            >
                              <div className="font-medium">{item.name}</div>
                              {item.description && (
                                <div className="text-xs text-dbu-fg-2 mt-1">{item.description}</div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-dbu-fg hover:text-dbu-fg-2 p-2"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-dbu-bg-2/95 backdrop-blur-sm rounded-xl mt-2 border border-dbu-grad-from/20"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationSections.map((section) => (
                  <div key={section.name}>
                    <div className="px-3 py-2 text-sm font-medium text-dbu-fg border-b border-dbu-grad-from/10">
                      {section.name}
                    </div>
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`block px-6 py-2 text-sm transition-colors duration-200 ${
                          pathname === item.href
                            ? 'text-dbu-fg bg-dbu-gradient/10'
                            : 'text-dbu-fg-2 hover:text-dbu-fg hover:bg-dbu-gradient/5'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
} 