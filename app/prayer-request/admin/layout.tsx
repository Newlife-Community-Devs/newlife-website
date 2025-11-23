import React from "react";
import Sidebar from "@/components/common/Sidebar";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen bg-gray-100">{children}</div>
      </div>
    </div>
  );
}
