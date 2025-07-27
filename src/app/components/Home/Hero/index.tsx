"use client";

import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { motion } from 'framer-motion'

const Hero = () => {
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

  return (
    <section id='home-section' className='bg-slate-gray w-full overflow-hidden'>
      <div className='container pt-20 lg:pt-16'>
        <motion.div 
          className='grid grid-cols-1 lg:grid-cols-12 lg:gap-1 gap-10 items-center'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className='col-span-6 flex flex-col gap-8 items-center lg:items-start' variants={itemVariants}>
            {/* <motion.div className='flex gap-2 mx-auto lg:mx-0' variants={itemVariants}>
              <Icon
                icon='solar:verified-check-bold'
                className='text-success text-xl inline-block me-2'
              />
              <p className='text-success text-sm font-semibold text-center lg:text-start tracking-widest uppercase'>
                Dapatkan diskon 30% untuk pendaftaran pertama
              </p>
            </motion.div> */}
            <motion.h1 
              className='text-midnight_text lg:text-start text-center font-semibold leading-tight capitalize text-4xl sm:text-5xl lg:text-65'
              variants={itemVariants}
            >
              Your Gateway to Top Universities
            </motion.h1>
            <motion.p 
              className='text-black/70 text-base sm:text-lg lg:text-start text-center max-w-xl capitalize'
              variants={itemVariants}
            >
              Bloome Education adalah lembaga konsultan jasa pendidikan yang berfokus pada penyediaan
              bimbingan belajar intensif bagi siswa-siswi SMA kelas 12. Lembaga ini lahir berasal
              dari kesadaran para alumni yang berasal dari UI, UGM, ITB untuk membentuk
              lembaga belajar yang unggul dan berkualitas. Kami membantu siswa-siswi SMA
              kelas 12 mempersiapkan diri menghadapi UTBK (Ujian Tertulis Berbasis Komputer),
              Ujian Mandiri PTN, hingga Ujian International Undergraduate Program (IUP).
              Berlokasi di Menara Batavia, Jakarta, Bloome Education hadir dengan visi untuk
              membuka jalan menuju kampus impian melalui bimbingan berkualitas dan strategi
              belajar yang efektif.
            </motion.p>
            {/* <motion.div 
              className='flex items-center justify-between pt-10 lg:pt-4 flex-wrap gap-4'
              variants={itemVariants}
            >
              <motion.div className='flex gap-2' variants={featureVariants}>
                <Image
                  src='/images/banner/check-circle.svg'
                  alt='check-image'
                  width={30}
                  height={30}
                  className='smallImage'
                />
                <p className='text-sm sm:text-lg font-normal text-black'>
                  Jadwal Fleksibel
                </p>
              </motion.div>
              <motion.div className='flex gap-2' variants={featureVariants}>
                <Image
                  src='/images/banner/check-circle.svg'
                  alt='check-image'
                  width={30}
                  height={30}
                  className='smallImage'
                />
                <p className='text-sm sm:text-lg font-normal text-black'>
                  Mentor Berpengalaman
                </p>
              </motion.div>
              <motion.div className='flex gap-2' variants={featureVariants}>
                <Image
                  src='/images/banner/check-circle.svg'
                  alt='check-image'
                  width={30}
                  height={30}
                  className='smallImage'
                />
                <p className='text-sm sm:text-lg font-normal text-black'>
                  Garansi Lolos
                </p>
              </motion.div>
            </motion.div> */}
          </motion.div>
          <motion.div 
            className='col-span-6 flex justify-center'
            variants={imageVariants}
          >
            <Image
              src='/images/banner/mahila.webp'
              alt='Model dengan almamater'
              width={1000}
              height={805}
              className='w-full h-auto max-w-full'
            />
          </motion.div>
        </motion.div>
        
        {/* Kenapa Harus Pilih Bloome Section */}
        <motion.div 
          className='mt-20'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h2 
            className='text-midnight_text text-center font-semibold mb-8'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            WHY BLOOME?
          </motion.h2>
          <motion.p 
            className='text-black/70 text-center mb-8 max-w-4xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            At Bloome Education, we don't just prepare students for exams — we prepare them for life. Through personalized mentoring and our proven 3-Pillar Approach, we help students unlock their true potential, build strong, consistent study habits, and achieve admission into their dream universities.
          </motion.p>
          <motion.p 
            className='text-black/70 text-center mb-12 max-w-4xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Bloome isn't just another tutoring center, it's a place where students grow with clarity, confidence, and purpose. Bloome makes you ready. For exams, for university, for life. Not just tutoring. Bloome builds you up.
          </motion.p>
          <motion.div 
            className='grid grid-cols-1 md:grid-cols-3 gap-8'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div className='text-center' variants={itemVariants}>
              <motion.div 
                className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Icon
                  icon='solar:star-linear'
                  className='text-primary text-2xl'
                />
              </motion.div>
              <h3 className='text-lg font-semibold mb-2'>Unlock True Potential</h3>
              <p className='text-black/70 text-sm'>
                We help students discover and maximize their natural abilities through personalized guidance
              </p>
            </motion.div>
            <motion.div className='text-center' variants={itemVariants}>
              <motion.div 
                className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Icon
                  icon='solar:notebook-minimalistic-outline'
                  className='text-primary text-2xl'
                />
              </motion.div>
              <h3 className='text-lg font-semibold mb-2'>Build Study Habits</h3>
              <p className='text-black/70 text-sm'>
                Develop strong, consistent study habits that last beyond exams and into university life
              </p>
            </motion.div>
            <motion.div className='text-center' variants={itemVariants}>
              <motion.div 
                className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Icon
                  icon='solar:target-linear'
                  className='text-primary text-2xl'
                />
              </motion.div>
              <h3 className='text-lg font-semibold mb-2'>Achieve Dream Universities</h3>
              <p className='text-black/70 text-sm'>
                Successfully gain admission into your dream universities through our proven approach
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
