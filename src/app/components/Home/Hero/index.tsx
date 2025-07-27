"use client";

import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react'

// Memoized slide component to prevent unnecessary re-renders
const SlideImage = memo(({ slide, index }: { slide: any; index: number }) => (
  <div className='relative w-full h-full flex-shrink-0'>
    <Image
      src={slide.image}
      alt={slide.title}
      fill
      className='object-cover'
      priority={index === 1}
      sizes="100vw"
      quality={75}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    />
    <div className='absolute inset-0 bg-black/30'></div>
  </div>
));

SlideImage.displayName = 'SlideImage';

// Memoized navigation buttons
const NavigationButton = memo(({ 
  onClick, 
  disabled, 
  icon, 
  position 
}: { 
  onClick: () => void; 
  disabled: boolean; 
  icon: string; 
  position: 'left' | 'right' 
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`absolute ${position === 'left' ? '-left-7' : '-right-7'} top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 disabled:opacity-50 transform-gpu will-change-transform`}
  >
    <Icon icon={icon} className="text-white text-xl" />
  </button>
));

NavigationButton.displayName = 'NavigationButton';

// Memoized pagination dots
const PaginationDots = memo(({ 
  slides, 
  currentSlideIndex, 
  goToSlide, 
  isTransitioning 
}: { 
  slides: any[]; 
  currentSlideIndex: number; 
  goToSlide: (index: number) => void; 
  isTransitioning: boolean 
}) => (
  <div className='flex gap-2 mt-8'>
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => goToSlide(index)}
        disabled={isTransitioning}
        className={`w-3 h-3 rounded-full transition-all duration-300 disabled:opacity-50 transform-gpu will-change-transform ${
          index === currentSlideIndex
            ? 'bg-white scale-110' 
            : 'bg-white/50 hover:bg-white/70'
        }`}
      />
    ))}
  </div>
));

PaginationDots.displayName = 'PaginationDots';

// Memoized content to prevent re-renders
const SlideContent = memo(({ 
  currentSlideData, 
  currentSlideIndex 
}: { 
  currentSlideData: any; 
  currentSlideIndex: number 
}) => (
  <>
    <h1 
      className='text-white text-4xl lg:text-5xl font-bold mb-6 leading-tight'
      key={`title-${currentSlideIndex}`}
    >
      {currentSlideData.title}
    </h1>

    <p 
      className='text-white/90 text-lg mb-8 leading-relaxed'
      key={`desc-${currentSlideIndex}`}
    >
      {currentSlideData.description}
    </p>
  </>
));

SlideContent.displayName = 'SlideContent';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Data untuk slider - moved outside component to prevent recreation
  const slides = useMemo(() => [
    {
      id: 1,
      image: '/images/hero/1.jpg',
      label: 'IMPACT ACROSS INDONESIA',
      title: 'Become a Student at Indonesia\'s Top Universities',
      description: 'Achieve SNBT 700+ and Get into IUP at UI, UGM, ITB with Group & 1-on-1 Support from Expert Tutors.',
      attendees: '500+ Attendees'
    },
    {
      id: 2,
      image: '/images/hero/2.jpg',
      label: 'SUCCESS STORIES',
      title: 'Become a Student at Indonesia\'s Top Universities',
      description: 'Achieve SNBT 700+ and Get into IUP at UI, UGM, ITB with Group & 1-on-1 Support from Expert Tutors.',
      attendees: '1000+ Students'
    },
    {
      id: 3,
      image: '/images/hero/3.jpg',
      label: 'EXCELLENCE PROGRAM',
      title: 'Become a Student at Indonesia\'s Top Universities',
      description: 'Achieve SNBT 700+ and Get into IUP at UI, UGM, ITB with Group & 1-on-1 Support from Expert Tutors.',
      attendees: '95% Success Rate'
    }
  ], []);

  // Memoize extended slides to prevent recreation
  const extendedSlides = useMemo(() => [
    slides[slides.length - 1],
    ...slides,
    slides[0]
  ], [slides]);

  // Memoize current slide data
  const currentSlideData = useMemo(() => {
    let index;
    if (currentSlide === 0) {
      index = slides.length - 1;
    } else if (currentSlide === slides.length + 1) {
      index = 0;
    } else {
      index = currentSlide - 1;
    }
    return slides[index] || slides[0];
  }, [currentSlide, slides]);

  // Memoize current slide index
  const currentSlideIndex = useMemo(() => {
    if (currentSlide === 0) return slides.length - 1;
    if (currentSlide === slides.length + 1) return 0;
    return Math.max(0, Math.min(slides.length - 1, currentSlide - 1));
  }, [currentSlide, slides.length]);

  // Optimized slide functions with useCallback
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
    
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
  }, [isTransitioning, currentSlide, slides.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(prev => prev - 1);
    
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
  }, [isTransitioning, currentSlide, slides.length]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index + 1);
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [isTransitioning]);

  // Auto slide with optimized interval
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Add safety check
  if (!currentSlideData) {
    return <div>Loading...</div>;
  }

  return (
    <section id='home-section' className='relative w-full h-screen overflow-hidden'>
      {/* Background Slider */}
      <div className='absolute inset-0 w-full h-full overflow-hidden'>
        <div 
          className='flex w-full h-full transform-gpu will-change-transform'
          style={{ 
            transform: `translate3d(${-currentSlide * 100}%, 0, 0)`,
            transition: isTransitioning ? 'transform 0.8s ease-in-out' : 'none'
          }}
        >
          {extendedSlides.map((slide, index) => (
            <SlideImage key={`${slide.id}-${index}`} slide={slide} index={index} />
          ))}
        </div>
      </div>

      {/* Content Card */}
      <div className='relative z-20 h-full flex items-center'>
        <div className='container'>
          <div className='relative'>
            {/* Transparent Card - Full Height */}
            <div 
              className='relative bg-primary/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/20 shadow-2xl w-full lg:w-1/2 h-screen flex flex-col justify-center transform-gpu will-change-transform'
              style={{
                opacity: 1,
                transform: 'translateX(0)',
                transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out'
              }}
            >
              {/* Navigation Arrows - Inside the card */}
              <NavigationButton 
                onClick={prevSlide}
                disabled={isTransitioning}
                icon="solar:arrow-left-linear"
                position="left"
              />

              <NavigationButton 
                onClick={nextSlide}
                disabled={isTransitioning}
                icon="solar:arrow-right-linear"
                position="right"
              />

              {/* Slide Content */}
              <SlideContent 
                currentSlideData={currentSlideData}
                currentSlideIndex={currentSlideIndex}
              />

              {/* Pagination Dots */}
              <PaginationDots 
                slides={slides}
                currentSlideIndex={currentSlideIndex}
                goToSlide={goToSlide}
                isTransitioning={isTransitioning}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Hero)