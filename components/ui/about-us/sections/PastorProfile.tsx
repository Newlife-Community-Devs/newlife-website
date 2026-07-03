"use client"
import Image from 'next/image'
import Stats from './Stats'

const PastorProfile = () => {
  return (
    <section className="w-full bg-white py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Pastor Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/pastor-message.png"
                  alt="Rev. Michael A. Opoku - Senior Pastor"
                  width={500}
                  height={625}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Pastor Bio */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="w-35 bg-[#0033A0] text-white px-4 p-2 rounded-full text-sm font-semibold">
                Senior Pastor
             </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black">
              Rev. Michael A. Opoku
            </h2>
            
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                {`Pastor Michael brings over 15 years of ministry experience and a heart for discipleship. His passion for seeing lives transformed through the Gospel has been the driving force behind our church's growth and impact in the community.`}
              </p>
              
              <p>
                {`Under his leadership, New Life Community Baptist Church has become a beacon of hope, focusing on authentic relationships, biblical teaching, and practical faith that makes a difference in everyday life.`}
              </p>
            </div>

            <Stats/>
            
            {/* Quote */}
            <div className="bg-[#FFD700] p-6 rounded-lg">
              <p className="text-lg text-gray-800 italic font-medium">
               {` "My heart's desire is to see every member of our church family discover their purpose in God's kingdom and live it out with passion and power."`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PastorProfile
