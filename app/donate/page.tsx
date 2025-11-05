'use client'

import { useState, useEffect } from 'react'
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRupeeSign, FaShieldAlt, FaFileAlt, FaCheckCircle } from 'react-icons/fa'

export default function DonatePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    amount: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission - replace with actual payment gateway integration
    setTimeout(() => {
      alert('Thank you for your donation! You will be redirected to the payment gateway.')
      // Here you would integrate with payment gateway (Razorpay, Stripe, etc.)
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
                Donate Now
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-4 animate-slide-up delay-200">
                All donations are tax exempt under Section 80G of the Income Tax Act.
              </p>
              <p className="text-base sm:text-lg md:text-xl italic text-gray-200 max-w-2xl mx-auto animate-slide-up delay-300">
                &quot;Charity is the only thing that reduces your money but makes you rich.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Donation Form Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
              
              {/* Left Column - Donation Form */}
              <div className="lg:col-span-2 animate-slide-in-left">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Your Details
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUser className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-primary-teal outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaEnvelope className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-primary-teal outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaPhone className="text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-primary-teal outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Address Field */}
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                          <FaMapMarkerAlt className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Enter your address"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-primary-teal outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Donation Amount Field */}
                    <div>
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                        Donation Amount in INR (₹)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaRupeeSign className="text-gray-400" />
                        </div>
                        <input
                          type="number"
                          id="amount"
                          name="amount"
                          value={formData.amount}
                          onChange={handleChange}
                          placeholder="Enter donation amount"
                          min="1"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-primary-teal outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-teal hover:bg-primary-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? 'Processing...' : 'Donate Now'}
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Column - Information Card */}
              <div className="animate-slide-in-right">
                <div className="bg-gradient-to-br from-primary-teal/10 to-primary-cyan/10 border-l-4 border-primary-teal rounded-xl p-6 sm:p-8 shadow-lg">
                  {/* Secure Payment */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary-teal/20 rounded-lg p-2">
                        <FaShieldAlt className="text-primary-teal text-2xl" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Secure Payment
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Your payment is processed securely and encrypted. We value your trust and data privacy. 
                      All transactions are protected with industry-standard security measures.
                    </p>
                  </div>

                  {/* Tax Exemptions */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary-teal/20 rounded-lg p-2">
                        <FaFileAlt className="text-primary-teal text-2xl" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Tax Exemptions
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      All donations are eligible for tax exemption under Section 80G of the Income Tax Act. 
                      You will receive a receipt for your donation.
                    </p>
                  </div>

                  {/* Impact Points */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                      Your Donation Helps:
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'We provide nutritious food to the kids and never let them face hunger',
                        'We provide them timely HIV medicines and treatments to ensure a longer life',
                        'We build adequate infrastructure to provide them shelter and ensure their health',
                        'But we need your support to help us continue',
                        'Let us join our hands to help these kids blossom',
                        'Contribute to make this world a little more happier place'
                      ].map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FaCheckCircle className="text-primary-teal flex-shrink-0 mt-1" />
                          <span className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center animate-fade-in">
              <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 shadow-lg">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Every Contribution Makes a Difference
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                  Your generous donation helps us continue our mission to provide love, care, and support 
                  to children affected by HIV/AIDS. Together, we can make a lasting impact in their lives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-block bg-primary-teal hover:bg-primary-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                  >
                    Contact Us
                  </a>
                  <a
                    href="/our-impact"
                    className="inline-block border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    See Our Impact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

