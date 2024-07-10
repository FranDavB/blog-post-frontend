import Image from "next/image"
import Link from "next/link"
import { AnimacionScroll } from "@/services/animacionesService"
export default function navBar() {

  return (
    <>
      <nav className="flex justify-between text-white font-bold">
        <Image src={"/FB blanco.png"} alt={"logo"} height={90} width={90} />
        <div className="flex space-x-5">
          <button className="hover:text-pink-500"><Link href={"#acercaDeSection"}>Acerca de</Link></button>
          <button className="hover:text-pink-500"><Link href={"#postsSection"}>Posts</Link></button>
          <button className="hover:text-pink-500">Ingresar</button>
        </div>
      </nav>
      <AnimacionScroll />
    </>
  )
}