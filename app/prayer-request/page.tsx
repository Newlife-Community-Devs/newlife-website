import type { Metadata } from "next";
import LandingPage from "@/components/pages/LandingPage";

export const metadata: Metadata = {
  title: "Prayer Request | Newlife Community Baptist Church",
  description:
    "No request is too small for God. Post your prayer and let others stand with you in faith.",
};

const page = () => {
  return <LandingPage />;
};

export default page;
