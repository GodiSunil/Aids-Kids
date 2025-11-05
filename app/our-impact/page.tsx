'use client'

import { useState, useEffect } from 'react'
import { FaTrophy, FaAward, FaCertificate } from 'react-icons/fa'

export default function OurImpactPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const awards = [
    {
      icon: <FaTrophy className="text-primary-teal text-2xl" />,
      text: 'AASHA Best NGO Award 2005'
    },
    {
      icon: <FaAward className="text-primary-teal text-2xl" />,
      text: 'YSR Seva Purashkar Award 2013'
    },
    {
      icon: <FaTrophy className="text-primary-teal text-2xl" />,
      text: 'Rotary Vocational Professional Excellence Award 2018'
    },
    {
      icon: <FaCertificate className="text-primary-teal text-2xl" />,
      text: 'CWC Certificate of Excellence Award 2016'
    },
    {
      icon: <FaAward className="text-primary-teal text-2xl" />,
      text: 'AP Govt Best Woman Award 2017'
    },
    {
      icon: <FaCertificate className="text-primary-teal text-2xl" />,
      text: 'Certificate of Appreciation from Lions Club Eluru 2017'
    },
    {
      icon: <FaCertificate className="text-primary-teal text-2xl" />,
      text: 'Certificate of Appreciation from DAPCU 2015'
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-slide-up">
                Our Impact
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
                Stories of hope, recovery, and resilience.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
            {/* Section Heading */}
            <div className="text-center animate-fade-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-teal mb-4">
                Success Stories
              </h2>
              <div className="w-24 h-1 bg-primary-teal mx-auto"></div>
            </div>

            {/* Story 1: Sai's Story */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in">
              {/* Left Column - Text */}
              <div className="animate-slide-in-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                  From the clutches of AIDS/TB to pursuing bachelor&apos;s
                </h3>
                <p className="text-lg sm:text-xl text-gray-600 italic mb-6">
                  The incredible story of Sai.
                </p>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Sai&apos;s parents passed away when he was just 13 years old. Left in the care of a neighbor, 
                    his life took a devastating turn when he became severely ill. After thorough medical examination, 
                    he was diagnosed with both <strong>HIV and Tuberculosis</strong>—a life-threatening combination 
                    that required immediate and specialized care.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Recognizing the urgency of his situation, our organization took Sai into our care. We provided 
                    him with a <strong>separate room in our Exigency Block</strong> and ensured he received 
                    comprehensive medical treatment. Over the course of <strong>24 months of dedicated care and 
                    treatment</strong>, Sai made a remarkable recovery.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Today, Sai has transformed from a critically ill child into a <strong>joyous, healthy young man</strong>. 
                    He is now pursuing his bachelor&apos;s degree, a testament to his resilience and the power of 
                    compassionate care. Sai&apos;s transformation is nothing short of an achievement, demonstrating 
                    that with proper medical care, emotional support, and unwavering dedication, children can overcome 
                    even the most challenging circumstances.
                  </p>
                </div>
              </div>

              {/* Right Column - Images */}
              <div className="animate-slide-in-right">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <img 
                        src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80" 
                        alt="Sai before treatment" 
                        className="w-full h-auto object-cover rounded-xl"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs sm:text-sm p-2 text-center">
                        Before
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" 
                        alt="Sai after recovery" 
                        className="w-full h-auto object-cover rounded-xl"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-primary-teal/80 text-white text-xs sm:text-sm p-2 text-center">
                        After
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 2: Sathwika's Story */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in">
              {/* Left Column - Images */}
              <div className="md:order-1 animate-slide-in-left">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <img 
                        src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&q=80" 
                        alt="Sathwika before treatment" 
                        className="w-full h-auto object-cover rounded-xl"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs sm:text-sm p-2 text-center">
                        Before
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <img 
                        src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80" 
                        alt="Sathwika after recovery" 
                        className="w-full h-auto object-cover rounded-xl"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-primary-teal/80 text-white text-xs sm:text-sm p-2 text-center">
                        After
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Text */}
              <div className="md:order-2 animate-slide-in-right">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                  A deprived kid into a bunch of joy
                </h3>
                <p className="text-lg sm:text-xl text-gray-600 italic mb-6">
                  SRTE & ICW Society shows how love and affection could turn a sick child into happiness.
                </p>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    In <strong>2017</strong>, Sathwika was referred to us from a hospital when she was just 
                    <strong> one year old</strong>. Her condition was shocking—she had been abandoned by her mother 
                    and was suffering from severe malnutrition. Her tiny body was covered in wrinkles, and she was 
                    in a critical state that required immediate intervention.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Our team immediately took Sathwika into our care, providing her with <strong>nutritious food, 
                    medical treatment, and round-the-clock attention</strong>. We worked tirelessly to restore her 
                    health, ensuring she received the proper nutrition and care needed for her recovery and growth.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Today, Sathwika is <strong>8 years old</strong> and has transformed into a <strong>healthy, 
                    active, and charming child</strong>. She brings joy and laughter to our home, her bright smile 
                    a constant reminder of the power of love, care, and compassion. Sathwika&apos;s journey from a 
                    critically ill, abandoned infant to a happy, thriving child exemplifies the impact of dedicated 
                    care and the difference it can make in a child&apos;s life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <div className="text-center mb-12 sm:mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-teal mb-4">
                Awards & Recognition
              </h2>
              <div className="w-24 h-1 bg-primary-teal mx-auto mb-6"></div>
              <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
                Recognition for our dedication and commitment to serving children affected by HIV/AIDS
              </p>
            </div>

            {/* Awards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
              {awards.map((award, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {award.icon}
                    </div>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                      {award.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Award Ceremony Image */}
            <div className="flex justify-center animate-fade-in">
              <div className="relative rounded-xl overflow-hidden shadow-xl max-w-2xl w-full transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80" 
                  alt="Receiving National Excellence Award" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-sm sm:text-base font-medium text-center">
                    Receiving National Excellence Award - 2018
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Summary Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <div className="bg-gradient-to-r from-primary-teal/10 to-primary-cyan/10 rounded-2xl p-8 sm:p-12 shadow-lg border border-primary-teal/20">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Making a Lasting Difference
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                  These success stories represent just a few of the many lives we&apos;ve touched. Through 
                  comprehensive care, medical treatment, education, and unwavering support, we continue to 
                  transform the lives of children affected by HIV/AIDS, giving them hope, health, and the 
                  opportunity to thrive.
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

