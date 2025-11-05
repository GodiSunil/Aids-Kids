'use client'

import { useState, useEffect } from 'react'

export default function VisionAndMissionPage() {
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
              backgroundImage: `url('https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1920&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className={`text-center text-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
                Our Mission and Vision
              </h1>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <div className="text-center mb-12">
                <div className="inline-block border-l-4 border-primary-teal pl-4 mb-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Mission
                  </h2>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-lg">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed text-center font-medium">
                  To Treat HIV/AIDS infected children with love and affection, thereby realizing them to live a normal and prosperous life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <div className="text-center mb-12">
                <div className="inline-block border-l-4 border-primary-teal pl-4 mb-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Vision
                  </h2>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-lg">
                {/* Introduction Text */}
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                  Our motto is to help these under privileged kids by providing them what their guardians couldn&apos;t. In line with this our vision is to-
                </p>

                {/* Vision Points List */}
                <div className="space-y-6">
                  <div className="flex gap-4 animate-slide-up">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary-teal text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shadow-md">
                      1
                    </div>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed pt-1">
                      Raise HIV infected children in a stable and secure family setting within a caring home, free from stigma and discrimination.
                    </p>
                  </div>

                  <div className="flex gap-4 animate-slide-up delay-200">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary-teal text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shadow-md">
                      2
                    </div>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed pt-1">
                      Lessen the deaths (among kids) due to HIV/AIDS.
                    </p>
                  </div>

                  <div className="flex gap-4 animate-slide-up delay-300">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary-teal text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shadow-md">
                      3
                    </div>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed pt-1">
                      Conduct ART (Anti-retroviral Therapy) regularly to extend the life of the kids.
                    </p>
                  </div>

                  <div className="flex gap-4 animate-slide-up delay-300">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary-teal text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shadow-md">
                      4
                    </div>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed pt-1">
                      Provide adequate nutrition to the kids and strive for their mental peace.
                    </p>
                  </div>

                  <div className="flex gap-4 animate-slide-up delay-300">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary-teal text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shadow-md">
                      5
                    </div>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed pt-1">
                      Provide opportunistic infection treatment with qualified doctors instantaneously.
                    </p>
                  </div>

                  <div className="flex gap-4 animate-slide-up delay-300">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary-teal text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shadow-md">
                      6
                    </div>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed pt-1">
                      Increase in number of children being served at home.
                    </p>
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
              <div className="bg-gradient-to-r from-primary-teal/10 to-primary-cyan/10 rounded-2xl p-8 sm:p-12 shadow-lg border border-primary-teal/20">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Together, We Can Make a Difference
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                  Our mission and vision guide everything we do. With your support, we can continue to provide 
                  love, care, and hope to children affected by HIV/AIDS, helping them lead normal and prosperous lives.
                </p>
                <button className="bg-primary-teal hover:bg-primary-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Support Our Mission
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
