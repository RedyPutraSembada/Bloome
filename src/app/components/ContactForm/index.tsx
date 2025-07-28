'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phnumber: '',
    Message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [loader, setLoader] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ''
    )
    setIsFormValid(isValid)
  }, [formData])

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const reset = () => {
    formData.firstname = ''
    formData.lastname = ''
    formData.email = ''
    formData.phnumber = ''
    formData.Message = ''
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoader(true)

    fetch('https://formsubmit.co/ajax/bhainirav772@gmail.com', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        Name: formData.firstname,
        LastName: formData.lastname,
        Email: formData.email,
        PhoneNo: formData.phnumber,
        Message: formData.Message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubmitted(true)
          setShowThanks(true)
          reset()

          setTimeout(() => {
            setShowThanks(false)
          }, 5000)
        }

        reset()
      })
      .catch((error) => {
        setLoader(false)
        console.log(error.message)
      })
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('Halo Bloome! Saya ingin bertanya tentang program bimbel.')
    const whatsappUrl = `https://wa.me/6281188009569?text=${message}`
    window.open(whatsappUrl, '_blank')
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const universityLogos = [
    '/images/universitas/UI.png',
    '/images/universitas/ITB.png',
    '/images/universitas/ITS.png',
    '/images/universitas/IPB.png',
    '/images/universitas/UB.png',
    '/images/universitas/UP.png',
    '/images/universitas/UJ.png',
    '/images/universitas/UAU.png',
    '/images/universitas/UDS.png',
    '/images/universitas/SMU.png',
    '/images/universitas/MU.png',
  ];

  return (
    <section className='scroll-mt-12 bg-gradient-to-br from-slate-50 to-green-50'>
      <div className='container'>
        <motion.div 
          className='relative'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Content - Two Column Layout */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
            {/* Left Column - Question */}
            <motion.div 
              className='flex flex-col justify-center md:w-1/2'
              variants={itemVariants}
            >
              <h2 className='text-2xl lg:text-2xl xl:text-3xl font-normal text-midnight_text leading-tight mb-6'>
              Bloome Education – Expert Guidance for Top University & IUP Admissions
              </h2>
            </motion.div>

            {/* Right Column - Description and CTA */}
            <motion.div 
              className='flex flex-col justify-center'
              variants={itemVariants}
            >
              <div className='space-y-6'>
                <div>
                  {/* <h3 className='text-2xl font-bold text-midnight_text mb-4'>
                    Bloome Education – Expert Guidance for Top University & IUP Admissions
                  </h3> */}
                  <p className='text-lg text-gray-700 leading-relaxed'>
                    Kick off your journey toward the future today and turn your dream school into reality with our 
                    comprehensive academic preparation and mentoring programs.
                  </p>
                </div>

                <div className='bg-white p-6 rounded-2xl shadow-lg border border-green-100'>
                  <h4 className='text-xl font-semibold text-midnight_text mb-4'>
                    Exclusive Bloome Preparation Features
                  </h4>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <div className='flex items-start gap-2'>
                      <Icon icon='mdi:check-circle' className='text-primary text-xl mt-0.5 flex-shrink-0' />
                      <span className='text-gray-700'>Expert Consulting for Undergraduate Programs</span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <Icon icon='mdi:check-circle' className='text-primary text-xl mt-0.5 flex-shrink-0' />
                      <span className='text-gray-700'>Placement Test & Learning Assessment Report</span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <Icon icon='mdi:check-circle' className='text-primary text-xl mt-0.5 flex-shrink-0' />
                      <span className='text-gray-700'>Study Modules, Practice Questions & Regular Tryouts</span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <Icon icon='mdi:check-circle' className='text-primary text-xl mt-0.5 flex-shrink-0' />
                      <span className='text-gray-700'>MMPI & SJT Preparation for Medical School Applicants</span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <Icon icon='mdi:check-circle' className='text-primary text-xl mt-0.5 flex-shrink-0' />
                      <span className='text-gray-700'>TOEFL/IELTS Test Preparation</span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <Icon icon='mdi:check-circle' className='text-primary text-xl mt-0.5 flex-shrink-0' />
                      <span className='text-gray-700'>Motivation Letter Writing Support</span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <Icon icon='mdi:check-circle' className='text-primary text-xl mt-0.5 flex-shrink-0' />
                      <span className='text-gray-700'>Mock Interview & FGD Simulations</span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <Icon icon='mdi:check-circle' className='text-primary text-xl mt-0.5 flex-shrink-0' />
                      <span className='text-gray-700'>Global University Mentorship</span>
                    </div>
                    <div className='flex items-start gap-2 md:col-span-2'>
                      <Icon icon='mdi:check-circle' className='text-primary text-xl mt-0.5 flex-shrink-0' />
                      <span className='text-gray-700'>Major Selection Consultation with Professional Psychologists</span>
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={handleWhatsAppContact}
                  className='inline-flex items-center gap-2 text-primary font-semibold text-lg hover:text-secondary transition-colors group'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className='underline'>Register Now</span>
                  <Icon 
                    icon='mdi:arrow-right' 
                    className='text-xl group-hover:translate-x-1 transition-transform' 
                  />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Scrolling University Logos */}
          <motion.div 
            className='relative overflow-hidden'
            variants={itemVariants}
          >
            <div className='flex space-x-8 animate-scroll'>
              {/* First set of logos */}
              {universityLogos.map((logo, index) => (
                <div key={index} className='flex-shrink-0'>
                  <img 
                    src={logo} 
                    alt={`University ${index + 1}`}
                    className='h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity'
                  />
                </div>
              ))}
              {/* Duplicate set for seamless scrolling */}
              {universityLogos.map((logo, index) => (
                <div key={`duplicate-${index}`} className='flex-shrink-0'>
                  <img 
                    src={logo} 
                    alt={`University ${index + 1}`}
                    className='h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity'
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {showThanks && (
            <motion.div 
              className='text-white bg-primary rounded-full px-4 text-lg mb-4.5 mt-1 absolute flex items-center gap-2'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              Terima kasih telah menghubungi kami! Kami akan segera menghubungi Anda.
              <div className='w-3 h-3 rounded-full animate-spin border-2 border-solid border-white border-t-transparent'></div>
            </motion.div>
          )}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 5s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default ContactForm
