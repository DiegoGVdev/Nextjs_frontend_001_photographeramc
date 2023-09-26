import Link from "next/link";
import { AiOutlineHome, AiOutlineCamera } from "react-icons/ai";
import { SlUser } from "react-icons/sl";
import { IoIosContact } from "react-icons/io";

function Navbar() {
  return (
    <div className="container mx-auto p-4">
      <div
        className="w-full bg-black/20 h-[48px] md:  backdrop-blur-2xl 
        rounded-full max-w-[300px] md:max-w-[440px] mx-auto flex
        justify-between items-center text-white/50 p-4 "
      >
        <Link
          className="cursor-pointer w-[55px] h-[55px] flex place-content-center 
        place-items-center hover:bg-violet-600 hover:rounded-full focus-nav"
          href={"/"}
        >
          <AiOutlineHome className="w-[25px] h-[25px]" />
        </Link>
        <Link
          className="cursor-pointer w-[60px] h-[60px] flex place-content-center place-items-center 
         hover:bg-violet-600 hover:rounded-full focus-nav"
          href={"/portfolio"}
        >
          <AiOutlineCamera className="w-[25px] h-[25px]" />
        </Link>
        <Link
          className="cursor-pointer w-[60px] h-[60px] flex place-content-center place-items-center 
         hover:bg-violet-600 hover:rounded-full focus-nav"
          href={"/about"}
        >
          <SlUser className="w-[25px] h-[25px]" />
        </Link>
        <Link
          className="cursor-pointer w-[60px] h-[60px] flex place-content-center place-items-center 
         hover:bg-violet-600 hover:rounded-full focus-nav"
          href={"/contact"}
        >
          <IoIosContact className="w-[25px] h-[25px]" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
