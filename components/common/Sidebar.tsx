"use client";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronsLeft,
  ChevronsRight,
  Handshake,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import NavItem from "./NavItem";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { PAGE_URL } from "@/constants";

const menuItems = [
  {
    icon: LayoutDashboard,
    text: "Dashboard",
    href: "/prayer-request/admin/dashboard",
  },
  {
    icon: Handshake,
    text: "Prayers",
    href: "/prayer-request/admin/prayer-wall",
  },
];

const SidebarNav = ({
  collapsed,
  pathname,
}: {
  collapsed: boolean;
  pathname: string;
}) => (
  <nav className="flex flex-col gap-2 flex-1 w-full" aria-label="Admin menu">
    {menuItems.map((item) => (
      <NavItem
        key={item.text}
        text={item.text}
        href={item.href}
        isActive={pathname === item.href}
        isOpen={!collapsed}
      >
        <item.icon className="w-5 h-5" />
      </NavItem>
    ))}
  </nav>
);

const LogoutButton = ({ collapsed }: { collapsed: boolean }) => {
  const router = useRouter();
  return (
    <button
      onClick={() =>
        signOut({ callbackUrl: "/prayer-request/admin" }).then(() => {
          router.push("/prayer-request/admin");
        })
      }
      title={collapsed ? "Logout" : undefined}
      className="flex items-center w-full gap-1 rounded-xl px-2 py-2.5 text-muted hover:bg-red-50 hover:text-red-600 transition-colors"
    >
      <span className="flex-shrink-0 flex items-center justify-center w-8">
        <LogOut className="w-5 h-5" />
      </span>
      {!collapsed && (
        <span className="text-sm font-medium whitespace-nowrap">Logout</span>
      )}
    </button>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile top bar */}
      <header className="md:hidden sticky top-0 z-40 flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3">
        <Link href={PAGE_URL.HOME}>
          <Image
            src="/images/nav-logo.png"
            alt="Newlife"
            width={100}
            height={50}
            sizes="100px"
          />
        </Link>
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open admin menu"
          className="p-2 rounded-lg text-ink hover:bg-gray-100 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-y-0 left-0 z-50 flex flex-col bg-white border-r border-gray-200 p-4 w-64 shadow-xl md:hidden"
              aria-label="Admin sidebar"
            >
              <div className="flex items-center justify-between mb-6">
                <Link href={PAGE_URL.HOME}>
                  <Image
                    src="/images/nav-logo.png"
                    alt="Newlife"
                    width={110}
                    height={55}
                    sizes="110px"
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close admin menu"
                  className="p-2 rounded-lg text-ink hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <SidebarNav collapsed={false} pathname={pathname} />
              <div className="border-t border-gray-100 pt-2 mt-2">
                <LogoutButton collapsed={false} />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: collapsed ? 76 : 260 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="hidden md:flex flex-col h-screen sticky top-0 bg-white border-r border-gray-200 px-3 py-5 flex-shrink-0"
      >
        <div
          className={`flex items-center mb-6 ${
            collapsed ? "justify-center" : "px-2"
          }`}
        >
          <Link href={PAGE_URL.HOME}>
            <Image
              src="/images/nav-logo.png"
              alt="Newlife"
              width={130}
              height={65}
              sizes="130px"
              className={collapsed ? "w-11 h-auto" : ""}
            />
          </Link>
        </div>

        <SidebarNav collapsed={collapsed} pathname={pathname} />

        <div className="border-t border-gray-100 pt-2 mt-2 flex flex-col gap-1">
          <LogoutButton collapsed={collapsed} />
          <button
            onClick={() => setCollapsed((prev) => !prev)}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-expanded={!collapsed}
            className="flex items-center justify-center w-full gap-1 rounded-xl px-2 py-2 text-muted hover:bg-navy/5 hover:text-navy transition-colors"
          >
            {collapsed ? (
              <ChevronsRight className="w-5 h-5" />
            ) : (
              <>
                <ChevronsLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Collapse</span>
              </>
            )}
          </button>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
