import { Inbox, Lock, CheckCircle2 } from "lucide-react";
import StatsCard from "../common/StatsCard";
import PrayerRequestTable from "../ui/PrayerRequestTable";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Requests",
      count: 242,
      icon: <Inbox className="w-5 h-5" />,
      iconBg: "bg-gold/15",
      iconColor: "text-gold-hover",
    },
    {
      title: "Open Requests",
      count: 73,
      icon: <Inbox className="w-5 h-5" />,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      title: "Anonymous Requests",
      count: 170,
      icon: <Lock className="w-5 h-5" />,
      iconBg: "bg-navy/10",
      iconColor: "text-navy",
    },
    {
      title: "Approved Requests",
      count: 151,
      icon: <CheckCircle2 className="w-5 h-5" />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];
  const timestamp = "at 7:42hrs on 12/10/2025";
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 pt-6 pb-10">
      <div className="pb-8">
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
          Hello Rev. Ocansey!
        </h1>
        <p className="text-sm text-muted mt-1">
          Here&apos;s an overview of your prayer wall activity.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat) => (
          <StatsCard
            title={stat.title}
            count={stat.count}
            key={stat.title}
            icon={stat.icon}
            iconBg={stat.iconBg}
            iconColor={stat.iconColor}
            timeStamp={timestamp}
          />
        ))}
      </div>
      <div className="py-6">
        <PrayerRequestTable />
      </div>
    </div>
  );
};

export default Dashboard;
