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
    const whatsappUrl = `https://wa.me/628515613938?text=${message}`
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

  return (
    <section id='kontak' className='scroll-mt-12'>
      <div className='container'>
        <motion.div 
          className='relative'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className='mb-9 text-midnight_text'
            variants={itemVariants}
          >
            Contact Us
          </motion.h2>
          
          {/* Contact Info */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
            <motion.div 
              className='bg-white p-6 rounded-2xl shadow-md border border-black/10'
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className='text-xl font-semibold mb-4 text-midnight_text'>Informasi Kontak</h3>
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <Icon
                    icon='mdi:whatsapp'
                    className='text-primary text-2xl'
                  />
                  <div>
                    <p className='font-medium'>Nomor WA Admin</p>
                    <p className='text-black/60'>+62 851-5613-938</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <Icon
                    icon='solar:point-on-map-perspective-bold'
                    className='text-primary text-2xl'
                  />
                  <div>
                    <p className='font-medium'>Lokasi Bimbel Bloome</p>
                    <p className='text-black/60'>Jakarta, Indonesia</p>
                  </div>
                </div>
                <motion.button
                  onClick={handleWhatsAppContact}
                  className='w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon icon='mdi:whatsapp' className='text-xl' />
                  Chat WhatsApp
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div 
              className='bg-white p-6 rounded-2xl shadow-md border border-black/10'
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className='text-xl font-semibold mb-4 text-midnight_text'>Jam Operasional</h3>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span>Senin - Jumat</span>
                  <span className='font-medium'>08:00 - 21:00</span>
                </div>
                <div className='flex justify-between'>
                  <span>Sabtu</span>
                  <span className='font-medium'>08:00 - 18:00</span>
                </div>
                <div className='flex justify-between'>
                  <span>Minggu</span>
                  <span className='font-medium'>09:00 - 16:00</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          {/* <div className='relative border px-6 py-2 rounded-2xl'>
            <form
              onSubmit={handleSubmit}
              className='flex flex-wrap w-full m-auto justify-between'>
              <div className='sm:flex gap-6 w-full'>
                <div className='mx-0 my-2.5 flex-1'>
                  <label
                    htmlFor='fname'
                    className='pb-3 inline-block text-base'>
                    Nama Depan
                  </label>
                  <input
                    id='fname'
                    type='text'
                    name='firstname'
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder='Ahmad'
                    className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                  />
                </div>
                <div className='mx-0 my-2.5 flex-1'>
                  <label
                    htmlFor='lname'
                    className='pb-3 inline-block text-base'>
                    Nama Belakang
                  </label>
                  <input
                    id='lname'
                    type='text'
                    name='lastname'
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder='Rizki'
                    className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                  />
                </div>
              </div>
              <div className='sm:flex gap-6 w-full'>
                <div className='mx-0 my-2.5 flex-1'>
                  <label
                    htmlFor='email'
                    className='pb-3 inline-block text-base'>
                    Email
                  </label>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='ahmad.rizki@email.com'
                    className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                  />
                </div>
                <div className='mx-0 my-2.5 flex-1'>
                  <label
                    htmlFor='Phnumber'
                    className='pb-3 inline-block text-base'>
                    Nomor Telepon
                  </label>
                  <input
                    id='Phnumber'
                    type='tel'
                    name='phnumber'
                    placeholder='+6281234567890'
                    value={formData.phnumber}
                    onChange={handleChange}
                    className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                  />
                </div>
              </div>
              <div className='w-full mx-0 my-2.5 flex-1'>
                <label htmlFor='message' className='text-base inline-block'>
                  Pesan
                </label>
                <textarea
                  id='message'
                  name='Message'
                  value={formData.Message}
                  onChange={handleChange}
                  className='w-full mt-2 rounded-2xl px-5 py-3 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                  placeholder='Tulis pesan Anda di sini...'></textarea>
              </div>
              <div className='mx-0 my-2.5 w-full'>
                <button
                  type='submit'
                  disabled={!isFormValid || loader}
                  className={`border leading-none px-6 text-lg font-medium py-4 rounded-full 
                    ${
                      !isFormValid || loader
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-primary border-primary text-white hover:bg-transparent hover:text-primary cursor-pointer'
                    }`}>
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div> */}
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
    </section>
  )
}

export default ContactForm
