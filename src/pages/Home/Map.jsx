import PUBLICROUTES from "../../utils/PublicRoutes";
const Map = () => {
  return (
    <div className="mx-auto mt-12 md:mt-32 mb-16  w-full md:w-11/12 flex flex-col md:flex-row items-center">
      <div className="w-auto mx-auto mb-12 md:mb-auto flex flex-col">
        <h3 className="mb-6 text-xl md:text-lg text-gray-900 font-bold font-roboto">
          Pay Us a Visit Today!
        </h3>
        <h3 className="mb-4  text-gray-700 font-bold font-roboto uppercase">ADDRESS</h3>
        <h3 className="mb-6 text-xl md:text-lg font-normal">
          1 Igbobi Street, Jibowu Yaba, Lagos.
        </h3>
        {/* <h3 className="mb-1  ">Address 2</h3>
        <h3 className="mb-6 font-normal">
          1/7 Otunba Bayo Dejonwo Street, Plywood Junction, Lagos Road, Epe,Lagos State
        </h3> */}
        <a href={PUBLICROUTES.CONTACT_US} className="inline-block">
          <button className="flex text-[#fcfcfc] bg-[#41AC26] hover:bg-[#2bac26f1] px-8 md:px-6 py-3 md:py-2 items-center rounded-md gap-2">
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </a>
      </div>

      <div className="mx-auto w-full md:w-2/3 h-96 rounded-none md:rounded-l-none">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.013716286469!2d3.3681055000000004!3d6.5199463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c4de63aa653%3A0xfa07abe1ab22402e!2s1%20Igbobi%20St%2C%20Jibowu%2C%20Lagos%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1729281363494!5m2!1sen!2sng"
          width="100%"
          height="400"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.013716286469!2d3.3681055000000004!3d6.5199463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c4de63aa653%3A0xfa07abe1ab22402e!2s1%20Igbobi%20St%2C%20Jibowu%2C%20Lagos%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1729281363494!5m2!1sen!2sng"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>
    </div>
  );
};

export default Map;
