"use client";
import React from "react";
import Image from "next/image";
import { FaInstagram, FaPhone, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="w-full bg-[#001F3F] py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 text-center">
            <h3 className="text-[#FFD700] text-sm font-medium mb-3">
              Quick Links
            </h3>
            <nav className="space-y-3">
              <div className="grid grid-cols-1 gap-3">
                <Link
                  href="/"
                  className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors"
                >
                  Ministries
                </Link>
                <Link
                  href="#"
                  className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors"
                >
                  Sermons
                </Link>
                <Link
                  href="#"
                  className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors"
                >
                  Stories
                </Link>
                <Link
                  href="#"
                  className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors"
                >
                  Events
                </Link>
                <Link
                  href="#"
                  className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
          <div className="lg:col-span-1 space-y-8">
            <div className="w-40 h-24  rounded-lg flex items-center justify-center">
              <Image
                src="/images/footer-logo.png"
                alt="Newlife"
                width={160}
                height={90}
              />
            </div>
            <p className="text-[#F5F5F5] text-sm leading-relaxed">
              Making disciples, glorifying God, and evangelizing the world
              through the power of Christ. Join our growing community of
              believers.
            </p>
            <div className="space-y-3">
              <p className="text-[#FCFCFC] text-xs font-medium">
                Subscribe to our newsletter for updates on services, events, and
                community news.
              </p>
              <div className="bg-white/90 border border-[#9CA3AF] rounded-xl p-3">
                <div className="flex items-center justify-between gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 text-[#6B7280] text-sm bg-transparent outline-none placeholder-[#6B7280]"
                  />
                  <button className="bg-[#6B7280] text-[#FCFCFC] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#4B5563] transition-colors">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-[#FFD700] text-sm font-medium mb-3">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaPhone className="text-white size-6" />
                  <span className="text-[#F5F5F5] text-base">
                    (233) 456-7890
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <HiOutlineMail className="text-white size-6" />
                  <span className="text-[#F5F5F5] text-base">
                    info@nlcbcgh.com
                  </span>
                </div>

                <div className="flex gap-4 justify-center items-center">
                  <SlLocationPin className="text-white size-6" />
                  <span className="text-[#FCFCFC] text-base">
                    Church Auditorium, opposite Don Bosco Technical Institute
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[#FFD700] text-sm font-medium mb-3 pt-4">
                Stay Connected
              </h3>
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.instagram.com/nwcbaptist?igsh=bzN2OTQ0enk5anRk&utm_source=qr"
                  className=" text-[#C1C5CE] hover:text-[#FFD700] transition-colors"
                >
                  <FaInstagram className="size-6" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@newlifebaptist?_t=ZS-90Zkh0LoUL2&_r=1"
                  className=" text-[#C1C5CE] hover:text-[#FFD700] transition-colors"
                >
                  <FaTiktok className="size-6" />
                </Link>
                <Link
                  href="https://x.com/nwcbaptist?s=21"
                  className=" text-[#C1C5CE] hover:text-[#FFD700] transition-colors"
                >
                  <FaTwitter className="size-6" />
                </Link>
                <Link
                  href="https://youtube.com/@nlcbcgh?si=rs-TaZDwgDxDV5Bs"
                  className=" text-[#C1C5CE] hover:text-[#FFD700] transition-colors"
                >
                  <FaYoutube className="size-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#6B7280] my-8"></div>
        <div className="text-center">
          <p className="text-[rgba(255,215,0,0.74)] text-base">
            © 2025 Newlife Community Baptist Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
