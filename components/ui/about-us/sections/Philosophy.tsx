"use client"

const Philosophy = () => {
  return (
    <section className="w-full bg-white py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Our Ministry Philosophy
          </h2>
          <p className="text-xl lg:text-2xl text-black max-w-4xl mx-auto">
            Our ministry is built on biblical foundations with clear purpose and measurable outcomes
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Our Purpose Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Icon */}
              <div className="w-24 h-24 bg-[rgba(51,34,148,0.2)] rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-[#24195D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              
              {/* Tag */}
              <div className="bg-[#24195D] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                Our Purpose
              </div>
              
              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                Glorifying God by making disciples who exalt God, edify other believers and evangelize unbelievers starting in her own local community and extending discipline making to all the world.
              </p>
              
              {/* Learn More Button */}
              <button className="flex items-center gap-2 text-[#6B7280] hover:text-[#24195D] transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          {/* Our Product Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Icon */}
              <div className="w-24 h-24 bg-[rgba(214,40,40,0.2)] rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-[#D62828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              
              {/* Tag */}
              <div className="bg-[#D62828] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                Our Product
              </div>
              
              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                Mature, growing disciples who will emerge as leaders. We define a disciple as a believer who walks with God, lives the word, contributes to the work, and impacts the world.
              </p>
              
              {/* Learn More Button */}
              <button className="flex items-center gap-2 text-[#6B7280] hover:text-[#D62828] transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default Philosophy
