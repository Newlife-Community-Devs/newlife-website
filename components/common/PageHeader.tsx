"use client";
import React from "react";
import Image from "next/image";
import DailyWordCard from "../DailyWordCard";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { PAGE_URL } from "@/constants";

interface PageHeaderProps {
  hasDailyWord?: boolean;
  hasBackButton?: boolean;
  imageUrl?: string;
}
const PageHeader: React.FC<PageHeaderProps> = ({
  hasDailyWord,
  hasBackButton,
  imageUrl,
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-4">
      <div className="flex justify-center lg:justify-start">
        <Link href={PAGE_URL.HOME}>
        <Image
          src={imageUrl ? imageUrl : "/images/footer-logo.png"}
          alt="Newlife"
          width={150}
          height={70}
          className=""
        />
        </Link>
      </div>
      <div className="inline-flex items-center px-4 py-2 lg:px-5 lg:py-1 mt-1 lg:mt-4 bg-[#FFFCEB] rounded-full text-center lg:flex-1 lg:max-w-2xl">
        <span className="text-gray-800 text-sm lg:text-lg font-bold w-full">
          {`2025 Theme: "The Holy Spirit, Power Behind God's Kingdom"`}
        </span>
      </div>
      {hasDailyWord && (
        <div className=" flex w-full lg:w-auto justify-center items-center">
          <DailyWordCard
            verse="Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."
            reference="Philippians 4:6–7"
          />
        </div>
      )}
      {hasBackButton && (
        <button
          className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg! flex items-center gap-2 font-medium text-sm"
          onClick={() => router.back()}
        >
          <ChevronLeft className="w-4 h-4" />
          Back to home
        </button>
      )}
    </div>
  );
};

export default PageHeader;
