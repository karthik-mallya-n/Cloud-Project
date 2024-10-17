import { api } from "~/utils/api";

import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import MailList from "../../components/MailList";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Hotel = () => {
  const router = useRouter();
  const { slug } = router.query;
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const hotels = api.hotel.getById.useQuery(slugString ?? "");

  const hotelsImages = api.hotel.getImagePath.useQuery(slugString ?? "");

  console.log(hotelsImages.data);

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="hotelContainer mt-[20px] flex flex-col items-center">
        <div className="hotelWrapper relative flex w-full max-w-[1024px] flex-col gap-[10px]">
          <Link href={`/hotels/confirm`}>
            <button className="bookNow absolute right-0 top-[10px] cursor-pointer rounded-[5px] border-none bg-[#0071c2] px-[20px] py-[10px] font-bold text-white">
              Reserve or Book Now!
            </button>
          </Link>
          <h1 className="hotelTitle text-[24px] font-bold">
            {hotels.data?.name}
          </h1>
          <div className="hotelAddress flex items-center gap-[10px] text-[12px]">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              {hotels.data?.city} , {hotels.data?.country}
            </span>
          </div>
          <span className="hotelDistance font-[500] text-[#0071c2]">
            Excellent location – {hotels.data?.distance}
          </span>
          <span className="hotelPriceHighlight font-[500] text-[#008009]">
            Book a stay over ₹2000 at this property and get a free airport taxi
          </span>
          <div className="hotelImages flex flex-wrap justify-between">
            {hotelsImages.data?.map((photo) => (
              <div className="hotelImgWrapper w-[33%] pb-1" key={photo.id}>
                <img
                  src={photo.Path}
                  alt=""
                  className="hotelImg w-full cursor-pointer rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails mt-[20px] flex justify-between gap-[20px]">
            <div className="hotelDetailsTexts flex-[3]">
              <h1 className="hotelTitle text-[24px] font-bold">
                Stay in the heart of City
              </h1>
              <p className="hotelDesc mt-[20px] font-[14px]">
                {hotels.data?.name} offer a modern and luxurious urban living
                experience in the heart of the city. With sleek architectural
                design and premium amenities, these apartments provide residents
                with comfort, convenience, and style. From spacious layouts to
                panoramic views of the city skyline, {hotels.data?.city}{" "}
                redefine city living. Whether you re relaxing in the rooftop
                garden or enjoying the state-of-the-art fitness center, every
                aspect of these apartments is designed to enhance your
                lifestyle. Located in a vibrant neighborhood with easy access to
                dining, shopping, and entertainment options, {hotels.data?.name}{" "}
                offer the perfect blend of sophistication and urban living.
              </p>
            </div>
            <div className="hotelDetailsPrice flex flex-[1] flex-col gap-[20px] rounded-lg bg-[#ebf3ff] p-[20px]">
              <h1 className="text-[18px] font-bold text-[#555]">
                Perfect for a night stay!
              </h1>
              <span className="text-[14px]">
                Located in the real heart of Krakow, this property has an
                excellent location score of {hotels.data?.rating}!
              </span>
              <h2 className="font-[500]">
                <b>₹{hotels.data?.initialPrice}</b> (per night)
              </h2>
              <Link href={`/hotels/confirm`}>
                <button className="cursor-pointer rounded-[5px] border-none bg-[#0071c2] px-[20px] py-[10px] font-bold text-white">
                  Reserve or Book Now!
                </button>
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
