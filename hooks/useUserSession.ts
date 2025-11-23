"use client";

import { useSession } from "next-auth/react";
import type { UserSession } from "@/models";

const useUserSession = () => {
  const value = useSession();

  return {
    session: value.data as UserSession | null,
    status: value.status,
    update: value.update as (
      data: Partial<UserSession> | null
    ) => Promise<UserSession | null>,
  };
};

export default useUserSession;
