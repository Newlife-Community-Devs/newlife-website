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
      <div className="inline-flex items-center px-4 py-2 lg:px-5 lg:py-1 mt-1 lg:mt-4 bg-gold-soft rounded-full text-center lg:flex-1 lg:max-w-2xl">
        <span className="text-body text-sm lg:text-lg font-bold w-full">
          {`${new Date().getFullYear()} Theme: "The Holy Spirit, Power Behind God's Kingdom"`}
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
          className="bg-gold hover:bg-gold-hover px-4 py-2 rounded-xl flex items-center gap-2 font-medium text-sm text-body transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          onClick={() => router.back()}
        >
          <ChevronLeft className="w-4 h-4" />
          Go back
        </button>
      )}
    </div>
  );
};

export default PageHeader;
