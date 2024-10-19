/* eslint-disable react/no-unescaped-entities */

import { useEffect, useRef } from "react";

const HomepageContents = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Adjust playback speed (e.g., 0.5 for half speed)
    }
  }, []);

  const Values = [
    { icon: "/icons/technology.svg", text: "Modern Technology" },
    { icon: "/icons/engineer.svg", text: "Top Quality Engineers" },
    { icon: "/icons/check mark.svg", text: "Industry Standard Materials" },
    { icon: "/icons/man-in-suits.svg", text: "Professional Service" },
  ];

  const Services = [
    {
      image: "/image/cable_dish.webp",
      title: "Cable Satellite Services",
      text: "We bring the world closer with our professional satellite installation services. Our solutions include: Residential and commercial satellite TV installation precise alignment and configuration for optimal signal strength Installation of satellite-based internet solutions for remote locations",
    },
    {
      image: "/image/cctv.webp",
      title: "CCTV Surveillance Installation",
      text: "Ensure the safety of your home or business with our high-quality, expertly installed CCTV systems. We offer: Customized surveillance setups for homes,  and commercial properties   with latest cameras with high-definition , night vision, and motion detection Remote monitoring solutions and more",
    },
    {
      image: "/image/vsat.webp",
      title: "VSAT Installation",
      text: "Stay connected anywhere, anytime with our dependable VSAT (Very Small Aperture Terminal) installations: Internet access for businesses and remote sites Installation for enterprises requiring high-speed, low-latency communication Robust, weather-resistant networks for mission-critical operations",
    },
    // {
    //   image: "/image/VSAT.jpg",
    //   title: "Cable Satellite Services",
    //   text: "Industry Standard Materials",
    // },
  ];
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: true,
  // };
  return (
    <div className="w-full h-auto object-cover ">
      <div className="mx-auto mt-1 py-3  w-full h-auto bg-white flex flex-row item-center">
        {Values.map((i, n) => (
          <div className="mx-auto w-1/4 h-auto flex flex-col item-center" key={n}>
            <img src={i.icon} alt={i.text} className=" mx-auto w-8 md:w-20 h-8 md:h-20" />
            <div className="w-auto bg-white mx-auto ">
              <p className=" text-xs md:text-[15px] text-center font-nunito text-[#0b3010] font-bold">
                {i.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto w-full p-10 md:p-20 bg-bg1 object-cover">
        <div className="w-full h-auto md:h-[300px] m-auto py-6 flex flex-col md:flex-row p-4 items-center bg-[#0303038e] backdrop-blur-sm border border-[#d8f5d4]   item-center rounded-xl shadow-md   ">
          <img
            src="/image/logo.png"
            alt="logo"
            className=" m-auto w-3/5 md:w-1/4 h-auto object-cover transition-transform "
          />
          <div className="h-auto w-full my-4 md:my-auto md:w-2/3">
            <p className="text-2xl md:text-3xl text-[#f8faf8] font-RacingSans">
              We're prepared to revolutionize the existing limits of the ICT and security
              surveillance market, pushing productivity levels to unprecedented peaks.
            </p>
          </div>
        </div>
        {/* <div className="w-3/5 h-[300px] m-auto flex flex-col items-center bg-[#0000009c] backdrop-blur-sm border border-[#d8f5d4]  item-center rounded-xl shadow-md   ">
            <img
              src="/image/logo.png"
              alt="logo"
              className=" m-auto w-1/2 h-auto object-cover transition-transform "
            />
          </div> */}
      </div>

      <div className="mx-auto my-10 w-full px-5 ">
        <div className="w-full h-auto flex flex-col md:flex-row items-center">
          <div className=" relative  w-[280px] h-[280px] md:w-[400px] md:h-[400px] m-auto bg-[#ffffff]   items-center  flex flex-col item-center rounded-full shadow-xl hover:shadow-2xl border border-[#b3b2b27c]   ">
            <img
              src="/image/tube-spinner.svg"
              alt=""
              className="absolute  m-auto w-full h-full rounded-full object-cover"
            />
            <div className="w-auto h-auto m-auto bg-[#f1ecec63]  p-6 items-center transform rotate-0 hover:rotate-6  flex flex-col item-center border-2 border-green-600 border-r-green-100  rounded-full  ">
              <img
                src="/image/VSAT.jpg"
                alt=""
                className=" m-auto w-[180px] h-[180px] rounded-full object-cover"
              />
            </div>
          </div>
          <div className=" w-11/12 md:w-3/5 h-auto m-auto my-6 md:my-auto p-6 py-12 items-center  backdrop-blur-sm border border-[#d8f5d4] flex flex-col item-center rounded-xl shadow-md   ">
            <p className="text-xl md:text-4xl text-[#2d8d20] leading-7 md:leading-10   font-RacingSans">
              We specialize in delivering cutting-edge solutions to meet your surveillance and
              communication needs. Looking to secure your home or business with top-tier
              surveillance systems ? we’ve got you covered.
            </p>
          </div>
        </div>
      </div>
      <div className=" relative w-full h-full md:h-[860px] lg:h-[830px]   ">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          id
          className="w-full h-[925px] md:h-full object-cover "
        >
          <source src="/video/Vid2.mp4" type="video/mp4" />
        </video>
        {/* bg-[url('/image/gravel_white.jpg')] */}
        <div className=" absolute top-10 left-0 right-0 w-[96%] h-auto mx-auto p-6 py-12 bg-[#50525081] backdrop-blur-sm border border-[#d8f5d4] flex flex-col rounded-2xl shadow ">
          <p className="text-2xl font-bold font-roboto text-[#bef3b0]">Services</p>
          <h3 className="text-3xl md:text-5xl text-[#ffffff]  font-RacingSans my-1">
            We Provide Range of Technical serviced
          </h3>
          <p className="text-white text-md md:text-base font-robot">
            At Zavs Technology, we pride ourselves on our technical expertise, attention to
            detail, and customer-first approach. Our team of certified technicians ensures that
            every installation is completed efficiently and to the highest standards.
          </p>
          {/* <Slider {...settings} className="my-20 w-full flex flex-row"> */}
          <div className="w-full h-auto flex flex-row items-center overflow-x-scroll">
            <div className="w-auto lg:w-full h-[500px] flex flex-row items-center">
              {Services.map((i, n) => (
                <div
                  className="w-[300px] h-[450px] p-2.5 mx-6 md:mx-auto bg-[#3031308e] rounded-xl shadow flex flex-col border border-[#ffffffa4] items-center"
                  key={n}
                >
                  <img
                    src={i.image}
                    alt="image"
                    className="w-full h-[220px] object-cover rounded"
                  />
                  <div className="w-full h-[130px]">
                    <h3 className="text-xl py-1  text-[#ffffff] font-bold">{i.title}</h3>
                    <p className="text-[15px] font-nunito  text-white leading-[20px]">
                      {i.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default HomepageContents;
