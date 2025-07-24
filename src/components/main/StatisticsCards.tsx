type statisticsCArdType = {
  number: string;
  text: string;
};
function StatisticsCards() {
  const statisticsData: statisticsCArdType[] = [
    {
      number: "10+",
      text: "Service Geographics",
    },
    {
      number: "30M+",
      text: "Fortune Clients",
    },
    {
      number: "10K+",
      text: "Sales Per month",
    },
    {
      number: "20+",
      text: "Years of Journey",
    },
  ];
  return (
    <div className=" container mx-auto">
      <div className="flex justify-between items-center flex-wrap gap-4">
        {statisticsData.map((stat) => {
          return (
            <div
              key={stat.number}
              className="flex items-center gap-4 p-4 hover:shadow-2xl duration-300 rounded-md w-full justify-center lg:w-[264px] lg:h-[128px]"
            >
              <span className="text-4xl md:text-6xl text-[#31A758] uppercase font-bold">
                {stat.number}
              </span>
              <span className="text-[#909090]">{stat.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StatisticsCards;
