'use client'

import { useState, useEffect } from 'react'
import { FaShieldAlt, FaStethoscope, FaHeart, FaHandsHelping } from 'react-icons/fa'

export default function ExigencyBlockPage() {
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
              backgroundImage: `url('https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className={`text-center text-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-slide-up">
                Exigency Block for HIV + TB Kids
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
                Dedicated care for children co-infected with HIV and Tuberculosis.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
          
          {/* Section 1: The Need for Exigency Block */}
          <section className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text */}
              <div className="animate-slide-in-left">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FaShieldAlt className="text-primary-teal text-3xl" />
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                      The Need for Exigency Block
                    </h2>
                  </div>
                  <div className="w-20 h-1 bg-primary-teal"></div>
                </div>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Children infected with <strong>HIV/AIDS face a significantly higher risk of contracting Tuberculosis (T.B)</strong>. 
                    This co-infection presents serious health challenges, and without proper treatment, these children are at a 
                    much higher risk of death.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    While Tuberculosis is a curable disease, it requires specialized care and isolation. Because TB is contagious, 
                    it is essential to separate children suffering from both HIV/AIDS and TB to prevent the spread of the disease 
                    to other children in the home.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    The Exigency Block was created to provide these vulnerable children with the specialized care they need, 
                    ensuring they receive proper treatment in a safe, isolated environment while protecting other children 
                    from potential infection.
                  </p>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="animate-slide-in-right">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80" 
                    alt="Medical care for children with HIV and TB" 
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Medical Care & TB Treatment */}
          <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 rounded-2xl px-6 sm:px-8 lg:px-12 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <FaStethoscope className="text-primary-teal text-3xl" />
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Medical Care & TB Treatment
                  </h2>
                </div>
                <div className="w-20 h-1 bg-primary-teal mx-auto"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-primary-teal">•</span>
                    TB Testing & Diagnosis
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    All children in our home undergo comprehensive <strong>T.B testing at a Government Hospital</strong>. 
                    This testing is crucial for early detection and timely intervention, ensuring that children receive 
                    the care they need as soon as possible.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-primary-teal">•</span>
                    Direct Observation Treatment (DOT)
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    When a child tests positive for Tuberculosis, they immediately qualify for <strong>DOT (Direct Observation 
                    Treatment)</strong> at the Government Hospital. This treatment method ensures that medications are taken 
                    correctly and consistently, which is essential for successful TB treatment and preventing drug resistance.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-primary-teal">•</span>
                    Regular Medical Monitoring
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Children receiving treatment for TB and HIV/AIDS undergo <strong>regular check-ups with qualified doctors</strong>. 
                    This continuous monitoring ensures that any complications are caught early and that the treatment plan is 
                    adjusted as needed for optimal health outcomes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Community Support & Inauguration */}
          <section className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Images */}
              <div className="md:order-1 animate-slide-in-left">
                <div className="space-y-4">
                  <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80" 
                      alt="Child receiving medical care" 
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80" 
                      alt="Children at the exigency block" 
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Text */}
              <div className="md:order-2 animate-slide-in-right">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FaHandsHelping className="text-primary-teal text-3xl" />
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                      Community Support & Inauguration
                    </h2>
                  </div>
                  <div className="w-20 h-1 bg-primary-teal"></div>
                </div>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    For over a <strong>decade, we struggled to construct a dedicated Tuberculosis block</strong> for children 
                    suffering from both TB and HIV/AIDS. This specialized facility was crucial for providing the isolated care 
                    these children needed while protecting others from infection.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Our dream became a reality with the generous support of <strong>KEATS (Kakinada Engineering Alumni Trust 
                    for Service)</strong>. Their commitment to our cause helped us build a state-of-the-art facility that 
                    meets all medical and safety requirements.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    The Exigency Block was officially inaugurated by <strong>IAS Khatameni Bhaskar Rao Garu</strong>, marking 
                    a significant milestone in our mission to provide comprehensive care for children affected by HIV/AIDS and TB.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Since <strong>2019, we have been providing specialized care</strong> to children in our home who are 
                    co-infected with HIV and TB. Looking ahead, we plan to expand our services to admit children from outside 
                    our home, ensuring they receive proper treatment until they are fully cured.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Highlight Section */}
          <section className="bg-gradient-to-r from-primary-teal/10 to-primary-cyan/10 rounded-2xl p-8 sm:p-10 lg:p-12 border border-primary-teal/20 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <FaHeart className="text-primary-teal text-4xl sm:text-5xl mx-auto mb-4" />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Making a Difference, One Child at a Time
                </h3>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                The Exigency Block represents our commitment to providing specialized, compassionate care for the most 
                vulnerable children. Through early detection, proper treatment, and dedicated support, we are helping 
                children overcome the challenges of co-infection and build healthier futures.
              </p>
            </div>
          </section>

        </div>

        {/* Call to Action Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center animate-fade-in">
              <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 shadow-lg">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Support Our Exigency Block
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                  Your support helps us provide specialized medical care, treatment, and a safe environment for children 
                  co-infected with HIV and TB. Together, we can save lives and give these children the care they deserve.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-primary-teal hover:bg-primary-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Donate Now
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

