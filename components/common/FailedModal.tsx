"use client";
import React from "react";
import Image from "next/image";

interface FailedModalProps {
  onClose?: () => void;
  onRetry?: () => void;
  errorMessage?: string;
}

export const FailedModal = ({
  onClose,
  onRetry,
  errorMessage,
}: FailedModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      {/* Backdrop - Dark gray */}
      <div
        className="absolute inset-0 bg-gray-800/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Failed Card */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-lg shadow-2xl p-8 md:p-12">
        {/* Red circle with X icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-red-500 rounded-full flex items-center justify-center">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Unable to send your prayer request
          </h2>
          <p className="text-base md:text-lg text-black leading-relaxed mb-2">
            We encountered an issue while processing your request.
            <br />
            Please try again or contact us if the problem persists.
          </p>
          {errorMessage && (
            <p className="text-sm text-red-600 mt-3 font-medium">
              {errorMessage}
            </p>
          )}
        </div>

        {/* Bible Verse */}
        <div className="text-center mb-8">
          <p className="text-sm md:text-base text-gray-500">
            Philippians 4:6-7 (NIV)
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-6 space-y-3">
          {onRetry && (
            <button
              onClick={onRetry}
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>Try Again</span>
            </button>
          )}
          <button
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black font-medium py-3 px-6 rounded-lg transition-colors"
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
            <span>Close</span>
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
