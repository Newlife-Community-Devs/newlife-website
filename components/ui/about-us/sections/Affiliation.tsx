"use client";
import React from "react";
import Image from "next/image";
import { PAGE_URL } from "@/constants";
import Link from "next/link";

const Affiliation = () => {
  return (
    <section className="w-full bg-[rgba(0,51,160,0.08)] py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-xl p-8 lg:p-16 shadow-lg">
          <div className="flex flex-col items-center gap-12">
            {/* Logo and Title */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
                <Link href={PAGE_URL.HOME}>
                  <Image
                    src="/images/ghana-baptist-logo.jpg"
                    alt="Ghana Baptist Convention Logo"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>

              <div className="text-center">
                <p className="text-xl font-semibold text-black mb-2">
                  Proudly Affiliated with
                </p>
                <h3 className="text-2xl font-bold text-[#D62828]">
                  Ghana Baptist Convention
                </h3>
              </div>
            </div>

            {/* Description */}
            <div className="flex-1">
              <p className="text-lg text-gray-600 leading-relaxed text-center">
                As a member of the Ghana Baptist Convention, we are part of a
                larger family of churches committed to spreading the Gospel and
                serving communities across Ghana with excellence and integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliation;
