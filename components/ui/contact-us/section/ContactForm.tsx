/** @format */

'use client'

import React from 'react'
import { ChevronDown, Send } from 'lucide-react'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

const ContactForm = () => {
  return (
    <section className='w-full bg-white py-20 px-4 lg:px-8'>
      <div className='text-center '>
        <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold mb-5 '>
          Send Us a Message
        </h1>
        <p className='font-medium mb-20 text-lg lg:text-xl xl:text-2xl'>
          Whether you have questions about our services, need a prayer, or want
          to share a<br /> testimony, we're here to listen and support you.
        </p>
      </div>

      <div className='w-full flex justify-center px-4 py-10'>
        <div className='w-[1299] h-[1134] rounded-2xl p-8 bg-[#FCFCFC] shadow-md mx-auto '>
          <h2 className='text-center text-xl lg:text-4xl text-[#24195D] mt-15 font-bold mb-10'>
            Contact Form
          </h2>
          <form className='space-y-6 m-10'>
            <div>
              <label className='block mb-1 font-bold'>Full name</label>
              <input
                type='text'
                placeholder='Enter your full name here... '
                className='w-[1139] h-[64.66] border border-gray-300 px-4 rounded-lg outline-none'
              />
            </div>
            <div>
              <label className='block mb-1 font-bold'>E-mail</label>
              <input
                type='e-mail'
                placeholder='Enter your email address here... '
                className='w-[1139] h-[64.66] border border-gray-300 px-4 rounded-lg outline-none'
              />
            </div>
            <div>
              <label className='block mb-1 font-bold'>Phone number</label>
              <input
                type='text'
                placeholder='Enter your phone number here... '
                className='w-[1139] h-[64.66] border border-[#C1C5CE] px-4 rounded-lg outline-none'
              />
            </div>
            <div className='w-[1139]'>
              <label className='block mb-1 font-bold'>Subject</label>
              <Select>
                <SelectTrigger className='w-full !h-16 rounded-lg border border-gray-300 px-4 '>
                  <SelectValue
                    className='h-full flex items-center'
                    placeholder='Select a subject'
                  />
                </SelectTrigger>

                <SelectContent className='rounded-lg border border-gray-300 bg-white shadow-lg'>
                  <SelectItem
                    value='enquiry'
                    className='h-[64.66] py-3 px-4 text-gray-700'
                  >
                    Enquiry
                  </SelectItem>
                  <SelectItem
                    value='prayer request'
                    className='h-[64.66] py-3 px-4 text-gray-700'
                  >
                    Prayer Request
                  </SelectItem>
                  <SelectItem
                    value='testimony'
                    className='h-[64.66] py-3 px-4 text-gray-700'
                  >
                    Testimony
                  </SelectItem>
                  <SelectItem
                    value='couseling'
                    className='h-[64.66] py-3 px-4 text-gray-700'
                  >
                    Counseling
                  </SelectItem>
                  <SelectItem
                    value='feedback / suggestion'
                    className='h-[64.66] px-4 text-gray-700'
                  >
                    Feedback / Suggestion
                  </SelectItem>
                  <SelectItem
                    value='other'
                    className='h-[64.66] px-4 text-gray-700'
                  >
                    Other
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className='block mb-1 font-bold'>Message</label>
              <textarea
                placeholder='Write your message here... '
                className='w-[1139] h-[182] border border-gray-300 rounded-lg py-4 px-3 outlin-none'
              />
            </div>
            <div className='mt-14'>
              <button type='submit' className='bg-[#24195D] text-white w-[1139] h-[56] rounded-2xl font-medium'>
                Send
                <Send className='inline-block ml-2 mb-1' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
