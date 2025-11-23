export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/prayer-request/admin/dashboard",
    "/prayer-request/admin/prayer-wall",
  ],
};
