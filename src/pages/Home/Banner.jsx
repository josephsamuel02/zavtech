import PUBLICROUTES from "../../utils/PublicRoutes";
const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-white">
      <div className=" mx-0 w-full h-full  flex flex-col relative ">
        <video autoPlay muted loop id className="w-full h-full   object-cover ">
          <source src="/video/Vid4.mp4" type="video/mp4" />
        </video>

        <div className=" mx-auto absolute top-32 md:top-16 left-1 w-full mt-24">
          <div className="mx-auto md:ml-28 w-60 md:w-1/2 h-72 md:h-auto py-16 px-4 bg-[#0000009c] backdrop-blur-sm border border-[#d8f5d4] flex flex-col item-center rounded-xl shadow-md">
            <h3 className="text-xl md:text-[65px] text-[#ffffff] leading-[50px] text-center font-RacingSans ">
              Welcome to Zavs Technology
            </h3>

            <h3 className="text-xl md:text-2xl mt-9 text-center text-[#f7c931] font-bold font-AnekDevanagari ">
              Experts in Surveillance and Communication Systems
            </h3>
            <a
              href={PUBLICROUTES.GARAGE}
              className="mx-4 w-1/3 mt-9   py-4 text-sm md:text-base bg-[#41ac26] hover:bg-[#dfb734] text-white   text-center rounded-lg shadow-sm cursor-pointer"
            >
              View Our Garage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
