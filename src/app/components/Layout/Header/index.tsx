'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import Signin from '@/app/components/Auth/SignIn'
import SignUp from '@/app/components/Auth/SignUp'
import { Icon } from '@iconify/react/dist/iconify.js'
import { HeaderType } from '@/app/types/menu'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [navLink, setNavLink] = useState<HeaderType[]>([])

  const signInRef = useRef<HTMLDivElement>(null)
  const signUpRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setNavLink(data.HeaderData)
      } catch (error) {
        console.error('Error fetching service:', error)
      }
    }
    fetchData()
  }, [])

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false)
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false)
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen, isSignInOpen, isSignUpOpen])

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen])

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        sticky ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm shadow-sm py-4 lg:py-4'
      }`}>
      <div className='w-full'>
        <div className='container flex items-center justify-between'>
          <Logo />
          <nav className='hidden lg:flex grow items-center lg:gap-5 xl:gap-8 justify-center'>
            {navLink.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavbarOpen(true)}
            className='lg:hidden hover:cursor-pointer p-2 rounded-lg hover:bg-gray-100'
            aria-label='Open menu Modal'>
            <Icon
              icon='material-symbols:menu-rounded'
              width={24}
              height={24}
              className='text-black hover:text-primary'
            />
          </button>
          
        </div>
        {navbarOpen && (
          <div 
            className='fixed top-0 left-0 w-full h-screen bg-black/50 z-40' 
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '100vh' }}
          />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-screen w-full max-w-xs bg-white shadow-lg transform transition-transform duration-300 ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50 overflow-hidden`}
          style={{ backgroundColor: 'white', height: '100vh' }}>
          <div className='flex items-center justify-between gap-2 p-4 bg-white border-b border-gray-200'>
            <div>
              <Logo />
            </div>
            {/*  */}
            <button
              onClick={() => setNavbarOpen(false)}
              className='hover:cursor-pointer'
              aria-label='Close menu Modal'>
              <Icon
                icon='material-symbols:close-rounded'
                width={24}
                height={24}
                className='text-black hover:text-primary text-24 inline-block me-2'
              />
            </button>
          </div>
          <div className='flex flex-col h-full bg-white overflow-y-auto'>
            <nav className='flex flex-col items-start p-4 bg-white flex-1'>
              {navLink.map((item, index) => (
                <MobileHeaderLink 
                  key={index} 
                  item={item} 
                  onLinkClick={() => setNavbarOpen(false)}
                />
              ))}
            </nav>
            <div className='p-4 bg-white border-t border-gray-200'>
              <div className='flex flex-col space-y-4 w-full bg-white'>
                <Link
                  href='#'
                  className='bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white text-center'
                  onClick={() => {
                    setIsSignInOpen(true)
                    setNavbarOpen(false)
                  }}>
                  Sign In
                </Link>
                <Link
                  href='#'
                  className='bg-primary border border-primary text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-primary text-center'
                  onClick={() => {
                    setIsSignUpOpen(true)
                    setNavbarOpen(false)
                  }}>
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
