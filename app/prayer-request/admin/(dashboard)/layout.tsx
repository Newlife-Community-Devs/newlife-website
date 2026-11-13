import React from "react";
import Sidebar from "@/components/common/Sidebar";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
