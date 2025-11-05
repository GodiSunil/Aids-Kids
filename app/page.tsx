'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FaHeart, FaUsers, FaExclamationTriangle, FaFacebook, FaYoutube, FaChevronLeft, FaChevronRight, FaHeartbeat, FaUserMd, FaGraduationCap, FaAppleAlt, FaChild } from 'react-icons/fa'
import { HiUsers, HiHeart } from 'react-icons/hi'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Hero slides data
  const heroSlides = [
    {
      image: '/images/hero1.jpg',
      title: 'We help the HIV infected kids realise their dream of leading a normal life.',
      description: 'The foundation works relentlessly to identify, rescue and provide shelter, nutrition, medicine and education to the kids suffering from HIV/AIDS'
    },
    {
      image: '/images/hero2.jpg',
      title: 'Building Hope, One Child at a Time',
      description: 'Join us in your mission to provide love, care, and support to children affected by HIV/AIDS, helping them build a brighter future.'
    }
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Pause auto-scroll on hover
  const [isHovered, setIsHovered] = useState(false)

  // Auto-scroll functionality - improved version
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Don't start auto-scroll if hovered
    if (isHovered) {
      return
    }

    // Start auto-scroll timer
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        return (prev + 1) % heroSlides.length
      })
    }, 5000) // Change slide every 5 seconds

    // Cleanup interval on unmount or when dependencies change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [heroSlides.length, isHovered])

  // Reset auto-scroll timer
  const resetAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    // Restart auto-scroll after a brief delay
    if (!isHovered) {
      setTimeout(() => {
        intervalRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 5000)
      }, 100)
    }
  }

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    resetAutoScroll()
  }

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    resetAutoScroll()
  }

  // Navigate to specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    resetAutoScroll()
  }

  return (
    <div className="min-h-screen bg-neutral">
      <main className="pt-24">
        {/* Hero Section */}
        <section
          id="home"
          className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Container */}
          <div className="relative w-full h-full">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {/* Background Image with Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
                  style={{
                    backgroundImage: `url('${slide.image}')`,
                    transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                  <div
                    className={`max-w-2xl text-white ${
                      index === currentSlide && isVisible ? 'animate-fade-in' : 'opacity-0'
                    }`}
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-slide-up">
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-neutral-light animate-slide-up delay-200">
                      {slide.description}
                    </p>
                    <button className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-slide-up delay-300">
                      DONATE NOW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 text-white hover:text-secondary bg-black/30 hover:bg-black/50 rounded-full p-2 sm:p-3 transition-all duration-200 flex items-center justify-center"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-2xl sm:text-3xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 text-white hover:text-secondary bg-black/30 hover:bg-black/50 rounded-full p-2 sm:p-3 transition-all duration-200 flex items-center justify-center"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-2xl sm:text-3xl" />
          </button>

          {/* Slide Indicators - Glass Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 ${
                  index === currentSlide
                    ? 'w-10 h-2 bg-secondary shadow-[0_0_15px_rgba(0,196,154,0.6)]'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Statistics Banner - Glass Cards with Animated Counters */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-neutral via-surface-light to-surface-dark/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              <div className="glass-card p-8 text-center animate-slide-up group">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-all duration-300">
                    <FaExclamationTriangle className="text-4xl sm:text-5xl text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="counter text-4xl sm:text-5xl lg:text-6xl mb-2">5700K</div>
                <p className="text-sm sm:text-base lg:text-lg uppercase font-semibold tracking-wide text-text-dark">
                  AIDS PATIENTS
                </p>
              </div>

              <div className="glass-card p-8 text-center animate-slide-up delay-200 group">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-secondary/10 rounded-2xl group-hover:bg-secondary/20 transition-all duration-300">
                    <HiUsers className="text-4xl sm:text-5xl text-secondary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="counter text-4xl sm:text-5xl lg:text-6xl mb-2">220K</div>
                <p className="text-sm sm:text-base lg:text-lg uppercase font-semibold tracking-wide text-text-dark">
                  CHILDREN
                </p>
              </div>

              <div className="glass-card p-8 text-center animate-slide-up delay-300 group">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all duration-300">
                    <FaHeart className="text-4xl sm:text-5xl text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="counter text-4xl sm:text-5xl lg:text-6xl mb-2">165</div>
                <p className="text-sm sm:text-base lg:text-lg uppercase font-semibold tracking-wide text-text-dark">
                  DEATHS PER DAY
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section - Mission Section Redesign */}
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-neutral to-primary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-8">
                  Welcome to <span className="gradient-text">AIDS Care</span>
                </h2>
                <div className="space-y-6 text-text-dark/80 leading-relaxed">
                  <p>
                    At AIDS Care, we are dedicated to providing comprehensive support and care to individuals and families affected by HIV/AIDS. Our mission is to improve the quality of life for those living with HIV/AIDS through compassionate care, education, and community outreach.
                  </p>
                  <p>
                    With over two decades of experience in HIV/AIDS care, we understand the unique challenges faced by our community. Our team of healthcare professionals, counselors, and support staff work tirelessly to ensure that every individual receives the personalized care and support they deserve.
                  </p>
                  <p>
                    We believe in a holistic approach to HIV/AIDS care that addresses not just the medical needs, but also the emotional, social, and psychological aspects of living with HIV. Our comprehensive programs include medical care, counseling services, educational workshops, and community support initiatives.
                  </p>
                </div>
                <div className="mt-10">
                  <button className="btn-primary px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                    Learn More About Us
                  </button>
                </div>
              </div>
              <div className="animate-slide-up delay-200 relative">
                <div className="relative neon-edge-card rounded-2xl overflow-hidden">
                  <img
                    src="/images/hero3.jpg"
                    alt="AIDS Care Team"
                    className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(132,88,255,0.3)] to-transparent rounded-2xl"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 glass-card p-6 rounded-2xl shadow-xl animate-float">
                  <div className="text-2xl font-bold text-[#2ED8C3] neon-glow-text">24/7</div>
                  <div className="text-sm text-[#0B0D12]/70">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section - Futuristic Dark Theme */}
        <section id="programs" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-blue-500/5 rounded-full mix-blend-soft-light blur-3xl animate-float-slow"></div>
            <div className="absolute -bottom-1/4 -right-1/4 w-[1000px] h-[1000px] bg-purple-500/5 rounded-full mix-blend-soft-light blur-3xl animate-float-slower"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                Our <span className="text-white">Programs</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Comprehensive care programs designed to support individuals and families affected by HIV/AIDS
              </p>
            </div>

            <style jsx>{`
              @keyframes float-slow {
                0%, 100% { transform: translateY(0) translateX(0); }
                50% { transform: translateY(-20px) translateX(10px); }
              }
              @keyframes float-slower {
                0%, 100% { transform: translateY(0) translateX(0); }
                50% { transform: translateY(10px) translateX(-10px); }
              }
              @keyframes pulse-glow {
                0%, 100% { box-shadow: 0 0 5px 0px rgba(99, 102, 241, 0.3), 0 0 15px 0px rgba(99, 102, 241, 0.2); }
                50% { box-shadow: 0 0 20px 2px rgba(99, 102, 241, 0.4), 0 0 30px 5px rgba(99, 102, 241, 0.3); }
              }
              .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
              .animate-float-slower { animation: float-slower 15s ease-in-out infinite; }
              .animate-pulse-glow { animation: pulse-glow 5s ease-in-out infinite; }
              .card-hover-effect { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
              .card-hover-effect:hover { transform: translateY(-5px) scale(1.01); }
            `}</style>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Medical Care",
                  description: "Comprehensive medical services including antiretroviral therapy, regular health check-ups, and specialized HIV care.",
                  icon: FaHeartbeat,
                  features: ["ART Therapy", "Regular Monitoring", "Specialist Consultations"],
                  gradient: "from-blue-500 to-purple-600"
                },
                {
                  title: "Counseling & Support",
                  description: "Professional counseling services for individuals and families dealing with HIV/AIDS.",
                  icon: FaUserMd,
                  features: ["Individual Counseling", "Family Support", "Group Therapy"],
                  gradient: "from-emerald-500 to-cyan-600"
                },
                {
                  title: "Education & Awareness",
                  description: "Educational programs to raise awareness and prevent the spread of HIV.",
                  icon: FaGraduationCap,
                  features: ["Community Workshops", "School Programs", "Prevention Education"],
                  gradient: "from-violet-500 to-fuchsia-600"
                },
                {
                  title: "Nutrition Support",
                  description: "Nutritional counseling and support to maintain health and strengthen immune system.",
                  icon: FaAppleAlt,
                  features: ["Nutritional Planning", "Supplement Programs", "Dietary Counseling"],
                  gradient: "from-amber-500 to-pink-600"
                },
                {
                  title: "Community Outreach",
                  description: "Community-based programs to support and empower those affected by HIV/AIDS.",
                  icon: FaUsers,
                  features: ["Support Groups", "Home Visits", "Community Events"],
                  gradient: "from-rose-500 to-pink-600"
                },
                {
                  title: "Youth Programs",
                  description: "Specialized programs for children and adolescents living with HIV.",
                  icon: FaChild,
                  features: ["Educational Support", "Recreational Activities", "Peer Support"],
                  gradient: "from-indigo-500 to-blue-600"
                }
              ].map((program, index) => (
                <div 
                  key={index}
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 overflow-hidden card-hover-effect hover:border-blue-400/30 transition-all duration-500"
                >
                  {/* Animated border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(124, 58, 237, 0.1))`,
                        boxShadow: '0 0 10px rgba(99, 102, 241, 0.1)'
                      }}
                    >
                      <program.icon className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500">
                      {program.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-5 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <ul className="space-y-2.5 mb-6">
                      {program.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-center text-gray-300 group-hover:text-white transition-all duration-300 group-hover:translate-x-1"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="relative
                      before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/0 before:via-blue-500/40 before:to-transparent 
                      before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500
                      after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-500/0 after:via-blue-500/20 after:to-transparent
                      after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-700 after:delay-100
                    ">
                      <button className="relative z-10 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg flex items-center group-hover:scale-105 transition-all duration-300">
                        Learn more
                        <svg 
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section - Floating Glass Quote Capsules */}
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-[rgba(46,216,195,0.05)] to-[#FAFAFF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-20 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0D12] mb-6">
                Testimonials
              </h2>
              <p className="text-lg sm:text-xl text-[#0B0D12]/70 max-w-3xl mx-auto">
                Hear from our community about the impact of our programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Patient",
                  testimonial: "The support and care I received from AIDS Care has been life-changing. The staff treated me with dignity and respect, and the medical care is exceptional.",
                  avatar: "https://via.placeholder.com/100x100",
                  color: "#FF7CE5"
                },
                {
                  name: "Dr. Michael Chen",
                  role: "Healthcare Partner",
                  testimonial: "AIDS Care's comprehensive approach to HIV/AIDS care is remarkable. Their dedication to patient well-being sets them apart in the healthcare community.",
                  avatar: "https://via.placeholder.com/100x100",
                  color: "#2ED8C3"
                },
                {
                  name: "Maria Rodriguez",
                  role: "Family Member",
                  testimonial: "When my son was diagnosed, AIDS Care became our family. They provided not just medical care, but emotional support that helped us through the most difficult time.",
                  avatar: "https://via.placeholder.com/100x100",
                  color: "#8458FF"
                }
              ].map((testimonial, index) => (
                <div key={index} className="glass-card rounded-2xl p-8 animate-slide-up group hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mr-4 border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white" style={{ backgroundColor: testimonial.color }}></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B0D12] text-lg">{testimonial.name}</h4>
                      <p className="text-[#0B0D12]/60 text-sm font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-[#0B0D12]/80 italic leading-relaxed text-base">"{testimonial.testimonial}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section - Animated Counters with Shine Progress */}
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-[rgba(132,88,255,0.05)] via-[#FAFAFF] to-[rgba(46,216,195,0.05)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-20 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0D12] mb-6">
                Our Impact
              </h2>
              <p className="text-lg sm:text-xl text-[#0B0D12]/70 max-w-3xl mx-auto">
                Making a difference in the lives of those affected by HIV/AIDS through our comprehensive programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {[
                { number: "5000+", label: "Lives Touched", color: "#8458FF" },
                { number: "25", label: "Years of Service", color: "#2ED8C3" },
                { number: "150+", label: "Active Patients", color: "#FF7CE5" },
                { number: "95%", label: "Treatment Success Rate", color: "#8458FF" }
              ].map((stat, index) => (
                <div key={index} className="glass-card p-8 text-center animate-slide-up group hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-[#0B0D12] counter">{stat.number}</div>
                  <div className="text-base sm:text-lg font-semibold text-[#0B0D12]/80 mb-4">{stat.label}</div>
                  <div className="w-full h-2 bg-[rgba(0,0,0,0.1)] rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000 group-hover:animate-pulse-glow"
                      style={{ 
                        backgroundColor: stat.color,
                        width: index === 3 ? '95%' : index === 1 ? '100%' : '75%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section - Icon Highlights with Parallax */}
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-[#FAFAFF] to-[rgba(46,216,195,0.08)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-20 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0D12] mb-6">
                Our Mission
              </h2>
              <p className="text-lg sm:text-xl text-[#0B0D12]/70 max-w-3xl mx-auto leading-relaxed">
                To provide comprehensive care and support to individuals and families affected by HIV/AIDS, 
                improving their quality of life through compassionate care, education, and community outreach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: "Compassionate Care",
                  description: "Providing medical, emotional, and social support with dignity and respect.",
                  icon: FaHeart,
                  color: "#FF7CE5"
                },
                {
                  title: "Education & Awareness",
                  description: "Raising awareness and educating communities to prevent HIV transmission.",
                  icon: FaGraduationCap,
                  color: "#2ED8C3"
                },
                {
                  title: "Community Support",
                  description: "Building strong support networks for individuals and families affected by HIV/AIDS.",
                  icon: FaUsers,
                  color: "#8458FF"
                }
              ].map((item, index) => (
                <div key={index} className="text-center animate-slide-up group" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="w-20 h-20 rounded-2xl bg-[rgba(255,255,255,0.8)] backdrop-blur-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <item.icon className="text-3xl" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B0D12] mb-4 group-hover:text-[#8458FF] transition-colors duration-300">{item.title}</h3>
                  <p className="text-[#0B0D12]/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Donate Section - Glowing CTA with Pulse Halos */}
        <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8458FF] via-[#2ED8C3] to-[#FF7CE5] opacity-10"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8458FF] rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#2ED8C3] rounded-full blur-2xl opacity-15 animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-[#FF7CE5] rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0D12] mb-6">
                Make a Difference Today
              </h2>
              <p className="text-lg sm:text-xl text-[#0B0D12]/70 mb-12">
                Your support helps us continue providing essential care and support to those affected by HIV/AIDS
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="btn-primary px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Donate Now
                </button>
                <button className="btn-secondary px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
