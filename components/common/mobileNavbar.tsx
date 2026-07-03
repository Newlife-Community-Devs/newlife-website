"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Ministries", href: "#" },
  { label: "Sermons", href: "#" },
  { label: "Events", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Prayer Request", href: "/prayer-request" },
];

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavbar = ({ isOpen, onClose }: MobileNavbarProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[80px] left-0 right-0 z-50 lg:hidden"
          >
            <div className="bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl mx-4 rounded-2xl overflow-hidden">
              <div className="flex flex-col py-3 px-3">
                {NAV_LINKS.map(({ label, href }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={href}
                      onClick={onClose}
                      className="block w-full text-[#1A1A1A] text-base font-medium hover:bg-[#FFD700]/10 hover:text-[#E6C200] rounded-lg px-4 py-3 transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="mt-2 pt-3 border-t border-gray-100"
                >
                  <Link
                    href="#"
                    onClick={onClose}
                    className="block w-full bg-[#FFD700] text-[#2E2E2E] text-center py-3 rounded-xl font-semibold hover:bg-[#E6C200] transition-colors"
                  >
                    Join Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
