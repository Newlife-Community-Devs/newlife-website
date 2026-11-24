import { API_BASE_URL, PAGE_URL } from "@/constants";
import { UserSession } from "@/models";
import {
  getServerSession,
  type NextAuthOptions,
  type User,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getSession } from "next-auth/react";

interface ApiUser {
  id: string;
  email: string;
  fullName: string;
  roles: string[];
  isLockedOut: boolean;
}

interface ApiLoginResponse {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresAt: string;
  user: ApiUser;
}

const REFRESH_SKEW_MS = 30_000;

async function refreshSession(
  refreshToken: string,
): Promise<ApiLoginResponse | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as ApiLoginResponse;
  } catch {
    return null;
  }
}

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
          const response = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
            body: JSON.stringify({
              email: credentials.username,
              password: credentials.password,
            }),
          });

          if (!response.ok) {
            throw new Error("Invalid credentials");
          }

          const data = (await response.json()) as ApiLoginResponse;

          return {
            id: data.user.email,
            email: data.user.email,
            name: data.user.fullName,
            roles: data.user.roles,
            token: data.accessToken,
            refreshToken: data.refreshToken,
            tokenExpiresAt: data.accessTokenExpiresAt,
          } as User;
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        const authenticated = user as unknown as UserSession;
        token.accessToken = authenticated.token;
        token.refreshToken = authenticated.refreshToken;
        token.tokenExpiresAt = authenticated.tokenExpiresAt;
        token.roles = authenticated.roles;
        token.name = user.name;
        token.email = user.email;
        return token;
      }

      const expiresAt = token.tokenExpiresAt
        ? new Date(token.tokenExpiresAt as string).getTime()
        : 0;

      if (Date.now() < expiresAt - REFRESH_SKEW_MS) {
        return token;
      }

      const refreshed = await refreshSession(token.refreshToken as string);

      if (!refreshed) {
        token.sessionExpired = true;
        return token;
      }

      token.accessToken = refreshed.accessToken;
      token.refreshToken = refreshed.refreshToken;
      token.tokenExpiresAt = refreshed.accessTokenExpiresAt;
      token.roles = refreshed.user.roles;
      return token;
    },
    async session({ token, session }) {
      if (token.sessionExpired) {
        return null as unknown as typeof session;
      }

      return {
        ...(session as object),
        email: token.email as string,
        name: token.name as string,
        roles: (token.roles as string[]) ?? [],
        token: token.accessToken as string,
        refreshToken: token.refreshToken as string,
        tokenExpiresAt: token.tokenExpiresAt as string,
        expires: session.expires,
      } as typeof session;
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
};
