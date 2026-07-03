"use client";

import React from "react";
import { motion, useInView } from "motion/react";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const modules = [
  {
    code: "100",
    title: "MEMBERSHIP",
    subtitle: "Salvation",
    tagline: "Knowing Christ",
    description:
      "To build beliefs and some priorities and membership covenant.",
    color: "#0F00B2",
    borderClass: "border-[#0F00B2]",
    bgLightClass: "bg-[#0F00B2]/10",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    ),
  },
  {
    code: "200",
    title: "MATURITY",
    subtitle: "Transformation",
    tagline: "Growing in Christ",
    description: "To build habits and basic character.",
    color: "#FFAA00",
    borderClass: "border-[#FFAA00]",
    bgLightClass: "bg-[#FFAA00]/10",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
  },
  {
    code: "300",
    title: "MINISTRY",
    subtitle: "Development",
    tagline: "Habit & Skill",
    description: "To deepen basic habits and development habits & skills.",
    color: "#D62828",
    borderClass: "border-[#D62828]",
    bgLightClass: "bg-[#D62828]/10",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
  {
    code: "400",
    title: "LEADERSHIP",
    subtitle: "Leadership",
    tagline: "Skill & Service",
    description:
      "To continue building Christlike skill and sharing Christ by word and deed.",
    color: "#24195D",
    borderClass: "border-[#24195D]",
    bgLightClass: "bg-[#24195D]/10",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    ),
  },
];

const ProgressBar = ({
  color,
  index,
}: {
  color: string;
  index: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="w-full h-1.5 rounded-full mt-4"
      style={{ backgroundColor: `${color}30` }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.15, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

const LifeProcessSection = () => {
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
          Life Development Process
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base sm:text-lg md:text-xl text-[#2E2E2E] text-center mb-10 sm:mb-12 max-w-3xl mx-auto"
        >
          Our intentional pathway for spiritual growth and development, designed
          to guide every believer from salvation to leadership
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {modules.map((mod, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`bg-white border ${mod.borderClass} rounded-xl p-5 sm:p-6 shadow-md flex flex-col`}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 ${mod.bgLightClass} rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: mod.color }}
                  >
                    {mod.icon}
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[#6B7280] font-semibold uppercase tracking-wider">
                    Module {mod.code}: {mod.title}
                  </p>
                  <h3
                    className="font-heading text-base sm:text-lg font-bold"
                    style={{ color: mod.color }}
                  >
                    {mod.subtitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2E2E2E] font-medium">
                    {mod.tagline}
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#6B7280] text-center leading-relaxed flex-1">
                {mod.description}
              </p>
              <ProgressBar color={mod.color} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LifeProcessSection;
