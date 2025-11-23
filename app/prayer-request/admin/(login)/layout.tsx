import React from "react";
import { getUserSession } from "@/services/auth";
import { redirect, RedirectType } from "next/navigation";

export default async function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getUserSession()
  if (session) {
    redirect("/prayer-request/admin/dashboard", RedirectType.replace)
  }
  return <>{children}</>
}
