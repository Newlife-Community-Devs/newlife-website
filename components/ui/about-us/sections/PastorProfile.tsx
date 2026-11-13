"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Crown } from "lucide-react";
import { fadeInLeft, fadeInRight, staggerContainer } from "@/utils/animations";
import { PASTOR_IMAGE } from "@/constants";
import Stats from "./Stats";

const PastorProfile = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center"
        >
          {/* Pastor Photo */}
          <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto lg:max-w-none">
              <Image
                src={PASTOR_IMAGE.src}
                alt="Rev. Michael A. Opoku - Senior Pastor"
                fill
                placeholder="blur"
                blurDataURL={PASTOR_IMAGE.blurDataURL}
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </motion.div>

          {/* Pastor Bio */}
          <motion.div
            variants={fadeInRight}
            className="order-1 lg:order-2 space-y-5 sm:space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-navy text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              <Crown className="w-4 h-4 text-gold" />
              Senior Pastor
            </div>
            <h2 className="font-heading text-[clamp(1.75rem,4vw,3rem)] font-bold text-ink leading-tight">
              Rev. Michael A. Opoku
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed">
              <p>
                {`Pastor Michael brings over 15 years of ministry experience and a heart for discipleship. His passion for seeing lives transformed through the Gospel has been the driving force behind our church's growth and impact in the community.`}
              </p>

              <p>
                {`Under his leadership, New Life Community Baptist Church has become a beacon of hope, focusing on authentic relationships, biblical teaching, and practical faith that makes a difference in everyday life.`}
              </p>
            </div>

            <Stats />

            {/* Quote */}
            <blockquote className="relative bg-gold-soft border-l-4 border-gold rounded-r-xl p-5 sm:p-6">
              <span
                aria-hidden="true"
                className="font-heading absolute -top-2 left-3 text-5xl text-gold/50 leading-none select-none"
              >
                &ldquo;
              </span>
              <p className="text-base sm:text-lg text-navy italic font-medium pl-4">
                {`My heart's desire is to see every member of our church family discover their purpose in God's kingdom and live it out with passion and power.`}
              </p>
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PastorProfile;
