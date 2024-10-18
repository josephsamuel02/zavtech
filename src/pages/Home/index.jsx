import Banner from "./Banner";
import Nav from "../../components/Nav";
import HomepageContents from "./HomepageContents";
import Footer from "../../components/Footer";
import Map from "./Map";

const Home = () => {
  return (
    <div className="w-full h-auto">
      <Nav />
      <Banner />
      <HomepageContents />
      <Map />
      <Footer />

      {/* <a
        href={PUBLIC_URLS.whatsapp}
        target="_blank"
        className="mx-auto px-0  fixed right-6 bottom-12 items-center animate-pulse cursor-pointer rounded-full bg-green-500 hover:bg-green-400 "
      >
        <span className=" m-auto animate-bounce">
          <SiWhatsapp size={65} color="white" />
        </span>
      </a> */}
    </div>
  );
};

export default Home;
