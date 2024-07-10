"use client"

import { BotonesMenu } from "@/types/types"
import { ComponentType, useState } from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { RiFileAddLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import PostForm from "./postForm";
import buscadorComponent from "./buscadorComponent";

export default function sideBarComponent({ onChangeSearch }: { onChangeSearch: (contenido: ComponentType) => void }) {

  const [botonActivo, setBotonActivo] = useState<number>(0)

  const botonesMenu: BotonesMenu[] = [
    {
      id: 0,
      icono: IoNewspaperOutline,
      texto: "Noticias",
      funcion: "modificarPestaña"
    },
    {
      id: 1,
      icono: RiFileAddLine,
      texto: "Publicar post",
      funcion: "agregarNoticia"
    },
    {
      id: 2,
      icono: IoIosSearch,
      texto: "Buscar",
      funcion: "buscarNoticia"
    },
  ]

  const handleBotonActivo = (funcionEjecutable: string, botonId: number) => {

    setBotonActivo((prevState) => botonId);

    switch (funcionEjecutable) {
      case "agregarNoticia":
        onChangeSearch(PostForm)
        break // se debe colocar el break porque sino se pasa a ejecutar el siguiente case

      case "buscarNoticia":
        onChangeSearch(buscadorComponent)
        break

      default:
        break;
    }
  }


  return (
    <main className="flex flex-col space-y-5 py-4">
      <span className="font-semibold">Menu</span>
      <div>
        {
          botonesMenu.map((boton: BotonesMenu) => (
            <button
              onClick={() => handleBotonActivo(boton.funcion, boton.id)}
              key={boton.id}
              className={`flex items-center space-x-2 w-full py-2 px-3
              ${botonActivo === boton.id ? "bg-pink-200" : ""}`}>
              <boton.icono size={30} className="p-1 rounded-lg shadow-lg border border-gray-300 bg-white" />
              <span>{boton.texto}</span>
            </button>
          ))
        }
      </div>
    </main>
  )
}