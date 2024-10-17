import  Header  from "../components/Header";
import Navbar from "~/components/Navbar";
import Featured from "~/components/Featured";
import Properties from "~/components/Properties";
import FeaturedProperties from "~/components/FeaturedProperties";
import MailList from "~/components/MailList";
import Footer from "~/components/Footer";

export default function Home() {
  

  return (
    <div>
    <Navbar/>
    <Header type="home"/>
    <div className="homeContainer mt-[50px] flex overflow-x-hidden flex-col items-center gap-[30px]">
    <Featured/>
    <h1 className="HomeTitle w-[1024px] text-[30px] text-center font-bold">Browse by property Type</h1>
    <Properties/>
    <h1 className="HomeTitle w-[1024px] text-[30px] text-center font-bold">Top Rated Properties</h1>
    <FeaturedProperties/>
    <MailList/>
    <Footer/>
    </div>
  </div>
  );
}


