import type { Metadata } from "next";
import AboutUs from "@/components/pages/AboutUs";

export const metadata: Metadata = {
  title: "About Us | Newlife Community Baptist Church",
  description:
    "Discover the heart of Newlife Community Baptist Church — our ministry philosophy, our leadership, and our affiliation with the Ghana Baptist Convention.",
};

const Page = () => {
  return <AboutUs />;
};

export default Page;
