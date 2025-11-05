'use client'

import { useState, useEffect } from 'react'
import { FaHome, FaHeart, FaStethoscope, FaGraduationCap, FaUtensils, FaUsers, FaShieldAlt } from 'react-icons/fa'

export default function CharitableHomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <FaHome className="text-4xl" />,
      title: 'Shelter & Accommodation',
      description: 'Safe and secure housing providing a warm, family-like environment where children feel protected and loved.'
    },
    {
      icon: <FaStethoscope className="text-4xl" />,
      title: 'Healthcare & Medical Aid',
      description: 'Regular health check-ups, ART (Anti-retroviral Therapy), and immediate medical attention for all health needs.'
    },
    {
      icon: <FaUtensils className="text-4xl" />,
      title: 'Nutrition & Diet',
      description: 'Balanced, nutritious meals designed to support immune health and overall wellbeing of each child.'
    },
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: 'Education & Learning',
      description: 'Access to quality education and learning opportunities to help children achieve their academic goals.'
    },
    {
      icon: <FaHeart className="text-4xl" />,
      title: 'Emotional Support',
      description: 'Counseling, care, and emotional support to help children heal from trauma and build resilience.'
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: 'Protection & Safety',
      description: 'A stigma-free environment where children can grow without discrimination or fear.'
    }
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
              backgroundImage: `url('https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1920&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className={`text-center text-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-slide-up">
                Charitable Home for HIV/AIDS Kids
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
                Ravi Teja Children&apos;s Home provides complete care and support to HIV/AIDS-infected children and their wellbeing.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <div className="text-center mb-12">
                <div className="w-24 h-1 bg-primary-teal mx-auto mb-6"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  A Safe Haven for Children
                </h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-lg space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  At Ravi Teja Children&apos;s Home, we believe that every child, regardless of their health condition, deserves 
                  a safe, loving, and nurturing environment to grow and thrive. Our charitable home provides comprehensive care 
                  and support to HIV/AIDS-infected children, offering them the opportunity to lead normal, healthy, and 
                  prosperous lives.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  We provide complete care including <strong>shelter, clothing, diet, nutrition, healthcare, medical aid, 
                  education, and recreational activities</strong>. Our dedicated team ensures that every child receives 
                  personalized attention and support to help them thrive despite their health challenges.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Currently, we are caring for <strong>50 children</strong> at our home in Eluru, West Godavari district, 
                  Andhra Pradesh. Each child receives individualized care tailored to their specific needs, ensuring they 
                  have the best chance at a bright future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12 sm:mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive Care Services
              </h2>
              <div className="w-24 h-1 bg-primary-teal mx-auto mb-6"></div>
              <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
                We provide a holistic approach to care, addressing every aspect of a child&apos;s wellbeing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-lg transform hover:scale-105 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-primary-teal mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed text-center">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact & Statistics Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text */}
              <div className="animate-slide-in-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Making a Real Difference
                </h2>
                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Since our inception, we have been committed to transforming the lives of children affected by HIV/AIDS. 
                    Through our comprehensive care programs, we have successfully provided:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-primary-teal font-bold text-xl mt-1">✓</span>
                      <span className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        A stable and secure family environment free from stigma and discrimination
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-teal font-bold text-xl mt-1">✓</span>
                      <span className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Regular medical care and ART therapy to extend and improve quality of life
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-teal font-bold text-xl mt-1">✓</span>
                      <span className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Educational opportunities that help children achieve their academic goals
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-teal font-bold text-xl mt-1">✓</span>
                      <span className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Emotional support and counseling to help children heal and grow
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Statistics Cards */}
              <div className="animate-slide-in-right space-y-6">
                <div className="bg-gradient-to-br from-primary-teal to-primary-cyan rounded-2xl p-8 text-white shadow-xl">
                  <div className="text-center">
                    <FaUsers className="text-5xl mx-auto mb-4" />
                    <h3 className="text-4xl sm:text-5xl font-bold mb-2">50+</h3>
                    <p className="text-lg sm:text-xl">Children at Home</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-6 text-center shadow-lg">
                    <FaHeart className="text-3xl text-primary-teal mx-auto mb-3" />
                    <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">100%</h4>
                    <p className="text-sm sm:text-base text-gray-700">Care & Support</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 text-center shadow-lg">
                    <FaGraduationCap className="text-3xl text-primary-teal mx-auto mb-3" />
                    <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">24/7</h4>
                    <p className="text-sm sm:text-base text-gray-700">Dedicated Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  How We Help
                </h2>
                <div className="w-24 h-1 bg-primary-teal mx-auto mb-6"></div>
              </div>

              <div className="bg-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-lg space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    Medical Care & Treatment
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Our medical team provides regular health monitoring, ART (Anti-retroviral Therapy) administration, 
                    and immediate treatment for opportunistic infections. We work closely with qualified doctors to ensure 
                    that each child receives the best possible medical care.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    Nutritional Support
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Proper nutrition is crucial for children living with HIV/AIDS. We provide well-balanced, nutritious 
                    meals that support immune function and overall health. Our diet plans are tailored to meet the specific 
                    nutritional needs of each child.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    Education & Development
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Education is a fundamental right of every child. We ensure that all children in our care have access 
                    to quality education and learning opportunities. We support their academic journey and help them develop 
                    skills for a brighter future.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    Emotional & Psychological Support
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Living with HIV/AIDS can be emotionally challenging for children. Our team provides counseling, 
                    emotional support, and a nurturing environment where children can express themselves freely and 
                    build resilience.
                  </p>
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
                  Help Us Care for More Children
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                  Your support enables us to provide comprehensive care to more children in need. Together, we can give 
                  these children the love, care, and opportunities they deserve to lead healthy and prosperous lives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-primary-teal hover:bg-primary-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Donate Now
                  </button>
                  <button className="border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                    Sponsor a Child
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
