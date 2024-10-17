import { api } from "~/utils/api";

import Navbar from "../../components/Navbar";
import { useRouter } from 'next/router';
import Header from "../../components/Header";
import MailList from "../../components/MailList";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const Hotel = () => {
  const router = useRouter();
  const {slug} = router.query;
  const hotels = api.hotel.getById.useQuery(`${slug}`) ;
  
  const hotelsImages = api.hotel.getImagePath.useQuery(`${slug}`);


     
   console.log(hotelsImages.data);
  
 
  return (
    <div>
      <Navbar />
      <Header type="list" />
      
      <div className="hotelContainer flex flex-col items-center mt-[20px]">
        
        <div className="hotelWrapper w-full max-w-[1024px] flex flex-col gap-[10px] relative">
          <Link href={`/hotels/confirm`}><button className="bookNow absolute top-[10px] right-0 border-none py-[10px] px-[20px] bg-[#0071c2] text-white font-bold rounded-[5px] cursor-pointer">Reserve or Book Now!</button></Link>
          <h1 className="hotelTitle text-[24px] font-bold">{hotels.data?.name}</h1>
          <div className="hotelAddress text-[12px] flex items-center gap-[10px]">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{hotels.data?.city}  , {hotels.data?.country}</span>
          </div>
          <span className="hotelDistance text-[#0071c2] font-[500]">
            Excellent location – {hotels.data?.distance}
          </span>
          <span className="hotelPriceHighlight text-[#008009] font-[500]">
            Book a stay over ₹2000 at this property and get a free airport taxi
          </span>
          <div className="hotelImages flex flex-wrap justify-between">
            
            { hotelsImages.data?.map((photo) => (
              <div className="hotelImgWrapper w-[33%] pb-1" key={photo.id}>
                
                <img
                  src={photo.Path}
                  alt=""
                  className="hotelImg w-full object-cover cursor-pointer rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails flex justify-between gap-[20px] mt-[20px]">
            <div className="hotelDetailsTexts flex-[3]">
              <h1 className="hotelTitle text-[24px] font-bold">Stay in the heart of City</h1>
              <p className="hotelDesc font-[14px] mt-[20px]">
                {hotels.data?.name} offer a modern and luxurious urban living experience in the heart of the city. With sleek architectural design and premium amenities, these apartments provide residents with comfort, convenience, and style. From spacious layouts to panoramic views of the city skyline, {hotels.data?.city} redefine city living. Whether you're relaxing in the rooftop garden or enjoying the state-of-the-art fitness center, every aspect of these apartments is designed to enhance your lifestyle. Located in a vibrant neighborhood with easy access to dining, shopping, and entertainment options, {hotels.data?.name} offer the perfect blend of sophistication and urban living.
              </p>
            </div>
            <div className="hotelDetailsPrice flex-[1] bg-[#ebf3ff] p-[20px] flex flex-col gap-[20px] rounded-lg">
              <h1 className="text-[18px] text-[#555] font-bold">Perfect for a night stay!</h1>
              <span className="text-[14px]">
                Located in the real heart of Krakow, this property has an
                excellent location score of {hotels.data?.rating}!
              </span>
              <h2 className="font-[500]">
                <b>₹{hotels.data?.initialPrice}</b> (per night)
              </h2>
              <Link href={`/hotels/confirm`}>
              <button className="border-none py-[10px] px-[20px] bg-[#0071c2] text-white font-bold cursor-pointer rounded-[5px]">Reserve or Book Now!</button>
              </Link>
            </div>
          </div>
        </div>
        <MailList />
        <div className="text mt-[20px]"></div>

        <Footer />
      </div>
    </div>
  );
};

export default Hotel;