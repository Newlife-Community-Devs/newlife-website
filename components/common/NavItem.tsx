import Link from "next/link";
import React from "react";

const NavItem = ({
  children,
  text = "item",
  href,
  isActive,
  isOpen,
}: Readonly<{
  children?: React.ReactNode;
  text: string;
  href: string;
  isActive?: boolean;
  isOpen?: boolean;
}>) => {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      title={isOpen ? undefined : text}
      className={`flex items-center w-full gap-1 rounded-xl px-2 py-2.5 transition-colors ${
        isActive
          ? "bg-gold text-body"
          : "text-ink hover:bg-navy/5 hover:text-navy"
      }`}
    >
      <span className="flex-shrink-0 flex items-center justify-center w-8">
        {children}
      </span>
      {isOpen && (
        <span className="text-sm font-medium whitespace-nowrap">{text}</span>
      )}
    </Link>
  );
};

export default NavItem;
