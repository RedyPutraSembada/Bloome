"use client";

import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start from 1 (first real slide)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Data untuk slider
  const slides = [
    {
      id: 1,
      image: '/images/hero/1.jpg',
      label: 'IMPACT ACROSS INDONESIA',
      title: 'Become a Student at Indonesia’s Top Universities',
      description: 'Achieve SNBT 700+ and Get into IUP at UI, UGM, ITB with Group & 1-on-1 Support from Expert Tutors.',
      attendees: '500+ Attendees'
    },
    {
      id: 2,
      image: '/images/hero/2.jpg',
      label: 'SUCCESS STORIES',
      title: 'Become a Student at Indonesia’s Top Universities',
      description: 'Achieve SNBT 700+ and Get into IUP at UI, UGM, ITB with Group & 1-on-1 Support from Expert Tutors.',
      attendees: '1000+ Students'
    },
    {
      id: 3,
      image: '/images/hero/3.jpg',
      label: 'EXCELLENCE PROGRAM',
      title: 'Become a Student at Indonesia’s Top Universities',
      description: 'Achieve SNBT 700+ and Get into IUP at UI, UGM, ITB with Group & 1-on-1 Support from Expert Tutors.',
      attendees: '95% Success Rate'
    }
  ];

  // Create extended slides array for infinite effect
  const extendedSlides = [
    slides[slides.length - 1], // Last slide at the beginning
    ...slides,
    slides[0] // First slide at the end
  ];

  // Auto slide - selalu ke kiri
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Initialize slide position
  useEffect(() => {
    // Ensure we start at the correct position
    if (currentSlide === 1 && slides.length > 0) {
      // Component is properly initialized
    }
  }, [slides.length]);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
    
    // If we're at the duplicate first slide, jump to real first slide
    if (currentSlide === slides.length) {
      timeoutRef.current = setTimeout(() => {
        setCurrentSlide(1);
        setIsTransitioning(false);
      }, 800);
    } else {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(prev => prev - 1);
    
    // If we're at the duplicate last slide, jump to real last slide
    if (currentSlide === 1) {
      timeoutRef.current = setTimeout(() => {
        setCurrentSlide(slides.length);
        setIsTransitioning(false);
      }, 800);
    } else {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index + 1); // +1 because of duplicate slide at beginning
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  // Get current slide data for content
  const getCurrentSlideData = () => {
    let index;
    if (currentSlide === 0) {
      index = slides.length - 1; // Last slide
    } else if (currentSlide === slides.length + 1) {
      index = 0; // First slide
    } else {
      index = currentSlide - 1; // Normal slides
    }
    return slides[index] || slides[0]; // Fallback to first slide
  };

  // Get current slide index for dots
  const getCurrentSlideIndex = () => {
    if (currentSlide === 0) return slides.length - 1;
    if (currentSlide === slides.length + 1) return 0;
    return Math.max(0, Math.min(slides.length - 1, currentSlide - 1));
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const currentSlideData = getCurrentSlideData();
  const currentSlideIndex = getCurrentSlideIndex();

  // Add safety check
  if (!currentSlideData) {
    return <div>Loading...</div>;
  }

  return (
    <section id='home-section' className='relative w-full h-screen overflow-hidden'>
      {/* Background Slider */}
      <div className='absolute inset-0 w-full h-full overflow-hidden'>
        <motion.div 
          className='flex w-full h-full'
          animate={{ 
            x: `${-currentSlide * 100}%`
          }}
          transition={{ 
            duration: isTransitioning ? 0.8 : 0, 
            ease: "easeInOut"
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              className='relative w-full h-full flex-shrink-0'
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className='object-cover'
                priority={index === 1}
              />
              {/* Overlay untuk memastikan teks tetap terbaca */}
              <div className='absolute inset-0 bg-black/30'></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Content Card */}
      <div className='relative z-20 h-full flex items-center'>
        <div className='container'>
          <div className='relative'>
            {/* Transparent Card - Full Height */}
            <motion.div 
              className='relative bg-primary/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/20 shadow-2xl w-full lg:w-1/2 h-screen flex flex-col justify-center'
              variants={itemVariants}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Navigation Arrows - Inside the card */}
              <motion.button
                onClick={prevSlide}
                disabled={isTransitioning}
                className='absolute -left-7 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 disabled:opacity-50'
                whileHover={{ scale: isTransitioning ? 1 : 1.1 }}
                whileTap={{ scale: isTransitioning ? 1 : 0.9 }}
              >
                <Icon icon="solar:arrow-left-linear" className="text-white text-xl" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                disabled={isTransitioning}
                className='absolute -right-7 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 disabled:opacity-50'
                whileHover={{ scale: isTransitioning ? 1 : 1.1 }}
                whileTap={{ scale: isTransitioning ? 1 : 0.9 }}
              >
                <Icon icon="solar:arrow-right-linear" className="text-white text-xl" />
              </motion.button>

              {/* Label */}
              {/* <motion.div 
                className='inline-block bg-gradient-to-r from-gray-800 to-primary rounded-full px-4 py-2 mb-6'
                variants={itemVariants}
              >
                <p className='text-white text-sm font-semibold tracking-widest uppercase'>
                  {currentSlideData.label}
                </p>
              </motion.div> */}

              {/* Title */}
              <motion.h1 
                className='text-white text-4xl lg:text-5xl font-bold mb-6 leading-tight'
                variants={itemVariants}
                key={`title-${currentSlideIndex}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {currentSlideData.title}
              </motion.h1>

              {/* Description */}
              <motion.p 
                className='text-white/90 text-lg mb-8 leading-relaxed'
                variants={itemVariants}
                key={`desc-${currentSlideIndex}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {currentSlideData.description}
              </motion.p>

              {/* Attendees */}
              {/* <motion.div 
                className='text-white/80 text-lg font-medium'
                variants={itemVariants}
                key={`attendees-${currentSlideIndex}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {currentSlideData.attendees}
              </motion.div> */}

              {/* Pagination Dots */}
              <motion.div 
                className='flex gap-2 mt-8'
                variants={itemVariants}
              >
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    disabled={isTransitioning}
                    className={`w-3 h-3 rounded-full transition-all duration-300 disabled:opacity-50 ${
                      index === currentSlideIndex
                        ? 'bg-white scale-110' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      
   </section>
 )
}

export default Hero