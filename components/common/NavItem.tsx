import Link from "next/link";
import React from "react";

const NavItem = ({
  children,
  text = "item",
  href,
  activeUrl,
  isOpen,
}: Readonly<{
  children?: React.ReactNode;
  text: string;
  href: string;
  activeUrl?: string;
  isOpen?: boolean;
}>) => {
  return (
    <div
      className={`flex items-center ${
        activeUrl === href ? "bg-gold" : ""
      } rounded-xl `}
    >
      <Link
        href={`/prayer-request/admin/${href}`}
        className="text-black flex no-underline! gap-3"
      >
        {children}
        {isOpen && <p className="text-sm font-medium mt-3">{text}</p>}
      </Link>
    </div>
  );
};

export default NavItem;
