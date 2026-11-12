"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeInUp, scaleIn, staggerContainer } from "@/utils/animations";

const Affiliation = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="bg-[rgba(255,215,0,0.04)] border border-gray-200 rounded-2xl p-8 lg:p-16 shadow-sm"
        >
          <div className="flex flex-col items-center gap-8 lg:gap-10">
            {/* Logo and Title */}
            <motion.div variants={scaleIn} className="flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-gold/30"
              >
                <Image
                  src="/images/ghana-baptist-logo.jpg"
                  alt="Ghana Baptist Convention Logo"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  sizes="128px"
                />
              </motion.div>

              <div className="text-center mt-5">
                <p className="text-base sm:text-lg font-medium text-muted mb-1">
                  Proudly Affiliated with
                </p>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy">
                  Ghana Baptist Convention
                </h3>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp} className="max-w-3xl">
              <p className="text-base sm:text-lg text-muted leading-relaxed text-center">
                As a member of the Ghana Baptist Convention, we are part of a
                larger family of churches committed to spreading the Gospel and
                serving communities across Ghana with excellence and integrity.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Affiliation;
