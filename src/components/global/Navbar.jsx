import Link from "next/link"

function Navbar() {
  return (
    <div className="flex justify-between">
        <Link href={"/"}>HOME</Link>
        <Link href={"/portfolio"}>PORTFOLIO</Link>
        <Link href={"/about"}>ABOUT</Link>
        <Link href={"/contact"}>CONTACT</Link>
    </div>
  )
}

export default Navbar