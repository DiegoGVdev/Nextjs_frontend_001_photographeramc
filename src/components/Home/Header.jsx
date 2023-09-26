import Link from "next/link"
import logo_bg from "@/assets/logo/logo-letters-without-bg.png"
import Image from "next/image"

function Header() {
  return (
    <>
    <header>
        <div className="container mx-auto">
            <div className=" m-2 p-2 flex justify-between">
                <Link href={'/'}>
                  <Image width={400} src={logo_bg} alt="logo-letter" className="w-[96px]" />
                </Link>
                <button className="bg-slate-300 p-3 rounded-3xl   ">
                    Work with me
                </button>
            </div>

        </div>
    </header>
    </>
  )
}

export default Header