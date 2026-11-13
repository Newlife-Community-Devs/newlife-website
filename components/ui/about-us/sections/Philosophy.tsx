"use client";

import { motion } from "motion/react";
import { Target, Users, ChevronRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const cards = [
  {
    tag: "Our Purpose",
    icon: Target,
    iconClasses: "bg-navy/10 text-navy",
    tagClasses: "bg-navy text-white",
    hoverText: "hover:text-navy",
    description:
      "Glorifying God by making disciples who exalt God, edify other believers and evangelize unbelievers starting in her own local community and extending disciple making to all the world.",
  },
  {
    tag: "Our Product",
    icon: Users,
    iconClasses: "bg-gold/15 text-gold-hover",
    tagClasses: "bg-gold text-body",
    hoverText: "hover:text-gold-hover",
    description:
      "Mature, growing disciples who will emerge as leaders. We define a disciple as a believer who walks with God, lives the word, contributes to the work, and impacts the world.",
  },
];

const Philosophy = () => {
  return (
    <section className="w-full bg-[rgba(255,215,0,0.04)] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-[clamp(1.75rem,4vw,3rem)] font-bold text-ink mb-4"
          >
            Our Ministry Philosophy
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto"
          >
            Our ministry is built on biblical foundations with clear purpose
            and measurable outcomes
          </motion.p>
        </motion.div>

        {/* Philosophy Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.tag}
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex flex-col items-center text-center space-y-5 sm:space-y-6 h-full">
                {/* Icon */}
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 ${card.iconClasses} rounded-full flex items-center justify-center`}
                >
                  <card.icon className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
                </div>

                {/* Tag */}
                <div
                  className={`${card.tagClasses} px-4 py-1.5 rounded-full text-sm font-semibold`}
                >
                  {card.tag}
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-muted leading-relaxed">
                  {card.description}
                </p>

                {/* Learn More Button */}
                <button
                  className={`flex items-center gap-1.5 text-muted ${card.hoverText} transition-colors mt-auto font-medium`}
                >
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
