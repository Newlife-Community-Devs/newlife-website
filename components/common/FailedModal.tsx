"use client";
import Image from "next/image";
import { X, RotateCcw, ArrowLeft } from "lucide-react";
import CustomModal from "./CustomModal";

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
    <CustomModal show onHide={onClose ?? (() => {})} size="sm">
      <div className="p-8 md:p-12">
        {/* Red circle with X icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-red-500 rounded-full flex items-center justify-center">
            <X className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={3} />
          </div>
        </div>

        {/* Error Message */}
        <div className="text-center mb-6">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-ink mb-4">
            Unable to send your prayer request
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-2">
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
          <p className="text-sm md:text-base text-muted">
            Philippians 4:6-7 (NIV)
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-6 space-y-3">
          {onRetry && (
            <button
              onClick={onRetry}
              className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-body font-semibold py-3 px-6 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Try Again</span>
            </button>
          )}
          <button
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-body font-medium py-3 px-6 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            <ArrowLeft className="w-5 h-5" />
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
              sizes="40px"
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <div className="text-ink text-xs md:text-sm leading-tight">
              <div className="font-semibold">Newlife</div>
              <div>Community</div>
              <div>Baptist Church</div>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};
