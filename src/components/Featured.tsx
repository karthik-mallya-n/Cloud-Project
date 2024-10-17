import Link from "next/link"


export default function Featured() {
  return (
    <div>
      <div className="featured w-full max-w-[1024px] flex justify-between gap-[20px] z-1">
        <Link href={`/Australia`}><div className="featuredItem relative text-white overflow-hidden  h-[200px] cursor-pointer">
            <img src="syd.jpg" alt="" className='featuredImg w-full h-[150px] rounded-[10px] object-cover'/>
            <div className="featuredTitles absolute bottom-[50px]">
                <h1 className="m-0 p-0 text-[25px] font-bold">&nbsp;Australia</h1>
                <h2 className="m-0 p-0 text-[20px]">&nbsp;999+ Properties</h2>
            </div>
        </div></Link>
        <Link href={`/USA`}>
        <div className="featuredItem relative text-white overflow-hidden  h-[200px] cursor-pointer">
            <img src="new.jpg" alt="" className='featuredImg w-full h-[150px] rounded-[10px] object-cover'/>
            <div className="featuredTitles absolute bottom-[50px]">
                <h1 className="m-0 p-0 text-[25px] font-bold">&nbsp;USA</h1>
                <h2 className="m-0 p-0 text-[20px]">&nbsp;1550+ Properties</h2>
            </div>
        </div></Link>
        <Link href={`/Hungary`}>
        <div className="featuredItem relative text-white overflow-hidden  h-[200px] cursor-pointer">
            <img src="hun.jpg" alt="" className='featuredImg w-full h-[150px] rounded-[10px] object-cover'/>
            <div className="featuredTitles absolute bottom-[50px]">
                <h1 className="m-0 p-0 text-[25px] font-bold">&nbsp;Hungary</h1>
                <h2 className="m-0 p-0 text-[20px]">&nbsp;750+ Properties</h2>
            </div>
        </div></Link>
        <Link href={`/India`}>
        <div className="featuredItem relative text-white overflow-hidden h-[200px] cursor-pointer">
            <img src="gate.jpg" alt="" className='featuredImg w-full h-[150px] rounded-[10px] object-cover'/>
            <div className="featuredTitles absolute bottom-[50px]">
                <h1 className="m-0 p-0 text-[25px] font-bold">&nbsp;India</h1>
                <h2 className="m-0 p-0 text-[20px]">&nbsp;15000+ Properties</h2>
            </div>
        </div></Link>
      </div>
    </div>
  )
}
