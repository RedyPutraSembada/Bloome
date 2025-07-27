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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch.')
        const data = await res.json()
        setTestimonial(data.TestimonialData)
      } catch (error) {
        console.error('Error fetching service:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const halfStars = rating % 1 >= 0.5 ? 1 : 0
    const emptyStars = 5 - fullStars - halfStars

    return (
      <>
        {Array(fullStars).fill(
          <Icon
            icon='tabler:star-filled'
            className='text-yellow-500 text-xl inline-block'
          />
        )}
        {halfStars > 0 && (
          <Icon
            icon='tabler:star-half-filled'
            className='text-yellow-500 text-xl inline-block'
          />
        )}
        {Array(emptyStars).fill(
          <Icon
            icon='tabler:star-filled'
            className='text-gray-400 text-xl inline-block'
          />
        )}
      </>
    )
  }

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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id='testimoni'>
      <div className='container pt-16'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-midnight_text w-96 md:w-full text-2xl md:text-5xl'>Testimoni Alumni Bloome</h2>
          <p className='text-black/70 mb-8 text-md md:text-xl'>Apa kata alumni yang berhasil masuk kampus impian mereka</p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Slider {...settings}>
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <TestimonialSkeleton key={i} />
                ))
              : testimonial.map((items, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <div
                      className={
                        'bg-white m-3 px-3 pt-3 pb-12 shadow-md rounded-2xl h-full border border-black/10 capitalize'
                      }>
                      {/* <div className='absolute top-[-45px]'>
                        <Image
                          src={items.imgSrc}
                          alt={items.name}
                          width={70}
                          height={70}
                          className='inline-block rounded-full border border-black/10'
                        />
                      </div> */}
                      
                      {/* Video Testimoni atau Gambar - berdasarkan kondisi */}
                      <div className='mb-4'>
                        {items.videoUrl ? (
                          <>
                            <video 
                              className='w-full h-64 object-cover rounded-xl shadow-lg'
                              controls
                              poster={items.imgSrc}
                            >
                              <source src={items.videoUrl} type='video/mp4' />
                              Your browser does not support the video tag.
                            </video>
                            <p className='text-xs text-primary font-medium mt-2 flex items-center gap-1'>
                              <Icon icon='mdi:video' className='text-sm' />
                              Video Testimoni
                            </p>
                          </>
                        ) : (
                          <>
                            <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden">
                              <Image
                                src={items.imgSrc}
                                alt="program-image"
                                fill
                                className="object-cover rounded-2xl"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 389px"
                              />
                            </div>
                            <p className='text-xs text-primary font-medium mt-2 flex items-center gap-1'>
                              <Icon icon='mdi:camera' className='text-sm' />
                              Foto Testimoni
                            </p>
                          </>
                        )}
                      </div>
                      
                      <p className='text-base font-normal text-darkgray my-4'>
                        {items.comment}
                      </p>
                      <div className='flex justify-between items-center'>
                        <div>
                          <p className='text-lg font-medium text-darkbrown pt-4 pb-2'>
                            {items.name}
                          </p>
                          <p className='text-sm font-normal text-lightgray pb-2'>
                            {items.profession}
                          </p>
                        </div>
                        <div className='flex'>{renderStars(items.rating)}</div>
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
