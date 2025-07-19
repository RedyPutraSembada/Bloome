'use client'

import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

const Register = () => {
  const handleWhatsAppRegister = () => {
    const message = encodeURIComponent('Halo Bloome! Saya ingin mendaftar program bimbel. Mohon informasi lebih lanjut.')
    const whatsappUrl = `https://wa.me/628515613938?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id='daftar'>
      <div className='container'>
        <motion.div 
          className='grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className='col-span-12 bg-gradient-to-r from-primary to-secondary rounded-2xl px-4'
            variants={itemVariants}
          >
            <div className='mb-10 mt-24 lg:mx-64 lg:my-24'>
              <motion.h2 
                className='text-center font-semibold text-white mb-3'
                variants={itemVariants}
              >
                Daftar Sekarang
              </motion.h2>
              <motion.p 
                className='text-base font-normal text-white/75 text-center mb-8 capitalize'
                variants={itemVariants}
              >
                Bergabunglah dengan Bloome dan wujudkan impian masuk kampus favoritmu
              </motion.p>
              <motion.div 
                className='flex flex-col sm:flex-row gap-4 justify-center items-center'
                variants={itemVariants}
              >
                <motion.button
                  onClick={handleWhatsAppRegister}
                  className='group border border-white bg-white hover:bg-transparent text-primary hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center gap-2'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon
                    icon='mdi:whatsapp'
                    className='text-2xl'
                  />
                  Daftar via WhatsApp
                </motion.button>
                <motion.button 
                  className='group border border-white bg-transparent hover:bg-white text-white hover:text-primary px-8 py-4 rounded-full text-lg font-medium transition-all duration-300'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Login
                </motion.button>
              </motion.div>
              <motion.div 
                className='mt-6 text-center'
                variants={itemVariants}
              >
                <p className='text-white/75 text-sm'>
                  Atau hubungi kami di: <span className='font-semibold'>+62 851-5613-938</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Register 