

function NewsLatter() {
  return (
    <section className="container mx-auto  ">
      <div className="bg-[#F8F8F8] flex justify-around items-center p-4 flex-wrap">
        <div className="image-container w-full lg:w-[371px] aspect-square">
          <img src="/1.png" alt="earpuds" />
        </div>
        <div>
          <h2 className="text-[#31A758] text-6xl font-bold">
            Subscribe To Our Newsletter
          </h2>
          <p className="text-[#747474] my-4">
            Sign up for to get daily updates & news about our new products and
            features.
          </p>
          <div className="flex items-center gap-4">
            <input
              type="email"
              placeholder="@ Enter your email"
              className="ring-1 p-3 ring-[#747474] bg-white rounded-md flex-1"
            />
            <button className="px-4 py-3 border rounded-md bg-[#31A758] text-white font-semibold cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLatter