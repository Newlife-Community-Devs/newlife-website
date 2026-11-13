"use client";

import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Flag } from "lucide-react";
import { getContrastTextColor } from "@/utils";

interface Prayer {
  id: string;
  user: {
    name: string;
    initials: string;
    color: string;
  };
  timestamp: string;
  prayer: {
    title: string;
    content: string;
  };
  isAnswered?: boolean;
  isFlagged?: boolean;
}

const PrayerCard: React.FC<{ prayer: Prayer }> = ({ prayer }) => {
  const headerText = getContrastTextColor(prayer.user.color);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="rounded-xl overflow-hidden shadow-sm h-full flex flex-col bg-white border border-gray-100 hover:shadow-lg hover:shadow-gray-200/60 transition-shadow duration-200"
    >
      <div
        className="p-3 flex items-center gap-2.5"
        style={{ backgroundColor: prayer.user.color }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
          style={{
            backgroundColor: "rgba(255,255,255,0.35)",
            color: headerText,
          }}
        >
          {prayer.user.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div
            className="text-sm font-semibold truncate"
            style={{ color: headerText }}
          >
            {prayer.user.name}
          </div>
        </div>
        <div className="text-xs flex-shrink-0" style={{ color: headerText, opacity: 0.75 }}>
          {prayer.timestamp}
        </div>
      </div>
      <div className="bg-white p-4 flex-1">
        <div className="flex items-center gap-1.5 flex-wrap mb-1.5">
          <h3 className="text-sm font-semibold text-ink">
            {prayer.prayer.title}
          </h3>
          {prayer.isAnswered && (
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-green-700 bg-green-100 rounded-full px-2 py-0.5">
              <CheckCircle2 className="w-3 h-3" />
              Answered
            </span>
          )}
          {prayer.isFlagged && (
            <span
              className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700 bg-amber-100 rounded-full px-2 py-0.5"
              title="Flagged for review"
            >
              <Flag className="w-3 h-3" />
              Flagged
            </span>
          )}
        </div>
        <p className="text-sm text-muted leading-relaxed">
          {prayer.prayer.content}
        </p>
      </div>
    </motion.article>
  );
};

export default PrayerCard;
