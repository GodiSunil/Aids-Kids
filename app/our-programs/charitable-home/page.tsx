'use client'

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaHome, FaHeart, FaStethoscope, FaGraduationCap, FaUtensils, FaUsers, FaShieldAlt } from 'react-icons/fa';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function CharitableHomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const refs = {
    about: useRef(null),
    services: useRef(null),
    impact: useRef(null),
    help: useRef(null)
  };

  const isInView = {
    about: useInView(refs.about, { once: true, amount: 0.1 }),
    services: useInView(refs.services, { once: true, amount: 0.1 }),
    impact: useInView(refs.impact, { once: true, amount: 0.1 }),
    help: useInView(refs.help, { once: true, amount: 0.1 })
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating Navigation */}
      <div className="fixed right-6 bottom-8 z-50 flex flex-col gap-3">
        {Object.entries(refs).map(([key, ref], index) => (
          <button
            key={key}
            onClick={() => scrollToSection(ref)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeTab === index ? 'bg-primary-teal scale-125' : 'bg-gray-300 hover:bg-primary-teal/50'
            }`}
            aria-label={`Scroll to ${key} section`}
          />
        ))}
      </div>

      <main onScroll={() => {
        // Update active tab based on scroll position
        const scrollPosition = window.scrollY + 100;
        const sections = Object.values(refs).map(ref => ({
          top: ref.current?.offsetTop,
          bottom: ref.current?.offsetTop + ref.current?.offsetHeight
        }));
        
        const currentSection = sections.findIndex(
          (section, i) => 
            scrollPosition >= section.top && 
            (i === sections.length - 1 || scrollPosition < sections[i + 1].top)
        );
        
        if (currentSection !== -1 && currentSection !== activeTab) {
          setActiveTab(currentSection);
        }
      }}>
        {/* Hero Section */}
        <section 
          ref={refs.about}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 animate-zoom-in-out"
              style={{
                backgroundImage: `url('/images/charity.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
              {/* Animated particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute rounded-full bg-white/10"
                    style={{
                      width: `${Math.random() * 10 + 5}px`,
                      height: `${Math.random() * 10 + 5}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                      animationDelay: `${Math.random() * 5}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <motion.div 
              className="text-center text-white max-w-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView.about ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView.about ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white/90"
              >
                Welcome to Our Safe Haven
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView.about ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                A Loving <span className="text-primary-teal">Home</span> for <br />
                <span className="text-primary-cyan">HIV/AIDS</span> Affected Children
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView.about ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Providing comprehensive care, education, and a loving family environment to children affected by HIV/AIDS in Eluru, Andhra Pradesh.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView.about ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <button 
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-teal to-primary-cyan text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  onClick={() => scrollToSection(refs.help)}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Learn How We Help <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-cyan to-primary-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
                
                <button 
                  className="px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  onClick={() => scrollToSection(refs.impact)}
                >
                  See Our Impact
                </button>
              </motion.div>
              
              <motion.div 
                className="mt-16 animate-bounce"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView.about ? { opacity: 0.7, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <div className="flex flex-col items-center text-sm text-white/70">
                  <span>Scroll to explore</span>
                  <FiChevronRight className="transform rotate-90 mt-1 text-xl" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section 
          ref={refs.about}
          className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary-teal/30 blur-3xl"></div>
            <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-primary-cyan/30 blur-3xl"></div>
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div 
              className="max-w-5xl mx-auto"
              initial="hidden"
              animate={isInView.about ? "visible" : "hidden"}
              variants={container}
            >
              <motion.div 
                className="text-center mb-16"
                variants={item}
              >
                <motion.div 
                  className="inline-block px-4 py-1.5 rounded-full bg-primary-teal/10 text-primary-teal text-sm font-medium mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView.about ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                >
                  Our Mission
                </motion.div>
                <motion.h2 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                  variants={item}
                >
                  A <span className="text-primary-teal">Safe Haven</span> for Children
                </motion.h2>
                <motion.div 
                  className="w-20 h-1 bg-gradient-to-r from-primary-teal to-primary-cyan mx-auto rounded-full"
                  variants={item}
                ></motion.div>
              </motion.div>
              
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl border border-gray-100 space-y-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView.about ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <motion.p 
                  className="text-lg sm:text-xl text-gray-700 leading-relaxed"
                  variants={item}
                >
                  At <span className="font-semibold text-primary-teal">Ravi Teja Children's Home</span>, we believe that every child, regardless of their health condition, deserves 
                  a safe, loving, and nurturing environment to grow and thrive. Our charitable home provides comprehensive care 
                  and support to HIV/AIDS-affected children, offering them the opportunity to lead <span className="text-primary-teal font-medium">normal, healthy, and 
                  prosperous lives</span>.
                </motion.p>
                
                <motion.div 
                  className="grid md:grid-cols-2 gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={isInView.about ? "visible" : "hidden"}
                >
                  <motion.div 
                    className="bg-gradient-to-br from-primary-teal/5 to-primary-cyan/5 p-6 rounded-xl border border-gray-100"
                    variants={item}
                    whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(13, 148, 136, 0.2)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-teal/10 flex items-center justify-center text-primary-teal text-xl">
                        <FaHeart />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Holistic Care</h3>
                        <p className="text-gray-600">
                          We provide complete care including shelter, clothing, nutrition, healthcare, education, and recreational activities.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gradient-to-br from-primary-cyan/5 to-blue-500/5 p-6 rounded-xl border border-gray-100"
                    variants={item}
                    whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(6, 182, 212, 0.2)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-cyan/10 flex items-center justify-center text-primary-cyan text-xl">
                        <FaUsers />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Family Environment</h3>
                        <p className="text-gray-600">
                          Currently caring for <span className="font-bold text-primary-cyan">50 children</span> in Eluru, providing a loving family environment.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="mt-8 pt-8 border-t border-gray-100"
                  variants={item}
                >
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-primary-teal/5 to-primary-cyan/5 p-6 rounded-2xl">
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Join Our Cause</h3>
                      <p className="text-gray-600 max-w-xl">
                        Your support can help us provide a better future for these children. Every contribution makes a difference.
                      </p>
                    </div>
                    <button 
                      className="px-6 py-3 bg-gradient-to-r from-primary-teal to-primary-cyan text-white font-semibold rounded-lg whitespace-nowrap hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      onClick={() => scrollToSection(refs.help)}
                    >
                      Support Us Today
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section 
          ref={refs.services}
          className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden opacity-5">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-teal/20 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary-cyan/20 blur-3xl"></div>
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-block px-4 py-1.5 rounded-full bg-primary-teal/10 text-primary-teal text-sm font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Our Services
              </motion.div>
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Comprehensive <span className="text-primary-teal">Care Services</span>
              </motion.h2>
              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-primary-teal to-primary-cyan mx-auto rounded-full"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.4, duration: 0.6 }}
              ></motion.div>
              <motion.p 
                className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                We provide a holistic approach to care, addressing every aspect of a child's wellbeing
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {services.map((service, index) => {
                // Create a gradient color based on index for visual variety
                const colors = [
                  'from-blue-500 to-cyan-400',
                  'from-purple-500 to-pink-400',
                  'from-amber-500 to-orange-400',
                  'from-emerald-500 to-teal-400',
                  'from-rose-500 to-pink-400',
                  'from-indigo-500 to-blue-400'
                ];
                const color = colors[index % colors.length];
                
                return (
                  <motion.div 
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-xl"
                    variants={item}
                    whileHover={{ y: -10 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
                    <div className="relative z-10 h-full flex flex-col p-6 sm:p-8 bg-white/90 group-hover:bg-white/50 backdrop-blur-sm transition-all duration-500">
                      <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-2xl text-white bg-gradient-to-br ${color} shadow-lg`}>
                        {React.cloneElement(service.icon, { className: 'text-2xl' })}
                      </div>
                      

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 flex-grow">
                        {service.description}
                      </p>
                      

                      <div className="flex items-center text-primary-teal font-medium group-hover:translate-x-1 transition-transform">
                        <span>Learn more</span>
                        <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                    
                    {/* Animated border on hover */}
                    <div className="absolute inset-0 rounded-2xl p-0.5 bg-gradient-to-br from-transparent via-primary-teal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-full h-full bg-white rounded-[15px]"></div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-gray-600 mb-6">
                Each service is tailored to meet the unique needs of every child in our care.
              </p>
              <button 
                className="inline-flex items-center px-6 py-3 border-2 border-primary-teal text-primary-teal font-medium rounded-lg hover:bg-primary-teal hover:text-white transition-all duration-300 group"
                onClick={() => scrollToSection(refs.impact)}
              >
                <span>See Our Impact</span>
                <FiChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Impact & Statistics Section */}
        <section 
          ref={refs.impact}
          className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-cyan/30 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary-teal/30 blur-3xl"></div>
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Text */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div>
                  <motion.div 
                    className="inline-block px-4 py-1.5 rounded-full bg-primary-teal/10 text-primary-teal text-sm font-medium mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    Our Impact
                  </motion.div>
                  <motion.h2 
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Making a <span className="text-primary-teal">Real Difference</span>
                  </motion.h2>
                  <motion.div 
                    className="w-20 h-1 bg-gradient-to-r from-primary-teal to-primary-cyan rounded-full mb-8"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  ></motion.div>
                </div>
                
                <motion.p 
                  className="text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Since our inception, we have been committed to transforming the lives of children affected by HIV/AIDS. 
                  Through our comprehensive care programs, we have successfully provided:
                </motion.p>
                
                <motion.ul 
                  className="space-y-5"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {[
                    "A stable and secure family environment free from stigma and discrimination",
                    "Regular medical care and ART therapy to extend and improve quality of life",
                    "Educational opportunities that help children achieve their academic goals",
                    "Emotional support and counseling to help children heal and grow"
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-4"
                      variants={item}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-primary-teal/10 flex items-center justify-center text-primary-teal">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <button 
                    className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-teal to-primary-cyan text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    onClick={() => scrollToSection(refs.help)}
                  >
                    <span>Learn How We Help</span>
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </motion.div>
              
              {/* Right Column - Image and Stats */}
              <div className="space-y-8">
                {/* Image with floating elements */}
                <motion.div 
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="aspect-w-16 aspect-h-12 w-full">
                    <img 
                      src="/images/charity1.jpg" 
                      alt="Children benefiting from our charitable home program" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-primary-teal/90 text-white p-4 shadow-xl">
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-xs font-medium">Years of Service</div>
                  </div>
                </motion.div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { 
                      icon: <FaUsers className="text-4xl" />, 
                      value: "50+", 
                      label: "Children at Home",
                      color: "from-blue-500 to-cyan-400"
                    },
                    { 
                      icon: <FaHeart className="text-4xl" />, 
                      value: "100%", 
                      label: "Care & Support",
                      color: "from-pink-500 to-rose-400"
                    },
                    { 
                      icon: <FaGraduationCap className="text-4xl" />, 
                      value: "24/7", 
                      label: "Dedicated Care",
                      color: "from-amber-500 to-orange-400"
                    },
                    { 
                      icon: <FaShieldAlt className="text-4xl" />, 
                      value: "50+", 
                      label: "Lives Transformed",
                      color: "from-emerald-500 to-teal-400"
                    }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: 0.2 + (index * 0.1), duration: 0.6 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-white bg-gradient-to-br ${stat.color} shadow-md`}>
                        {stat.icon}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section 
          ref={refs.help}
          className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden opacity-5">
            <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary-teal/20 blur-3xl"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-primary-cyan/20 blur-3xl"></div>
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-block px-4 py-1.5 rounded-full bg-primary-teal/10 text-primary-teal text-sm font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Our Approach
              </motion.div>
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                How We <span className="text-primary-teal">Help & Support</span>
              </motion.h2>
              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-primary-teal to-primary-cyan mx-auto rounded-full mb-8"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.4, duration: 0.6 }}
              ></motion.div>
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Our holistic approach ensures every child receives comprehensive care tailored to their unique needs
              </motion.p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    title: "Medical Care & Treatment",
                    description: "Our medical team provides regular health monitoring, ART (Anti-retroviral Therapy) administration, and immediate treatment for opportunistic infections. We work closely with qualified doctors to ensure that each child receives the best possible medical care.",
                    icon: <FaStethoscope className="text-2xl" />,
                    color: "from-blue-500 to-cyan-400"
                  },
                  {
                    title: "Nutritional Support",
                    description: "Proper nutrition is crucial for children living with HIV/AIDS. We provide well-balanced, nutritious meals that support immune function and overall health. Our diet plans are tailored to meet the specific nutritional needs of each child.",
                    icon: <FaUtensils className="text-2xl" />,
                    color: "from-emerald-500 to-teal-400"
                  },
                  {
                    title: "Education & Development",
                    description: "Education is a fundamental right of every child. We ensure that all children in our care have access to quality education and learning opportunities. We support their academic journey and help them develop skills for a brighter future.",
                    icon: <FaGraduationCap className="text-2xl" />,
                    color: "from-amber-500 to-orange-400"
                  },
                  {
                    title: "Emotional & Psychological Support",
                    description: "Living with HIV/AIDS can be emotionally challenging for children. Our team provides counseling, emotional support, and a nurturing environment where children can express themselves freely and build resilience.",
                    icon: <FaHeart className="text-2xl" />,
                    color: "from-rose-500 to-pink-400"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <div className="relative z-10 flex flex-col md:flex-row">
                      <div className={`w-full md:w-3 h-full md:h-auto md:min-h-full absolute md:relative bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                      
                      <div className="flex-shrink-0 p-6 md:p-8 flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${item.color} shadow-lg`}>
                          {item.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1 p-6 md:p-8 md:pl-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-teal transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      
                      <div className="absolute bottom-4 right-4 text-primary-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-2xl p-0.5 bg-gradient-to-r from-transparent via-primary-teal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-full h-full bg-white rounded-[15px]"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join us in our mission to provide love, care, and support to children affected by HIV/AIDS.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-primary-teal to-primary-cyan text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Donate Now
                  </button>
                  <button className="px-8 py-4 border-2 border-primary-teal text-primary-teal font-semibold rounded-lg hover:bg-primary-teal hover:text-white transition-all duration-300">
                    Sponsor a Child
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-teal/30 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary-cyan/30 blur-3xl"></div>
            
            {/* Animated grid */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}></div>
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Join Our Mission
              </motion.div>
              
              <motion.h3 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Help Us Care for <span className="text-primary-teal">More Children</span>
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Your support enables us to provide comprehensive care to more children in need. Together, we can give 
                these children the love, care, and opportunities they deserve to lead healthy and prosperous lives.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <button 
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-teal to-primary-cyan text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Donate Now
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-cyan to-primary-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
                
                <button 
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  Sponsor a Child
                </button>
              </motion.div>
              
              <motion.p 
                className="mt-8 text-sm text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Every contribution makes a difference in a child's life. 100% of donations go directly to our programs.
              </motion.p>
            </motion.div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-primary-teal/20 blur-xl"
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div 
              className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-primary-cyan/20 blur-xl"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </section>
      </main>

    </div>
  )
}
