"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/about-us");
  };
  return (
    <div className="w-full">
      {/* Main Hero Section */}
      <section className="relative w-full h-[790px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/home-hero.png"
            alt="Newlife Community Baptist Church - Worship Service"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F]/80 to-[#001F3F]/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 lg:px-8 max-w-6xl mx-auto">
          {/* Theme Tag */}
          <div className="mb-8">
            <div className="inline-flex items-center px-5 py-1 bg-[#FFFCEB] rounded-full">
              <span className="text-[#2E2E2E] text-lg font-bold">
                {`2025 Theme: "The Holy Spirit, Power Behind God's Kingdom"`}
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-[#FCFCFC] mb-6 leading-tight">
            Welcome to
            <br />
            Newlife Community Baptist Church
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-[#FCFCFC] mb-8 leading-relaxed max-w-4xl mx-auto">
            {`A place where faith grows, community thrives, and lives are transformed through God's love and grace.`}
          </p>

          {/* About Us Button */}
          <button
            className="bg-[#FFD700] text-[#2E2E2E] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#E6C200] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 mx-auto"
            onClick={handleButtonClick}
          >
            About Us
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
