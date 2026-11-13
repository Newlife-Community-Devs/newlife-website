"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView, animate } from "motion/react";

interface StatsCardProps {
  title: string;
  count: number;
  timeStamp: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

const CountUp = ({ value, active }: { value: number; active: boolean }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [active, value]);

  return <span>{display}</span>;
};

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  count,
  timeStamp,
  icon,
  iconBg,
  iconColor,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between mb-3">
        <h5 className="text-sm font-semibold text-muted uppercase tracking-wide">
          {title}
        </h5>
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${iconBg} ${iconColor}`}
        >
          {icon}
        </div>
      </div>
      <p className="font-heading text-3xl font-bold text-ink mb-2">
        <CountUp value={count} active={isInView} />
      </p>
      <p className="text-xs text-muted">Updated {timeStamp}</p>
    </motion.div>
  );
};

export default StatsCard;
