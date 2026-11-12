"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-gold text-body hover:bg-gold-hover shadow-sm",
  secondary: "bg-navy text-white hover:bg-navy-dark shadow-sm",
  outline:
    "border-2 border-navy text-navy hover:bg-navy hover:text-white bg-transparent",
  ghost: "text-navy hover:bg-navy/5 bg-transparent",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  lg: "px-6 sm:px-8 py-3 sm:py-3.5 text-base",
};

interface CustomButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  ariaLabel?: string;
}

const CustomButton = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
  className = "",
  ariaLabel,
}: CustomButtonProps) => {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold",
    "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-gold focus-visible:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    disabled ? "opacity-50 pointer-events-none" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const motionProps = {
    whileHover: disabled ? undefined : { scale: 1.03 },
    whileTap: disabled ? undefined : { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className={fullWidth ? "w-full" : ""}>
        <Link
          href={href}
          className={classes}
          onClick={onClick}
          aria-label={ariaLabel}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
};

export default CustomButton;
