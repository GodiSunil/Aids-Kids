'use client'

import { useState, useEffect } from 'react'
import { FaHome, FaHeart, FaShoppingBag, FaUtensils, FaGraduationCap, FaComments, FaHandHoldingHeart } from 'react-icons/fa'

export default function HomeBasedCarePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const supportServices = [
    {
      icon: <FaUtensils className="text-3xl" />,
      title: 'Nutrition Support',
      description: 'Providing essential nutrition to ensure children receive adequate food for healthy growth and development.'
    },
    {
      icon: <FaShoppingBag className="text-3xl" />,
      title: 'Clothes',
      description: 'Supplying clothing to meet basic needs and ensure children have appropriate attire for all seasons.'
    },
    {
      icon: <FaHome className="text-3xl" />,
      title: 'Blankets',
      description: 'Providing warm blankets to protect children from cold weather and ensure comfort during sleep.'
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: 'Education Support',
      description: 'Supporting children\'s education through school supplies, fees, and educational resources.'
    },
    {
      icon: <FaComments className="text-3xl" />,
      title: 'Constant Counseling',
      description: 'Regular counseling sessions for both guardians and children to provide emotional and psychological support.'
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-slide-up px-4">
                Home Based Care Support to Few HIV/AIDS Infected Families
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200 px-4">
                Extending care, compassion, and essentials to families in need.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
          
          {/* Section 1: Overview */}
          <section className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text */}
              <div className="animate-slide-in-left">
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Overview
                  </h2>
                  <div className="w-20 h-1 bg-primary-teal"></div>
                </div>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    In addition to the <strong>50 children housed in our charitable home</strong>, Ravi Teja Children&apos;s Home 
                    extends its compassionate care through the <strong>&quot;Amma Amrutha Hastham&quot;</strong> service. This 
                    program reaches out to <strong>50 more HIV/AIDS-infected children</strong> in the surrounding vicinity who 
                    are financially backward and require basic needs.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Unlike the children living in our home, these children receive <strong>home-based care support</strong> 
                    without residing at the facility. This approach allows us to help families stay together while ensuring 
                    children receive the essential care, support, and resources they need to thrive.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Our home-based care program recognizes that every family&apos;s situation is unique, and we work closely 
                    with guardians to provide tailored support that addresses their specific needs and challenges.
                  </p>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="animate-slide-in-right">
                <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                  <img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80" 
                    alt="Children receiving home-based care support" 
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Support Provided */}
          <section className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 border-l-4 border-primary-teal pl-4 mb-6">
                Support Provided Under This Program
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                Through our home-based care program, we provide comprehensive support to ensure children and their families 
                have access to essential resources and services:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {supportServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-primary-teal mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed text-center">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Support List */}
            <div className="mt-12 bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 text-center">
                Additional Support Services
              </h3>
              <ul className="space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-primary-teal font-bold text-xl mt-1">✓</span>
                  <span>Regular health check-ups and medical referrals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-teal font-bold text-xl mt-1">✓</span>
                  <span>Assistance with accessing government schemes and benefits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-teal font-bold text-xl mt-1">✓</span>
                  <span>Support for guardians in managing children&apos;s health conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-teal font-bold text-xl mt-1">✓</span>
                  <span>Regular home visits to assess needs and provide ongoing support</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: Program Operation & Impact */}
          <section className="bg-gray-50 py-12 sm:py-16 rounded-xl shadow-sm animate-fade-in">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaHandHoldingHeart className="text-primary-teal text-3xl" />
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 border-l-4 border-primary-teal pl-4">
                    Program Operation & Impact
                  </h2>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  We conduct this program <strong>every second Saturday of the month</strong>, bringing together children, 
                  families, and our support team for distribution of essential items, health check-ups, and counseling sessions. 
                  This regular schedule ensures consistent support and builds trust with the families we serve.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Beyond the regular monthly program, we have gone a step ahead multiple times to provide additional support 
                  when families face critical needs. With the help of our generous donors, we have:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <FaHome className="text-primary-teal text-3xl mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">House Construction Support</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Helped HIV-infected families with house construction, providing safe and secure housing for children 
                      and their guardians.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <FaHandHoldingHeart className="text-primary-teal text-3xl mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Livelihood Support</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Provided weaving machines and other livelihood tools to help families become self-sufficient and 
                      generate income for their children&apos;s needs.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md md:col-span-2">
                    <FaHeart className="text-primary-teal text-3xl mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Support</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Ensured access to medical care, treatments, and health monitoring, helping families manage health 
                      conditions effectively and prevent complications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Highlight Section */}
          <section className="bg-gradient-to-r from-primary-teal/10 to-primary-cyan/10 rounded-2xl p-8 sm:p-10 lg:p-12 border border-primary-teal/20 animate-fade-in">
            <div className="max-w-4xl mx-auto text-center">
              <FaHeart className="text-primary-teal text-4xl sm:text-5xl mx-auto mb-6" />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Making a Lasting Impact
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Our home-based care program extends our reach beyond the walls of our home, touching the lives of families 
                in their own communities. By providing essential support, resources, and guidance, we help families maintain 
                their dignity while ensuring children receive the care they need to grow, learn, and thrive.
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
                  Support Our Home-Based Care Program
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                  Your support helps us reach more families in need, providing essential resources, medical care, and 
                  emotional support to children and their guardians. Together, we can make a difference in the lives of 
                  those who need it most.
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

