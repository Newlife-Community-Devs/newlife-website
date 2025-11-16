/** @format */

'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className='w-full h-[90px] bg-white shadow-[0px_4px_4px_0px_rgba(107,114,128,0.08)] flex items-center justify-between px-8 lg:px-20'>
        {/* Logo placeholder - you can add your church logo here */}
        <div className='flex-shrink-0'>
          <Image
            src='/images/nav-logo.png'
            alt='Newlife'
            width={160}
            height={90}
          />
        </div>

        {/* Navigation Menu */}
        <div className='hidden lg:flex items-center space-x-5'>
          <Link
            href='/'
            className='text-[#1A1A1A] text-base font-normal hover:text-[#FFD700] transition-colors'
          >
            Home
          </Link>
          <a
            href='/about-us'
            className='text-[#1A1A1A] text-base font-normal hover:text-[#FFD700] transition-colors'
          >
            About Us
          </a>
          <a
            href='#'
            className='text-[#1A1A1A] text-base font-normal hover:text-[#FFD700] transition-colors'
          >
            Ministries
          </a>
          <a
            href='#'
            className='text-[#1A1A1A] text-base font-normal hover:text-[#FFD700] transition-colors'
          >
            Sermons
          </a>

          <div className='relative group'>
            <button className='flex items-center space-x-1 text-[#1A1A1A] text-base font-normal hover:text-[#FFD700] transition-colors'>
              <span>Events</span>
              <svg
                className='w-5 h-5 transition-transform group-hover:rotate-180'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
            {/* Dropdown menu - you can implement this later */}
          </div>
          <a
            href='#'
            className='text-[#1A1A1A] text-base font-normal hover:text-[#FFD700] transition-colors'
          >
            Contact
          </a>
          <a
            href='/prayer-request'
            className='text-[#1A1A1A] text-base font-normal hover:text-[#FFD700] transition-colors'
          >
            Prayer Request
          </a>
        </div>

        {/* Join Us Button */}
        <div className='flex-shrink-0'>
          <button className='bg-[#FFD700] text-[#2E2E2E] px-6 py-3 rounded-xl border border-[#2E2E2E] border-opacity-20 text-sm font-normal hover:bg-[#E6C200] transition-colors'>
            Join Us
          </button>
        </div>

        {/* Mobile menu button */}
        <div className='lg:hidden flex items-center'>
          <button
            className='inline-flex items-center justify-center rounded-md text-[#1A1A1A] 
        hover:text-[#FFD700] transition-colors duration-200'
            onClick={toggleNavbar}
          >
            {isOpen ? (
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className='lg:hidden absolute top-[90px] inset-0 z-50 w-full h-1/2 bg-black shadow-md transition-all duration-300'>
          <div className='flex flex-col w-full space-y-2'>
            <Link
              href='/'
              className='block w-full text-white text-base font-normal hover:bg-white hover:text-black rounded-lg p-3 transition-colors duration-300 text-center'
            >
              Home
            </Link>
            <a
              href='/about-us'
              className='w-full text-white text-base font-normal hover:bg-white hover:text-black rounded-lg p-3 transition-colors duration-300 text-center'
            >
              About Us
            </a>
            <a
              href='#'
              className='w-full text-white text-base font-normal hover:bg-white hover:text-black rounded-lg p-3 transition-colors duration-300 text-center'
            >
              Ministries
            </a>
            <a
              href='#'
              className='w-full text-white text-base font-normal hover:bg-white hover:text-black rounded-lg p-3 transition-colors duration-300 text-center'
            >
              Sermons
            </a>
            <a
              href='#'
              className='w-full text-white text-base font-normal hover:bg-white hover:text-black rounded-lg p-3 transition-colors duration-300 text-center'
            >
              Events
            </a>
            <a
              href='#'
              className='w-full text-white text-base font-normal hover:bg-white hover:text-black rounded-lg p-3 transition-colors duration-300 text-center'
            >
              Contact
            </a>
            <a
              href='/prayer-request'
              className='w-full text-white text-base font-normal hover:bg-white hover:text-black rounded-lg p-3 transition-colors duration-300 text-center'
            >
              Prayer Request
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
