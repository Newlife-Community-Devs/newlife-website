/** @format */

'use client'
import React from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react'

const ContactHero = () => {
  return (
    <section className='relative w-full h-[641] flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0'></div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#001F3F]/80 to-[#001F3F]/60'></div>

      {/* Content */}
      <div className='relative z-10 text-center px-4 lg:px-8 max-w-6xl mx-auto'>
        <h1 className='text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6'>
          Get in Touch with Us
        </h1>
        <p className='text-xl lg:text-2xl font-medium text-white mb-8 max-w-4xl mx-auto'>
          We'd love to hear from you — whether for enquiries, prayer request, or
          <br /> fellowship.
        </p>

        <div className='absolute left-0 w-full flex items-center justify-center gap-3 pb-4'>          
          <span className='h-[2px] w-12 bg-yellow-400'></span>
          <Heart className='w-5 h-5 text-yellow-400' strokeWidth={2} />
          <span className='h-[2px] w-12 bg-yellow-400'></span>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
