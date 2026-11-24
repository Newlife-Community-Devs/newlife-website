import React from "react";
import Sidebar from "@/components/common/Sidebar";
import { getUserSession } from "@/services/auth";
import { redirect, RedirectType } from "next/navigation";
import { PAGE_URL } from "@/constants";

const ADMIN_ROLES = ["Admin", "ContentEditor", "EventManager"];

export default async function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getUserSession();

  if (!session?.email || !session.roles?.some((role) => ADMIN_ROLES.includes(role))) {
    redirect(PAGE_URL.ADMIN_LOGIN, RedirectType.replace);
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
