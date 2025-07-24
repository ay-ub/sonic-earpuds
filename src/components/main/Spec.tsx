import Button from "../Button";

function Spec() {
  return (
    <section className="container mx-auto">
      <div className="flex justify-between items-center flex-wrap">
        <div className="w-full lg:w-[512px] lg:h-[512px]">
          <img
            src="/4.png"
            alt="earpuds"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="info w-full lg:w-1/2">
          <h2 className="text-3xl md:text-6xl font-bold text-[#31A758]">
            Immersive Sound Quality
          </h2>
          <p className="text-[#909090] my-5">
            Our earbuds are designed to provide an exceptional audio experience.
            With high-quality drivers and advanced sound processing, you can
            enjoy crystal-clear sound, deep bass, and immersive music or calls.
            These earbuds are meticulously crafted for comfort and secure fit.
            The ergonomic design ensures they stay in place during workouts,
            commutes, or daily activities.
          </p>
          <Button>Discover</Button>
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap-reverse">
        <div className="info w-full lg:w-1/2">
          <h2 className="text-3xl md:text-6xl font-bold text-[#31A758]">
            Wireless Freedom & Long Term Battery
          </h2>
          <p className="text-[#909090] my-5">
            Say goodbye to tangled wires. Our earbuds offer the convenience of
            Bluetooth connectivity, giving you the freedom to move without
            restrictions.You won't have to worry about running out of power.
            These earbuds come with a long-lasting battery that keeps you
            entertained or connected for hours on a single charge.
          </p>
          <Button>Discover</Button>
        </div>
        <div className="w-full lg:w-[512px] lg:h-[512px]">
          <img
            src="/5.png"
            alt="earpuds"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Spec;
