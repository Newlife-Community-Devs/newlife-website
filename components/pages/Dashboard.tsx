import StatsCard from "../common/StatsCard";
import PrayerRequestTable from "../ui/PrayerRequestTable";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Requests",
      count: 242,
      bgColor: "bg-yellow-200",
      borderColor: "border-yellow-300",
      textColor: "text-yellow-600",
      countColor: "text-gray-900",
    },
    {
      title: "Open Requests",
      count: 73,
      bgColor: "bg-red-200",
      borderColor: "border-red-300",
      textColor: "text-red-600",
      countColor: "text-gray-900",
    },
    {
      title: "Anonymous Requests",
      count: 170,
      bgColor: "bg-purple-200",
      borderColor: "border-purple-300",
      textColor: "text-purple-600",
      countColor: "text-gray-900",
    },
    {
      title: "Approved Requests",
      count: 151,
      bgColor: "bg-green-200",
      borderColor: "border-green-300",
      textColor: "text-green-600",
      countColor: "text-gray-900",
    },
  ];
  const timestamp = "at 7:42hrs on 12/10/2025";
  return (
    <div className="w-full px-10 pt-4 md:px-20 md:pt-10 ">
      <div className="pb-10">
        <h4>Hello Rev. Ocansey!</h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard
            title={stat.title}
            count={stat.count}
            key={stat.title}
            bgColor={stat.bgColor}
            borderColor={stat.borderColor}
            textColor={stat.textColor}
            countColor={stat.countColor}
            timeStamp={timestamp}
          />
        ))}
      </div>
      <div className="py-4">
        <PrayerRequestTable />
      </div>
    </div>
  );
};

export default Dashboard;
