"use client";
import { motion } from "motion/react";
import { useModal } from "@/hooks/useModal";
import PageHeader from "../common/PageHeader";
import CustomButton from "../common/CustomButton";
import { RequestForm } from "../ui/RequestForm";

const LandingPage = () => {
  const { isOpen, openModal, closeModal } = useModal();
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
          <h1 className="font-heading text-white text-[clamp(1.75rem,6vw,4.5rem)] font-bold leading-tight px-2">
            Welcome to the
            <br />
            <span className="text-gold">NLCBC Prayer Wall</span>
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
          <CustomButton
            variant="secondary"
            size="lg"
            href="/prayer-request/wall"
            className="w-full sm:w-auto"
          >
            View Prayer Wall
          </CustomButton>
          <CustomButton
            variant="primary"
            size="lg"
            onClick={openModal}
            className="w-full sm:w-auto"
          >
            Send A Request
          </CustomButton>
        </motion.div>
      </motion.div>
      {isOpen && <RequestForm onClose={closeModal} />}
    </div>
  );
};

export default LandingPage;
