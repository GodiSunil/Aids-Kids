'use client'

import { useState, useEffect } from 'react'

export default function PaperClippingsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const clippings = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
      alt: 'Newspaper clipping about girl child rescue',
      caption: 'Mr Ayika Raju, founder of Ravi Teja children home rescues severely infected girl child and brings her to home.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
      alt: 'Newspaper clipping about orphaned and AIDS infected kids rescue',
      caption: 'Ravi Teja children home come to the rescue of orphaned and AIDS infected kids.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&q=80',
      alt: 'Newspaper clipping about ex-Chief Minister dining with kids',
      caption: 'Ex Chief minister and other ministers dining together with Raviteja home kids',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1588702547923-75ad5c827d0e?w=800&q=80',
      alt: 'Newspaper clipping about AIDS and Tuberculosis statistics',
      caption: '60% of the AIDS infected suffer from Tuberculosis. Additional care and measures needed.',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1523240795601-83f54e2e5937?w=800&q=80',
      alt: 'Newspaper clipping about foundation stone for residential block',
      caption: 'Foundation stone for the residential block of AIDS infected kids laid by Eluru MLA at Ravi Teja children home. Founder appeals for support from citizens in cash and kind.',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80',
      alt: 'Newspaper clipping about love and hope for AIDS infected children',
      caption: 'Love and hope: A story on the lives on AIDS infected and the rescue efforts in their upliftment by Ravi Teja children home',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80',
      alt: 'Newspaper clipping about AIDS infected people marrying',
      caption: 'AIDS infected marry and set an example. They bring light into their lives by standing up for each other. Ravi Teja children home plays an important role.',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
      alt: 'Newspaper clipping about Ananda Lakshmi\'s dedication',
      caption: 'A fine example of selfless service and dedication by Ananda Lakshmi, Management trustee of Ravi Teja children home',
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&q=80',
      alt: 'Newspaper clipping about Ananda Lakshmi serving 50 AIDS infected kids',
      caption: 'Dedicating her life to rescue AIDS infected kids, Ananda lakshmi along with her husband, serve 50 AIDS infected kids at their home.',
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1523240795601-83f54e2e5937?w=800&q=80',
      alt: 'Newspaper clipping about kids needing love, not sympathy',
      caption: 'Kids need love not sympathy. Ravi Teja children home founder, Mr.Raju praised for taking care of AIDS infected kids as there own.',
    },
  ]

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
                Paper Clippings
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
                Media coverage and recognition of our work
              </p>
            </div>
          </div>
        </section>

        {/* Clippings Grid Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            {/* Section Introduction */}
            <div className="text-center mb-12 sm:mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Media Coverage
              </h2>
              <div className="w-24 h-1 bg-primary-teal mx-auto mb-6"></div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Our work has been featured in various newspapers and media outlets, highlighting our commitment 
                to serving children affected by HIV/AIDS.
              </p>
            </div>

            {/* Clippings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {clippings.map((clipping, index) => (
                <div 
                  key={clipping.id} 
                  className={`group bg-white rounded-xl shadow-md overflow-hidden transform hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden bg-gray-100">
                    <img 
                      src={clipping.image}
                      alt={clipping.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-teal transition-colors duration-300"></div>
                  </div>
                  
                  {/* Caption */}
                  <div className="p-4 sm:p-6">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-center md:text-left font-medium">
                      {clipping.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center animate-fade-in">
              <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Stay Updated with Our Work
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                  Follow our journey as we continue to make a difference in the lives of children affected by 
                  HIV/AIDS. Our work has been recognized by various media outlets and continues to inspire 
                  positive change in our community.
                </p>
                <button className="bg-primary-teal hover:bg-primary-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

