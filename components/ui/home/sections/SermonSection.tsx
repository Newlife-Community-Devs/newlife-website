"use client";

import { motion } from "motion/react";
import { fadeInUp, scaleIn } from "@/utils/animations";

const YOUTUBELINK = process.env.YOUTUBE_LIVE_LINK!;

const SermonSection = () => {
  return (
    <section className="w-full bg-[rgba(255,215,0,0.04)] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-[clamp(1.75rem,4vw,3rem)] font-bold text-[#1A1A1A] text-center mb-3"
        >
          Latest Sermon
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base sm:text-lg md:text-xl text-[#2E2E2E] text-center mb-10 sm:mb-12 max-w-3xl mx-auto"
        >
          Watch our latest message and grow in your faith journey
        </motion.p>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2">
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-inner">
                <iframe
                  className="w-full h-full"
                  src={YOUTUBELINK}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center px-3 py-1 bg-[#FFD700]/15 rounded-full">
                  <span className="text-xs font-semibold text-[#E6C200] uppercase tracking-wider">
                    Current Series
                  </span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1A1A1A] leading-tight">
                  The Holy Spirit, Power Behind God&apos;s Kingdom
                </h3>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                  Experience the transformative power of the Holy Spirit in your
                  daily walk with Christ.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center text-[#2E2E2E] font-bold text-sm">
                  N
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">
                    NLCBC Media
                  </p>
                  <p className="text-xs text-[#6B7280]">Latest Message</p>
                </div>
              </div>


            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6"
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-[#24195D] rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                  />
                </svg>
              </div>
              <span className="font-heading text-base sm:text-lg font-semibold text-[#1A1A1A]">
                Listen to the Podcast
              </span>
            </div>
            <iframe
              src="https://player.rss.com/the-newlife-podcast/latest?theme=default&v=2"
              title="The Newlife Podcast"
              width="100%"
              height="200px"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              scrolling="no"
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SermonSection;
