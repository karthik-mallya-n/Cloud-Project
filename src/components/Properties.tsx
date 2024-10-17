

export default function Property() {
  return (
    <div>
      <div className="pList w-full max-w-[1024px] flex justify-between gap-[20px]">
        <div className="pListItem overflow-hidden cursor-pointer">
            <img src="hotes.jpg" alt="" className="pListImg rounded-[10px] w-full h-[150px] overflow-hidden" />
            <div className="pListTitles">
                <h1 className="m-0 p-0 text-[24px] font-bold">Hotels</h1>
                <h2 className="m-0 p-0 font-[300] text-[18px]">250+ properties</h2>
            </div>
        </div>
        <div className="pListItem overflow-hidden cursor-pointer">
            <img src="resort.jpg" alt="" className="pListImg rounded-[10px] w-full h-[150px] overflow-hidden" />
            <div className="pListTitles">
                <h1 className="m-0 p-0 text-[24px] font-bold">Resorts</h1>
                <h2 className="m-0 p-0 font-[300] text-[18px]">200+ properties</h2>
            </div>
        </div>
        <div className="pListItem overflow-hidden cursor-pointer">
            <img src="villa.jpg" alt="" className="pListImg rounded-[10px] w-full h-[150px] overflow-hidden" />
            <div className="pListTitles">
                <h1 className="m-0 p-0 text-[24px] font-bold">Villas</h1>
                <h2 className="m-0 p-0 font-[300] text-[18px]">150+ properties</h2>
            </div>
        </div>
        <div className="pListItem overflow-hidden cursor-pointer">
            <img src="cabin.jpg" alt="" className="pListImg rounded-[10px] w-full h-[150px] overflow-hidden" />
            <div className="pListTitles">
                <h1 className="m-0 p-0 text-[24px] font-bold">Cabin</h1>
                <h2 className="m-0 p-0 font-[300] text-[18px]">50+ properties</h2>
            </div>
        </div>
      </div>
    </div>
  )
}
