"use client";

import { Icon } from '@iconify/react/dist/iconify.js'
import { motion } from 'framer-motion'

const WhyBloome = () => {
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

  return (
    <section className='bg-slate-gray w-full overflow-hidden'>
      <div className='container'>
        {/* Kenapa Harus Pilih Bloome Section */}
        <motion.div 
          className=''
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
        
        {/* Statistics Section */}
        <motion.div 
          className='mt-16'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className='text-center border-r border-gray-600 pr-10 md:pr-8'
              variants={itemVariants}
            >
              <motion.h3 
                className='text-3xl md:text-4xl font-bold text-primary mb-2'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                1000+
              </motion.h3>
              <motion.p 
                className='text-black/70 text-sm md:text-base font-medium'
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Siswa Lulus PTN
              </motion.p>
            </motion.div>
            
            <motion.div 
              className='text-center md:border-r md:border-gray-600 pr-10 md:pr-8'
              variants={itemVariants}
            >
              <motion.h3 
                className='text-3xl md:text-4xl font-bold text-primary mb-2'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                95%
              </motion.h3>
              <motion.p 
                className='text-black/70 text-sm md:text-base font-medium'
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Tingkat Kelulusan PTN
              </motion.p>
            </motion.div>
            
            <motion.div 
              className='text-center border-r border-gray-600 pr-10 md:pr-8'
              variants={itemVariants}
            >
              <motion.h3 
                className='text-3xl md:text-4xl font-bold text-primary mb-2'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                10.000+
              </motion.h3>
              <motion.p 
                className='text-black/70 text-sm md:text-base font-medium'
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Latihan Soal & Tryout
              </motion.p>
            </motion.div>
            
            <motion.div 
              className='text-center'
              variants={itemVariants}
            >
              <motion.h3 
                className='text-3xl md:text-4xl font-bold text-primary mb-2'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                100%
              </motion.h3>
              <motion.p 
                className='text-black/70 text-sm md:text-base font-medium'
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Guru PTN Terbaik & Berpengalaman
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyBloome 