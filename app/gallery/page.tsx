'use client'

import { useState, useEffect } from 'react'
import { FaTimes, FaExpand } from 'react-icons/fa'

export default function GalleryPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; caption?: string } | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const featuredImage = {
    src: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1200&q=80',
    alt: 'Deputy Chief Minister with children on Children\'s Day',
    caption: 'Alla Kali Krishna Srinivas (Nani), Deputy Chief Minister and Minister of Health, Family Welfare and Medical Education of Andhra Pradesh with our kids on children\'s day - Nov 14, 2019'
  }

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1523240795601-83f54e2e5937?w=800&q=80',
      alt: 'Ribbon cutting ceremony',
      caption: 'Ribbon cutting ceremony for new facilities'
    },
    {
      src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80',
      alt: 'Feeding cake to children',
      caption: 'Celebrating special moments with children'
    },
    {
      src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
      alt: 'Bouquet presentation',
      caption: 'Welcoming guests and supporters'
    },
    {
      src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
      alt: 'Children with ONGC banner',
      caption: 'SAVE THE CHILDREN FROM HIV/AIDS - ONGC event'
    },
    {
      src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
      alt: 'Girls dancing with drum',
      caption: 'Cultural performances by children'
    },
    {
      src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80',
      alt: 'Children in classroom',
      caption: 'Educational activities and learning sessions'
    },
    {
      src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
      alt: 'Children sitting outdoors',
      caption: 'Children enjoying outdoor activities'
    },
    {
      src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
      alt: 'Girls in traditional attire',
      caption: 'Celebrating cultural events with children'
    },
    {
      src: 'https://images.unsplash.com/photo-1523240795601-83f54e2e5937?w=800&q=80',
      alt: 'Children in school uniforms',
      caption: 'Children in school uniforms at Ravi Teja'
    },
    {
      src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80',
      alt: 'Group gathering with banners',
      caption: 'Commitment Action - FSS event'
    },
    {
      src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
      alt: 'Two children smiling',
      caption: 'Happy moments with children'
    },
    {
      src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
      alt: 'Girls in school uniforms',
      caption: 'Older girls in school uniforms'
    },
    {
      src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80',
      alt: 'Girls in colorful dresses',
      caption: 'Children in traditional attire'
    },
  ]

  const openModal = (image: { src: string; alt: string; caption?: string }) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    if (selectedImage) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [selectedImage])

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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-slide-up">
                Image Gallery
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
                Cherishing special moments with our children and supporters.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Image Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center animate-fade-in">
              <div 
                className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => openModal(featuredImage)}
              >
                <img 
                  src={featuredImage.src}
                  alt={featuredImage.alt}
                  className="w-full max-w-4xl mx-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <FaExpand className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
                {featuredImage.caption}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer animate-fade-in ${
                    !selectedImage ? 'hover:scale-105' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => openModal(image)}
                >
                  <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <FaExpand className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-xs sm:text-sm line-clamp-2">
                        {image.caption}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center animate-fade-in">
              <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Preserving Precious Memories
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                  Each image tells a story of hope, joy, and transformation. These moments capture the love, 
                  care, and dedication that goes into our work every day, creating lasting memories for the 
                  children we serve.
                </p>
                <button className="bg-primary-teal hover:bg-primary-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Support Our Mission
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal/Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 transform hover:scale-110"
              aria-label="Close modal"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Image */}
            <div className="relative w-full h-[70vh] sm:h-[80vh] bg-black">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Caption */}
            {selectedImage.caption && (
              <div className="p-6 bg-white">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center">
                  {selectedImage.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  )
}

