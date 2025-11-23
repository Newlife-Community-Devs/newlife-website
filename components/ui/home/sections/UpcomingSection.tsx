"use client";
import { events } from "@/constants";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PanInfo } from "framer-motion";

const UpcomingSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Handle drag end to detect swipe direction
  const handleDragEnd = (event: PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    const { offset, velocity } = info;

    // Swipe left (next slide)
    if (offset.x < -swipeThreshold || velocity.x < -500) {
      nextSlide();
    }
    // Swipe right (previous slide)
    else if (offset.x > swipeThreshold || velocity.x > 500) {
      prevSlide();
    }
  };

  const currentEvent = events[currentSlide];

  return (
    <section className="w-full py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold text-black text-center mb-8"
        >
          Upcoming Events
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-black text-center mb-12 max-w-4xl mx-auto"
        >
          Join us for our exciting upcoming church events!
        </motion.p>

        {/* Event Carousel */}
        <div className="bg-[#FAF1DE] rounded-xl p-8 shadow-lg relative overflow-hidden">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              initial={{
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: direction < 0 ? 1000 : -1000,
                opacity: 0,
              }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="flex flex-col lg:flex-row gap-8 items-center cursor-grab active:cursor-grabbing"
            >
              {/* Event Image */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-video bg-gradient-to-br from-[#24195D] to-[#E53935] rounded-xl flex items-center justify-center"
                >
                  <div className="text-white text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-4xl font-bold mb-2"
                    >
                      {currentEvent.preview}
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 0.9 }}
                      transition={{ delay: 0.3 }}
                      className="text-lg"
                    >
                      {currentEvent.badge}
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Event Details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center px-4 py-2 bg-[#E53935] rounded-full"
                >
                  <span className="text-[#F5F5F5] text-sm font-bold">
                    {currentEvent.badge}
                  </span>
                </motion.div>

                <motion.h3
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="text-2xl lg:text-3xl font-semibold text-black"
                >
                  {currentEvent.title}
                </motion.h3>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3 text-[#6B7280]">
                    <svg
                      className="w-6 h-6"
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

                  <div className="flex items-center gap-3 text-[#6B7280]">
                    <svg
                      className="w-6 h-6"
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

                  <div className="flex items-center gap-3 text-[#6B7280]">
                    <svg
                      className="w-6 h-6"
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
                </motion.div>

                <motion.p
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="text-lg text-black leading-relaxed"
                >
                  {currentEvent.description}
                </motion.p>

                <motion.button
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#24195D] text-[#F5F5F5] px-8 py-4 rounded-lg font-bold hover:bg-[#1A0F4A] transition-colors duration-300 flex items-center gap-2"
                >
                  Learn More
                  <svg
                    className="w-5 h-5"
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

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {events.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: index === currentSlide ? 1.25 : 1,
                  backgroundColor:
                    index === currentSlide ? "#FFCE00" : "#C1C5CE",
                }}
                className="w-3 h-3 rounded-full"
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
