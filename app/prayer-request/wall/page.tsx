import type { Metadata } from "next";
import PrayerWallGrid from "@/components/PrayerWallGrid";

export const metadata: Metadata = {
  title: "Prayer Wall | Newlife Community Baptist Church",
  description:
    "Together in prayer, we stand stronger. Add your request, encourage others, and lift our voices in one accord.",
};

const Page = () => {
  return <PrayerWallGrid />;
};

export default Page;
