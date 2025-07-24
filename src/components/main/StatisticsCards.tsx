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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto">
        {
            statisticsData.map((stat)=>{
                return (
                  <div key={stat.number} className="flex items-center gap-4 p-4 hover:shadow-2xl duration-300 rounded-md w-[264px] h-[128px]">
                    <span className="text-6xl text-[#31A758] uppercase font-bold">
                      {stat.number}
                    </span>
                    <span className="text-[#909090]">{stat.text}</span>
                  </div>
                );
            })  
        }
    </div>
  )
}

export default StatisticsCards