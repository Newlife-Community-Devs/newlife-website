"use client";

import Image from "next/image";
import { FaInstagram, FaPhone, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#001F3F] pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          <div className="text-center sm:text-left">
            <h3 className="text-[#FFD700] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-5">
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Ministries", href: "#" },
                { label: "Sermons", href: "#" },
                { label: "Stories", href: "#" },
                { label: "Events", href: "#" },
                { label: "Contact", href: "#" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#F5F5F5] text-sm sm:text-base hover:text-[#FFD700] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="flex justify-center sm:justify-start">
              <Image
                src="/images/footer-logo.png"
                alt="Newlife"
                width={160}
                height={90}
                className="w-auto h-auto"
              />
            </div>
            <p className="text-[#F5F5F5] text-sm leading-relaxed text-center sm:text-left">
              Making disciples, glorifying God, and evangelizing the world
              through the power of Christ. Join our growing community of
              believers.
            </p>
            <div>
              <h3 className="text-[#FFD700] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-5">
                Stay Connected
              </h3>
              <div className="flex items-center gap-4 sm:gap-5">
                {[
                  {
                    icon: FaInstagram,
                    href: "https://www.instagram.com/nwcbaptist?igsh=bzN2OTQ0enk5anRk&utm_source=qr",
                  },
                  {
                    icon: FaTiktok,
                    href: "https://www.tiktok.com/@newlifebaptist?_t=ZS-90Zkh0LoUL2&_r=1",
                  },
                  {
                    icon: FaTwitter,
                    href: "https://x.com/nwcbaptist?s=21",
                  },
                  {
                    icon: FaYoutube,
                    href: "https://youtube.com/@nlcbcgh?si=rs-TaZDwgDxDV5Bs",
                  },
                ].map(({ icon: Icon, href }) => (
                  <motion.div
                    key={href}
                    whileHover={{ scale: 1.15, y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link
                      href={href}
                      className="text-[#C1C5CE] hover:text-[#FFD700] transition-colors duration-200 block"
                    >
                      <Icon className="size-5 sm:size-6" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-[#FFD700] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-5">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <FaPhone className="text-white size-4 sm:size-5 flex-shrink-0" />
                  <span className="text-[#F5F5F5] text-sm sm:text-base">
                    (233) 456-7890
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <HiOutlineMail className="text-white size-5 sm:size-6 flex-shrink-0" />
                  <span className="text-[#F5F5F5] text-sm sm:text-base">
                    info@nlcbcgh.com
                  </span>
                </div>
                <div className="flex gap-3 sm:gap-4 items-start">
                  <SlLocationPin className="text-white size-5 sm:size-6 flex-shrink-0 mt-0.5" />
                  <span className="text-[#FCFCFC] text-sm sm:text-base">
                    Church Auditorium, opposite Don Bosco Technical Institute
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-[#F5F5F5]/70 text-xs font-medium text-center sm:text-left">
                Subscribe to our newsletter for updates on services, events, and
                community news.
              </p>
              <div className="bg-white/10 border border-white/20 rounded-xl p-2 sm:p-3">
                <div className="flex items-center gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 text-white text-sm bg-transparent outline-none placeholder-white/50 px-2"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#FFD700] text-[#2E2E2E] px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#E6C200] transition-colors flex-shrink-0"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 my-8 sm:my-10" />

        <div className="text-center">
          <p className="text-[#FFD700]/70 text-sm">
            &copy; {new Date().getFullYear()} Newlife Community Baptist Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
