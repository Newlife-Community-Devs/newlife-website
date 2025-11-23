import React from "react";

const YOUTUBELINK = process.env.YOUTUBE_LIVE_LINK!;
const SermonSection = () => {
  return (
    <section className="w-full bg-[#FCFCFC] py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-black text-center mb-8">
          Latest Sermon
        </h2>

        <div className="bg-white border border-[#6B7280] rounded-xl p-8 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Video Player Placeholder */}
            <div className="relative w-full ">
              <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src={YOUTUBELINK}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Sermon Details */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SermonSection;
