type headingType = {
  title: string;
  description: string;
};
function SectionTitle({ heading }: { heading: headingType }) {
  return (
    <div className="text-center container mx-auto">
      <h1 className="text-[#31A758] mb-10 font-bold capitalize text-7xl">
        {heading.title}
      </h1>
      <p className="text-[#909090] max-w-3/4 mx-auto">{heading.description}</p>
    </div>
  );
}

export default SectionTitle;
