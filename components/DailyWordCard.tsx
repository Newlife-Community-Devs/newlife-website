import React from "react";
import Image from "next/image";

interface DailyWordCardProps {
  verse: string;
  reference: string;
}

const DailyWordCard: React.FC<DailyWordCardProps> = ({ verse, reference }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 max-w-sm">
      {/* Logo section */}
      <div className="flex justify-between mb-4">
        {/* Church logo placeholder */}
        <Image
          src="/images/nav-logo.png"
          alt="Newlife"
          width={60}
          height={50}
        />
        <h3 className="text-gray-500 text-xs font-normal mb-2 mt-4 text-center">
          Daily Word
        </h3>
        <div></div>
      </div>

      {/* Daily Word content */}
      <div className="space-y-4 mb-2">
        {/* Reference */}
        <div className="flex justify-center">
          <div className="bg-yellow-400 rounded px-3 py-1">
            <span className="text-black text-sm font-normal">{reference}</span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-black text-sm leading-relaxed">{verse}</p>
      </div>
    </div>
  );
};

export default DailyWordCard;
