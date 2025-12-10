/** @format */

'use client'
import React from 'react'
import Image from 'next/image'

const AboutHero = () => {
  return (
    <section className='relative w-full h-[641px] flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          src='/images/about-hero.png'
          alt='Newlife Community Baptist Church - About Us'
          fill
          className='object-cover'
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className='absolute inset-0 bg-gradient-to-br from-[#001F3F]/80 to-[#001F3F]/60'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 text-center px-4 lg:px-8 max-w-6xl mx-auto'>
        <h1 className='text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight'>
          About
          <br />
          Newlife Community Baptist Church
        </h1>
        <p className='text-xl lg:text-2xl text-white mb-8 leading-relaxed max-w-4xl mx-auto'>
          Discover our heart for God, passion for people, and commitment to
          building His kingdom.
        </p>
      </div>
    </section>
  )
}

export default AboutHero
