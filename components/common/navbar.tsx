/** @format */

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileNavbar, { NAV_LINKS } from "./mobileNavbar";
import { motion } from "motion/react";
import { navVariants } from "@/utils/animations.config";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="w-full sticky h-[90px] bg-white shadow-[0px_4px_4px_0px_rgba(107,114,128,0.08)] flex items-center justify-between px-8 lg:px-20"
      >
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/nav-logo.png"
              alt="Newlife"
              width={160}
              height={90}
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-5">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-[#1A1A1A] text-base font-normal hover:text-[#FFD700] transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex-shrink-0">
          <button className="bg-[#FFD700] text-[#2E2E2E] px-6 py-3 rounded-xl border border-[#2E2E2E] border-opacity-20 text-sm font-normal hover:bg-[#E6C200] transition-colors">
            Join Us
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            className="inline-flex items-center justify-center rounded-md text-[#1A1A1A] 
        hover:text-[#FFD700] transition-colors duration-200"
            onClick={toggleNavbar}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </motion.nav>
      {isOpen && <MobileNavbar />}
    </>
  );
};

export default Navbar;
