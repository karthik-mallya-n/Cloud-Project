import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

export default function test() {
  const hotels = api.hotel.getAll.useQuery();
  const hotelByCity = api.hotel.getByCity.useQuery("Paris");
  return (
    <div>
      
      {/* {hotelByCity.data?.map((hotel) => {
        return (
          <div>
            <h1 key={hotel.id}>{hotel.name}</h1>
            <div>
              <div>
                {" "}
                {hotel.city}, {hotel.country}
              </div>
              <div> {hotel.description}</div>
            </div>
            <br />
          </div>
        );
      })} */}
      {
        hotels.data?.map((hotel) => {
          return (
            <div key={hotel.id}>
              <h1 >{hotel.name}</h1>
              <div>
                <div>
                  {" "}
                  {hotel.city}, {hotel.country}
                </div>
                <div> {hotel.description}</div>
              </div>
              <br />
            </div>
          );
        })
      }
    </div>
  );
}
