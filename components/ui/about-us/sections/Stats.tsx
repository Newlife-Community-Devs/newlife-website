"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "motion/react";

const stats = [
  { number: 15, suffix: "+", label: "Years Ministry" },
  { number: 500, suffix: "+", label: "Lives Impacted" },
  { number: 50, suffix: "+", label: "Leaders Trained" },
];

const CountUp = ({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [active, value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
          className="border-t-2 border-gold/50 pt-3 sm:pt-4"
        >
          <div className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">
            <CountUp value={stat.number} suffix={stat.suffix} active={isInView} />
          </div>
          <div className="text-xs sm:text-sm md:text-base font-medium text-muted mt-1">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
