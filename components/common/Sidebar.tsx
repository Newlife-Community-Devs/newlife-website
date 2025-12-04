"use client";
import { motion } from "framer-motion";
import {
  ChevronsLeft,
  ChevronsRight,
  Handshake,
  LayoutDashboard,
  Menu,
} from "lucide-react";
import React, { ReactNode, useState } from "react";
import NavItem from "./NavItem";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PAGE_URL } from "@/constants";

const menuItems: { icon: ReactNode; text: string; href: string }[] = [
  { icon: <LayoutDashboard />, text: "Dashboard", href: "dashboard" },
  { icon: <Handshake />, text: "Prayers", href: "prayer-wall" },
];
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const activeTab = pathname.split("/")[3];

  return (
    <motion.div
      initial={{ width: 60 }}
      animate={{ transition: { duration: 0.3 }, width: isOpen ? 300 : 60 }}
      className="h-screen px-3"
    >
      <motion.span
        className={`absolute top-[95%] ${
          isOpen ? "left-[260px]" : "left-[52px]"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? -360 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <ChevronsLeft /> : <ChevronsRight />}
      </motion.span>

      <Link href={PAGE_URL.HOME}>
        <Image
          src={"/images/nav-logo.png"}
          alt="Newlife"
          width={150}
          height={70}
          className="hidden lg:block"
        />
      </Link>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4 block md:hidden"
      >
        <Menu />
      </button>
      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <NavItem
            key={item.text}
            text={item.text}
            href={item.href}
            isOpen={isOpen}
            activeUrl={activeTab}
          >
            <span className="p-3">{item.icon}</span>
          </NavItem>
        ))}
      </nav>
    </motion.div>
  );
};

export default Sidebar;
