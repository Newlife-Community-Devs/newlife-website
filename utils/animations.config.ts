import type { AnimationGeneratorName } from "motion/react";

export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as AnimationGeneratorName,
      stiffness: 80,
      delay: 0.5,
    },
  },
};
