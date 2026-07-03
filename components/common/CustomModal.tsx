"use client";

import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

export interface CustomModalProps {
  show: boolean;
  onHide: () => void;
  size?: "sm" | "lg" | "xl";
  children: React.ReactNode;
  backdrop?: "static" | boolean;
}

const sizeClasses: Record<string, string> = {
  sm: "max-w-md",
  lg: "max-w-3xl",
  xl: "max-w-5xl",
};

const CustomModal: React.FC<CustomModalProps> = ({
  show,
  onHide,
  size = "lg",
  children,
  backdrop = true,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && backdrop !== "static") onHide();
    },
    [onHide, backdrop],
  );

  useEffect(() => {
    if (show) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [show, handleKeyDown]);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60"
            onClick={() => backdrop !== "static" && onHide()}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`relative w-full ${sizeClasses[size]} max-h-[90vh] overflow-auto rounded-2xl bg-white shadow-2xl`}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CustomModal;
