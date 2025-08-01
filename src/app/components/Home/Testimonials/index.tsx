'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { TestimonialType } from '@/app/types/testimonial'
import TestimonialSkeleton from '../../Skeleton/Testimonial'

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState<TestimonialType[]>([])
  const [loading, setLoading] = useState(true)
  const [animationKey, setAnimationKey] = useState(0) // Key untuk force re-render animasi

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch.')
        const data = await res.json()
        setTestimonial(data.TestimonialData)
        // Force re-render animasi dengan mengubah key
        setTimeout(() => setAnimationKey(prev => prev + 1), 100)
      } catch (error) {
        console.error('Error fetching service:', error)
        setTimeout(() => setAnimationKey(prev => prev + 1), 100)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2 // Tambahkan delay untuk children
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id='testimoni'>
      <div className='container pt-16'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }} // Gunakan animate untuk konsistensi
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-midnight_text w-96 md:w-full text-2xl md:text-5xl'>Testimoni Alumni Bloome</h2>
          <p className='text-black/70 mb-8 text-md md:text-xl'>Apa kata alumni yang berhasil masuk kampus impian mereka</p>
        </motion.div>
        
        <motion.div
          key={`testimonial-${animationKey}`} // Key yang berubah untuk force re-render animasi
          variants={containerVariants}
          initial="hidden"
          animate={loading ? "hidden" : "visible"} // Animate berdasarkan loading state
        >
          <Slider {...settings}>
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <TestimonialSkeleton key={i} />
                ))
              : testimonial.map((items, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <div className='bg-white m-3 p-6 shadow-lg rounded-2xl h-full border border-gray-100 relative'>
                      {/* Quote Icon */}
                      <div className='absolute top-4 left-4'>
                        <Icon
                          icon='mdi:format-quote-close'
                          className='text-4xl text-gray-400'
                        />
                      </div>
                      
                      {/* Testimonial Text */}
                      <div className='mt-8 mb-6'>
                        <p className='text-base text-midnight_text leading-relaxed pl-8'>
                          {items.comment}
                        </p>
                      </div>
                      
                      {/* Author Information */}
                      <div className='flex items-center gap-4 pt-4 border-t border-gray-100'>
                        {/* Avatar */}
                        <div className='relative'>
                          <div className='w-12 h-12 rounded-full border-2 border-primary overflow-hidden'>
                            <Image
                              src={items.imgSrc}
                              alt={items.name}
                              width={48}
                              height={48}
                              className='w-full h-full object-cover'
                            />
                          </div>
                        </div>
                        
                        {/* Name and Affiliation */}
                        <div className='flex-1'>
                          <p className='text-lg font-semibold text-midnight_text'>
                            {items.name}
                          </p>
                          <p className='text-sm text-primary font-medium'>
                            {items.profession}
                          </p>
                        </div>
                        
                        {/* Rating */}
                        {/* <div className='flex items-center gap-1'>
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Icon
                              key={index}
                              icon={index < items.rating ? 'tabler:star-filled' : 'tabler:star'}
                              className={`text-lg ${
                                index < items.rating ? 'text-yellow-500' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div> */}
                      </div>
                    </div>
                  </motion.div>
                ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial