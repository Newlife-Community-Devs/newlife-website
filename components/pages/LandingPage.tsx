"use client";
import React from "react";
import { motion } from "framer-motion";
import { useModal } from "@/hooks/useModal";
import { useRouter } from "next/navigation";
import PageHeader from "../common/PageHeader";
import { RequestForm } from "../ui/RequestForm";

const LandingPage = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const router = useRouter();
  return (
    <div className="min-h-screen relative p-3 sm:p-4 md:p-6 flex flex-col">
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 bg-cover blur-sm"
        style={{
          backgroundImage: "url('/images/landing-back.png')",
          filter: "brightness(0.45) blur(1px)",
          backgroundSize: "150% 150%",
        }}
        animate={{
          backgroundPosition: ["100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      <div className="mb-4 sm:mb-6 md:mb-8">
        <PageHeader hasDailyWord />
      </div>
      <motion.div
        className="text-center space-y-4 sm:space-y-6 md:space-y-8 flex-1 flex flex-col justify-center px-2 sm:px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="space-y-3 sm:space-y-4 md:space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight px-2">
            Welcome to the
            <br />
            NLCBC Prayer Wall
          </h1>

          <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            No request is too small for God.
            <br />
            Post your prayer and let others stand with you in faith.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center items-stretch max-w-sm mx-auto w-full px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-lg! font-medium text-sm sm:text-base shadow-lg hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/prayer-request/wall")}
          >
            View Prayer Wall
          </motion.button>
          <motion.button
            onClick={openModal}
            className="w-full sm:w-auto bg-yellow-400 text-black px-6 py-3 rounded-lg! font-medium text-sm sm:text-base shadow-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Send A Request</span>
          </motion.button>
        </motion.div>
      </motion.div>
      {isOpen && <RequestForm onClose={closeModal} />}
    </div>
  );
};

export default LandingPage;
