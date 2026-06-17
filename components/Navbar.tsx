'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { GiWaves } from 'react-icons/gi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/chat', label: 'Chat' },
    { href: '/video', label: 'Video Calls' },
    { href: '/community', label: 'Community' },
    { href: '/resources', label: 'Resources' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-night-sky/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <GiWaves className="text-4xl text-wave group-hover:text-ocean-light transition-colors duration-300" />
            <div>
              <h1 className="text-2xl font-display text-sand">
                Free By The
                <span className="gradient-text"> Sea&apos;Gals</span>
              </h1>
              <p className="text-xs text-sand/60 -mt-1">Recovery Community</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sand/80 hover:text-wave transition-colors duration-300 font-medium text-sm uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/chat"
              className="btn-primary text-sm"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-sand hover:text-wave transition-colors"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass mt-2 rounded-2xl overflow-hidden animate-fadeIn">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sand/80 hover:text-wave transition-colors duration-300 font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/chat"
                onClick={() => setIsOpen(false)}
                className="block btn-primary text-center"
              >
                Join Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
