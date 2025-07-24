import Button from "../Button";
import SectionTitle from "../SectionTitle";

function Why() {
  return (
    <section>
      <SectionTitle
        heading={{
          title: "Why Choose Us",
          description:
            "At SonicJive, we believe that technology and nature can coexist harmoniously. Our mission is to provide you with earbuds that offer exceptional sound quality while respecting our planet's delicate ecosystem. ",
        }}
      />
      <div className="why-content flex flex-wrap justify-around items-stretch container mx-auto">
        <div className="flex lg:flex-col justify-around items-start ">
          <div>
            <h3 className="text-[#31A758]  font-bold text-2xl mb-3">
              Sound quality
            </h3>
            <p className="text-[#909090]">Premium sound quality and comfort.</p>
          </div>
          <div>
            <h3 className="text-[#31A758]  font-bold text-2xl mb-3">
              Battery Life
            </h3>
            <p className="text-[#909090]">Long-lasting earbuds battery life.</p>
          </div>
        </div>
        <div className="lg:w-[450px] lg:h-[450px] w-full relative">
          <img
            src="/2.png"
            alt="earpods image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-around items-start ">
          <div>
            <h3 className="text-[#31A758]  font-bold text-2xl mb-3">
              Sustainable
            </h3>
            <p className="text-[#909090]">
              Sustainable materials and eco-friendly.
            </p>
          </div>
          <div>
            <h3 className="text-[#31A758]  font-bold text-2xl mb-3">
              Technology
            </h3>
            <p className="text-[#909090]">Premium sound quality and comfort.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button>
            Discover
        </Button>
      </div>
    </section>
  );
}

export default Why;
