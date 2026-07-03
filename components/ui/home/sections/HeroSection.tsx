"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  return (
    <section className="relative w-full min-h-[90vh] md:h-[790px] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <Image
          src="/images/home-hero.png"
          alt="Newlife Community Baptist Church - Worship Service"
          fill
          className="object-cover"
          priority
        />
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 bg-gradient-to-br from-[#001F3F]/80 via-[#001F3F]/70 to-[#001F3F]/60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 md:mb-8"
        >
          <div className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 bg-[#FFFCEB]/90 rounded-full shadow-sm">
            <span className="text-[#2E2E2E] text-sm sm:text-base md:text-lg font-semibold">
              {`${new Date().getFullYear()} Theme: "The Holy Spirit, Power Behind God's Kingdom"`}
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading text-[clamp(2rem,7vw,4.5rem)] font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight"
        >
          Welcome to
          <br />
          <span className="text-[#FFD700]">Newlife Community Baptist Church</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-2"
        >
          A place where faith grows, community thrives, and lives are
          transformed through God&apos;s love and grace.
        </motion.p>


      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
