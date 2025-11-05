'use client'

import Link from 'next/link'
import { HiHeart } from 'react-icons/hi'
import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  const toggleDropdown = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key))
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinkClasses = "font-medium text-text-dark hover:text-secondary transition-all duration-300 relative group";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-border-subtle' 
        : 'bg-transparent'
    }`}>
      <nav className="flex items-center justify-between h-20 px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <HiHeart className="text-3xl text-secondary group-hover:text-accent transition-all duration-300" />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-primary">
            Ravi Teja Childrens Home
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className={navLinkClasses}>
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Who Are We */}
          <div className="relative group">
            <button className={`${navLinkClasses} flex items-center gap-1`}>
              Who Are We <FiChevronDown className="mt-px transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out absolute left-0 mt-4 w-56 bg-white border border-border-subtle rounded-2xl shadow-lg overflow-hidden py-2">
              <Link href="/who-we-are/about-us" className="block px-4 py-3 text-text-dark hover:bg-neutral hover:text-secondary transition-all duration-200">About Us</Link>
              <Link href="/who-we-are/our-story" className="block px-4 py-3 text-text-dark hover:bg-neutral hover:text-secondary transition-all duration-200">Our Story</Link>
              <Link href="/who-we-are/mission-vision" className="block px-4 py-3 text-text-dark hover:bg-neutral hover:text-secondary transition-all duration-200">Mission & Vision</Link>
            </div>
          </div>

          {/* Our Programs */}
          <div className="relative group">
            <button className={`${navLinkClasses} flex items-center gap-1`}>
              Our Programs <FiChevronDown className="mt-px transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out absolute left-0 mt-4 w-56 bg-white border border-border-subtle rounded-2xl shadow-lg overflow-hidden py-2">
              <Link href="/our-programs/charitable-home" className="block px-4 py-3 text-text-dark hover:bg-neutral hover:text-secondary transition-all duration-200">Charitable Home for HIV/AIDS Kids</Link>
              <Link href="/our-programs/exigency-block" className="block px-4 py-3 text-text-dark hover:bg-neutral hover:text-secondary transition-all duration-200">Exigency Block for HIV + TB Kids</Link>
              <Link href="/our-programs/home-based-care" className="block px-4 py-3 text-text-dark hover:bg-neutral hover:text-secondary transition-all duration-200">Home Based Care</Link>
            </div>
          </div>

          <Link href="/our-impact" className={navLinkClasses}>Our Impact</Link>

          {/* In News */}
          <div className="relative group">
            <button className={`${navLinkClasses} flex items-center gap-1`}>
              In News <FiChevronDown className="mt-px transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out absolute left-0 mt-4 w-56 bg-white border border-border-subtle rounded-2xl shadow-lg overflow-hidden py-2">
              <Link href="/in-news/paper-clippings" className="block px-4 py-3 text-text-dark hover:bg-neutral hover:text-secondary transition-all duration-200">Paper Clippings</Link>
              <Link href="/in-news/video-clippings" className="block px-4 py-3 text-text-dark hover:bg-neutral hover:text-secondary transition-all duration-200">Video Clippings</Link>
            </div>
          </div>

          <Link href="/gallery" className={navLinkClasses}>Gallery</Link>
          <Link href="/contact" className={navLinkClasses}>Contact</Link>

          {/* Donate Button */}
          <Link href="/donate" className="btn-primary">
            Donate Now
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="lg:hidden flex items-center gap-3">
          <Link href="/donate" className="btn-primary text-sm px-4 py-2">
            Donate
          </Link>
          <button aria-label="Toggle menu" onClick={() => setMobileOpen((v) => !v)} className="text-text-dark text-2xl hover:text-secondary transition-colors">
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden px-8 pb-4 bg-white/95 backdrop-blur-xl border-t border-border-subtle">
          <div className="flex flex-col gap-2 pt-4">
            <Link href="/" className="py-3 text-text-dark hover:text-secondary transition-colors" onClick={() => setMobileOpen(false)}>Home</Link>

            {/* Who Are We - mobile */}
            <div>
              <button className="w-full flex items-center justify-between py-2 text-text-dark hover:text-secondary transition" onClick={() => toggleDropdown('who')}>Who Are We <FiChevronDown className={`transition ${openDropdown === 'who' ? 'rotate-180' : ''}`} /></button>
              {openDropdown === 'who' && (
                <div className="ml-3 flex flex-col rounded-lg bg-neutral overflow-hidden">
                  <Link href="/who-we-are/about-us" className="px-4 py-2 text-text-dark hover:bg-white hover:text-secondary" onClick={() => setMobileOpen(false)}>About Us</Link>
                  <Link href="/who-we-are/our-story" className="px-4 py-2 text-text-dark hover:bg-white hover:text-secondary" onClick={() => setMobileOpen(false)}>Our Story</Link>
                  <Link href="/who-we-are/mission-vision" className="px-4 py-2 text-text-dark hover:bg-white hover:text-secondary" onClick={() => setMobileOpen(false)}>Mission & Vision</Link>
                </div>
              )}
            </div>

            {/* Our Programs - mobile */}
            <div>
              <button className="w-full flex items-center justify-between py-2 text-text-dark hover:text-secondary transition" onClick={() => toggleDropdown('programs')}>Our Programs <FiChevronDown className={`transition ${openDropdown === 'programs' ? 'rotate-180' : ''}`} /></button>
              {openDropdown === 'programs' && (
                <div className="ml-3 flex flex-col rounded-lg bg-neutral overflow-hidden">
                  <Link href="/our-programs/charitable-home" className="px-4 py-2 text-text-dark hover:bg-white hover:text-secondary" onClick={() => setMobileOpen(false)}>Charitable Home for HIV/AIDS Kids</Link>
                  <Link href="/our-programs/exigency-block" className="px-4 py-2 text-text-dark hover:bg-white hover:text-secondary" onClick={() => setMobileOpen(false)}>Exigency Block for HIV + TB Kids</Link>
                  <Link href="/our-programs/home-based-care" className="px-4 py-2 text-text-dark hover:bg-white hover:text-secondary" onClick={() => setMobileOpen(false)}>Home Based Care</Link>
                </div>
              )}
            </div>

            {/* In News - mobile */}
            <div>
              <button className="w-full flex items-center justify-between py-2 text-text-dark hover:text-secondary transition" onClick={() => toggleDropdown('news')}>In News <FiChevronDown className={`transition ${openDropdown === 'news' ? 'rotate-180' : ''}`} /></button>
              {openDropdown === 'news' && (
                <div className="ml-3 flex flex-col rounded-lg bg-neutral overflow-hidden">
                  <Link href="/in-news/paper-clippings" className="px-4 py-2 text-text-dark hover:bg-white hover:text-secondary" onClick={() => setMobileOpen(false)}>Paper Clippings</Link>
                  <Link href="/in-news/video-clippings" className="px-4 py-2 text-text-dark hover:bg-white hover:text-secondary" onClick={() => setMobileOpen(false)}>Video Clippings</Link>
                </div>
              )}
            </div>

            <Link href="/our-impact" className="py-2 text-text-dark hover:text-secondary transition" onClick={() => setMobileOpen(false)}>Our Impact</Link>
            <Link href="/gallery" className="py-2 text-text-dark hover:text-secondary transition" onClick={() => setMobileOpen(false)}>Gallery</Link>
            <Link href="/contact" className="py-2 text-text-dark hover:text-secondary transition" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
