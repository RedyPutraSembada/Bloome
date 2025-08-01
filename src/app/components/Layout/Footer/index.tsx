'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '../Header/Logo'
import { Icon } from '@iconify/react/dist/iconify.js'
import { FooterLinkType } from '@/app/types/footerlink'

const Footer = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        SetFooterlink(data.FooterLinkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <footer id='kontak' className='bg-deep-slate pt-10'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-6 lg:gap-20 md:gap-24 sm:gap-12 gap-12 pb-10'>
          <div className='col-span-2'>
            <div className='mb-5'>
              <Logo />
            </div>
            <div className='flex items-center gap-4'>
              <div className="w-full">
                <h3 className="text-green-950 text-xl font-semibold mb-4">Find Us!</h3>
                <div className="w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.6200221424445!2d106.8134025!3d-6.2109558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6aa0ce995f9%3A0xed935b94a739c157!2sMenara%20Batavia!5e0!3m2!1sid!2sid!4v1722060675371!5m2!1sid!2sid"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                
                {/* Social Media Links */}
                <div className="mt-4">
                  <h4 className="text-green-950 text-lg font-semibold mb-3">Follow Us</h4>
                  <div className="flex gap-4">
                    <Link 
                      href="https://www.instagram.com/bloomeeducation" 
                      target="_blank" 
                      className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                    >
                      <Icon icon="mdi:instagram" className="text-xl text-pink-500" />
                    </Link>
                    <Link 
                      href="https://www.tiktok.com/@bloome.education" 
                      target="_blank" 
                      className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                    >
                      <Icon icon="mdi:music-note" className="text-xl text-black" />
                    </Link>
                    <Link 
                      href="https://www.facebook.com/profile.php?id=61578488537190" 
                      target="_blank" 
                      className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                    >
                      <Icon icon="mdi:facebook" className="text-xl text-blue-600" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='flex gap-20'>
              {footerlink.map((product, i) => (
                <div key={i} className='group relative col-span-2'>
                  <p className='text-black text-xl font-semibold mb-9'>
                    {product.section}
                  </p>
                  {i === 0 ? (
                    <ul>
                    {product.links.map((item, i) => (
                      <li key={i} className='mb-1.5'>
                        <Link
                          href={item.href}
                          className='text-black/60 hover:text-primary text-base font-normal mb-6'>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  ) : (
                    <ul>
                    {product.links.map((item, i) => (
                      <li key={i} className='mb-3'>
                        <Link
                          href={item.href}
                          className='text-black/60 hover:text-primary text-base font-normal mb-6'>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className='col-span-2 sm:col-span-6 md:col-span-2'>
            <div className='flex flex-col gap-5'>
              <p className='text-black text-xl font-semibold mb-3'>
                Contact Us
              </p>
              <Link href='https://www.google.com/maps/place/Menara+Batavia/@-6.1980968,106.803929,15z/data=!4m10!1m2!2m1!1sJl.+K.H.+Mas+Mansyur+No.Kav.+126,+Karet+Tengsin,+Kecamatan+Tanah+Abang,+Kota+Jakarta+Pusat,+Daerah+Khusus+Ibukota%C2%A0Jakarta%C2%A010250!3m6!1s0x2e69f6aa0ce995f9:0xed935b94a739c157!8m2!3d-6.2107062!4d106.8155286!15sCoEBSmwuIEsuSC4gTWFzIE1hbnN5dXIgTm8uS2F2LiAxMjYsIEthcmV0IFRlbmdzaW4sIEtlY2FtYXRhbiBUYW5haCBBYmFuZywgS290YSBKYWthcnRhIFB1c2F0LCBEYWVyYWggS2h1c3VzIElidWtvdGHCoEpha2FydGHCoDEwMjUwWnkid2psIGtoIG1hcyBtYW5zeXVyIG5vIGthdiAxMjYga2FyZXQgdGVuZ3NpbiBrZWNhbWF0YW4gdGFuYWggYWJhbmcga290YSBqYWthcnRhIHB1c2F0IGRhZXJhaCBraHVzdXMgaWJ1a290YSBqYWthcnRhIDEwMjUwkgEPYnVzaW5lc3NfY2VudGVyqgGwARABKg4iCm5vIGthdiAxMjYoJjIfEAEiG4d748jAbzBtYX8pf5ha_mCNt_lv0H4ec-qjLDJ7EAIid2psIGtoIG1hcyBtYW5zeXVyIG5vIGthdiAxMjYga2FyZXQgdGVuZ3NpbiBrZWNhbWF0YW4gdGFuYWggYWJhbmcga290YSBqYWthcnRhIHB1c2F0IGRhZXJhaCBraHVzdXMgaWJ1a290YSBqYWthcnRhIDEwMjUw4AEA!16s%2Fm%2F0wfj_1v?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D' target='_blank' className='flex item-center'>
                <Icon
                  icon='solar:point-on-map-perspective-bold'
                  className='text-primary text-3xl lg:text-2xl inline-block me-2'
                />
                <p className='text-black/60 hover:text-primary text-base'>
                Menara Batavia, Jakarta Pusat
                </p>
              </Link>
              <Link href='tel:+6281188009569' className='flex items-center w-fit'>
                <Icon
                  icon='mdi:whatsapp'
                  className='text-primary text-3xl lg:text-2xl inline-block me-2'
                />
                <p className='text-black/60 hover:text-primary text-base'>
                  +62 811-8800-9569
                </p>
              </Link>
              <Link href='mailto:Bloomeeducation@gmail.com' className='flex items-center w-fit'>
                <Icon
                  icon='solar:mailbox-bold'
                  className='text-primary text-3xl lg:text-2xl inline-block me-2'
                />
                <p className='text-black/60 hover:text-primary text-base'>
                  Bloomeeducation@gmail.com
                </p>
              </Link>
              
              {/* Jam Operasional */}
              <div className='mt-4'>
                <p className='text-black text-lg font-semibold mb-3'>
                  Jam Operasional
                </p>
                <div className='space-y-2'>
                  <div className='flex justify-between items-center'>
                    <span className='text-black/60 text-sm'>Senin - Jumat</span>
                    <span className='text-black/60 text-sm font-medium'>08:00 - 20:00</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-black/60 text-sm'>Sabtu - Minggu</span>
                    <span className='text-black/60 text-sm font-medium'>08:00 - 15:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10 lg:flex items-center justify-between border-t border-black/10 py-5'>
          <p className='text-black/50 text-base text-center lg:text-start font-normal'>
            ©2025 Bloome. All Rights Reserved by{' '}
            <Link
              href='https://bloome.id/'
              target='_blank'
              className='hover:text-primary hover:underline'>
              {' '}
              Bloome Education
            </Link>
          </p>
          <div className='flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start'>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
