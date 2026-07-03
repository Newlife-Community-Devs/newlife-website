"use client";

import { events } from "@/constants";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { PanInfo } from "framer-motion";

const UpcomingSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const handleDragEnd = (_: PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    const { offset, velocity } = info;
    if (offset.x < -swipeThreshold || velocity.x < -500) {
      nextSlide();
    } else if (offset.x > swipeThreshold || velocity.x > 500) {
      prevSlide();
    }
  };

  const currentEvent = events[currentSlide];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 400 : -400,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 400 : -400,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-[clamp(1.75rem,4vw,3rem)] font-bold text-[#1A1A1A] text-center mb-3"
        >
          Upcoming Events
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base sm:text-lg md:text-xl text-[#2E2E2E] text-center mb-10 sm:mb-12 max-w-3xl mx-auto"
        >
          Join us for our exciting upcoming church events!
        </motion.p>

        <div className="bg-gradient-to-br from-[#FAF1DE] to-[#FAF1DE]/60 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg relative overflow-hidden">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center cursor-grab active:cursor-grabbing"
            >
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video bg-gradient-to-br from-[#24195D] to-[#D62828] rounded-xl overflow-hidden">
                  <div className="absolute top-3 left-3 z-10">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 text-white text-xs font-bold">
                      {currentEvent.badge}
                    </div>
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <div className="text-3xl sm:text-4xl font-bold mb-1">
                        {currentEvent.preview}
                      </div>
                      <div className="text-sm sm:text-base text-white/80">
                        {currentEvent.badge}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center px-3 py-1.5 bg-[#D62828] rounded-full">
                  <span className="text-white text-xs sm:text-sm font-bold">
                    {currentEvent.badge}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1A1A1A]">
                  {currentEvent.title}
                </h3>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 text-sm sm:text-base text-[#6B7280]">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{currentEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm sm:text-base text-[#6B7280]">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{currentEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm sm:text-base text-[#6B7280]">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{currentEvent.location}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#1A1A1A] leading-relaxed">
                  {currentEvent.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[#24195D] text-white px-6 sm:px-8 py-3 rounded-xl font-bold hover:bg-[#24195D]/90 transition-colors duration-300 flex items-center gap-2 shadow-md"
                >
                  Learn More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2.5 mt-6 sm:mt-8">
            {events.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  width: index === currentSlide ? 24 : 8,
                  backgroundColor:
                    index === currentSlide ? "#FFD700" : "#C1C5CE",
                }}
                className="h-2 rounded-full"
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingSection;
