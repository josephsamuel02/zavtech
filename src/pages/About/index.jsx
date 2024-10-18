import Nav from "../../components/Nav";
import PUBLICROUTES from "../../utils/PublicRoutes";

const About = () => {
  return (
    <>
      <Nav />
      <div className="w-full h-full mb-4 md:mb-36 py-5 md:py-20 px-0 md:px-20 lg:px-40 bg-bg1 bg-center bg-cover bg-no-repeat flex flex-col ">
        <div className="mt-20 px-6 md:px-20 pb-20 mx-auto w-11/12 md:w-full h-auto   bg-white rounded-2xl   shadow-lg">
          <img
            src="/image/logo.png"
            alt="company logo"
            className=" my-12 mx-auto w-64 h-auto"
          />

          <h2 className=" text-3xl md:text-5xl md:py-5 md:pt-8  font-RacingSans  text-[#41AC26] text-center ">
            About Us
          </h2>

          <h2 className=" text-xl md:text-2xl font-RacingSans   text-[#41AC26]  pb-4 pt-10 uppercase">
            Introduction
          </h2>
          <p className="text-xl text-gray-900 font-nunito md:font-roboto leading-9">
            At Zavs Technology, we specialize in delivering cutting-edge solutions to meet your
            surveillance and communication needs. Whether you are looking to secure your home
            or business with top-tier surveillance systems, establish seamless satellite
            connections, or implement reliable VSAT networks, we’ve got you covered. Zavs
            Technology Limited (ZTL) was registered in Nigeria as a limited liability company
            in the later part of 2013 with registration number: RC 1154458
          </p>

          <h2 className=" text-xl md:text-2xl font-RacingSans  text-[#41AC26]  pb-4 pt-10 uppercase">
            THE COMPANY
          </h2>
          <p className="text-xl text-gray-900 font-nunito md:font-roboto leading-9">
            Zavs Technology Limited (ZTL) is all set to redefine the established boundaries of
            the ICT and security surveillance market and is shifting the productivity frontier
            to new heights. In today’s world, people demand instant access to new products and
            ideas. More importantly we want them for their better living standards with
            increased values in this ever-shrinking globe of ours. We are setting free the
            spirit of innovation. ZTL is going to be your first choice in the nearest future as
            well in decades to come.
          </p>

          <h2 className=" text-xl md:text-2xl font-RacingSans   text-[#41AC26]  pb-4 pt-10">
            OUR VISION
          </h2>
          <p className="text-xl text-gray-900 font-nunito md:font-roboto leading-9">
            To be the leading Information, Communication Technology, Security surveillance and
            Satellite Technology Service Provider in the region by achieving total customer
            satisfaction and maximizing shareholders’ value’.
          </p>

          <h2 className=" text-xl md:text-2xl font-RacingSans   text-[#41AC26]  pb-4 pt-10 uppercase">
            Our Mission
          </h2>
          <p className="text-xl text-gray-900 font-nunito md:font-roboto leading-9">
            The Company’s mission is to provide home and business users with a cost effective
            services for installing the latest technology in the services she provides into
            both residential (homes) and business environments (offices).
          </p>

          <a href={PUBLICROUTES.CONTACT_US}>
            <button className=" my-6 px-6 py-2  text-xl md:text-2xl font-RacingSans border hover:border-[#41AC26] bg-[#41AC26] hover:bg-white   text-[#ffffff] hover:text-[#41AC26] rounded-md uppercase">
              Visit Us Today
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
