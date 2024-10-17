import Link from "next/link";
import { AuthShowcase } from "./Auth";
const Navbar = () => {
  return (
    <div className="navbar flex h-[50px] justify-center bg-[#003580]">
      <div className="nav-container flex w-full max-w-[1024px] items-center justify-between text-white">
        <Link href={`/`}><span className="logo font-[500] text-[25px]">HotelEase</span></Link>
        <div className="navItems text-[17px] mt-[6px]" >
          <AuthShowcase />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
