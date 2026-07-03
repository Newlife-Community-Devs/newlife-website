"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/utils/animations";

const WelcomeSection = () => {
  return (
    <section className="w-full bg-[rgba(255,215,0,0.04)] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
        >
          <motion.div
            variants={fadeInLeft}
            className="w-full lg:w-[38%]"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/pastor-message.png"
                alt="Reverend Michael Opoku - Pastor of Newlife Community Baptist Church"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="w-full lg:w-[62%] space-y-5 sm:space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-[#1A1A1A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#1A1A1A]">
                Welcome Message
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
                Welcome to New Life Community Baptist Church, a vibrant family of
                believers committed to growing in Christ and serving our
                community. As part of the Ghana Baptist Convention, we stand on a
                rich heritage of faith while embracing God&apos;s calling for
                this generation.
              </p>

              <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
                Our church is more than a building or weekly service — we are a
                community united by God&apos;s love, dedicated to making
                disciples who will transform Ghana and beyond. Whether
                you&apos;re exploring faith for the first time or seeking a
                church home, you&apos;ll find warmth, authenticity, and purpose
                here.
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#0054C2] font-medium">
              ~ Rev. Michael A. Opoku
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16"
        >
          <motion.div
            variants={fadeInLeft}
            whileHover={{ y: -5 }}
            className="bg-white border-l-4 border-[#D62828] rounded-xl p-6 sm:p-8 shadow-md"
          >
            <div className="flex items-center gap-4 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D62828]/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#D62828]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#1A1A1A]">
                Our Mission
              </h3>
            </div>
            <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
              To spread God&apos;s love and grace through worship, fellowship,
              and community service.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            whileHover={{ y: -5 }}
            className="bg-white border-l-4 border-[#0054C2] rounded-xl p-6 sm:p-8 shadow-md"
          >
            <div className="flex items-center gap-4 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0054C2]/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#0054C2]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#1A1A1A]">
                Our Vision
              </h3>
            </div>
            <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
              A thriving community where every person experiences God&apos;s
              transformative love.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
