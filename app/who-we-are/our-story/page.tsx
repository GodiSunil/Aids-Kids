'use client'

import { useState, useEffect } from 'react'

export default function OurStoryPage() {
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
              backgroundImage: `url('/images/ourstoryback.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className={`text-center text-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
                Our Story
              </h1>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="bg-white rounded-xl p-8 sm:p-10 lg:p-12 shadow-lg animate-fade-in">
              <div className="max-w-4xl mx-auto space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  In the year 2000, while working as a paramedical officer, <strong>Mr. Ayika Raju</strong> encountered 
                  HIV/AIDS-infected children who were completely isolated from society. These children faced severe 
                  misconceptions and were shunned by their communities, left to suffer in silence and despair.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Deeply moved by their plight and the injustice they faced, Mr. Raju felt a profound sense of 
                  responsibility to help these innocent children. He recognized that these children needed not just 
                  medical care, but love, acceptance, and a place to call home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Early Days & Inspiration Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column - Text */}
              <div className="animate-slide-in-left space-y-6">
                <div className="border-l-4 border-primary-teal pl-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                    Early Days & Inspiration
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Initially, Mr. Raju tried to help by arranging funds for nutrition and financial aid for the 
                    children's guardians. However, he quickly realized that many guardians were unwilling to care for 
                    these children due to deep-rooted societal misconceptions about HIV/AIDS.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Faced with the heartbreaking reality that these children had nowhere to go, Mr. Raju struggled to 
                    find an organization that would provide them with the care and support they desperately needed. 
                    When no suitable organization could be found, he made a life-changing decision: to start a home 
                    himself.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    What began with just <strong>4 children</strong> has grown over the years to care for 
                    <strong> 50 children</strong> at the home. With over <strong>25 years of dedicated experience</strong> 
                    in caring for HIV-infected children, Mr. Raju's vision has become a beacon of hope for countless 
                    children who had nowhere else to turn.
                  </p>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="animate-slide-in-right">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/ourstory1.jpg" 
                    alt="Three children at Ravi Teja Childrens Home smiling together" 
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Message Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column - Text */}
              <div className="md:order-2 animate-slide-in-left">
                <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-sm">
                  <div className="border-l-4 border-primary-teal pl-4 mb-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                      Founder's Message
                    </h2>
                    <p className="text-lg text-gray-600 italic">
                      Ayika Raju
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      I am happy to say that this charitable home provides complete care and support to 
                      <strong> 50 HIV/AIDS infected kids</strong>. Additionally, we provide home-based care to another 
                      <strong> 50 HIV/AIDS kids</strong> under the program <strong>"Amma Amrutha Hastham"</strong>. 
                      I am very happy and thankful to God for giving me this opportunity to serve these children.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Andhra Pradesh has the highest number of AIDS cases in India. Over <strong>10,000 children</strong> 
                      are suffering from HIV/AIDS in our state alone. Our home is currently caring for about 100 of 
                      these children, providing them with love, medical care, education, and hope for a better future.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      However, there is still so much work to be done. We need more support, more resources, and most 
                      importantly, a cure for AIDS. Until that day comes, we will continue to care for these children 
                      with all our heart and dedication, giving them the childhood they deserve.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="md:order-1 animate-slide-in-right">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/ourstory2.jpg" 
                    alt="Ayika Raju, Founder of Ravi Teja Childrens Home" 
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Managing Trustee's Message Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column - Image */}
              <div className="animate-slide-in-left">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/ourstory3.jpg" 
                    alt="Ananda Lakshmi with children at Ravi Teja Childrens Home" 
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Right Column - Text */}
              <div className="animate-slide-in-right">
                <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-sm">
                  <div className="border-l-4 border-primary-teal pl-4 mb-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                      Managing Trustee Message
                    </h2>
                    <p className="text-lg text-gray-600 italic">
                      Ananda Lakshmi (W/O Ayika Raju)
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      This home was started for children whose parents died due to AIDS and were ignored by their 
                      relatives. I consider it a divine responsibility to care for these children who have been 
                      abandoned by society. I am deeply grateful to all our supporters who have made this work possible.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      The children here live together like a family, and they call me "mother." To see them happy, 
                      healthy, and growing up with love and care brings me immense contentment. Every day, I pray for 
                      a cure for AIDS so that no child has to suffer from this disease.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      My hope is to increase the number of children we serve to <strong>100</strong> and to help them 
                      become self-sufficient through small-scale industries. With your continued support, we can provide 
                      these children with not just care, but also the skills and opportunities they need to build a 
                      better future for themselves.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium text-primary-dark">
                      Together, we can make a difference in the lives of these children. Your support means everything 
                      to us and to them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center animate-fade-in">
              <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Join Us in Our Mission
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                  Every child deserves love, care, and the opportunity to live a normal, happy life. Your support 
                  helps us continue this important work and bring hope to children who need it most.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-primary-teal hover:bg-primary-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Donate Now
                  </button>
                  <button className="border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                    Get Involved
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
