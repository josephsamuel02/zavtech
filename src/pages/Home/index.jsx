import Banner from "./Banner";
import Nav from "../../components/Nav";
import HomepageContents from "./HomepageContents";
import Footer from "../../components/Footer";
import Map from "./Map";
import { SiWhatsapp } from "react-icons/si";
import PUBLIC_URLS from "../../utils/public_urls";
const Home = () => {
  return (
    <div className="w-full h-auto">
      <Nav />
      <Banner />
      <HomepageContents />
      <Map />
      <a
        href={PUBLIC_URLS.whatsapp}
        target="_blank"
        className="mx-auto px-0  fixed right-6 bottom-12 items-center  cursor-pointer rounded-full bg-green-500 hover:bg-green-400 z-20 "
      >
        <span className=" m-auto animate-bounce">
          <SiWhatsapp size={65} color="white" />
        </span>
      </a>
      <Footer />
    </div>
  );
};

export default Home;
