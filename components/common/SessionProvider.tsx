"use client";
import { SessionProvider as Provider } from "next-auth/react";
import type { UserSession } from "@/models";

export interface Props {
  readonly children: React.ReactNode;
  readonly session: UserSession;
}

export default function SessionProvider({ children, session }: Props) {
  return <Provider session={session}>{children}</Provider>;
}
