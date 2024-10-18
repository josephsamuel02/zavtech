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
      image: "/image/VSAT.jpg",
      title: "Cable Satellite Services",
      text: " Want to keep an eye on your premises when you aren’t present, contact our team at Zavstech for a reliable CCTV installation service.",
    },
    {
      image: "/image/VSAT.jpg",
      title: "Satellite Internet System",
      text: "Top Quality Engineers",
    },
    { image: "/image/VSAT.jpg", title: "CCTV Installation", text: "Professional Service" },

    {
      image: "/image/VSAT.jpg",
      title: "Cable Satellite Services",
      text: "Industry Standard Materials",
    },
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
            <img src={i.icon} alt={i.text} className=" mx-auto w-10 md:w-20 h-10 md:h-20" />
            <div className="w-auto bg-white mx-auto ">
              <p className=" text-sm md:text-[15px] text-center font-nunito text-[#0b3010] font-bold">
                {i.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto w-full p-20 bg-bg1 object-cover">
        <div className="w-full h-auto flex flex-row items-center">
          <div className="w-[100%] h-[300px] m-auto flex flex-row p-6 items-center bg-[#0000009c] backdrop-blur-sm border border-[#d8f5d4]   item-center rounded-xl shadow-md   ">
            <img
              src="/image/logo.png"
              alt="logo"
              className=" m-auto w-1/4 h-auto object-cover transition-transform "
            />
            <div className="h-auto w-2/3">
              <p className="text-3xl text-[#f8faf8] font-bold font-RacingSans">
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
      </div>

      <div className="mx-auto my-10 w-full px-5 ">
        <div className="w-full h-auto flex flex-col md:flex-row items-center">
          <div className=" relative  w-[400px] h-[400px] m-auto bg-[#ffffff]   items-center  flex flex-col item-center rounded-full shadow-xl hover:shadow-2xl border border-[#b3b2b27c]   ">
            <img
              src="/image/tube-spinner.svg"
              alt=""
              className="absolute  m-auto w-full h-full rounded-full object-cover"
            />
            <div className="w-auto h-auto m-auto bg-[#f1ecec63]  p-6 items-center transform rotate-0 hover:rotate-6  flex flex-col item-center border-2 border-green-600 border-r-green-100  rounded-full  ">
              <img
                src="/image/VSAT.jpg"
                alt=""
                className=" m-auto w-[250px] h-[250px] rounded-full object-cover"
              />
            </div>
          </div>
          <div className="w-3/5 h-auto m-auto p-6 py-12 items-center  backdrop-blur-sm border border-[#d8f5d4] flex flex-col item-center rounded-xl shadow-md   ">
            <p className="text-4xl text-[#2d8d20] leading-10 font-bold font-RacingSans">
              We are prepared to revolutionize the existing limits of the ICT and security
              surveillance market, pushing productivity levels to unprecedented peaks.
            </p>
          </div>
        </div>
      </div>
      <div className=" relative w-full h-auto   ">
        <video ref={videoRef} autoPlay muted loop id className="w-full h-full object-cover ">
          <source src="/video/Vid2.mp4" type="video/mp4" />
        </video>
        {/* bg-[url('/image/gravel_white.jpg')] */}
        <div className=" absolute top-10 left-0 right-0 w-[96%] h-auto mx-auto p-6 py-12 bg-[#50525081] backdrop-blur-sm border border-[#d8f5d4] flex flex-col rounded-2xl shadow ">
          <p className="text-2xl font-bold font-roboto text-[#bef3b0]">Services</p>
          <h3 className="text-5xl text-[#ffffff] font-bold font-RacingSans my-1">
            We Provide Range of Technical serviced
          </h3>

          {/* <Slider {...settings} className="my-20 w-full flex flex-row"> */}
          <div className="w-full h-[450px] flex flex-col md:flex-row items-center">
            {Services.map((i, n) => (
              <div
                className="w-[300px] h-[350px] p-2.5 mx-1 bg-[#3031308e] rounded-lg shadow flex flex-col border border-[#ffffffa4] items-center"
                key={n}
              >
                <img
                  src={i.image}
                  alt="image"
                  className="w-full h-[220px] object-cover rounded"
                />
                <div className="w-full h-[120px]">
                  <h3 className="text-xl py-1  text-[#ffffff] font-bold">{i.title}</h3>
                  <p className="text-md font-nunito  text-white leading-[20px]">{i.text}</p>
                </div>
              </div>
            ))}
          </div>
          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default HomepageContents;
