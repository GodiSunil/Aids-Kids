'use client'

import { useState, useEffect } from 'react'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">

      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/background.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-primary-dark/50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className={`text-center text-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
                About Us
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            {/* Section Title */}
            <div className="text-center mb-12 sm:mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                We are Ravi Teja Childrens Home
              </h2>
              <div className="w-24 h-1 bg-primary-teal mx-auto mb-6"></div>
              <p className="text-lg sm:text-xl text-gray-700 font-medium">
                Charitable Home for HIV/AIDS infected kids
              </p>
            </div>

            {/* First Content Block - Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
              {/* Left Column - Text */}
              <div className="animate-slide-in-left space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  As per recent statistics, <strong>2.2 lakh children infected by HIV/AIDS</strong> in India are 
                  living in southern region of India, especially Andhra Pradesh. Many of these children have lost 
                  one or both parents and need a lot of support. Children who are infected with HIV/AIDS have 
                  special needs that are different from those of adults.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Children infected by HIV/AIDS face mental trauma due to the discrimination they face, as most 
                  of them are infected by mother child transmission. Due to the prevailing stigma and discrimination, 
                  these children are left to fend for themselves. Without proper medical care, nourishment and 
                  counselling, these children have reduced survival rates.
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="animate-slide-in-right">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/about1.jpg" 
                    alt="Children at Ravi Teja Childrens Home" 
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Second Content Block - Reversed Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 lg:flex-row-reverse">
              {/* Left Column - Text */}
              <div className="lg:order-2 animate-slide-in-left space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <strong>&quot;Sri Ravi Teja Educational and Infected Children Welfare Society&quot;</strong> is an 
                  independent, non-governmental organization, which provides family care, shelter, nutritious food, 
                  health care, education and recreational activities for abandoned HIV-infected children. The 
                  organization, which is over 25 years old, advocates the concerns, rights and needs of 
                  HIV-infected children.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The organization provides complete care and support to <strong>50 children</strong> at their home 
                  in <strong>Eluru, West Godavari district, Andhra Pradesh</strong>. Additionally, the organization 
                  provides home based care to <strong>50 HIV/AIDS kids</strong> under the name of 
                  <strong> &quot;Amma Amrutha Hastham&quot;</strong>.
                </p>
              </div>

              {/* Right Column - Image (will be on left in desktop) */}
              <div className="lg:order-1 animate-slide-in-right">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/about2.jpg" 
                    alt="Children at Ravi Teja Childrens Home activities" 
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Third Content Block - Centered */}
            <div className="max-w-4xl mx-auto animate-fade-in">
              <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 shadow-lg space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
                  Many of them are abandoned. We believe that every child orphaned by AIDS deserves love and 
                  protection. Every child has a right to lead a normal life. We invite you to join us, support us, 
                  donate or sponsor.
                </p>
                <div className="flex justify-center pt-4">
                  <button className="bg-primary-teal hover:bg-primary-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Join Us Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Highlight Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-slide-up">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-3xl sm:text-4xl font-bold text-primary-teal mb-2">50+</h3>
                  <p className="text-gray-700 font-semibold">Children at Home</p>
                </div>
              </div>
              <div className="text-center animate-slide-up delay-200">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-3xl sm:text-4xl font-bold text-primary-teal mb-2">50+</h3>
                  <p className="text-gray-700 font-semibold">Home-Based Care</p>
                </div>
              </div>
              <div className="text-center animate-slide-up delay-300">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-3xl sm:text-4xl font-bold text-primary-teal mb-2">25+</h3>
                  <p className="text-gray-700 font-semibold">Years of Service</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
