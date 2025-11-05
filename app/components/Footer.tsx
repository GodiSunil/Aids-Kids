'use client'

import Link from 'next/link'
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-text-light py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">About</h3>
            <p className="text-text-light/80 leading-relaxed mb-6">
              Providing comprehensive care and support to individuals and families affected by HIV/AIDS.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface-light/10 flex items-center justify-center hover:bg-secondary transition-all duration-300 group">
                <FaFacebook className="w-4 h-4 text-text-light group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface-light/10 flex items-center justify-center hover:bg-secondary transition-all duration-300 group">
                <FaTwitter className="w-4 h-4 text-text-light group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface-light/10 flex items-center justify-center hover:bg-secondary transition-all duration-300 group">
                <FaInstagram className="w-4 h-4 text-text-light group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-text-light/80 hover:text-secondary transition-colors duration-300">Home</Link></li>
              <li><Link href="/who-we-are/about-us" className="text-text-light/80 hover:text-secondary transition-colors duration-300">About Us</Link></li>
              <li><Link href="/our-programs/charitable-home" className="text-text-light/80 hover:text-secondary transition-colors duration-300">Our Programs</Link></li>
              <li><Link href="/contact" className="text-text-light/80 hover:text-secondary transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact</h3>
            <div className="space-y-4 text-text-light/80">
              <p className="flex items-start">
                <FaMapMarkerAlt className="w-4 h-4 mt-1 mr-3 text-secondary" />
                <span>123 Care Street, Hope City, HC 12345</span>
              </p>
              <p className="flex items-center">
                <FaPhone className="w-4 h-4 mr-3 text-secondary" />
                <span>(555) 123-4567</span>
              </p>
              <p className="flex items-center">
                <FaEnvelope className="w-4 h-4 mr-3 text-secondary" />
                <span>info@aidscare.org</span>
              </p>
            </div>
          </div>

          {/* Donate */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Support Us</h3>
            <p className="text-text-light/80 leading-relaxed mb-6">
              Your donation helps us continue providing essential care and support.
            </p>
            <Link href="/donate" className="btn-primary">
              Donate Now
            </Link>
          </div>
        </div>

        <div className="border-t border-border-subtle mt-16 pt-8 text-center text-text-light/60">
          <p>&copy; 2024 AIDS Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
