

const MailList = () => {
  return (
    <div className="mail w-full mt-[50px] bg-[#003580] text-white flex flex-col items-center gap-[20px] p-[50px]">
        <h1 className="mailTitle text-[24px] font-bold">
            Save Time,Save Money
        </h1>
        <span className="mailDesc">Sign Up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input className="w-[300px] h-[30px] p-[20px] text-black border-none mr-[10px]" type="text" placeholder='Your Email'/>
            <button className="h-[50px] bg-[#0071c2] text-white border-none p-3 rounded-[5px] cursor-pointer">Subscribe</button>
        </div>
    </div>
  )
}

export default MailList
