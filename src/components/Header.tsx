import Link from "next/link";

import { useState } from "react";

export default function Header(props: { type: string }) {
  const [destination, setDestination] = useState("");
  

  return (
    <div>
      <div className="header relative flex justify-center bg-[#003580] text-white">
        <div className="headerContainer mb-[100px] mt-[20px] w-full max-w-[1024px]">
          <div className="headerList flex items-center gap-[20px] mb-[10px]">
            <div className="headerListItems  cursor-pointer p-[10px] hover:rounded-lg hover:bg-white hover:p-[10px] hover:text-blue-600">
              <span>Stays</span>
            </div>
            <div className="headerListItems  cursor-pointer p-[10px] hover:rounded-lg hover:bg-white hover:p-[10px] hover:text-blue-600">
              <span>Flights </span>
            </div>
            <div className="headerListItems  cursor-pointer p-[10px] hover:rounded-lg hover:bg-white hover:p-[10px] hover:text-blue-600">
              <span>Car Rentals</span>
            </div>
            <div className="headerListItems  cursor-pointer p-[10px] hover:rounded-lg hover:bg-white hover:p-[10px] hover:text-blue-600">
              <span>Attractions</span>
            </div>
            <div className="headerListItems  cursor-pointer p-[10px] hover:rounded-lg hover:bg-white hover:p-[10px] hover:text-blue-600">
              <span>Taxi</span>
            </div>
          </div>
          {props.type !== "list" && (
            <>
              <h1 className="headertitle p-[2px] text-[30px] mb-[20px]">
                A lifetime of discounts ? Its Genius
              </h1>
              <p className="headerDesc p-[2px] text-[20px]" >
                Get rewarded for your travels - unlock instant savings of 10% or
                more with a free booking account
              </p>
              <div className="headerSearch absolute bottom-[-25px] flex h-2  w-full max-w-[1024px] items-center justify-evenly rounded-lg border-[3px] border-[#febb02] bg-white px-0  py-10 text-gray-500">
                <div className="headerSearchItem flex items-center gap-[10px]">
                  <input
                    type="text"
                    placeholder="Country/City/Hotel"
                    className="header SearchInput border-none outline-none"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>

                <div className="headerSearchItem flex items-center gap-[10px]">
                  <Link href={`/${destination}`}>
                    <button className="headerButton cursor-pointer rounded-lg border-none bg-blue-600 p-[10px] font-medium text-white">
                      {" "}
                      Search
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
