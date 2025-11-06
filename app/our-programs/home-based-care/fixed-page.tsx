'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence, Variants } from 'framer-motion';
import { 
  FaUtensils, FaShoppingBag, FaGraduationCap, FaArrowRight, FaHeartbeat,
  FaHandsHelping, FaClipboardList, FaClipboardCheck, FaTasks, FaChevronDown
} from 'react-icons/fa';
import { FiHome, FiMessageSquare } from 'react-icons/fi';

const variants: Record<string, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
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
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
            style={{
              backgroundImage: `url('/images/homebased.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/60 to-blue-900/80"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <motion.div 
            className="text-center text-white max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">
                Home Based Care
              </span>
            </motion.h1>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeBasedCarePage;
