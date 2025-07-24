type cardType = {
  title: string;
  description: string;
};
function Hero() {
  const heroCards: cardType[] = [
    {
      title: "Driver Size",
      description:
        "This is the size of the speaker driver in each earbud, typically measured in millimeters (mm)",
    },
    {
      title: "Frequency Response",
      description:
        "The range of frequencies (measured in Hertz, Hz) that the earbuds can reproduce.",
    },
    {
      title: "Sensitivity",
      description:
        "Sensitivity is measured in decibels (dB) and indicates how loud the earbuds.",
    },
  ];
  return (
    <section className="flex flex-col lg:flex-row items-stretch justify-evenly container mx-auto px-4 py-8">
      <div className="left-content flex-1 flex flex-col justify-start gap-10">
        <p className="text-[#31A758] ">Immerse in Nature's Sounds with </p>
        <h2 className="text-[#31A758] text-6xl uppercase font-bold">
          SonicJive Earbuds.
        </h2>
        <p className="text-[#909090]">
          At SonicJive, we believe that technology and nature can coexist
          harmoniously. Our mission is to provide you with earbuds that offer
          exceptional sound quality while respecting our planet's delicate
          ecosystem.
        </p>
        <div className="lg:w-[300px] lg:h-[84px]">
          <div className="flex justify-between items-center gap-5 font-semibold text-2xl">
            <span>Price</span>
            <span>$450</span>
          </div>
          <button className="bg-[#31A758] text-white px-6 py-3 rounded-lg mt-4 hover:bg-[#28a745] transition-colors cursor-pointer w-full">
            Order Now
          </button>
        </div>
      </div>
      <div className="center-content flex-1 relative overflow-hidden lg:w-[481px] lg:h-[481px]">
        <img
          src="/1.png"
          alt="aerpods image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="right-content flex-1 flex lg:flex-col gap-3  flex-wrap">
        {heroCards.map((card) => (
          <Card cardData={card} key={card.title}/>
        ))}
      </div>
    </section>
  );
}

export default Hero



const Card = ({ cardData }: { cardData: cardType }) => {
  return (
    <div className="lg:max-w-[300px] p-4 text-justify hover:shadow-2xl duration-300 rounded-sm">
      <h3 className="font-bold">{cardData.title}</h3>
      <p className="text-[#909090]">{cardData.description}</p>
    </div>
  );
};