'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CourseType } from '@/app/types/course'
import CourseSkeleton from '../../Skeleton/Course'

const Programs = () => {
  const [programs, setPrograms] = useState<CourseType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setPrograms(data.ProgramData)
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
    slidesToShow: 3,
    slidesToScroll: 2,
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
      <div>
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
      </div>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleWhatsAppRegister = (programTitle: string, programName: string, price: number) => {
    const formattedPrice = formatPrice(price)
    const message = encodeURIComponent(
      `Halo Bloome! Saya tertarik dengan program ${programTitle} - ${programName}.\n\n` +
      `Detail program:\n` +
      `- Program: ${programTitle}\n` +
      `- Nama: ${programName}\n` +
      `- Harga: ${formattedPrice}\n\n` +
      `Mohon informasi lebih lanjut tentang program ini. Terima kasih!`
    )
    const whatsappUrl = `https://wa.me/628515613938?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id='program' className='scroll-mt-12 pb-20'>
      <div className='container'>
        <motion.div 
          className='sm:flex justify-between items-center mb-10'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-midnight_text mb-5 sm:mb-0 capitalize text-3xl md:text-5xl'>
            Program & Pricing
          </h2>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Slider {...settings}>
            {loading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <CourseSkeleton key={i} />
                ))
              : programs.map((items, i) => (
                  <motion.div key={i} variants={cardVariants}>
                    <div className='bg-white m-3 px-3 pt-3 pb-12 shadow-md rounded-2xl h-full border border-black/10 capitalize'>
                      <div className='relative rounded-3xl'>
                        <div className='rounded-2xl'>
                          <Image
                            src={items.imgSrc}
                            alt='program-image'
                            width={389}
                            height={262}
                            className='w-full rounded-2xl'
                          />
                        </div>
                        <div className='absolute right-5 -bottom-3 bg-secondary rounded-full p-4'>
                          <p className='text-white uppercase text-center text-sm font-medium'>
                            terpopuler
                          </p>
                        </div>
                      </div>

                      <div className='px-3 pt-6'>
                        <Link href='#'>
                          <h6 className='text-black max-w-75% inline-block hover:text-primary'>
                            {items.heading}
                          </h6>
                        </Link>
                        <p className='text-base font-normal pt-6 text-black/75'>
                          {items.name}
                        </p>
                        
                        {/* Deskripsi Program */}
                        {items.description && (
                          <div className='mt-4'>
                            <h4 className='text-sm font-semibold text-primary mb-2'>Deskripsi Program:</h4>
                            <p className='text-sm text-black/70 leading-relaxed'>
                              {items.description}
                            </p>
                          </div>
                        )}
                        
                        {/* Fasilitas Program */}
                        {items.facilities && (
                          <div className='mt-4'>
                            <h4 className='text-sm font-semibold text-primary mb-2'>Fasilitas Program:</h4>
                            <p className='text-sm text-black/70 leading-relaxed'>
                              {items.facilities}
                            </p>
                          </div>
                        )}
                        
                        <div className='flex flex-col lg:flex-row justify-between items-center py-6 border-b'>
                          <div className='flex items-center gap-4'>
                            <p className='text-red-700 text-xl font-medium'>
                              {items.rating.toFixed(1)}
                            </p>
                            <div className='flex'>
                              {renderStars(items.rating)}
                            </div>
                          </div>
                          <p className='text-2xl font-medium'>{formatPrice(items.price)}</p>
                        </div>
                        <div className='flex justify-between pt-6'>
                          <div className='flex gap-4'>
                            <Icon
                              icon='solar:notebook-minimalistic-outline'
                              className='text-primary text-xl inline-block me-2'
                            />
                            <p className='text-base font-medium text-black/75'>
                              {items.classes} sesi
                            </p>
                          </div>
                          <div className='flex gap-4'>
                            <Icon
                              icon='solar:users-group-rounded-linear'
                              className='text-primary text-xl inline-block me-2'
                            />
                            <p className='text-base font-medium text-black/75'>
                              {items.students} siswa
                            </p>
                          </div>
                        </div>
                        
                        {/* Tombol Daftar */}
                        <div className='mt-6'>
                          <motion.button
                            onClick={() => handleWhatsAppRegister(items.heading, items.name, items.price)}
                            className='w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2 font-medium'
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Icon icon='mdi:whatsapp' className='text-xl' />
                            Daftar Program Ini
                          </motion.button>
                        </div>
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

export default Programs 