import Link from "next/link";
import React from "react";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Ministries", href: "#" },
  { label: "Sermons", href: "#" },
  { label: "Events", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Prayer Request", href: "/prayer-request" },
];

const MobileNavbar = () => {
  return (
    <div className="lg:hidden top-[90px] inset-0 z-50 w-full h-auto bg-black shadow-md transition-all duration-300">
      <div className="flex flex-col w-full space-y-2">
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="block w-full text-white text-base font-normal hover:bg-white hover:text-black rounded-lg p-3 transition-colors duration-300 text-center"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
