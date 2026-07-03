"use client"

const Stats = () => {
  const stats = [
    {
      number: "15+",
      label: "Years Ministry",
      color: "text-[#24195D]"
    },
    {
      number: "500+",
      label: "Lives Impacted",
      color: "text-[#FFA100]"
    },
    {
      number: "50+",
      label: "Leaders Trained",
      color: "text-[#D62828]"
    }
  ]

  return (
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className={`text-3xl lg:text-4xl font-bold ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-xl  font-medium text-black">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

  )
}

export default Stats
