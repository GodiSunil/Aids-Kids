'use client'

import { useState, useEffect } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaYoutube } from 'react-icons/fa'

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white">

      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1920&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className={`text-center text-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-slide-up">
                Contact Us
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
                We&apos;d love to hear from you. Reach out for any questions, support, or collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
              
              {/* Left Column - Contact Information */}
              <div className="animate-slide-in-left space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                    We&apos;re here to help and answer any questions you might have. Feel free to reach out 
                    to us through any of the following channels.
                  </p>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-primary-teal/10 rounded-lg p-3">
                      <FaMapMarkerAlt className="text-primary-teal text-2xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Address</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                      D.No: 11-121/1<br />
                      C/O SRTE & ICW Society<br />
                      Near VNR Grand City<br />
                      Ponanagi Road<br />
                      Eluru, West Godavari District<br />
                      Andhra Pradesh – 534001
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-primary-teal/10 rounded-lg p-3">
                      <FaPhone className="text-primary-teal text-2xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Phone Numbers</h3>
                    <p className="text-base text-gray-700 leading-relaxed space-y-1">
                      <a href="tel:+919440764271" className="hover:text-primary-teal transition-colors duration-200">
                        +91 9440764271
                      </a>
                      <br />
                      <a href="tel:+918187074056" className="hover:text-primary-teal transition-colors duration-200">
                        +91 8187074056
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-primary-teal/10 rounded-lg p-3">
                      <FaEnvelope className="text-primary-teal text-2xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Email</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                      <a 
                        href="mailto:info@aidskidscare.org" 
                        className="hover:text-primary-teal transition-colors duration-200"
                      >
                        info@aidskidscare.org
                      </a>
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-primary-teal text-gray-700 hover:text-white rounded-lg p-3 transition-all duration-300 transform hover:scale-110"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="text-2xl" />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-primary-teal text-gray-700 hover:text-white rounded-lg p-3 transition-all duration-300 transform hover:scale-110"
                      aria-label="YouTube"
                    >
                      <FaYoutube className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="animate-slide-in-right">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-teal focus:border-primary-teal outline-none transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter email address"
                          required
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-teal focus:border-primary-teal outline-none transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter mobile number"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-teal focus:border-primary-teal outline-none transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Enter your message"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-teal focus:border-primary-teal outline-none transition-all duration-200 resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-teal hover:bg-primary-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Find Us on the Map
              </h2>
              <div className="w-24 h-1 bg-primary-teal mx-auto mb-6"></div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Visit us at our location in Eluru, West Godavari District, Andhra Pradesh
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl animate-fade-in">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.1234567890123!2d81.12345678901234!3d16.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a1234567890%3A0x1234567890abcdef!2sSri%20RaviTeja%20Educational%20And%20Infected%20Children%20Welfare%20Society!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Ravi Teja Childrens Home Location"
              ></iframe>
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">
              Use ctrl + scroll to zoom the map
            </p>
          </div>
        </section>
      </main>

    </div>
  )
}

