import { Seccion } from "@/types/types";
import { RiNextjsFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { SiSqlite } from "react-icons/si";

const secciones: Seccion[] = [
  {
    icono: RiNextjsFill,
    area: "FRONTEND",
    descripcion: "Interfaz sencilla con NextJS. Sistema de logueo y CRUD de posts"
  },
  {
    icono: SiNestjs,
    area: "BACKEND",
    descripcion: "API Rest y un Websocket para probar configuración NestJS"
  },
  {
    icono: SiSqlite,
    area: "BASE DE DATOS",
    descripcion: "Base de datos relacional mediante SQLite"
  }
]


export default function acercaDeComponent() {
  return (
    <main className="grid grid-cols-3 w-full justify-center">
      {secciones.map((seccion: any, index) => (
        <div key={index} className="flex flex-col items-center space-y-5 max-w-[30dvw] rounded-lg">
          <seccion.icono size={70} />
          <span className="font-semibold text-pink-600">{seccion.area}</span>
          <p className="text-center">{seccion.descripcion}</p>
        </div>
      ))}
    </main>
  )
}