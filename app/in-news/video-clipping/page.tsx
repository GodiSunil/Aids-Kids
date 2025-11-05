'use client'

import { useState, useEffect } from 'react'
import { FaPlayCircle, FaVideo } from 'react-icons/fa'

export default function VideoClippingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const videos = [
    {
      id: 1,
      youtubeId: 'dQw4w9WgXcQ', // Placeholder - replace with actual YouTube video ID
      title: 'ETV Devudu Ichina Amma Nanaa (God given parents to orphans)',
      description: 'Their parents passed away at an early age. Their relatives abandoned them. A couple who reflects the spirit of humanity turned into their mother and father.',
    },
    {
      id: 2,
      youtubeId: 'dQw4w9WgXcQ', // Placeholder - replace with actual YouTube video ID
      title: 'ETV – New buildings for Ravi Teja children home',
      description: 'To address the concern of the infrastructure in this home. These buildings were constructed with the support of the Kakinada Engineering Alumni Service trust established by alumni of Kakinada students. The collector opined that many more works for social causes like these should be undertaken.',
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
              <div className="flex justify-center mb-4">
                <FaVideo className="text-5xl sm:text-6xl text-primary-teal" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-slide-up">
                Video Clippings
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
                Media features highlighting our mission, love, and care for HIV/AIDS-affected children.
              </p>
            </div>
          </div>
        </section>

        {/* Video Clippings Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
            {/* Section Introduction */}
            <div className="text-center mb-12 sm:mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Media Features
              </h2>
              <div className="w-24 h-1 bg-primary-teal mx-auto mb-6"></div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Watch our videos to learn more about our work, the children we serve, and the impact we&apos;re making 
                in the lives of those affected by HIV/AIDS.
              </p>
            </div>

            {/* Video Grid */}
            {videos.map((video, index) => (
              <div 
                key={video.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                } animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Video Embed */}
                <div 
                  className={`relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 ${
                    index % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    className="w-full h-full rounded-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-primary-teal/90 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2">
                    <FaPlayCircle className="text-sm" />
                    Video
                  </div>
                </div>

                {/* Video Description */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                    {video.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center animate-fade-in">
              <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Watch More of Our Story
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                  These videos showcase the love, care, and dedication that goes into our work every day. 
                  We invite you to learn more about our mission and the children whose lives we&apos;re 
                  transforming together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-primary-teal hover:bg-primary-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Support Our Mission
                  </button>
                  <button className="border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

