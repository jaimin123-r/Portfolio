import React, { useState, useEffect } from 'react'
import port from '../../public/portfo_img.jpg'
import { GiHamburgerMenu } from "react-icons/gi"
import { MdClose } from "react-icons/md"
import { Link } from 'react-scroll'
import AuthForm from './AuthForm'

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false)
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const btnClick = () => {
    setShowLogin(!showLogin)
    setMenu(false)
  }

  const navItems = [
    { id: 1, title: "Home" },
    { id: 2, title: "About" },
    { id: 3, title: "Portfolio" },
    { id: 4, title: "Contact" }
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white shadow-md'
      }`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16 lg:h-20'>
            
            {/* Logo Section */}
            <div className='flex items-center space-x-3 cursor-pointer group'>
              <div className='relative'>
                <img 
                  src={port} 
                  className='h-10 w-10 lg:h-12 lg:w-12 rounded-full object-cover ring-2 ring-purple-200 group-hover:ring-purple-400 transition-all duration-300' 
                  alt="Jaimin Rathod" 
                />
                <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white'></div>
              </div>
              <div className='flex flex-col'>
                <h1 className='font-bold text-lg lg:text-xl text-gray-800 group-hover:text-purple-700 transition-colors duration-300'>
                  Jaimin
                  <span className='text-purple-600 ml-0.5'>Rathod</span>
                </h1>
                <p className='text-xs lg:text-sm text-gray-500 font-medium'>Web Developer</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-1 lg:space-x-3'>
              <ul className='flex items-center space-x-1 lg:space-x-3'>
                {navItems.map(({ id, title }) => (
                  <li key={id}>
                    <Link
                      to={title}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      activeClass='text-purple-600 bg-purple-50'
                      className='px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200 cursor-pointer'
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <button 
                onClick={btnClick}
                className='ml-4 lg:ml-6 px-4 lg:px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm lg:text-base font-medium rounded-lg hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200'
              >
                Get In Touch
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden'>
              <button
                onClick={() => setMenu(!menu)}
                className='p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500'
                aria-label='Toggle menu'
              >
                {!menu ? <GiHamburgerMenu size={24} /> : <MdClose size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          menu 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className='bg-white border-t border-gray-100 shadow-lg'>
            <div className='px-4 py-6 space-y-4'>
              <ul className='space-y-3'>
                {navItems.map(({ id, title }) => (
                  <li key={id}>
                    <Link
                      onClick={() => setMenu(false)}
                      to={title}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      activeClass='text-purple-600 bg-purple-50'
                      className='block px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200 cursor-pointer'
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Mobile CTA Button */}
              <div className='pt-4 border-t border-gray-100'>
                <button 
                  onClick={btnClick}
                  className='w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-lg hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200'
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Inquiry Form  */}
      {showLogin && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
          <div 
            className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm'
            onClick={() => setShowLogin(false)}
          ></div>
          <div className='relative'>
            <AuthForm setShowLogin={setShowLogin} />
          </div>
        </div>
      )}
    </>
  )
}