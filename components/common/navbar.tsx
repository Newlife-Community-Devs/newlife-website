"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import MobileNavbar, { NAV_LINKS } from "./mobileNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  const navBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.9)"],
  );
  const navShadow = useTransform(
    scrollY,
    [0, 50],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 20px rgba(0,0,0,0.08)"],
  );

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => {
      setScrolled(v > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const toggleNavbar = () => setIsOpen((prev) => !prev);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          backgroundColor: navBg,
          boxShadow: navShadow,
        }}
        className="w-full fixed top-0 z-50 h-[80px] flex items-center justify-between px-4 sm:px-6 lg:px-8 backdrop-blur-md"
      >
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/nav-logo.png"
              alt="Newlife"
              width={140}
              height={80}
              className="sm:w-[160px] sm:h-[90px] w-auto h-auto"
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-[#1A1A1A] text-sm font-medium hover:text-[#FFD700] transition-colors duration-200 relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-flex bg-[#FFD700] text-[#2E2E2E] px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#E6C200] transition-colors shadow-sm"
          >
            Join Us
          </motion.button>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md text-[#1A1A1A] hover:text-[#FFD700] transition-colors duration-200 p-2"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
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

      <MobileNavbar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
