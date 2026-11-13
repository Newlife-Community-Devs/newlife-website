"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Check, ArrowLeft } from "lucide-react";
import { PAGE_URL } from "@/constants";
import CustomModal from "./CustomModal";

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
    <CustomModal show onHide={onClose ?? (() => {})} size="sm">
      <div className="p-8 md:p-12">
        {/* Gold circle with checkmark */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gold rounded-full flex items-center justify-center">
            <Check className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={3} />
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-6">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-ink mb-4">
            Your prayer has been sent!
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            Heaven listens, and faith moves mountains.
            <br />
            Others will join you in prayer, keep believing for your miracle.
          </p>
        </div>

        {/* Bible Verse */}
        <div className="text-center mb-8">
          <p className="text-sm md:text-base text-muted">Matthew 21:22 (NIV)</p>
        </div>

        {/* Back to Home Button */}
        <div className="mb-6">
          <button
            onClick={handleBackToHome}
            className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-body font-semibold py-3 px-6 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Logo at bottom right */}
        <div className="flex justify-end items-end mt-8">
          <div className="flex items-center gap-3">
            <Link href={PAGE_URL.HOME}>
              <Image
                src="/images/nav-logo.png"
                alt="Newlife Community Baptist Church logo"
                width={40}
                height={40}
                sizes="40px"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </Link>
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
