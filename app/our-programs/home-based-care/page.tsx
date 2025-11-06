'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence, Variants } from 'framer-motion';
import { 
  FaHome, FaHeart, FaShoppingBag, FaUtensils, FaGraduationCap, 
  FaComments, FaHandHoldingHeart, FaArrowRight, FaHeartbeat, 
  FaHandsHelping, FaClipboardList, FaClipboardCheck, FaTasks,
  FaChevronDown
} from 'react-icons/fa';
import { FiHome, FiHeart, FiShield, FiUsers, FiBook, FiMessageSquare } from 'react-icons/fi';

const variants: Record<string, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any,
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

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 h-full flex flex-col"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>
      
      <div className="relative z-10 p-8 h-full flex flex-col">
        <motion.div 
          className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-2xl text-white bg-gradient-to-br from-blue-500 to-teal-500 shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-200 flex-grow">
          {description}
        </p>
        <div className="mt-6 pt-4 border-t border-white/20">
          <span className="inline-flex items-center text-sm font-medium text-blue-300 group-hover:text-white transition-colors duration-300">
            Learn more
            <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1 duration-300" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const HomeBasedCarePage = () => {
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

  const supportServices = [
    {
      icon: <FaUtensils />,
      title: 'Nutrition Support',
      description: 'Providing balanced meals and nutritional supplements to ensure proper growth and development for children.'
    },
    {
      icon: <FaShoppingBag />,
      title: 'Clothing & Essentials',
      description: 'Supplying quality clothing, footwear, and personal care items for all seasons and needs.'
    },
    {
      icon: <FiHome />,
      title: 'Home Comforts',
      description: 'Providing blankets, bedding, and other home essentials to ensure a comfortable living environment.'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Education Support',
      description: 'Covering school fees, supplies, uniforms, and educational resources to support academic success.'
    },
    {
      icon: <FiMessageSquare />,
      title: 'Counseling Services',
      description: 'Professional counseling for children and families to address emotional and psychological needs.'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Healthcare Access',
      description: 'Facilitating medical check-ups, medications, and healthcare services for overall well-being.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
            style={{
              backgroundImage: `url('/images/homebased.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/60 to-blue-900/80"></div>
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
                  repeatType: 'reverse' as const,
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
              <span className="text-sm font-medium text-white/90">Comprehensive Care Initiative</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">
                Home Based Care
              </span>
              <br />
              <span className="text-white">for Vulnerable Children</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Providing essential support and care for children in need, right in the comfort of their homes
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
                Support Our Cause
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
      <section className="py-16 bg-gradient-to-br from-blue-700 to-teal-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={variants.staggerContainer}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            {[
              { icon: <FiHeart className="text-4xl mb-4" />, number: "500+", label: "Children Supported" },
              { icon: <FiHome className="text-4xl mb-4" />, number: "15+", label: "Years of Service" },
              { icon: <FiUsers className="text-4xl mb-4" />, number: "1000+", label: "Families Helped" },
              { icon: <FiBook className="text-4xl mb-4" />, number: "85%", label: "School Attendance" },
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

      <main className="relative z-10">
        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900/30 to-blue-900/10">

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
                <span className="text-sm font-medium text-white/90">Comprehensive Care Initiative</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">
                  Home Based Care
                </span>
                <br />
                <span className="text-white">for Vulnerable Children</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Providing essential support and care for children in need, right in the comfort of their homes
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
                  Support Our Cause
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900/30 to-blue-900/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">Support Services</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Comprehensive care and support for children in need, ensuring their well-being and development.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-b from-blue-900/10 to-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                How It <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">Works</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Our step-by-step process to ensure every child receives the care and support they need.
              </motion.p>
            </motion.div>

            <div className="relative">
              <div className="hidden md:block absolute top-0 left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/30 to-teal-500/30 transform -translate-x-1/2"></div>
              
              <div className="space-y-16">
                {[
                  {
                    number: '01',
                    title: 'Initial Assessment',
                    description: 'We conduct a thorough assessment of the child\'s needs and family situation.',
                    icon: <FaClipboardList />
                  },
                  {
                    number: '02',
                    title: 'Personalized Care Plan',
                    description: 'A customized care plan is created based on the assessment results.',
                    icon: <FaClipboardCheck />
                  },
                  {
                    number: '03',
                    title: 'Implementation',
                    description: 'Our team implements the care plan, providing all necessary support and resources.',
                    icon: <FaTasks />
                  },
                  {
                    number: '04',
                    title: 'Ongoing Support',
                    description: 'We provide continuous support and regular check-ins to ensure progress.',
                    icon: <FaHandsHelping />
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="flex flex-col md:flex-row items-center">
                      <div className={`flex-shrink-0 w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-blue-400/50 transition-colors flex items-center justify-center mb-6 md:mb-0 md:mx-8 relative z-10`}>
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-blue-400/30 transition-colors">
                        <div className="flex items-center mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-teal-500/20 text-blue-300 mr-4">
                            {step.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-gray-300 pl-16">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-900/80 to-teal-900/80 text-white overflow-hidden">
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
              style={{
                backgroundImage: "url('/images/cta-bg.jpg')",
                opacity: 0.15
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-teal-900/90"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-block px-6 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <span className="text-sm font-medium text-white/90">Join Our Mission</span>
              </motion.div>
              <motion.h2 
                className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Be Part of <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">Their Journey</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl mb-10 text-gray-200 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Your support can help us provide essential care and resources to children in need. 
                Together, we can create a brighter future for them.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Donate Now
                  <FaHeart className="text-sm" />
                </button>
                <button className="group relative px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/20 transition-colors border border-white/20 flex items-center justify-center gap-2">
                  Become a Volunteer
                  <FaHandHoldingHeart className="text-teal-200 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-8 text-sm text-white/70"
              >
                Your contribution is tax-deductible. 100% of donations go directly to supporting children in need.
              </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center animate-fade-in">
              <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 shadow-lg">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Support Our Home-Based Care Program
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Your support helps us reach more families in need, providing essential resources, medical care, and 
                  emotional support to children and their guardians. Together, we can make a difference in the lives of 
                  those who need it most.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Donate Now
                  </button>
                  <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                    Get Involved
                  </button>
                </div>
              </div>
              <div className="flex-1 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-blue-400/30 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-teal-500/20 text-blue-300 mr-4">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-300 pl-16">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="relative py-20 bg-gradient-to-r from-blue-900/80 to-teal-900/80 text-white overflow-hidden">
  <div className="absolute inset-0">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
      style={{
        backgroundImage: "url('/images/cta-bg.jpg')",
        opacity: 0.15
      }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-teal-900/90"></div>
  </div>
  
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="inline-block px-6 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
      >
        <span className="text-sm font-medium text-white/90">Join Our Mission</span>
      </motion.div>
      <motion.h2 
        className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Be Part of <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">Their Journey</span>
      </motion.h2>
      
      <motion.p 
        className="text-xl mb-10 text-gray-200 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Your support can help us provide essential care and resources to children in need. 
        Together, we can create a brighter future for them.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
          Donate Now
          <FaHeart className="text-sm" />
        </button>
        <button className="group relative px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/20 transition-colors border border-white/20 flex items-center justify-center gap-2">
          Become a Volunteer
          <FaHandHoldingHeart className="text-teal-200 transition-transform group-hover:translate-x-1" />
        </button>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 text-sm text-white/70"
      >
        Your contribution is tax-deductible. 100% of donations go directly to supporting children in need.
      </motion.p>
    </motion.div>
  </div>
</section>

{/* Call to Action Section */}
<section className="py-12 sm:py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
    <div className="text-center animate-fade-in">
      <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 shadow-lg">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Support Our Home-Based Care Program
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Your support helps us reach more families in need, providing essential resources, medical care, and 
          emotional support to children and their guardians. Together, we can make a difference in the lives of 
          those who need it most.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Donate Now
          </button>
          <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
        </div>
      </section>
    </main>
  );
};

const HomeBasedCarePage = () => {
  return (
    /* ... rest of the code remains the same ... */
  );
};

export default HomeBasedCarePage;
