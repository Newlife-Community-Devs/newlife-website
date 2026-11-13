"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

const AboutHero = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  return (
    <section className="relative w-full min-h-[70vh] md:h-[640px] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <Image
          src="/images/about-hero.jpg"
          alt="Newlife Community Baptist Church - About Us"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/75 to-navy/60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-gold text-sm sm:text-base md:text-lg font-semibold uppercase tracking-[0.2em] mb-4"
        >
          Who We Are
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading text-[clamp(2rem,6vw,4.5rem)] font-bold mb-5 md:mb-6 leading-[1.1] tracking-tight"
        >
          <span className="text-gold">Newlife Community Baptist Church</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto"
        >
          Discover our heart for God, passion for people, and commitment to
          building His kingdom.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
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

export default AboutHero;
