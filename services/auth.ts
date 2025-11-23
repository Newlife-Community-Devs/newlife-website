import { PAGE_URL } from "@/constants";
import { UserSession } from "@/models";
import {
  getServerSession,
  type NextAuthOptions,
  type User,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getSession } from "next-auth/react";

const BACKEND_URL = "https://newlife-prayer-wall-backend-1gq0w2ror.vercel.app";

export const getUserSession = async ({ isServer } = { isServer: true }) => {
  if (isServer === true) {
    return (await getServerSession(AuthOptions)) as UserSession;
  }
  return (await getSession()) as unknown as UserSession;
};

export const AuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        try {
          const response = await fetch(`${BACKEND_URL}/auth/token`, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              accept: "application/json",
            },
            body: new URLSearchParams({
              username: credentials.username,
              password: credentials.password,
            }),
          });

          if (!response.ok) {
            throw new Error("Invalid credentials");
          }

          const data = await response.json();

          return {
            id: credentials.username,
            email: credentials.username,
            token: data.access_token,
            token_type: data.token_type,
          } as User;
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ user, token, trigger, session }) {
      if (trigger === "update") {
        token.user = {
          ...session,
          token: (token?.user as UserSession)?.token,
        };
      } else if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ token, session }) {
      const user = token?.user as UserSession | undefined;

      return {
        ...(user ?? {}),
        expires: session.expires,
      } as any;
    },
  },
  session: {
    maxAge: 24 * 60 * 60,
    strategy: "jwt",
  },
  pages: {
    signIn: PAGE_URL.ADMIN_LOGIN,
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};
