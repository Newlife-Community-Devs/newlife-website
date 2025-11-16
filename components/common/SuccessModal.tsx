"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SuccessModalProps {
  onClose?: () => void;
}

export const SuccessModal = ({ onClose }: SuccessModalProps) => {
  const router = useRouter();

  const handleBackToHome = () => {
    if (onClose) {
      onClose();
    }
    router.push("/");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      {/* Backdrop - Dark gray */}
      <div
        className="absolute inset-0 bg-gray-800/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Success Card */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-lg shadow-2xl p-8 md:p-12">
        {/* Yellow circle with checkmark */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-yellow-400 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 md:w-12 md:h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Your prayer has been sent!
          </h2>
          <p className="text-base md:text-lg text-black leading-relaxed">
            Heaven listens, and faith moves mountains.
            <br />
            Others will join you in prayer, keep believing for your miracle.
          </p>
        </div>

        {/* Bible Verse */}
        <div className="text-center mb-8">
          <p className="text-sm md:text-base text-gray-500">
            Matthew 21:22 (NIV)
          </p>
        </div>

        {/* Back to Home Button */}
        <div className="mb-6">
          <button
            onClick={handleBackToHome}
            className="w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to Home</span>
          </button>
        </div>

        {/* Logo at bottom right */}
        <div className="flex justify-end items-end mt-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/nav-logo.png"
              alt="Newlife Community Baptist Church logo"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <div className="text-black text-xs md:text-sm leading-tight">
              <div className="font-semibold">Newlife</div>
              <div>Community</div>
              <div>Baptist Church</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
