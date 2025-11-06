'use client'

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence, Variants } from 'framer-motion';
import { FaShieldAlt, FaStethoscope, FaHeart, FaHandsHelping, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import { FiDroplet, FiHeart, FiShield, FiUsers } from 'react-icons/fi';

const variants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any, // Type assertion for ease array
      },
    },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
};

export default function ExigencyBlockPage() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      setIsVisible(true);
    }
  }, [isInView, controls]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section */}
          <section className="relative h-screen min-h-[600px] overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
                style={{
                  backgroundImage: `url('/images/exigencyback.jpg')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
              </div>
              
              {/* Animated particles */}
              <div className="absolute inset-0 opacity-30">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                      width: Math.random() * 3 + 1 + 'px',
                      height: Math.random() * 3 + 1 + 'px',
                      left: Math.random() * 100 + '%',
                      top: Math.random() * 100 + '%',
                    }}
                    animate={{
                      x: [0, (Math.random() - 0.5) * 20],
                      y: [0, (Math.random() - 0.5) * 20],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 4,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
              <motion.div 
                className="text-center text-white max-w-5xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="inline-block px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <span className="text-sm font-medium text-white/90">Specialized Care Initiative</span>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">
                    Exigency Block
                  </span>
                  <br />
                  <span className="text-white">for HIV + TB Kids</span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200 mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Transforming lives through specialized care for children co-infected with HIV and Tuberculosis
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row justify-center gap-4"
                >
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    Learn More
                    <FaArrowRight className="text-sm" />
                  </button>
                  <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/20 transition-colors border border-white/20">
                    Donate Now
                  </button>
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <FaChevronDown className="text-2xl" />
            </motion.div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
                variants={variants.staggerContainer}
                initial="hidden"
                animate={controls}
                ref={ref}
              >
                {[
                  { icon: <FiHeart className="text-4xl mb-4" />, number: "100+", label: "Children Cared For" },
                  { icon: <FiShield className="text-4xl mb-4" />, number: "24/7", label: "Medical Support" },
                  { icon: <FiUsers className="text-4xl mb-4" />, number: "50+", label: "Trained Staff" },
                  { icon: <FiDroplet className="text-4xl mb-4" />, number: "10+", label: "Years of Service" },
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-colors"
                    variants={variants.fadeInUp}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {stat.icon}
                    <motion.h3 
                      className="text-3xl md:text-4xl font-bold mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {stat.number}
                    </motion.h3>
                    <motion.p 
                      className="text-blue-100"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {stat.label}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
          
          {/* Section 1: The Need for Exigency Block */}
          <motion.section 
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Text */}
              <div className="space-y-8">
                <motion.div 
                  className="inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 text-white shadow-lg">
                      <FaShieldAlt className="text-2xl" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                      The Need for Exigency Block
                    </h2>
                  </div>
                  <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mb-8"></div>
                </motion.div>
                
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
                  >
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Children infected with <span className="font-semibold text-blue-600">HIV/AIDS face a significantly higher risk of contracting Tuberculosis (T.B)</span>. 
                      This co-infection presents serious health challenges, and without proper treatment, these children are at a 
                      much higher risk of death.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
                  >
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      While Tuberculosis is a curable disease, it requires specialized care and isolation. Because TB is contagious, 
                      it is essential to separate children suffering from both HIV/AIDS and TB to prevent the spread of the disease 
                      to other children in the home.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="p-6 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  >
                    <p className="text-base sm:text-lg leading-relaxed">
                      The Exigency Block was created to provide these vulnerable children with the specialized care they need, 
                      ensuring they receive proper treatment in a safe, isolated environment while protecting other children 
                      from potential infection.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Right Column - Image - Responsive Container */}
              <motion.div 
                className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full lg:w-[110%] xl:w-[120%] -ml-0 lg:-ml-8 xl:-ml-10 rounded-2xl lg:rounded-3xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-teal-500/20 rounded-2xl lg:rounded-3xl -rotate-2 sm:-rotate-3 md:-rotate-4 lg:-rotate-6 scale-105 sm:scale-110 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl lg:rounded-3xl rotate-2 sm:rotate-3 md:rotate-4 lg:rotate-6 scale-105 sm:scale-110 transition-transform duration-300"></div>
                <div className="relative h-full w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transition-all duration-300">
                  <div className="relative w-full h-full">
                    <img 
                      src="/images/block.webp" 
                      alt="Medical care for children with HIV and TB" 
                      className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                      style={{ objectPosition: 'center 30%' }}
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Floating elements - Responsive */}
                <motion.div 
                  className="absolute -top-4 sm:-top-5 md:-top-6 -left-4 sm:-left-5 md:-left-6 bg-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.6, type: 'spring', stiffness: 100, bounce: 0.4 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      <FaHeart className="text-xl" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Specialized Care</p>
                      <p className="text-sm text-gray-500">24/7 Support</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                      <FaShieldAlt className="text-xl" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Safe Environment</p>
                      <p className="text-sm text-gray-500">Infection Control</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute -z-10 bottom-0 -right-40 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </motion.section>

          {/* Section 2: Medical Care & TB Treatment */}
          <motion.section 
            className="relative py-20 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center max-w-4xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center justify-center gap-3 mb-6 p-3 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full">
                  <div className="p-2 bg-white rounded-full shadow-md">
                    <FaStethoscope className="text-blue-600 text-xl" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
                    Medical Care & TB Treatment
                  </h2>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Comprehensive healthcare services designed specifically for children with HIV and TB co-infection
                </p>
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mt-6"></div>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <FaShieldAlt className="text-3xl text-blue-600" />,
                    title: "TB Testing & Diagnosis",
                    description: "All children in our home undergo comprehensive T.B testing at a Government Hospital for early detection and timely intervention.",
                    color: "from-blue-50 to-blue-100",
                    border: "border-blue-200"
                  },
                  {
                    icon: <FaHeart className="text-3xl text-pink-600" />,
                    title: "Direct Observation Treatment (DOT)",
                    description: "Ensuring medications are taken correctly and consistently, which is essential for successful TB treatment and preventing drug resistance.",
                    color: "from-pink-50 to-pink-100",
                    border: "border-pink-200"
                  },
                  {
                    icon: <FaStethoscope className="text-3xl text-teal-600" />,
                    title: "Regular Medical Monitoring",
                    description: "Continuous monitoring ensures any complications are caught early and treatment plans are adjusted for optimal health outcomes.",
                    color: "from-teal-50 to-teal-100",
                    border: "border-teal-200"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className={`bg-white rounded-2xl p-8 border-2 ${item.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 mx-auto`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-800 mb-4">{item.title}</h3>
                    <p className="text-gray-600 text-center">{item.description}</p>
                    
                    <motion.div 
                      className="mt-6 text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a 
                        href="#" 
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Learn more
                        <FaArrowRight className="ml-2 text-xs" />
                      </a>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              
              {/* Additional info cards */}
              <motion.div 
                className="mt-16 grid md:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Our Approach to Care</h3>
                  <p className="text-blue-100 mb-6">
                    We believe in a holistic approach that addresses not just the medical needs of our children, but also their emotional and psychological well-being.
                  </p>
                  <ul className="space-y-3">
                    {["Personalized treatment plans", "Emotional support and counseling", "Nutritional guidance", "Educational support"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-teal-300 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-blue-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Success Stories</h3>
                  <div className="relative pl-6 border-l-4 border-teal-500 mb-6">
                    <p className="text-gray-600 italic">
                      "Thanks to the Exigency Block, my child received the specialized care needed to overcome TB while managing HIV. The compassionate staff and excellent facilities made all the difference."
                    </p>
                    <div className="mt-4 flex items-center">
                      <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">
                        A
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">Anita R.</p>
                        <p className="text-sm text-gray-500">Parent</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                    Read More Success Stories
                  </button>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute -z-10 -bottom-20 -left-20 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </motion.section>

          {/* Section 3: Community Support & Inauguration */}
          <motion.section 
            className="relative py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Column - Text */}
                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow-lg">
                        <FaHandsHelping className="text-2xl" />
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                        Community Support & Inauguration
                      </h2>
                    </div>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mb-8"></div>
                  </div>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                      whileHover={{ translateY: -5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        For over a <span className="font-semibold text-orange-600">decade, we struggled to construct a dedicated Tuberculosis block</span> for children 
                        suffering from both TB and HIV/AIDS. This specialized facility was crucial for providing the isolated care 
                        these children needed while protecting others from infection.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="p-6 bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ translateY: -5 }}
                      transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                    >
                      <p className="text-base sm:text-lg leading-relaxed">
                        Our dream became a reality with the generous support of <span className="font-semibold">KEATS (Kakinada Engineering Alumni Trust 
                        for Service)</span>. Their commitment to our cause helped us build a state-of-the-art facility that 
                        meets all medical and safety requirements.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                      whileHover={{ translateY: -5 }}
                      transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                    >
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        The Exigency Block was officially inaugurated by <span className="font-semibold text-orange-600">IAS Khatameni Bhaskar Rao Garu</span>, marking 
                        a significant milestone in our mission to provide comprehensive care for children affected by HIV/AIDS and TB.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="p-6 bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ translateY: -5 }}
                      transition={{ type: 'spring', stiffness: 300, delay: 0.3 }}
                    >
                      <p className="text-base sm:text-lg leading-relaxed">
                        Since <span className="font-semibold">2019, we have been providing specialized care</span> to children in our home who are 
                        co-infected with HIV and TB. Looking ahead, we plan to expand our services to admit children from outside 
                        our home, ensuring they receive proper treatment until they are fully cured.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Right Column - Gallery */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div 
                    className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                        <h4 className="text-white font-semibold text-xl mb-1">Our Facility</h4>
                        <p className="text-white/90 text-sm">State-of-the-art care center for children</p>
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80" 
                      alt="Exigency Block Facility" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10, delay: 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                        <h4 className="text-white font-semibold text-xl mb-1">Community Support</h4>
                        <p className="text-white/90 text-sm">Together we make a difference for these children</p>
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80" 
                      alt="Community Support" 
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="relative h-64 md:h-80 rounded-2xl overflow-hidden group col-span-2"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10, delay: 0.2 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-white font-semibold text-lg">Inauguration Day</h4>
                        <p className="text-white/80 text-sm">A milestone for our community</p>
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&q=80" 
                      alt="Inauguration Ceremony" 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Testimonials Section */}
              <motion.div 
                className="mt-24 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-12">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">What Our Community Says</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      quote: "The Exigency Block has been a blessing for our community. The care and support provided to these children is truly remarkable.",
                      author: "Dr. Priya Sharma",
                      role: "Pediatrician"
                    },
                    {
                      quote: "As a volunteer, I've seen firsthand the positive impact this facility has on children's lives. The dedication of the staff is inspiring.",
                      author: "Rahul Verma",
                      role: "Volunteer"
                    },
                    {
                      quote: "KEATS is proud to support such a noble cause. The Exigency Block is making a real difference in fighting TB among HIV+ children.",
                      author: "Anjali Kapoor",
                      role: "KEATS Representative"
                    }
                  ].map((testimonial, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ y: -10 }}
                    >
                      <div className="text-yellow-400 text-2xl mb-4">"</div>
                      <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-gray-900">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-20 -left-20 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute -z-10 -bottom-20 -right-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </motion.section>

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

              <motion.div 
                className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
              >
                {[
                  { number: "100%", label: "Of donations go directly to care" },
                  { number: "24/7", label: "Medical support" },
                  { number: "50+", label: "Children helped annually" },
                  { number: "10+", label: "Years of service" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    variants={variants.fadeInUp}
                  >
                    <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-blue-100 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Animated elements */}
            <motion.div 
              className="absolute top-1/4 -left-20 w-40 h-40 bg-white/10 rounded-full filter blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
            <motion.div 
              className="absolute bottom-1/4 -right-20 w-60 h-60 bg-teal-400/20 rounded-full filter blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: 1
              }}
            />
          </div>
        </section>
      </motion.main>
    </AnimatePresence>
    </div>
  );
}
