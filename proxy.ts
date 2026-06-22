import { withAuth } from "next-auth/middleware";

export default withAuth;

export const config = {
  matcher: [
    "/prayer-request/admin/dashboard",
    "/prayer-request/admin/prayer-wall",
  ],
};
