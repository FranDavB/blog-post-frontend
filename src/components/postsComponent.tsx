"use client"

import { Post } from "@/types/types"
import { ComponentType, useEffect, useState } from "react"
import fetchServices from "@/services/fetchServices";
import SideBarComponent from "./sideBar";
import ModalComponent from "./modal";
import { SocketClient } from "./socketClient";
import { ordenarPorFecha } from "@/services/fechasService";

export default function ListaPostsComponent() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [mostrarModal, setMostrarModal] = useState<boolean>(false);
  const [ComponenteMostrarModal, setComponenteMostrarModal] = useState<ComponentType | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsFetched: Post[] = await fetchServices.fetchObjects("posts");
        const postFetchedOrdenados: Post[] = ordenarPorFecha(postsFetched);

        setPosts(postFetchedOrdenados);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [])

  const handleOnCloseModal = () => {
    setMostrarModal(false);
  }

  const handleOnOpenModal = (Componente: ComponentType) => {
    setComponenteMostrarModal(() => Componente);
    setMostrarModal(true);
  };

  const handleUpdatedPosts = (nuevoPost: Post) => {
    setPosts((prevState) => {

      const updatedPosts: Post[] = [...prevState, nuevoPost]
      const updatedPostOrdenados = ordenarPorFecha(updatedPosts)

      return updatedPostOrdenados
    })
  }

  const acortarContenido = (contenido: string) => {
    const maxCaracteres: number = 100
    const contenidoRecortado = contenido.length > maxCaracteres ? `${contenido.substring(0, maxCaracteres)} ...` : `${contenido}`

    return contenidoRecortado
  }


  return (
    <>
      <ModalComponent isOpen={mostrarModal} onClose={handleOnCloseModal}>
        {ComponenteMostrarModal && <ComponenteMostrarModal />}
      </ModalComponent>
      <main className="w-full my-4 space-y-4 flex border p-4 rounded-lg border-gray-300">
        <section className="w-[25%] border-r border-gray-300">
          <SideBarComponent onChangeSearch={handleOnOpenModal} />
        </section>
        <section className="flex flex-col items-center w-[75%] h-[75dvh] overflow-auto">
          {
            posts && posts.map((post: Post, index: number) => (
              <div key={index} className="flex flex-col space-y-4 my-1 py-2 w-[80%] border-b border-gray-300 text-sm">
                <span className="font-bold">{post.nombre}</span>
                <span>{acortarContenido(post.contenido)}</span>
                <span>{post.autor?.nombre} {post.autor?.apellido}</span>
              </div>
            ))
          }
        </section>
      </main>
      <SocketClient actualizarPosts={handleUpdatedPosts} mostrarNotificaciones={true} />
    </>
  )
}