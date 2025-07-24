import SectionTitle from "../SectionTitle";

function Testimonial() {
  const heading = {
    title: "Hear What Our Users Are Saying",
    description:
      "Discover the varied perspectives and experiences as users share their stories,highlighting the versatility of our app.",
  };
  const testimonials: {
    imgUrl: string;
    name: string;
    position: string;
    message: string;
    stars: number;
  }[] = [
    {
      imgUrl: "/6.png",
      name: "Ronald Richards",
      position: "UX Designer at Tokopedia",
      message:
        "As a busy professional, this to-do app is a lifesaver. It effortlessly syncs across all my devices, keeping me on top of my tasks, no matter where I am.",
      stars: 5,
    },
    {
      imgUrl: "/6.png",
      name: "Darell Steward",
      position: "Senior Manager at Google",
      message:
        "The customizable views and efficient prioritization keep me on top of my goals.",
      stars: 5,
    },
    {
      imgUrl: "/6.png",
      name: "Bessie Cooper",
      position: "UX Designer at Tokopedia",
      message:
        "As a busy professional, this to-do app is a lifesaver. It effortlessly syncs across all my devices, keeping me on top of my tasks, no matter where I am.",
      stars: 5,
    },
    {
      imgUrl: "/6.png",
      name: "Guy Hawkins",
      position: "Creative Director at Amazon",
      message: "This app ensures I stay productive, no matter when I am.",
      stars: 5,
    },
    {
      imgUrl: "/6.png",
      name: "Darlene Robertson",
      position: "Product Designer at Stock",
      message:
        "As a busy professional, this to-do app is a lifesaver. It effortlessly syncs across all my devices, keeping me on top of my tasks, no matter where I am.",
      stars: 5,
    },
  ];

  return (
    <section className="container mx-auto">
      <SectionTitle heading={heading} />
      <section className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {testimonials.map((info) => {
          return (
            <div key={info.name}>
              <div className="card-header flex items-center gap-3 mb-3">
                <div className="avatar-container relative w-14 h-1/4">
                  <img
                    src={info.imgUrl}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="user-info">
                  <h3 className="font-semibold text-green-500 text-xl">
                    {info.name}
                  </h3>
                  <p className="text-[#6971A3]">{info.position}</p>
                </div>
              </div>
              <div className="card-content p-2">
                <p className="text-[#6971A3] mb-3 italic">{info.message}</p>
                <Stars count={info.stars} />
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}

export default Testimonial;

const Stars = ({ count }: { count: number }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }, (_, index) => (
        <svg
          key={index}
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.25524 4.62271L6.93425 1.31828C6.98312 1.22265 7.05829 1.14221 7.15132 1.086C7.24436 1.02978 7.35157 1 7.46096 1C7.57034 1 7.67756 1.02978 7.77059 1.086C7.86362 1.14221 7.93879 1.22265 7.98767 1.31828L9.66667 4.62271L13.4202 5.15576C13.5285 5.17043 13.6303 5.21455 13.7142 5.28309C13.798 5.35163 13.8604 5.44182 13.8943 5.54338C13.9282 5.64493 13.9322 5.75375 13.9059 5.85741C13.8795 5.96108 13.8239 6.05542 13.7453 6.12965L11.0297 8.70018L11.6708 12.3318C11.7528 12.7979 11.2487 13.1528 10.8177 12.933L7.46096 11.2177L4.10359 12.933C3.67317 13.1535 3.16908 12.7979 3.25116 12.3311L3.89226 8.69955L1.17663 6.12902C1.09842 6.05473 1.04311 5.96049 1.01698 5.85701C0.990848 5.75353 0.994946 5.64496 1.02881 5.54364C1.06267 5.44232 1.12494 5.35232 1.20854 5.28386C1.29213 5.21541 1.3937 5.17124 1.5017 5.15639L5.25524 4.62271Z"
            fill="#FDD755"
            stroke="#FDD755"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ))}
    </div>
  );
};
