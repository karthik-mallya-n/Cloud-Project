import Link from "next/link"


export default function FeaturedProperties() {
  return (
    <div className="fp w-full max-w-[1024px] flex justify-between gap-[20px]">
      <Link href={`/hotels/clv44fkkx0001xr02oisu9vra`}><div className="fpItem flex-1 gap-[5px] flex flex-col">
      <img src="le.jpg" alt="" className="fpImg w-full h-[200px] rounded-[10px]" />
      <span className="fpName font-bold">Le Villagio</span>
      <span className="fpCity font-[300]">Wayanad</span>
      <span className="fpPrice font-[500]">Starting from 13999/-</span>
      <div className="fpRating">
        <button className="bg-[#003580] text-white border-none p-1 mr-[10px] font-bold" >9.2</button>
      </div>
      <span className="text-[14px]">Excellent</span>
      </div></Link>
      <Link href={`/hotels/clv4tlsjq001q10xmgi5j7xpn`}>
      <div className="fpItem flex-1 gap-[5px] flex flex-col">
      <img src="west.jpg" alt="" className="fpImg w-full h-[200px] rounded-[10px]" />
      <span className="fpName font-bold">The WestIn</span>
      <span className="fpCity font-[300]">Gurgaon</span>
      <span className="fpPrice font-[500]">Starting from 14459/-</span>
      <div className="fpRating">
        <button className="bg-[#003580] text-white border-none p-1 mr-[10px] font-bold" >9.3</button>
      </div>
      <span className="text-[14px]">Excellent</span>
      </div></Link>
      <Link href={`/hotels/clv4tqqpd001x10xmo1d2btf1`}>
      <div className="fpItem flex-1 gap-[5px] flex flex-col">
      <img src="taj.jpg" alt="" className="fpImg w-full h-[200px] rounded-[10px]" />
      <span className="fpName font-bold">Taj</span>
      <span className="fpCity font-[300]">Kannur</span>
      <span className="fpPrice font-[500]">Starting from 11999/-</span>
      <div className="fpRating">
        <button className="bg-[#003580] text-white border-none p-1 mr-[10px] font-bold" >9.5</button>
      </div>
      <span className="text-[14px]">Excellent</span>
      </div></Link>
      <Link href={`/hotels/clv4u5jtp002410xmn444n3er`}>
      <div className="fpItem flex-1 gap-[5px] flex flex-col">
      <img src="Hyatt.jpg" alt="" className="fpImg w-full h-[200px] rounded-[10px]" />
      <span className="fpName font-bold">Grand Hyatt</span>
      <span className="fpCity font-[300]">Jaipur</span>
      <span className="fpPrice font-[500]">Starting from 15699/-</span>
      <div className="fpRating">
        <button className="bg-[#003580] text-white border-none p-1 mr-[10px] font-bold" >9.0</button>
      </div>
      <span className="text-[14px]">Excellent</span>
      </div></Link>
    </div>
  )
}
