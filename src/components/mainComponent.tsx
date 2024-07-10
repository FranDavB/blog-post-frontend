import { AnimacionScroll } from "@/services/animacionesService";
import Link from "next/link";

export default function mainComponent() {
  return (
    <>
      <main className="flex text-white items-center">
        <div className="flex flex-col space-y-6">
          <h1 className="text-5xl font-bold">
            Proyecto B.L.O.G
          </h1>
          <p className="text-lg">
            Esto es un blog de prueba para backend NestJS. Se usará
            una API Rest y un websocket para mantener notificados a
            los usuarios
          </p>
          <div className="flex justify-evenly text-lg">
            <button
              className="button px-8 py-2 rounded-full bg-pink-600	hover:bg-white hover:text-pink-700">
              <Link href={"#postsSection"}>Posts</Link>
            </button>
            <button
              className="button px-8 py-2 rounded-full border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black">
              Más proyectos
            </button>
          </div>
        </div>
      </main>
      <AnimacionScroll />
    </>
  )
}