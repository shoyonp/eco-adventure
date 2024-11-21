const Banner = () => {
  return (
    <div>
      <div className="carousel rounded-md w-full">
        <div id="item1" className="carousel-item bg-banner1 w-full h-[400px]">
          <div className="flex flex-col mx-auto items-center my-auto">
            <h1 className="text-5xl my-5 text-center font-bold text-white shadow-black/50">
              Journey Into the Heart of the Jungle
            </h1>
            <p className="text-sm w-4/5 md:w-4/5 md:text-lg mb-5 font-normal text-[#F3F4F6] tracking-wide text-center">
              Explore lush rainforests, cascading waterfalls, and diverse
              wildlife. Your adventure starts here.
            </p>
          </div>
        </div>
        <div id="item2" className="carousel-item bg-banner2 w-full">
          <div className="flex flex-col mx-auto items-center my-auto">
            <h1 className="text-5xl my-5 text-center font-bold text-white shadow-black/50">
              Conquer Majestic Peaks
            </h1>
            <p className="text-sm w-4/5 md:w-4/5 md:text-lg text-center mb-5 font-normal text-[#F3F4F6] tracking-wide	">
              Experience the serenity of snow-capped mountains and breathtaking
              trails.
            </p>
          </div>
        </div>
        <div id="item3" className="carousel-item bg-banner3 w-full">
          <div className="flex flex-col mx-auto items-center my-auto">
            <h1 className="text-5xl my-5 text-center font-bold text-white shadow-black/50">
              Dive Into an Underwater Paradise
            </h1>
            <p className="text-sm w-4/5 md:w-4/5 md:text-lg text-center mb-5 font-normal text-[#F3F4F6] tracking-wide	">
              Discover vibrant coral reefs and marine life in eco-conscious
              diving adventures
            </p>
          </div>
        </div>
        <div id="item4" className="carousel-item bg-banner4 w-full">
          <div className="flex flex-col mx-auto items-center my-auto">
            <h1 className="text-5xl my-5 text-center font-bold text-white shadow-black/50">
              Unwind in the Sands of Time{" "}
            </h1>
            <p className="text-sm w-4/5 md:w-4/5 md:text-lg text-center mb-5 font-normal text-[#F3F4F6] tracking-wide	">
              Experience the beauty of golden deserts, camel rides, and starry
              nights.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
